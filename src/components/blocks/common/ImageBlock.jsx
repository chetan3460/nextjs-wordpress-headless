'use client';

import Image from 'next/image';

/**
 * Image Block Block
 * Auto-generated from ACF Layout: image_block
 */
export default function ImageBlock({ data }) {
  const { anchor_id, image } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="image_block py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {image?.url && (
          <div className="relative aspect-video mb-8 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={image.url}
              alt={image.alt || 'Image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            />
          </div>
        )}
      </div>
    </section>
  );
}
