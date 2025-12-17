/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // Add your production WordPress domain here later
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Allow localhost images in development (bypasses private IP check)
    unoptimized: process.env.NODE_ENV === "development",
  },

  // Turbopack configuration
  turbopack: {
    root: "/Users/chetandhargalkar/Desktop/github/nextjs-wordpress-headless",
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
