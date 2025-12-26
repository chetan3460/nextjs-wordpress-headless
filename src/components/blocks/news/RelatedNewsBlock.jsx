'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsLink } from '@/lib/utils/urls';

/**
 * Related News Block
 * Fetches and displays posts from the same category as the current post.
 */
export default function RelatedNewsBlock({
  data,
  posts: initialPosts = [],
  layout: propLayout = 'block', // "block" or "sidebar"
}) {
  const {
    hide_block,
    section_title = data?.section_title || 'Related Articles',
    show_date = data?.show_date !== undefined ? data.show_date : true,
    layout = propLayout, // Use propLayout as default if not in data
  } = data || {};

  const [posts, setPosts] = useState(initialPosts);

  // Update posts if initialPosts changes (e.g. from server fetch on page)
  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      setPosts(initialPosts);
    }
  }, [initialPosts]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  // Fetch posts if they aren't passed in (usually we'd want them from the page, but blocks can be self-contained)
  // Logic here handles the "Related News" layout in flexible content.

  useEffect(() => {
    if (posts && posts.length > 0 && swiperRef.current) {
      // Only initialize on mobile
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        import('swiper').then(({ default: Swiper }) => {
          import('swiper/modules').then(({ Navigation, Pagination }) => {
            new Swiper(swiperRef.current, {
              modules: [Navigation, Pagination],
              slidesPerView: 1,
              spaceBetween: 16,
              navigation: {
                nextEl: nextRef.current,
                prevEl: prevRef.current,
              },
              pagination: {
                el: paginationRef.current,
                clickable: true,
                type: 'custom',
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

  if (hide_block) return null;

  // Note: For RelatedNewsBlock when used as a FLEXIBLE CONTENT block,
  // it might need to fetch data based on the current page context.
  // We'll return a placeholder if no posts are available.

  if (!posts || posts.length === 0) {
    return (
      <div className="py-12 text-center text-gray-400 bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200">
        {section_title} (Waiting for data...)
      </div>
    );
  }

  return (
    <section className="related_news_block py-12">
      <div className={layout === 'sidebar' ? '' : 'container-fluid'}>
        <div className="h3 font-semibold mb-6">{section_title}</div>

        {/* List Layout (Shared for Mobile and Sidebar) */}
        <div className={`flex flex-col gap-4 ${layout === 'sidebar' ? '' : 'lg:hidden'}`}>
          {posts.map(post => {
            const link = getNewsLink(post);

            return (
              <article key={post.id} className="group">
                <Link
                  href={link}
                  className="flex bg-neutral-1 rounded-2xl overflow-hidden hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  {post.featuredImage && (
                    <div className="w-4/12 shrink-0 aspect-[1.5]">
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title}
                        width={120}
                        height={80}
                        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="w-8/12 p-3 flex flex-col justify-center">
                    {show_date && post.date && (
                      <time
                        dateTime={post.date}
                        className="text-xs text-[#555] tracking-normal mb-1"
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </time>
                    )}

                    <div className="text-sm font-medium text-black line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </div>

                    <span className="inline-flex items-center text-sm text-primary font-semibold mt-2">
                      Read More
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Desktop Grid Layout (Only for full-width blocks) */}
        {layout === 'block' && (
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {posts.slice(0, posts_to_show).map(post => {
              const link = getNewsLink(post);

              return (
                <article key={post.id} className="group">
                  <Link
                    href={link}
                    className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {post.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt || post.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-5 flex flex-col">
                      {show_date && post.date && (
                        <time dateTime={post.date} className="text-xs text-gray-500 mb-2">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </time>
                      )}

                      <div className="text-lg font-bold text-black line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </div>

                      <span className="text-sm text-primary font-semibold mt-auto">
                        Read More →
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
