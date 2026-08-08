"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { COMPANY } from "@/lib/company";

const COMPANY_LINKS = [
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

const PRESENCE = [
  { code: "IN", label: "India — Headquarters" },
  { code: "UK", label: "United Kingdom" },
  { code: "AE", label: "United Arab Emirates" },
  { code: "US", label: "United States" },
];

export function Footer() {
  return (
    <footer className="p-4 bg-[#222] text-white rounded-t-[32px] md:rounded-t-[40px] px-4 pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden justify-center items-center">
      <div className="p-6 flex flex-col gap-16 justify-center items-center">
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl w-full">
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img className="w-50" src="/EZGLOBAL1.webp" alt="EZGlobal" />

            <p className="text-sm text-neutral-400 leading-relaxed mt-1 max-w-sm">
              {/*
                "a leading", deliberately — not "the leading". The definite
                article claims the number one position and needs evidence
                (awards, recognised rankings) to stand up. The indefinite
                article claims membership of a prominent group, which is a
                defensible statement of standing.
              */}
              EZGlobal is a leading{" "}
              <strong className="text-neutral-200 font-semibold">
                software engineering company headquartered in Raipur,
                Chhattisgarh
              </strong>
              . We build web platforms, mobile products, AI-enabled automation,
              commerce systems and cloud infrastructure for clients across
              India, the United Kingdom, the UAE and the United States.
            </p>

            {/*
              Social icons are rendered only once live profile URLs exist —
              icons pointing at "#" read as an unfinished site. Populate
              COMPANY.socialProfiles in src/lib/company.ts to enable them.
            */}
            {COMPANY.socialProfiles.length > 0 && (
              <div className="flex items-center gap-3 mt-4">
                {COMPANY.socialProfiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 h-9 rounded-full bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs font-semibold text-neutral-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {profile.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Columns Area - Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
            {/*
              Services — every line, from the shared data.

              Given its own full-width row laid out in three sub-columns.
              Stacked singly, twelve links ran to twelve rows and made this by
              far the tallest thing in the footer, setting the height of the
              whole band. Three columns turns that into four rows. It needs the
              full width rather than a narrow slot because names like "Applied
              AI & Intelligent Automation" wrap to three lines otherwise, which
              would give back the height the columns just saved.
            */}
            <div className="sm:col-span-3">
              <h4 className="text-sm font-semibold tracking-wider text-white mb-5">
                Services
              </h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-normal"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white mb-5">
                Company
              </h4>
              <ul className="flex flex-col gap-3">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-normal"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Global Presence */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white mb-5">
                Global Presence
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                {PRESENCE.map((place) => (
                  <li key={place.code} className="flex items-center gap-2">
                    <span className="font-mono text-xs text-neutral-500 bg-neutral-900 border border-neutral-800 px-1 py-0.5 rounded-sm">
                      {place.code}
                    </span>
                    {place.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 - Contact */}
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white mb-5">
                Contact
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-neutral-400">
                <li>
                  <a
                    href={COMPANY.telephoneHref}
                    className="flex items-start gap-2.5 hover:text-white transition-colors duration-200"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="font-normal">{COMPANY.telephone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email.general}`}
                    className="flex items-start gap-2.5 hover:text-white transition-colors duration-200"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="font-normal break-all">
                      {COMPANY.email.general}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-blue-500 mt-0.5 shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="leading-relaxed font-normal">
                    {COMPANY.addressLine}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900/60 pt-8 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500">
          <p className="text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} EZGlobal. All rights reserved.{" "}
            <span className="hidden sm:inline">|</span>{" "}
            <br className="sm:hidden" />
            <span className="text-neutral-600">
              Software Company in Raipur, Chhattisgarh
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="hover:text-neutral-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-neutral-300 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="hover:text-neutral-300 transition-colors duration-200"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
