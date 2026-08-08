"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { servicesFaqs, type FaqItem } from "@/data/faqs";

export function FaqSection({
  faqs = servicesFaqs,
}: {
  faqs?: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 px-4 bg-white flex justify-center font-sans overflow-hidden -mt-10"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column - Headline & CTA Box */}
        <div className="lg:col-span-5 flex flex-col text-left justify-between h-full">
          <div>
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              FAQ
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-[46px] font-medium tracking-tight text-neutral-950 leading-[1.1] mb-6">
              Frequently asked questions
            </h2>
            {/* Paragraph Description */}
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed max-w-sm">
              Answers to the questions we are most often asked about our
              engineering services in Raipur and Chhattisgarh.
            </p>

            {/* Dark CTA Card */}
            <div className="bg-[#0b0f19] text-white rounded-[2rem] p-8 md:p-10 mt-12 flex flex-col sm:flex-col sm:items-center justify-between gap-6 relative overflow-hidden shadow-xl border border-slate-800">
              <div className="space-y-3 max-w-md">
                {/* Badge Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-medium">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>We&apos;re here to help</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Still have questions?
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our team will answer your questions directly and help you
                  determine the right next step — whether that is a scoping
                  call, a technical review or a written proposal.
                </p>
              </div>

              {/* Pill Contact Us Button */}
              <div>
                <Link href={COMPANY.telephoneHref}>
                  <Button className="w-full">
                    Call Now — {COMPANY.telephone}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Prefer Email Footer Link */}
          <div className="mt-4 ml-5 text-center sm:text-left text-sm text-slate-500 flex items-center gap-1.5 justify-center sm:justify-start">
            <span>Prefer email?</span>
            <a
              href={`mailto:${COMPANY.email.general}`}
              className="text-slate-700 font-semibold hover:underline flex items-center gap-1"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 text-slate-600"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {COMPANY.email.general}
            </a>
          </div>
        </div>

        {/* Right Column - Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.key || index}
                onClick={() => toggleFaq(index)}
                className={`bg-[#f4f4f5]/70 hover:bg-[#f4f4f5] border border-neutral-100 rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col text-left ${
                  isOpen ? "shadow-xs bg-[#f4f4f5]" : ""
                }`}
              >
                {/* Question Row */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-neutral-900 text-sm md:text-base pr-6 select-none">
                    {item.question}
                  </span>
                  <div
                    className={`flex-none w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-950 shadow-xs transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                {/* Answer Row */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed pr-10 select-none">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
