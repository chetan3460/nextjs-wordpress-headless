import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/css/style.css';
import { fetchHeaderData } from '@/lib/wordpress/client';

export const metadata = {
  title: 'Resplast - Leading Plastic Manufacturer',
  description: 'Resplast is a leading manufacturer of high-quality plastic products',
};

export default async function RootLayout({ children }) {
  // Fetch unified header data (Logo + Menu)
  const { menu_items, site_logo } = await fetchHeaderData();

  return (
    <html lang="en">
      <head></head>
      <body className="font-sans antialiased text-gray-900">
        <Header menuItems={menu_items} siteLogo={site_logo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
