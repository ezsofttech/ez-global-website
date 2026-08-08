/**
 * Engineering disciplines — the EXPERTISE menu.
 *
 * Deliberately a different axis from `services`. A service is a commercial
 * package a client buys ("build us a commerce platform"). A discipline is a
 * capability applied across every engagement regardless of which service it
 * was sold as. Both menus previously showed the identical service list, which
 * told a visitor nothing about the difference.
 *
 * These map onto the five standards already stated on the home page — security
 * by default, performance as a requirement, documented decisions, tested before
 * delivered, portable by design — so the menu and the marketing copy describe
 * the same practices rather than two unrelated sets of claims.
 *
 * No technology, framework or platform names, consistent with the rest of the
 * site, and no metrics that have not been substantiated.
 */

export type DisciplineGroup = "Design" | "Build" | "Run";

export interface Discipline {
  slug: string;
  name: string;
  /** One line for the navbar dropdown */
  summary: string;
  group: DisciplineGroup;
  /** Icon key resolved in the components */
  icon:
    | "architecture"
    | "data"
    | "performance"
    | "quality"
    | "security"
    | "infrastructure";
  /** Opening paragraphs for the discipline's section on /expertise */
  body: string[];
  /** Concrete practices — what this actually means in delivery */
  practices: string[];
}

export const disciplines: Discipline[] = [
  {
    slug: "architecture",
    name: "Architecture & System Design",
    summary: "Decisions recorded as they are made, not reconstructed later.",
    group: "Design",
    icon: "architecture",
    body: [
      "Most of what a system costs is decided before much of it is written. The shape of the data, where responsibilities sit, what talks to what — those choices are cheap to make and expensive to reverse.",
      "We design that shape deliberately and write it down as it is agreed, so the reasoning survives past the people who were in the room. Three years on, when the requirements have moved twice and the original team has changed, the question \"why is it built this way?\" still has an answer.",
    ],
    practices: [
      "Architecture agreed and documented before build, not after",
      "Boundaries drawn so parts can be replaced without a rewrite",
      "Trade-offs stated in commercial terms — cost, risk, time to change",
      "Decision records kept with the code, so they stay current",
    ],
  },
  {
    slug: "data",
    name: "Data & Integration",
    summary: "Systems that agree with each other, and with reality.",
    group: "Design",
    icon: "data",
    body: [
      "Software rarely arrives alone. It has to talk to the systems you already run, and the moment two systems hold the same fact, they will eventually disagree about it.",
      "We design the data model and the integration points together, so there is one place each fact lives and a defined path for everything that needs a copy. Where a figure is derived, it is derived once, not recalculated differently in three reports.",
    ],
    practices: [
      "One owner per piece of data, with the flow between systems made explicit",
      "Interfaces designed and versioned so other teams can build against them",
      "Reconciliation and validation built in, not bolted on after a mismatch",
      "Migrations run in parallel until the numbers are proven to match",
    ],
  },
  {
    slug: "performance",
    name: "Performance Engineering",
    summary: "Measured against defined thresholds, not judged by feel.",
    group: "Build",
    icon: "performance",
    body: [
      "\"It feels fast enough\" is not a standard. Performance that has not been measured is an opinion, and opinions do not hold up on a launch day or during a peak trading window.",
      "We agree thresholds at the start — how quickly a page must respond, what load the system must absorb — and test against them before release rather than discovering the ceiling in production.",
    ],
    practices: [
      "Performance budgets set during scoping and treated as requirements",
      "Load testing against your expected peak, before launch",
      "Instrumentation shipped with the product, so behaviour stays visible",
      "Capacity sized for the demand expected in two years, not just today",
    ],
  },
  {
    slug: "quality",
    name: "Quality Assurance & Testing",
    summary: "Functional, device and security testing before every release.",
    group: "Build",
    icon: "quality",
    body: [
      "The parts of a system that break in production are rarely the features that were carefully demonstrated. They are the error paths, the edge cases and the assumptions nobody wrote down.",
      "Testing runs alongside the build rather than as a phase at the end, so defects surface while the context is still fresh and the fix is still cheap.",
    ],
    practices: [
      "Functional, performance and security testing precede every release",
      "Device and browser matrices verified rather than assumed",
      "Error handling and data integrity checks treated as deliverables",
      "A reviewable build at the end of every sprint, not a single reveal",
    ],
  },
  {
    slug: "security",
    name: "Security & Compliance",
    summary: "Access control, encryption and audit trails from sprint one.",
    group: "Run",
    icon: "security",
    body: [
      "Security added at the end is a coat of paint. Who may see what, how credentials are held, what gets logged — these shape the data model, so they belong in the first design conversation.",
      "We build to the requirements of your sector from the outset, and where data must remain inside your own environment, we architect for that rather than working around it later.",
    ],
    practices: [
      "Access control and permissions designed in from the first sprint",
      "Encryption in transit and at rest, with secrets managed properly",
      "Audit trails and activity logging appropriate to your obligations",
      "Data handling, retention and residency agreed before implementation",
    ],
  },
  {
    slug: "infrastructure",
    name: "Cloud & Infrastructure",
    summary: "Releases made routine, and recovery paths actually tested.",
    group: "Run",
    icon: "infrastructure",
    body: [
      "Systems seldom fail on the feature that was built carefully. They fail on the deployment that was rushed, or the recovery path that was written down but never rehearsed.",
      "We make releasing boring — automated, repeatable and reversible — and we test the failure paths, because a backup nobody has restored from is a hope rather than a plan.",
    ],
    practices: [
      "Automated deployment with testing and a rollback that works",
      "Monitoring and alerting with defined escalation paths",
      "Backup and recovery rehearsed, not just configured",
      "Infrastructure documented and handed over — you are never locked to us",
    ],
  },
];

export const disciplineGroups: DisciplineGroup[] = ["Design", "Build", "Run"];

export function disciplinesInGroup(group: DisciplineGroup): Discipline[] {
  return disciplines.filter((d) => d.group === group);
}

export function getDiscipline(slug: string): Discipline | undefined {
  return disciplines.find((d) => d.slug === slug);
}
