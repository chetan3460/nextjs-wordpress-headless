"use client";

import Image from "next/image";

export default function NewsContentBlock({ data }) {
  const {
    hide_block,
    content_type,
    title,
    subtitle,
    content,
    image,
    gallery_images,
    background_color
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="news_content_block py-12">
      <div className="container-fluid">
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
        {subtitle && (
          <h2 className="text-3xl font-bold mb-6">{subtitle}</h2>
        )}
        {content && (
          <div 
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {image?.url && (
          <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
            <Image
              src={image.url}
              alt={image.alt || "Image"}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
