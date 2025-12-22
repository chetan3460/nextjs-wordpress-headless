"use client";

import Image from "next/image";
import SafeHTML from "@/components/common/SafeHTML";

/**
 * Leadership Block Component
 * Replicated from the PHP template for pixel-perfect UI
 */
export default function LeadershipBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    leaders_image,
    quote_message,
    leader_title,
    leadere_designation,
  } = data || {};

  if (hide_block) return null;

  // Render logic follows the PHP template structure
  return (
    <section
      className="leadership_block overflow-hidden"
      data-component="LeadershipBlock"
    >
      <div className="container-fluid mx-auto">
        {/* Section Heading */}
        <div className="section-heading text-center lg:pb-10">
          {title && (
            <h2 className="fade-text text-3xl md:text-5xl font-bold mb-4">
              {title}
            </h2>
          )}

          {description && (
            <div className="description-content prose max-w-none anim-uni-in-up mx-auto">
              <SafeHTML html={description} />
            </div>
          )}
        </div>

        {/* Main Content: Image and Quote */}
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-15 justify-center items-center lg:items-end">
          {/* Image Wrapper */}
          {leaders_image && (
            <div className="leaders_image-wrapper relative flex justify-center items-end lg:order-1 order-2">
              <div className="bg-pattern-wrapper">
                <Image
                  className="size-full object-cover"
                  src="/images/team/bg-blue.png"
                  alt="Pattern Background"
                  width={364}
                  height={350}
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 mx-auto right-0 w-full h-full flex items-end justify-center custom-rounded max-md:w-[212px]">
                <div className="relative w-full h-full max-w-[364px]">
                  {leaders_image?.url && (
                    <Image
                      src={leaders_image.url}
                      alt={leaders_image.alt || leader_title || "Leader"}
                      fill
                      className="leaders_image-image object-contain object-bottom"
                      sizes="(max-width: 768px) 212px, 364px"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Quote Section */}
          <div className="quote-section flex items-start gap-4 lg:gap-10 justify-between max-w-[500px] max-lg:mx-auto max-lg:pb-10 lg:order-2 order-1">
            <div className="quote-icon shrink-0">
              <Image
                className="max-lg:size-[29px]"
                src="/images/icons/quote.svg"
                alt="Quote Icon"
                width={50}
                height={40}
              />
            </div>

            <div className="flex flex-col gap-4 lg:gap-10">
              {quote_message && (
                <div className="quote_message-content quote_content-content prose max-w-none text-[#111] prose-p:text-sm md:prose-p:text-2xl md:prose-p:leading-[36px] prose-p:font-normal">
                  <SafeHTML html={quote_message} />
                </div>
              )}

              <div className="leader-meta">
                {leader_title && (
                  <div className="quote_name-text body-1 text-grey-7 font-semibold leading-[26px] tracking-[0.36px] md:mb-1 text-xl">
                    {leader_title}
                  </div>
                )}

                {leadere_designation && (
                  <div className="quote_designation-text body-1 text-grey-7 font-normal leading-[26px] tracking-[0.36px] text-lg">
                    {leadere_designation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
