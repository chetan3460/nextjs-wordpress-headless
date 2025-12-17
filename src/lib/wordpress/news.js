/**
 * WordPress API functions for News & Updates
 */

const WORDPRESS_BASE_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost/nextjs-wp';

/**
 * Fetch paginated posts with optional filtering, sorting, and search
 * @param {number} page - Page number (1-indexed)
 * @param {string|number} categoryId - Category ID or 'all'
 * @param {string} order - 'desc' (latest) or 'asc' (oldest)
 * @param {string} search - Search query
 * @param {number} perPage - Posts per page
 */
export async function fetchNewsPosts(page = 1, categoryId = 'all', order = 'desc', search = '', perPage = 6) {
    try {
        const params = new URLSearchParams({
            per_page: perPage.toString(),
            page: page.toString(),
            orderby: 'date',
            order: order,
            _embed: 'true', // Include featured media and categories
        });

        // Add category filter if not 'all'
        if (categoryId !== 'all') {
            params.append('news_category', categoryId.toString()); // Use news_category taxonomy
        }

        // Add search query if provided
        if (search) {
            params.append('search', search);
        }

        // Try news custom post type first, fallback to posts
        const url = `${WORDPRESS_BASE_URL}/wp-json/wp/v2/news?${params.toString()}`;

        const response = await fetch(url, {
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        // Return empty if posts endpoint doesn't exist
        if (response.status === 404) {
            console.warn('[fetchNewsPosts] Posts endpoint not found (404). Make sure WordPress REST API is enabled.');
            return {
                posts: [],
                hasMore: false,
                totalPages: 0,
                totalPosts: 0,
            };
        }

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const posts = await response.json();
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
        const totalPosts = parseInt(response.headers.get('X-WP-Total') || '0');



        return {
            posts: posts.map(transformPost),
            hasMore: page < totalPages,
            totalPages,
            totalPosts,
        };
    } catch (error) {
        console.error('Error fetching news posts:', error);
        return {
            posts: [],
            hasMore: false,
            totalPages: 0,
            totalPosts: 0,
        };
    }
}

/**
 * Fetch all categories
 */
export async function fetchNewsCategories() {
    try {
        // Use news_category taxonomy for news custom post type
        const url = `${WORDPRESS_BASE_URL}/wp-json/wp/v2/news_category?per_page=100&orderby=name&order=asc`;
        const response = await fetch(url, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        // Return empty array if categories endpoint doesn't exist
        if (response.status === 404) {
            console.warn('Categories endpoint not found, returning empty array');
            return [];
        }

        if (!response.ok) {
            throw new Error(`Failed to fetch categories: ${response.status}`);
        }

        const categories = await response.json();

        return categories.map(cat => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
            count: cat.count,
        }));
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

/**
 * Transform WordPress post to simplified format
 */
function transformPost(post) {
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const categories = post._embedded?.['wp:term']?.[0] || [];
    const primaryCategory = categories[0];

    // Collect all content for read time calculation
    let allContent = post.content?.rendered || '';

    // Add content from flexible blocks if available
    if (post.acf?.news_panels && Array.isArray(post.acf.news_panels)) {
        post.acf.news_panels.forEach(block => {
            if (block.content) {
                allContent += ' ' + block.content;
            }
        });
    }

    return {
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        slug: post.slug,
        date: post.date,
        featuredImage: featuredMedia ? {
            url: featuredMedia.source_url,
            alt: featuredMedia.alt_text || post.title.rendered,
            width: featuredMedia.media_details?.width || 800,
            height: featuredMedia.media_details?.height || 600,
        } : null,
        category: primaryCategory ? {
            id: primaryCategory.id,
            name: primaryCategory.name,
            slug: primaryCategory.slug,
        } : null,
        readTime: calculateReadTime(allContent),
    };
}

/**
 * Calculate estimated read time from HTML content
 * @param {string} html - HTML content
 * @returns {number} - Read time in minutes
 */
function calculateReadTime(html) {
    // Strip HTML tags
    const text = html.replace(/<[^>]*>/g, '');

    // Count words
    const wordCount = text.trim().split(/\s+/).length;

    // Average reading speed: 200 words per minute
    const readTime = Math.ceil(wordCount / 200);

    return readTime || 1; // Minimum 1 minute
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date (e.g., "Jan 15, 2024")
 */
export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}
