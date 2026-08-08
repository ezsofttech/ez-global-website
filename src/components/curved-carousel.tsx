"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Types & Interfaces
interface CardItem {
  id: number;
  content: React.ReactNode;
}

export default function CurvedCarousel() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with Card 5 (Expertise) in center
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const dragThreshold = 100; // pixels to trigger slide
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Definition of the 9 cards with high-fidelity glassmorphism styles
  const cards: CardItem[] = [
    // 1. Projects Delivered (Frosted White Glass)
    {
      id: 1,
      content: (
        <div className="w-full h-full bg-white/35 backdrop-blur-lg border border-white/50 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
                  Our Work
                </span>
                <h3 className="text-lg font-bold text-neutral-900 mt-0.5">
                  Projects Delivered
                </h3>
              </div>
              <span className="text-blue-600 bg-blue-50/50 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-blue-100/50">
                Growing
              </span>
            </div>

            <div className="mt-6 h-20 flex items-end gap-2.5 justify-between">
              {[30, 45, 38, 55, 65, 58, 72, 78, 85, 95].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className="w-full rounded-t transition-all duration-300 bg-neutral-400/30 group-hover:bg-blue-500"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[9px] text-neutral-500 font-semibold">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-200/30 flex items-center justify-between text-[11px] text-neutral-600">
            <span>Delivery Quality</span>
            <span className="font-bold text-neutral-900">Built to Perform</span>
          </div>
        </div>
      ),
    },

    // 2. Our Services (Frosted White Glass)
    {
      id: 2,
      content: (
        <div className="w-full h-full bg-white/35 backdrop-blur-lg border border-white/50 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800">
          <div>
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
              What We Build
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-0.5">
              Digital Solutions
            </h3>
            <p className="text-[11px] text-neutral-500 mt-1">
              Technology designed around your business.
            </p>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {[
              { title: "Web Development", progress: "95%" },
              { title: "Mobile Applications", progress: "88%" },
              { title: "Custom Software", progress: "92%" },
              { title: "Desktop Applications", progress: "82%" },
            ].map((service, i) => (
              <div key={i} className="p-2 bg-white/40 border border-white/30 rounded-xl">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] font-semibold text-neutral-800">
                    {service.title}
                  </span>
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="h-1.5 bg-neutral-200/50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: service.progress }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // 3. Client Success (Stained Blue Glass)
    {
      id: 3,
      content: (
        <div className="w-full h-full bg-blue-600/10 backdrop-blur-lg border border-blue-400/20 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-800 border border-blue-200/30 px-2.5 py-1 rounded-full">
              Client Success
            </span>
            <h3 className="text-xl font-bold mt-5 tracking-tight text-neutral-900">
              Built Around<br />Your Goals.
            </h3>
            <p className="text-neutral-600 text-xs mt-2.5 leading-relaxed">
              We understand your business first, then build technology that moves it forward.
            </p>
          </div>

          <div className="relative z-10 bg-white/40 border border-white/40 rounded-2xl p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Business-First</p>
                <p className="text-[9px] text-neutral-500">Solutions for real impact</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // 4. Business Growth (Frosted White Glass)
    {
      id: 4,
      content: (
        <div className="w-full h-full bg-white/35 backdrop-blur-lg border border-white/50 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800">
          <div>
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
              Digital Transformation
            </span>
            <h3 className="text-base font-bold text-neutral-900 mt-0.5 leading-tight">
              Technology That Moves<br />Businesses Forward
            </h3>
          </div>

          <div className="my-3 relative flex-1 min-h-[96px] flex items-end">
            <svg viewBox="0 0 300 150" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="businessGrowthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map((y) => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#e4e4e7" strokeWidth="1" strokeDasharray="4 4" />
              ))}
              <path
                d="M 10 130 C 45 120, 70 100, 100 105 C 135 110, 155 75, 190 70 C 225 65, 255 30, 290 15 L 290 140 L 10 140 Z"
                fill="url(#businessGrowthGradient)"
              />
              <path
                d="M 10 130 C 45 120, 70 100, 100 105 C 135 110, 155 75, 190 70 C 225 65, 255 30, 290 15"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle cx="290" cy="15" r="5" fill="#3b82f6" stroke="white" strokeWidth="2" className="animate-pulse" />
            </svg>
          </div>

          <div className="flex justify-between text-[9px] font-bold text-neutral-400 pt-2 border-t border-neutral-200/30">
            <span>Idea</span>
            <span>Strategy</span>
            <span>Design</span>
            <span>Develop</span>
            <span>Scale</span>
          </div>
        </div>
      ),
    },

    // 5. Expertise (Smoked Dark Glass)
    {
      id: 5,
      content: (
        <div className="w-full h-full bg-zinc-950/80 backdrop-blur-lg border border-zinc-800/80 rounded-3xl p-5 flex flex-col justify-center shadow-2xl text-white">
          <div className="text-[1.6rem] font-bold leading-[1.3] text-left font-plus-jakarta tracking-tight">
            <span className="text-white">Expertise </span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#D6FD70] mx-1 align-middle text-black shadow-md">
              <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
              </svg>
            </span>
            <span className="text-zinc-500"> that</span>
            <br />
            <span className="text-zinc-500">Combines Strategy,</span>
            <br />
            <span className="text-white">Design </span>
            <span className="text-zinc-500">and</span>
            <br />
            <span className="text-white">Technology</span>
          </div>
        </div>
      ),
    },

    // 6. Start Your Project (Stained Blue Gradient Glass)
    {
      id: 6,
      content: (
        <div className="w-full h-full bg-gradient-to-tr from-blue-500/15 via-sky-400/10 to-blue-600/20 backdrop-blur-lg border border-blue-400/20 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 blur-xl" />
          
          <Link href="/contact">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-90">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          </Link>
          <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Start Your Project
          </h3>
          <p className="text-neutral-500 text-xs mt-1.5 font-medium">
            Let's build something great together
          </p>
        </div>
      ),
    },

    // 7. Technologies (Frosted White Glass)
    {
      id: 7,
      content: (
        <div className="w-full h-full bg-white/35 backdrop-blur-lg border border-white/50 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800">
          <div>
            <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">
              Technologies
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-0.5">
              Judgement Over Fashion
            </h3>
            <p className="text-[11px] text-neutral-500 mt-1">
              Chosen for your project, not for novelty.
            </p>
          </div>

          {/*
            Standards rather than tool names: the content document keeps every
            framework, language and platform name off the public site.
          */}
          <div className="grid grid-cols-2 gap-2 my-4">
            {[
              "Security by default",
              "Measured performance",
              "Documented decisions",
              "Tested before delivered",
              "Portable by design",
              "Built to maintain",
            ].map((standard) => (
              <div key={standard} className="bg-white/40 border border-white/30 rounded-xl p-2 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-[11px] font-bold text-neutral-700 leading-tight">{standard}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-200/30 text-[11px] text-neutral-500 font-medium">
            Decisions explained in commercial terms, not technical novelty.
          </div>
        </div>
      ),
    },

    // 8. Development Excellence (Frosted White Glass)
    {
      id: 8,
      content: (
        <div className="w-full h-full bg-white/35 backdrop-blur-lg border border-white/50 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800">
          <div className="bg-zinc-950/80 rounded-2xl p-3 flex items-center justify-between border border-zinc-800/50">
            <div>
              <h4 className="text-[11px] font-bold text-white">
                Development Excellence
              </h4>
              <p className="text-[9px] text-zinc-500 font-semibold mt-0.5">
                Built for real-world performance
              </p>
            </div>
            <div className="text-blue-500 bg-blue-500/10 p-1.5 rounded-lg border border-blue-500/20">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          <div className="my-3">
            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
              Built Better.
            </h3>
            <p className="text-[9px] text-neutral-400 font-bold mt-1 uppercase tracking-wider">
              Performance • Security • Scalability
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["Fast", "Scalable", "Secure", "Reliable", "Responsive", "Modern"].map((tag) => (
              <span key={tag} className="text-[9px] font-bold bg-white/40 border border-white/40 text-neutral-800 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    // 9. Custom Software (Stained Emerald Glass)
    {
      id: 9,
      content: (
        <div className="w-full h-full bg-emerald-500/10 backdrop-blur-lg border border-emerald-400/20 rounded-3xl p-5 flex flex-col justify-between shadow-lg text-neutral-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/5 rounded-full blur-xl" />
          <div>
            <span className="text-[9px] font-bold bg-emerald-500/20 border border-emerald-200/30 text-emerald-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Built Around Operations
            </span>
            <h3 className="text-lg font-bold mt-3 tracking-tight text-neutral-900">
              Custom Software
            </h3>
            <p className="text-neutral-500 text-[11px] mt-0.5">
              Technology tailored to your operations
            </p>
          </div>

          <div className="my-2 bg-white/40 border border-white/40 rounded-2xl p-2.5 shadow-sm">
            <div className="grid grid-cols-2 gap-1.5">
              {["ERP Systems", "CRM", "Billing", "Inventory"].map((item) => (
                <div key={item} className="bg-white/50 border border-white/30 rounded-lg p-2 text-[9px] font-bold text-center text-neutral-800">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-neutral-500 pt-1.5 border-t border-neutral-200/30">
            <span>Solution Status</span>
            <span className="flex items-center gap-1 font-bold text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Built to Scale
            </span>
          </div>
        </div>
      ),
    },
  ];

  // Auto-play interval
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isDragging, cards.length]);

  // Touch & Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    currentX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = currentX.current - startX.current;
    if (Math.abs(diff) > dragThreshold) {
      if (diff > 0) {
        // Drag right -> previous card
        setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
      } else {
        // Drag left -> next card
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section
      className="relative w-full py-4 pb-8 bg-transparent overflow-hidden select-none animate-fadeIn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
    >
      <style jsx global>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col items-center justify-center z-10">

        {/* 3D Perspective Wrapper */}
        <div
          className="relative w-full h-[320px] sm:h-[370px] md:h-[410px] lg:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-visible"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 30%" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, idx) => {
            let offset = idx - activeIndex;

            // Shortest path around circular array
            const count = cards.length;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const absOffset = Math.abs(offset);

            // Limit visible cards in perspective to prevent overcrowding
            const isMobile = windowWidth < 640;
            const isTablet = windowWidth < 1024;
            
            const maxVisibleOffset = isMobile ? 1 : isTablet ? 2 : 2;
            if (absOffset > maxVisibleOffset) return null;

            // 3D Cover Flow Mathematics
            const spacing = isMobile ? 140 : isTablet ? 200 : 240;
            
            // Shift cards left or right, leaving center card at 0
            const tx = offset === 0 ? 0 : (offset > 0 ? spacing + (offset - 1) * 70 : -spacing + (offset + 1) * 70);
            
            // Push side cards back in Z space
            const tz = offset === 0 ? 0 : -200 - absOffset * 30;
            
            // Rotate side cards 55 degrees inward to face the center
            const rY = offset === 0 ? 0 : (offset > 0 ? -55 : 55);

            const scale = offset === 0 ? 1 : 0.78 - absOffset * 0.04;
            const opacity = offset === 0 ? 1 : Math.max(0.2, 0.7 - absOffset * 0.15);
            
            // Blur side cards slightly
            const blur = offset === 0 ? 0 : Math.min(3, absOffset * 1.2);
            const zIndex = 100 - absOffset;

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (idx !== activeIndex && !isDragging) {
                    setActiveIndex(idx);
                  }
                }}
                className={`absolute w-[210px] h-[290px] sm:w-[250px] sm:h-[345px] md:w-[280px] md:h-[385px] lg:w-[300px] lg:h-[415px] transition-all duration-700 cubic-bezier(0.25, 1, 0.5, 1) origin-center will-change-transform ${
                  idx === activeIndex ? "ring-2 ring-white/50 shadow-2xl" : "hover:brightness-105"
                } rounded-3xl overflow-hidden`}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rY}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  pointerEvents: absOffset > 1 ? "none" : "auto",
                }}
              >
                {card.content}
              </div>
            );
          })}
        </div>

        {/* Carousel Dots / Navigation Indicator */}
        <div className="flex gap-2.5 mt-6 mb-2">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === activeIndex
                  ? "w-8 bg-neutral-800"
                  : "w-2.5 bg-neutral-800/20 hover:bg-neutral-800/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/*
          The "Rated 4.9/5 by 4,900+ clients" star block was removed here.
          The content document is explicit that only substantiated figures may
          be published, and the claim contradicted the site's own credibility
          bar (200+ projects delivered). Reinstate a rating only alongside a
          verifiable public review profile.
        */}

      </div>
    </section>
  );
}
