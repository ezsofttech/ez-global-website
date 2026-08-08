"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Terminal,
  Clock,
  Star,
  ShieldCheck,
  Globe2,
  MapPin,
  Lock,
  HeartHandshake,
  FileCode,
  ShieldAlert,
  Award,
  FileCheck
} from 'lucide-react'

interface ReasonItem {
  number: string;
  title: string;
  category: string;
  description: string;
  emojiBadges: string[];
  color: 'emerald' | 'sky' | 'amber' | 'purple' | 'rose';
  visual: React.ReactNode;
}

export function Section3() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const isScrollingRef = useRef<boolean>(false)

  const reasons: ReasonItem[] = [
    {
      number: "01",
      title: "Quality First",
      category: "PRECISION / ENGINEERING / AUTOMATION",
      description: "We never compromise on quality. Every line of code is written with precision, strictly adhering to clean code standards and verified with comprehensive automated testing.",
      emojiBadges: ["🧪 AUTOMATED TESTS", "📈 98.4% COVERAGE"],
      color: "emerald",
      visual: (
        <div className="w-full h-full bg-white border border-neutral-200/85 rounded-2xl p-6 font-mono text-xs text-neutral-600 select-none flex flex-col justify-between shadow-md relative overflow-hidden group">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-4">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-neutral-500 font-semibold uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
              test_runner.js
            </span>
          </div>

          {/* Test Runner Body */}
          <div className="flex-1 space-y-2.5 mb-4">
            <p className="text-emerald-600 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>✓ All tests passed successfully</span>
            </p>
            <div className="space-y-1.5 pl-6 border-l border-neutral-200">
              <p className="text-neutral-500">→ Linting: 0 warnings, 0 errors</p>
              <p className="text-neutral-700">→ Unit Tests: 42 passed</p>
              <p className="text-neutral-700">→ Integration Tests: 18 passed</p>
              <p className="text-neutral-600 flex items-center gap-2">
                → Code Coverage:
                <span className="text-emerald-600 font-bold">98.4%</span>
              </p>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1.5 mt-2">
              <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-1000 w-[98.4%]" />
            </div>
          </div>

          {/* Code Snippet Box */}
          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 text-[11px] leading-relaxed">
            <p><span className="text-purple-600 font-medium">const</span> build = <span className="text-blue-600">await</span> compileProject();</p>
            <p className="text-emerald-600/90 pl-4">verifyStandards(build);</p>
            <p className="text-neutral-400 pl-4">// Pipeline status: success</p>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Fast Delivery",
      category: "AGILE / VELOCITY / ACCELERATION",
      description: "Time is money. We employ agile methodologies and optimized workflows to deliver projects on schedule, ensuring rapid time-to-market without sacrificing stability.",
      emojiBadges: ["⚡ AGILE SPRINTS", "📅 100% ON-TIME"],
      color: "sky",
      visual: (
        <div className="w-full h-full bg-white border border-neutral-200/85 rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-4">
            <span className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-500" />
              TIMELINE TRACKER
            </span>
            <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full">
              Sprint 12 Active
            </span>
          </div>

          {/* Gauge Widget */}
          <div className="flex items-center justify-center py-4 flex-1">
            <div className="relative w-36 h-36 flex items-center justify-center border-4 border-dashed border-sky-500/20 rounded-full">
              <div className="absolute inset-2 border-4 border-sky-500 border-r-transparent rounded-full animate-[spin_8s_linear_infinite]" />
              <div className="text-center z-10">
                <span className="text-3xl font-extrabold text-neutral-800 tracking-tight">100%</span>
                <p className="text-[9px] font-bold text-sky-500 uppercase tracking-widest mt-1">On-Time</p>
              </div>
            </div>
          </div>

          {/* Milestones Flow */}
          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-neutral-200 text-[10px] text-center text-neutral-600">
            <div className="space-y-1">
              <span className="block font-bold text-emerald-600">✓ Phase 1</span>
              <span className="text-neutral-500">Design</span>
            </div>
            <div className="space-y-1">
              <span className="block font-bold text-emerald-600">✓ Phase 2</span>
              <span className="text-neutral-500">Develop</span>
            </div>
            <div className="space-y-1">
              <span className="block font-bold text-sky-500 animate-pulse">● Phase 3</span>
              <span className="text-neutral-700">QA Test</span>
            </div>
            <div className="space-y-1">
              <span className="block text-neutral-400">○ Phase 4</span>
              <span className="text-neutral-400">Deploy</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: "03",
      title: "Client-Centric",
      category: "PARTNERSHIP / TRANSPARENCY / GROWTH",
      description: "Your success is our success. We operate as an extension of your team, maintaining transparent communication and aligning our development goals with your business growth.",
      emojiBadges: ["🤝 DAILY STANDUPS", "⭐ 5.0 RATING"],
      color: "amber",
      visual: (
        <div className="w-full h-full bg-white border border-neutral-200/85 rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-4">
            <span className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-amber-500" />
              CUSTOMER SATISFACTION
            </span>
            <div className="flex gap-0.5 text-amber-400 text-xs">
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
              <Star className="w-3 h-3 fill-amber-400" />
            </div>
          </div>

          {/* Testimonial Quote Bubble */}
          <div className="flex-1 flex flex-col justify-center my-2">
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 relative">
              <span className="absolute -top-3 left-4 text-3xl font-serif text-amber-500/30 leading-none">“</span>
              <p className="text-[11px] leading-relaxed text-neutral-600 italic pl-2">
                The communication and agility of EZGlobal are outstanding. They delivered the billing software 2 weeks early and supported us post-launch flawlessly.
              </p>
              <div className="mt-3 flex items-center gap-2 pl-2">
                <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-[10px] font-bold text-neutral-700 uppercase">
                  JD
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-800">Jonathan Davis</h4>
                  <p className="text-[8px] text-neutral-500">CTO, Vertex Logistics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Score Indicator */}
          <div className="flex justify-between items-center pt-3 border-t border-neutral-200 text-[10px] text-neutral-500">
            <span>Net Promoter Score</span>
            <span className="font-bold text-amber-600 text-sm">78 (Excellent)</span>
          </div>
        </div>
      )
    },
    {
      number: "04",
      title: "Global Standards",
      category: "SECURITY / PRIVACY / COMPLIANCE",
      description: "We build enterprise-ready solutions compliant with international security guidelines. Your user data is safe with us, secured by industry-standard encryption.",
      emojiBadges: ["🔒 OWASP SECURED", "🇪🇺 GDPR COMPLIANT"],
      color: "purple",
      visual: (
        <div className="w-full h-full bg-white border border-neutral-200/85 rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-4">
            <span className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-500" />
              SECURITY LAYER
            </span>
            <span className="text-[9px] font-bold text-purple-600 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Lock className="w-2.5 h-2.5" /> SECURED
            </span>
          </div>

          {/* Security Badges Grid */}
          <div className="grid grid-cols-2 gap-3 flex-1 justify-content-center py-2">
            <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-xl flex flex-col justify-between  hover:bg-purple-50/20 transition-all duration-300 group/card">
              
                
                
                <FileCode className="w-15 h-15 text-purple-600 group-hover/card:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-neutral-800 mt-2">Code Sec</span>
            </div>

            <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-xl flex flex-col justify-between  hover:bg-purple-50/20 transition-all duration-300 group/card">
             
                <ShieldAlert className="w-15 h-15 text-blue-600 group-hover/card:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-neutral-800 mt-2">Data Privacy</span>
            </div>

            <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-xl flex flex-col justify-between  hover:bg-purple-50/20 transition-all duration-300 group/card">
              
                <Award className="w-15 h-15 text-emerald-600 group-hover/card:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-neutral-800 mt-2">Information Sec</span>
              
                
              
            </div>

            <div className="bg-neutral-50 border border-neutral-200/60 p-3.5 rounded-xl flex flex-col justify-between hover:border-purple-500/40 hover:bg-purple-50/20 transition-all duration-300 group/card">
                <FileCheck className="w-15 h-15 text-indigo-600 group-hover/card:scale-110 transition-transform" />
                <span className="text-xs font-semibold text-neutral-800 mt-2">SOC 2 Compliant</span>
              
            </div>
          </div>
        </div>
      )
    },
    {
      number: "05",
      title: "Global Presence",
      category: "REACH / REDUNDANCY / OPERATIONS",
      description: "With footprints spanning multiple continents, we offer cross-border software development services tailored to the business environment of diverse regions.",
      emojiBadges: ["🌍 24/7 SUPPORT", "🏢 4 HUBS"],
      color: "rose",
      visual: (
        <div className="w-full h-full bg-white border border-neutral-200/85 rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden group">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-4">
            <span className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-rose-500" />
              GLOBAL OPERATIONS
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Global Locations List */}
          <div className="grid grid-cols-2 gap-2.5 flex-1 py-1">
            <div className="bg-neutral-50 border border-neutral-200/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-neutral-100 transition-colors duration-300">
              <img className='rounded-xl' src="/india.webp" alt="" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-neutral-800 leading-tight">India</span>
                <span className="text-[8px] text-neutral-500 block leading-tight">Dev HQ</span>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-neutral-100 transition-colors duration-300">
              <img className='rounded-xl' src="/usa.webp" alt="" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-neutral-800 leading-tight">USA</span>
                <span className="text-[8px] text-neutral-500 block leading-tight">Partnership</span>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-neutral-100 transition-colors duration-300">
              <img className='rounded-xl' src="/UK.webp" alt="" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-neutral-800 leading-tight">UK</span>
                <span className="text-[8px] text-neutral-500 block leading-tight">Client Hub</span>
              </div>
            </div>
            <div className="bg-neutral-50 border border-neutral-200/60 px-3.5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-neutral-100 transition-colors duration-300">
              <img className='rounded-xl' src="/UAE.webp" alt="" />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold text-neutral-800 leading-tight">UAE</span>
                <span className="text-[8px] text-neutral-500 block leading-tight">Regional Support</span>
              </div>
            </div>
          </div>

          {/* Connectivity Status */}
          <div className="flex justify-between items-center pt-3 border-t border-neutral-200 text-[10px] text-neutral-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              Chhattisgarh, Raipur (Core)
            </span>
            <span className="text-rose-500 font-semibold">24/7 Ops</span>
          </div>
        </div>
      )
    }
  ]

  // Setup intersection observer to track which card is active as you scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -45% 0px", // Trigger when the card crosses the upper middle portion of the screen
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Avoid observer changing state if we are intentionally scrolling via menu click
      if (isScrollingRef.current) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexStr = entry.target.getAttribute('data-index')
          if (indexStr !== null) {
            const index = parseInt(indexStr, 10)
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Smooth scroll to card when user clicks on a navigation tab
  const scrollToCard = (index: number) => {
    isScrollingRef.current = true
    setActiveIndex(index)

    const card = cardRefs.current[index]
    if (card) {
      // Find element top offset relative to the document
      const elementPosition = card.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - (window.innerHeight / 2) + (card.clientHeight / 2)

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    // Release locking after scrolling finishes
    setTimeout(() => {
      isScrollingRef.current = false
    }, 850)
  }

  // Helper colors mapping
  const badgeClasses = {
    emerald: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    sky: 'bg-sky-50 text-sky-600 border border-sky-200',
    amber: 'bg-amber-50 text-amber-600 border border-amber-200',
    purple: 'bg-purple-50 text-purple-600 border border-purple-200',
    rose: 'bg-rose-50 text-rose-600 border border-rose-200'
  }

  const activeTextClass = {
    emerald: 'text-emerald-600 font-bold',
    sky: 'text-sky-600 font-bold',
    amber: 'text-amber-600 font-bold',
    purple: 'text-purple-600 font-bold',
    rose: 'text-rose-600 font-bold'
  }

  const activeIndicatorBg = {
    emerald: 'bg-emerald-600',
    sky: 'bg-sky-600',
    amber: 'bg-amber-600',
    purple: 'bg-purple-600',
    rose: 'bg-rose-600'
  }

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-20 bg-white   relative mb-2 md:mb-4">
      <div className="max-w-7xl mx-auto">

        {/* Desktop Interactive Sticky Scroll Grid */}
        <div className="hidden md:flex gap-16 lg:gap-24 items-start relative min-h-screen pb-24">

          {/* Left Column: Sticky Details & Navigation Menu */}
          <div className="w-1/2 sticky top-28 flex flex-col gap-10 py-4 select-none">

            {/* Top Area: Giant Numbers Backdrop */}
            <div className="leading-none select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[120px] lg:text-[180px] font-black text-blue-600 tracking-tighter"
                >
                  {reasons[activeIndex].number}.
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Middle Area: Interactive Menu with Horizontal Line Indicator */}
            <div className="space-y-4">
              {reasons.map((reason, idx) => {
                const isActive = activeIndex === idx
                return (
                  <button
                    key={reason.number}
                    onClick={() => scrollToCard(idx)}
                    className="flex items-center gap-3 text-left w-full cursor-pointer focus:outline-none transition-all duration-300"
                  >
                    {/* Horizontal Bar Indicator */}
                    <div className="w-8 h-[2px] relative flex-shrink-0">
                      {isActive && (
                        <motion.div
                          layoutId="active-line-bar"
                          className="absolute inset-0 bg-[#FF5733]"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                    </div>

                    {/* Uppercase Menu Title */}
                    <span className={`text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'}`}>
                      {reason.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Bottom Area: Active Details Panel */}
            <div className="border-t border-neutral-200/60 pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4"
                >
                  {/* Category trail */}
                  <span className="text-neutral-500 text-xs font-semibold tracking-wider uppercase block">
                    {reasons[activeIndex].category}
                  </span>

                  {/* Description in large text */}
                  <p className="text-neutral-800 text-lg sm:text-xl font-medium leading-relaxed tracking-tight max-w-lg">
                    {reasons[activeIndex].description}
                  </p>

                  {/* Emojis Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {reasons[activeIndex].emojiBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[9px] font-bold text-neutral-600 bg-neutral-100 border border-neutral-200/85 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Visual Scrolling Previews */}
          <div className="w-1/2 space-y-32 py-16">
            {reasons.map((reason, idx) => (
              <div
                key={reason.number}
                ref={(el) => { cardRefs.current[idx] = el }}
                data-index={idx}
                className="w-full min-h-[360px] lg:min-h-[400px] flex items-center justify-center transition-all duration-700"
              >
                <motion.div
                  className="w-full aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-neutral-100 to-neutral-200/80 shadow-2xl border border-neutral-200/80 transition-all duration-500 hover:scale-[1.01] hover:border-neutral-300/80"
                  initial={{ opacity: 0.7, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.visual}
                </motion.div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Vertical Flow Stack (Fallback for screens < 768px) */}
        <div className="flex flex-col gap-12 md:hidden">

          {/* Main Title Mobile */}
          <div>
            <span className="text-[9px] font-bold text-neutral-600 uppercase tracking-widest border border-neutral-200 bg-neutral-100 px-2.5 py-0.5 rounded-full inline-block mb-2">
              ( WHY CHOOSE US )
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-black leading-tight">
              Why Choose <br />EZGlobal?
            </h2>
            <p className="text-neutral-600 mt-2.5 text-sm leading-relaxed">
              We combine engineering excellence, transparent partnership, and global compliance to deliver products that perform.
            </p>
          </div>

          {/* List of sections on mobile */}
          <div className="space-y-10">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="bg-neutral-50/60 border border-neutral-200 p-6 rounded-2xl shadow-xl flex flex-col gap-5"
              >
                {/* Text details */}
                <div className="space-y-3">
                  {/* Category and active number */}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-[10px] font-semibold tracking-wider uppercase block">
                      {reason.category}
                    </span>
                    <span className="text-neutral-800 text-lg font-black tracking-tighter">
                      {reason.number}.
                    </span>
                  </div>

                  {/* Main description block */}
                  <h3 className="text-lg font-bold text-neutral-800 uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Emojis Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {reason.emojiBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[8px] font-bold text-neutral-600 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-full uppercase tracking-wider"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-neutral-200">
                  {reason.visual}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}