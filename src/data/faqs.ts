/**
 * The eight services-page questions from the master content document.
 *
 * Kept in a plain module (no "use client") so that server components can read
 * the array directly to emit FAQPage structured data, while the client-side
 * accordion imports the same source.
 */

export interface FaqItem {
  key?: string;
  question: string;
  answer: string;
}

export const servicesFaqs: FaqItem[] = [
  {
    key: "faq-1",
    question: "What services does EZGlobal provide in Raipur?",
    answer:
      "EZGlobal delivers a complete range of software engineering services: web platform engineering, mobile product development for iOS and Android, applied AI and intelligent automation, enterprise process automation, desktop and systems software, cloud and platform engineering, SaaS product development, digital commerce and quick commerce platforms, digital growth services, and Global Capability Center establishment. We serve clients across Chhattisgarh and India, as well as in the United Kingdom, the UAE and the United States.",
  },
  {
    key: "faq-2",
    question: "What does a project cost?",
    answer:
      "Cost depends on scope, complexity and integration requirements. Rather than quote a figure before understanding the work, we run a short consultation, establish what is genuinely required, and issue a written proposal with fixed scope and transparent pricing. You will know the full commercial picture before committing to anything.",
  },
  {
    key: "faq-3",
    question: "How long does delivery take?",
    answer:
      "Timelines scale with complexity. A focused engagement may complete within four to eight weeks; a substantial platform typically runs three to six months. We work in sprints with defined milestones, and you receive a reviewable build at the end of each one rather than waiting until the end of the project.",
  },
  {
    key: "faq-4",
    question: "Can you automate processes we currently handle manually?",
    answer:
      "Yes — this is among the most common reasons clients approach us. We begin by mapping how the process actually runs today, including the informal steps that rarely appear in documentation, then automate the parts where automation genuinely holds. Invoicing, inventory, approvals, reconciliation and reporting are frequent starting points.",
  },
  {
    key: "faq-5",
    question: "What can AI realistically do for our business?",
    answer:
      "More than is often assumed, and less than is often marketed. The applications that reliably deliver value are document and data extraction, customer conversation handling, classification and routing, and decision support built on your own data. We assess your workflows first and recommend AI only where it outperforms a conventional solution.",
  },
  {
    key: "faq-6",
    question: "How do you decide on the technical approach?",
    answer:
      "Selection is made against three criteria: the demands of your project, how cleanly it fits the systems you already operate, and what it will cost to maintain in five years. We explain the reasoning behind each architectural decision in commercial terms, so the trade-offs are visible to you before they are committed to.",
  },
  {
    key: "faq-7",
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch support period, and we offer ongoing maintenance agreements covering monitoring, security updates, performance optimisation and continued development. We can also provide full documentation and handover if you intend to bring maintenance in-house.",
  },
  {
    key: "faq-8",
    question: "How do you work with international clients?",
    answer:
      "We work with clients in the United Kingdom, the UAE and the United States, with overlapping working hours arranged for each region. Engagements run on shared project tooling with scheduled written updates and regular video reviews, so you have visibility of progress without needing to share a time zone.",
  },
];
