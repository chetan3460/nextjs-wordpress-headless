/**
 * Structured Data (JSON-LD) Utilities
 * Generates schema.org structured data for better SEO
 */

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Resins & Plastics Ltd.',
    alternateName: 'RPL',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}/logo.png`,
    description: 'Leading manufacturer and exporter of synthetic resins',
    foundingDate: '1971',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    sameAs: [
      // Add social media URLs here
    ],
  };
}

/**
 * Generate Article schema for news posts
 */
export function generateArticleSchema(post) {
  if (!post) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title?.rendered || post.title,
    description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
    image: post.featuredImage?.node?.sourceUrl || post.featured_image,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Organization',
      name: 'Resins & Plastics Ltd.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Resins & Plastics Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/our-company/news-updates/${post.slug}`,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.href ? `${baseUrl}${crumb.href}` : undefined,
    })),
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Resins & Plastics Ltd.',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/our-company/news-updates?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Component to render JSON-LD script tag
 */
export function StructuredData({ data }) {
  if (!data) return null;

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
