'use client';

import Image from 'next/image';
import SafeHTML from '@/components/common/SafeHTML';

/**
 * Home Product Listing Block - AI Agency Feature Section
 * Matches the exact UI from ai-agency.html feature section
 */
export default function HomeProductListingBlock({ data }) {
  if (!data || data.hide_block) return null;

  const { subtitle, title, description, product_items = [] } = data;

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white">
      <div className="main-container">
        {/* Header */}
        <div className="text-center space-y-5 max-w-[750px] mx-auto mb-10 md:mb-[70px]">
          {subtitle && <span className="badge badge-green">{subtitle}</span>}
          <div>
            {title && <h2 className="mb-3">{title}</h2>}
            {description && (
              <p className="text-secondary/60 max-w-[600px] mx-auto">{description}</p>
            )}
          </div>
        </div>

        {/* Feature Items Grid */}
        <div className="grid grid-cols-12 space-y-8 md:space-y-0 md:gap-8 mb-10 xl:mb-18">
          {product_items.map((item, index) => {
            const icon = item.icon;
            const iconUrl = typeof icon === 'string' ? icon : icon?.url;
            const iconWidth = typeof icon === 'object' ? icon?.width : 800;
            const iconHeight = typeof icon === 'object' ? icon?.height : 450;

            // Determine grid column span based on index
            // Pattern: large (8), small (4), small (4), large (8)
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge
              ? 'col-span-12 md:col-span-6 lg:col-span-8'
              : 'col-span-12 md:col-span-6 lg:col-span-4';

            return (
              <div
                key={index}
                className={`${colSpan} p-8 rounded-[20px] bg-background-3 space-y-6`}
              >
                <div className="space-y-2">
                  {item.title && <h5 className="max-sm:text-heading-6">{item.title}</h5>}
                  {item.description && (
                    <div className={isLarge ? 'max-w-[450px]' : ''}>
                      <SafeHTML html={item.description} />
                    </div>
                  )}
                </div>
                {iconUrl && (
                  <figure className="w-full">
                    <Image
                      src={iconUrl}
                      alt={item.title || 'feature image'}
                      width={iconWidth}
                      height={iconHeight}
                      className="w-full object-cover rounded-2xl"
                    />
                  </figure>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
