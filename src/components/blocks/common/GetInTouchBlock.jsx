"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "@/app/css/plugins/phone-input.css";
import Image from "next/image";
import SafeHTML from "@/components/common/SafeHTML";
import { fetchGravityForm, submitGravityForm } from "@/lib/wordpress/client";

export default function GetInTouchBlock({ data }) {
  const [formFields, setFormFields] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const { title, description, phone, email, country, address, form_id } = data;

  // Fetch Gravity Form fields when form_id is available
  useEffect(() => {
    if (!form_id) return;

    const loadForm = async () => {
      setFormLoading(true);
      setFormError(null);

      try {
        const formData = await fetchGravityForm(form_id);
        if (formData.success && formData.fields) {
          setFormFields(formData.fields);
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

  // Handle form submission
  const onSubmit = async (formData) => {
    setSubmitting(true);
    setSuccessMessage(null);

    try {
      const response = await submitGravityForm(form_id, formData);

      if (response.success) {
        setSuccessMessage("<h3>Thank you!</h3><p>" + response.message + "</p>");
        reset();
      } else {
        setSuccessMessage(
          '<p class="text-red-600">There was an error submitting the form.</p>'
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSuccessMessage(
        '<p class="text-red-600">There was an error submitting the form. Please try again.</p>'
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Render form field based on type
  const renderField = (field) => {
    const fieldId = `input_${field.id}`;
    // Force all fields to be required except textarea (message)
    const isRequired = field.type !== "textarea" ? true : field.isRequired;

    switch (field.type) {
      case "name":
        // Name field - render as single input if only one visible input
        const visibleInputs =
          field.inputs?.filter((input) => !input.isHidden) || [];

        if (visibleInputs.length <= 1) {
          // Single input - use the actual input ID (e.g., input_4.3)
          const inputId = visibleInputs[0]?.id
            ? `input_${visibleInputs[0].id}`
            : fieldId;
          const showLabel = field.labelPlacement !== "hidden_label";

          return (
            <div key={field.id}>
              {showLabel && (
                <label
                  htmlFor={inputId}
                  className="block mb-2 font-medium text-sm"
                >
                  {field.label}{" "}
                  {isRequired && <span className="text-red-600">*</span>}
                </label>
              )}
              <input
                id={inputId}
                type="text"
                {...register(inputId, { required: isRequired })}
                className="w-full h-12 px-4 bg-white rounded-lg  text-sm"
                placeholder={
                  field.placeholder ||
                  visibleInputs[0]?.label ||
                  "Enter your name"
                }
                aria-label={!showLabel ? field.label : undefined}
              />
              {errors[inputId] && (
                <span className="text-red-600 text-sm">
                  {field.errorMessage || "This field is required"}
                </span>
              )}
            </div>
          );
        }

        // Multiple visible inputs - render in grid
        return (
          <div key={field.id}>
            <label className="block mb-2 font-medium">
              {field.label}{" "}
              {isRequired && <span className="text-red-600">*</span>}
            </label>
            <div className="grid grid-cols-2 gap-4">
              {visibleInputs.map((input) => (
                <div key={input.id}>
                  <input
                    type="text"
                    {...register(`input_${input.id}`, { required: isRequired })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                    placeholder={input.label || input.placeholder || ""}
                  />
                </div>
              ))}
            </div>
            {errors[fieldId] && (
              <span className="text-red-600 text-sm">
                {field.errorMessage || "This field is required"}
              </span>
            )}
          </div>
        );

      case "select":
        const showSelectLabel = field.labelPlacement !== "hidden_label";
        return (
          <div key={field.id}>
            {showSelectLabel && (
              <label
                htmlFor={fieldId}
                className="block mb-2 font-medium text-sm"
              >
                {field.label}{" "}
                {isRequired && <span className="text-red-600">*</span>}
              </label>
            )}
            <select
              id={fieldId}
              {...register(fieldId, { required: isRequired })}
              className="w-full h-12 px-4 pr-10 bg-white rounded-lg  text-sm appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.25rem",
              }}
              aria-label={!showSelectLabel ? field.label : undefined}
            >
              <option value="">Select an option</option>
              {field.choices &&
                field.choices.map((choice, index) => (
                  <option key={index} value={choice.value || choice.text}>
                    {choice.text}
                  </option>
                ))}
            </select>
            {errors[fieldId] && (
              <span className="text-red-600 text-sm">
                {field.errorMessage || "This field is required"}
              </span>
            )}
          </div>
        );

      case "phone":
        const showPhoneLabel = field.labelPlacement !== "hidden_label";
        return (
          <div key={field.id}>
            {showPhoneLabel && (
              <label
                htmlFor={fieldId}
                className="block mb-2 font-medium text-sm"
              >
                {field.label}{" "}
                {isRequired && <span className="text-red-600">*</span>}
              </label>
            )}
            <Controller
              name={fieldId}
              control={control}
              rules={{ required: isRequired }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  defaultCountry="in"
                  value={value}
                  onChange={onChange}
                  className="phone-input-custom"
                  inputClassName="!w-full !h-12 !pl-0 !bg-white !rounded-r-lg !text-sm !outline-none focus:!ring-0"
                  countrySelectorStyleProps={{
                    buttonClassName:
                      "!h-12 !bg-white !rounded-l-lg !px-3 hover:!bg-gray-50",
                    buttonContentWrapperClassName:
                      "!h-full !flex !items-center",
                  }}
                />
              )}
            />
            {errors[fieldId] && (
              <span className="text-red-600 text-sm">
                {field.errorMessage || "This field is required"}
              </span>
            )}
          </div>
        );

      case "text":
      case "email":
        const validationRules = {
          required: isRequired
            ? field.errorMessage || "This field is required"
            : false,
        };

        // Add email validation pattern
        if (field.type === "email") {
          validationRules.pattern = {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: field.errorMessage || "Invalid email address",
          };
        }

        const showTextLabel = field.labelPlacement !== "hidden_label";
        return (
          <div key={field.id}>
            {showTextLabel && (
              <label
                htmlFor={fieldId}
                className="block mb-2 font-medium text-sm"
              >
                {field.label}{" "}
                {isRequired && <span className="text-red-600">*</span>}
              </label>
            )}
            <input
              id={fieldId}
              type={field.type}
              {...register(fieldId, validationRules)}
              className="w-full h-12 px-4 bg-white rounded-lg  text-sm"
              placeholder={field.placeholder || ""}
              aria-label={!showTextLabel ? field.label : undefined}
            />
            {errors[fieldId] && (
              <span className="text-red-600 text-sm">
                {errors[fieldId].message || "This field is required"}
              </span>
            )}
          </div>
        );

      case "textarea":
        const showTextareaLabel = field.labelPlacement !== "hidden_label";
        return (
          <div key={field.id}>
            {showTextareaLabel && (
              <label
                htmlFor={fieldId}
                className="block mb-2 font-medium text-sm"
              >
                {field.label}{" "}
                {isRequired && <span className="text-red-600">*</span>}
              </label>
            )}
            <textarea
              id={fieldId}
              {...register(fieldId, { required: isRequired })}
              rows={field.rows || 4}
              className="w-full px-4 py-3 bg-white rounded-lg  text-sm resize-none"
              placeholder={field.placeholder || ""}
              aria-label={!showTextareaLabel ? field.label : undefined}
            />
            {errors[fieldId] && (
              <span className="text-red-600 text-sm">
                {field.errorMessage || "This field is required"}
              </span>
            )}
          </div>
        );

      default:
        return null;
    }
  };

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
                {successMessage && (
                  <div
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: successMessage }}
                  />
                )}

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

                {formFields && !formLoading && !formError && (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {formFields.map((field) => {
                        // Textarea (message) should span full width
                        if (field.type === "textarea") {
                          return (
                            <div key={field.id} className="md:col-span-2">
                              {renderField(field)}
                            </div>
                          );
                        }
                        return renderField(field);
                      })}
                    </div>

                    <div className="flex  mt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn"
                      >
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
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
