"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function Section3() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col items-start text-left max-w-xl lg:pl-12">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold mb-6 text-neutral-900 leading-tight font-plus-jakarta">
          Ready to begin? Let&rsquo;s discuss the work.
        </h2>

        <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Speak with our team in Raipur for a complimentary consultation. We
          will review your requirements, outline a realistic scope and timeline,
          and provide a detailed proposal — with no obligation.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center gap-3 bg-[#0b64f1] hover:bg-[#0a51df] text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors shadow-sm"
          >
            Book a Free Consultation
            <Calendar className="w-5 h-5 opacity-90" />
          </Link>

          <a
            href={COMPANY.telephoneHref}
            className="inline-flex justify-center items-center gap-3 bg-white border border-[#0b64f1] text-neutral-900 hover:bg-neutral-50 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-colors"
          >
            Call {COMPANY.telephone}
            <Phone className="w-5 h-5 text-[#0b64f1]" />
          </a>
        </div>

        <p className="text-sm text-neutral-500 font-medium">
          Response within one business day · Confidentiality assured · No
          commitment required
        </p>
      </div>

      <div className="w-full flex justify-center lg:justify-end">
        <img
          className="rounded-[32px] shadow-lg w-full h-auto object-cover max-h-[450px]"
          src="/services-5.webp"
          alt="The EZGlobal engineering team in Raipur"
        />
      </div>
    </section>
  );
}
