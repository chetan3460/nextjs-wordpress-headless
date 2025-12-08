import HeroBlock from '@/components/blocks/HeroBlock';
import FeatureBlock from '@/components/blocks/FeatureBlock';
import StatsBlock from '@/components/blocks/StatsBlock';
import ClientBlock from '@/components/blocks/ClientBlock';
import ProductListingBlock from '@/components/blocks/ProductListingBlock';
import ImageSliderBlock from '@/components/blocks/ImageSliderBlock';
import TabBlock from '@/components/blocks/TabBlock';
import LatestNewsBlock from '@/components/blocks/LatestNewsBlock';
import { fetchPageWithACF } from '@/lib/wordpress/client';

export default async function HomePage() {
  // Fetch home page with ACF fields
  const pageData = await fetchPageWithACF('home');

  if (!pageData) {
    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">Home page not found</h1>
      </main>
    );
  }

  // Get home panels (flexible content blocks)
  const homePanels = pageData.acf.home_panels || [];

  // Organize blocks by type
  const heroBlock = homePanels.find(panel => panel.acf_fc_layout === 'hero_block');
  const statsBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_stats_block');
  const tabBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_tab_block');
  const featuresBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_features_block');
  const imageSliderBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_image_slider_block');
  const productListingBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_product_listing_block');
  const clientBlock = homePanels.find(panel => panel.acf_fc_layout === 'home_client_block');
  const latestNewsBlock = homePanels.find(panel => panel.acf_fc_layout === 'latest_news');

  return (
    <main>
      {/* 1. Hero Block (Slider + Spotlight) */}
      {heroBlock && !heroBlock.hide_block && (
        <HeroBlock data={heroBlock} />
      )}

      {/* 2. Feature Block (Left Content + Right Grid) */}
      {featuresBlock && !featuresBlock.hide_block && (
        <FeatureBlock data={featuresBlock} />
      )}

      {/* 3. Stats Counter Block */}
      {statsBlock && !statsBlock.hide_block && (
        <StatsBlock data={statsBlock} />
      )}

      {/* 4. Client Testimonials Block */}
      {clientBlock && !clientBlock.hide_block && (
        <ClientBlock data={clientBlock} />
      )}

      {/* 5. Product Listing Block */}
      {productListingBlock && !productListingBlock.hide_block && (
        <ProductListingBlock data={productListingBlock} />
      )}

      {/* 6. Image Slider Block */}
      {imageSliderBlock && !imageSliderBlock.hide_block && (
        <ImageSliderBlock data={imageSliderBlock} />
      )}

      {/* 7. Tab Block (Industry Applications) */}
      {tabBlock && !tabBlock.hide_block && (
        <TabBlock data={tabBlock} />
      )}

      {/* 8. Latest News Block */}
      {latestNewsBlock && !latestNewsBlock.hide_block && (
        <LatestNewsBlock data={latestNewsBlock} />
      )}

      {/* Debug: Show all blocks */}
      {process.env.NODE_ENV === 'development' && (
        <div className="container mx-auto px-4 py-8 bg-gray-100 mt-8">
          <h2 className="text-2xl font-bold mb-4">Debug: ACF Blocks</h2>
          <pre className="bg-white p-4 rounded overflow-auto">
            {JSON.stringify(homePanels.map(p => ({
              type: p.acf_fc_layout,
              hidden: p.hide_block
            })), null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}

export const revalidate = 60;
