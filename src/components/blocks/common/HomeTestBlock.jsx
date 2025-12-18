"use client";

import Image from "next/image";

/**
 * Home Test Block Block
 * Auto-generated from ACF Layout: home_test_block
 */
export default function HomeTestBlock({ data }) {
  const {
    title,
    content
  } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="home_test_block py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {title && (
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">
            {title}
          </h2>
        )}
        {content && (
          <div 
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </section>
  );
}
