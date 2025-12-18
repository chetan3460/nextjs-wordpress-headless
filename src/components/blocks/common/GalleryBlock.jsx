"use client";

import Image from "next/image";

export default function GalleryBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    gallery_items,
    show_tabs,
    gallery_categories
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="gallery_block py-12">
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
        {gallery_items && gallery_items.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {gallery_items.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate gallery_items subfields here */}
              </div>
            ))}
          </div>
        )}
        {gallery_categories && gallery_categories.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {gallery_categories.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate gallery_categories subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
