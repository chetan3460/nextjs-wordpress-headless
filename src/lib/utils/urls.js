/**
 * Robust helper to convert WordPress URL to Next.js path
 * @param {string} wpUrl - The WordPress URL to convert
 * @returns {string} - The relative Next.js path
 */
export const convertToNextPath = wpUrl => {
  if (!wpUrl) return '#';

  // If it's already a relative path, return as is
  if (wpUrl.startsWith('/')) {
    // Still want to remove /nextjs-wp if it's present in a relative path for some reason
    return wpUrl.replace('/nextjs-wp', '') || '/';
  }

  const wpBaseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://localhost/nextjs-wp';

  try {
    const url = new URL(wpUrl);
    const base = new URL(wpBaseUrl);

    // If the domains match, it's a local WordPress link—convert to relative
    if (url.hostname === base.hostname) {
      // Remove the subdirectory (like /nextjs-wp) if it exists
      let path = url.pathname.replace(base.pathname, '');
      // Ensure it starts with /
      if (!path.startsWith('/')) path = '/' + path;
      // Remove trailing slash
      path = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
      return path || '/';
    }
  } catch {
    // Fallback for malformed URLs
  }

  // If the URL contains our WordPress subdirectory but the hostname check failed (e.g. 127.0.0.1 vs localhost)
  if (wpUrl.includes('/nextjs-wp/')) {
    const pathAfterBase = wpUrl.split('/nextjs-wp/')[1];
    return pathAfterBase ? `/${pathAfterBase.replace(/\/$/, '')}` : '/';
  }

  return wpUrl; // Return as-is if it's an external link
};

/**
 * Enhanced helper to extract news link from post data
 * @param {object} post - The post data object
 * @returns {string} - The formatted news link
 */
export const getNewsLink = post => {
  if (!post) return '#';

  // Get slug from slug property, post_name, or extract from URL
  let slug = post.slug || post.post_name;

  if (!slug && post.url) {
    const urlParts = post.url.replace(/\/$/, '').split('/');
    slug = urlParts[urlParts.length - 1];
  }

  if (slug) {
    return `/our-company/news-updates/${slug}`;
  }

  return convertToNextPath(post.url);
};
