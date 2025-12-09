"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SafeImage from "@/components/common/SafeImage";
import SafeHTML from "@/components/common/SafeHTML";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { day: "numeric", month: "short" }; // 'j M' format -> '9 Dec'
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export default function LatestNewsBlock({ data }) {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  if (!data) return null;

  const { sub_title, heading, cta, select_news } = data;
  const newsCount = select_news?.length || 0;

  return (
    <section className="news-list-block">
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
                type: "custom",
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
                console.log("News Post Data:", {
                  id: post.ID,
                  title: post.title,
                  featured_media: post.featured_media_src_url,
                  x_featured: post.x_featured_media_large,
                });
                // Handle various data structures for featured image
                const imageUrl =
                  post.featured_image || // New field from fetchPostById
                  post.featured_media_src_url ||
                  post.x_featured_media_large ||
                  "/images/placeholder.jpg";

                // Extract slug from URL or use post.slug directly
                // post.url might be like: "http://localhost/nextjs-wp/news-updates/dignissimos-voluptas-error-doloribus/"
                let slug = post.slug;
                if (!slug && post.url) {
                  // Extract slug from URL (last segment before trailing slash)
                  const urlParts = post.url.replace(/\/$/, "").split("/");
                  slug = urlParts[urlParts.length - 1];
                }
                const link = slug ? `/news/${slug}` : "#";

                // Map categories from object array if present
                const categories = Array.isArray(post.categories)
                  ? post.categories.map((c) => c.name)
                  : post.categories_names || [];

                // Mock read time or use if available
                const readTime = post.read_time || "5";
                const title =
                  post.title?.rendered ||
                  post.title ||
                  post.post_title ||
                  "Untitled";

                return (
                  <SwiperSlide
                    key={post.ID || post.id || index}
                    className="h-auto"
                  >
                    <div className="news-item rounded-2xl flex flex-col flex-shrink-0 transition-all duration-300 group animate-card-3 h-full">
                      {/* Image Section */}
                      <div className="relative overflow-hidden h-64">
                        <Link href={link} className="block w-full h-full">
                          <img
                            src={imageUrl}
                            alt={title}
                            className="rounded-t-2xl lazy-image object-cover w-full h-full scale-100 duration-700 transition-all group-hover:scale-110 overflow-hidden"
                          />
                        </Link>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col gap-4 items-start justify-between bg-gray-100 px-5 pt-5 pb-7  relative min-h-[170px] flex-grow rounded-b-2xl">
                        {/* Categories Pills */}
                        {categories && categories.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {categories.slice(0, 3).map((cat, idx) => (
                              <span key={idx} className="badge">
                                {cat}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <Link href={link} className="block">
                          <div className="text-base font-semibold leading-[19px] text-gray-900 line-clamp-2">
                            <SafeHTML html={title} />
                          </div>
                        </Link>

                        {/* Date and Read Time */}
                        <div className="flex justify-between items-center font-medium text-base text-gray-500 gap-1.5 w-full mt-auto">
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>{readTime} min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Slider Navigation & Pagination */}
            <div
              className={`mt-3 flex justify-center items-center gap-4 ${
                newsCount >= 4 ? "lg:hidden" : ""
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
                  href={cta.url}
                  target={cta.target || "_self"}
                  className="btn" // Assuming generic btn class is handled by global styles as per PHP
                >
                  {cta.title || "View All News"}
                </Link>
              </div>
            )}

            {/* Shape Image (Mobile) */}
            <div className="md:hidden block absolute left-0 bottom-0 -z-1 pointer-none opacity-50">
              {/* Placeholder for shape or empty if not critical */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
