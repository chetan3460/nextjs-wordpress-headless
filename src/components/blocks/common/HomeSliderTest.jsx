"use client";

import Image from "next/image";

/**
 * Home Slider Test Block
 * Auto-generated from ACF Layout: home_slider_test
 */
export default function HomeSliderTest({ data }) {
  const {
    title,
    content,
    item_repeater
  } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="home_slider_test py-12 lg:py-24 relative overflow-hidden">
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
        {item_repeater && item_repeater.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {item_repeater.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                {/* Repeater item: item_repeater */}
                <pre className="text-xs text-gray-400 overflow-auto">{JSON.stringify(item, null, 2)}</pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
