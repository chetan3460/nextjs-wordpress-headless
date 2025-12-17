export default function BlogCardSkeleton() {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col animate-pulse">
      {/* Featured Image Skeleton */}
      <div className="relative w-full aspect-16/10 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-6 flex flex-col grow">
        {/* Category Badge Skeleton */}
        <div className="mb-3">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-3 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-full"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Excerpt Skeleton */}
        <div className="mb-4 grow space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
        </div>
      </div>
    </article>
  );
}
