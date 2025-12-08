/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "images.unsplash.com",
      "cdn-icons-png.flaticon.com",
      "placehold.co",
      // Add your production WordPress domain here later
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Rewrites for API proxy (optional)
  async rewrites() {
    return [
      {
        source: "/api/wordpress/:path*",
        destination: "http://localhost/nextjs-wp/wp-json/:path*",
      },
    ];
  },
};

export default nextConfig;
