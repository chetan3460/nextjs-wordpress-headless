"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer text-black relative border-t border-[#F1F3F7] bg-white pt-16 pb-6">
      <div className="container-fluid xl:px-24 lg:px-14 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Logo Section */}
          <div className="lg:col-span-4 md:col-span-6 mb-8 lg:mb-0">
            <Link
              href="/"
              className="text-[22px] focus:outline-none block mb-6"
            >
              <Image
                src="/images/logo-light.png"
                alt="Resins & Plastics Ltd"
                width={150}
                height={40}
                className="w-auto h-auto"
              />
            </Link>

            <div className="flex flex-col gap-4 max-w-xs text-grey-2">
              <p className="text-sm leading-6">
                Leading manufacturer of Synthetic Resins, molding powders and
                other plastic products in India.
              </p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 md:col-span-3">
            <h5 className="text-lg font-bold mb-6">Company</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/vision-values"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  Vision & Values
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  Initiatives
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 md:col-span-3">
            <h5 className="text-lg font-bold mb-6">Products</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/research-development"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  R & D
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-4 md:col-span-12 lg:pl-10">
            <h5 className="text-lg font-bold mb-6">Get in Touch</h5>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 min-w-[20px]">
                  <Image
                    src="/images/contact/location.svg"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-grey-2 text-base">
                  Plot No. 3A, C.S.T Road, Kalina, Santacruz (East), Mumbai -
                  400 098
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-[20px]">
                  <Image
                    src="/images/contact/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                  />
                </div>
                <a
                  href="mailto:office@resplast.com"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  office@resplast.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="min-w-[20px]">
                  <Image
                    src="/images/contact/contact.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                  />
                </div>
                <a
                  href="tel:+912212345678"
                  className="text-grey-2 hover:text-primary transition-colors text-base"
                >
                  +91-22-1234 5678
                </a>
              </li>
            </ul>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                {/* Facebook Icon - using simple placeholder SVG if assets not available, but logic implies using SVGs */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.747-2.971 2.28v1.69h4.757l-.871 3.667h-3.886v7.98h-4.844z" />
                </svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 px-0 mt-16 border-t border-[#F1F3F7]">
        <div className="container-fluid xl:px-24 lg:px-14 px-5">
          <div className="flex md:flex-row flex-col items-start md:items-center justify-start md:justify-between gap-4">
            {/* Policy Link */}
            <div>
              <Link
                href="/privacy-policy"
                className="text-sm md:text-base text-grey-3 hover:text-primary duration-500 ease-in-out"
              >
                Legal & Privacy Policy
              </Link>
            </div>

            {/* Copyright */}
            <div>
              <p className="mb-0 text-sm md:text-base text-grey-3">
                © {currentYear} Resins & Plastics. All rights reserved
              </p>
            </div>

            {/* Designed by */}
            <div className="flex gap-1 items-center">
              <Image src="/SR.svg" alt="ScreenRoot" width={20} height={20} />
              <span className="text-grey-3 text-sm">Designed by</span>
              <a
                href="https://screenroot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000] hover:text-primary duration-500 ease-in-out font-medium text-sm"
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
