"use client";

import Image from "next/image";

export default function GlobalFeaturesBlockLayout2({ data }) {
  const {
    hide_block,
    title,
    description,
    cta,
    features_items
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="global_features_block_layout_2 py-12">
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
        {cta?.url && (
          <a 
            href={cta.url} 
            target={cta.target} 
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-medium"
          >
            {cta.title || "Read More"}
          </a>
        )}
        {features_items && features_items.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {features_items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate features_items subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
