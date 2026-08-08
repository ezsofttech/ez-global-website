import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Database,
  Gauge,
  CheckCircle2,
  ShieldCheck,
  Server,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { disciplines, disciplineGroups, disciplinesInGroup } from "@/data/expertise";
import { COMPANY, jsonLdScript } from "@/lib/company";

export const metadata: Metadata = {
  title: "Engineering Expertise & Disciplines | EZGlobal",
  description:
    "The engineering disciplines behind every EZGlobal engagement — architecture, data and integration, performance, quality assurance, security and infrastructure.",
  alternates: { canonical: "/expertise" },
};

const icons: Record<string, LucideIcon> = {
  architecture: Compass,
  data: Database,
  performance: Gauge,
  quality: CheckCircle2,
  security: ShieldCheck,
  infrastructure: Server,
};

export default function ExpertisePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Expertise",
        item: `${COMPANY.url}/expertise`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />

      <div className="bg-white font-sans">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 md:pt-48 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 md:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0b64f1]" />
              Expertise
            </div>

            <h1 className="mb-6 font-plus-jakarta text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-[56px]">
              The disciplines behind every engagement.
            </h1>

            <p className="mx-auto mb-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl">
              Our services describe what you can buy. These describe how it gets
              built — the practices that apply to every project regardless of
              which service it was sold as.
            </p>

            <p className="text-sm font-medium text-neutral-500">
              Unglamorous work, and the single largest factor in what your
              software costs to own.
            </p>
          </div>
        </section>

        {/* ── Discipline index ───────────────────────────────── */}
        <section className="border-y border-neutral-100 bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {disciplineGroups.map((group) => (
              <div key={group}>
                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400">
                  {group}
                </span>
                <ul className="flex flex-col gap-2">
                  {disciplinesInGroup(group).map((d) => {
                    const Icon = icons[d.icon] ?? Compass;
                    return (
                      <li key={d.slug}>
                        <a
                          href={`#${d.slug}`}
                          className="group flex items-center gap-3 rounded-2xl border border-transparent bg-white p-3 shadow-xs transition-all duration-200 hover:border-[#0b64f1]/30 hover:shadow-sm"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0b64f1] transition-colors group-hover:bg-[#0b64f1] group-hover:text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-semibold leading-tight text-neutral-900 transition-colors group-hover:text-[#0b64f1]">
                            {d.name}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── One section per discipline ─────────────────────── */}
        {disciplines.map((d, i) => {
          const Icon = icons[d.icon] ?? Compass;
          const alt = i % 2 === 1;

          return (
            <section
              key={d.slug}
              id={d.slug}
              className={`scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
                alt ? "bg-neutral-50" : "bg-white"
              }`}
            >
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-[#0b64f1]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                      {d.group}
                    </span>
                  </div>

                  <h2 className="mb-5 font-plus-jakarta text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl md:text-[38px] md:leading-tight">
                    {d.name}
                  </h2>

                  <div className="flex flex-col gap-4">
                    {d.body.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-base leading-relaxed text-neutral-600"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                    In practice
                  </span>
                  <ul className="flex flex-col gap-3">
                    {d.practices.map((practice) => (
                      <li
                        key={practice}
                        className="flex gap-3 rounded-2xl border border-neutral-200/80 bg-white p-4"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b64f1]/10 text-[#0b64f1]">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span className="text-sm leading-relaxed text-neutral-700">
                          {practice}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Closing CTA ────────────────────────────────────── */}
        <section className="border-t border-neutral-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-5 font-plus-jakarta text-2xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              What&rsquo;s your idea?
            </h2>
            <p className="mx-auto mb-9 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              These disciplines apply whichever service you engage us for. Tell
              us what you are trying to build and we will outline how we would
              approach it.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#0b64f1] px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#0a51df]"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-neutral-300 bg-white px-8 py-4 text-[15px] font-semibold text-neutral-900 transition-colors hover:border-[#0b64f1]"
              >
                See our services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
