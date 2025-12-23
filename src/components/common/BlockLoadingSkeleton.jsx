/**
 * Block Loading Skeleton Component
 * Displays an animated loading state while blocks are being loaded
 */
export default function BlockLoadingSkeleton({ blockName }) {
  return (
    <div className="container mx-auto px-4 py-12 animate-in fade-in duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Loading Card */}
        <div className="bg-linear-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-8 shadow-sm">
          {/* Loading Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              {/* Spinning Circle */}
              <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
              {/* Inner Pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-2">
            <p className="text-gray-600 font-medium text-lg">Loading {blockName || 'Block'}...</p>
            <p className="text-gray-400 text-sm">Please wait while we fetch the content</p>
          </div>

          {/* Skeleton Content */}
          <div className="mt-8 space-y-4">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse"></div>

            {/* Content Skeletons */}
            <div className="space-y-3 pt-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse delay-75"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse delay-150"></div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="space-y-3">
                  <div
                    className="h-32 bg-gray-200 rounded-lg animate-pulse"
                    style={{ animationDelay: `${i * 75}ms` }}
                  ></div>
                  <div
                    className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"
                    style={{ animationDelay: `${i * 75}ms` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Loading Progress Bar */}
          <div className="mt-8">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 50%;
            margin-left: 25%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </div>
  );
}
