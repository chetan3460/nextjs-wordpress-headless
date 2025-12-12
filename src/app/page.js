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
import GetInTouchBlock from '@/components/blocks/common/GetInTouchBlock';

// Helper component to render blocks based on layout name
// This matches the logic in [slug]/page.js for consistency
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
    case 'get_in_touch_block':
      return <GetInTouchBlock key={index} data={block} />;
    default:
      console.warn(`Unknown block type: ${block.acf_fc_layout}`);
      return null;
  }
};

export default async function HomePage() {
  // Fetch home page with ACF fields
  const pageData = await fetchPageWithACF('home');

  if (!pageData) {

    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">Home page not found</h1>
        <p className="text-center mt-4">Please ensure a page with slug "home" exists in WordPress.</p>
      </main>
    );
  }

  // Get home panels (flexible content blocks)
  const homePanels = pageData.acf.home_panels || [];

  return (
    <main className="site-main flex flex-col gap-12 lg:gap-y-24 mb-12 lg:mb-24 relative">
      {/* 
        Render blocks dynamically based on WordPress order 
        This allows you to reorder blocks in WP Admin and see changes reflected here.
      */}
      {homePanels.length > 0 ? (
        homePanels.map((block, index) => (
          <BlockRenderer key={index} block={block} index={index} />
        ))
      ) : (
        <div className="container mx-auto py-20 text-center">
          <p>No blocks found. Add components to the "Home Panels" flexible content field in WordPress.</p>
        </div>
      )}
    </main>
  );
}

// Revalidate every 60 seconds
export const revalidate = 60;
