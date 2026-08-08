"use client";

import LogoLoop, { LogoItem } from "../LogoLoop";
import {
  Smartphone,
  MonitorSmartphone,
  Building2,
  MonitorPlay,
  Sparkles,
  ChartNoAxesCombined,
  MonitorCloud,
  ShoppingCart,
  ShoppingBag,
  HousePlug,
  Cloud,
  Database,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";

const icons: Record<string, LucideIcon> = {
  "web-dev": MonitorSmartphone,
  "app-dev": Smartphone,
  "ai-automation": Sparkles,
  "business-auto": Building2,
  "desk-app": MonitorPlay,
  "cloud-platform": Cloud,
  saas: MonitorCloud,
  commerce: ShoppingCart,
  "quick-commerce": ShoppingBag,
  "digital-marketing": ChartNoAxesCombined,
  gcc: HousePlug,
  "data-analytics": Database,
};

const serviceItems: LogoItem[] = services.map((service) => {
  const Icon = icons[service.slug] ?? MonitorSmartphone;
  return {
    node: <Icon className={service.accent} />,
    title: service.name,
    href: `/services/${service.slug}`,
  };
});

export function Section4() {
  return (
    <section className="py-6 bg-white border-y border-neutral-100 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-6 mb-2 text-center select-none">
        <h3 className="text-lg font-semibold tracking-[0.25em] text-black uppercase">
          Our Specializations
        </h3>
      </div>
      <div className="mt-10">
        <div
          style={{
            height: "30px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LogoLoop
            logos={serviceItems}
            speed={60}
            direction="left"
            logoHeight={32}
            gap={50}
            hoverSpeed={20}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Our Core Services"
            renderItem={(item: LogoItem) => (
              <div className="flex items-center gap-4 select-none">
                <span className="text-4xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110">
                  {"node" in item ? item.node : null}
                </span>
                <span className="font-semibold text-neutral-700 text-xl tracking-wide font-sans whitespace-nowrap">
                  {item.title}
                </span>
                <span className="text-neutral-300 font-light text-base ml-2">
                  →
                </span>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
