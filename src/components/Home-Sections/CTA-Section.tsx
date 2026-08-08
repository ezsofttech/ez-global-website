"use client";

import { Calendar, Phone, ShieldCheck, MessageSquareMore } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-16">
          
          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#111827] tracking-tight leading-[1.1] font-plus-jakarta mb-6">
              What&rsquo;s your<br />
              <span className="text-[#0A51DF]">idea?</span>
            </h2>
            <div className="w-12 h-1 bg-[#0A51DF] rounded-full mb-8"></div>
            
            <p className="text-[#4b5563] text-lg leading-relaxed mb-10">
              Speak with our team for a complimentary consultation. We will review your requirements, outline a realistic scope and timeline, and provide a written proposal — with no obligation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#0A51DF]  text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors shadow-sm"
              >
                Book a Free Consultation
                <Calendar className="w-5 h-5 opacity-90" />
              </Link>
              
              <a 
                href="tel:+918962370822" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white border border-[#0A51DF] text-[#111827] hover:bg-neutral-50 px-8 py-4 rounded-xl font-semibold text-[15px] transition-colors"
              >
                Call +91 89623 70822
                <Phone className="w-5 h-5 text-[#0A51DF]" />
              </a>
            </div>
          </div>
          
          {/* Right Graphic */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-md lg:max-w-lg lg:h-[400px]">
            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-neutral-100 rounded-full absolute"></div>
              <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] border border-neutral-100 rounded-full absolute"></div>
              <div className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] bg-[#0a51df2a] rounded-full absolute shadow-inner"></div>
            </div>
            
            {/* Icon Box */}
            <div className="relative z-10 w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <MessageSquareMore className="w-12 h-12 text-[#111827]" strokeWidth={1.5} />
              {/* Custom dots inside message square */}
             
            </div>
            
            {/* Decorative Dots Right */}
            
            
             {/* Decorative small dot left */}
            
          </div>
          
        </div>
        
        {/* Bottom Reassurance Bar */}
        <div className="pt-10 border-t border-neutral-100">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 md:divide-x md:divide-neutral-200">
            
            <div className="flex items-center gap-3 px-8 text-neutral-600 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-[#0A51DF]" />
              Response within one business day
            </div>
            
            <div className="flex items-center gap-3 px-8 text-neutral-600 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-[#0A51DF]" />
              Confidentiality assured
            </div>
            
            <div className="flex items-center gap-3 px-8 text-neutral-600 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-[#0A51DF]" />
              No commitment required
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  )
}
