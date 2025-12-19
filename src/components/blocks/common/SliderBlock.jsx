"use client";

import Image from "next/image";

/**
 * Slider Block Block
 * Auto-generated from ACF Layout: slider_block
 */
export default function SliderBlock({ data }) {
  const {
    title
  } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="slider_block py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {title && (
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">
            {title}
          </h2>
        )}
      </div>
    </section>
  );
}
