"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LatestNewsBlock({ data }) {
  const {
    headline = "Latest News",
    subtitle = "Stay Updated",
    items = [
      {
        id: 1,
        title: "Resplast Expands Production Capacity",
        excerpt:
          "New machinery doubles our daily output to meet growing global demand.",
        date: "Oct 24, 2023",
        slug: "production-expansion",
        featuredImage: {
          node: {
            sourceUrl:
              "https://placehold.co/600x400/eeeeee/333333?text=Expansion",
          },
        },
      },
      {
        id: 2,
        title: "Sustainability Award 2023",
        excerpt:
          "Recognized for our eco-friendly initiatives and zero-waste policy.",
        date: "Sep 15, 2023",
        slug: "sustainability-award",
        featuredImage: {
          node: {
            sourceUrl: "https://placehold.co/600x400/eeeeee/333333?text=Award",
          },
        },
      },
      {
        id: 3,
        title: "Q4 Financial Results",
        excerpt:
          "Strong growth reported across all sectors despite market volatility.",
        date: "Nov 01, 2023",
        slug: "financial-results",
        featuredImage: {
          node: {
            sourceUrl:
              "https://placehold.co/600x400/eeeeee/333333?text=Finance",
          },
        },
      },
      {
        id: 4,
        title: "New Partnership Announced",
        excerpt: "Strategic alliance with leading automotive manufacturer.",
        date: "Aug 20, 2023",
        slug: "new-partnership",
        featuredImage: {
          node: {
            sourceUrl:
              "https://placehold.co/600x400/eeeeee/333333?text=Partnership",
          },
        },
      },
    ],
    link = { title: "View All News", url: "/news" },
  } = data || {};

  return (
    <section className="latest-news-block py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-fluid xl:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="section-heading text-left !mb-0 max-w-2xl">
            {subtitle && (
              <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            {headline && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {headline}
              </h2>
            )}
          </div>

          {/* Desktop Nav Controls */}
          <div className="hidden md:flex gap-4">
            <button className="news-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors">
              ←
            </button>
            <button className="news-next w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>

        {/* News Slider */}
        <div className="news-slider relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.2 },
            }}
            navigation={{
              prevEl: ".news-prev",
              nextEl: ".news-next",
            }}
            className="!pb-12"
          >
            {items.map((post) => (
              <SwiperSlide key={post.id} className="h-auto">
                <article className="news-item flex flex-col h-full group cursor-pointer">
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={
                        post.featuredImage?.node?.sourceUrl ||
                        "https://placehold.co/600x400"
                      }
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                      {post.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mb-6 text-base">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/news/${post.slug || "#"}`}
                        className="inline-flex items-center text-red-600 font-bold uppercase text-xs tracking-wider gap-2 hover:gap-3 transition-all"
                      >
                        Read Article <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Nav Controls */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button className="news-prev w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors">
              ←
            </button>
            <button className="news-next w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors">
              →
            </button>
          </div>
        </div>

        {/* View All */}
        {link && link.url && (
          <div className="text-center mt-12 border-t border-gray-100 pt-12">
            <Link href={link.url} className="btn-primary inline-flex">
              {link.title}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
