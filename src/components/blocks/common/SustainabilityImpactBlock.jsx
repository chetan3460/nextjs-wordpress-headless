"use client";

import Image from "next/image";

export default function SustainabilityImpactBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    default_active_tab,
    tabs
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="sustainability_impact_block py-12">
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
        {tabs && tabs.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {tabs.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate tabs subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
