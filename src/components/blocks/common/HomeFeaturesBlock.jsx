"use client";

import SafeImage from "@/components/common/SafeImage";
import SafeHTML from "@/components/common/SafeHTML";
import Link from "next/link";

export default function FeatureBlock({ data }) {
  if (!data) return null;

  const { title, description, feature_items, cta } = data;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="home-features-block">
      <div className="container-fluid relative">
        <div className="flex lg:flex-row flex-col gap-3 lg:gap-24">
          {/* Left Column */}
          <div className="w-full lg:w-5/12 relative">
            {(title || description) && (
              <div className="section-heading text-center md:text-left">
                {title && <h2 className="mb-1 fade-text">{title}</h2>}

                {description && (
                  <SafeHTML html={description} className="anim-uni-in-up" />
                )}
              </div>
            )}

            {/* CTA Desktop */}
            {cta?.url && (
              <div className="hidden lg:block mt-6 anim-uni-in-up">
                <Link
                  href={cta.url}
                  target={cta.target || "_self"}
                  className="btn"
                >
                  {cta.title || "Learn More"}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column */}
          {feature_items && feature_items.length > 0 && (
            <div className="mt-4 md:mt-0 w-full lg:w-7/12 ">
              <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-10">
                {feature_items.map((item, index) => {
                  const icon = item.icon;
                  const item_title = item.title;
                  const item_description = item.description;
                  const delay = (index + 1) * 0.2; // PHP logic: increases by 0.2 each item

                  return (
                    <div
                      key={index}
                      className="feature-item "
                      data-delay={delay.toFixed(1)}
                    >
                      {/* Icon */}
                      {icon?.url && (
                        <div className="feature-icon">
                          <img
                            className="w-[56px] h-[56px]"
                            src={icon.url}
                            alt={icon.alt || item_title}
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="feature-content">
                        {item_title && (
                          <div className="h3 my-1 md:my-2 !font-semibold !text-grey-1">
                            {item_title}
                          </div>
                        )}

                        {item_description && (
                          <div
                            className="text-sm md:text-base tracking-[0.32px]"
                            dangerouslySetInnerHTML={{
                              __html: item_description,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA Mobile */}
          {cta?.url && (
            <div className="block lg:hidden mt-7 mx-auto anim-uni-in-up">
              <Link
                href={cta.url}
                target={cta.target || "_self"}
                className="btn"
              >
                {cta.title || "Learn More"}
              </Link>
            </div>
          )}
        </div>

        {/* Decorative Shape (Mobile) */}
        <div
          className="md:hidden block absolute right-0 bottom-0 -z-1 pointer-none w-[85px]"
          data-speed="1.25"
        >
          <img
            src="/assets/images/home/shapes/shape-4.webp"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
