import { notFound } from 'next/navigation';
import { fetchPageWithACF } from '@/lib/wordpress/client';

// Import all block components
import HeroBlock from '@/components/blocks/home/HeroBlock';
import ImageSliderBlock from '@/components/blocks/home/ImageSliderBlock';
import ProductListingBlock from '@/components/blocks/home/ProductListingBlock';
import StatsBlock from '@/components/blocks/home/StatsBlock';
import ClientBlock from '@/components/blocks/home/ClientBlock';
import TabBlock from '@/components/blocks/home/TabBlock';
import LatestNewsBlock from '@/components/blocks/home/LatestNewsBlock';

import FeatureBlock from '@/components/blocks/common/FeatureBlock';

// 1. Metadata Generation
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const page = await fetchPageWithACF(slug);

    if (!page) return { title: 'Page Not Found' };

    return {
        title: `${page.title} - Resplast`,
        description: 'Resplast Official Website',
    };
}

// 2. Block Renderer Helper
const BlockRenderer = ({ block, index }) => {
    if (block.hide_block) return null;

    switch (block.acf_fc_layout) {
        case 'hero_block':
            return <HeroBlock key={index} data={block} />;
        case 'home_features_block':
            return <FeatureBlock key={index} data={block} />;
        case 'home_stats_block':
            return <StatsBlock key={index} data={block} />;
        case 'home_client_block':
            return <ClientBlock key={index} data={block} />;
        case 'home_product_listing_block':
            return <ProductListingBlock key={index} data={block} />;
        case 'home_image_slider_block':
            return <ImageSliderBlock key={index} data={block} />;
        case 'home_tab_block':
            return <TabBlock key={index} data={block} />;
        case 'latest_news':
            return <LatestNewsBlock key={index} data={block} />;
        default:
            console.warn(`Unknown block type: ${block.acf_fc_layout}`);
            return null;
    }
};

// 3. Main Page Component
export default async function DynamicPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Fetch Page Data
    const page = await fetchPageWithACF(slug);

    if (!page) {
        notFound();
    }

    // Attempt to find the flexible content field
    // Note: Adjust 'home_panels' if your inner pages use a different field name (e.g., 'page_blocks', 'content')
    const blocks = page.acf?.home_panels || page.acf?.flexible_content || [];

    return (
        <>
            {/* If no blocks, show title/content fallback */}
            {blocks.length === 0 && (
                <div className="container-fluid py-16 xl:px-24 lg:px-14 px-5">
                    <h1 className="text-4xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: page.title }} />
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: page.content }} />
                </div>
            )}

            {/* Render Flexible Content Blocks */}
            {blocks.map((block, index) => (
                <BlockRenderer key={index} block={block} index={index} />
            ))}
        </>
    );
}
