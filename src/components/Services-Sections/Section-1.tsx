"use client"

import Link from "next/link"
import Button from "../button"
import { motion } from "framer-motion"

export function Section1(){
    
    return(
        <main className="p-3">
            <div 
                className="relative w-full rounded-3xl overflow-hidden flex flex-col shadow-xl bg-[#faf9f7] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero_luxury_bg.webp')" }}
            >
                {/* Noise Overlay */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none z-30 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* Hero Viewport Section (Full screen height on initial view) */}
                <div className="relative w-full min-h-[calc(100vh-2.5rem)] flex flex-col items-center justify-center px-4 py-16 z-10 overflow-hidden sm:overflow-visible">

                    {/* Hand-drawn Service Doodle 1 (Top-Right: Web Apps) */}
                    <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[10%] top-[20%] sm:top-[6%] md:top-[12%] lg:top-[16%] opacity-80 flex flex-col items-center select-none pointer-events-none text-neutral-800 z-10 scale-75 xs:scale-85 sm:scale-90 md:scale-100 origin-top-right transition-all">
                        <span className="font-handwriting text-lg xs:text-sm sm:text-xl lg:text-2xl text-neutral-700 tracking-wide transform -rotate-6 mb-1 whitespace-nowrap">
                            Modern Web Applications
                        </span>
                        <motion.div
                            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg className="w-9 h-7 xs:w-11 xs:h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 lg:w-[80px] lg:h-[60px]" viewBox="0 0 80 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="5" y="8" width="70" height="44" rx="4" />
                                <line x1="5" y1="18" x2="75" y2="18" />
                                <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                                <circle cx="18" cy="13" r="1.5" fill="currentColor" />
                                <circle cx="24" cy="13" r="1.5" fill="currentColor" />
                                {/* Code tag mockups */}
                                <path d="M22 32l-5 5 5 5M42 32l5 5-5 5M29 44l6-14" />
                                {/* Click selector */}
                                <path d="M54 38l6 8-3 1-3-9z" fill="currentColor" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Hand-drawn Service Doodle 2 (Top-Left: Applied AI & Automation) */}
                    <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[10%] top-[25%] sm:top-[6%] md:top-[12%] lg:top-[17%] opacity-80 flex flex-col xs:flex-row items-center select-none pointer-events-none text-amber-500 z-10 scale-75 xs:scale-85 sm:scale-90 md:scale-100 origin-top-left transition-all">
                        <motion.div
                            animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 360] }}
                            transition={{ scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
                        >
                            <svg className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xs:mr-2" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <circle cx="25" cy="25" r="8" />
                                <path d="M25 5v6M25 39v6M5 25h6M39 25h6M11 11l4.2 4.2M34.8 34.8l4.2 4.2M11 39l4.2-4.2M34.8 15.2l4.2-4.2" />
                                {/* Sparkle inside */}
                                <path d="M25 21l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="currentColor" />
                            </svg>
                        </motion.div>
                        <span className="font-handwriting text-lg xs:text-sm sm:text-xl lg:text-2xl text-amber-600 tracking-wider transform -rotate-6 whitespace-nowrap">
                            Applied AI & Automation
                        </span>
                    </div>

                    {/* Hand-drawn Service Doodle 3 (Bottom-Left: Cloud Infrastructure) */}
                    <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] lg:left-[11%] bottom-[20%] sm:bottom-[12%] md:top-[60%] lg:top-[63%] opacity-80 flex flex-col items-center select-none pointer-events-none text-indigo-600 z-10 scale-75 xs:scale-85 sm:scale-90 md:scale-100 origin-bottom-left transition-all">
                        <span className="font-handwriting text-lg xs:text-sm sm:text-lg lg:text-xl text-indigo-700 tracking-wide transform -rotate-6 mb-1 whitespace-nowrap">
                            Cloud Infrastructure
                        </span>
                        <motion.div
                            animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        >
                            <svg className="w-8 h-6 xs:w-10 xs:h-7 sm:w-12 sm:h-8 md:w-[55px] md:h-[38px] lg:w-[65px] lg:h-[45px]" viewBox="0 0 65 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M15 35h35a12 12 0 0 0 0-24 16 16 0 0 0-30-4 10 10 0 0 0-5 28z" />
                                <path d="M32 28v-12M26 21l6-6 6 6" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Hand-drawn Service Doodle 4 (Bottom-Right: iOS & Android Products) */}
                    <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] lg:right-[13%] bottom-[30%] sm:bottom-[12%] md:top-[60%] lg:top-[63%] opacity-80 flex flex-col items-center select-none pointer-events-none text-neutral-800 z-10 scale-75 xs:scale-85 sm:scale-90 md:scale-100 origin-bottom-right transition-all">
                        <span className="font-handwriting text-lg xs:text-sm sm:text-lg lg:text-xl text-neutral-700 tracking-wide transform rotate-6 mb-1 whitespace-nowrap">
                            iOS & Android Products
                        </span>
                        <motion.div
                            animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
                            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <svg className="w-6 h-9 xs:w-7 xs:h-[40px] sm:w-9 sm:h-[52px] md:w-[42px] md:h-[65px] lg:w-[50px] lg:h-[75px]" viewBox="0 0 50 80" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="10" y="6" width="30" height="68" rx="6" />
                                <circle cx="25" cy="68" r="2.5" fill="currentColor" />
                                <line x1="20" y1="12" x2="30" y2="12" />
                                {/* App Icons mock */}
                                <rect x="15" y="20" width="6" height="6" rx="1" />
                                <rect x="29" y="20" width="6" height="6" rx="1" />
                                <rect x="15" y="32" width="6" height="6" rx="1" />
                                <rect x="29" y="32" width="6" height="6" rx="1" />
                                <path d="M15 48h20M15 54h12" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Main Hero Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/*
                            Names the page so it matches its navbar label —
                            previously nothing on the page said "Services".
                        */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0b64f1]" />
                            Services
                        </div>

                        {/*
                            Distinct from the home hero, which owns "Smarter
                            strategy. Engineered with AI." Repeating it here made
                            the two pages read as the same page. This one leads
                            on the breadth of the offer, which is what a visitor
                            has come to /services to find out.
                            Single H1 — the two visual lines are spans.
                        */}
                        <h1 className="text-neutral-900 font-bold font-plus-jakarta text-center items-center">
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight">
                                Twelve capabilities.
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight mt-1">
                            <span className="relative inline-block text-[#0b64f1]">
                                One accountable team.
                                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-orange-600" viewBox="0 0 150 12" fill="none" preserveAspectRatio="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                        d="M4,6 C50,11 100,5 146,7 C95,9 45,7 6,10"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            </span>
                        </h1>

                        <div className="mt-4 flex flex-col text-neutral-600 text-sm sm:text-base md:text-lg font-medium tracking-wide max-w-2xl space-y-1 text-center">
                            <p>Strategy, design, engineering, infrastructure and growth — delivered by</p>
                            <p>the people who scoped the work, not handed to someone else.</p>
                        </div>

                        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
                            <Button href="/contact">Start Your Project</Button>
                            <Link
                                href="/contact"
                                className="inline-flex justify-center items-center gap-2 bg-white/80 backdrop-blur border border-neutral-300 hover:border-[#0b64f1] text-neutral-900 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
                            >
                                Speak to an Engineer
                            </Link>

                            {/* Hand-drawn Service Doodle 5 (CTA Pointer placed inline/responsive) */}
                            <div className="flex items-center gap-2 select-none pointer-events-none text-neutral-700 sm:absolute sm:left-[calc(50%+85px)] md:left-[calc(50%+100px)] lg:left-[-300px] sm:top-1/2 sm:-translate-y-1/2">
                                <svg className="w-8 h-7 sm:w-11 sm:h-9 md:w-[55px] md:h-[45px] transform -rotate-45 sm:rotate-12" viewBox="0 0 60 45" fill="none" stroke="currentColor" strokeWidth="2">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                                        d="M10,10 C25,25 35,15 45,35"
                                        strokeLinecap="round"
                                    />
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
                                        d="M35,33 L45,35 L43,25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="font-handwriting text-base sm:text-xl md:text-2xl text-neutral-800 tracking-wide transform -rotate-3 sm:-rotate-6 whitespace-nowrap">
                                    Boost your business
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-[11px] font-bold text-neutral-500 tracking-widest uppercase">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.div>
                    </div>
                </div>

                {/* Premium Browser Mockup Wrapper for Video (Revealed on Scroll) */}
                <div className="relative z-10 w-full max-w-5xl mx-auto py-16 md:py-24 px-6 sm:px-12">
                    <div className="relative rounded-2xl border border-neutral-200/80 bg-neutral-900 shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-neutral-800 select-none">
                            {/* Window Controls */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            
                            {/* Browser Tab Mock */}
                            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400 font-sans">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#27272a] rounded-md text-neutral-200 border border-neutral-700/50">
                                    <span className="w-1.5 h-1.5 bg-[#0b64f1] rounded-full" />
                                    <span>ezglobal/services</span>
                                </div>
                            </div>

                            {/* Window Actions Mock */}
                            <div className="flex items-center gap-1 opacity-40">
                                <div className="w-4 h-1 bg-neutral-400 rounded-full" />
                            </div>
                        </div>

                        {/* Video Content Container */}
                        <div className="bg-neutral-950 p-1 sm:p-2">
                            <video 
                                className="w-full h-auto rounded-lg shadow-inner object-cover" 
                                src="/services.mp4" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}