"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Cloud, 
  Rocket, 
  HeartHandshake, 
  TrendingUp, 
  BarChart3 
} from 'lucide-react';
import { 
  SiFigma, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiFlutter, 
  SiMongodb 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const processSteps = [
  {
    number: "01",
    stepBadge: "STEP 01",
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    navTitle: "Discovery",
    navSub: "Understand & Analyze",
    description: "We start with your commercial objective, not your feature list. Over an initial consultation and a short discovery phase, we establish what success looks like, what constraints exist and what the realistic scope is.",
    checkmarks: [
      "Stakeholder Meeting",
      "Requirement Analysis",
      "Competitor Research",
      "Project Roadmap"
    ],
    estimatedTime: "1 - 2 Days",
    image: "/web-dev.webp",
    floatingBadges: [
      { icon: SiFigma, color: "#F24E1E", name: "Discovery" },
      { icon: Code, color: "#2563EB", name: "Analysis" },
      { icon: BarChart3, color: "#3B82F6", name: "Metrics" },
    ]
  },
  {
    number: "02",
    stepBadge: "STEP 02",
    title: "Proposal & Scope",
    subtitle: "Project Strategy & Architecture",
    navTitle: "Proposal & Scope",
    navSub: "Project Strategy",
    description: "You receive a written proposal with defined scope, fixed pricing and a delivery timeline. Assumptions are stated explicitly, so there are no surprises once work begins.",
    checkmarks: [
      "Technical Approach",
      "System Architecture",
      "Data Model",
      "Sprint Breakdown"
    ],
    estimatedTime: "2 - 4 Days",
    image: "/billing-and-software.webp",
    floatingBadges: [
      { icon: SiReact, color: "#61DAFB", name: "Architecture" },
      { icon: SiNextdotjs, color: "#000000", name: "Scope" },
      { icon: SiNodedotjs, color: "#339933", name: "Estimate" },
    ]
  },
  {
    number: "03",
    stepBadge: "STEP 03",
    title: "Design & Architecture",
    subtitle: "UI/UX & Interactive Prototyping",
    navTitle: "Design & Architecture",
    navSub: "UI/UX & Prototyping",
    description: "Interface design and technical architecture proceed in parallel. You review and approve both before development starts.",
    checkmarks: [
      "Wireframing & Layouts",
      "Interactive Prototypes",
      "Design System Creation",
      "Usability Testing"
    ],
    estimatedTime: "3 - 5 Days",
    image: "/saas aplication1.webp",
    floatingBadges: [
      { icon: SiFigma, color: "#F24E1E", name: "UI/UX" },
      { icon: Sparkles, color: "#8B5CF6", name: "Design" },
      { icon: SiTailwindcss, color: "#06B6D4", name: "Design System" },
    ]
  },
  {
    number: "04",
    stepBadge: "STEP 04",
    title: "Engineering in Sprints",
    subtitle: "Building High-Performance Code",
    navTitle: "Engineering in Sprints",
    navSub: "Building the Solution",
    description: "Work runs in sprints with a reviewable build at the end of each one. You see progress continuously rather than waiting for a single reveal at the end.",
    checkmarks: [
      "Frontend Development",
      "Backend & API Integration",
      "State Management",
      "Performance Tuning"
    ],
    estimatedTime: "1 - 3 Weeks",
    image: "/desktop.webp",
    floatingBadges: [
      { icon: Code, color: "#2563EB", name: "Engineering" },
      { icon: SiFlutter, color: "#02569B", name: "Mobile" },
      { icon: SiMongodb, color: "#47A248", name: "Data" },
    ]
  },
  {
    number: "05",
    stepBadge: "STEP 05",
    title: "Testing & Deployment",
    subtitle: "Quality Assurance & Security",
    navTitle: "Testing & Deployment",
    navSub: "Quality Assurance",
    description: "Functional, performance and security testing precede release. We manage deployment, environment setup and any store submissions required.",
    checkmarks: [
      "Unit & Integration Tests",
      "Cross-Browser Audits",
      "Security Vulnerability Scan",
      "Load & Speed Benchmarking"
    ],
    estimatedTime: "2 - 4 Days",
    image: "/appdevlopment.webp",
    floatingBadges: [
      { icon: CheckCircle2, color: "#10B981", name: "QA Verified" },
      { icon: Shield, color: "#3B82F6", name: "Security" },
      { icon: Zap, color: "#F59E0B", name: "Speed Audit" },
    ]
  },
  {
    number: "06",
    stepBadge: "STEP 06",
    title: "Support & Iteration",
    subtitle: "Cloud Infrastructure & Launch",
    navTitle: "Support & Iteration",
    navSub: "Launch to the Cloud",
    description: "Every project includes a post-launch support period, with optional ongoing maintenance covering monitoring, updates and continued development.",
    checkmarks: [
      "Production Cloud Build",
      "Automated Deployment",
      "Domain & SSL Security",
      "SEO Indexing Submission"
    ],
    estimatedTime: "1 - 2 Days",
    image: "/Devops.webp",
    floatingBadges: [
      { icon: FaAws, color: "#FF9900", name: "Cloud" },
      { icon: Cloud, color: "#0EA5E9", name: "DevOps" },
      { icon: Rocket, color: "#2563EB", name: "Live Launch" },
    ]
  },
  
];

// Horizontal S-curve wave offset values for desktop
const nodeXOffsetsDesktop = [0, 45, 75, 45, 10, 45];

export function ServicesSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [fullPath, setFullPath] = useState<string>('');
  const [activePath, setActivePath] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef<boolean>(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -25% 0px",
      threshold: 0.15
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexStr = entry.target.getAttribute('data-index');
          if (indexStr !== null) {
            const index = parseInt(indexStr, 10);
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Compute Bezier S-Curve SVG paths connecting circle node centers
  useEffect(() => {
    const updateSVGPaths = () => {
      const containerEl = timelineContainerRef.current;
      if (!containerEl) return;

      const mobileCheck = window.innerWidth < 1024;
      setIsMobile(mobileCheck);

      const containerTop = containerEl.getBoundingClientRect().top;
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i < processSteps.length; i++) {
        const nodeEl = buttonRefs.current[i] || stepRefs.current[i];
        if (nodeEl) {
          const rect = nodeEl.getBoundingClientRect();
          const xOffset = mobileCheck ? 0 : (nodeXOffsetsDesktop[i] || 0);
          const x = xOffset + 20; // 20px is center of 40px circle
          const y = rect.top - containerTop + 20; // 20px is center vertically of circle button
          points.push({ x, y });
        }
      }

      if (points.length < 2) return;

      // Build full curved SVG path string
      let fullD = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const dy = p2.y - p1.y;
        fullD += ` C ${p1.x} ${p1.y + dy * 0.5}, ${p2.x} ${p2.y - dy * 0.5}, ${p2.x} ${p2.y}`;
      }
      setFullPath(fullD);

      // Build active curved SVG path string up to activeStep
      if (activeStep === 0) {
        setActivePath(`M ${points[0].x} ${points[0].y} L ${points[0].x} ${points[0].y}`);
      } else {
        const activeCount = Math.min(activeStep, points.length - 1);
        let activeD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < activeCount; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dy = p2.y - p1.y;
          activeD += ` C ${p1.x} ${p1.y + dy * 0.5}, ${p2.x} ${p2.y - dy * 0.5}, ${p2.x} ${p2.y}`;
        }
        setActivePath(activeD);
      }
    };

    updateSVGPaths();
    window.addEventListener('resize', updateSVGPaths);
    window.addEventListener('scroll', updateSVGPaths, { passive: true });
    return () => {
      window.removeEventListener('resize', updateSVGPaths);
      window.removeEventListener('scroll', updateSVGPaths);
    };
  }, [activeStep]);

  const selectStep = (index: number) => {
    isScrollingRef.current = true;
    setActiveStep(index);

    const stepEl = stepRefs.current[index];
    if (stepEl) {
      const elementPosition = stepEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (window.innerHeight / 2) + (stepEl.clientHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  const current = processSteps[activeStep];

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white font-sans relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="flex items-center gap-2 mb-2 md:mb-10 text-xs md:text-sm font-semibold tracking-[0.2em] text-black uppercase">
        <span className="w-1.5 h-1.5 bg-black rounded-full" />
        How We Work
      </div>

        <h2 className="text-3xl sm:text-5xl md:text-[50px] font-bold tracking-tight text-neutral-950 leading-[1.2] md:leading-[1.15] max-w-4xl mx-auto mb-4">
          A process built on visibility.
        </h2>
        <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Most software projects fail on communication rather than code. Our process is structured so that you always know what is being built, what it will cost and when it will be ready.
        </p>
      </div>

      {/* Main 3-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative pb-16">
        
        {/* Left Column: Sticky Dynamic Process Card (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28 sm:top-36 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -15, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 border-l-4 border-l-blue-600 shadow-xl shadow-blue-500/5 relative overflow-hidden"
            >
              {/* Step Badge */}
              <span className="px-3.5 py-1 bg-blue-600 text-white font-mono font-bold text-[11px] rounded-full inline-block mb-3 shadow-xs">
                {current.stepBadge}
              </span>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
                {current.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                {current.description}
              </p>

              {/* Bullet Checklist */}
              <div className="space-y-2.5 mb-6">
                {current.checkmarks.map((check, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-700">
                    <div className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                      ✓
                    </div>
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              {/* Estimated Time Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs mb-5">
                <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
                  <Clock size={14} className="text-blue-600" />
                  <span>Estimated Time:</span>
                </div>
                <span className="font-bold text-neutral-900 font-mono">{current.estimatedTime}</span>
              </div>

              {/* Action Link Button */}
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-bold text-xs rounded-full border border-blue-100 flex items-center justify-between transition-all duration-300 group"
              >
                <span>Let's Work Together</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Middle Column: Scrollable Timeline Curved Nodes */}
        <div ref={timelineContainerRef} className="lg:col-span-4 flex flex-col relative py-4 overflow-visible">
          {/* SVG Curved Wave Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <defs>
              <linearGradient id="blue-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            {/* Base Grey Curve */}
            <path
              d={fullPath}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Active Blue Gradient Wave Fill */}
            <path
              d={activePath}
              fill="none"
              stroke="url(#blue-line-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500 ease-out drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
            />
          </svg>

          <div className="w-full flex flex-col gap-16 sm:gap-24 relative z-10">
            {processSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;
              const xOffset = isMobile ? 0 : (nodeXOffsetsDesktop[idx] || 0);
              return (
                <div
                  key={step.number}
                  data-index={idx}
                  ref={(el) => { stepRefs.current[idx] = el; }}
                  className="flex flex-col gap-4 scroll-mt-36 transition-transform duration-300"
                  style={{ transform: `translateX(${xOffset}px)` }}
                >
                  <button
                    ref={(el) => { buttonRefs.current[idx] = el; }}
                    onClick={() => selectStep(idx)}
                    className="group flex items-center gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    {/* Node Circle Number */}
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold font-mono transition-all duration-300 flex-shrink-0 relative z-10 ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-100 scale-110' 
                        : isPassed
                          ? 'bg-white border-2 border-blue-600 text-blue-600 shadow-sm'
                          : 'bg-white border-2 border-neutral-300 text-neutral-400 group-hover:border-blue-400 group-hover:text-blue-600'
                    }`}>
                      {step.number}
                    </div>

                    {/* Labels */}
                    <div className="flex flex-col">
                      <span className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                        isActive ? 'text-blue-600 font-bold' : isPassed ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-blue-600'
                      }`}>
                        {step.navTitle}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {step.navSub}
                      </span>
                    </div>
                  </button>

                  {/* Mobile-only inline details card (Shown when sticky desktop card is hidden) */}
                  <div className="lg:hidden pl-14 pt-1">
                    <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 shadow-xs">
                      <span className="px-2.5 py-0.5 bg-blue-600 text-white font-mono font-bold text-[10px] rounded-full inline-block mb-2">
                        {step.stepBadge}
                      </span>
                      <h4 className="text-lg font-bold text-neutral-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {step.checkmarks.map((check, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span>{check}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-neutral-200/60 text-xs">
                        <span className="text-neutral-500">Estimated: <strong className="text-neutral-800">{step.estimatedTime}</strong></span>
                        <Link href="/contact" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                          Work Together <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Sticky Graphic Laptop Mockup Showcase (Desktop Only) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28 sm:top-36 z-20">
          <div className="relative w-full max-w-xl mx-auto  p-6  overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0  pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex flex-col items-center justify-center"
              >
                {/* Main Laptop Showcase Frame */}
                <div className="relative w-full h-[300px] sm:h-[330px] rounded-2xl overflow-hidden  bg-white group">
                  <img 
                    src={current.image} 
                    alt={current.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0   pointer-events-none" />
                  
                  
                </div>

                {/* Floating Tech Badges */}
                <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
                  {current.floatingBadges.map((badge, bIdx) => {
                    const BadgeIcon = badge.icon;
                    return (
                      <div
                        key={bIdx}
                        className="px-3 py-1.5 bg-white border border-neutral-200/80 rounded-xl shadow-xs flex items-center gap-2 text-xs font-semibold text-neutral-800"
                      >
                        <BadgeIcon size={18} style={{ color: badge.color }} />
                        <span>{badge.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}