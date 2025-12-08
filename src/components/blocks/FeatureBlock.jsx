"use client";

import Link from "next/link";
import Image from "next/image";

export default function FeatureBlock({ data }) {
  const {
    title = "Our Expertise",
    description = "<p>Decades of engineering excellence in every mold.</p>",
    feature_items = [
      {
        title: "Precision Molding",
        description: "Micron-level accuracy for complex components.",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
        },
      },
      {
        title: "Material Innovation",
        description: "Developing lighter, stronger polymer blends.",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/512/3063/3063823.png",
        },
      },
      {
        title: "Rapid Prototyping",
        description: "From concept to physical model in 48 hours.",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/512/3063/3063824.png",
        },
      },
      {
        title: "Global Logistics",
        description: "Efficient supply chain solutions worldwide.",
        icon: {
          url: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png",
        },
      },
    ],
    cta = { title: "Explore Services", url: "/services" },
  } = data || {};

  if (!feature_items || feature_items.length === 0) return null;

  return (
    <section className="home-features-block py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative">
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-24">
          {/* Left Column: Heading + CTA */}
          <div className="w-full lg:w-5/12 relative">
            <div className="section-heading text-center md:text-left">
              {title && (
                <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
                  {title}
                </h2>
              )}
              {description && (
                <div
                  className="prose text-gray-600 text-lg"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>

            {/* CTA (Desktop) */}
            {cta && cta.url && (
              <div className="hidden lg:block mt-8">
                <Link href={cta.url} className="btn-primary inline-flex">
                  {cta.title}
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Feature Grid */}
          <div className="mt-8 md:mt-0 w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-10">
              {feature_items.map((item, index) => (
                <div
                  key={index}
                  className="feature-item p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  {/* Icon */}
                  {item.icon && item.icon.url && (
                    <div className="feature-icon mb-4">
                      <Image
                        src={item.icon.url}
                        alt={item.title || "Icon"}
                        width={56}
                        height={56}
                        className="w-[56px] h-[56px] object-contain"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="feature-content">
                    {item.title && (
                      <div className="h3 my-1 md:my-2 !font-semibold !text-gray-900 text-xl">
                        {item.title}
                      </div>
                    )}
                    {item.description && (
                      <div
                        className="text-sm md:text-base tracking-[0.32px] text-gray-600"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA (Mobile) */}
          {cta && cta.url && (
            <div className="block lg:hidden mt-8 mx-auto text-center w-full">
              <Link href={cta.url} className="btn-primary inline-flex">
                {cta.title}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
