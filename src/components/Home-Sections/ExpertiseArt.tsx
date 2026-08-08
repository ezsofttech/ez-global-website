"use client";

/**
 * Inline SVG artwork for the "What We Do" capability cards.
 *
 * One scene per service, each illustrating what the capability actually does
 * rather than decorating it. Every scene layers several motions on staggered
 * delays — something feeding in, something processing, something completing —
 * so the card keeps revealing detail instead of repeating one gesture.
 *
 * Animation classes (ex-feed, ex-scan, ex-travel, …) live in globals.css.
 * Everything animates transform / opacity / stroke-dashoffset only, so the
 * whole section stays on the compositor. All motion is disabled under
 * prefers-reduced-motion.
 *
 * These replaced a pair of mocked-up "stat cards" per capability that carried
 * invented figures (app-store ratings, uptime percentages, inference latency)
 * and named specific technologies — both ruled out by the content document.
 */

const BLUE = "#0b64f1";
const SKY = "#60a5fa";
const INK = "#0f172a";
const MUTE = "#cbd5e1";
const PAPER = "#eef2f7";
const AMBER = "#f59e0b";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Soft blue wash behind each scene. */
function Halo({
  cx = 160,
  cy = 100,
  r = 70,
}: {
  cx?: number;
  cy?: number;
  r?: number;
}) {
  return <circle cx={cx} cy={cy} r={r} fill={BLUE} className="ex-halo" />;
}

/* ── 1. Web Platform Engineering ─────────────────────────────────────────
   A page being built and measured: the nav selection travels, copy types
   itself in, an audit scan sweeps the layout, vitals draw below. */
function WebPlatform() {
  return (
    <Frame>
      <Halo />
      <g className="ex-float-s">
        <rect x="66" y="30" width="188" height="122" rx="10" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="66" y="30" width="188" height="20" rx="10" fill="#f8fafc" />
        <rect x="66" y="43" width="188" height="7" fill="#f8fafc" />
        <circle cx="80" cy="40" r="3" fill="#f87171" />
        <circle cx="90" cy="40" r="3" fill="#fbbf24" />
        <circle cx="100" cy="40" r="3" fill="#34d399" />
        <rect x="112" y="36" width="86" height="8" rx="4" fill={PAPER} />

        <rect x="78" y="62" width="42" height="80" rx="6" fill="#f8fafc" />
        <rect x="84" y="68" width="30" height="12" rx="4" fill={BLUE} opacity="0.16" className="ex-nav" />
        <rect x="86" y="71" width="20" height="5" rx="2.5" fill={MUTE} />
        <rect x="86" y="89" width="24" height="5" rx="2.5" fill={MUTE} />
        <rect x="86" y="107" width="18" height="5" rx="2.5" fill={MUTE} />

        <rect x="132" y="64" width="62" height="9" rx="4.5" fill={BLUE} />
        <rect x="132" y="82" width="106" height="6" rx="3" fill={PAPER} />
        <rect x="132" y="82" width="106" height="6" rx="3" fill={MUTE} className="ex-type" />
        <rect x="132" y="96" width="78" height="6" rx="3" fill={PAPER} />
        <rect x="132" y="112" width="50" height="30" rx="6" fill={BLUE} opacity="0.1" />
        <rect x="192" y="112" width="46" height="16" rx="8" fill={BLUE} className="ex-pop ex-d3" />

        {/* audit scan sweeping the page */}
        <rect x="70" y="58" width="180" height="2" rx="1" fill={SKY} className="ex-scan" />
      </g>

      <g className="ex-float ex-d2">
        <rect x="208" y="150" width="80" height="38" rx="9" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <path d="M218 176 L232 164 L244 170 L258 154 L276 160" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ex-draw" />
        <circle cx="276" cy="160" r="3.5" fill={BLUE} className="ex-pulse" />
      </g>
      <circle cx="48" cy="150" r="13" fill={BLUE} opacity="0.14" className="ex-ping" />
      <circle cx="48" cy="150" r="6" fill={BLUE} className="ex-pulse ex-d2" />
    </Frame>
  );
}

/* ── 2. Mobile Product Engineering ───────────────────────────────────────
   Retention, not release day: notifications drop in, the tab bar moves,
   and return-visit pings ripple around the device. */
function MobileProduct() {
  return (
    <Frame>
      <Halo r={62} />
      <g className="ex-float-s ex-d3">
        <rect x="96" y="42" width="54" height="100" rx="12" fill="#fff" stroke={MUTE} strokeWidth="2" opacity="0.7" />
        <rect x="106" y="58" width="34" height="22" rx="5" fill={PAPER} />
        <rect x="106" y="88" width="34" height="5" rx="2.5" fill={PAPER} />
        <rect x="106" y="98" width="22" height="5" rx="2.5" fill={PAPER} />
      </g>

      <g className="ex-float">
        <rect x="142" y="24" width="74" height="140" rx="15" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="165" y="32" width="28" height="4" rx="2" fill={MUTE} />
        <rect x="152" y="46" width="54" height="28" rx="6" fill={BLUE} opacity="0.12" />
        <rect x="160" y="55" width="38" height="5" rx="2.5" fill={BLUE} opacity="0.55" />
        <rect x="160" y="65" width="24" height="5" rx="2.5" fill={BLUE} opacity="0.35" />

        <g className="ex-drop ex-d2">
          <rect x="152" y="82" width="54" height="16" rx="5" fill="#fff" stroke={MUTE} strokeWidth="1.5" />
          <circle cx="161" cy="90" r="3.5" fill={BLUE} />
          <rect x="169" y="87" width="28" height="5" rx="2.5" fill={PAPER} />
        </g>
        <g className="ex-drop ex-d5">
          <rect x="152" y="102" width="54" height="16" rx="5" fill="#fff" stroke={MUTE} strokeWidth="1.5" />
          <circle cx="161" cy="110" r="3.5" fill={SKY} />
          <rect x="169" y="107" width="22" height="5" rx="2.5" fill={PAPER} />
        </g>

        <rect x="148" y="140" width="62" height="18" rx="7" fill="#f8fafc" />
        <rect x="152" y="143" width="16" height="12" rx="5" fill={BLUE} opacity="0.18" className="ex-nav" />
        <circle cx="160" cy="149" r="3" fill={BLUE} />
        <circle cx="179" cy="149" r="3" fill={MUTE} />
        <circle cx="198" cy="149" r="3" fill={MUTE} />
      </g>

      <circle cx="256" cy="62" r="14" fill={BLUE} opacity="0.13" className="ex-ping ex-d1" />
      <circle cx="256" cy="62" r="6" fill={BLUE} className="ex-pulse" />
      <circle cx="266" cy="126" r="12" fill={BLUE} opacity="0.13" className="ex-ping ex-d4" />
      <circle cx="266" cy="126" r="5" fill={SKY} className="ex-pulse ex-d3" />
      <circle cx="62" cy="100" r="12" fill={BLUE} opacity="0.13" className="ex-ping ex-d6" />
      <circle cx="62" cy="100" r="5" fill={BLUE} className="ex-pulse ex-d5" />
    </Frame>
  );
}

/* ── 3. Applied AI & Intelligent Automation ──────────────────────────────
   Documents ride a conveyor into the core, twin rings counter-rotate, and
   rows resolve one by one — with one held back in amber for review. */
function AppliedAi() {
  return (
    <Frame>
      <Halo r={54} />
      <g>
        <rect x="16" y="58" width="50" height="70" rx="7" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="25" y="70" width="24" height="4.5" rx="2.2" fill={MUTE} />
        <rect x="25" y="80" width="32" height="4.5" rx="2.2" fill={MUTE} />
        <rect x="25" y="90" width="20" height="4.5" rx="2.2" fill={MUTE} />
        <rect x="25" y="100" width="28" height="4.5" rx="2.2" fill={MUTE} />
        <rect x="25" y="110" width="16" height="4.5" rx="2.2" fill={MUTE} />
      </g>

      {/* pages travelling into the core */}
      <g>
        <rect x="72" y="84" width="16" height="20" rx="3" fill="#fff" stroke={SKY} strokeWidth="1.8" className="ex-feed" />
        <rect x="72" y="84" width="16" height="20" rx="3" fill="#fff" stroke={SKY} strokeWidth="1.8" className="ex-feed ex-d3" />
        <rect x="72" y="84" width="16" height="20" rx="3" fill="#fff" stroke={SKY} strokeWidth="1.8" className="ex-feed ex-d6" />
      </g>
      <path d="M70 114 H124" stroke={MUTE} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 6" />

      <g style={{ transformOrigin: "160px 94px" }}>
        <circle cx="160" cy="94" r="40" stroke={BLUE} strokeWidth="2" opacity="0.28" strokeDasharray="4 12" className="ex-spin" />
      </g>
      <g style={{ transformOrigin: "160px 94px" }}>
        <circle cx="160" cy="94" r="32" stroke={SKY} strokeWidth="1.6" opacity="0.38" strokeDasharray="10 8" className="ex-spin-rev" />
      </g>
      <g className="ex-float-s">
        <circle cx="160" cy="94" r="25" fill={BLUE} />
        <g stroke="#fff" strokeWidth="2.2" fill="#fff">
          <circle cx="160" cy="80" r="3.3" />
          <circle cx="146" cy="94" r="3.3" />
          <circle cx="174" cy="94" r="3.3" />
          <circle cx="160" cy="108" r="3.3" />
          <circle cx="160" cy="94" r="4.8" />
          <path d="M160 83v6M150 94h5M165 94h5M160 99v6" strokeLinecap="round" />
        </g>
      </g>

      <path d="M192 94 H220" stroke={BLUE} strokeWidth="2.5" className="ex-dash ex-d2" />

      <g>
        <rect x="228" y="46" width="76" height="98" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="240" y="58" width="30" height="5" rx="2.5" fill={BLUE} opacity="0.8" />
        <g className="ex-pop ex-d2">
          <circle cx="247" cy="82" r="6" fill={BLUE} opacity="0.15" />
          <path d="M244 82l2.2 2.2 4-4.4" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <rect x="259" y="79" width="34" height="5" rx="2.5" fill={PAPER} />
        <g className="ex-pop ex-d4">
          <circle cx="247" cy="104" r="6" fill={BLUE} opacity="0.15" />
          <path d="M244 104l2.2 2.2 4-4.4" stroke={BLUE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <rect x="259" y="101" width="26" height="5" rx="2.5" fill={PAPER} />
        <g className="ex-blink ex-d6">
          <circle cx="247" cy="126" r="6" fill={AMBER} opacity="0.22" />
          <path d="M247 122.5v4M247 129v.6" stroke={AMBER} strokeWidth="2" strokeLinecap="round" />
        </g>
        <rect x="259" y="123" width="30" height="5" rx="2.5" fill="#fcd34d" />
      </g>
    </Frame>
  );
}

/* ── 4. Enterprise Process Automation ────────────────────────────────────
   A manual queue drains into one run: items cycle in, gears mesh, an
   approval stamps, and the ledger fills itself. */
function ProcessAutomation() {
  return (
    <Frame>
      <Halo r={58} />
      <g>
        <rect x="18" y="42" width="64" height="18" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" className="ex-stack" />
        <rect x="18" y="66" width="64" height="18" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" className="ex-stack ex-d2" />
        <rect x="18" y="90" width="64" height="18" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" className="ex-stack ex-d4" />
        <rect x="18" y="114" width="64" height="18" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" className="ex-stack ex-d6" />
      </g>

      <path d="M88 52 C114 52 112 86 134 86" stroke={BLUE} strokeWidth="2.2" className="ex-dash" />
      <path d="M88 76 C114 76 114 86 134 86" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d2" />
      <path d="M88 100 C114 100 114 86 134 86" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d3" />
      <path d="M88 124 C114 124 112 86 134 86" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d4" />

      <g style={{ transformOrigin: "158px 74px" }} className="ex-spin">
        <circle cx="158" cy="74" r="17" fill="none" stroke={BLUE} strokeWidth="4.5" strokeDasharray="7 6" />
      </g>
      <g style={{ transformOrigin: "182px 100px" }} className="ex-spin-rev">
        <circle cx="182" cy="100" r="12" fill="none" stroke={SKY} strokeWidth="4.5" strokeDasharray="6 5" />
      </g>
      <circle cx="158" cy="74" r="6" fill={BLUE} />
      <circle cx="182" cy="100" r="4.5" fill={SKY} />

      <g className="ex-pop ex-d3">
        <rect x="136" y="126" width="48" height="30" rx="9" fill={BLUE} />
        <path d="M150 141l6 6 11-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path d="M192 140 H222" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d5" />

      <g className="ex-float-s">
        <rect x="228" y="44" width="70" height="112" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="238" y="56" width="30" height="5" rx="2.5" fill={BLUE} opacity="0.8" />
        <rect x="238" y="76" width="50" height="5" rx="2.5" fill={PAPER} />
        <rect x="238" y="76" width="50" height="5" rx="2.5" fill={MUTE} className="ex-type ex-d1" />
        <rect x="238" y="94" width="50" height="5" rx="2.5" fill={PAPER} />
        <rect x="238" y="94" width="50" height="5" rx="2.5" fill={MUTE} className="ex-type ex-d3" />
        <rect x="238" y="112" width="50" height="5" rx="2.5" fill={PAPER} />
        <rect x="238" y="112" width="50" height="5" rx="2.5" fill={MUTE} className="ex-type ex-d5" />
        <rect x="238" y="132" width="34" height="12" rx="6" fill={BLUE} opacity="0.18" className="ex-pop ex-d6" />
      </g>
    </Frame>
  );
}

/* ── 5. Desktop & Systems Software ───────────────────────────────────────
   A workstation that keeps working: dense rows refresh, peripherals blink
   on their own clocks, and sync catches up when the link returns. */
function DesktopSystems() {
  return (
    <Frame>
      <Halo r={62} />
      <g className="ex-float-s">
        <rect x="74" y="22" width="172" height="110" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="74" y="22" width="172" height="16" rx="8" fill="#f8fafc" />
        <rect x="74" y="32" width="172" height="6" fill="#f8fafc" />
        <rect x="84" y="46" width="38" height="76" rx="5" fill="#f8fafc" />
        <rect x="88" y="50" width="30" height="12" rx="4" fill={BLUE} opacity="0.16" className="ex-nav" />
        <rect x="92" y="53" width="18" height="5" rx="2.5" fill={MUTE} />
        <rect x="92" y="71" width="22" height="5" rx="2.5" fill={MUTE} />
        <rect x="92" y="89" width="16" height="5" rx="2.5" fill={MUTE} />
        <g>
          <rect x="132" y="48" width="104" height="7" rx="3" fill={BLUE} opacity="0.2" />
          <rect x="132" y="62" width="104" height="5" rx="2.5" fill={PAPER} />
          <rect x="132" y="74" width="104" height="5" rx="2.5" fill={PAPER} />
          <rect x="132" y="86" width="104" height="5" rx="2.5" fill={PAPER} />
          <rect x="132" y="98" width="104" height="5" rx="2.5" fill={PAPER} />
          <rect x="132" y="110" width="104" height="5" rx="2.5" fill={PAPER} />
          <rect x="132" y="62" width="104" height="5" rx="2.5" fill={MUTE} className="ex-flip" />
          <rect x="132" y="86" width="104" height="5" rx="2.5" fill={MUTE} className="ex-flip ex-d3" />
          <rect x="132" y="110" width="104" height="5" rx="2.5" fill={MUTE} className="ex-flip ex-d5" />
        </g>
        <rect x="146" y="132" width="28" height="8" rx="2" fill={MUTE} />
        <rect x="122" y="140" width="76" height="6" rx="3" fill={INK} opacity="0.7" />
      </g>

      <g className="ex-float ex-d2">
        <rect x="252" y="92" width="46" height="32" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="260" y="102" width="30" height="4" rx="2" fill={MUTE} />
        <rect x="260" y="110" width="20" height="4" rx="2" fill={MUTE} />
        <circle cx="294" cy="88" r="4" fill={BLUE} className="ex-blink" />
      </g>
      <path d="M248 108 H252" stroke={BLUE} strokeWidth="2" className="ex-dash" />

      <g className="ex-float ex-d4">
        <rect x="20" y="100" width="42" height="28" rx="5" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="28" y="110" width="26" height="4" rx="2" fill={MUTE} />
        <circle cx="24" cy="96" r="4" fill={SKY} className="ex-blink ex-d3" />
      </g>
      <path d="M62 112 H74" stroke={BLUE} strokeWidth="2" className="ex-dash ex-d2" />

      <g style={{ transformOrigin: "160px 168px" }}>
        <circle cx="160" cy="168" r="15" stroke={BLUE} strokeWidth="2.5" strokeDasharray="5 9" className="ex-spin-rev" />
      </g>
      <path d="M155 168l3.6 3.6 6.6-7.2" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ex-pop ex-d3" />
    </Frame>
  );
}

/* ── 6. Cloud & Platform Engineering ─────────────────────────────────────
   Traffic lifts into the platform, a balancer fans it out, and one node
   drops to amber and recovers — the failure path that was tested. */
function CloudPlatform() {
  return (
    <Frame>
      <Halo r={56} />
      <g>
        <rect x="150" y="120" width="8" height="8" rx="2" fill={SKY} className="ex-lift" />
        <rect x="164" y="120" width="8" height="8" rx="2" fill={SKY} className="ex-lift ex-d2" />
        <rect x="178" y="120" width="8" height="8" rx="2" fill={SKY} className="ex-lift ex-d4" />
      </g>

      <g className="ex-float">
        <path d="M118 88h76a23 23 0 0 0 0-46 31 31 0 0 0-58-8 19 19 0 0 0-18 54z" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <path d="M160 74V48M148 58l12-12 12 12" stroke={BLUE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ex-pop" />
      </g>

      <path d="M160 90 V108 M160 108 H74 V128 M160 108 V128 M160 108 H246 V128" stroke={MUTE} strokeWidth="2" />
      <path d="M160 90 V108" stroke={BLUE} strokeWidth="2.5" className="ex-dash" />
      <path d="M160 108 H74 V128" stroke={BLUE} strokeWidth="2.5" className="ex-dash ex-d2" />
      <path d="M160 108 V128" stroke={BLUE} strokeWidth="2.5" className="ex-dash ex-d3" />
      <path d="M160 108 H246 V128" stroke={BLUE} strokeWidth="2.5" className="ex-dash ex-d4" />

      <g>
        <rect x="50" y="130" width="48" height="34" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="60" y="140" width="20" height="4" rx="2" fill={PAPER} />
        <circle cx="74" cy="154" r="14" fill={BLUE} opacity="0.12" className="ex-ping" />
        <circle cx="74" cy="154" r="5" fill={BLUE} className="ex-pulse" />
      </g>
      <g>
        <rect x="136" y="130" width="48" height="34" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="146" y="140" width="20" height="4" rx="2" fill={PAPER} />
        <circle cx="160" cy="154" r="14" fill={BLUE} opacity="0.12" className="ex-ping ex-d3" />
        <circle cx="160" cy="154" r="5" fill={BLUE} className="ex-pulse ex-d2" />
      </g>
      <g>
        <rect x="222" y="130" width="48" height="34" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="232" y="140" width="20" height="4" rx="2" fill={PAPER} />
        <circle cx="246" cy="154" r="5" fill={AMBER} className="ex-blink ex-d5" />
      </g>

      <circle cx="288" cy="48" r="5" fill={SKY} className="ex-pulse ex-d4" />
      <circle cx="32" cy="62" r="4" fill={SKY} className="ex-pulse ex-d6" />
    </Frame>
  );
}

/* ── 7. SaaS Product Engineering ─────────────────────────────────────────
   Tenants stack up isolated from one another, a new one provisions in,
   permissions toggle and the billing cycle turns. */
function SaasProduct() {
  return (
    <Frame>
      <Halo r={60} />
      <g className="ex-float-s">
        <rect x="74" y="108" width="150" height="30" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <circle cx="92" cy="123" r="8" fill={PAPER} />
        <rect x="108" y="119" width="44" height="7" rx="3.5" fill={PAPER} />
        <rect x="196" y="117" width="18" height="11" rx="5.5" fill={BLUE} opacity="0.2" />
      </g>
      <g className="ex-float-s ex-d2">
        <rect x="84" y="72" width="130" height="30" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <circle cx="102" cy="87" r="8" fill={PAPER} />
        <rect x="118" y="83" width="36" height="7" rx="3.5" fill={PAPER} />
        <rect x="186" y="81" width="18" height="11" rx="5.5" fill={BLUE} opacity="0.45" />
      </g>
      <g className="ex-float-s ex-d4">
        <rect x="94" y="36" width="110" height="30" rx="8" fill={BLUE} />
        <circle cx="112" cy="51" r="8" fill="#fff" opacity="0.9" />
        <rect x="128" y="47" width="30" height="7" rx="3.5" fill="#fff" opacity="0.85" />
        <rect x="176" y="45" width="18" height="11" rx="5.5" fill="#fff" opacity="0.9" />
      </g>

      <g className="ex-drop ex-d6">
        <rect x="66" y="144" width="166" height="26" rx="8" fill="#fff" stroke={SKY} strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="84" cy="157" r="7" fill={SKY} opacity="0.35" />
        <rect x="100" y="153" width="48" height="7" rx="3.5" fill={PAPER} />
      </g>

      <g style={{ transformOrigin: "270px 74px" }}>
        <circle cx="270" cy="74" r="22" stroke={BLUE} strokeWidth="2.5" opacity="0.45" strokeDasharray="5 10" className="ex-spin" />
      </g>
      <circle cx="270" cy="74" r="12" fill={BLUE} opacity="0.12" />
      <path d="M264 74l4 4 8-8.5" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ex-pop ex-d2" />

      <g className="ex-float ex-d3">
        <rect x="22" y="48" width="34" height="18" rx="9" fill={BLUE} opacity="0.16" />
        <circle cx="47" cy="57" r="6" fill={BLUE} className="ex-pulse" />
      </g>
    </Frame>
  );
}

/* ── 8. Digital Commerce Engineering ─────────────────────────────────────
   Discovery through checkout as one continuous path: products cycle, the
   cart badge pops, and the checkout steps complete in order. */
function DigitalCommerce() {
  return (
    <Frame>
      <Halo r={58} />
      <g className="ex-float-s">
        <rect x="70" y="24" width="180" height="110" rx="10" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="70" y="24" width="180" height="20" rx="10" fill="#f8fafc" />
        <rect x="70" y="37" width="180" height="7" fill="#f8fafc" />
        <rect x="82" y="31" width="44" height="7" rx="3.5" fill={BLUE} opacity="0.5" />

        <g>
          <path d="M218 30h5l3 12h10" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="230" cy="46" r="1.8" fill={INK} />
          <circle cx="236" cy="27" r="6" fill={BLUE} className="ex-pop ex-d3" />
        </g>

        <rect x="84" y="56" width="46" height="40" rx="6" fill={PAPER} />
        <rect x="84" y="56" width="46" height="40" rx="6" fill={BLUE} opacity="0.18" className="ex-flip" />
        <rect x="138" y="56" width="46" height="40" rx="6" fill={PAPER} />
        <rect x="138" y="56" width="46" height="40" rx="6" fill={BLUE} opacity="0.18" className="ex-flip ex-d2" />
        <rect x="192" y="56" width="46" height="40" rx="6" fill={PAPER} />
        <rect x="192" y="56" width="46" height="40" rx="6" fill={BLUE} opacity="0.18" className="ex-flip ex-d4" />

        <rect x="84" y="104" width="46" height="6" rx="3" fill={PAPER} />
        <rect x="138" y="104" width="34" height="6" rx="3" fill={PAPER} />
        <rect x="192" y="104" width="40" height="6" rx="3" fill={PAPER} />
        <rect x="84" y="116" width="30" height="8" rx="4" fill={BLUE} opacity="0.6" />
      </g>

      <g>
        <path d="M78 164 H242" stroke={MUTE} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M78 164 H242" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" className="ex-draw" />
        <g className="ex-pop">
          <circle cx="78" cy="164" r="9" fill={BLUE} />
          <path d="M74 164l3 3 5.5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="ex-pop ex-d3">
          <circle cx="160" cy="164" r="9" fill={BLUE} />
          <path d="M156 164l3 3 5.5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="ex-pop ex-d6">
          <circle cx="242" cy="164" r="11" fill={BLUE} />
          <path d="M237 164l3.6 3.6 6.8-7.4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </Frame>
  );
}

/* ── 9. Quick Commerce Platforms ─────────────────────────────────────────
   A rider actually rides the route from dark store to door while the
   promise window counts down and shelf stock updates live. */
function QuickCommerce() {
  const route = "M46 146 C104 146 92 56 160 56 C228 56 216 146 274 146";

  return (
    <Frame>
      <Halo r={52} />
      <path d={route} stroke={MUTE} strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9" />
      <path d={route} stroke={BLUE} strokeWidth="3" strokeLinecap="round" className="ex-draw" />

      <g className="ex-float-s">
        <rect x="16" y="116" width="56" height="40" rx="7" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <path d="M16 128h56" stroke={MUTE} strokeWidth="2" />
        <rect x="24" y="136" width="18" height="12" rx="3" fill={BLUE} opacity="0.25" className="ex-flip" />
        <rect x="46" y="136" width="18" height="12" rx="3" fill={BLUE} opacity="0.25" className="ex-flip ex-d3" />
      </g>

      {/* rider following the real route path */}
      <g className="ex-travel" style={{ offsetPath: `path("${route}")` }}>
        <circle r="13" fill={BLUE} opacity="0.16" />
        <circle r="7" fill={BLUE} />
        <circle r="2.6" fill="#fff" />
      </g>

      <g style={{ transformOrigin: "160px 32px" }}>
        <circle cx="160" cy="32" r="15" stroke={BLUE} strokeWidth="2.5" opacity="0.4" strokeDasharray="6 8" className="ex-spin" />
      </g>
      <circle cx="160" cy="32" r="7" fill={BLUE} opacity="0.16" className="ex-pulse" />

      <g className="ex-float-s ex-d3">
        <rect x="248" y="116" width="52" height="42" rx="7" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <path d="M262 158v-24h24v24" stroke={MUTE} strokeWidth="2" strokeLinejoin="round" />
        <circle cx="281" cy="146" r="2" fill={MUTE} />
      </g>
      <g className="ex-pop ex-d6">
        <circle cx="274" cy="108" r="11" fill={BLUE} />
        <path d="M269 108l3.6 3.6 6.8-7.4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="ex-float ex-d2">
        <rect x="96" y="150" width="36" height="16" rx="5" fill="#fff" stroke={MUTE} strokeWidth="1.8" />
        <rect x="102" y="156" width="24" height="4" rx="2" fill={PAPER} />
        <rect x="102" y="156" width="24" height="4" rx="2" fill={MUTE} className="ex-type ex-d2" />
      </g>
    </Frame>
  );
}

/* ── 10. Digital Growth & Performance ────────────────────────────────────
   Channels feed a funnel; the trend draws above and only the qualified
   enquiry falls out of the bottom. */
function DigitalGrowth() {
  return (
    <Frame>
      <Halo r={58} />
      <g className="ex-float-s">
        <rect x="62" y="20" width="196" height="114" rx="10" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <g>
          <rect x="80" y="82" width="18" height="40" rx="4" fill={BLUE} opacity="0.28" className="ex-bar" />
          <rect x="106" y="68" width="18" height="54" rx="4" fill={BLUE} opacity="0.4" className="ex-bar ex-d1" />
          <rect x="132" y="90" width="18" height="32" rx="4" fill={BLUE} opacity="0.32" className="ex-bar ex-d2" />
          <rect x="158" y="56" width="18" height="66" rx="4" fill={BLUE} opacity="0.55" className="ex-bar ex-d3" />
          <rect x="184" y="76" width="18" height="46" rx="4" fill={BLUE} opacity="0.45" className="ex-bar ex-d4" />
          <rect x="210" y="44" width="18" height="78" rx="4" fill={BLUE} className="ex-bar ex-d5" />
        </g>
        <path d="M72 122h172" stroke={MUTE} strokeWidth="2" strokeLinecap="round" />
        <path d="M80 66 L118 52 L150 62 L186 40 L228 28" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ex-draw" opacity="0.85" />
        <circle cx="228" cy="28" r="4" fill={BLUE} className="ex-pulse" />
      </g>

      <g>
        <path d="M96 148 H224 L188 170 H132 Z" fill={BLUE} opacity="0.1" stroke={BLUE} strokeWidth="1.8" />
        <circle cx="112" cy="142" r="4" fill={SKY} className="ex-drop" />
        <circle cx="140" cy="142" r="4" fill={SKY} className="ex-drop ex-d2" />
        <circle cx="180" cy="142" r="4" fill={SKY} className="ex-drop ex-d3" />
        <circle cx="208" cy="142" r="4" fill={SKY} className="ex-drop ex-d4" />
        <circle cx="160" cy="184" r="6" fill={BLUE} className="ex-pop ex-d5" />
      </g>
    </Frame>
  );
}

/* ── 11. Global Capability Centers ───────────────────────────────────────
   One centre reporting into four markets: twin orbits carry satellites
   round the globe and each market handshakes in turn. */
function GlobalCapability() {
  return (
    <Frame>
      <Halo r={60} />
      <g style={{ transformOrigin: "160px 98px" }} className="ex-spin">
        <circle cx="160" cy="98" r="70" stroke={BLUE} strokeWidth="2" opacity="0.25" strokeDasharray="5 11" />
        <circle cx="230" cy="98" r="5" fill={BLUE} />
      </g>
      <g style={{ transformOrigin: "160px 98px" }} className="ex-spin-rev">
        <circle cx="160" cy="98" r="56" stroke={SKY} strokeWidth="1.6" opacity="0.3" strokeDasharray="9 9" />
        <circle cx="104" cy="98" r="4" fill={SKY} />
      </g>

      <circle cx="160" cy="98" r="40" fill="#fff" stroke={MUTE} strokeWidth="2" />
      <path d="M120 98h80" stroke={MUTE} strokeWidth="1.8" />
      <path d="M126 80h68M126 116h68" stroke={MUTE} strokeWidth="1.5" opacity="0.8" />
      <path d="M160 58c14 12 14 68 0 80M160 58c-14 12-14 68 0 80" stroke={MUTE} strokeWidth="1.8" />
      <circle cx="160" cy="98" r="40" stroke={BLUE} strokeWidth="2.4" opacity="0.5" fill="none" />

      <circle cx="160" cy="98" r="16" fill={BLUE} opacity="0.12" className="ex-ping" />
      <circle cx="160" cy="98" r="8" fill={BLUE} />
      <circle cx="160" cy="98" r="3" fill="#fff" />

      <g stroke={BLUE} strokeWidth="2" opacity="0.5">
        <path d="M58 42 L126 76" className="ex-dash" />
        <path d="M262 36 L194 74" className="ex-dash ex-d2" />
        <path d="M50 154 L126 122" className="ex-dash ex-d4" />
        <path d="M270 150 L196 120" className="ex-dash ex-d6" />
      </g>
      <g>
        <circle cx="52" cy="38" r="13" fill={BLUE} opacity="0.12" className="ex-ping ex-d1" />
        <circle cx="52" cy="38" r="6" fill={BLUE} className="ex-pulse" />
        <circle cx="268" cy="32" r="13" fill={BLUE} opacity="0.12" className="ex-ping ex-d3" />
        <circle cx="268" cy="32" r="6" fill={BLUE} className="ex-pulse ex-d2" />
        <circle cx="44" cy="158" r="13" fill={BLUE} opacity="0.12" className="ex-ping ex-d5" />
        <circle cx="44" cy="158" r="6" fill={BLUE} className="ex-pulse ex-d4" />
        <circle cx="276" cy="154" r="13" fill={BLUE} opacity="0.12" className="ex-ping ex-d7" />
        <circle cx="276" cy="154" r="6" fill={BLUE} className="ex-pulse ex-d6" />
      </g>
    </Frame>
  );
}

/* ── 12. Data Engineering & Analytics ────────────────────────────────────
   Scattered sources reconcile into one warehouse: each feed pulses on its
   own schedule, records land in the store, and a single agreed figure
   surfaces on the report above. */
function DataAnalytics() {
  return (
    <Frame>
      <Halo r={56} />

      {/* three disagreeing sources, each on its own clock */}
      <g>
        <rect x="16" y="40" width="52" height="26" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="25" y="50" width="24" height="5" rx="2.5" fill={PAPER} />
        <circle cx="60" cy="46" r="3.5" fill={BLUE} className="ex-blink" />

        <rect x="16" y="84" width="52" height="26" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="25" y="94" width="30" height="5" rx="2.5" fill={PAPER} />
        <circle cx="60" cy="90" r="3.5" fill={SKY} className="ex-blink ex-d3" />

        <rect x="16" y="128" width="52" height="26" rx="6" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="25" y="138" width="20" height="5" rx="2.5" fill={PAPER} />
        <circle cx="60" cy="134" r="3.5" fill={AMBER} className="ex-blink ex-d5" />
      </g>

      {/* pipelines converging on the warehouse */}
      <path d="M72 53 C104 53 100 96 130 96" stroke={BLUE} strokeWidth="2.2" className="ex-dash" />
      <path d="M72 97 H130" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d2" />
      <path d="M72 141 C104 141 100 98 130 98" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d4" />

      {/* records travelling down the pipe */}
      <g>
        <rect x="86" y="92" width="12" height="9" rx="2" fill="#fff" stroke={SKY} strokeWidth="1.6" className="ex-feed" />
        <rect x="86" y="92" width="12" height="9" rx="2" fill="#fff" stroke={SKY} strokeWidth="1.6" className="ex-feed ex-d4" />
      </g>

      {/* the warehouse: stacked, consistent layers */}
      <g className="ex-float-s">
        <ellipse cx="168" cy="62" rx="36" ry="11" fill="#fff" stroke={BLUE} strokeWidth="2" />
        <path d="M132 62v22c0 6 16 11 36 11s36-5 36-11V62" fill="#fff" stroke={BLUE} strokeWidth="2" />
        <ellipse cx="168" cy="84" rx="36" ry="11" fill="none" stroke={BLUE} strokeWidth="2" opacity="0.5" />
        <path d="M132 84v22c0 6 16 11 36 11s36-5 36-11V84" fill="#fff" stroke={BLUE} strokeWidth="2" />
        <ellipse cx="168" cy="106" rx="36" ry="11" fill="none" stroke={BLUE} strokeWidth="2" opacity="0.5" />
        <path d="M132 106v22c0 6 16 11 36 11s36-5 36-11v-22" fill="#fff" stroke={BLUE} strokeWidth="2" />
        {/* fill level rising as records land */}
        <ellipse cx="168" cy="128" rx="30" ry="8" fill={BLUE} opacity="0.14" className="ex-pulse" />
      </g>

      <path d="M208 96 H232" stroke={BLUE} strokeWidth="2.2" className="ex-dash ex-d5" />

      {/* one agreed figure, reported */}
      <g className="ex-float ex-d2">
        <rect x="236" y="52" width="68" height="88" rx="8" fill="#fff" stroke={MUTE} strokeWidth="2" />
        <rect x="246" y="64" width="26" height="5" rx="2.5" fill={BLUE} opacity="0.8" />
        <g>
          <rect x="248" y="106" width="10" height="20" rx="3" fill={BLUE} opacity="0.35" className="ex-bar" />
          <rect x="264" y="96" width="10" height="30" rx="3" fill={BLUE} opacity="0.5" className="ex-bar ex-d2" />
          <rect x="280" y="86" width="10" height="40" rx="3" fill={BLUE} className="ex-bar ex-d4" />
        </g>
        <path d="M244 126h54" stroke={MUTE} strokeWidth="1.8" strokeLinecap="round" />
        <rect x="246" y="78" width="40" height="7" rx="3.5" fill={PAPER} />
        <rect x="246" y="78" width="40" height="7" rx="3.5" fill={MUTE} className="ex-type ex-d3" />
      </g>

      {/* freshness check passing */}
      <g className="ex-pop ex-d6">
        <circle cx="168" cy="168" r="11" fill={BLUE} />
        <path d="M163 168l3.6 3.6 6.8-7.4" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Frame>
  );
}

const scenes: Record<string, () => React.JSX.Element> = {
  "web-dev": WebPlatform,
  "app-dev": MobileProduct,
  "ai-automation": AppliedAi,
  "business-auto": ProcessAutomation,
  "desk-app": DesktopSystems,
  "cloud-platform": CloudPlatform,
  saas: SaasProduct,
  commerce: DigitalCommerce,
  "quick-commerce": QuickCommerce,
  "digital-marketing": DigitalGrowth,
  gcc: GlobalCapability,
  "data-analytics": DataAnalytics,
};

export function ExpertiseArt({ slug }: { slug: string }) {
  const Scene = scenes[slug];
  return Scene ? <Scene /> : null;
}
