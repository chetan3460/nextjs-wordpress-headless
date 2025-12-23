/**
 * Generate breadcrumb items from URL pathname
 * @param {string} pathname - The current page pathname (e.g., '/our-company/about-us')
 * @param {string} currentPageTitle - The title of the current page from WordPress
 * @returns {Array} Array of breadcrumb items
 */
export function generateBreadcrumbs(pathname, currentPageTitle) {
    const breadcrumbs = [
        { label: 'Home', link: '/' }
    ];

    // Remove leading/trailing slashes and split path
    const pathSegments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

    // If we're on homepage, return just Home
    if (pathSegments.length === 0) {
        return breadcrumbs;
    }

    // Build breadcrumbs for each path segment
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLastSegment = index === pathSegments.length - 1;

        // Format segment label (convert kebab-case to Title Case)
        const label = isLastSegment && currentPageTitle
            ? currentPageTitle
            : formatSegmentLabel(segment);

        breadcrumbs.push({
            label,
            link: isLastSegment ? null : currentPath // Last item has no link (current page)
        });
    });

    return breadcrumbs;
}

/**
 * Format URL segment to readable label
 * @param {string} segment - URL segment (e.g., 'about-us')
 * @returns {string} Formatted label (e.g., 'About Us')
 */
function formatSegmentLabel(segment) {
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
