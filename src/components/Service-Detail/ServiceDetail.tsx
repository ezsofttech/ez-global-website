"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import type { Service } from "@/data/services";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0b64f1] uppercase">
      <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full" />
      {children}
    </div>
  );
}

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left py-5 sm:py-6 cursor-pointer group"
      >
        <span className="text-base sm:text-lg font-semibold text-neutral-900 group-hover:text-[#0b64f1] transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-neutral-400 transition-transform duration-300 ${
            open ? "rotate-180 text-[#0b64f1]" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetail({
  service,
  related,
  index,
}: {
  service: Service;
  related: Service[];
  index: number;
}) {
  return (
    <div className="font-sans bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500 mb-8 font-medium"
          >
            <Link href="/" className="hover:text-[#0b64f1] transition-colors">
              Home
            </Link>
            <span className="text-neutral-300">/</span>
            <Link
              href="/services"
              className="hover:text-[#0b64f1] transition-colors"
            >
              Services
            </Link>
            <span className="text-neutral-300">/</span>
            {/* The service's real name, not its URL slug. */}
            <span className="text-neutral-900" aria-current="page">
              {service.name}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-[55%]">
              <div className="flex items-center gap-4 sm:gap-6 mb-6">
                <span className="text-4xl sm:text-6xl lg:text-7xl text-[#0b64f1] font-semibold leading-none tracking-tight tabular-nums">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-full">
                  {service.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-neutral-900 leading-[1.1] font-plus-jakarta mb-6">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-10">
                {service.heroSubline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={service.primaryCta.href}
                  className="inline-flex justify-center items-center gap-3 bg-[#0b64f1] hover:bg-[#0a51df] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors shadow-sm"
                >
                  {service.primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {service.secondaryCta && (
                  <Link
                    href={service.secondaryCta.href}
                    className="inline-flex justify-center items-center gap-3 bg-white border border-neutral-300 hover:border-[#0b64f1] text-neutral-900 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors"
                  >
                    {service.secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Hero artwork */}
            <div className="w-full lg:w-[45%]">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-auto max-h-[420px] object-cover rounded-3xl border border-neutral-200 shadow-sm"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-3xl border border-neutral-200 bg-gradient-to-br from-[#0b64f1] via-[#3b82f6] to-[#0a2a6b] shadow-sm flex items-center justify-center p-10 overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <span className="relative text-white text-2xl sm:text-3xl font-bold tracking-tight text-center leading-snug font-plus-jakarta">
                    {service.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Overview</SectionLabel>
          <div className="flex flex-col gap-6">
            {service.overview.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="text-base sm:text-lg text-neutral-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <SectionLabel>What&rsquo;s Included</SectionLabel>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-900 leading-tight font-plus-jakarta">
              Everything the engagement covers.
            </h2>
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {service.included.map((inclusion) => (
              <motion.li
                key={inclusion.title}
                variants={item}
                className="bg-white border border-neutral-200/80 rounded-2xl p-5 sm:p-6 flex gap-4 hover:border-[#0b64f1]/40 hover:shadow-sm transition-all duration-300"
              >
                <span className="w-6 h-6 shrink-0 rounded-full bg-[#0b64f1]/10 text-[#0b64f1] flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug">
                    {inclusion.title}
                  </h3>
                  {inclusion.detail && (
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-1.5">
                      {inclusion.detail}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-900 leading-tight font-plus-jakarta">
              How it works.
            </h2>
          </div>

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative border-l border-neutral-200 ml-4 sm:ml-6"
          >
            {service.process.map((step, i) => (
              <motion.li
                key={step.title}
                variants={item}
                className="relative pl-8 sm:pl-12 pb-10 last:pb-0"
              >
                <span className="absolute -left-[17px] sm:-left-[19px] top-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-[#0b64f1] text-[#0b64f1] flex items-center justify-center text-xs sm:text-sm font-bold tabular-nums">
                  {i + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight mb-1.5">
                  {step.title}
                </h3>
                {step.detail && (
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {step.detail}
                  </p>
                )}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-xs md:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              Who It&rsquo;s For
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight font-plus-jakarta">
              You will recognise your situation here.
            </h2>
          </div>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1"
          >
            {service.whoItsFor.map((who) => (
              <motion.li
                key={who}
                variants={item}
                className="flex gap-4 py-4 border-b border-neutral-800"
              >
                <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {who}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 sm:mb-14">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-900 leading-tight font-plus-jakarta">
                Frequently asked questions
              </h2>
            </div>
            <div className="border-t border-neutral-200">
              {service.faqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related services ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-y border-neutral-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 mb-8 font-plus-jakarta">
              Related capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group bg-white border border-neutral-200/80 rounded-2xl p-6 hover:border-[#0b64f1]/40 hover:shadow-sm transition-all duration-300 flex flex-col justify-between gap-6"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-2 mb-2 group-hover:text-[#0b64f1] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                      {item.oneLine}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b64f1] group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-neutral-900 leading-tight font-plus-jakarta mb-6">
            What&rsquo;s your idea?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-10">
            {service.closing ??
              "Speak with our team for a complimentary consultation. We will review your requirements, outline a realistic scope and timeline, and provide a written proposal — with no obligation."}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center gap-3 bg-[#0b64f1] hover:bg-[#0a51df] text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors shadow-sm"
            >
              Book a Free Consultation
              <Calendar className="w-5 h-5 opacity-90" />
            </Link>
            <a
              href="tel:+918962370822"
              className="inline-flex justify-center items-center gap-3 bg-white border border-[#0b64f1] text-neutral-900 hover:bg-neutral-50 px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors"
            >
              Call +91 89623 70822
              <Phone className="w-5 h-5 text-[#0b64f1]" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-500 font-medium">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0b64f1]" />
              Response within one business day
            </span>
            <span className="hidden sm:inline text-neutral-300">·</span>
            <span>Confidentiality assured</span>
            <span className="hidden sm:inline text-neutral-300">·</span>
            <span>No commitment required</span>
          </div>
        </div>
      </section>
    </div>
  );
}
