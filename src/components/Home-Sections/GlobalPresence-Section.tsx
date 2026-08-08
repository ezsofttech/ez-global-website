"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Landmark icons ────────────────────────────────────────────────────────────
const TajMahalIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#0A51DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="8" y="50" width="44" height="4" rx="1" />
    <rect x="10" y="38" width="8" height="12" rx="1" />
    <rect x="42" y="38" width="8" height="12" rx="1" />
    <path d="M 10,38 C 10,34 18,34 18,38" />
    <path d="M 42,38 C 42,34 50,34 50,38" />
    <path d="M 20,50 L 20,35 C 20,28 40,28 40,35 L 40,50" />
    <path d="M 22,35 C 22,22 38,22 38,35" />
    <line x1="30" y1="22" x2="30" y2="15" />
    <circle cx="30" cy="14" r="1.5" fill="#4d7c0f" />
    <line x1="14" y1="34" x2="14" y2="29" />
    <line x1="46" y1="34" x2="46" y2="29" />
  </svg>
);

const BigBenIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#0A51DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="15" y="50" width="30" height="5" rx="1" />
    <rect x="16" y="45" width="28" height="5" rx="1" />
    <rect x="20" y="25" width="20" height="20" rx="1" />
    <circle cx="30" cy="32" r="6" />
    <line x1="30" y1="32" x2="30" y2="28" />
    <line x1="30" y1="32" x2="33" y2="34" />
    <path d="M 20,25 L 30,10 L 40,25" />
    <line x1="30" y1="10" x2="30" y2="5" />
    <circle cx="30" cy="4" r="1.5" fill="#4d7c0f" />
    <rect x="25" y="38" width="4" height="7" rx="1" />
    <rect x="31" y="38" width="4" height="7" rx="1" />
  </svg>
);

const BurjKhalifaIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#0A51DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="18" y="52" width="24" height="3" rx="1" />
    <path d="M 18,55 L 20,30 L 27,14 L 33,14 L 40,30 L 42,55 Z" />
    <line x1="20" y1="44" x2="40" y2="44" />
    <line x1="22" y1="34" x2="38" y2="34" />
    <line x1="25" y1="24" x2="35" y2="24" />
    <line x1="30" y1="14" x2="30" y2="5" />
    <circle cx="30" cy="4" r="1.5" fill="#4d7c0f" />
  </svg>
);

const StatueIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" stroke="#0A51DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9">
    <rect x="20" y="48" width="20" height="7" rx="1" />
    <rect x="22" y="42" width="16" height="6" rx="1" />
    <path d="M 24,42 L 22,28 C 22,24 38,24 38,28 L 36,42 Z" />
    <circle cx="30" cy="22" r="4" />
    <path d="M 26,20 L 24,15 M 30,18 L 30,13 M 34,20 L 36,15" strokeWidth="1.2" />
    <path d="M 36,30 L 42,22" />
    <circle cx="43" cy="20" r="2" fill="#4d7c0f" opacity="0.6" />
    <path d="M 24,30 L 18,34" />
    <rect x="14" y="32" width="5" height="7" rx="1" />
  </svg>
);

// ─── Dot world map ─────────────────────────────────────────────────────────────


// ─── Market cards data ─────────────────────────────────────────────────────────
const markets = [
  { country: "India",                role: "Headquarters and engineering base", Icon: TajMahalIcon  },
  { country: "United Kingdom",       role: "Client delivery",                   Icon: BigBenIcon    },
  { country: "United Arab Emirates", role: "Client delivery",                   Icon: BurjKhalifaIcon },
  { country: "United States",        role: "Client delivery",                   Icon: StatueIcon    },
];

// ─── Section ───────────────────────────────────────────────────────────────────
export function GlobalPresenceSection() {
  return (
    <section id="global-presence" className="py-20 md:py-28 px-6 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">

        {/* Top: text + map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-6 text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              <svg viewBox="0 0 24 24" fill="#0A51DF" className="w-3.5 h-3.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Where We Work
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] font-plus-jakarta mb-4">
              Proudly Headquartered in Raipur, India.<br />
              Delivering across four geographies:{" "}
              <span className="text-[#0A51DF]">
                India, The USA, UK and UAE.
              </span>
            </h2>
            <div className="w-10 h-1 bg-[#0A51DF] rounded-full mb-6" />

            {/* Body */}
            <p className="text-neutral-600 text-[15px] leading-relaxed max-w-md">
              Our engineering base is in Raipur, Chhattisgarh, with client engagements running across India, the United Kingdom, the United Arab Emirates and the United States. For international clients we arrange overlapping working hours and maintain scheduled written reporting, so distance never becomes an obstacle to progress.
            </p>
          </div>

          {/* Right: map image */}
          <div className="flex items-center justify-center">
            <Image
              src="/headquaters.png"
              alt="World map showing EZGlobal offices in India, UK, UAE and USA"
              width={600}
              height={380}
              className="w-full max-w-[560px] object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom: 4 market cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {markets.map((m, i) => (
            <motion.div
              key={m.country}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-neutral-100 p-6 flex flex-col items-center text-center gap-3 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#0a51df13] flex items-center justify-center">
                <m.Icon />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-sm sm:text-base">{m.country}</h3>
                <div className="w-6 h-0.5 bg-[#0A51DF] rounded-full mx-auto my-1.5" />
                <p className="text-neutral-500 text-xs sm:text-sm">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
