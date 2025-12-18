"use client";

import Image from "next/image";

export default function NewsFeaturedBlock({ data }) {
  const { hide_block, section_title, featured_posts } = data || {};

  if (hide_block) return null;

  return (
    <section className="news_featured_block">
      <div className="">
        {section_title && (
          <h2 className="text-3xl font-bold mb-6">{section_title}</h2>
        )}
      </div>
    </section>
  );
}
