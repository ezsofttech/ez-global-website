"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  Menu as IconMenu2,
  X as IconX,
  ChevronDown,
  ArrowRight,
  ChevronRight,
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  TrendingUp,
  Sparkles,
  Cloud,
  ShoppingCart,
  ShoppingBag,
  MonitorCloud,
  Building2,
  Database,
  Compass,
  Gauge,
  CheckCircle2,
  ShieldCheck,
  Server,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navGroups, servicesInGroup } from "@/data/services";
import {
  disciplineGroups,
  disciplinesInGroup,
} from "@/data/expertise";

/** Icons live here so the services data module stays free of React imports. */
const serviceIcons: Record<string, LucideIcon> = {
  "web-dev": Globe,
  "app-dev": Smartphone,
  "ai-automation": Sparkles,
  "business-auto": Building2,
  "desk-app": Monitor,
  "cloud-platform": Cloud,
  saas: MonitorCloud,
  commerce: ShoppingCart,
  "quick-commerce": ShoppingBag,
  "digital-marketing": TrendingUp,
  gcc: Cpu,
  "data-analytics": Database,
};

/** Icons for the engineering disciplines in the EXPERTISE menu. */
const disciplineIcons: Record<string, LucideIcon> = {
  architecture: Compass,
  data: Database,
  performance: Gauge,
  quality: CheckCircle2,
  security: ShieldCheck,
  infrastructure: Server,
};

// Primitive Interfaces
interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  /** Compact state — true while the page is in motion. */
  visible?: boolean;
  /** True once away from the very top, regardless of motion. */
  scrolled?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  scrolled?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

// Primitive Component Exports
export const Navbar = ({ children, className }: NavbarProps) => {
  const { scrollY } = useScroll();
  /**
   * `visible` drives the compact state further down the tree.
   *
   * It now tracks scroll *motion* rather than scroll *position*: the bar
   * condenses as soon as the page starts moving and expands again once it has
   * been still for a moment, at any depth in the page. Previously it shrank
   * past 20px and stayed shrunk until you returned to the very top.
   */
  const [visible, setVisible] = useState<boolean>(false);
  /**
   * Separate from `visible`: the background needs to be more opaque whenever
   * the bar sits over page content, which is a question of position, not of
   * whether the page happens to be moving right now.
   */
  const [scrolled, setScrolled] = useState<boolean>(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);

    // Setting the same value is a no-op in React, so this does not re-render
    // on every scroll event — only on the transition into motion.
    setVisible(true);

    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => setVisible(false), 200);
  });

  useEffect(
    () => () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
    },
    []
  );

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-6 z-50 w-full px-4 flex justify-center", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                visible?: boolean;
                scrolled?: boolean;
              }>,
              { visible, scrolled },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible, scrolled }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: "blur(8px) ",
        boxShadow: visible
          ? "0 20px 45px -10px rgba(0, 0, 0, 0.4), 0 10px 25px -5px rgba(37, 99, 235, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.2), inset 0 -2px 10px rgba(0, 0, 0, 0.2)"
          : "0 12px 30px -8px rgba(0, 0, 0, 0.3), 0 6px 18px -4px rgba(37, 99, 235, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.18), inset 0 -2px 8px rgba(0, 0, 0, 0.15)",
        maxWidth: visible ? "880px" : "1200px",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        paddingLeft: visible ? "20px" : "28px",
        paddingRight: visible ? "20px" : "28px",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
      }}
      style={{
        // Raised from 0.42: at that opacity the black nav text sat on whatever
        // hero imagery happened to be behind it, and contrast varied per page.
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(255, 255, 255, 0.78)",
      }}
      data-nav-root=""
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between rounded-full lg:flex text-black backdrop-blur-2xl border border-white/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-row items-center space-x-2 text-xs font-bold tracking-wider uppercase",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={`link-${idx}`}
            href={item.link}
            onClick={onItemClick}
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1",
              isActive
                ? "bg-blue-600 text-white font-extrabold shadow-sm"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export const MobileNav = ({ children, className, visible, scrolled }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: "blur(8px) saturate(190%)",
        boxShadow: "0 15px 35px -8px rgba(0, 0, 0, 0.35), 0 8px 20px rgba(37, 99, 235, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.18)",
        maxWidth: visible ? "92%" : "100%",
        paddingTop: visible ? "8px" : "12px",
        paddingBottom: visible ? "8px" : "12px",
        y: visible ? 4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
      }}
      style={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.94)"
          : "rgba(255, 255, 255, 0.82)",
      }}
      data-nav-root=""
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-full px-5 lg:hidden text-black backdrop-blur-2xl border border-white/60",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.92)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(37, 99, 235, 0.1)",
            backdropFilter: "blur(12px) saturate(180%)",
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-3xl px-6 py-6 text-black backdrop-blur-xl shadow-2xl max-h-[80vh] overflow-y-auto overscroll-contain",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="p-1.5 -mr-1.5 rounded-lg text-black transition-colors hover:bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
    >
      {isOpen ? (
        <IconX className="w-6 h-6" />
      ) : (
        <IconMenu2 className="w-6 h-6" />
      )}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <div className="">
      <Link href="/" className="flex items-center shrink-0 opacity-100 h-10 md:h-14 overflow-visible">
      <img
        src="/EZGLOBAL.webp"
        alt="EZ Soft Tech"
        className="h-full w-35 object-contain transition-all duration-200 opacity-100"
      />
    </Link>
    </div>
  );
};

export const NavbarButton = ({
  href = "/contact",
  children = "Contact Us",
  className,
  onClick,
}: {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link href={href} onClick={onClick}>
      <button
        className={cn(
          "bg-gradient-to-r from-[#1a6eff] to-[#2563eb] hover:from-[#0052e0] hover:to-[#1d4ed8] text-white font-extrabold text-xs tracking-wider uppercase px-5 py-2 rounded-full flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer group opacity-100 shrink-0 border border-blue-400/30",
          className,
        )}
      >
        <span className="opacity-100">{children}</span>
        <span className="w-5 h-5 rounded-full bg-white text-[#1a6eff] flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5 shadow-sm">
          <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
        </span>
      </button>
    </Link>
  );
};

type MenuItem = {
  name: string;
  desc: string;
  link: string;
  icon: LucideIcon;
};

type MenuGroup = { group: string; items: MenuItem[] };

/**
 * The grouped services mega-panel.
 *
 * Extracted so SERVICES and EXPERTISE render the identical menu from one
 * implementation — duplicating ~130 lines of markup would guarantee the two
 * drift apart the first time either is touched.
 */
const ServicesMegaPanel = ({
  groups,
  pathname,
  onNavigate,
  footerLabel = "Explore all services",
  footerHref = "/services",
}: {
  groups: MenuGroup[];
  pathname: string;
  onNavigate: () => void;
  footerLabel?: string;
  footerHref?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 6, scale: 0.96 }}
    transition={{ type: "spring", stiffness: 350, damping: 25 }}
    className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[min(90vw,940px)] z-50 flex flex-col"
  >
    {/*
      Opaque rather than translucent: at this width the panel sits over hero
      headlines, and any bleed-through makes the service names hard to read.
    */}
    <div
      style={{
        backgroundColor: "#ffffff",
        boxShadow:
          "0 20px 50px -10px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(37, 99, 235, 0.15)",
      }}
      className="rounded-3xl p-4 flex flex-col gap-1.5 shadow-2xl border border-slate-200/80"
    >
      {/* Three grouped columns: Build / Automate / Scale */}
      <div className="grid grid-cols-3 gap-x-3 gap-y-1">
        {groups.map(({ group, items }) => (
          <div key={group} className="flex flex-col">
            <span className="px-2.5 pb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
              {group}
            </span>

            <div className="flex flex-col gap-1">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.link;

                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={onNavigate}
                    className={cn(
                      "group flex items-center gap-2.5 p-2 rounded-2xl transition-all duration-200 normal-case tracking-normal border border-transparent",
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "hover:bg-blue-50/80 hover:border-blue-100/80 text-slate-900"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs",
                        isActive
                          ? "bg-white text-blue-600"
                          : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <span
                        className={cn(
                          "text-[11px] font-bold transition-colors leading-tight",
                          isActive
                            ? "text-white"
                            : "text-slate-900 group-hover:text-blue-600"
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-medium truncate mt-0.5",
                          isActive
                            ? "text-blue-100"
                            : "text-slate-500 group-hover:text-slate-600"
                        )}
                      >
                        {item.desc}
                      </span>
                    </div>

                    <ChevronRight
                      className={cn(
                        "w-3.5 h-3.5 transition-all duration-200 shrink-0",
                        isActive
                          ? "text-white opacity-100 translate-x-0"
                          : "text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-blue-600"
                      )}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Card Footer Link */}
      <div className="pt-2 mt-1 border-t border-slate-100">
        <Link
          href={footerHref}
          onClick={onNavigate}
          className="flex items-center justify-between px-3 py-1.5 rounded-xl hover:bg-blue-50 text-[11px] font-bold text-blue-600 transition-colors group normal-case"
        >
          <span>{footerLabel}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </motion.div>
);

/** Collapsible services list used inside the mobile menu. */
const MobileServicesList = ({
  items,
  pathname,
  onNavigate,
}: {
  items: MenuItem[];
  pathname: string;
  onNavigate: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
    className="overflow-hidden"
  >
    {/*
      Capped and scrollable: twelve services ran past the bottom of the mobile
      sheet with no way to reach the last few.
    */}
    <div className="ml-4 pl-3 border-l-2 border-slate-200 flex flex-col gap-1.5 my-1.5 max-h-[45vh] overflow-y-auto overscroll-contain pr-1">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.link}
            href={item.link}
            onClick={onNavigate}
            className={cn(
              "px-3 py-2 rounded-xl text-xs font-semibold normal-case tracking-normal transition-all flex items-center gap-2.5",
              pathname === item.link
                ? "bg-blue-500/20 text-blue-600 font-bold"
                : "text-slate-800 hover:bg-black/5 hover:text-black"
            )}
          >
            <Icon className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </div>
  </motion.div>
);

// Resizable Navbar with Translucent Glass Body & Slightly Transparent Dropdown
export const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  /**
   * Which mega-menu is open. SERVICES and EXPERTISE show the same panel, so a
   * single value keeps them mutually exclusive — hovering one closes the other
   * instead of leaving two identical panels stacked on screen.
   */
  const [openMenu, setOpenMenu] = useState<null | "services" | "expertise">(
    null
  );
  const pathname = usePathname();

  /**
   * Hover intent. Closing the instant the pointer leaves made the menu flicker
   * when moving diagonally toward it, or when crossing the gap between the two
   * triggers. A short grace period lets the pointer travel.
   */
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenuNow = (menu: "services" | "expertise") => {
    cancelClose();
    setOpenMenu(menu);
  };

  const closeMenus = () => {
    cancelClose();
    setOpenMenu(null);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  useEffect(() => cancelClose, []);

  /**
   * Escape closes the menu and outside clicks dismiss it — a hover-only menu
   * strands keyboard users and anyone who opened it by tapping.
   */
  useEffect(() => {
    if (!openMenu && !isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenus();
        setIsOpen(false);
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest?.("[data-nav-root]")) {
        closeMenus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openMenu, isOpen]);

  /**
   * A dozen services cannot sit in a flat menu, so the dropdown groups them
   * into Build / Automate / Scale exactly as the content document specifies.
   */
  const expertiseGroups = navGroups.map((group) => ({
    group,
    items: servicesInGroup(group).map((service) => ({
      name: service.navName,
      desc: service.oneLine,
      link: `/services/${service.slug}`,
      icon: serviceIcons[service.slug] ?? Globe,
    })),
  }));

  const servicesList = expertiseGroups.flatMap((entry) => entry.items);

  /**
   * EXPERTISE is a different axis from SERVICES: a service is what a client
   * buys, a discipline is how the work is done regardless of which service it
   * was sold as. Both menus previously showed the identical service list.
   */
  const disciplineMenu = disciplineGroups.map((group) => ({
    group,
    items: disciplinesInGroup(group).map((d) => ({
      name: d.name,
      desc: d.summary,
      link: `/expertise#${d.slug}`,
      icon: disciplineIcons[d.icon] ?? Compass,
    })),
  }));

  const disciplineList = disciplineMenu.flatMap((entry) => entry.items);

  const isServicesActive = pathname === "/services";
  const isExpertiseActive = pathname.startsWith("/expertise");

  return (
    <Navbar>
      {/* Desktop Navigation Bar */}
      <NavBody>
        {/* Left: Solid Brand Logo */}
        <NavbarLogo />

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-1 md:space-x-2 text-[11px] md:text-xs font-extrabold tracking-wider uppercase">
          {/* 1. HOME */}
          <Link
            href="/"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              pathname === "/"
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            HOME
          </Link>

          {/* 2. ABOUT US */}
          <Link
            href="/about-us"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              pathname === "/about-us"
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            ABOUT US
          </Link>

          {/* 3. SERVICES — same mega-panel as EXPERTISE */}
          <div
            className="relative"
            onMouseEnter={() => openMenuNow("services")}
            onMouseLeave={scheduleClose}
          >
            {/*
              The label stays a real link: SERVICES has a landing page of its
              own, so clicking navigates while hovering reveals the menu.
            */}
            <Link
              href="/services"
              onClick={closeMenus}
              onFocus={() => openMenuNow("services")}
              aria-haspopup="menu"
              aria-expanded={openMenu === "services"}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
                isServicesActive || openMenu === "services"
                  ? "bg-blue-600 text-white font-black shadow-md"
                  : "text-black hover:text-black hover:bg-black/10 font-bold"
              )}
            >
              <span>SERVICES</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200",
                  isServicesActive || openMenu === "services"
                    ? "text-white"
                    : "text-slate-800",
                  openMenu === "services" && "rotate-180"
                )}
              />
            </Link>

            <AnimatePresence>
              {openMenu === "services" && (
                <ServicesMegaPanel
                  groups={expertiseGroups}
                  pathname={pathname}
                  onNavigate={closeMenus}
                />
              )}
            </AnimatePresence>
          </div>


          {/* 4. EXPERTISE — renders the identical panel */}
          <div
            className="relative"
            onMouseEnter={() => openMenuNow("expertise")}
            onMouseLeave={scheduleClose}
          >
            {/*
              A real <button>: this was a <div>, which meant tabIndex -1 and no
              way for a keyboard user to reach or open the menu at all.
            */}
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openMenu === "expertise"}
              onClick={() =>
                setOpenMenu((prev) => (prev === "expertise" ? null : "expertise"))
              }
              onFocus={() => openMenuNow("expertise")}
              className={cn(
                "px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none uppercase tracking-wider outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2",
                isExpertiseActive || openMenu === "expertise"
                  ? "bg-blue-600 text-white font-black shadow-md"
                  : "text-black hover:text-black hover:bg-black/10 font-bold"
              )}
            >
              <span>EXPERTISE</span>
              <ChevronDown
                className={cn(
                  "w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200",
                  isExpertiseActive || openMenu === "expertise"
                    ? "text-white"
                    : "text-slate-800",
                  openMenu === "expertise" && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {openMenu === "expertise" && (
                <ServicesMegaPanel
                  groups={disciplineMenu}
                  pathname={pathname}
                  onNavigate={closeMenus}
                  footerLabel="See how we work"
                  footerHref="/expertise"
                />
              )}
            </AnimatePresence>
          </div>
          {/* 4. CAREERS */}
          <Link
            href="/careers"
            className={cn(
              "px-4 py-1.5 rounded-full transition-all duration-200",
              pathname === "/careers"
                ? "bg-blue-600 text-white font-black shadow-md"
                : "text-black hover:text-black hover:bg-black/10 font-bold"
            )}
          >
            CAREERS
          </Link>


          
        </div>

        {/* Right: Solid CTA Button */}
        <NavbarButton href="/contact">Contact Us</NavbarButton>
      </NavBody>

      {/* Mobile Navigation Bar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col w-full gap-2 text-sm font-bold tracking-wider uppercase text-black">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              HOME
            </Link>

            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/about-us" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              ABOUT US
            </Link>

            <div className="flex flex-col">
              <div
                className={cn(
                  "px-4 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer select-none",
                  isServicesActive ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
                )}
                onClick={() =>
                  setOpenMenu((prev) => (prev === "services" ? null : "services"))
                }
              >
                {/* Tapping the label opens the list; the "All services" row
                    below it navigates, so the landing page stays reachable. */}
                <span>SERVICES</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openMenu === "services" && "rotate-180"
                  )}
                />
              </div>

              <AnimatePresence>
                {openMenu === "services" && (
                  <MobileServicesList
                    items={servicesList}
                    pathname={pathname}
                    onNavigate={() => {
                      setIsOpen(false);
                      closeMenus();
                    }}
                  />
                )}
              </AnimatePresence>

              {openMenu === "services" && (
                <Link
                  href="/services"
                  onClick={() => {
                    setIsOpen(false);
                    closeMenus();
                  }}
                  className="ml-4 pl-6 py-2 text-xs font-bold normal-case tracking-normal text-blue-600 hover:underline"
                >
                  All services →
                </Link>
              )}
            </div>

            <Link
              href="/careers"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/careers" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              CAREERS
            </Link>

            <div className="flex flex-col">
              <div
                className={cn(
                  "px-4 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer select-none",
                  isExpertiseActive ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
                )}
                onClick={() =>
                  setOpenMenu((prev) => (prev === "expertise" ? null : "expertise"))
                }
              >
                <span>EXPERTISE</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openMenu === "expertise" && "rotate-180"
                  )}
                />
              </div>

              <AnimatePresence>
                {openMenu === "expertise" && (
                  <MobileServicesList
                    items={disciplineList}
                    pathname={pathname}
                    onNavigate={() => {
                      setIsOpen(false);
                      closeMenus();
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "px-4 py-2.5 rounded-xl transition-all",
                pathname === "/contact" ? "bg-blue-500/20 text-blue-600 border border-blue-400/30" : "text-black hover:bg-black/5"
              )}
            >
              CONTACT
            </Link>
          </div>

          <div className="w-full pt-4 border-t border-slate-200 flex justify-center">
            <NavbarButton href="/contact" onClick={() => setIsOpen(false)} className="w-full justify-center">
              Contact Us
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default ResizableNavbar;
