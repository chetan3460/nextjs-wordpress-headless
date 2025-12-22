import { fetchPageWithACF } from '@/lib/wordpress/client';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import BlockRenderer from '@/components/common/BlockRenderer';

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

    // Auto-generate breadcrumbs from URL path
    const pathname = '/our-company/leadership';
    const pathSegments = pathname.split('/').filter(Boolean);

    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        ...pathSegments.map((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Last item has no link (current page)
            const isLast = index === pathSegments.length - 1;
            return { label, link: isLast ? null : path };
        }),
    ];

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
                            No blocks found. Add components to the &quot;Leadership Panels&quot; flexible
                            content field in WordPress.
                        </p>
                    </div>
                )}
            </main>
        </>
    );
}

export const metadata = {
    title: 'Leadership - Our Company',
    description: 'Meet our leadership team and learn about our vision.',
};

// Revalidate every 60 seconds
export const revalidate = 60;
