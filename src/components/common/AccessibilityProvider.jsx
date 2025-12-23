'use client';

import { useEffect } from 'react';
import { enhanceAccessibility } from '@/lib/utils/accessibility';

/**
 * Accessibility Provider Component
 * Enhances accessibility across the application
 */
export default function AccessibilityProvider({ children }) {
  useEffect(() => {
    // Run accessibility enhancements on mount
    enhanceAccessibility();

    // Re-run on route changes or dynamic content updates
    const observer = new MutationObserver(() => {
      enhanceAccessibility();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
