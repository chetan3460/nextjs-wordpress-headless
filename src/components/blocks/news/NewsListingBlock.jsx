"use client";

import Image from "next/image";

export default function NewsListingBlock({ data }) {
  const {
    hide_block,
    section_title,
    posts_per_page,
    show_filters,
    show_search
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="news_listing_block py-12">
      <div className="container-fluid">
        {section_title && (
          <h2 className="text-3xl font-bold mb-6">{section_title}</h2>
        )}
      </div>
    </section>
  );
}
