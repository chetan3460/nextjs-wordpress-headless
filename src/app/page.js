import { fetchPageWithACF } from '@/lib/wordpress/client';
import BlockRenderer from '@/components/common/BlockRenderer';
import { generateMetadataFromYoast } from '@/lib/utils/yoast-seo';

export async function generateMetadata() {
  const pageData = await fetchPageWithACF('home');

  return generateMetadataFromYoast(pageData, {
    title: 'Home - Resins & Plastics',
    description: 'Leading manufacturer of high-performance resin and plastic solutions.',
  });
}

export default async function HomePage() {
  // Fetch home page with ACF fields
  const pageData = await fetchPageWithACF('home');

  if (!pageData) {

    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">Home page not found</h1>
        <p className="text-center mt-4">Please ensure a page with slug &quot;home&quot; exists in WordPress.</p>
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
          <p>No blocks found. Add components to the &quot;Home Panels&quot; flexible content field in WordPress.</p>
        </div>
      )}
    </main>
  );
}

// Revalidate every 60 seconds
export const revalidate = 60;
