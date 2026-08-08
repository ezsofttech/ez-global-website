import type { Metadata } from "next";
import {
  Phone,
  Mail,
  Clock,
  Headphones,
  LifeBuoy,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import { SupportFaq } from "@/components/Support-Sections/SupportFaq";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Support | EZGlobal",
  description:
    "Technical support for EZGlobal clients. Raise a request, check response times and find answers to common questions.",
  alternates: { canonical: "/support" },
};

/**
 * Published response-time commitments.
 *
 * Deliberately empty. The content document is explicit: do not publish
 * response times you cannot consistently meet — a missed published commitment
 * damages trust more than a modest one honoured reliably. The table below
 * renders automatically once the team confirms figures they can hold to.
 *
 * TODO (client input required): fill in `firstResponse` for each priority,
 * e.g. "Within 2 hours, business hours".
 */
const RESPONSE_TIMES: {
  priority: string;
  definition: string;
  firstResponse: string;
}[] = [];

/**
 * TODO (client input required): confirm support telephone hours,
 * e.g. "Monday to Saturday, 10:00–19:00 IST". Left empty so the page does not
 * advertise availability that has not been verified.
 */
const SUPPORT_HOURS = "";

/**
 * TODO (client input required): if a ticketing system is operated, add its URL
 * here to render the client portal card. If not, leave it empty.
 */
const CLIENT_PORTAL_URL = "";

const USEFUL_REQUEST = [
  {
    label: "What you were doing",
    detail: "when the issue occurred",
  },
  { label: "What you expected", detail: "to happen" },
  {
    label: "What actually happened",
    detail: "including any error message in full",
  },
  {
    label: "When it started",
    detail: "and whether it happens every time",
  },
  { label: "Browser or device", detail: "and operating system" },
  {
    label: "A screenshot or short screen recording",
    detail: "where possible",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 70%, rgba(59,130,246,0.3) 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#0951DE] backdrop-blur">
            <Headphones className="h-4 w-4" />
            We&apos;re here to help
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-black sm:text-5xl font-plus-jakarta">
            Support, when you need it.
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            An existing client with a technical issue or a change request? Raise
            it here and our team will pick it up.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`mailto:${COMPANY.email.support}`}
              className="inline-flex justify-center items-center gap-3 bg-[#0b64f1] hover:bg-[#0a51df] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors shadow-sm"
            >
              Raise a Support Request
              <LifeBuoy className="w-5 h-5" />
            </a>
            <a
              href={COMPANY.telephoneHref}
              className="inline-flex justify-center items-center gap-3 bg-white border border-[#0b64f1] text-neutral-900 hover:bg-neutral-50 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors"
            >
              Call {COMPANY.telephone}
              <Phone className="w-5 h-5 text-[#0b64f1]" />
            </a>
          </div>
        </div>
      </header>

      {/* ── Support channels ─────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-200">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">Email</h2>
            <a
              href={`mailto:${COMPANY.email.support}`}
              className="mt-2 block font-mono text-sm font-semibold text-[#0951DE] hover:underline break-all"
            >
              {COMPANY.email.support}
            </a>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Best for non-urgent issues, change requests and questions. Include
              your project name and, where possible, a screenshot.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
              <Phone className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Telephone
            </h2>
            <a
              href={COMPANY.telephoneHref}
              className="mt-2 block font-mono text-sm font-semibold text-[#0951DE] hover:underline"
            >
              {COMPANY.telephone}
            </a>
            {SUPPORT_HOURS && (
              <div className="mt-3 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span className="text-xs font-medium text-slate-500">
                  {SUPPORT_HOURS}
                </span>
              </div>
            )}
          </div>

          {/* Rendered only if a ticketing system is actually operated. */}
          {CLIENT_PORTAL_URL && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-200">
                <ClipboardList className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                Client Portal
              </h2>
              <Link
                href={CLIENT_PORTAL_URL}
                className="mt-2 block text-sm font-semibold text-[#0951DE] hover:underline"
              >
                Open the portal
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Response times (rendered once confirmed) ─────────── */}
      {RESPONSE_TIMES.length > 0 && (
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">
              Response times
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold text-slate-900">
                      Priority
                    </th>
                    <th className="px-5 py-3 font-semibold text-slate-900">
                      Definition
                    </th>
                    <th className="px-5 py-3 font-semibold text-slate-900">
                      First response
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RESPONSE_TIMES.map((row) => (
                    <tr
                      key={row.priority}
                      className="border-b border-slate-100 last:border-b-0"
                    >
                      <td className="px-5 py-4 font-semibold text-slate-900">
                        {row.priority}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {row.definition}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {row.firstResponse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Response times apply to clients under an active support or
              maintenance agreement. Specific commitments in your agreement take
              precedence over the table above.
            </p>
          </div>
        </section>
      )}

      {/* ── Raising a useful request ─────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3 font-plus-jakarta">
          Help us resolve it faster
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Include the following and we can usually diagnose an issue in one
          exchange rather than three.
        </p>

        <ul className="grid gap-4 sm:grid-cols-2">
          {USEFUL_REQUEST.map((entry) => (
            <li
              key={entry.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="font-semibold text-slate-900 text-sm">
                {entry.label}
              </span>{" "}
              <span className="text-sm text-slate-500">{entry.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Support FAQ ──────────────────────────────────────── */}
      <SupportFaq />

      {/* ── Escalation ───────────────────────────────────────── */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
            Escalation
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl">
            If a support request is not progressing to your satisfaction,
            escalate it by writing to{" "}
            <a
              href={`mailto:${COMPANY.email.general}`}
              className="font-semibold text-[#0951DE] hover:underline"
            >
              {COMPANY.email.general}
            </a>
            . We would far rather hear about a problem directly than have you
            working around it.
            {/* TODO (client input required): name the specific escalation
                contact (person or role) once confirmed. */}
          </p>
        </div>
      </section>
    </div>
  );
}
