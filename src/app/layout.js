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
      <head>
        <link rel="stylesheet" href="/assets/css/formidableforms.css" />
        <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.frm_js = {
                ajax_url: "${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-admin/admin-ajax.php",
                images_url: "${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/plugins/formidable/images",
                loading: "Loading...",
                nonce: "",
                ajaxurl: "${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-admin/admin-ajax.php"
              };
            `
          }}
        />
        <script src="/assets/js/formidable.min.js" defer></script>
      </head>
      <body className="font-sans antialiased text-gray-900">
        <Header menuItems={menu_items} siteLogo={site_logo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
