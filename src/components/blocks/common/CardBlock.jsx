"use client";

import Image from "next/image";

export default function CardBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    card_items,
    cta
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="card_block py-12">
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
        {card_items && card_items.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {card_items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate card_items subfields here */}
              </div>
            ))}
          </div>
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
      </div>
    </section>
  );
}
