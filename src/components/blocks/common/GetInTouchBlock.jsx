"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SafeHTML from "@/components/common/SafeHTML";
import { fetchFormidableForm } from "@/lib/wordpress/client";

export default function GetInTouchBlock({ data }) {
  const [formHTML, setFormHTML] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const { title, description, phone, email, country, address, form_id } = data;

  // Fetch form HTML when form_id is available
  useEffect(() => {
    if (!form_id) return;

    const loadForm = async () => {
      setFormLoading(true);
      setFormError(null);

      try {
        const formData = await fetchFormidableForm(form_id);
        if (formData.success && formData.html) {
          setFormHTML(formData.html);
        } else {
          setFormError("Form not found");
        }
      } catch (error) {
        console.error("Error loading form:", error);
        setFormError("Failed to load form");
      } finally {
        setFormLoading(false);
      }
    };

    loadForm();
  }, [form_id]);

  // Don't render if no content
  if (
    !title &&
    !description &&
    !phone &&
    !email &&
    !form_id &&
    !address &&
    !country
  ) {
    return null;
  }

  return (
    <section className="get-in-touch-block">
      <div className="container-fluid relative">
        <div className="section-heading text-center mb-8 relative !max-w-full">
          {title && <h2 className="mb-2 fade-text">{title}</h2>}

          {description && (
            <div className="mx-auto">
              <SafeHTML html={description} />
            </div>
          )}
        </div>

        <div className="flex md:flex-row flex-col gap-7 bg-sky-50 rounded-[36px] px-4 md:px-10 pt-4 md:pt-10 md:pb-16 pb-12 relative justify-between">
          {/* Left: contact info */}
          <div className="w-full md:w-4/12 space-y-6">
            {(phone || email || country || address) && (
              <div className="flex flex-col gap-4">
                {phone && (
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/50 text-black flex items-center justify-center">
                      <Image
                        src="/assets/images/contact/contact.svg"
                        alt="phone"
                        width={17}
                        height={17}
                        className="rotate-[-30deg]"
                      />
                    </div>
                    <div>
                      <a
                        className="text-grey-1 font-normal hover:text-primary transition-colors"
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                )}

                {email && (
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/50 text-black flex items-center justify-center">
                      <Image
                        src="/assets/images/contact/email.svg"
                        alt="email"
                        width={17}
                        height={17}
                      />
                    </div>
                    <div>
                      <a
                        className="text-grey-1 font-normal hover:text-primary transition-colors"
                        href={`mailto:${email}`}
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                )}

                {country && (
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/50 text-black flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 2.25C14.5 5.25 15.75 8.5 15.75 12C15.75 15.5 14.5 18.75 12 21.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M12 2.25C9.5 5.25 8.25 8.5 8.25 12C8.25 15.5 9.5 18.75 12 21.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2.25 12H21.75"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4.5 8.25H19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M4.5 15.75H19.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-grey-1 font-normal">{country}</span>
                    </div>
                  </div>
                )}

                {address && (
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/50 text-black flex items-center justify-center">
                      <Image
                        src="/assets/images/contact/location.svg"
                        alt="location"
                        width={17}
                        height={17}
                      />
                    </div>
                    <div>
                      <div className="text-grey-1 font-normal hover:text-primary transition-colors md:max-w-[299px]">
                        <SafeHTML html={address} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="w-full md:w-9/12 prose placeholder:!text-grey-3">
            {form_id && (
              <div>
                {formLoading && (
                  <div className="text-center py-8">
                    <p>Loading form...</p>
                  </div>
                )}

                {formError && (
                  <div className="text-center py-8 text-red-600">
                    <p>{formError}</p>
                  </div>
                )}

                {formHTML && !formLoading && !formError && (
                  <div
                    className="formidable-form-wrapper"
                    dangerouslySetInnerHTML={{ __html: formHTML }}
                  />
                )}
              </div>
            )}
          </div>

          <div className="curve-shape absolute end-0 right-[-1px] bottom-0"></div>
        </div>
      </div>
    </section>
  );
}
