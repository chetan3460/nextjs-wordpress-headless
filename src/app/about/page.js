import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container-custom py-16">
            <h1 className="text-4xl font-bold mb-8">About Resplast</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Text Section */}
                <div>
                    <p className="text-lg text-gray-700 mb-6">
                        Resplast has been a leader in the plastic manufacturing industry for over 25 years.
                        We are dedicated to providing high-quality, sustainable solutions for our clients.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        To deliver innovative plastic products that improve lives while minimizing environmental impact.
                    </p>

                    <h2 className="text-2xl font-bold mb-4 mt-8">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Modern Manufacturing Facilities</li>
                        <li>Experienced Engineering Team</li>
                        <li>Commitment to Quality (ISO Certified)</li>
                        <li>Competitive Pricing</li>
                    </ul>
                </div>

                {/* Image Section (Placeholder) */}
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">About Us Image</span>
                </div>
            </div>
        </div>
    );
}

export const metadata = {
    title: 'About Us - Resplast',
    description: 'Learn about Resplast history and mission.',
};
