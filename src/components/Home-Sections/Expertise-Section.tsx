"use client";

import React from "react";
import Link from "next/link";
import Button from "../button";
import { services } from "@/data/services";
import { ExpertiseArt } from "./ExpertiseArt";

/**
 * "What We Do" — the twelve capabilities.
 *
 * Titles and one-line descriptions come from the shared services data, so this
 * section can never drift out of step with the services grid, the navbar or the
 * footer. Each card carries a bespoke animated SVG scene keyed to its slug.
 */
export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="-mt-20 flex flex-col items-center overflow-hidden bg-white px-4 py-20 text-center font-sans md:py-28"
    >
      {/* Category Label */}
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-black md:mb-10 md:text-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-black" />
        What We Do
      </div>

      {/* Main Headline */}
      <h2 className="mx-auto mb-6 max-w-5xl text-3xl font-medium leading-[1.2] tracking-tight text-neutral-950 sm:text-5xl md:text-[50px] md:leading-[1.15]">
        Twelve capabilities.
        <br className="hidden md:inline" />
        One accountable team.
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mb-12 max-w-3xl text-base leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
        Most of these get bought one at a time. They work better bought
        together — a storefront that talks to your inventory, automation that
        feeds your reporting, infrastructure sized for what you are about to
        launch.
      </p>

      {/* Grid of capabilities */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-6 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-3">
        {/* Twelve cards divide evenly across both the two- and three-column
            layouts, so no card is left stranded on a short final row. */}
        {services.map((service) => {
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col items-center rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b64f1] focus-visible:ring-offset-4"
            >
              <div className="relative mb-4 flex h-[190px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50/50 shadow-xs transition-all duration-500 group-hover:border-[#0b64f1]/25 group-hover:bg-[#0b64f1]/[0.03] group-hover:shadow-sm">
                <div className="h-full w-full p-3 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
                  <ExpertiseArt slug={service.slug} />
                </div>
              </div>

              <h3 className="mb-1.5 text-base font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-[#0b64f1] md:text-lg">
                {service.name}
              </h3>

              <p className="mx-auto max-w-xs text-[13px] leading-relaxed text-neutral-500">
                {service.oneLine}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10">
        <Link href="/services">
          <Button>Explore all Services</Button>
        </Link>
      </div>
    </section>
  );
}
