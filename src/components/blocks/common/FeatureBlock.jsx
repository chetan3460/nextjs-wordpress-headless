"use client";

import SafeImage from "@/components/common/SafeImage";
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
    <section
      className="home_features_block py-12"
      data-component="FeatureBlock"
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

        {feature_items && feature_items.length > 0 && (
          <div className="feature_items-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feature_items.map((item, index) => (
              <div
                key={index}
                className="feature_items-item p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {item.icon?.url && (
                  <div className="mb-4">
                    <SafeImage
                      src={item.icon.url}
                      alt={item.icon.alt || item.title || "Feature Icon"}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}

                {item.title && (
                  <div className="title text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </div>
                )}

                {item.description && (
                  <div
                    className="description text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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
              {cta.title || "Learn More"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
