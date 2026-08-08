"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Support FAQ from section 9.5 of the content document.
 *
 * The document's fifth question — whether out-of-hours cover is offered — is
 * omitted until the team confirms what they actually provide, rather than
 * published with an invented answer.
 */
const supportFaqs = [
  {
    question: "Is support included after launch?",
    answer:
      "Every project includes a post-launch support period covering defects arising from our work. Ongoing maintenance beyond that period is available under a separate agreement.",
  },
  {
    question: "What does a maintenance agreement cover?",
    answer:
      "Monitoring, security updates, dependency upgrades, backup verification, performance review and an allocation of development hours for small changes. Scope is confirmed in your agreement.",
  },
  {
    question: "What is not covered?",
    answer:
      "New features outside agreed scope, issues arising from third-party services outside our control, and problems caused by modifications made by others. These are quoted separately.",
  },
  {
    question: "Can you support a system another company built?",
    answer:
      "In many cases, yes. We will need to review the codebase and infrastructure first to assess its condition and confirm what we can reasonably commit to.",
  },
];

export function SupportFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-10 font-plus-jakarta">
          Support FAQ
        </h2>

        <div className="border-t border-slate-200">
          {supportFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left py-5 cursor-pointer group"
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-[#0951DE] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0951DE]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-slate-600 leading-relaxed pr-10">
                      {faq.answer}
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
