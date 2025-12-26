'use client';

import Image from 'next/image';
import Link from 'next/link';
import { convertToNextPath } from '@/lib/utils/urls';

export default function Footer({ footerData }) {
  // Initialize with current year to prevent hydration mismatch
  const currentYear = new Date().getFullYear().toString();

  if (!footerData) {
    return null;
  }

  const {
    footer_logo,
    contact_title,
    phone_no,
    email,
    page_links,
    follow_us,
    policy,
    copyright_text,
  } = footerData;

  const social_links = follow_us?.social_links || {};

  // Split page links into 2 columns
  const allLinks = page_links || [];
  const linksPerColumn = Math.ceil(allLinks.length / 2);
  const column1 = allLinks.slice(0, linksPerColumn);
  const column2 = allLinks.slice(linksPerColumn);

  // Default policy link if not set
  const policyLink =
    policy && policy.url
      ? policy
      : {
          url: '/privacy-policy',
          title: 'Legal & Privacy Policy',
          target: '',
        };

  return (
    <footer className="footer text-black relative border-t bg-white border-[#F1F3F7]">
      <div className="container-fluid">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="pt-8 pb-6">
              <div className="flex md:flex-row flex-col justify-between gap-5 md:gap-7">
                {/* Logo Section */}
                <div className="lg:col-span-4 md:col-span-6">
                  <Link href="/" className="text-[22px] focus:outline-none">
                    {footer_logo && (
                      <div className="relative h-12 w-48">
                        <Image
                          src={typeof footer_logo === 'string' ? footer_logo : footer_logo.url}
                          alt={
                            typeof footer_logo === 'string'
                              ? ''
                              : footer_logo.alt || footer_logo.title || ''
                          }
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    )}
                  </Link>
                </div>

                {/* Contact Section */}
                <div className="lg:col-span-3 md:col-span-6">
                  <div className="text-base text-black font-semibold">
                    {contact_title || 'Contact us'}
                  </div>

                  <ul className="list-none footer-list flex flex-col mt-4 gap-4">
                    {phone_no && (
                      <li className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                        >
                          <path
                            d="M14.6466 11.5258C14.6466 11.7658 14.5933 12.0125 14.4799 12.2525C14.3666 12.4925 14.2199 12.7192 14.0266 12.9325C13.6999 13.2925 13.3399 13.5525 12.9333 13.7192C12.5333 13.8858 12.0999 13.9725 11.6333 13.9725C10.9533 13.9725 10.2266 13.8125 9.45992 13.4858C8.69325 13.1592 7.92658 12.7192 7.16658 12.1658C6.39992 11.6058 5.67325 10.9858 4.97992 10.2992C4.29325 9.60583 3.67325 8.87916 3.11992 8.11916C2.57325 7.35916 2.13325 6.59916 1.81325 5.84583C1.49325 5.08583 1.33325 4.35916 1.33325 3.66583C1.33325 3.21249 1.41325 2.77916 1.57325 2.37916C1.73325 1.97249 1.98659 1.59916 2.33992 1.26583C2.76659 0.845827 3.23325 0.63916 3.72659 0.63916C3.91325 0.63916 4.09992 0.67916 4.26659 0.75916C4.43992 0.83916 4.59325 0.95916 4.71325 1.13249L6.25992 3.31249C6.37992 3.47916 6.46658 3.63249 6.52658 3.77916C6.58658 3.91916 6.61992 4.05916 6.61992 4.18583C6.61992 4.34583 6.57325 4.50583 6.47992 4.65916C6.39325 4.81249 6.26658 4.97249 6.10658 5.13249L5.59992 5.65916C5.52658 5.73249 5.49325 5.81916 5.49325 5.92583C5.49325 5.97916 5.49992 6.02583 5.51325 6.07916C5.53325 6.13249 5.55325 6.17249 5.56659 6.21249C5.68659 6.43249 5.89325 6.71916 6.18658 7.06583C6.48658 7.41249 6.80658 7.76583 7.15325 8.11916C7.51325 8.47249 7.85992 8.79916 8.21325 9.09916C8.55992 9.39249 8.84658 9.59249 9.07325 9.71249C9.10658 9.72583 9.14658 9.74583 9.19325 9.76583C9.24658 9.78583 9.29992 9.79249 9.35992 9.79249C9.47325 9.79249 9.55992 9.75249 9.63325 9.67916L10.1399 9.17916C10.3066 9.01249 10.4666 8.88583 10.6199 8.80583C10.7733 8.71249 10.9266 8.66583 11.0933 8.66583C11.2199 8.66583 11.3533 8.69249 11.4999 8.75249C11.6466 8.81249 11.7999 8.89916 11.9666 9.01249L14.1733 10.5792C14.3466 10.6992 14.4666 10.8392 14.5399 11.0058C14.6066 11.1725 14.6466 11.3392 14.6466 11.5258Z"
                            stroke="#292D32"
                            strokeMiterlimit="10"
                          />
                        </svg>
                        <a
                          href={`tel:${phone_no}`}
                          className="text-base font-normal text-[#333] hover:text-primary duration-500 ease-in-out"
                        >
                          {phone_no}
                        </a>
                      </li>
                    )}

                    {email && (
                      <li className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                        >
                          <path
                            d="M11.3333 13.9735H4.66659C2.66659 13.9735 1.33325 12.9735 1.33325 10.6401V5.97347C1.33325 3.64014 2.66659 2.64014 4.66659 2.64014H11.3333C13.3333 2.64014 14.6666 3.64014 14.6666 5.97347V10.6401C14.6666 12.9735 13.3333 13.9735 11.3333 13.9735Z"
                            stroke="#292D32"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.3334 6.30664L9.24674 7.97331C8.56008 8.51997 7.43341 8.51997 6.74674 7.97331L4.66675 6.30664"
                            stroke="#292D32"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <a
                          href={`mailto:${email}`}
                          className="text-base font-normal text-[#333] hover:text-primary duration-500 ease-in-out"
                        >
                          {email}
                        </a>
                      </li>
                    )}
                  </ul>

                  {/* Social Media */}
                  {Object.keys(social_links).length > 0 && (
                    <div className="mt-4 flex space-x-3">
                      {social_links.instagram && (
                        <a
                          href={social_links.instagram}
                          className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded transition-all duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}

                      {social_links.facebook && (
                        <a
                          href={social_links.facebook}
                          className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      )}

                      {social_links.linkedin && (
                        <a
                          href={social_links.linkedin}
                          className="inline-flex items-center justify-center w-8 h-8 bg-[#0a66c2] text-white rounded transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M0 2.18896C0 1.74002 0.157662 1.36964 0.472973 1.07785C0.788284 0.786036 1.1982 0.640137 1.7027 0.640137C2.1982 0.640137 2.59909 0.783787 2.90541 1.07111C3.22072 1.36741 3.37838 1.75348 3.37838 2.22936C3.37838 2.66034 3.22523 3.01948 2.91892 3.3068C2.60361 3.6031 2.18919 3.75125 1.67568 3.75125H1.66216C1.16666 3.75125 0.76577 3.6031 0.45946 3.3068C0.153149 3.01051 0 2.63789 0 2.18896ZM0.175676 13.9735V4.97684H3.17568V13.9735H0.175676ZM4.83784 13.9735H7.83784V8.9499C7.83784 8.63564 7.87388 8.39321 7.94595 8.22263C8.07207 7.91735 8.26351 7.65921 8.52027 7.44822C8.77703 7.23721 9.0991 7.13172 9.48649 7.13172C10.4955 7.13172 11 7.8096 11 9.16539V13.9735H14V8.81522C14 7.48637 13.6847 6.47852 13.0541 5.79165C12.4234 5.10478 11.5901 4.76135 10.5541 4.76135C9.39189 4.76135 8.48649 5.25966 7.83784 6.2563V6.28323H7.82432L7.83784 6.2563V4.97684H4.83784C4.85585 5.26415 4.86487 6.15752 4.86487 7.65697C4.86487 9.1564 4.85585 11.2619 4.83784 13.9735Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      )}

                      {social_links.twitter && (
                        <a
                          href={social_links.twitter}
                          className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Page Links - Only show if there are links */}
                {allLinks.length > 0 && (
                  <>
                    {/* Column 1 */}
                    <div className="lg:col-span-2 md:col-span-6">
                      <ul className="list-none footer-list pt-4 md:pt-0 border-t md:border-t-0 border-black/10">
                        {column1.map((link, index) => (
                          <li key={index} className={index > 0 ? 'mt-[10px]' : ''}>
                            <Link
                              href={convertToNextPath(link.page_link?.url)}
                              className="text-sm md:text-base hover:text-primary text-black font-semibold duration-500 ease-in-out"
                            >
                              {link.page_link?.title || 'Link'}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="lg:col-span-3 md:col-span-6">
                      <ul className="list-none footer-list pt-4 md:pt-0 border-t md:border-t-0 border-black/10">
                        {column2.map((link, index) => (
                          <li key={index} className={index > 0 ? 'mt-4' : ''}>
                            <Link
                              href={convertToNextPath(link.page_link?.url)}
                              className="text-sm md:text-base hover:text-primary text-black font-semibold duration-500 ease-in-out"
                            >
                              {link.page_link?.title || 'Link'}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-0 border-t border-[#F1F3F7]">
        <div className="container-fluid">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-start md:justify-between gap-4">
            {/* Policy Link */}
            <div>
              <Link
                href={convertToNextPath(policyLink.url)}
                className="text-sm md:text-base text-grey-3 hover:text-primary duration-500 ease-in-out"
              >
                {policyLink.title}
              </Link>
            </div>

            {/* Copyright */}
            <div>
              <p className="mb-0 text-sm md:text-base text-grey-3">
                © {currentYear} {copyright_text || 'NexusPress. All rights reserved'}
              </p>
            </div>

            {/* Designed by */}
            <div className="flex gap-1 items-center">
              <span className="text-grey-3">Designed by</span>
              <a
                href="https://screenroot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000] hover:text-primary duration-500 ease-in-out"
              >
                ScreenRoot
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
