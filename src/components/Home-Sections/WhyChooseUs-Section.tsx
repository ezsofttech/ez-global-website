"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, Clock, Users, ShieldCheck, MapPin } from "lucide-react";
import Button from "@/components/button";

const features = [
  {
    id: 1,
    title: "Security by default",
    description:
      "access control, encryption and audit trails designed in from the first sprint",
    image: "/why-quality-first.webp",
    icon: Award,
  },
  {
    id: 2,
    title: "Performance as a requirement",
    description:
      "measured against defined thresholds, not assessed by impression",
    image: "/why-fast-delivery.webp",
    icon: Clock,
  },
  {
    id: 3,
    title: "Documented decisions",
    description:
      "architecture recorded as it is agreed, not reconstructed afterwards",
    image: "/why-client-centric.webp",
    icon: Users,
  },
  {
    id: 4,
    title: "Tested before delivered",
    description:
      "functional, performance and security testing precede every release",
    image: "/why-global-standards.webp",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Portable by design",
    description:
      "you are never locked to us; everything we build can be handed over cleanly",
    image: "/why-global-presence.webp",
    icon: MapPin,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-12 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
          <span className="w-1.5 h-1.5 bg-black rounded-full" />
          Our Standards
        </div>
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            {/* Main Title */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight font-plus-jakarta">
              Judgement <br />
              <span className=" font-plus-jakarta text-blue-700 font-semibold">over fashion.</span>
            </h2>
            <div className="w-24 h-1 bg-blue-700 rounded-full mt-2" />
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              We have no favourite tools. Every choice is judged on three
              things: what your project actually demands, how cleanly it fits
              what you already run, and what it will cost to maintain in five
              years. And we will always explain the decision in terms of what it
              costs you — not how interesting it was to build.
            </p>
            <div className="w-50">
              <Button href="/about-us">Learn more</Button>
            </div>
          </div>
        </div>

        {/* 5 Full Background Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Link
                key={feature.id}
                href="/services"
                className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between p-6 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block cursor-pointer"
              >
                {/* Full Card Background Image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

                {/* Top Badge Icon (White Circle with Icon) */}
                <div className="relative z-20 self-end">
                  <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-slate-900" />
                  </div>
                </div>

                {/* Bottom Content Text */}
                <div className="relative z-20 space-y-2 text-white">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
