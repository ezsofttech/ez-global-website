"use client"

import React, { useEffect, useState, useRef } from 'react';
import Button from "../../components/button";
import Link from 'next/link';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(el);

          let startTime: number | null = null;
          const duration = 2000; // 2 seconds

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function: easeOutQuad
            const easedProgress = progress * (2 - progress);

            setCount(Math.floor(easedProgress * value));

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="whitespace-nowrap">
      {count}
      {suffix}
    </span>
  );
}

export function AboutUsSection() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-white flex flex-col items-center text-center font-sans overflow-hidden -mt-8 ">
      <div className="flex items-center gap-2 mb-8 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        Who We Are
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-5xl mx-auto mb-12">
        {/* Line 1 */}
        <span className="block">A Technology Partner</span>
        {/* Line 2 */}
        <span className="flex items-center justify-center gap-3 flex-wrap">
          <span className="">not</span>
          <span>a Supplier.</span>
          {/* Lightbulb badge */}
          <span className="group inline-flex items-center justify-center rounded-full bg-blue-500 shadow-[0_0_0_6px_#f0fce8] w-[48px] h-[48px] md:w-[58px] md:h-[58px] transition-all duration-300 hover:shadow-[0_0_0_8px_#d9f99d] hover:scale-105 cursor-pointer align-middle">
            <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .6 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </span>
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        {/* Card 1 — About EZGlobal */}
        <div className="relative rounded-2xl   p-8 text-left overflow-hidden ">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-[#d9f99d] flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3d7a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M3 9h6" />
              <path d="M3 15h6" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-neutral-900 mb-1">About EZGlobal</h3>
          <div className="w-8 h-[3px] bg-[#a3e635] rounded-full mb-5" />

          {/* Body */}
          <p className="text-[15px] text-neutral-600 leading-relaxed mb-4">
            EZGlobal is a software engineering company headquartered in Raipur, Chhattisgarh.
          </p>
          <p className="text-[15px] text-neutral-600 leading-relaxed">
            We work with businesses that need software to do something specific and measurable — process orders faster, remove manual reconciliation, reach a new market, or replace a system that has stopped keeping pace.
          </p>

          {/* Dot-grid watermark */}
          
        </div>

        {/* Card 2 — How We Work */}
        <div className="relative rounded-2xl   p-8 text-left overflow-hidden ">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl bg-[#e0e7ff] flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-neutral-900 mb-1">How We Work</h3>
          <div className="w-8 h-[3px] bg-[#818cf8] rounded-full mb-5" />

          {/* Body */}
          <p className="text-[15px] text-neutral-600 leading-relaxed mb-4">
            Our teams cover strategy, design, engineering and infrastructure, which means the people who scope your project are the people accountable for delivering it.
          </p>
          <p className="text-[15px] text-neutral-600 leading-relaxed">
            There is no handover to a separate delivery team, and no gap between what was promised and what gets built.
          </p>

          {/* Dot-grid watermark */}
          
        </div>

        

       

      </div>
      <div className='items-center justify-center'>
          <Link href="/about-us">
            <Button>More about us</Button>          
          </Link>
             
        </div>
    </section>
  );
}