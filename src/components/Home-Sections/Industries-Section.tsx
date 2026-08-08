"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  ShoppingCart, 
  Factory, 
  Truck, 
  Briefcase, 
  SquarePlus, 
  GraduationCap 
} from "lucide-react";

const industries = [
  {
    title: "Retail & Wholesale",
    description: "Inventory, invoicing and multi-branch operations",
    icon: ShoppingCart,
  },
  {
    title: "Manufacturing",
    description: "Production tracking, compliance and reporting systems",
    icon: Factory,
  },
  {
    title: "Logistics & Delivery",
    description: "Quick commerce, routing and fulfilment platforms",
    icon: Truck,
  },
  {
    title: "Professional Services",
    description: "Client portals, workflow and document systems",
    icon: Briefcase,
  },
  {
    title: "Healthcare",
    description: "Patient management, appointments, records and compliance",
    icon: SquarePlus,
  },
  {
    title: "Education",
    description: "Learning platforms, admissions, exams and student systems",
    icon: GraduationCap,
  }
];

export function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
       <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center">
            {/* Top Icon with Dashed Lines */}
            <div className="flex items-center justify-center w-full max-w-sm mb-6">
              <div className="flex-1 h-px border-t border-dashed border-neutral-300"></div>
              <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center bg-white mx-4 shadow-sm">
                <Building2 className="w-5 h-5 text-[#0A51DF]" />
              </div>
              <div className="flex-1 h-px border-t border-dashed border-neutral-300"></div>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight font-plus-jakarta mb-4">
              Domains we <span className="text-[#0A51DF]">work in</span>
            </h2>
            <div className="w-12 h-1 bg-[#0A51DF] rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#0A51DF1A] flex items-center justify-center mb-6">
                  <ind.icon className="w-6 h-6 text-[#0A51DF]" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{ind.title}</h3>
                
                {/* Divider */}
                <div className="w-6 h-0.5 bg-[#0A51DF] mb-4"></div>
                
                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed pr-6">
                  {ind.description}
                </p>

                {/* Decorative Dots */}
                
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  )
}
