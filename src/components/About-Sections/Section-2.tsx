"use client"

import React from 'react'
import { Flag, Code, Users, Target, ShieldCheck, TrendingUp, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

export function Section2() {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "People first",
      desc: "We build lasting partnerships."
    },
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      title: "Solve with purpose",
      desc: "We build what's needed, not what's loud."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      title: "Quality always",
      desc: "Clean code. Clear communication."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      title: "Grow together",
      desc: "We win when our clients win."
    }
  ]

  const timeline = [
    {
      icon: <Flag className="w-4 h-4 text-blue-600" />,
      title: "The beginning",
      desc: "A conviction that businesses outside the metropolitan technology hubs deserve the same standard of engineering as those within them."
    },
    {
      icon: <Code className="w-4 h-4 text-blue-600" />,
      title: "First project",
      desc: "Our early work taught us the value of clarity, quality and trust."
    },
    {
      icon: <Users className="w-4 h-4 text-blue-600" />,
      title: "Where we are today",
      desc: "A growing team delivering impact for clients around the world."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Our Story */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 relative inline-block">
                Our <span className="text-blue-600">story</span>
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
              </h2>
            </div>

            {/* Intro text */}
            <p className="text-neutral-600 text-lg leading-relaxed">
              EZGlobal was founded in 2019 with a straightforward conviction: that businesses outside the metropolitan technology hubs deserve the same standard of engineering as those within them.
            </p>

            {/*
              An origin-story quote box sat here holding placeholder text.
              Removed rather than filled: the content document is explicit that
              invented history is the fastest way to lose a serious client's
              trust. To reinstate it, wrap 2–3 factual sentences about who
              started the company, what they did before and what gap they saw
              in a blue quote card using the `Quote` icon.
            */}

            {/* Sub-text */}
            <p className="text-neutral-600 text-lg leading-relaxed">
              Today our teams deliver web, mobile, AI, cloud and commerce projects for clients across India, the United Kingdom, the United Arab Emirates and the United States — from our base in Raipur.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50/80 flex items-center justify-center shadow-xs">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm md:text-base">
                      {pillar.title}
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-500 mt-0.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual and Timeline Card */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex flex-col items-center">
            
            {/* Soft decorative background shape at top-right */}
            <div className="absolute top-[-20px] right-[-20px] w-64 h-64 bg-blue-100/30 rounded-tr-[80px] rounded-bl-[80px] -z-10" />

            {/* Office Wall Logo Image */}
            <div className="w-full max-w-[480px] h-[320px] md:h-[380px] rounded-[32px] overflow-hidden shadow-lg relative bg-neutral-100">
              <img 
                src="/headquaters.png" 
                alt="EZGlobal Headquaters Office" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load or doesn't exist
                  e.currentTarget.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                }}
              />
            </div>

            {/* Floating Timeline Card */}
            <div className="w-full max-w-[440px] bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-neutral-100/80 -mt-16 z-10 self-center lg:self-end lg:-mr-4">
              
              {/* Timeline Items */}
              <div className="relative pl-6 border-l border-neutral-200 space-y-8 ml-2">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Bullet marker */}
                    <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-950 text-sm md:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-neutral-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Based in Raipur Badge at the bottom */}
              <div className="mt-8 bg-blue-50/60 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-blue-950 text-sm">
                    Based in Raipur, India
                  </h5>
                  <p className="text-xs text-blue-700 mt-0.5">
                    Delivering worldwide.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}