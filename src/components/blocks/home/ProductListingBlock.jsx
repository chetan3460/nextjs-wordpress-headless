"use client";

import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";
import SafeHTML from "@/components/common/SafeHTML";

export default function ProductListingBlock({ data }) {
  if (!data) return null;

  const { title, description, product_items, cta } = data;

  return (
    <section
      className="home-product-listing-block gsap-ignore"
      data-smooth="false"
      data-component="ProductListingBlock"
    >
      <div className="container-fluid items-center gap-24 relative">
        {/* Section Heading */}
        {(title || description) && (
          <div className="section-heading text-center max-w-[852px] mx-auto">
            {title && <h2 className="mb-1 fade-text">{title}</h2>}
            {description && (
              <SafeHTML html={description} className="anim-uni-in-up" />
            )}
          </div>
        )}

        {/* Product Items Marquee (Grid in practice) */}
        <div className="max-w-7xl mx-auto">
          {product_items && product_items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full my-6 md:my-12 justify-items-center">
              {product_items.slice(0, 8).map((item, index) => {
                const iconUrl = item.icon?.url || item.icon;
                return (
                  <div
                    key={index}
                    className="relative rounded-[12px] sm:rounded-3xl overflow-hidden"
                  >
                    {iconUrl && (
                      <>
                        <img
                          src={iconUrl}
                          alt={item.icon?.alt || item.title || "Product Image"}
                          width={500}
                          height={500}
                          loading="lazy"
                          className="object-cover size-full w-full h-full"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 rounded-[12px] sm:rounded-3xl [background:linear-gradient(148deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.00)_35.59%)]" />
                      </>
                    )}
                    {item.title && (
                      <span className="absolute top-0 left-0 text-white font-semibold text-xs  md:text-base pl-2.5 sm:pl-6 pt-2.5 sm:pt-4 z-10">
                        {item.title}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No product items found.
            </div>
          )}
        </div>

        {/* CTA Button */}
        {cta && cta.url && (
          <div className="text-center anim-uni-in-up">
            <Link href={cta.url} target={cta.target || "_self"} className="btn">
              {cta.title || "Learn More"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
