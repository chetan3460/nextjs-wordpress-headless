"use client";

import Image from "next/image";

export default function ServiceListBlock({ data }) {
  const {
    title
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="service_list_block py-12">
      <div className="container-fluid">
        {title && (
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
        )}
      </div>
    </section>
  );
}
