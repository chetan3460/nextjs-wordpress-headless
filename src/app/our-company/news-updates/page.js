import { fetchNewsPosts, fetchNewsCategories } from '@/lib/wordpress/news';
import { fetchPageWithACF } from '@/lib/wordpress/client';
import NewsListingBlock from '@/components/blocks/news/NewsListingBlock';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata = {
    title: 'News & Updates | Driving what\'s next',
    description: 'Stay updated with our latest news, insights, and industry developments',
};

export default async function NewsUpdatesPage() {
    // Fetch initial data on server
    const [postsData, categories, pageData] = await Promise.all([
        fetchNewsPosts(1, 'all', 'desc', 6),
        fetchNewsCategories(),
        fetchPageWithACF('news-updates'), // Fetch page ACF fields
    ]);

    // Get section title and description from ACF or use defaults
    const sectionTitle = pageData?.acf?.news_listing_title || "Driving what's next";
    // const sectionDescription = pageData?.acf?.news_listing_description || "A look at our innovations, research milestones, and events that keep us ahead in a changing world.";

    return (
        <main className='site-main flex flex-col gap-12 lg:gap-y-24 mb-12 lg:mb-24 relative'>
            {/* Breadcrumbs */}
            <Breadcrumbs />

            {/* News Listing with Client-side features */}
            <NewsListingBlock
                initialPosts={postsData.posts}
                initialCategories={categories}
                initialHasMore={postsData.hasMore}
                initialTotal={postsData.totalPosts}
                data={{
                    section_title: sectionTitle,
                    posts_per_page: 6,
                    show_filters: true,
                    show_search: true
                }}
            />
        </main>
    );
}

export const revalidate = 60; // Revalidate every 60 seconds
