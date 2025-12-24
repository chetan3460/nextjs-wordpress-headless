'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import SafeImage from '@/components/common/SafeImage';
import SafeHTML from '@/components/common/SafeHTML';

import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroBlock({ data }) {
  const spotlightPaginationRef = useRef(null);
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
      <div className="container-fluid relative flex md:flex-row flex-col items-center justify-between">
        {/* HERO SLIDER */}
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          loop={false}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          touchRatio={1}
          touchAngle={45}
          grabCursor={true}
          simulateTouch={true}
          allowTouchMove={true}
          // pagination={{ clickable: true }}
          className="hero-slider relative z-0 w-full"
        >
          {banner_slider.map((slide, i) => {
            const image = slide.banner_images;
            if (!image) return null;

            const imageUrl = image?.url || image;
            const imageAlt = image?.alt || `Hero slide ${i + 1}`;

            const slide_title = slide.banner_title || '';
            const slide_subtitle = slide.banner_subtitle || '';
            const slide_description = slide.banner_description || '';

            return (
              <SwiperSlide key={i}>
                {/* Swiper already renders `.swiper-slide`, so just wrap content */}
                <div className="relative w-full ">
                  {/* IMAGE */}
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="object-cover h-full w-full  aspect-[1] sm:aspect-[1.8] md:aspect-auto"
                  />

                  {/* OVERLAY CONTENT */}
                  <div className="absolute inset-0 flex justify-start items-start sl:items-center max-lg:flex-col z-1">
                    {/* Dark gradient overlay for text readability */}

                    <div className="left-block flex flex-col relative w-full  space-y-6 text-white z-10 text-center">
                      {/* Titles container */}
                      <div className="hero-titles-container ">
                        {slide_title && (
                          <span className="badge badge-yellow mb-5 px-4 py-2 text-sm !inline-block bg-[#fdf7bc] !border-0 text-black font-normal ">
                            {slide_title}
                          </span>
                        )}

                        {slide_subtitle && (
                          <h1 className="hero-title font-medium !text-white tracking-[-1.5px] mb-4 text-[clamp(2.5rem,8vw,4.25rem)] leading-[0.95] max-w-[1000px] mx-auto">
                            {slide_subtitle}
                          </h1>
                        )}

                        {slide_description && (
                          <SafeHTML
                            html={slide_description}
                            className="hero-description  prose-p:text-[14px] sm:prose-p:text-base prose-p:text-white! prose-p:leading-[22px] md:prose-p:text-[18px] mt-2 md:mt-4 max-w-[625px] mb-10 sm:mb-14 max-sm:max-w-[420px] mx-auto"
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
                            rel={cta.target === '_blank' ? 'noopener noreferrer' : undefined}
                          >
                            {cta.title || 'Get in Touch'}
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
          <div className="relative z-20 flex md:self-end max-md:w-full pointer-events-none">
            <div className="right-block flex justify-end relative md:absolute end-0 bottom-0 mt-2 sl:mt-0 w-full md:w-auto pointer-events-auto">
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
                      el: spotlightPaginationRef.current,
                    }}
                    className="w-full"
                  >
                    {select_news.map((news_post, idx) => {
                      const newsTitle = news_post.title || '';
                      const newsUrl = news_post.url || '#';
                      const newsCategories = news_post.categories || [];

                      return (
                        <SwiperSlide key={idx}>
                          <article className="p-5">
                            <div className="flex gap-3">
                              <div className="flex-1 min-w-0">
                                {/* Tags */}
                                {newsCategories.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mb-3">
                                    {newsCategories.slice(0, 2).map((cat, catIdx) => (
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
                        <div
                          ref={spotlightPaginationRef}
                          className="spotlight-pagination flex gap-1 items-center justify-between"
                        />
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
