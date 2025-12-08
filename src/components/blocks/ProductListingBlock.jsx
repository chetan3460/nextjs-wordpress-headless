"use client";

import Link from "next/link";
import SafeImage from "@/components/common/SafeImage";

export default function ProductListingBlock({ data }) {
  if (!data) return null;

  const { title, description, product_items, cta } = data;

  return (
    <section
      className="home_product_listing_block py-12"
      data-component="ProductListingBlock"
    >
      <div className="container-fluid mx-auto">
        {(title || description) && (
          <div className="section-heading text-center">
            {title && (
              <h2 className="fade-text text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {description && (
              <div
                className="anim-uni-in-up text-lg text-gray-600 max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>
        )}

        {product_items && product_items.length > 0 && (
          <div className="product_items-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {product_items.map((item, index) => (
              <div
                key={index}
                className="product_items-item flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                {item.icon && (
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 relative w-16 h-16">
                    <SafeImage
                      src={item.icon.url}
                      alt={item.icon.alt || item.title || "Product Icon"}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {item.title && (
                  <div className="title text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {cta && cta.url && (
          <div className="text-center mt-12">
            <Link
              href={cta.url}
              target={cta.target || "_self"}
              className="btn btn-primary inline-flex items-center justify-center px-8 py-3 text-white bg-primary hover:bg-red-700 rounded-full transition-colors"
            >
              {cta.title || "View All Products"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
