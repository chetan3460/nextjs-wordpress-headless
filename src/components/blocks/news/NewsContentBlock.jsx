'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * News Content Block
 * Improved version with Swiper Gallery support.
 */
export default function NewsContentBlock({ data }) {
  // Map 'data' to what the component expects
  const { title, subtitle, content, image, gallery_images, background_color, hide_block } =
    data || {};

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  // Initialize Swiper for gallery
  useEffect(() => {
    if (gallery_images && gallery_images.length > 0 && swiperRef.current) {
      // Dynamically import Swiper
      import('swiper').then(({ default: Swiper }) => {
        import('swiper/modules').then(({ Navigation, Pagination }) => {
          new Swiper(swiperRef.current, {
            modules: [Navigation, Pagination],
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
              nextEl,
              prevEl,
            },
            pagination: {
              el: paginationEl,
              clickable: true,
              type: 'custom',
              renderCustom: (swiper, current, total) => {
                return `${current}/${total}`;
              },
            },
            breakpoints: {
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            },
          });
        });
      });
    }
  }, [gallery_images]);

  // Don't render if hide_block is true
  if (hide_block) {
    return null;
  }

  return (
    <section className={`news_content_block bg-${background_color || 'white'}`}>
      <div>
        {/* Title */}
        {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}

        {/* Subtitle */}
        {subtitle && <h3 className="text-xl font-semibold mb-3 text-gray-700">{subtitle}</h3>}

        {/* Content */}
        {content && (
          <div className="content-content prose max-w-none mb-4">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}

        {/* Single Image */}
        {image?.url && (
          <div className="image-wrapper mb-4">
            <Image
              src={image.url}
              alt={image.alt || title || 'Content image'}
              width={image.width || 800}
              height={image.height || 600}
              className="image-image w-full h-auto rounded-lg"
            />
          </div>
        )}

        {/* Gallery Images - Swiper Slider */}
        {gallery_images && Array.isArray(gallery_images) && gallery_images.length > 0 && (
          <div className="gallery-slider-wrapper relative ad">
            <div ref={swiperRef} className="swiper">
              <div className="swiper-wrapper">
                {gallery_images.map((img, index) => (
                  <div key={img.ID || index} className="swiper-slide">
                    <div className="group cursor-pointer">
                      {img?.url && (
                        <Image
                          src={img.url}
                          alt={img.alt || `Gallery image ${index + 1}`}
                          width={img.width || 400}
                          height={img.height || 300}
                          className="w-full aspect-[216/133.903] object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation - Below the slider */}
            {gallery_images.length > 1 && (
              <div className="swiper-navigation flex items-center justify-center mt-3 gap-4">
                <div
                  ref={setPrevEl}
                  className="gallery-slider-prev swiper-btn-prev cursor-pointer flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" strokeWidth={2.5} />
                </div>

                <div
                  ref={setPaginationEl}
                  className="gallery-slider-pagination text-primary text-xs font-medium w-auto! flex gap-1"
                ></div>

                <div
                  ref={setNextEl}
                  className="gallery-slider-next swiper-btn-next cursor-pointer flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5 text-primary" strokeWidth={2.5} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
