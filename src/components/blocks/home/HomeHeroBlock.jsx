'use client';

import SafeHTML from '@/components/common/SafeHTML';
import { CheckCircle2 } from 'lucide-react';

/**
 * Home Hero Block - AI Agency Style
 * Matches the exact UI structure from ai-agency.html
 */
export default function HomeHeroBlock({ data }) {
  const { hide_block, banner_title, banner_content, banner_cta, banner_items } = data || {};

  if (hide_block) return null;

  return (
    <section className="hero-section pt-80 md:pt-52 lg:pt-52 xl:pt-64 pb-16 md:pb-20 lg:pb-32 xl:pb-40 bg-[url('/images/ns-img-169.png')] bg-no-repeat bg-top relative z-0">
      {/* Hero Title Content */}
      <div className="main-container flex flex-col items-center space-y-32 relative z-10 mb-24 lg:mb-40 xl:mb-56">
        <div className="text-left md:text-center max-md:pt-40 max-lg:pt-52">
          {/* Title */}
          {banner_title && <h1 className="mb-4 hero-title">{banner_title}</h1>}

          {/* Content */}
          {banner_content && (
            <SafeHTML html={banner_content} className="max-w-[650px] mx-auto mb-6" />
          )}

          {/* Feature List */}
          {banner_items && banner_items.length > 0 && (
            <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
              {banner_items.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <CheckCircle2
                    className="w-[19px] h-[19px] shrink-0 text-secondary"
                    strokeWidth={2}
                  />
                  <span className="text-tagline-2">{item.banner_list}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          {banner_cta?.url && (
            <div className="block md:inline-block">
              <a
                href={banner_cta.url}
                target={banner_cta.target || '_self'}
                className="btn btn-primary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-primary w-[90%] md:w-auto mx-auto"
                aria-label={banner_cta.title || 'Get started'}
              >
                <span>{banner_cta.title || 'Get started'}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
