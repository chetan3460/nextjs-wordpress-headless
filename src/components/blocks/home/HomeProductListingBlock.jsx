'use client';

import Link from 'next/link';
import SafeHTML from '@/components/common/SafeHTML';
import SafeImage from '@/components/common/SafeImage';

export default function HomeProductListingBlock({ data }) {
  if (!data || data.hide_block) return null;

  const { title, description, product_items = [], cta } = data;

  // We expect 5 items for the grid (1 large + 4 small)
  // If we have more, we slice. If we have fewer, we handle gracefully.
  const mainCardItem = product_items[0] || {};
  const gridItems = product_items.slice(1, 5);

  return (
    <section className="home-product-listing-block pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container-fluid max-w-[1440px] px-5 sm:mx-auto">
        <div className="bg-background-2 rounded-[30px] py-14 md:py-[100px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 justify-center items-stretch gap-y-8 md:gap-x-8">
              {/* LARGE CARD (Item 1) */}
              <div className="col-span-12 lg:col-span-8 relative rounded-[20px] overflow-hidden h-full group">
                {/* Background image from Item 0 */}
                <div className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  <SafeImage
                    src={
                      typeof mainCardItem.icon === 'string'
                        ? mainCardItem.icon
                        : mainCardItem.icon?.url
                    }
                    alt={mainCardItem.title || 'Background'}
                    fill
                    className="object-cover object-center brightness-90 group-hover:brightness-100 transition-all"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-black/40" />
                </div>

                <div className="relative z-10 bg-transparent py-8 lg:py-[42px] px-7 lg:px-14 space-y-14 h-full flex flex-col justify-between text-center lg:text-left items-center lg:items-start text-white">
                  <div className="">
                    {title && (
                      <span className="badge bg-primary text-white mb-5 inline-block">{title}</span>
                    )}
                    {description && (
                      <SafeHTML
                        html={description}
                        className="text-4xl md:text-5xl font-bold max-w-[564px] leading-tight"
                      />
                    )}
                  </div>
                  {cta && cta.url && (
                    <div>
                      <Link
                        href={cta.url}
                        target={cta.target || '_self'}
                        className="btn bg-white text-black hover:bg-primary hover:text-white border-white"
                      >
                        {cta.title || "Let's Talk Strategy"}
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* GRID ITEMS (Items 2-5) */}
              {gridItems.map((item, index) => {
                const iconUrl = typeof item.icon === 'string' ? item.icon : item.icon?.url;
                return (
                  <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                    <div className="bg-white rounded-[20px] p-8 space-y-6 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-black">{item.title}</h3>
                        {/* Note: ACF lacks item-level description, so we only show title */}
                      </div>

                      {iconUrl && (
                        <div className="flex-1 flex items-center justify-center p-4">
                          <figure className="max-w-[345px] w-full rounded-2xl overflow-hidden relative min-h-[170px]">
                            <SafeImage
                              src={iconUrl}
                              alt={item.title || 'Service Icon'}
                              fill
                              className="object-contain"
                            />
                          </figure>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
