/**
 * Accessibility Utilities
 * Provides helper functions to improve accessibility across the site
 */

/**
 * Add ARIA labels to elements that are missing them
 * This runs on the client side to enhance accessibility
 */
export function enhanceAccessibility() {
  if (typeof window === 'undefined') return;

  // Add ARIA labels to buttons without text content
  const buttons = document.querySelectorAll('button:not([aria-label])');
  buttons.forEach(button => {
    // If button only has an icon or image, add aria-label
    if (!button.textContent.trim() && !button.getAttribute('aria-label')) {
      const img = button.querySelector('img');
      const svg = button.querySelector('svg');

      if (img && img.alt) {
        button.setAttribute('aria-label', img.alt);
      } else if (svg) {
        button.setAttribute('aria-label', 'Button');
      }
    }
  });

  // Add ARIA labels to links without text
  const links = document.querySelectorAll('a:not([aria-label])');
  links.forEach(link => {
    if (!link.textContent.trim() && !link.getAttribute('aria-label')) {
      const img = link.querySelector('img');
      if (img && img.alt) {
        link.setAttribute('aria-label', img.alt);
      }
    }
  });

  // Add role="navigation" to nav elements without it
  const navs = document.querySelectorAll('nav:not([role])');
  navs.forEach(nav => {
    nav.setAttribute('role', 'navigation');
  });

  // Ensure all form inputs have labels or aria-label
  const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  inputs.forEach(input => {
    const placeholder = input.getAttribute('placeholder');
    const id = input.getAttribute('id');

    // Check if there's an associated label
    const label = id ? document.querySelector(`label[for="${id}"]`) : null;

    if (!label && placeholder) {
      input.setAttribute('aria-label', placeholder);
    }
  });

  // Add aria-hidden to decorative icons
  const icons = document.querySelectorAll('svg:not([aria-hidden]):not([aria-label])');
  icons.forEach(icon => {
    // If icon is inside a button or link, it's decorative
    const parent = icon.closest('button, a');
    if (parent && parent.textContent.trim()) {
      icon.setAttribute('aria-hidden', 'true');
    }
  });
}

/**
 * Initialize accessibility enhancements when DOM is ready
 */
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceAccessibility);
  } else {
    enhanceAccessibility();
  }
}
