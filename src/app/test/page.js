import { fetchPageWithACF } from '@/lib/wordpress/client';

export default async function TestPage() {
    const pageData = await fetchPageWithACF('home');

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">WordPress Data Test</h1>

            <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-bold mb-2">Raw Data:</h2>
                <pre className="text-xs overflow-auto">
                    {JSON.stringify(pageData, null, 2)}
                </pre>
            </div>

            {pageData?.acf?.home_panels && (
                <div className="mt-4 bg-blue-100 p-4 rounded">
                    <h2 className="text-xl font-bold mb-2">Hero Block Data:</h2>
                    <pre className="text-xs overflow-auto">
                        {JSON.stringify(
                            pageData.acf.home_panels.find(p => p.acf_fc_layout === 'hero_block'),
                            null,
                            2
                        )}
                    </pre>
                </div>
            )}
        </div>
    );
}
