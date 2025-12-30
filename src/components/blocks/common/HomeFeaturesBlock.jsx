'use client';

import SafeHTML from '@/components/common/SafeHTML';
import Link from 'next/link';

/**
 * Home Features Block - AI Agency Services Section
 * Matches the exact UI from ai-agency.html services section
 */
export default function HomeFeaturesBlock({ data }) {
  if (!data || data.hide_block) return null;

  const { subtitle, title, description, feature_items = [], cta } = data;

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-[url('/images/ns-img-169.png')] bg-no-repeat bg-cover bg-top">
      <div className="main-container">
        {/* Header */}
        <div className="text-center space-y-5 max-w-[750px] mx-auto mb-14">
          {subtitle && <span className="badge badge-green">{subtitle}</span>}
          <div>
            {title && <h2 className="mb-3">{title}</h2>}
            {description && <SafeHTML html={description} className="max-w-[600px] mx-auto" />}
          </div>
        </div>

        {/* Feature Items Grid */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 lg:mb-18 max-w-[1010px] mx-auto">
          {feature_items.map((item, index) => {
            // Determine grid column span based on index
            // Pattern: large (7), small (5), small (5), large (7)
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge
              ? 'col-span-12 md:col-span-6 lg:col-span-7'
              : 'col-span-12 md:col-span-6 lg:col-span-5';

            return (
              <div
                key={index}
                className={`${colSpan} p-8 rounded-[20px] bg-white space-y-6 sm:min-h-[288px]`}
              >
                {/* Icon */}
                {item.icon && (
                  <div className="w-full">
                    {typeof item.icon === 'string' ? (
                      item.icon.startsWith('http') ? (
                        <img
                          src={item.icon}
                          alt={item.title || 'icon'}
                          className="w-[52px] h-[52px] object-contain"
                        />
                      ) : (
                        <span className="text-[52px] text-secondary">{item.icon}</span>
                      )
                    ) : item.icon?.url ? (
                      <img
                        src={item.icon.url}
                        alt={item.icon.alt || item.title || 'icon'}
                        className="w-[52px] h-[52px] object-contain"
                      />
                    ) : (
                      <span className="text-[52px] text-secondary">🎯</span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  {item.title && <h5 className="max-sm:text-heading-6">{item.title}</h5>}
                  {item.description && (
                    <div className={isLarge ? 'max-w-[430px]' : ''}>
                      <SafeHTML html={item.description} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        {cta?.url && (
          <div className="flex items-center justify-center">
            <Link
              href={cta.url}
              target={cta.target || '_self'}
              className="btn btn-secondary hover:btn-primary btn-md w-[85%] md:w-auto mx-auto"
            >
              <span>{cta.title || 'Talk to an expert'}</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
