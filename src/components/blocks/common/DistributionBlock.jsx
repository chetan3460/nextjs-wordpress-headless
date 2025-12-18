"use client";

import Image from "next/image";

export default function DistributionBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    cta
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="distribution_block py-12">
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
      </div>
    </section>
  );
}
