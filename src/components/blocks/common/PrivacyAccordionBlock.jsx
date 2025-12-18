"use client";

import Image from "next/image";

export default function PrivacyAccordionBlock({ data }) {
  const {
    acc
  } = data || {};

  if (hide_block) return null;

  return (
    <section className="privacy_accordion_block py-12">
      <div className="container-fluid">
        {acc && acc.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {acc.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                {/* Generate acc subfields here */}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
