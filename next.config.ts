/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      // Add your production WordPress domain here later
    ],
    formats: ["image/avif", "image/webp"],
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
