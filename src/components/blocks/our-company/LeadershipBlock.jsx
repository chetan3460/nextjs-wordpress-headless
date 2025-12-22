"use client";

import Image from "next/image";

export default function LeadershipBlock({ data }) {
  const {
    hide_block,
    title,
    description,
    leaders_image,
    quote_message,
    leader_title,
    leadere_designation,
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="leadership_block py-12">
      <div className="container-fluid">
        <div className="section-heading ">
          {title && <h2 className="">{title}</h2>}
          {description && (
            <div
              className="prose max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
        {leaders_image?.url && (
          <div className="relative aspect-video mb-6 overflow-hidden rounded-xl">
            <Image
              src={leaders_image.url}
              alt={
                leaders_image.alt ||
                "leaders Image [ width: 364px; height: 350px;  ]"
              }
              fill
              className="object-cover"
            />
          </div>
        )}
        {quote_message && (
          <div
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: quote_message }}
          />
        )}
        {leader_title && (
          <h2 className="text-3xl font-bold mb-2">{leader_title}</h2>
        )}
        {leadere_designation && (
          <p className="text-xl text-grey-3 mb-6">{leadere_designation}</p>
        )}
      </div>
    </section>
  );
}
