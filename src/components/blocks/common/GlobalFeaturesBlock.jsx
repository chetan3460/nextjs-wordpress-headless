"use client";

import Image from "next/image";

export default function GlobalFeaturesBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    feature_items
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="global_features_block py-12">
      <div className="container-fluid">
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
        {description && (
          <div 
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {feature_items && feature_items.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {feature_items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate feature_items subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
