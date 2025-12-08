"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import SafeImage from "@/components/common/SafeImage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroBlock({ data }) {
  // ACF data – keep keys aligned with the PHP template
  const banner_slider = data?.banner_slider || [];
  const cta = data?.cta || null;
  const hide_block = data?.hide_block || false;
  const hide_news = data?.hide_news || false;
  const select_news = data?.select_news || [];

  // Match PHP behaviour: do not render if no slider OR block hidden
  if (hide_block || !banner_slider.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden hero-block pt-[83px]">
      <div className="container-fluid relative flex items-center justify-between">
        {/* HERO SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={false}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="hero-slider swiper w-full"
        >
          {banner_slider.map((slide, i) => {
            const image = slide.banner_images;
            if (!image) return null;

            const imageUrl = image?.url || image;
            const imageAlt = image?.alt || `Hero slide ${i + 1}`;

            const slide_title = slide.banner_title || "";
            const slide_subtitle = slide.banner_subtitle || "";
            const slide_description = slide.banner_description || "";

            return (
              <SwiperSlide key={i}>
                {/* Swiper already renders `.swiper-slide`, so just wrap content */}
                <div className="">
                  {/* IMAGE */}
                  <SafeImage
                    src={imageUrl}
                    alt={imageAlt}
                    width={1920}
                    height={1080}
                    priority={i === 0} // first slide → high priority (LCP)
                    loading={i === 0 ? "eager" : "lazy"}
                    unoptimized={imageUrl.includes("localhost")}
                    className="object-cover h-full w-full rounded-[18px] md:rounded-[40px] aspect-[1] sm:aspect-[1.8] md:aspect-auto"
                  />

                  {/* OVERLAY CONTENT */}
                  <div className="absolute inset-0 flex justify-start items-start sl:items-center max-lg:flex-col z-10">
                    {/* Dark gradient overlay for text readability */}

                    <div className="pl-3 pt-7 lg:pt-0 sl:pl-10 lg:pl-14 left-block flex flex-col relative w-full lg:w-2/3 space-y-6 text-white z-10">
                      {/* Titles container */}
                      <div className="hero-titles-container">
                        {slide_title && (
                          <h1 className="hero-title font-bold !text-white tracking-[-1.5px] mb-0 text-[clamp(2rem,8vw,5rem)] leading-[0.95]">
                            {slide_title}
                          </h1>
                        )}

                        {slide_subtitle && (
                          <h2 className="hero-subtitle font-medium tracking-[-0.36px] md:tracking-[-0.84px] !text-white !text-[clamp(1.125rem,4vw,2.75rem)] leading-[1.1]">
                            {slide_subtitle}
                          </h2>
                        )}

                        {slide_description && (
                          <div
                            className="hero-description prose prose-p:text-[14px] sm:prose-p:text-base prose-p:!text-white prose-p:leading-[22px] md:prose-p:text-[18px] max-w-[400px] lg:max-w-[490px] mt-2 md:mt-4"
                            dangerouslySetInnerHTML={{
                              __html: slide_description,
                            }}
                          />
                        )}
                      </div>

                      {/* CTA (shared for all slides, like PHP) */}
                      {cta && cta.url && (
                        <div className="cta-block">
                          <a
                            href={cta.url}
                            className="btn bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
                            target={cta.target || undefined}
                            rel={
                              cta.target === "_blank"
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {cta.title || "Get in Touch"}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* SPOTLIGHT (RIGHT BLOCK) – outside Swiper for visibility */}
        {!hide_news && select_news && select_news.length > 0 && (
          <div className="relative z-10 flex self-end">
            <div className="right-block flex justify-end md:absolute end-0 bottom-0 z-1 mt-2 sl:mt-0">
              {/* Background Shape */}
              <div className="hidden md:block bg-shape absolute bottom-[-10px] right-[-10px] z-0 pointer-events-none [backface-visibility:hidden]" />

              {/* Spotlight Block */}
              <div className="spotlight-block w-full md:w-[292px] rounded-2xl relative z-1">
                {/* Header */}
                <div className="spotlight-header flex items-start gap-3 p-4 min-h-[100px] text-white">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <SafeImage
                      src="/images/home/Announcement.svg"
                      alt="Announcement"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-[18px] font-semibold leading-[22px] tracking-[-0.36px]">
                    Spotlight
                  </div>
                </div>

                {/* News Slider */}
                <div className="spotlight-slider swiper bg-[#F4F4F4] rounded-[20px] -mt-[50px]">
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                      el: ".spotlight-pagination",
                    }}
                    className="w-full"
                  >
                    {select_news.map((news_post, idx) => {
                      const newsTitle = news_post.title || "";
                      const newsUrl = news_post.url || "#";
                      const newsCategories = news_post.categories || [];

                      return (
                        <SwiperSlide key={idx}>
                          <article className="p-5">
                            <div className="flex gap-3">
                              <div className="flex-1 min-w-0">
                                {/* Tags */}
                                {newsCategories.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {newsCategories
                                      .slice(0, 2)
                                      .map((cat, catIdx) => (
                                        <span key={catIdx} className="badge">
                                          {cat.name}
                                        </span>
                                      ))}
                                  </div>
                                )}

                                {/* Title + Arrow */}
                                <div className="flex items-start justify-between">
                                  <div className="max-w-[204px] text-base font-bold tracking-[0.16px] text-[#202020]">
                                    {newsTitle.length > 40
                                      ? `${newsTitle.substring(0, 40)}...`
                                      : newsTitle}
                                  </div>
                                  <a
                                    href={newsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                  >
                                    <SafeImage
                                      className="w-4 h-4"
                                      src="/images/home/right-arrow.svg"
                                      alt="Read More"
                                      width={16}
                                      height={16}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </article>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  {/* Pagination bullets (same markup as PHP) */}
                  {select_news.length > 1 && (
                    <div className="spotlight-navigation flex items-center justify-center gap-2 mt-[10px] relative">
                      <div className="curve-shape flex items-center justify-center -mb-[1px]" />
                      <div className="absolute z-10">
                        <div className="spotlight-pagination flex gap-1 items-center justify-between" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
