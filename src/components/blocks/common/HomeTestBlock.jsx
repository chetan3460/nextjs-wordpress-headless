"use client";

import Image from "next/image";

/**
 * Home Test Block Block
 * Auto-generated from ACF Layout: home_test_block
 */
export default function HomeTestBlock({ data }) {
  const { title, content, test, hide_block = false } = data || {};

  if (hide_block) return null;

  return (
    <section className="home_test_block py-12 lg:py-24 relative overflow-hidden bg-gray-50">
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
        {test && (
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm font-semibold text-blue-900">Test Field:</p>
            <p className="text-blue-800">{test}</p>
          </div>
        )}
      </div>
    </section>
  );
}
