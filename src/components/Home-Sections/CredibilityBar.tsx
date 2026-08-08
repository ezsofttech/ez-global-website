"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "200+", label: "Projects delivered" },
  { value: "5",    label: "Markets served" },
  { value: "8+",   label: "Years in operation" },
  { value: "100%", label: "Client retention" },
];

export function CredibilityBar() {
  return (
    <section className="bg-white border-y border-neutral-100 py-8 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-1"
          >
            <span className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-plus-jakarta">
              {metric.value}
            </span>
            <span className="text-xs sm:text-sm text-neutral-500 font-medium tracking-wide uppercase">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
