"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";
import SafeHTML from "@/components/common/SafeHTML";

export default function ImageSliderBlock({ data }) {
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
            {description && (
              <SafeHTML html={description} className="anim-uni-in-up" />
            )}
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
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "custom",
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
                  <SwiperSlide
                    key={index}
                    className="swiper-slide relative group"
                  >
                    <div className="relative overflow-hidden max-sm:aspect-square lg:aspect-auto long">
                      {/* Image */}
                      {slide_image && (
                        <div className="w-full h-full">
                          {/* Note: We use aspect ratio styles via class or Next.js Image fill */}
                          <SafeImage
                            src={slide_image.url}
                            alt={
                              slide_image.alt ||
                              item.slider_title ||
                              "Slider image"
                            }
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
                            <div className="slide-title h3 !text-white font-semibold mb-2">
                              {item.slider_title}
                            </div>
                          )}
                          {item.slider_description && (
                            <SafeHTML
                              html={item.slider_description}
                              className="slide-description prose-p:!text-white  prose-p:text-sm prose-p:lg:text-base prose-p:max-w-[559px] prose-p:leading-[19px]"
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
                  <div className="swiper-btn-prev cursor-pointer">
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

                  <div className="swiper-pagination text-primary text-xs font-medium !w-auto flex gap-1"></div>

                  <div className="swiper-btn-next w-12 cursor-pointer">
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
              )}
            </Swiper>
          </div>
        )}

        {/* CTA Section */}
        {cta && cta.url && (
          <div className="text-center mt-12 anim-uni-in-up">
            <Link href={cta.url} target={cta.target || "_self"} className="btn">
              {cta.title || "Learn More"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
