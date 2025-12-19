"use client";

/**
 * Contact Info Block Block
 * Auto-generated from ACF Layout: contact_info_block
 */
export default function ContactInfoBlock({ data }) {
  const { title, description, email, phone } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="contact_info_block py-12 lg:py-24 relative overflow-hidden">
      <div className="container-fluid mx-auto px-4">
        {/* Block content starts here */}
        {title && (
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">
            {title}
          </h2>
        )}
        {description && (
          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <div className="contact-info space-y-4">
          {email && (
            <div className="flex items-center gap-3">
              <span className="font-semibold">Email:</span>
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-3">
              <span className="font-semibold">Phone:</span>
              <a
                href={`tel:${phone}`}
                className="text-blue-600 hover:underline"
              >
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
