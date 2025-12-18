"use client";

import Image from "next/image";

export default function ServicePageTestBlock({ data }) {
  const {
    title,
    content
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="service_page_test_block py-12">
      <div className="container-fluid">
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
        {content && (
          <div 
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}
