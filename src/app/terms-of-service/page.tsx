"use client"
import { useEffect, useState } from 'react';
import {
  Briefcase,
  CreditCard,
  Copyright,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';

type Subsection = {
  title: string;
  body: string;
};

type Section = {
  id: string;
  title: string;
  icon: typeof Briefcase;
  body?: string;
  bullets?: string[];
  subsections?: Subsection[];
};

/**
 * Terms of Service — section 8 of the master content document.
 *
 * ⚠️ Drafted template, not legal advice. Have this reviewed by a qualified
 * legal practitioner before publishing, including the liability cap, the IP
 * transfer clause, the payment schedule, and the jurisdiction position for UK,
 * UAE and US clients.
 *
 * Where the content document left a figure to be confirmed, the concrete term
 * already published on the site has been retained rather than replaced with a
 * placeholder — payment schedule, defect window and notice period below.
 */
const sections: Section[] = [
  {
    id: "agreement",
    title: "Agreement",
    icon: Briefcase,
    body: "These Terms govern your use of the EZGlobal website and, where applicable, the provision of our services. By accessing this website or engaging our services, you agree to be bound by these Terms. Where a separate signed agreement, statement of work or proposal exists between us, that document prevails in the event of conflict.",
  },
  {
    id: "services",
    title: "Services",
    icon: Briefcase,
    body: "EZGlobal provides software engineering, digital growth and related professional services. The specific scope, deliverables, timeline and fees applicable to any engagement are set out in the written proposal or statement of work agreed between the parties.",
  },
  {
    id: "quotations-and-fees",
    title: "Quotations and Fees",
    icon: CreditCard,
    body: "Any pricing indicated on this website is indicative; final fees are confirmed in a written proposal. All fees are exclusive of applicable taxes unless expressly stated.",
    bullets: [
      "A 50% advance payment is required before development begins, with the remainder divided into milestone payments due on completion of agreed project phases.",
      "The final balance is payable before delivery, deployment or transfer of the completed project and associated deliverables.",
      "Late payment may attract interest as permitted by applicable law and the project agreement, and may result in suspension of work.",
      "Refund requests are evaluated against the project's stage of completion, work already performed, and the terms of the individual service contract.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: Briefcase,
    body: "To enable timely delivery, you agree to:",
    bullets: [
      "Provide required content, assets, access and approvals promptly",
      "Nominate a single decision-making contact for the engagement",
      "Respond to requests for feedback or approval within a reasonable period",
      "Ensure all materials supplied to us do not infringe third-party rights",
    ],
  },
  {
    id: "scope-changes",
    title: "Changes to Scope",
    icon: AlertTriangle,
    body: "Requests falling outside the agreed scope will be assessed and quoted separately. No additional work commences without your written approval of the revised scope and cost. Delays attributable to the client may affect agreed timelines and, where material, costs.",
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Copyright,
    subsections: [
      {
        title: "Our materials",
        body: "All content on this website — text, design, graphics, code and marks — is owned by EZGlobal or its licensors and may not be reproduced without written permission.",
      },
      {
        title: "Project deliverables",
        body: "Unless otherwise stated in the applicable agreement, intellectual property in custom deliverables transfers to the client upon receipt of full payment.",
      },
      {
        title: "Retained rights",
        body: "We retain ownership of pre-existing tools, libraries, frameworks and generic components used in delivery, and grant you a perpetual, non-exclusive licence to use them as incorporated into your deliverables.",
      },
      {
        title: "Third-party components",
        body: "Deliverables may incorporate third-party or open-source components governed by their own licences, which will be disclosed to you.",
      },
      {
        title: "Portfolio rights",
        body: "We may reference the engagement and display non-confidential work in our portfolio and marketing materials, unless you notify us otherwise in writing.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: ShieldCheck,
    body: "Each party agrees to keep confidential all non-public information received from the other and to use it solely for the purposes of the engagement. This obligation survives termination. Formal non-disclosure agreements are available on request.",
  },
  {
    id: "warranties-disclaimers",
    title: "Warranties and Defects",
    icon: ShieldCheck,
    body: "We warrant that services will be performed with reasonable skill and care. We will correct defects in deliverables reported within 90 days of delivery at no additional cost, provided the defect arises from our work and not from client modification, third-party interference or changes in scope. Beyond this, and to the fullest extent permitted by law, services are provided without further warranty. Ongoing support, feature enhancements and maintenance beyond that period are available under a separate agreement.",
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: AlertTriangle,
    body: "To the fullest extent permitted by law, EZGlobal shall not be liable for indirect, incidental, consequential or punitive damages, or for loss of profit, revenue, data or business opportunity. Our total aggregate liability arising from any engagement shall not exceed the total fees paid by the client under that engagement. We are not liable for issues arising from third-party services, hosting providers or other external dependencies beyond our control. Nothing in these Terms excludes liability that cannot lawfully be excluded.",
  },
  {
    id: "project-termination",
    title: "Termination",
    icon: AlertTriangle,
    body: "Either party may terminate an engagement by giving 30 days' written notice, and either party may terminate immediately in the event of a material breach. On termination, fees for work completed to the termination date become payable, we will deliver completed work in its then-current state, and confidentiality and intellectual property provisions continue to apply.",
  },
  {
    id: "force-majeure",
    title: "Force Majeure",
    icon: AlertTriangle,
    body: "Neither party is liable for failure to perform due to events beyond reasonable control, including natural disaster, government action, war, civil disruption, epidemic, or failure of telecommunications or utility infrastructure.",
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    icon: Scale,
    body: "These Terms are governed by the laws of India. Any dispute shall first be addressed through good-faith negotiation. Failing resolution, the dispute shall be referred to arbitration in Raipur, Chhattisgarh, under the Arbitration and Conciliation Act, 1996, as amended. Subject to the foregoing, the courts at Raipur, Chhattisgarh shall have exclusive jurisdiction.",
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    icon: Scale,
    body: "We may revise these Terms from time to time. Continued use of the website following revision constitutes acceptance. Changes do not retrospectively affect engagements already contracted.",
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    body: `Questions about these Terms may be sent to ${COMPANY.email.general}, or by telephone on ${COMPANY.telephone}. Our registered address is ${COMPANY.addressLine}, India.`,
  },
];

/*
 * TODO (legal review required): confirm the liability cap, the proposal
 * validity window, the client feedback window, and whether a separate
 * jurisdiction or arbitration provision is appropriate for UK, UAE and US
 * clients.
 */

const lastUpdated = "7 August 2026";

function useActiveSection() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function TermsOfService() {
  const active = useActiveSection();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-30 sm:py-35">
          <div className="flex items-center gap-3 text-blue-600">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Terms
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Terms of <span className="text-blue-600">Service</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            The terms governing use of the EZGlobal website and the provision of
            our engineering and growth services. Please read them carefully
            before work begins.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium">
              <AlertTriangle className="h-3.5 w-3.5" />
              Last updated {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              {COMPANY.email.general}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Contents
              </p>
              <ul className="space-y-1">
                {sections.map((s) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          isActive
                            ? 'bg-blue-50 font-semibold text-blue-700'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? 'text-blue-600' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{s.title}</span>
                        <ChevronRight
                          className={`ml-auto h-3.5 w-3.5 shrink-0 transition-transform ${
                            isActive
                              ? 'translate-x-0 text-blue-600'
                              : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Sections */}
          <article className="min-w-0">
            <div className="space-y-14">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <section key={s.id} id={s.id} className="scroll-mt-32">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 ring-1 ring-blue-200">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-4 pl-[3.25rem]">
                      {s.body && (
                        <p className="leading-relaxed text-slate-600">{s.body}</p>
                      )}
                      {s.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.subsections && (
                        <div className="mt-6 space-y-6">
                          {s.subsections.map((sub, i) => (
                            <div
                              key={i}
                              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                              <h3 className="text-base font-semibold text-slate-900">
                                {sub.title}
                              </h3>
                              <p className="mt-2 leading-relaxed text-slate-600">
                                {sub.body}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Contact card */}
            <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-6 p-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Questions about these terms?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We're happy to clarify any part of these terms and how they
                    apply to your engagement with EZ GLOBAL.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-blue-600" />
              Clear terms, fair engagement.
            </p>
            <p>© {new Date().getFullYear()} EZ GLOBAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsOfService;
