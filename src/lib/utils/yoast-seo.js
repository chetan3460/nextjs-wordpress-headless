/**
 * Extract Yoast SEO metadata from WordPress REST API response
 * @param {object} data - WordPress page/post data
 * @returns {object} Formatted metadata for Next.js
 */
export function extractYoastSEO(data) {
  if (!data) return null;

  const yoast = data.yoast_head_json || {};

  return {
    title: yoast.title || data.title?.rendered || data.title || '',
    description:
      yoast.description || data.excerpt?.rendered?.replace(/<[^>]*>/g, '').substring(0, 160) || '',

    // Open Graph
    openGraph: {
      title: yoast.og_title || yoast.title || data.title?.rendered || data.title,
      description: yoast.og_description || yoast.description,
      type: yoast.og_type || 'website',
      url: yoast.og_url || data.link,
      siteName: yoast.og_site_name,
      images: yoast.og_image
        ? [
            {
              url: yoast.og_image[0]?.url,
              width: yoast.og_image[0]?.width,
              height: yoast.og_image[0]?.height,
              alt: yoast.og_image[0]?.alt || data.title?.rendered || data.title,
            },
          ]
        : [],
      locale: yoast.og_locale || 'en_US',
    },

    // Twitter Card
    twitter: {
      card: yoast.twitter_card || 'summary_large_image',
      title: yoast.twitter_title || yoast.og_title || yoast.title,
      description: yoast.twitter_description || yoast.og_description || yoast.description,
      images: yoast.twitter_image
        ? [yoast.twitter_image]
        : yoast.og_image
          ? [yoast.og_image[0]?.url]
          : [],
    },

    // Additional SEO data
    robots: {
      index: yoast.robots?.index !== 'noindex',
      follow: yoast.robots?.follow !== 'nofollow',
      googleBot: yoast.robots?.['max-snippet']
        ? {
            'max-snippet': yoast.robots['max-snippet'],
            'max-image-preview': yoast.robots['max-image-preview'],
            'max-video-preview': yoast.robots['max-video-preview'],
          }
        : undefined,
    },

    // Canonical URL
    alternates: {
      canonical: yoast.canonical || data.link,
    },

    // Schema.org structured data
    schema: yoast.schema,
  };
}

/**
 * Generate Next.js metadata from Yoast SEO data
 * @param {object} wordpressData - WordPress page/post data
 * @param {object} fallback - Fallback metadata if Yoast data is missing
 * @returns {object} Next.js metadata object
 */
export function generateMetadataFromYoast(wordpressData, fallback = {}) {
  const yoastMeta = extractYoastSEO(wordpressData);

  if (!yoastMeta) {
    return {
      title: fallback.title || 'Page Not Found',
      description: fallback.description || '',
    };
  }

  return {
    title: yoastMeta.title || fallback.title || 'Page',
    description: yoastMeta.description || fallback.description || '',
    openGraph: yoastMeta.openGraph,
    twitter: yoastMeta.twitter,
    robots: yoastMeta.robots,
    alternates: yoastMeta.alternates,
  };
}
