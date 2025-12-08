"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSliderBlock({ data }) {
  const {
    title = "Innovation in Action",
    description = "<p>See our advanced manufacturing facilities and processes.</p>",
    slider_items = [
      {
        slider_title: "Automated Production",
        slider_description:
          "Robotic arms ensuring consistent quality and speed.",
        images: {
          url: "https://placehold.co/800x600/333333/ffffff?text=Automated+Production",
        },
      },
      {
        slider_title: "Quality Control",
        slider_description: "Rigorous testing protocols for every batch.",
        images: {
          url: "https://placehold.co/800x600/444444/ffffff?text=Quality+Control",
        },
      },
      {
        slider_title: "Sustainable Materials",
        slider_description:
          "Processing recycled plastics for a greener future.",
        images: {
          url: "https://placehold.co/800x600/555555/ffffff?text=Sustainable+Materials",
        },
      },
    ],
    cta = { title: "View Gallery", url: "/gallery" },
  } = data || {};

  if (!slider_items || slider_items.length === 0) return null;

  return (
    <section
      className="image-slider-block relative fade-in py-12 md:py-24 overflow-hidden"
      data-component="ImageSliderBlock"
    >
      <div className="container-fluid xl:px-24 relative">
        {/* Header Section */}
        {(title || description) && (
          <div className="section-heading text-center mb-8 md:mb-12">
            {title && (
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="text-base leading-[21px] font-normal md:text-[18px] md:leading-[25px] text-gray-600"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {/* Slider Section */}
        <div className="image-slider relative mb-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2.2, centeredSlides: false },
              1024: { slidesPerView: 3.2, centeredSlides: false },
            }}
            navigation={{
              prevEl: ".swiper-btn-prev",
              nextEl: ".swiper-btn-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            className="!pb-12"
          >
            {slider_items.map((item, index) => (
              <SwiperSlide key={index} className="relative group">
                <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[2/3] rounded-2xl md:rounded-[40px] cursor-pointer">
                  {/* Image */}
                  {item.images && item.images.url && (
                    <Image
                      src={item.images.url}
                      alt={item.slider_title || "Slider Image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Overlay (Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-300"></div>

                  {/* Slide Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.slider_title && (
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                        {item.slider_title}
                      </h3>
                    )}
                    {item.slider_description && (
                      <div
                        className="text-sm md:text-base text-gray-200 line-clamp-3 group-hover:line-clamp-none transition-all"
                        dangerouslySetInnerHTML={{
                          __html: item.slider_description,
                        }}
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="swiper-navigation flex items-center justify-center mt-4 gap-6">
            <button className="swiper-btn-prev w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer text-gray-400">
              ←
            </button>

            <div className="swiper-pagination !w-auto !relative !bottom-0"></div>

            <button className="swiper-btn-next w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer text-gray-400">
              →
            </button>
          </div>
        </div>

        {/* CTA Button */}
        {cta && cta.url && (
          <div className="text-center mt-8">
            <Link href={cta.url} className="btn-primary inline-flex">
              {cta.title}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
