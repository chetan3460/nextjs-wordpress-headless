import { fetchPageWithACF } from '@/lib/wordpress/client';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import BlockRenderer from '@/components/common/BlockRenderer';
import { generateBreadcrumbs } from '@/lib/utils/breadcrumbs';
import { generateMetadataFromYoast } from '@/lib/utils/yoast-seo';

export default async function LeadershipPage() {
  // Fetch the Leadership page data from WordPress
  const pageData = await fetchPageWithACF('leadership');

  if (!pageData) {
    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center">Page not found</h1>
        <p className="text-center mt-4">
          Please ensure a page with slug &quot;leadership&quot; exists in WordPress.
        </p>
      </main>
    );
  }

  // Get leadership panels (flexible content blocks)
  const leadershipPanels = pageData.acf?.leadership_panels || [];

  // Generate dynamic breadcrumbs
  const breadcrumbItems = generateBreadcrumbs('/our-company/leadership', pageData.title);

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Main content with flexible blocks */}
      <main className="site-main flex flex-col gap-12 lg:gap-y-24 mb-12 lg:mb-24 relative">
        {leadershipPanels.length > 0 ? (
          leadershipPanels.map((block, index) => (
            <BlockRenderer key={index} block={block} index={index} />
          ))
        ) : (
          <div className="container mx-auto py-20 text-center">
            <p>
              No blocks found. Add components to the &quot;Leadership Panels&quot; flexible content
              field in WordPress.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function generateMetadata() {
  const pageData = await fetchPageWithACF('leadership');

  return generateMetadataFromYoast(pageData, {
    title: 'Leadership - Our Company',
    description: 'Meet our leadership team.',
  });
}

// Revalidate every 60 seconds
// Revalidate every hour (static content, rarely changes)
export const revalidate = 3600;
