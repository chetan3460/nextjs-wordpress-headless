"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductListingBlock({ data }) {
  const {
    title = "Our Product Range",
    description = "<p>Discover our diverse portfolio of high-performance plastic solutions.</p>",
    product_items = [
      {
        title: "Automotive Components",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Auto" },
      },
      {
        title: "Medical Devices",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Med" },
      },
      {
        title: "Consumer Electronics",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Elec" },
      },
      {
        title: "Industrial Packaging",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Pack" },
      },
      {
        title: "Construction Material",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Const" },
      },
      {
        title: "Aerospace Parts",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Aero" },
      },
      {
        title: "Telecommunications",
        icon: {
          url: "https://placehold.co/100x100/eeeeee/333333?text=Telecom",
        },
      },
      {
        title: "Renewable Energy",
        icon: { url: "https://placehold.co/100x100/eeeeee/333333?text=Solar" },
      },
    ],
    cta = { title: "View All Products", url: "/products" },
  } = data || {};

  if (!product_items || product_items.length === 0) return null;

  // Display first 8 items matching the PHP Logic
  const display_items = product_items.slice(0, 8);

  return (
    <section className="home-product-listing-block py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="container-fluid xl:px-24">
        {/* Section Heading */}
        {(title || description) && (
          <div className="section-heading text-center max-w-[852px] mx-auto mb-12">
            {title && (
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="text-base leading-[21px] font-normal md:text-[18px] md:leading-[25px] text-gray-600"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {/* Product Grid (Marquee Replacement/Simplification) */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full my-6 md:my-12 justify-items-center">
            {display_items.map((item, index) => (
              <div
                key={index}
                className="product-card group relative w-full aspect-square bg-gray-50 hover:bg-white rounded-2xl border border-transparent hover:border-gray-200 shadow-sm transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer"
              >
                {/* Icon */}
                {item.icon && item.icon.url && (
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-4 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={item.icon.url}
                      alt={item.title || "Product Icon"}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Title */}
                {item.title && (
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                )}

                {/* Hover Link Overlay */}
                <div className="absolute inset-0 z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {cta && cta.url && (
          <div className="text-center mt-8">
            <Link href={cta.url} className="btn-primary inline-flex">
              {cta.title}
            </Link>
          </div>
        )}

        {/* Decorative Shape */}
        <div className="absolute left-0 lg:-left-10 md:-bottom-10 bottom-0 -z-1 pointer-events-none w-[73px] lg:w-auto opacity-50">
          <div className="w-24 h-24 bg-red-50 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
