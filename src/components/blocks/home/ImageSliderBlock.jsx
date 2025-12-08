"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";

export default function ImageSliderBlock({ data }) {
  if (!data) return null;

  const { title, description, slider_items, cta } = data;

  if (!slider_items || slider_items.length === 0) return null;

  return (
    <section
      className="home_image_slider_block py-12"
      data-component="ImageSliderBlock"
    >
      <div className="container-fluid mx-auto">
        {(title || description) && (
          <div className="section-heading text-center">
            {title && (
              <h2 className="fade-text text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="anim-uni-in-up text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {slider_items && slider_items.length > 0 && (
          <div className="slider_items-grid image-slider relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              speed={1000}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              className="h-[500px] md:h-[600px] w-full"
            >
              {slider_items.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="slider_items-item relative w-full h-full"
                >
                  {/* Background Image */}
                  {item.images && (
                    <div className="absolute inset-0 w-full h-full">
                      <SafeImage
                        src={item.images.url}
                        alt={
                          item.images.alt || item.slider_title || "Slider Image"
                        }
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Dark Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-10">
                    <div className="max-w-3xl">
                      {item.slider_title && (
                        <div className="slider_title text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                          {item.slider_title}
                        </div>
                      )}

                      {item.slider_description && (
                        <div
                          className="slider_description text-white text-lg md:text-xl leading-relaxed drop-shadow-md"
                          dangerouslySetInnerHTML={{
                            __html: item.slider_description,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Navigation Arrows */}
              <div className="swiper-button-prev text-white! w-12! h-12! bg-white/10! hover:bg-primary! rounded-full backdrop-blur-sm transition-all after:text-xl!"></div>
              <div className="swiper-button-next text-white! w-12! h-12! bg-white/10! hover:bg-primary! rounded-full backdrop-blur-sm transition-all after:text-xl!"></div>

              {/* Pagination */}
              <div className="swiper-pagination bottom-8! flex! justify-start! pl-8! md:pl-16!"></div>
            </Swiper>
          </div>
        )}

        {cta && cta.url && (
          <div className="text-center mt-12">
            <Link
              href={cta.url}
              target={cta.target || "_self"}
              className="btn btn-primary inline-flex items-center justify-center px-8 py-3 text-white bg-primary hover:bg-red-700 rounded-full transition-colors"
            >
              {cta.title || "Learn More"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
