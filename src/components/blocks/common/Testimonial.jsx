'use client';

import Image from 'next/image';

/**
 * Testimonial Block
 * Auto-generated from ACF Layout: testimonial
 */
export default function Testimonial({ data }) {
  const { quote, name, role, avatar } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="testimonial py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {avatar?.url && (
          <div className="relative aspect-video mb-8 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={avatar.url}
              alt={avatar.alt || 'Avatar'}
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
