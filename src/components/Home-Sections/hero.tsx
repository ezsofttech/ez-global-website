"use client";

import Button from "../../components/button";
import CurvedCarousel from "@/components/curved-carousel";
import { FlipWords } from "../../components/ui/flip-words";
import Link from "next/link";
import { motion } from "framer-motion";
import Button2 from "../button2";

/**
 * Hero subheadline options.
 *
 * Six candidate lines, kept together so the choice is a one-word change to
 * SUBHEADLINE below rather than an edit buried in the markup.
 *
 * `punchy` is live. It carries the "outcomes, not output" message the rest of
 * the site already makes ("measurable business outcomes — not just
 * deliverables", "AI that does actual work") without reaching for jargon like
 * "moves the needle", which sits awkwardly against the restrained tone of the
 * service pages.
 *
 * `tagline` and `process` are very short — they read better as a strapline or
 * a step strip than as the paragraph under the H1, which has room for a full
 * sentence.
 */
const SUBHEADLINES = {
    bold: "From first idea to full-scale deployment, we build software that moves the needle — not just ships features.",
    punchy: "We don't just build software. We build outcomes — from strategy to launch and everything after.",
    highEnergy: "Strategy to launch, and beyond. We build software that actually moves your business forward.",
    direct: "Your goals, our code. From day-one strategy to deployment and support, we build software that delivers real results — not just deliverables.",
    tagline: "Built for outcomes. Not just output.",
    process: "Strategy → Build → Deploy → Support — EZGlobal turns ideas into measurable business impact.",
} as const;

const SUBHEADLINE = SUBHEADLINES.punchy;

export default function Hero() {
    const words = ["Web Platform Engineering", "Applied AI & Automation", "Cloud Infrastructure", "Mobile Product Engineering"]
    return (
        <main className="p-3 bg-white">
            <div
                className="relative min-h-[900px] lg:min-h-[1050px] w-full rounded-3xl overflow-hidden flex flex-col items-center pt-45 pb-12 bg-[#faf9f7] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero_luxury_bg.webp')" }}
            >
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none z-30 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                    

                {/* Tech Symbol 1 (Top Left, Amber, Code Tags) */}
                <motion.div
                    animate={{ scale: [0.8, 1.15, 0.8], rotate: [0, 10, -10, 0], opacity: [0.8, 0.8, 0.8] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[10%] sm:left-[18%] top-[10%] lg:left-[20%] text-amber-500 select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 8l-5 4 5 4" />
                        <path d="M14 6l-4 12" />
                        <path d="M17 8l5 4-5 4" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 2 (Top Right, Coral, Curly Braces) */}
                <motion.div
                    animate={{ scale: [0.9, 1.2, 0.9], rotate: [0, -8, 8, 0], opacity: [0.9, 0.9, 0.9] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute right-[4%] sm:right-[19%] top-[10%] text-[#f83218]  select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 4c-2 0-3 1.5-3 3.5 0 2-1 3-2 3.5 1 .5 2 1.5 2 3.5 0 2 1 3.5 3 3.5" />
                        <path d="M15 4c2 0 3 1.5 3 3.5 0 2 1 3 2 3.5-1 .5-2 1.5-2 3.5 0 2-1 3.5-3 3.5" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 3 (Near Heading, Sky Blue, Terminal Prompt) */}
                <motion.div
                    animate={{ scale: [0.85, 1.15, 0.85], rotate: [0, 5, -5, 0], opacity: [0.8, 0.8, 0.8] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute left-[calc(50%+25rem)] top-[42%] hidden lg:block text-[#0b64f1] select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7l6 5-6 5" />
                        <path d="M12 17h8" />
                    </svg>
                </motion.div>

                {/* Tech Symbol 4 (Bottom Right, near "Get Started", Amber, Connection Nodes) */}
                <motion.div
                    animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.9, 0.85, 0.9] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="absolute right-[calc(50%+25rem)] bottom-[12%] hidden lg:block text-amber-500 select-none pointer-events-none"
                >
                    <svg className="w-6 h-6 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <circle cx="6" cy="18" r="2" fill="currentColor" />
                        <circle cx="18" cy="6" r="2" fill="currentColor" />
                        <circle cx="18" cy="18" r="2" fill="currentColor" />
                        <path d="M8 18h8" />
                        <path d="M18 8v8" />
                        <path d="M7.5 16.5l9-9" />
                    </svg>
                </motion.div>

                {/*
                    Hand-drawn annotation, left — points at "Smarter strategy."
                    Was "Built for growth", which annotated nothing in the
                    headline and could have belonged to any agency.
                    Shares top-[30%] with its counterpart on the right so the
                    pair reads as one matched set flanking the headline.
                */}
                <div className="absolute right-[calc(50%+25.5rem)] top-[30%] opacity-70 hidden xl:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-lg sm:text-2xl text-neutral-800 tracking-wide transform -rotate-8 mb-2  ">
                        Strategy first
                    </span>
                    <svg className="w-10 h-10 sm:w-[70px] sm:h-[70px] hidden md:block" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {/* Self-drawing hand-drawn swirl */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            d="M10,15 C25,5 45,15 35,35 C25,55 5,45 25,25 C35,15 50,25 45,45"
                        />
                    </svg>
                </div>

                {/*
                    Hand-drawn annotation, right — points at "Engineered with AI."

                    Was "AI-native approach", which contradicted the rest of the
                    site: the Applied AI page opens by drawing a line between
                    what AI is marketed as doing and what it reliably delivers,
                    and Our Standards leads with "Judgement over fashion". This
                    borrows the Applied AI page's own headline instead, so the
                    hero and the service page make the same claim.
                */}
                <div className="absolute left-[calc(50%+25.5rem)] top-[30%] opacity-70 hidden xl:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-sm sm:text-xl text-neutral-800 tracking-wide transform rotate-6 mb-1 ">
                        AI that does actual work
                    </span>
                    <svg className="w-12 h-10 sm:w-[100px] sm:h-[75px] transform rotate-90" fill="none" stroke="currentColor" strokeWidth="2">
                        {/* Self-drawing custom loop arrow */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                            d="M10,8 C28,8 32,2 34,10 C36,18 20,22 28,35 C32,44 48,50 60,46"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1.9 }}
                            d="M50,40 L60,46 L53,55"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Hand-drawn "how we work" indicator (Middle Left) */}
                <div className="absolute right-[calc(50%+25.5rem)] bottom-[30%] opacity-75 hidden xl:flex flex-col items-center select-none pointer-events-none text-neutral-800">
                    <span className="font-handwriting text-xl sm:text-3xl text-neutral-700 tracking-wider transform -rotate-6 mb-1 hidden sm:block">
                        how we work
                    </span>
                    <svg className="w-8 h-7 sm:w-[60px] sm:h-[50px] transform rotate-45" viewBox="0 0 60 50" fill="none" stroke="currentColor" strokeWidth="2">
                        {/* Self-drawing curved indicator arrow */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
                            d="M10,10 C25,25 35,15 45,35"
                            strokeLinecap="round"
                        />
                        <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 2.2 }}
                            d="M35,33 L45,35 L43,25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                    {/* Rotating capability label */}
                    <div className="mb-6 px-4 py-1.5 rounded-full  backdrop-blur-sm border border-neutral-200 text-md sm:text-md font-medium text-neutral-500 tracking-widest uppercase">
                        <FlipWords words={words} />
                    </div>

                    {/* Main Headings */}
                    {/* Single H1 for the page — the two visual lines are spans. */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-900 font-bold tracking-tight leading-[1.08] font-plus-jakarta max-w-3xl">
                        <span className="block">Smarter strategy.</span>
                        <span className="block mt-1">
                        <span className="relative inline-block">
                            Engineered with AI.
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#3C83F6]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                                <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }} d="M4,7 C60,12 130,4 196,7 C130,9 60,7 4,10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </span>
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-10 text-neutral-600 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-2xl leading-relaxed">
                        {SUBHEADLINE}
                    </p>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center mt-10 gap-4">
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <Link href="/contact">
                            <Button>Start Your Project</Button>
                        </Link>
                        <Link href="/services">
                            <button className="bg-black text-white py-2 px-4 rounded-xl">View Our Services</button>
                        </Link>
                    </div>

                    {/* Trust line */}
                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 tracking-wide">
                        Trusted by businesses across India, the United Kingdom, the UAE and the United States.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative z-10 w-full mt-12 sm:mt-16">
                    <CurvedCarousel />
                </div>

                {/* Bottom Action Button + Doodle */}

            </div>
        </main>
    );
}