import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/wordpress/news";

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Featured Image */}
      <Link
        href={`/our-company/news-updates/${post.slug}`}
        className="relative h-64 w-full overflow-hidden bg-gray-100"
      >
        {post.featuredImage ? (
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Category Badge */}
        {post.category && (
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-red-50 rounded-full">
              {post.category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="mb-3">
          <Link
            href={`/our-company/news-updates/${post.slug}`}
            className="text-xl font-bold text-gray-900 hover:text-primary transition-colors line-clamp-2"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <div
          className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 grow [&>p]:line-clamp-2 [&>p]:m-0"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readTime} min read
          </span>
        </div>
      </div>
    </article>
  );
}
