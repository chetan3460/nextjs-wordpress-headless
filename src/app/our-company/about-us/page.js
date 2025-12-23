import { fetchPageWithACF } from '@/lib/wordpress/client';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import BlockRenderer from '@/components/common/BlockRenderer';
import { generateBreadcrumbs } from '@/lib/utils/breadcrumbs';

export default async function AboutUsPage() {
    // Fetch the About Us page data from WordPress
    const pageData = await fetchPageWithACF('about-us');

    if (!pageData) {
        return (
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center">Page not found</h1>
                <p className="text-center mt-4">
                    Please ensure a page with slug &quot;about-us&quot; exists in WordPress.
                </p>
            </main>
        );
    }

    // Get about panels (flexible content blocks)
    const aboutPanels = pageData.acf?.about_panels || [];

    // Generate dynamic breadcrumbs
    const breadcrumbItems = generateBreadcrumbs('/our-company/about-us', pageData.title);

    return (
        <>
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} />

            {/* Main content with flexible blocks */}
            <main className="site-main flex flex-col gap-12 lg:gap-y-24 mb-12 lg:mb-24 relative">
                {aboutPanels.length > 0 ? (
                    aboutPanels.map((block, index) => (
                        <BlockRenderer key={index} block={block} index={index} />
                    ))
                ) : (
                    <div className="container mx-auto py-20 text-center">
                        <p>
                            No blocks found. Add components to the &quot;About Panels&quot; flexible
                            content field in WordPress.
                        </p>
                    </div>
                )}
            </main>
        </>
    );
}

export const metadata = {
    title: 'About Us - Our Company',
    description: 'Learn about our company, mission, and values.',
};

// Revalidate every 60 seconds
export const revalidate = 60;
