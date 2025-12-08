import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || '';

export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Fetch data from WordPress GraphQL API
 * @param {string} query - GraphQL query string
 * @param {object} variables - Query variables
 * @returns {Promise<any>} GraphQL response data
 */
export async function fetchGraphQL(query, variables = {}) {
    try {
        const data = await graphQLClient.request(query, variables);
        return data;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw error;
    }
}

/**
 * Fetch data from WordPress REST API
 * @param {string} endpoint - REST API endpoint path
 * @returns {Promise<any>} REST API response data
 */
export async function fetchREST(endpoint) {
    const baseUrl = process.env.WORDPRESS_REST_ENDPOINT || '';
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
        next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
        throw new Error(`REST API error: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Fetch page with ACF fields via REST API
 * @param {string} slug - Page slug (e.g., 'home', 'about')
 * @returns {Promise<object>} Page data with ACF fields
 */
export async function fetchPageWithACF(slug) {
    try {
        console.log(`[fetchPageWithACF] Fetching page with slug: ${slug}`);

        // 1. Try requested slug with _embed
        let data = await fetchREST(`/wp/v2/pages?slug=${slug}&_embed`);

        // 2. If not found, try common homepage slugs
        if ((!data || data.length === 0) && slug === 'home') {
            console.log('[fetchPageWithACF] "home" slug not found, trying alternatives...');
            const alts = ['front-page', 'homepage', 'main'];
            for (const alt of alts) {
                console.log(`[fetchPageWithACF] Trying slug: ${alt}`);
                data = await fetchREST(`/wp/v2/pages?slug=${alt}&_embed`);
                if (data && data.length > 0) break;
            }
        }

        // 3. Last resort: Try fetching "Home" by title/search if slug failed (or specific ID 80 we saw in debug)
        if ((!data || data.length === 0) && slug === 'home') {
            console.log('[fetchPageWithACF] Still not found. Trying without _embed or known ID...');
            // Try ID 80 directly (from previous debug findings)
            try {
                const page80 = await fetchREST('/wp/v2/pages/80?_embed');
                if (page80 && page80.id) {
                    console.log('[fetchPageWithACF] Found page by ID 80');
                    data = [page80];
                }
            } catch (e) { }
        }

        if (!data || data.length === 0) {
            console.warn(`[fetchPageWithACF] Page not found for slug: ${slug}`);
            return null;
        }

        const page = data[0];
        console.log(`[fetchPageWithACF] Page found: ${page.title?.rendered} (ID: ${page.id})`);

        // Process ACF fields to convert image IDs to full image objects
        const acf = await processACFImages(page.acf || {});

        return {
            id: page.id,
            title: page.title.rendered,
            content: page.content.rendered,
            acf: acf,
            featuredImage: page._embedded?.['wp:featuredmedia']?.[0],
            slug: page.slug
        };
    } catch (error) {
        console.error('Error fetching page with ACF:', error);
        return null;
    }
}

/**
 * Process ACF fields to convert image IDs to full image objects
 * @param {object} acf - ACF fields object
 * @returns {Promise<object>} Processed ACF fields with full image data
 */
async function processACFImages(acf) {
    // If home_panels exists, process each panel
    if (acf.home_panels && Array.isArray(acf.home_panels)) {
        const processedPanels = await Promise.all(
            acf.home_panels.map(async (panel) => {
                const processedPanel = { ...panel };

                // Process banner_slider images (hero_block)
                if (panel.banner_slider && Array.isArray(panel.banner_slider)) {
                    processedPanel.banner_slider = await Promise.all(
                        panel.banner_slider.map(async (slide) => {
                            if (slide.banner_images && typeof slide.banner_images === 'number') {
                                const image = await fetchMediaById(slide.banner_images);
                                return { ...slide, banner_images: image };
                            }
                            return slide;
                        })
                    );
                }

                // Process select_news (hero_block spotlight)
                if (panel.select_news && Array.isArray(panel.select_news)) {
                    processedPanel.select_news = await Promise.all(
                        panel.select_news.map(async (newsId) => {
                            if (typeof newsId === 'number') {
                                return await fetchPostById(newsId);
                            }
                            return newsId;
                        })
                    );
                    // Filter out any null results
                    processedPanel.select_news = processedPanel.select_news.filter(Boolean);
                }

                // Process other image fields as needed
                // Add more image field processing here for other blocks

                return processedPanel;
            })
        );

        return { ...acf, home_panels: processedPanels };
    }

    return acf;
}

/**
 * Fetch media by ID
 * @param {number} mediaId - WordPress media ID
 * @returns {Promise<object>} Media object with URL, alt, etc.
 */
async function fetchMediaById(mediaId) {
    try {
        const media = await fetchREST(`/wp/v2/media/${mediaId}`);
        return {
            id: media.id,
            url: media.source_url,
            alt: media.alt_text || '',
            width: media.media_details?.width,
            height: media.media_details?.height,
            sizes: media.media_details?.sizes || {}
        };
    } catch (error) {
        console.error(`Error fetching media ${mediaId}:`, error);
        return null;
    }
}

/**
 * Fetch post by ID (for news/posts)
 * @param {number} postId - WordPress post ID
 * @returns {Promise<object>} Post object with title, URL, categories, etc.
 */
async function fetchPostById(postId) {
    try {
        // Try fetching from posts endpoint first
        let post;
        try {
            post = await fetchREST(`/wp/v2/posts/${postId}`);
        } catch (postsError) {
            // If posts fails, try news custom post type
            try {
                post = await fetchREST(`/wp/v2/news/${postId}`);
            } catch (newsError) {
                console.error(`Error fetching post ${postId} from both posts and news:`, newsError);
                return null;
            }
        }

        // Fetch categories if they exist
        let categories = [];
        if (post.categories && post.categories.length > 0) {
            categories = await Promise.all(
                post.categories.map(async (catId) => {
                    try {
                        const cat = await fetchREST(`/wp/v2/categories/${catId}`);
                        return { id: cat.id, name: cat.name, slug: cat.slug };
                    } catch {
                        return null;
                    }
                })
            );
            categories = categories.filter(Boolean);
        }

        // Also try news_category taxonomy if categories is empty
        if (categories.length === 0 && post.news_category && post.news_category.length > 0) {
            categories = await Promise.all(
                post.news_category.map(async (catId) => {
                    try {
                        const cat = await fetchREST(`/wp/v2/news_category/${catId}`);
                        return { id: cat.id, name: cat.name, slug: cat.slug };
                    } catch {
                        return null;
                    }
                })
            );
            categories = categories.filter(Boolean);
        }

        return {
            id: post.id,
            title: post.title?.rendered || '',
            url: post.link || '',
            excerpt: post.excerpt?.rendered || '',
            date: post.date,
            categories: categories
        };
    } catch (error) {
        console.error(`Error fetching post ${postId}:`, error);
        return null;
    }
}


/**
 * Fetch Primary Menu via REST API
 * Tries multiple common endpoints for menus
 */
export async function fetchMenu() {
    try {
        // Step 1: Fetch all menus to find the 'primary' or 'main' menu ID
        // Standard WP REST API endpoint for menus
        const menus = await fetchREST('/wp/v2/menus');

        // Find menu with slug 'primary' or 'main' or 'header'
        // Adjust these slugs based on what you see in your WP Admin -> Appearance -> Menus
        const primaryMenu = menus.find(m =>
            m.slug === 'primary' ||
            m.slug === 'main' ||
            m.slug === 'main-menu' ||
            m.slug === 'header' ||
            m.slug === 'primary-menu' ||
            m.name.toLowerCase().includes('primary') ||
            m.name.toLowerCase().includes('main')
        ) || menus[0]; // Fallback to first menu if no specific match

        if (!primaryMenu) {
            console.warn('[fetchMenu] No menus found in WordPress.');
            return [];
        }

        const menuId = primaryMenu.id;
        console.log(`[fetchMenu] Found menu ID: ${menuId} for slug: ${primaryMenu.slug}`);

        // Step 2: Fetch menu items using the resolved ID
        // Note: 'menus' parameter in Standard REST API expects an ID
        const items = await fetchREST(`/wp/v2/menu-items?menus=${menuId}&per_page=100`);

        if (Array.isArray(items)) {
            return items.map(item => ({
                id: item.id,
                label: item.title?.rendered || item.title,
                url: item.url,
                parentId: item.parent || item.menu_item_parent || 0,
                cssClasses: item.classes || [],
                description: item.description || '',
                target: item.target || '',
                title: item.attr_title || ''
            }));
        }

        return [];

    } catch (error) {
        console.error('Error fetching menu via REST:', error);
        return [];
    }
}

/**
 * Fetch a single post by slug via REST API
 */
export async function fetchPostBySlug(slug) {
    try {
        const posts = await fetchREST(`/wp/v2/posts?slug=${slug}&_embed`);

        if (posts && posts.length > 0) {
            const post = posts[0];

            // Normalize data
            return {
                id: post.id,
                title: post.title.rendered,
                content: post.content.rendered,
                date: post.date,
                slug: post.slug,
                featuredImage: post._embedded?.['wp:featuredmedia']?.[0] ? {
                    node: {
                        sourceUrl: post._embedded['wp:featuredmedia'][0].source_url,
                        altText: post._embedded['wp:featuredmedia'][0].alt_text
                    }
                } : null,
                categories: post._embedded?.['wp:term']?.[0] ? {
                    nodes: post._embedded['wp:term'][0].map(term => ({
                        name: term.name,
                        slug: term.slug
                    }))
                } : { nodes: [] }
            };
        }
        return null;
    } catch (error) {
        console.error(`Error fetching post by slug ${slug}:`, error);
        return null;
    }
}

/**
 * Fetch all posts (for static paths) via REST API
 */
export async function getAllPosts(limit = 10) {
    try {
        const posts = await fetchREST(`/wp/v2/posts?per_page=${limit}&_fields=slug`);
        return {
            posts: {
                nodes: posts.map(post => ({ slug: post.slug }))
            }
        };
    } catch (error) {
        console.error('Error fetching all posts:', error);
        return { posts: { nodes: [] } };
    }
}

/**
 * Fetch latest news posts (with full data) via REST API
 */
export async function getLatestNews(limit = 10) {
    try {
        const posts = await fetchREST(`/wp/v2/posts?per_page=${limit}&_embed`);
        return posts.map(post => ({
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            excerpt: post.excerpt.rendered,
            date: post.date,
            featuredImage: post._embedded?.['wp:featuredmedia']?.[0] ? {
                node: {
                    sourceUrl: post._embedded['wp:featuredmedia'][0].source_url,
                    altText: post._embedded['wp:featuredmedia'][0].alt_text
                }
            } : null
        }));
    } catch (error) {
        console.error('Error fetching latest news:', error);
        return [];
    }
}

/**
 * Fetch Site Logo from WordPress Settings
 */
export async function fetchSiteLogo() {
    try {
        // Fetch site settings to get logo ID
        // Note: This endpoint might require auth for strict setups, but often public for basic fields
        const settings = await fetchREST('/wp/v2/settings');

        if (settings.site_logo) {
            const media = await fetchMediaById(settings.site_logo);
            return media ? media.url : null;
        }
        return null;
    } catch (error) {
        // Silently fail if settings are restricted
        return null;
    }
}

/**
 * Fetch Header Data (Menu + Logo) from custom endpoint
 * Use this to avoid Unauthorized errors with standard endpoints
 */
export async function fetchHeaderData() {
    try {
        const data = await fetchREST('/nextjs/v1/header');
        return data || { site_logo: null, menu_items: [] };
    } catch (error) {
        console.error('Error fetching header data:', error);
        return { site_logo: null, menu_items: [] };
    }
}
