/**
 * Open roles.
 *
 * Descriptions and requirements are written in terms of responsibility and
 * outcome. No framework, language or platform names appear here — the content
 * document applies that rule site-wide, and a listing that names a stack dates
 * the moment the stack changes.
 *
 * TODO (client input required): confirm which of these roles are genuinely
 * open, and add a salary range to each. Listings with ranges attract
 * substantially more qualified applicants. Remove any role that is not live —
 * an advertised role that does not exist costs more than an empty careers page.
 */

export interface Role {
  title: string;
  department: "Engineering" | "Design" | "Infrastructure" | "Growth";
  type: "Full-time" | "Internship";
  location: string;
  /** Icon key resolved in the careers client component */
  icon: "code" | "layout" | "rocket" | "cloud" | "megaphone";
  description: string;
  requirements: string[];
  /** TODO: e.g. "₹6,00,000 – ₹9,00,000 per year" */
  salaryRange?: string;
  /** TODO: e.g. "2–4 years" */
  experience?: string;
}

export const roles: Role[] = [
  {
    title: "Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "code",
    description:
      "Build web platforms end to end, from the interface a customer sees through to the services and data behind it.",
    requirements: [
      "Comfortable owning a feature from interface through to data layer",
      "Experience designing and consuming service interfaces",
      "Care for the parts users never see — error handling, tests, data integrity",
    ],
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "layout",
    description:
      "Craft responsive, accessible interfaces that hold up across devices and stay fast under real conditions.",
    requirements: [
      "Strong grasp of responsive layout and interaction design",
      "Attention to accessibility and performance budgets",
      "Fluency with typed component architecture",
    ],
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "rocket",
    description:
      "Design services and data models that scale predictably, and interfaces other teams can build against with confidence.",
    requirements: [
      "Experience with service architecture and failure isolation",
      "Database design, indexing and query optimisation",
      "Documented, versioned interface design",
    ],
  },
  {
    title: "UI / UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "layout",
    description:
      "Design interfaces, user flows and design systems, and see them through to what actually ships.",
    requirements: [
      "Portfolio showing flows and systems, not only screens",
      "Design system architecture and component thinking",
      "User research and prototyping",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "cloud",
    description:
      "Make releases routine rather than risky — automated deployment, monitoring, and recovery paths that have actually been tested.",
    requirements: [
      "Automated deployment pipelines with testing and rollback",
      "Environment provisioning and configuration management",
      "Monitoring, alerting and incident response",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Growth",
    type: "Full-time",
    location: "Raipur / Remote",
    icon: "megaphone",
    description:
      "Run search, paid media and content as one coordinated programme, measured on qualified enquiries rather than impressions.",
    requirements: [
      "Technical and local search experience",
      "Paid campaign structure and continuous optimisation",
      "Analytics, attribution and reporting against commercial metrics",
    ],
  },
];
