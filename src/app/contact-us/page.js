import { fetchPageWithACF } from '@/lib/wordpress/client';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import BlockRenderer from '@/components/common/BlockRenderer';

export default async function ContactPage() {
    // 1. Fetch page data (try 'contact-us', fallback to 'contact')
    let pageData = await fetchPageWithACF('contact-us');

    if (!pageData) {
        pageData = await fetchPageWithACF('contact');
    }

    if (!pageData) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p>Could not find a page with slug "contact-us" or "contact" in WordPress.</p>
            </main>
        ); x
    }

    const { title, acf } = pageData;
    const blocks = acf?.contact_panels || acf?.contact_page_blocks || [];

    // 2. Breadcrumbs
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: title, link: null } // Current page
    ];

    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />

            <main className="site-main flex flex-col gap-12 lg:gap-y-24 mb-12 lg:mb-24 relative">
                {blocks.length > 0 ? (
                    blocks.map((block, index) => (
                        <BlockRenderer key={block.id || index} block={block} index={index} />
                    ))
                ) : (
                    <div className="container mx-auto py-20 text-center">
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-gray-500">
                            No content blocks found. Please add blocks to this page in WordPress.
                        </p>
                    </div>
                )}
            </main>
        </>
    );
}

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with us.',
};
