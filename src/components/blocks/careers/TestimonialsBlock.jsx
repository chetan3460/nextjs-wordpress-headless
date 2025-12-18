"use client";

import Image from "next/image";

export default function TestimonialsBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    testimonials,
    slider_settings
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="testimonials_block py-12">
      <div className="container-fluid">
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
        {testimonials && testimonials.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate testimonials subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
