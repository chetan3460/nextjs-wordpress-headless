'use client';

import Link from 'next/link';
import SafeHTML from '@/components/common/SafeHTML';
import Image from 'next/image';
import { convertToNextPath } from '@/lib/utils/urls';

export default function HomeProductListingBlock({ data }) {
  if (!data || data.hide_block) return null;

  const { title, description, product_items = [], cta } = data;

  // Map first 5 items to the grid
  const items = product_items.slice(0, 5);
  // Separate into 4 small and 1 large (the 5th one)
  const smallItems = items.slice(0, 4);
  const largeItem = items[4];

  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-background-3 dark:bg-background-7">
      <div className="main-container max-w-[1440px] px-5 sm:mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          {title && (
            <h2 data-ns-animate data-delay="0.2">
              {title}
            </h2>
          )}
          {description && (
            <div data-ns-animate data-delay="0.3" className="max-w-[776px] mx-auto text-grey-3">
              <SafeHTML html={description} />
            </div>
          )}
        </div>

        {/* Grid */}
        <div className="mb-[72px]">
          <div className="grid grid-cols-12 sm:gap-8 gap-y-8">
            {/* Small Items */}
            {smallItems.map((item, index) => {
              const icon = item.icon;
              const iconUrl = typeof icon === 'string' ? icon : icon?.url;
              const iconWidth = typeof icon === 'object' ? icon?.width : 400;
              const iconHeight = typeof icon === 'object' ? icon?.height : 225;
              const delay = 0.4 + index * 0.1;
              return (
                <div
                  key={index}
                  data-ns-animate
                  data-delay={delay.toFixed(1)}
                  className="col-span-12 lg:col-span-4 sm:col-span-6"
                >
                  <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="">{item.title}</h3>
                      {item.description ? (
                        <div className="text-sm">
                          <SafeHTML html={item.description} />
                        </div>
                      ) : (
                        <p>Tailored services for your brand.</p>
                      )}
                    </div>
                    {iconUrl && (
                      <div>
                        <figure className=" max-w-full w-full overflow-hidden rounded-2xl">
                          <Image
                            src={iconUrl}
                            alt={item.title || 'services'}
                            width={iconWidth || 400}
                            height={iconHeight || 225}
                            className="w-full h-full object-cover"
                          />
                        </figure>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Large Item (Item 5) */}
            {largeItem && (
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-white  rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="">{largeItem.title}</h3>
                    {largeItem.description ? (
                      <div className="">
                        <SafeHTML html={largeItem.description} />
                      </div>
                    ) : (
                      <p>Creative direction and consulting.</p>
                    )}
                  </div>
                  {largeItem.icon && (
                    <div>
                      <figure className=" overflow-hidden rounded-2xl w-full">
                        <Image
                          src={
                            typeof largeItem.icon === 'string'
                              ? largeItem.icon
                              : largeItem.icon?.url
                          }
                          alt={largeItem.title || 'services'}
                          width={typeof largeItem.icon === 'object' ? largeItem.icon?.width : 800}
                          height={typeof largeItem.icon === 'object' ? largeItem.icon?.height : 340}
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          data-ns-animate
          data-delay="0.9"
          className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-3 justify-center"
        >
          {cta && cta.url && (
            <Link
              href={convertToNextPath(cta.url)}
              target={cta.target || '_self'}
              className="btn btn-secondary dark:btn-accent btn-md hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto text-center"
            >
              <span>{cta.title || 'Explore services'}</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
