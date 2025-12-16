import { fetchPageWithACF } from '@/lib/wordpress/client';
import Breadcrumbs from '@/components/common/Breadcrumbs';

// Import block components
import GlobalBannerBlock from '@/components/blocks/common/GlobalBannerBlock';
import FeatureBlock from '@/components/blocks/common/FeatureBlock';
import GetInTouchBlock from '@/components/blocks/common/GetInTouchBlock';
import StatsBlock from '@/components/blocks/home/StatsBlock';
import CertificateBlock from '@/components/blocks/about/CertificateBlock';
// Add more block imports as needed

// Block renderer - matches homepage pattern
const BlockRenderer = ({ block, index }) => {
    if (block.hide_block) return null;

    switch (block.acf_fc_layout) {
        case 'global_banner_block':
            return <GlobalBannerBlock key={index} data={block} />;
        case 'feature_block':
            return <FeatureBlock key={index} data={block} />;
        case 'home_stats_block':
            return <StatsBlock key={index} data={block} variant="about" />;
        case 'certificate_block':
            return <CertificateBlock key={index} data={block} />;
        case 'get_in_touch_block':
            return <GetInTouchBlock key={index} data={block} />;
        // Add more block types as needed
        default:
            console.warn(`Unknown block type: ${block.acf_fc_layout}`);
            return null;
    }
};

export default async function AboutUsPage() {
    // Fetch the About Us page data from WordPress
    const pageData = await fetchPageWithACF('about-us');

    if (!pageData) {
        return (
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold text-center">Page not found</h1>
                <p className="text-center mt-4">
                    Please ensure a page with slug "about-us" exists in WordPress.
                </p>
            </main>
        );
    }

    // Get about panels (flexible content blocks)
    const aboutPanels = pageData.acf?.about_panels || [];

    // Auto-generate breadcrumbs from URL path
    const pathname = '/our-company/about-us';
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
                {aboutPanels.length > 0 ? (
                    aboutPanels.map((block, index) => (
                        <BlockRenderer key={index} block={block} index={index} />
                    ))
                ) : (
                    <div className="container mx-auto py-20 text-center">
                        <p>
                            No blocks found. Add components to the "About Panels" flexible
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
