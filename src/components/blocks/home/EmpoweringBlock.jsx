export default function EmpoweringBlock() {
  return (
    <>
      <section
        className="relative -my-0.5 overflow-hidden py-10 sm:py-20 md:py-28 lg:py-30 xl:py-44"
        aria-labelledby="empowering-business-heading"
        itemscope
        itemType="https://schema.org/Service"
        data-section="empowering-business"
      >
        <div className="main-container relative z-20">
          <div className="space-y-10 md:space-y-14 lg:space-y-20">
            {/*  text    */}
            <div className="space-y-2 text-center md:space-y-3">
              <h2
                id="empowering-business-heading"
                data-opai-split-text
                className="font-sora text-sora-heading-4 md:text-sora-heading-3 lg:text-sora-heading-2 text-background-13/90 mx-auto max-w-[700px] font-normal max-md:leading-[110%]"
                itemProp="name"
              >
                Empowering your
                <span className="text-background-13/50">
                  business <br className="hidden md:block" />
                  with AI expertise
                </span>
              </h2>

              <p
                data-opai-split-text
                data-delay="0.3"
                data-line-delay="0.1"
                className="font-inter-tight text-tagline-2 text-background-13/60 mx-auto max-w-[350px] font-normal"
                aria-label="Description of AI business solutions"
                itemProp="description"
              >
                Our tailored solutions address your challenges, delivering
                innovation at scale.
              </p>
            </div>

            {/*  cards   */}

            <div className="relative z-5">
              {/*  cards   */}
              <div
                className="glowing-cards flex flex-col items-center justify-center gap-y-8"
                aria-label="AI business solutions showcase"
              >
                {/*  row one   */}
                <div
                  className="flex w-full flex-col items-center justify-center gap-x-4 gap-y-8 md:flex-row md:gap-y-0"
                >
                  {/*  left   */}
                  <div
                    className="glowing-card-v2 border-stroke-1/11 bg-background-6 relative z-10 flex h-[719px] w-full flex-col items-center justify-center gap-y-2 overflow-hidden rounded-[8px] border px-[29px] pt-[26px] pb-10.5 md:max-w-[380px] lg:h-[710px] xl:h-[719px]"
                    aria-labelledby="intelligent-automation-heading"
                  >
                    {/*  glowing gradient    */}

                    <div
                      className="pointer-events-none absolute top-[-23%] left-[-39%] select-none"
                    >
                      <div
                        className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none"
                      >
                        <div
                          className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]"
                        ></div>
                      </div>
                    </div>

                    {/*  globe   */}
                    <div
                      className="z-10 flex flex-col items-center justify-center"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <div
                        className="bg-opai-blue/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1"
                      >
                        <span className="flex size-5 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            className="stroke-opai-blue/60 size-full"
                          >
                            <path
                              d="M8.33203 15.5C12.4742 15.5 15.832 12.1421 15.832 8C15.832 3.85786 12.4742 0.5 8.33203 0.5C4.1899 0.5 0.832031 3.85786 0.832031 8C0.832031 12.1421 4.1899 15.5 8.33203 15.5Z"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.20703 12.3284L3.11936 11.7776C3.21101 11.7223 3.28691 11.6444 3.33978 11.5513C3.39266 11.4582 3.42075 11.3531 3.42135 11.2461L3.43719 8.42348C3.43786 8.30555 3.47187 8.19022 3.5353 8.0908L5.0855 5.6613C5.13132 5.58949 5.19134 5.52781 5.26186 5.48003C5.33239 5.43226 5.41193 5.39941 5.49562 5.38349C5.5793 5.36758 5.66535 5.36894 5.74849 5.38749C5.83163 5.40604 5.91009 5.44139 5.97907 5.49136L7.51468 6.60391C7.64475 6.69814 7.80609 6.73869 7.96525 6.71713L10.4247 6.38406C10.5755 6.36363 10.7137 6.28884 10.8134 6.17373L12.5444 4.17367C12.6495 4.05225 12.7038 3.89504 12.6961 3.73464L12.6048 1.83594"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.9485 13.9111L12.1101 13.071C12.0317 12.9924 11.9338 12.9361 11.8264 12.908L10.15 12.468C10.0012 12.429 9.87199 12.3364 9.78717 12.2081C9.70236 12.0798 9.66785 11.9246 9.69026 11.7724L9.87657 10.5071C9.8923 10.4003 9.93543 10.2994 10.0017 10.2142C10.0681 10.129 10.1553 10.0625 10.255 10.021L12.634 9.03224C12.7439 8.98657 12.8645 8.97322 12.9817 8.99375C13.0989 9.01429 13.2078 9.06786 13.2957 9.14817L15.2405 10.9269"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-opai-blue/60 font-inter-tight text-tagline-4 font-normal"
                        >
                          Launch
                        </span>
                      </div>

                      <p
                        className="bg-background-5 font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]"
                      >
                        New application is approved
                      </p>
                    </div>

                    {/*  down arrow   */}
                    <div
                      className="z-10"
                      data-opai-animate
                      data-delay="0.2"
                      data-offset="2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="43"
                        viewBox="0 0 7 43"
                        fill="none"
                        className="fill-stroke-3/18"
                      >
                        <path
                          d="M0.665365 3C0.665365 4.47276 1.85927 5.66667 3.33203 5.66667C4.80479 5.66667 5.9987 4.47276 5.9987 3C5.9987 1.52724 4.80479 0.333333 3.33203 0.333333C1.85927 0.333333 0.665365 1.52724 0.665365 3ZM3.33203 43L6.21878 38L0.445278 38L3.33203 43ZM3.33203 3L2.83203 3L2.83203 38.5L3.33203 38.5L3.83203 38.5L3.83203 3L3.33203 3Z"
                        />
                      </svg>
                    </div>

                    {/*  Initiate   */}
                    <div
                      className="z-10 flex flex-col items-center justify-center"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <div
                        className="bg-opai-lemon/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1"
                      >
                        <span className="flex size-5 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="10"
                            viewBox="0 0 19 10"
                            fill="none"
                            className="stroke-opai-lemon/60 size-full"
                          >
                            <path
                              d="M7.6623 6.88538L6.98368 7.65165C6.45923 8.1761 5.79105 8.53325 5.06362 8.67795C4.33619 8.82264 3.58219 8.74838 2.89697 8.46455C2.21175 8.18072 1.62608 7.70007 1.21402 7.08339C0.801965 6.46671 0.582031 5.74168 0.582031 5C0.582031 4.25832 0.801965 3.5333 1.21402 2.91661C1.62608 2.29993 2.21175 1.81928 2.89697 1.53545C3.58219 1.25163 4.33619 1.17736 5.06362 1.32206C5.79105 1.46675 6.45923 1.8239 6.98368 2.34835L11.6804 7.65165C12.2048 8.1761 12.873 8.53325 13.6004 8.67795C14.3279 8.82264 15.0819 8.74838 15.7671 8.46455C16.4523 8.18072 17.038 7.70007 17.45 7.08339C17.8621 6.46671 18.082 5.74168 18.082 5C18.082 4.25832 17.8621 3.5333 17.45 2.91661C17.038 2.29993 16.4523 1.81928 15.7671 1.53545C15.0819 1.25163 14.3279 1.17736 13.6004 1.32206C12.873 1.46675 12.2048 1.8239 11.6804 2.34835L11.0018 3.11462"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-opai-lemon/60 font-inter-tight text-tagline-4 font-normal"
                        >
                          Initiate
                        </span>
                      </div>
                      <div
                        className="bg-background-5 space-y-1 rounded-[3px] px-6 py-3 text-center backdrop-blur-[17px]"
                      >
                        <p className="text-white/60">Send welcome email</p>
                        <p
                          className="font-inter-tight text-tagline-3 font-normal text-white/20"
                        >
                          Include links to employee handbook initial documents
                        </p>
                      </div>
                    </div>

                    {/*  down arrow   */}
                    <div
                      className="z-10"
                      data-opai-animate
                      data-delay="0.2"
                      data-offset="2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="43"
                        viewBox="0 0 7 43"
                        fill="none"
                        className="fill-stroke-3/18"
                      >
                        <path
                          d="M0.665365 3C0.665365 4.47276 1.85927 5.66667 3.33203 5.66667C4.80479 5.66667 5.9987 4.47276 5.9987 3C5.9987 1.52724 4.80479 0.333333 3.33203 0.333333C1.85927 0.333333 0.665365 1.52724 0.665365 3ZM3.33203 43L6.21878 38L0.445278 38L3.33203 43ZM3.33203 3L2.83203 3L2.83203 38.5L3.33203 38.5L3.83203 38.5L3.83203 3L3.33203 3Z"
                        />
                      </svg>
                    </div>

                    {/*  Check if/else   */}
                    <div
                      className="z-10 flex flex-col items-center justify-center"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <div
                        className="bg-opai-purple/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1"
                      >
                        <span className="flex size-5 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="10"
                            viewBox="0 0 19 10"
                            fill="none"
                            className="stroke-opai-purple/60 size-full"
                          >
                            <path
                              d="M7.6623 6.88538L6.98368 7.65165C6.45923 8.1761 5.79105 8.53325 5.06362 8.67795C4.33619 8.82264 3.58219 8.74838 2.89697 8.46455C2.21175 8.18072 1.62608 7.70007 1.21402 7.08339C0.801965 6.46671 0.582031 5.74168 0.582031 5C0.582031 4.25832 0.801965 3.5333 1.21402 2.91661C1.62608 2.29993 2.21175 1.81928 2.89697 1.53545C3.58219 1.25163 4.33619 1.17736 5.06362 1.32206C5.79105 1.46675 6.45923 1.8239 6.98368 2.34835L11.6804 7.65165C12.2048 8.1761 12.873 8.53325 13.6004 8.67795C14.3279 8.82264 15.0819 8.74838 15.7671 8.46455C16.4523 8.18072 17.038 7.70007 17.45 7.08339C17.8621 6.46671 18.082 5.74168 18.082 5C18.082 4.25832 17.8621 3.5333 17.45 2.91661C17.038 2.29993 16.4523 1.81928 15.7671 1.53545C15.0819 1.25163 14.3279 1.17736 13.6004 1.32206C12.873 1.46675 12.2048 1.8239 11.6804 2.34835L11.0018 3.11462"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-opai-purple/60 font-inter-tight text-tagline-4 shrink-0 font-normal"
                        >
                          Check if/else
                        </span>
                      </div>

                      <p
                        className="bg-background-5 font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]"
                      >
                        New application is approved
                      </p>
                    </div>

                    {/*  down arrow   */}
                    <div
                      className="z-10"
                      data-opai-animate
                      data-delay="0.2"
                      data-offset="2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="43"
                        viewBox="0 0 7 43"
                        fill="none"
                        className="fill-stroke-3/18"
                      >
                        <path
                          d="M0.665365 3C0.665365 4.47276 1.85927 5.66667 3.33203 5.66667C4.80479 5.66667 5.9987 4.47276 5.9987 3C5.9987 1.52724 4.80479 0.333333 3.33203 0.333333C1.85927 0.333333 0.665365 1.52724 0.665365 3ZM3.33203 43L6.21878 38L0.445278 38L3.33203 43ZM3.33203 3L2.83203 3L2.83203 38.5L3.33203 38.5L3.83203 38.5L3.83203 3L3.33203 3Z"
                        />
                      </svg>
                    </div>

                    {/*  lunch   */}
                    <div
                      className="z-10 flex flex-col items-center justify-center"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <div
                        className="bg-opai-green/10 flex max-w-[117px] items-center justify-center gap-x-2 rounded-[4px] px-2 py-1"
                      >
                        <span className="flex size-5 items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="10"
                            viewBox="0 0 19 10"
                            fill="none"
                            className="stroke-opai-green/60 size-full"
                          >
                            <path
                              d="M7.6623 6.88538L6.98368 7.65165C6.45923 8.1761 5.79105 8.53325 5.06362 8.67795C4.33619 8.82264 3.58219 8.74838 2.89697 8.46455C2.21175 8.18072 1.62608 7.70007 1.21402 7.08339C0.801965 6.46671 0.582031 5.74168 0.582031 5C0.582031 4.25832 0.801965 3.5333 1.21402 2.91661C1.62608 2.29993 2.21175 1.81928 2.89697 1.53545C3.58219 1.25163 4.33619 1.17736 5.06362 1.32206C5.79105 1.46675 6.45923 1.8239 6.98368 2.34835L11.6804 7.65165C12.2048 8.1761 12.873 8.53325 13.6004 8.67795C14.3279 8.82264 15.0819 8.74838 15.7671 8.46455C16.4523 8.18072 17.038 7.70007 17.45 7.08339C17.8621 6.46671 18.082 5.74168 18.082 5C18.082 4.25832 17.8621 3.5333 17.45 2.91661C17.038 2.29993 16.4523 1.81928 15.7671 1.53545C15.0819 1.25163 14.3279 1.17736 13.6004 1.32206C12.873 1.46675 12.2048 1.8239 11.6804 2.34835L11.0018 3.11462"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-opai-green/60 font-inter-tight text-tagline-4 shrink-0 font-normal"
                        >
                          Lunch
                        </span>
                      </div>

                      <p
                        className="font-inter-tight text-tagline-3 rounded-[3px] px-6 py-3 text-center font-normal text-white/20 backdrop-blur-[17px]"
                      >
                        Send welcome email Include links to employee handbook
                        initial documents
                      </p>
                    </div>

                    {/*  overlay   */}
                    <div
                      className="pointer-events-none absolute -bottom-px left-1/2 z-20 h-[426px] w-[378px] -translate-x-1/2 bg-linear-to-t from-[#0D1017] from-30% to-[#11141D00] to-100% select-none"
                    ></div>
                    {/*  text content   */}
                    <div
                      className="absolute bottom-[42px] z-30 max-w-[296px]"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <h3
                        id="intelligent-automation-heading"
                        className="font-sora text-sora-heading-5 font-normal text-white/80"
                        itemProp="name"
                      >
                        Intelligent automation
                      </h3>
                      <p
                        className="font-inter-tight text-tagline-2 font-normal text-white/50"
                        itemProp="description"
                      >
                        Automate mundane tasks and focus on what matters most.
                      </p>
                    </div>
                  </div>
                  {/*  right   */}
                  <div
                    className="flex w-full max-w-[894px] flex-col items-start justify-center gap-y-8 overflow-hidden md:gap-y-5 xl:gap-y-8"
                  >
                    {/*  right upper   */}
                    <div
                      className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative h-[344px] w-full overflow-hidden rounded-lg border p-10.5"
                      aria-labelledby="predictive-analytics-heading"
                    >
                      {/*  glowing gradient    */}
                      <div
                        className="pointer-events-none absolute top-[-51%] left-[-18%] select-none"
                      >
                        <div
                          className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none"
                        >
                          <div
                            className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]"
                          ></div>
                        </div>
                      </div>

                      <div
                        className="relative z-10 space-y-1 sm:text-center md:text-left"
                        data-opai-animate
                        data-delay="0.1"
                      >
                        <h3
                          id="predictive-analytics-heading"
                          className="font-sora text-sora-heading-5 font-normal text-white/80"
                          itemProp="name"
                        >
                          Predictive analytics
                        </h3>
                        <p
                          className="font-inter-tight text-tagline-2 w-full text-left font-normal text-white/50 md:max-w-[269px]"
                          itemProp="description"
                        >
                          Forecast trends and outcomes to stay ahead of the
                          competition.
                        </p>
                      </div>

                      <div
                        className="absolute top-[160px] -left-[88px] h-[177px] w-[382px] sm:left-[100px] md:-left-[100px] lg:top-[120px] lg:left-[120px] xl:top-[105px] xl:left-[233px]"
                      >
                        <div
                          className="flow-line-curve-svg-container relative size-full"
                        >
                          <div
                            className="flow-line-curve-circle absolute right-0 z-10 size-[33px] rounded-full bg-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="27"
                              height="27"
                              viewBox="0 0 27 27"
                              fill="none"
                              className="absolute top-[6px] left-[3.5px]"
                            >
                              <g filter="url(#filter0_d_5781_22995)">
                                <circle
                                  cx="13.2625"
                                  cy="10.3289"
                                  r="9.4539"
                                  fill="#8D59FF"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="filter0_d_5781_22995"
                                  x="0.370812"
                                  y="0.875"
                                  width="25.7818"
                                  height="25.7818"
                                  filterUnits="userSpaceOnUse"
                                  color-interpolation-filters="sRGB"
                                >
                                  <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                  />
                                  <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                  />
                                  <feOffset dy="3.43778" />
                                  <feGaussianBlur stdDeviation="1.71889" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0605338 0 0 0 0 0.134615 0 0 0 0 0.00388314 0 0 0 0.18 0"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_5781_22995"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_5781_22995"
                                    result="shape"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>

                          {/*  main svg   */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="377"
                            height="171"
                            viewBox="0 0 377 171"
                            fill="none"
                          >
                            <path
                              className="flow-line-curve-path"
                              d="M6 165.184C15.1674 165.184 43.128 157.191 81.6312 125.22C129.76 85.2554 165.857 172.919 204.102 146.706C242.347 120.493 208.829 71.5054 253.52 51.7382C298.211 31.9709 330.87 49.1598 371.694 5.32812"
                              stroke="url(#paint0_linear_5781_22992)"
                              strokeWidth="10.3133"
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_5781_22992"
                                x1="6"
                                y1="146.707"
                                x2="383.926"
                                y2="6.21115"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0.19382"
                                  stopColor="#227EFF"
                                  stopOpacity="0"
                                />
                                <stop offset="1" stopColor="#8D59FF" />
                              </linearGradient>
                            </defs>
                          </svg>

                          {/*  glow svg   */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="401"
                            height="195"
                            viewBox="0 0 401 195"
                            fill="none"
                            className="absolute inset-[-11px]"
                          >
                            <g filter="url(#filter0_f_5781_22993)">
                              <path
                                className="flow-line-curve-path"
                                d="M18 177.184C27.1674 177.184 55.128 169.191 93.6312 137.22C141.76 97.2554 177.857 184.919 216.102 158.706C254.347 132.493 220.829 83.5054 265.52 63.7382C310.211 43.9709 342.87 61.1598 383.694 17.3281"
                                stroke="url(#paint0_linear_5781_22993)"
                                strokeWidth="10.3133"
                                strokeLinecap="round"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_f_5781_22993"
                                x="0.811515"
                                y="0.13964"
                                width="400.072"
                                height="194.236"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="BackgroundImageFix"
                                  result="shape"
                                />
                                <feGaussianBlur
                                  stdDeviation="6.01612"
                                  result="effect1_foregroundBlur_5781_22993"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_5781_22993"
                                x1="74"
                                y1="163.5"
                                x2="387.355"
                                y2="17.5697"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#227EFF" stopOpacity="0" />
                                <stop offset="0.833151" stopColor="#8D59FF" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/*  right lower   */}
                    <div
                      className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative z-10 flex h-[344px] w-full flex-col items-start justify-between overflow-hidden rounded-lg border pt-10.5 pl-10.5 max-lg:gap-y-10 lg:flex-row"
                      aria-labelledby="ai-chatbot-heading"
                    >
                      {/*  glowing gradient    */}
                      <div
                        className="pointer-events-none absolute top-[-52%] left-[-17%] select-none"
                      >
                        <div
                          className="pointer-events-none relative z-2 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none"
                        >
                          <div
                            className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-1 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]"
                          ></div>
                        </div>
                      </div>

                      <div
                        className="w-full space-y-1"
                        data-opai-animate
                        data-delay="0.1"
                      >
                        <h3
                          id="ai-chatbot-heading"
                          className="font-sora text-sora-heading-5 max-w-[200px] font-normal text-white/80 sm:mx-auto md:mx-0"
                          itemProp="name"
                        >
                          AI chatbot & voice assistants
                        </h3>
                        <p
                          className="font-inter-tight text-tagline-2 w-full max-w-[269px] text-left font-normal text-white/50 sm:mx-auto sm:text-center md:mx-0 md:text-left"
                          itemProp="description"
                        >
                          Enhance customer engagement with natural, seamless
                          interactions.
                        </p>
                      </div>

                      <figure
                        className="w-full max-w-[502px]"
                        data-opai-animate
                        data-delay="0.2"
                        data-direction="right"
                      >
                        <img
                          src="images/opai-img-94.png"
                          alt="AI chatbot and voice assistants interface showing conversational AI technology"
                          loading="lazy"
                          className="size-full object-cover"
                          width="502"
                          height="auto"
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                {/*  row two   */}
                <div
                  className="flex w-full flex-col items-center justify-center gap-y-8 md:flex-row md:gap-x-4"
                >
                  {/*  left   */}
                  <div
                    className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative flex h-[391px] w-full max-w-[714px] flex-col items-start justify-between overflow-hidden rounded-lg border p-6 max-md:items-center max-md:gap-y-10 md:h-[331px] md:gap-y-2 md:p-10.5 lg:flex-row"
                    aria-labelledby="data-analytics-heading"
                  >
                    {/*  glowing gradient    */}
                    <div
                      className="pointer-events-none absolute top-[-52%] left-[-22%] select-none"
                    >
                      <div
                        className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none"
                      >
                        <div
                          className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]"
                        ></div>
                      </div>
                    </div>

                    <div
                      className="z-10 space-y-1"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <h3
                        id="data-analytics-heading"
                        className="font-sora text-sora-heading-5 max-w-[200px] font-normal text-white/80"
                        itemProp="name"
                      >
                        Data analytics & insights
                      </h3>
                      <p
                        className="font-inter-tight text-tagline-2 w-full max-w-[269px] text-left font-normal text-white/50"
                        itemProp="description"
                      >
                        Use AI to discover trends and make informed decisions.
                      </p>
                    </div>

                    {/*  loading bars   */}
                    <div
                      className="empowering-business-progress-container border-stroke-1/18 z-10 w-full max-w-[270px] space-y-4 rounded-lg border px-10.5 pt-6 pb-[43px] lg:max-w-[300px]"
                      data-opai-animate
                      data-delay="0.1"
                    >
                      <div
                        className="flex w-full items-center justify-between gap-x-2"
                      >
                        <h4
                          className="font-manrope text-manrope-heading-6 font-medium text-white/30"
                        >
                          Analytics
                        </h4>
                        <div
                          className="border-stroke-1/18 w-full max-w-[97px] cursor-pointer rounded-sm border py-[3px] pr-1 pl-2"
                        >
                          <button
                            className="flex w-full cursor-pointer items-center justify-center gap-x-2"
                            aria-label="Select time period for analytics"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                          >
                            <span
                              className="font-inter-tight text-tagline-4 font-normal text-nowrap text-white/30"
                            >
                              Last week
                            </span>
                            <span
                              className="flex size-6 items-center justify-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="stroke-stroke-3/25"
                              >
                                <path
                                  d="M7.80469 10L11.8047 14L15.8047 10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>

                      {/*  line bars   */}
                      <div
                        className="space-y-4"
                        aria-label="Analytics data visualization"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-start gap-x-11">
                            <h5
                              className="text-tagline-4 font-inter-tight font-normal text-white/20"
                            >
                              Airtable
                            </h5>
                            <span
                              className="empowering-business-progress-bar h-1.5 w-14 rounded-r-full bg-linear-to-r from-[#8D59FF00] to-[#8D59FF]"
                            >
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-x-5">
                            <h5
                              className="text-tagline-4 font-inter-tight font-normal text-white/20"
                            >
                              Google drive
                            </h5>
                            <span
                              className="empowering-business-progress-bar h-1.5 w-[94px] rounded-r-full bg-linear-to-r from-[#227EFF00] to-[#227EFF]"
                            >
                            </span>
                          </div>
                          <div className="flex items-center justify-start gap-x-14">
                            <h5
                              className="text-tagline-4 font-inter-tight font-normal text-white/20"
                            >
                              Mega
                            </h5>
                            <span
                              className="empowering-business-progress-bar h-1.5 w-[129px] rounded-r-full bg-linear-to-r from-[#5DDCF600] to-[#5DDCF6]"
                            >
                            </span>
                          </div>
                        </div>

                        {/*  other info   */}
                        <p
                          className="font-inter-tight text-tagline-4 flex w-full items-center justify-center gap-x-2.5 font-normal text-white/20"
                          aria-label="Storage capacity indicators: 0 Byte, 400GB, 600GB"
                        >
                          <span>0 Byte</span>
                          <span>400GB</span>
                          <span>600GB</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/*  right   */}
                  <div
                    className="glowing-card-v2 border-stroke-1/18 bg-background-6 relative flex h-[331px] w-full items-center justify-center overflow-hidden rounded-lg border p-6 md:w-[560px] md:p-10.5"
                    aria-label="Call to action section"
                  >
                    {/*  glowing gradient    */}
                    <div
                      className="pointer-events-none absolute top-[-57%] left-[-25%] select-none"
                    >
                      <div
                        className="pointer-events-none relative z-20 h-[276px] w-[188px] rotate-[-10.86deg] rounded-[50%] bg-white/40 blur-[25.5px] select-none"
                      >
                        <div
                          className="bg-opai-purple/90 absolute right-0 bottom-[-4px] left-[102px] z-10 h-[194px] w-[133px] rotate-[12deg] rounded-[50%] mix-blend-plus-lighter blur-[82px]"
                        ></div>
                      </div>
                    </div>

                    <div className="z-10" data-opai-animate data-delay="0.1">
                      <div
                        className="{=$display-class} button-split-text-wrapper inline-block"
                      >
                        <a
                          href="services.html"
                          className="group bg-background-7 hover:border-stroke-3 w-full relative flex max-h-12 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-6 py-[13px] transition-all duration-300 ease-in-out"
                        >
                          <div className="relative overflow-hidden">
                            <div className="h-5.5">
                              <div
                                className="text-background-5 font-ibm-plex-mono button-split-upper-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                              >
                                Explore all services
                              </div>
                            </div>
                            <div className="absolute h-5.5">
                              <div
                                className="text-background-5 font-ibm-plex-mono button-split-lower-text text-tagline-2 block leading-[1.4] font-medium text-nowrap"
                              >
                                Explore all services
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
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  top gradient background   */}
        <div
          className="absolute -top-10 left-0 z-4 h-[796px] w-full md:top-0 md:h-[760px] lg:-top-2 2xl:-top-12"
        >
          <img
            src="images/gradient/opai-1.png"
            alt="Top blend mode"
            className="max-md:size-full max-md:object-cover"
          />
        </div>

        {/*  Bottom Gradient Background  */}
        <div
          className="absolute -bottom-137 left-0 z-4 h-[696px] w-full min-[550px]:-bottom-119 min-[1930px]:!bottom-84 md:-bottom-97 lg:-bottom-72 xl:-bottom-47 2xl:bottom-18"
        >
          <img src="images/gradient/opai-2.png" alt="Bottom blend mode" />
        </div>
      </section>
    </>
  );
}
