import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/css/style.css';
import { fetchHeaderData, fetchFooterData } from '@/lib/wordpress/client';

export const metadata = {
  title: 'Resplast - Leading Plastic Manufacturer',
  description: 'Resplast is a leading manufacturer of high-quality plastic products',
};

export default async function RootLayout({ children }) {
  // Fetch unified header data (Logo + Menu)
  const { menu_items, site_logo } = await fetchHeaderData();

  // Fetch footer data from WordPress ACF options
  const footerData = await fetchFooterData();

  return (
    <html lang="en">
      <head></head>
      <body className="font-instrument antialiased text-gray-900">
        <Header menuItems={menu_items} siteLogo={site_logo} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
