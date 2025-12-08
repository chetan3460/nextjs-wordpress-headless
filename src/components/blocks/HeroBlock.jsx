"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroBlock({ data }) {
  // Extract data from WordPress ACF (matching hero_block.php structure)
  const banner_slider = data?.banner_slider || [];
  const cta = data?.cta || null;
  const hide_news = data?.hide_news || false;
  const select_news = data?.select_news || [];

  // Don't render if no content
  if (!banner_slider.length && !cta && !hide_news) {
    return null;
  }

  return (
    <section className="hero_block py-12" data-component="HeroBlock">
      <div className="container-fluid">
        {/* Banner Slider Grid */}
        {banner_slider.length > 0 && (
          <div className="banner_slider-grid">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              autoplay={{ delay: 6000 }}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {banner_slider.map((item, index) => {
                // Get image URL - handle both object and string formats
                const imageUrl =
                  item.banner_images?.url || item.banner_images || "";
                const imageAlt =
                  item.banner_images?.alt || item.banner_title || "Banner";

                return (
                  <SwiperSlide key={index}>
                    <div className="banner_slider-item relative">
                      {/* Banner Image */}
                      {imageUrl && (
                        <div className="relative w-full aspect-[1] sm:aspect-[1.8] md:aspect-auto h-[600px] md:h-[700px]">
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            fill
                            priority={index === 0}
                            className="object-cover h-full w-full rounded-[18px] md:rounded-[40px]"
                            unoptimized={imageUrl.includes("localhost")}
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-[18px] md:rounded-[40px]"></div>
                        </div>
                      )}

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex justify-start items-center z-10 pointer-events-none">
                        <div className="pl-5 pt-7 lg:pt-0 lg:pl-14 left-block flex flex-col relative w-full lg:w-2/3 space-y-6 text-white pointer-events-auto">
                          {/* Banner Title */}
                          {item.banner_title && (
                            <div className="banner_title">
                              <h1 className="hero-title font-bold !text-white tracking-[-1.5px] mb-0 text-[clamp(2rem,8vw,5rem)] leading-[0.95]">
                                {item.banner_title}
                              </h1>
                            </div>
                          )}

                          {/* Banner Subtitle */}
                          {item.banner_subtitle && (
                            <div className="banner_subtitle">
                              <h2 className="hero-subtitle font-medium tracking-[-0.36px] md:tracking-[-0.84px] !text-white !text-[clamp(1.125rem,4vw,2.75rem)] leading-[1.1] mt-2">
                                {item.banner_subtitle}
                              </h2>
                            </div>
                          )}

                          {/* Banner Description */}
                          {item.banner_description && (
                            <div
                              className="banner_description prose prose-p:text-[14px] sm:prose-p:text-base prose-p:!text-white prose-p:leading-[22px] md:prose-p:text-[18px] max-w-[400px] lg:max-w-[490px] mt-2 md:mt-4"
                              dangerouslySetInnerHTML={{
                                __html: item.banner_description,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}

        {/* CTA Button */}
        {cta && cta.url && (
          <a
            href={cta.url}
            className="btn btn-primary"
            target={cta.target || undefined}
          >
            {cta.title || "Read More"}
          </a>
        )}

        {/* Hide News Field (if needed for debugging) */}
        {hide_news && (
          <div className="hide_news-field">{hide_news.toString()}</div>
        )}

        {/* Select News Field (if needed for debugging) */}
        {select_news && select_news.length > 0 && (
          <div className="select_news-field">
            {/* Render news spotlight here if needed */}
          </div>
        )}
      </div>
    </section>
  );
}
