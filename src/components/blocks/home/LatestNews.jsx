'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Clock, BookOpen } from 'lucide-react';
import SafeHTML from '@/components/common/SafeHTML';
import Image from 'next/image';
import { convertToNextPath, getNewsLink } from '@/lib/utils/urls';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Helper to format date
const formatDate = dateString => {
  if (!dateString) return '';
  const options = { day: 'numeric', month: 'short' }; // 'j M' format -> '9 Dec'
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function LatestNewsBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  if (!data) return null;

  const { sub_title, heading, cta, select_news } = data;
  const newsCount = select_news?.length || 0;

  return (
    <section className="news-list-block bg-[#f9fafb] py-12">
      <div className="container-fluid mx-auto relative overflow-hidden">
        {/* Header */}
        {(heading || sub_title) && (
          <div className="section-heading text-center mb-4 sm:mb-8">
            {heading && <h2 className="mb-1 fade-text">{heading}</h2>}
            {sub_title && (
              <div className="anim-uni-in-up ">
                <SafeHTML html={sub_title} />
              </div>
            )}
          </div>
        )}

        {/* News Slider Container */}
        {select_news && newsCount > 0 && (
          <div className="news-slider-container">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={false}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
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
                1024: { slidesPerView: 3 },
              }}
              className="news-slider swiper fade-up-stagger-wrap gsap-no-scroll"
            >
              {select_news.map((post, index) => {
                // Handle various data structures for featured image
                const imageUrl =
                  post.featured_image || // New field from fetchPostById
                  post.featured_media_src_url ||
                  post.x_featured_media_large ||
                  '/images/placeholder.jpg';

                const link = getNewsLink(post);

                // Map categories from object array if present
                const categories = Array.isArray(post.categories)
                  ? post.categories.map(c => c.name)
                  : post.categories_names || [];

                // Mock read time or use if available
                const readTime = post.read_time || '5';
                const title = post.title?.rendered || post.title || post.post_title || 'Untitled';

                return (
                  <SwiperSlide key={post.ID || post.id || index} className="h-auto">
                    <article className="bg-white dark:bg-background-5 rounded-[20px] overflow-hidden border border-stroke-4 dark:border-stroke-5 max-w-[500px] mx-auto md:mx-0 md:max-w-full h-full flex flex-col">
                      {/* Image */}
                      <figure className="relative overflow-hidden">
                        <Link href={link} className="block aspect-16/10">
                          <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                        </Link>
                      </figure>

                      {/* Content */}
                      <div className="p-6 space-y-6 flex flex-col grow">
                        {/* Badges and Meta Info */}
                        <div className="flex items-center justify-between xl:gap-6 gap-3.5 flex-wrap">
                          {/* Category Badge */}
                          {categories && categories.length > 0 && (
                            <span className="badge badge-green">{categories[0]}</span>
                          )}

                          {/* Time Indicator */}
                          <span className="flex items-center gap-1">
                            <Clock
                              className="w-5 h-5 stroke-secondary dark:stroke-accent"
                              strokeWidth={1.5}
                            />
                            <span className="text-tagline-3 font-normal text-secondary dark:text-accent whitespace-nowrap">
                              {formatDate(post.date)}
                            </span>
                          </span>

                          {/* Read Time Indicator */}
                          <span className="flex items-center gap-1">
                            <BookOpen
                              className="w-5 h-5 stroke-secondary dark:stroke-accent"
                              strokeWidth={1.5}
                            />
                            <span className="text-tagline-3 font-normal text-secondary dark:text-accent whitespace-nowrap">
                              {readTime} min read
                            </span>
                          </span>
                        </div>

                        {/* Title and Description */}
                        <div className="space-y-2 grow">
                          <Link href={link}>
                            <h3 className=" text-black transition-colors mb-2">{title}</h3>
                          </Link>
                          {post.excerpt && (
                            <div className="line-clamp-2">
                              <SafeHTML html={post.excerpt.rendered || post.excerpt} />
                            </div>
                          )}
                        </div>

                        {/* Read More Button */}
                        <div>
                          <Link
                            href={link}
                            className="btn hover:btn-secondary dark:hover:btn-accent dark:btn-transparent btn-white btn-md"
                          >
                            <span>Read more</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Slider Navigation & Pagination */}
            <div
              className={`mt-3 flex justify-center items-center gap-4 ${
                newsCount >= 4 ? 'lg:hidden' : ''
              } mb-6`}
            >
              <div
                ref={setPrevEl}
                className="swiper-btn-prev-pagination swiper-btn-prev w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
              >
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

            {/* CTA Button */}
            {cta && cta.url && (
              <div className="text-center mt-4 anim-uni-in-up">
                <Link
                  href={convertToNextPath(cta.url)}
                  target={cta.target || '_self'}
                  className="btn"
                >
                  {cta.title || 'View All News'}
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
