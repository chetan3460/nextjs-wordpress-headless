"use client";

import Image from "next/image";

export default function TeamMembersBlock({ data }) {
  const {
    hide_block,
    title,
    description
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="team_members_block py-12">
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
      </div>
    </section>
  );
}
