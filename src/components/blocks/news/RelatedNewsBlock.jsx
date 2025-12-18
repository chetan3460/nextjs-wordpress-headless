"use client";

import Image from "next/image";

export default function RelatedNewsBlock({ data }) {
  const {
    hide_block,
    section_title,
    posts_to_show,
    show_category,
    show_date
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="related_news_block py-12">
      <div className="container-fluid">
        {section_title && (
          <h2 className="text-3xl font-bold mb-6">{section_title}</h2>
        )}
      </div>
    </section>
  );
}
