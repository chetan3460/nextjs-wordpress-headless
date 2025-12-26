'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import SafeHTML from '@/components/common/SafeHTML';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ClientBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  if (!data) return null;

  const { title, description, client_items } = data;
  // Use a fallback or derived count. In PHP it was $client_count.
  const clientCount = client_items?.length || 0;

  if (clientCount === 0) {
    return (
      <div className="py-12 text-center border-2 border-dashed border-red-500 m-4 p-4 text-red-500">
        <h3 className="font-bold">ClientBlock: No client items found</h3>
        <p>Data keys available: {Object.keys(data).join(', ')}</p>
        <pre className="text-xs text-left mt-2 bg-gray-100 p-2 overflow-auto max-h-40">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <section className="home-client-block">
      <div className="container-fluid mx-auto">
        {/* Header Section */}
        {(title || description) && (
          <div className="section-heading text-center mb-8">
            {title && <h2 className="mb-1 fade-text">{title}</h2>}
            {description && <SafeHTML html={description} className="anim-uni-in-up" />}
          </div>
        )}

        {/* Client Items */}
        <div className="client-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl,
              nextEl,
            }}
            pagination={{
              el: paginationEl,
              clickable: true,
              type: 'custom',
              renderCustom: (swiper, current, total) => {
                return `${current}/${total}`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }, // PHP logic implies 3 is a threshold for navigation, maybe 3 cols?
              // PHP: if ($client_count > 3). Previous layout had up to 5 cols.
              // The card design (box with text) usually fits 3 per row comfortably.
            }}
            className="client-slider swiper items-stretch"
          >
            {client_items.map((item, index) => {
              // Extract image logic
              const image = item.image;
              const imageUrl = image?.url;
              const imageAlt = image?.alt;
              const itemTitle = item.title;
              const itemDesc = item.description;

              return (
                <SwiperSlide key={index} className="client-item group h-full !h-auto">
                  {/* !h-auto helps with equal height items in flex swiper */}
                  <div className="client-item bg-white p-4 sm:p-8 rounded-xl space-y-6relative flex flex-col h-full ">
                    <div className="flex items-center gap-3">
                      {/* Client Image */}
                      {imageUrl && (
                        <div className="client-image text-center  h-[60px] flex items-center justify-center relative">
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="size-11 rounded-full object-center object-cover bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                          />
                        </div>
                      )}
                      {itemTitle && (
                        <div className="text-base font-medium  text-black">{itemTitle}</div>
                      )}
                    </div>
                    <div className="border-t border-stroke-4 dark:border-stroke-5 my-5"></div>
                    {/* Client Content */}
                    {itemDesc && (
                      <div className="testimonial-content">
                        <SafeHTML
                          html={itemDesc}
                          className="prose prose-p:text-charcoal text-base leading-[22px]"
                        />
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Slider Navigation */}
          <div
            className={`mt-8 flex justify-center items-center gap-4 ${
              clientCount <= 3 ? 'lg:hidden' : ''
            }`}
          >
            <div
              ref={setPrevEl}
              className="swiper-btn-prev-pagination swiper-btn-prev w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6 text-primary" strokeWidth={2.5} />
            </div>

            <div
              ref={setPaginationEl}
              className="swiper-pagination-custom text-primary text-xs font-medium !w-auto flex gap-1"
            />

            <div
              ref={setNextEl}
              className="swiper-btn-next-pagination swiper-btn-next w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
            >
              <ChevronRight className="w-6 h-6 text-primary" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
