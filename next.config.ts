/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: 'staging.screenroot.com',
        pathname: '/nexuspresscms/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Disable optimization in development only
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Remove Turbopack root for Vercel deployment
  ...(process.env.VERCEL
    ? {}
    : {
        turbopack: {
          root: '/Users/chetandhargalkar/Desktop/github/nextjs-wordpress-headless',
        },
      }),

  // Update rewrites for production
  async rewrites() {
    const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost/nextjs-wp';
    return [
      {
        source: '/api/wordpress/:path*',
        destination: `${wpUrl}/wp-json/:path*`,
      },
    ];
  },
};

export default nextConfig;
