"use client";

import Image from "next/image";

export default function DistributorSalesTeamBlock({ data }) {
  const {
    hide_block,
    main_title,
    main_description,
    distributor_section,
    contact_information
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="distributor_sales_team_block py-12">
      <div className="container-fluid">
        {main_title && (
          <h2 className="text-3xl font-bold mb-6">{main_title}</h2>
        )}
        {main_description && (
          <div 
            className="prose max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: main_description }}
          />
        )}
      </div>
    </section>
  );
}
