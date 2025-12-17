"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedBlogs({ posts }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (posts && posts.length > 0 && swiperRef.current) {
      // Only initialize on mobile
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        import("swiper").then(({ default: Swiper }) => {
          import("swiper/modules").then(({ Navigation, Pagination }) => {
            new Swiper(swiperRef.current, {
              modules: [Navigation, Pagination],
              slidesPerView: 1,
              spaceBetween: 16,
              navigation: {
                nextEl: ".related-blogs-next",
                prevEl: ".related-blogs-prev",
              },
              pagination: {
                el: ".related-blogs-pagination",
                clickable: true,
                type: "custom",
                renderCustom: (swiper, current, total) => {
                  return `${current}/${total}`;
                },
              },
            });
          });
        });
      }
    }
  }, [posts]);

  if (!posts || posts.length === 0) {
    return (
      <div className="sticky top-8">
        <div className="h3 font-semibold mb-3">Related Blogs</div>
        <div className="text-center text-gray-500">
          <p>No related posts found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-8">
      <div className="h3 font-semibold mb-3">Related Blogs</div>

      {/* Mobile Swiper Slider */}
      <div className="lg:hidden">
        <div ref={swiperRef} className="swiper">
          <div className="swiper-wrapper">
            {posts.map((post) => (
              <div key={post.id} className="swiper-slide">
                <article className="group">
                  <Link
                    href={`/our-company/news-updates/${post.slug}`}
                    className="flex bg-neutral-1 rounded-2xl h-full"
                  >
                    {post.featuredImage && (
                      <div className="w-4/12 overflow-hidden rounded-tl-2xl rounded-bl-2xl min-w-[120px] aspect-[1.5]">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt || post.title}
                          width={120}
                          height={80}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="w-8/12 p-3 pb-4 flex flex-col justify-between">
                      <div>
                        <time
                          dateTime={post.date}
                          className="text-xs text-[#555] tracking-normal"
                        >
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </time>

                        <div className="text-sm font-medium text-black line-clamp-2 mt-1 group-hover:text-primary transition-colors">
                          {post.title}
                        </div>
                      </div>

                      <span className="inline-flex items-center text-sm text-primary font-semibold mt-2">
                        Read More
                      </span>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {posts.length > 1 && (
          <div className="swiper-navigation flex items-center justify-center mt-3 gap-4">
            <div className="related-blogs-prev swiper-btn-prev cursor-pointer">
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

            <div className="related-blogs-pagination text-primary text-xs font-medium w-auto! flex gap-1"></div>

            <div className="related-blogs-next swiper-btn-next cursor-pointer">
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
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block space-y-6">
        {posts.slice(0, 3).map((post) => (
          <article key={post.id} className="group">
            <Link
              href={`/our-company/news-updates/${post.slug}`}
              className="flex bg-neutral-1 rounded-2xl h-full"
            >
              {post.featuredImage && (
                <div className="w-4/12 overflow-hidden rounded-tl-2xl rounded-bl-2xl aspect-[1.5] min-w-[120px]">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    width={120}
                    height={80}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="w-8/12 p-3 pb-4 flex flex-col">
                <div>
                  <time
                    dateTime={post.date}
                    className="text-xs text-[#555] tracking-normal"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </time>

                  <div className="text-sm font-medium text-black line-clamp-2 mt-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </div>
                </div>

                <span className="inline-flex items-center text-sm text-primary font-semibold mt-2">
                  Read More
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
