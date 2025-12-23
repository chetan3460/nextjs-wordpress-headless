import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Analytics from '@/components/common/Analytics';
import '@/app/css/style.css';
import { fetchHeaderData, fetchFooterData } from '@/lib/wordpress/client';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/utils/structured-data';

export const metadata = {
  title: 'Resplast - Leading Plastic Manufacturer',
  description: 'Resplast is a leading manufacturer of high-quality plastic products',
  manifest: '/manifest.json',
};

export default async function RootLayout({ children }) {
  // Fetch unified header data (Logo + Menu)
  const { menu_items, site_logo } = await fetchHeaderData();

  // Fetch footer data from WordPress ACF options
  const footerData = await fetchFooterData();

  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-instrument antialiased text-gray-900">
        <Analytics />
        <Header menuItems={menu_items} siteLogo={site_logo} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
