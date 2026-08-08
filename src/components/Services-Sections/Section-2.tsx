"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Smartphone,
  MonitorSmartphone,
  Building2,
  MonitorPlay,
  Sparkles,
  ChartNoAxesCombined,
  MonitorCloud,
  ShoppingCart,
  ShoppingBag,
  HousePlug,
  Cloud,
  Database,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "@/data/services";

/**
 * Icons live here rather than in the data module so that the data stays free
 * of React imports and can be consumed by server components.
 */
const icons: Record<string, LucideIcon> = {
  "web-dev": MonitorSmartphone,
  "app-dev": Smartphone,
  "ai-automation": Sparkles,
  "business-auto": Building2,
  "desk-app": MonitorPlay,
  "cloud-platform": Cloud,
  saas: MonitorCloud,
  commerce: ShoppingCart,
  "quick-commerce": ShoppingBag,
  "digital-marketing": ChartNoAxesCombined,
  gcc: HousePlug,
  "data-analytics": Database,
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = icons[service.slug] ?? MonitorSmartphone;

  return (
    <motion.div variants={card}>
      <Link
        href={`/services/${service.slug}`}
        aria-label={`${service.name} — ${service.category}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#0b64f1]/40 hover:shadow-[0_18px_50px_-18px_rgba(11,100,241,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b64f1] focus-visible:ring-offset-2"
      >
        {/* ── Media ──────────────────────────────────────── */}
        {/*
          The zoom lives on an inner wrapper that is GPU-promoted and animates
          transform only. Animating a filter (brightness/saturate) alongside a
          scale forces a repaint of the whole layer every frame, which is what
          made the earlier version flicker; the resting dim is now a separate
          overlay that animates opacity instead.
        */}
        <div className="relative isolate overflow-hidden rounded-t-3xl bg-neutral-100">
          <div className="relative aspect-[16/10] w-full transform-gpu will-change-transform backface-hidden transition-transform duration-500 ease-out group-hover:scale-[1.05]">
            {service.image ? (
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : (
              // Fallback for any service still awaiting artwork.
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#eaf1fe] via-[#dfe9fd] to-[#cfe0fb]">
                <Icon className="text-[#0b64f1]/70" size={44} />
              </div>
            )}
          </div>

          {/* Resting dim — opacity-only, so it never triggers a repaint */}
          <div className="pointer-events-none absolute inset-0 bg-neutral-900/10 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

          {/*
            Index — mirrors the numbering on each service detail page. A frosted
            pill rather than bare text, because the artwork ranges from a
            near-white illustration to a dark dashboard screenshot and plain
            text would lose contrast against one end or the other.
          */}
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold tabular-nums tracking-widest text-neutral-900 shadow-sm backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* ── Body ───────────────────────────────────────── */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 transition-colors duration-300 group-hover:border-[#0b64f1]/30 group-hover:bg-[#0b64f1]/5">
              <Icon className={service.accent} size={18} />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
              {service.category}
            </span>
          </div>

          <h3 className="font-plus-jakarta text-lg font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-[#0b64f1]">
            {service.name}
          </h3>

          <p className="flex-1 text-sm leading-relaxed text-neutral-600">
            {service.cardCopy}
          </p>

          <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0b64f1] transition-[gap] duration-300 group-hover:gap-2.5">
            Explore
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Section2() {
  return (
    <div className="p-3">
      <section
        id="services"
        className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 px-4 py-20 font-sans md:py-28"
      >
        {/* Soft brand wash behind the heading */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: "radial-gradient(circle, #0b64f1, transparent)" }}
        />

        <div className="relative flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 shadow-sm md:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0b64f1]" />
            Our Services
          </div>

          <h2 className="mx-auto mb-6 max-w-5xl font-plus-jakarta text-3xl font-bold leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl md:text-[50px]">
            Considered consulting.
            <br className="hidden md:inline" /> Intelligent engineering.
          </h2>

          <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg md:text-xl">
            Whether you are modernising an existing system or building something
            entirely new, our teams help you move faster — with clarity,
            accountability and confidence at every stage.
          </p>

          <p className="text-sm font-medium tracking-wide text-neutral-500 sm:text-base">
            Explore any capability to see how we scope, build and support it.
          </p>
        </div>

        {/*
          Twelve cards on a three-column grid — exactly four full rows. The
          first card previously spanned two columns as a featured tile, which
          worked at eleven services (12 cells, 4 rows) but at twelve would
          strand a single card alone on a fifth row. A uniform grid keeps every
          row complete at both the two- and three-column breakpoints.
        */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
