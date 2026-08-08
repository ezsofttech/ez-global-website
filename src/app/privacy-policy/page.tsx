"use client"
import { useEffect, useState } from 'react';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Users,
  FileText,
  RefreshCw,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { COMPANY } from '@/lib/company';

type Section = {
  id: string;
  title: string;
  icon: typeof Shield;
  body: string;
  bullets?: string[];
};

/**
 * Privacy Policy — section 7 of the master content document.
 *
 * ⚠️ This is a drafted template, not legal advice. Before publishing, have it
 * reviewed by a qualified legal practitioner familiar with Indian law — the
 * Information Technology Act 2000, the SPDI Rules 2011 and the Digital
 * Personal Data Protection Act 2023 — and with UK/EU GDPR where data belonging
 * to clients in those markets is processed.
 */
const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    body: `EZGlobal ("we", "us", "our") operates this website and provides software engineering and digital growth services. This policy explains what personal information we collect, why we collect it, how we use it, and what rights you have in relation to it. By using our website or engaging our services, you acknowledge the practices described here.`,
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    body: "We collect information you provide directly, information collected automatically when you visit the website, and — where applicable — information provided to us by third parties.",
    bullets: [
      "Information you provide: name, email address and telephone number submitted through enquiry or careers forms; company name and role, where provided; project requirements, budget indications and correspondence; curriculum vitae and supporting materials submitted through careers applications; and any other information you choose to share with us.",
      "Information collected automatically: IP address, browser type and version, and device information; pages viewed, time spent and referring source; and cookie and similar technology data, subject to your consent.",
      "Information from third parties: analytics, advertising and CRM platforms that provide us with data. (To be confirmed and listed before publication.)",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How We Use Your Information",
    icon: FileText,
    body: "We use the information we collect for the following purposes:",
    bullets: [
      "To respond to enquiries and provide requested information",
      "To deliver, manage and support the services you engage us for",
      "To process and assess job applications",
      "To issue invoices and manage payments",
      "To send service updates and, where you have consented, marketing communications",
      "To improve our website, services and user experience",
      "To comply with legal, regulatory and contractual obligations",
      "To detect, prevent and address security incidents and fraud",
    ],
  },
  {
    id: "legal-basis",
    title: "Legal Basis for Processing",
    icon: FileText,
    body: "Where applicable law requires a legal basis, we rely on:",
    bullets: [
      "Consent — marketing communications and non-essential cookies",
      "Contract — processing necessary to deliver services you have engaged",
      "Legitimate interests — service improvement, security and business administration",
      "Legal obligation — tax, accounting and statutory requirements",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    icon: Eye,
    body: "We use cookies and similar technologies to operate the website, understand usage and — where you consent — support marketing. You may manage preferences through our cookie banner or your browser settings. Disabling non-essential cookies will not affect core functionality.",
    bullets: [
      "Strictly necessary — required for the site to function; cannot be disabled",
      "Analytics — help us understand how the site is used",
      "Marketing — used to measure and target advertising",
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    icon: Share2,
    body: "We do not sell personal information. We share it only with:",
    bullets: [
      "Service providers acting on our behalf — hosting, analytics, email delivery and payment processing — under contractual confidentiality obligations",
      "Professional advisers including legal, accounting and insurance providers",
      "Authorities, where required by law or to protect our legal rights",
      "A successor entity, in the event of a merger, acquisition or asset transfer",
    ],
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    icon: Share2,
    body: "We serve clients in India, the United Kingdom, the United Arab Emirates and the United States. Personal information may therefore be transferred to and processed in countries other than your own. Where such transfers occur, we implement appropriate safeguards consistent with applicable law.",
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: Database,
    body: "We retain personal information only for as long as necessary for the purposes described in this policy. Financial records are retained as required by applicable tax and accounting legislation. Retention periods for enquiry data, client project data and careers applications are confirmed on request.",
  },
  {
    id: "data-security",
    title: "Security",
    icon: Lock,
    body: "We apply appropriate technical and organisational measures to protect personal information, including encrypted transmission, access controls and regular review. No method of transmission or storage is entirely secure, and we cannot guarantee absolute security.",
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: Users,
    body: "Subject to applicable law, you may request access, correction or erasure of your information; object to or restrict processing; withdraw consent; request transfer to another provider; or lodge a complaint with the relevant supervisory authority. To exercise any of these rights, contact us using the address below.",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: Users,
    body: "Our services are directed to businesses and are not intended for individuals under 18. We do not knowingly collect information from children. If you believe a child has provided us with personal information, contact us and we will delete it.",
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: Share2,
    body: "Our website may link to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.",
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: RefreshCw,
    body: 'We may update this policy from time to time. Material changes will be indicated by the "Last updated" date above and, where appropriate, notified directly.',
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    body: `For any question about this policy or to exercise your rights, write to ${COMPANY.email.privacy}, call ${COMPANY.telephone}, or write to us at ${COMPANY.addressLine}, India.`,
  },
];

/**
 * TODO (client input required): confirm the effective date with your legal
 * adviser, along with the named data protection contact, the list of
 * processors, and the specific retention periods referenced above.
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

function PrivacyPolicy() {
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
          <div className="flex items-center gap-3 text-[#0851DE]">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Privacy
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Privacy <span className='text-[#0851DE]'> Policy</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Your trust matters. This policy explains what we collect, why we
            collect it, and how you stay in control of your information.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-medium">
              <RefreshCw className="h-3.5 w-3.5" />
              Last updated {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              {COMPANY.email.privacy}
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0851DE]">
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
                            ? 'bg-blue-50 font-semibold text-[#0851DE]'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isActive ? 'text-[#0851DE]' : 'text-slate-400'
                          }`}
                        />
                        <span className="truncate">{s.title}</span>
                        <ChevronRight
                          className={`ml-auto h-3.5 w-3.5 shrink-0 transition-transform ${
                            isActive
                              ? 'translate-x-0 text-[#0851DE]'
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
                  <section
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d0defc] text-[#0851DE] ring-1 ring-[#0851DE]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-4 pl-[3.25rem]">
                      <p className="leading-relaxed text-slate-600">{s.body}</p>
                      {s.bullets && (
                        <ul className="mt-4 space-y-2.5">
                          {s.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-slate-600"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0851DE]" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
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
                    Questions about your privacy?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Write to{" "}
                    <a
                      href={`mailto:${COMPANY.email.privacy}`}
                      className="font-semibold text-[#0851DE] hover:underline"
                    >
                      {COMPANY.email.privacy}
                    </a>{" "}
                    and our team will respond.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0851DE] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>

    </div>
  );
}

export default PrivacyPolicy;
