"use client";

import Image from "next/image";

export default function CertificationBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    certification_items
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="certification_block py-12">
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
        {certification_items && certification_items.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {certification_items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate certification_items subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
