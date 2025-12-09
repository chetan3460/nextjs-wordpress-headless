"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SafeImage from "@/components/common/SafeImage";
import SafeHTML from "@/components/common/SafeHTML";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ClientBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  console.log("ClientBlock data:", data);
  if (!data) return null;

  const { title, description, client_items } = data;
  // Use a fallback or derived count. In PHP it was $client_count.
  const clientCount = client_items?.length || 0;

  if (clientCount === 0) {
    return (
      <div className="py-12 text-center border-2 border-dashed border-red-500 m-4 p-4 text-red-500">
        <h3 className="font-bold">ClientBlock: No client items found</h3>
        <p>Data keys available: {Object.keys(data).join(", ")}</p>
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
            {description && (
              <SafeHTML html={description} className="anim-uni-in-up" />
            )}
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
              type: "custom",
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
                <SwiperSlide
                  key={index}
                  className="client-item group h-full !h-auto"
                >
                  {/* !h-auto helps with equal height items in flex swiper */}
                  <div className="client-item bg-light-blue px-5 sm:px-6 pt-6 pb-8 sm:pb-12 rounded-[20px] md:rounded-[40px] relative flex flex-col h-full animate-card-3">
                    {/* Client Image */}
                    {imageUrl && (
                      <div className="client-image text-center mb-6 h-[60px] flex items-center justify-center relative">
                        <SafeImage
                          src={imageUrl}
                          alt={imageAlt}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="mx-auto object-contain h-full w-auto"
                        />
                      </div>
                    )}

                    {/* Client Content */}
                    <div className="client-content flex flex-col flex-grow">
                      {itemDesc && (
                        <div className="flex items-start gap-6 flex-grow">
                          <div className="shrink-0 mt-1 w-6 h-6 sm:w-8 sm:h-8 relative">
                            <SafeImage
                              src="/images/home/quotes.svg"
                              alt="Quote Icon"
                              fill
                              className="object-contain"
                            />
                          </div>

                          <div className="testimonial-content flex flex-col gap-4 flex-grow text-left">
                            <SafeHTML
                              html={itemDesc}
                              className="prose prose-p:text-charcoal text-base leading-[22px]"
                            />

                            {itemTitle && (
                              <div className="body-1 font-semibold mt-auto text-charcoal">
                                {itemTitle}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Slider Navigation */}
          <div
            className={`mt-8 flex justify-center items-center gap-4 ${
              clientCount <= 3 ? "lg:hidden" : ""
            }`}
          >
            <div
              ref={setPrevEl}
              className="swiper-btn-prev-pagination swiper-btn-prev w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
            >
              {/* SVG prev arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path
                  d="M7.92214 3.18291C8.16739 3.18291 8.36621 3.38173 8.36621 3.62699C8.36621 3.87224 8.16739 4.07106 7.92214 4.07106L1.66704 4.07106L3.79543 6.19944C3.96885 6.37286 3.96885 6.65403 3.79543 6.82745C3.62201 7.00087 3.34084 7.00087 3.16742 6.82745L0.594961 4.255C0.24812 3.90816 0.24812 3.34581 0.594961 2.99897L3.16742 0.426516C3.34084 0.253095 3.62201 0.253096 3.79543 0.426516C3.96885 0.599937 3.96885 0.881107 3.79543 1.05453L1.66705 3.18291L7.92214 3.18291Z"
                  fill="#DA000E"
                />
              </svg>
            </div>

            <div
              ref={setPaginationEl}
              className="swiper-pagination-custom text-primary text-xs font-medium !w-auto flex gap-1"
            />

            <div
              ref={setNextEl}
              className="swiper-btn-next-pagination swiper-btn-next w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
            >
              {/* SVG next arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path
                  d="M1.15891 3.18291C0.913661 3.18291 0.714844 3.38173 0.714844 3.62699C0.714844 3.87224 0.913661 4.07106 1.15892 4.07106L7.41401 4.07106L5.28562 6.19944C5.1122 6.37286 5.1122 6.65403 5.28562 6.82745C5.45904 7.00087 5.74021 7.00087 5.91364 6.82745L8.48609 4.255C8.83293 3.90816 8.83294 3.34581 8.48609 2.99897L5.91363 0.426516C5.74021 0.253095 5.45904 0.253096 5.28562 0.426516C5.1122 0.599937 5.1122 0.881107 5.28562 1.05453L7.41401 3.18291L1.15891 3.18291Z"
                  fill="#DA000E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
