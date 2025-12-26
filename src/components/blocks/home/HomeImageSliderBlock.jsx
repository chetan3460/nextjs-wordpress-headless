'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import SafeHTML from '@/components/common/SafeHTML';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { convertToNextPath } from '@/lib/utils/urls';

import { useState } from 'react';

export default function ImageSliderBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  if (!data) return null;

  const { title, description, slider_items, cta } = data;

  if (!slider_items || slider_items.length === 0) return null;

  return (
    <section
      className="image-slider-block relative "
      data-component="ImageSliderBlock"
      data-load="lazy"
    >
      <div className="container-fluid relative">
        {/* Header Section */}
        {(title || description) && (
          <div className="section-heading text-center mb-4 md:mb-8">
            {title && <h2 className="mb-1 fade-text">{title}</h2>}
            {description && <SafeHTML html={description} className="anim-uni-in-up" />}
          </div>
        )}

        {/* Slider Section */}
        {slider_items && slider_items.length > 0 && (
          <div className="image-slider swiper overflow-hidden mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl,
                prevEl,
              }}
              pagination={{
                clickable: true,
                el: paginationEl,
                type: 'custom',
                renderCustom: (swiper, current, total) => {
                  return `${current}/${total}`;
                },
              }}
              className="w-full"
            >
              {slider_items.map((item, index) => {
                const slide_image = item.images;
                if (!slide_image) return null;

                return (
                  <SwiperSlide key={index} className="swiper-slide relative group">
                    <div className="relative overflow-hidden max-sm:aspect-square lg:aspect-auto long">
                      {/* Image */}
                      {slide_image && (
                        <div className="w-full h-full">
                          {/* Note: We use aspect ratio styles via class or Next.js Image fill */}
                          <Image
                            src={slide_image.url}
                            alt={slide_image.alt || item.slider_title || 'Slider image'}
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-2xl md:rounded-[40px]"
                            priority={index === 0}
                          />
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(186deg,rgba(0,0,0,0)_17.36%,rgba(0,0,0,0.8)_95.64%)] lg:bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55.77%, rgba(0, 0, 0, 0.50) 88.45%)] rounded-2xl md:rounded-[40px]"></div>

                      {/* Slide Content */}
                      {(item.slider_title || item.slider_description) && (
                        <div className="slide-content absolute bottom-0 left-0 right-0 px-6 lg:px-16 pb-12 opacity-100">
                          {/* Note: opacity-0 in PHP often relies on JS to verify visible. We force visible here or let CSS handle anims. */}
                          {item.slider_title && (
                            <div className="slide-title h3 text-white! font-semibold mb-2">
                              {item.slider_title}
                            </div>
                          )}
                          {item.slider_description && (
                            <SafeHTML
                              html={item.slider_description}
                              className="slide-description prose-p:text-white!  prose-p:text-sm prose-p:lg:text-base prose-p:max-w-[559px] prose-p:leading-[19px]"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Navigation */}
              {slider_items.length > 1 && (
                <div className="swiper-navigation flex items-center justify-center mt-3 gap-4">
                  <div ref={setPrevEl} className="swiper-btn-prev cursor-pointer">
                    <ChevronLeft className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  </div>

                  <div
                    ref={setPaginationEl}
                    className="swiper-pagination text-primary text-xs font-medium w-auto! flex gap-1"
                  ></div>

                  <div ref={setNextEl} className="swiper-btn-next cursor-pointer">
                    <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2.5} />
                  </div>
                </div>
              )}
            </Swiper>
          </div>
        )}

        {/* CTA Section */}
        {cta && cta.url && (
          <div className="text-center mt-12 anim-uni-in-up">
            <Link href={convertToNextPath(cta.url)} target={cta.target || '_self'} className="btn">
              {cta.title || 'Learn More'}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
