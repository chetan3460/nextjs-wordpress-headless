import Image from "next/image";

export default function GlobalBannerBlock({ data }) {
  const { title, description, inner_banner_image, hide_block } = data;

  console.log("[GlobalBannerBlock] Data:", {
    title,
    description,
    inner_banner_image,
    hide_block,
  });

  // Don't render if block is hidden or no content
  if (hide_block || (!title && !description && !inner_banner_image)) {
    console.log("[GlobalBannerBlock] Not rendering - hidden or no content");
    return null;
  }

  return (
    <section className="global_banner_block section-triger" data-load="eager">
      <div className="container-fluid">
        <div className="flex gap-2 flex-col text-center mb-6 lg:mb-9">
          {title && <h2 className="text-primary fade-text">{title}</h2>}

          {description && (
            <div className="banner-description max-w-6xl mx-auto prose prose-p:text-base prose-p:leading-[22px] lg:prose-p:text-[18px] lg:prose-p:leading-[25px] prose-p:font-normal prose-p:text-grey-2 anim-uni-in-up">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
        </div>

        {inner_banner_image && (
          <div className="inner_banner_image-wrapper relative bottom-right overflow-hidden">
            <Image
              src={inner_banner_image.url}
              alt={inner_banner_image.alt || title || "Banner image"}
              width={inner_banner_image.width || 1920}
              height={inner_banner_image.height || 600}
              className="inner_banner_image-image size-full object-cover rounded-[20px] lg:rounded-[40px] myimg"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
