"use client";

import Image from "next/image";

/**
 * Team Card Component
 * Matches the "Team Card Component" PHP template
 */
export default function TeamCard({ member }) {
  if (!member) return null;

  const { title, position, featuredImage } = member;

  return (
    <div className="team-member-card flex flex-col items-stretch group mb-3 lg:mb-6 rounded-2xl  h-full">
      {/* Member Photo with gradient background */}
      <div className="relative">
        <div className="bg-[linear-gradient(180deg,#BABAB8_0%,#FFF_100%)] rounded-2xl overflow-hidden relative flex items-center justify-center aspect-4/5">
          {featuredImage?.url ? (
            <Image
              src={featuredImage.url}
              alt={featuredImage.alt || title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-end justify-center pb-8">
              <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Member Info Card */}
      <div className="bg-sky-50 p-4 md:p-6 rounded-b-2xl h-full flex flex-col items-stretch min-h-[108px] md:min-h-[125px] justify-start shadow-sm border-t-0">
        <div className="text-xl md:text-2xl font-semibold text-grey-1 tracking-[-0.48px] line-clamp-1">
          {title}
        </div>

        {position && (
          <div className="text-base md:text-lg text-grey-3 font-normal max-w-[220px] md:max-w-[288px] mt-1 line-clamp-2">
            {position}
          </div>
        )}
      </div>
    </div>
  );
}
