export default function CTA2Block() {
  return (
    <>
      <section className="bg-background-6 py-10 md:py-28 lg:py-30 xl:py-39">
        <div className="main-container">
          <div
            className="bg-background-5 relative flex items-center justify-between overflow-hidden rounded-lg p-7 lg:p-20 xl:p-[100px]"
          >
            <div
              className="space-y-1.5 sm:max-w-[400px] lg:max-w-[567px] lg:space-y-3"
            >
              <h2
                className="font-sora md:text-sora-heading-3 text-sora-heading-4 max-md:-leading-[110%] lg:text-sora-heading-2 font-normal"
                data-opai-split-text
              >
                <span className="font-normal text-white/90"> Start Your Headless </span>
                <span className="text-white/30"> Journey Today. </span>
              </h2>
              <p
                className="text-tagline-2 font-inter-tight text-white/60"
                data-opai-split-text
                data-delay="0.3"
                data-line-delay="0.1"
              >
                Let’s explore how Nexsas can revolutionize your WordPress experience.
              </p>
              <div
                className="mt-6 md:mt-12"
                data-opai-animate
                data-delay="0.6"
                data-duration="0.7"
              >
                <div
                  className="{=$display-class} button-split-text-wrapper inline-block"
                >
                  <a
                    href="contact.html"
                    className="group bg-background-7 hover:border-stroke-3 {=$class} relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
                  >
                    <div className="relative overflow-hidden">
                      <div className="h-5.5">
                        <div
                          className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                        >
                          Learn more
                        </div>
                      </div>
                      <div className="absolute h-5.5">
                        <div
                          className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                        >
                          Learn more
                        </div>
                      </div>
                    </div>

                    <div
                      className="relative mt-[2px] flex size-6 items-center justify-center overflow-hidden"
                    >
                      {/*  circle   */}
                      <span
                        className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] translate-x-0 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M6.75 13.5L11.25 9L6.75 4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      {/*  arrow    */}
                      <span
                        className="stroke-background-6 ease-custom-ease-1 absolute size-[18px] -translate-x-6 stroke-[1.5px] transition-all duration-500 group-hover:translate-x-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M6.75 13.5L11.25 9L6.75 4.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="cta-v2-images-wrapper">
              <figure
                className="cta-v2-image-1 absolute right-0 -bottom-1 z-3 max-h-[406px] max-w-[120px] overflow-hidden sm:max-w-[150px] md:max-w-[250px] md:rounded-xl lg:right-5 lg:max-w-[320px] xl:right-25 xl:max-w-[360px]"
              >
                <img
                  src="images/opai-img-120.jpg"
                  alt="cta-v2"
                  className="size-full object-cover"
                />
              </figure>
              <figure
                className="cta-v2-image-2 absolute right-26 -bottom-3 z-2 hidden max-h-[345px] max-w-[130px] -rotate-[15deg] overflow-hidden sm:block md:max-w-[220px] md:rounded-xl lg:right-40 lg:max-w-[280px] xl:right-60 xl:max-w-[317px]"
              >
                <img
                  src="images/opai-img-121.jpg"
                  alt="cta-v2"
                  className="size-full object-cover"
                />
              </figure>
              <figure
                className="cta-v2-image-3 absolute right-50 bottom-0 z-1 hidden max-h-[261px] max-w-[190px] -rotate-[30deg] overflow-hidden rounded-xl md:block lg:right-100 lg:max-w-[150px] xl:max-w-[226px]"
              >
                <img
                  src="images/opai-img-122.jpg"
                  alt="cta-v2"
                  className="size-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
