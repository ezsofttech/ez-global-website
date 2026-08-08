"use client";

import React from 'react';
import Button from '@/components/button';

export function FaqBelowSection() {
  return (
    <section className="pb-16 md:pb-5 px-4 bg-white flex justify-center font-sans overflow-hidden">
      <div className="w-full">
        <div 
          className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-cover bg-center bg-no-repeat p-8 sm:p-12 md:p-14 lg:p-16 min-h-[340px] md:min-h-[400px] flex flex-col justify-center text-left"
          style={{ backgroundImage: "url('/footer.jpg')" }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          <div className="relative z-10 max-w-xl sm:max-w-2xl flex flex-col items-start">
            {/* Trusted Badge & Avatar Group */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-white text-xs sm:text-sm font-normal tracking-wide">
                Trusted over 5,000+
              </span>
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
                  alt="User avatar 1"
                  className="w-6.5 h-6.5 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="User avatar 2"
                  className="w-6.5 h-6.5 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
                  alt="User avatar 3"
                  className="w-6.5 h-6.5 rounded-full border border-white object-cover"
                />
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl md:text-[40px] font-medium tracking-tight text-white leading-[1.15] mb-4 sm:mb-5 max-w-lg sm:max-w-xl">
              We combine human insight with artificial intelligence
            </h2>

            {/* Paragraph Description */}
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-lg sm:max-w-xl mb-6 sm:mb-8 font-normal">
              Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.
            </p>

            {/* CTA Button */}
            <div>
              <Button href="/contact">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
