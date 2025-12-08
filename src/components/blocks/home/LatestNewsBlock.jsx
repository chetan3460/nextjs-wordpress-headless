"use client";

import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return "";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export default function LatestNewsBlock({ data }) {
  if (!data) return null;

  const { sub_title, heading, cta, select_news } = data;

  return (
    <section className="latest_news py-12" data-component="LatestNewsBlock">
      <div className="container-fluid mx-auto">
        {/* Header */}
        {(heading || sub_title) && (
          <div className="section-heading text-center">
            {heading && (
              <h2 className="fade-text text-3xl md:text-5xl font-bold mb-4">
                {heading}
              </h2>
            )}
            {sub_title && (
              <h3 className="anim-uni-in-up text-lg md:text-xl text-primary font-medium tracking-wide uppercase">
                {sub_title}
              </h3>
            )}
          </div>
        )}

        {/* News Grid - Wrapped in select_news-field or equivalent */}
        {select_news && select_news.length > 0 && (
          <div className="select_news-field">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {select_news.map((post, index) => {
                // Handle various data structures for featured image
                const imageUrl =
                  post.featured_media_src_url ||
                  post.x_featured_media_large ||
                  "/images/placeholder.jpg";
                const link = `/news/${post.slug}`;

                return (
                  <div
                    key={post.ID || index}
                    className="news-item group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative h-60 overflow-hidden">
                      <SafeImage
                        src={imageUrl}
                        alt={
                          post.title?.rendered ||
                          post.post_title ||
                          "News Image"
                        }
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="curve-shape absolute bottom-0 right-0 z-10"></div>
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        News
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-sm text-gray-500 mb-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        {formatDate(post.date)}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        <Link href={link}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.title?.rendered || post.post_title,
                            }}
                          />
                        </Link>
                      </h3>

                      <div
                        className="text-gray-600 mb-4 line-clamp-3 grow"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.excerpt?.rendered || post.post_excerpt || "",
                        }}
                      />

                      <Link
                        href={link}
                        className="inline-flex items-center text-primary font-semibold hover:text-red-700 transition-colors mt-auto"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {cta && cta.url && (
          <div className="text-center mt-12">
            <Link
              href={cta.url}
              target={cta.target || "_self"}
              className="btn btn-primary inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-primary hover:bg-red-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {cta.title || "View All News"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
