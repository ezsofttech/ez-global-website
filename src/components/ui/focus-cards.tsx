"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link
      href={card.href || "#"}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative rounded-3xl overflow-hidden h-[340px] sm:h-[380px] w-full transition-all duration-500 ease-out cursor-pointer border border-neutral-200/80 dark:border-neutral-800 shadow-md hover:shadow-2xl hover:shadow-blue-500/15 flex flex-col justify-between p-6 text-left",
        hovered !== null && hovered !== index && "opacity-60 scale-[0.98] blur-[0.5px]"
      )}
    >
      {/* Background Image with Scale Animation */}
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark Dual Gradient Overlay for Maximum Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/20 group-hover:from-neutral-950/95 group-hover:via-neutral-950/60 transition-colors duration-500" />

      {/* Top Header Row: Category Pill & Arrow Button */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-xs">
          <Sparkles className="w-3 h-3 text-blue-400" />
          {card.badge || card.category || "Service"}
        </span>

        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 shadow-md">
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 flex flex-col gap-1.5 transform group-hover:-translate-y-1 transition-transform duration-300">
        {card.category && (
          <span className="text-[11px] font-bold tracking-widest uppercase text-blue-400">
            {card.category}
          </span>
        )}

        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-blue-200 transition-colors duration-300">
          {card.title}
        </h3>

        {card.description && (
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2 font-normal mt-0.5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            {card.description}
          </p>
        )}

        {card.stats && (
          <div className="pt-3 mt-2 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-white/90">
            <span>{card.stats}</span>
            <span className="text-blue-400 text-[11px] group-hover:underline">Explore →</span>
          </div>
        )}
      </div>
    </Link>
  )
);

Card.displayName = "Card";

type CardData = {
  title: string;
  src: string;
  category?: string;
  description?: string;
  href?: string;
  stats?: string;
  badge?: string;
};

export function FocusCards({ cards }: { cards: CardData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full mt-12 px-4 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

