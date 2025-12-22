"use client";

import Image from "next/image";

/**
 * leadership Block Slider Block
 * Auto-generated from ACF Layout: leadership_block_slider
 */
export default function LeadershipBlockSlider({ data }) {
  const {
    content
  } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="leadership_block_slider py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
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
