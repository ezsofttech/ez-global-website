/**
 * Single source of truth for EZGlobal's service lines.
 *
 * Consumed by the services grid, the services marquee, the navbar dropdown,
 * the footer and every service detail page, so a name or URL is changed here
 * once rather than in six places.
 *
 * Copy for the first eleven is taken verbatim from the master content document
 * (Revision 2). Data Engineering & Analytics was added afterwards and its copy
 * is written to the same brief — outcomes over tooling, no invented figures.
 *
 * No technology, framework or platform names appear in any public-facing
 * string here — capability is expressed through outcomes.
 */

export type NavGroup = "Build" | "Automate" | "Scale";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  detail?: string;
}

export interface ServiceInclusion {
  title: string;
  detail?: string;
}

export interface Service {
  /** URL segment under /services */
  slug: string;
  /** Full service name, as used in headings and navigation */
  name: string;
  /** Short label for the navbar dropdown, where width is tight */
  navName: string;
  /** Category label shown on the service card */
  category: string;
  /** Grouping used by the navbar dropdown columns */
  navGroup: NavGroup;
  /** One-line description used on the home page services list */
  oneLine: string;
  /** Longer description used on the /services card grid */
  cardCopy: string;
  /** Card artwork. Null renders a generated tile instead of a stock photo. */
  image: string | null;
  /** Tailwind text colour class for the service icon */
  accent: string;
  metaTitle: string;
  metaDescription: string;
  /** Page H1 — pairs the service with its benefit */
  h1: string;
  heroSubline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overview: string[];
  included: ServiceInclusion[];
  process: ServiceProcessStep[];
  whoItsFor: string[];
  faqs: ServiceFaq[];
  closing?: string;
  /** Slugs of services worth cross-linking from this page */
  related: string[];
}

export const services: Service[] = [
  {
    slug: "web-dev",
    name: "Web Platform Engineering",
    navName: "Web Platform Engineering",
    category: "Web",
    navGroup: "Build",
    oneLine:
      "Websites and web applications engineered for speed, visibility and conversion.",
    cardCopy:
      "Websites and web applications engineered for speed, search visibility and conversion. As a website development company in Raipur, we build platforms that perform commercially rather than merely existing.",
    image: "/Webdevlopment.webp",
    accent: "text-blue-500",
    metaTitle: "Website & Web Application Development | EZGlobal",
    metaDescription:
      "Custom website and web application engineering in Raipur. Fast, responsive, search-optimised platforms built for businesses across India and abroad.",
    h1: "Web platforms that perform commercially.",
    heroSubline:
      "Websites and web applications engineered for speed, search visibility and conversion — not simply for launch.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    secondaryCta: { label: "Speak to an Engineer", href: "/contact" },
    overview: [
      "Your website is frequently the first commercial conversation a prospective customer has with your business. It should load quickly, communicate clearly and make the next step obvious — and it should keep doing so as your traffic grows.",
      "We design and engineer web platforms with an architecture chosen for the demand you expect in two years, not the demand you have today. Every build is measured against defined performance thresholds, structured for search engines, and instrumented so you can see how visitors actually behave rather than how you assume they do.",
    ],
    included: [
      {
        title: "Discovery and strategy",
        detail:
          "audience, commercial objectives, competitor review and technical constraints",
      },
      {
        title: "Interface design",
        detail:
          "wireframes, visual design and a reviewable prototype before engineering begins",
      },
      {
        title: "Responsive engineering",
        detail: "verified across desktop, tablet and mobile breakpoints",
      },
      {
        title: "Performance optimisation",
        detail: "measured against defined load and interaction thresholds",
      },
      {
        title: "Search foundations",
        detail:
          "semantic structure, schema markup, sitemaps and metadata architecture",
      },
      {
        title: "Content management",
        detail: "an editing interface your team operates without developer support",
      },
      { title: "Accessibility", detail: "alignment to WCAG 2.1 AA" },
      {
        title: "Analytics",
        detail: "event tracking, conversion goals and reporting configuration",
      },
      {
        title: "Launch and support",
        detail: "deployment, monitoring and a post-launch support period",
      },
    ],
    process: [
      { title: "Discovery", detail: "one to two weeks" },
      { title: "Design", detail: "two to three weeks" },
      { title: "Engineering", detail: "four to twelve weeks, depending on scope" },
      { title: "Testing and revision", detail: "one to two weeks" },
      {
        title: "Launch and handover",
        detail: "including training and documentation",
      },
    ],
    whoItsFor: [
      "Businesses replacing a site that is slow, dated or difficult to update",
      "Companies requiring a web application rather than an informational site",
      "Organisations needing genuine search visibility in Raipur, Chhattisgarh and beyond",
      "International businesses seeking a delivery partner with a lower cost base and no compromise in standards",
    ],
    faqs: [],
    closing:
      "Ready to rebuild? Book a consultation and we will assess your current platform and outline what a rebuild would involve.",
    related: ["digital-marketing", "commerce", "cloud-platform"],
  },

  {
    slug: "app-dev",
    name: "Mobile Product Engineering",
    navName: "Mobile Product Engineering",
    category: "Mobile",
    navGroup: "Build",
    oneLine: "iOS and Android products designed for retention, not just release.",
    cardCopy:
      "iOS and Android products designed around retention, not release day. Our mobile team in Raipur pairs considered interface design with engineering that holds up under real usage.",
    image: "/appdevlopment.webp",
    accent: "text-indigo-500",
    metaTitle: "Mobile App Development Company | EZGlobal",
    metaDescription:
      "iOS and Android product engineering in Raipur. Native and cross-platform mobile applications built for retention, with store release and ongoing support.",
    h1: "Mobile products people keep on their home screen.",
    heroSubline:
      "iOS and Android engineering that treats retention as the objective and release as the starting point.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    secondaryCta: { label: "Discuss Your Product", href: "/contact" },
    overview: [
      "Most mobile applications are not deleted because they are broken. They are deleted because they never became part of anyone's routine. The difference is decided long before launch — in how the first session is designed, how quickly value becomes apparent, and how the product behaves in the ordinary conditions of real use: poor connectivity, interruption, and a user who has already forgotten what they installed it for.",
      "We build with that in mind from the first design conversation. Platform strategy, interface decisions and technical architecture are each weighed against their effect on whether someone opens the application a second time — and a thirtieth.",
      "Launch is the point at which the work becomes measurable, not the point at which it concludes. Every product we ship is instrumented so you can see where attention is held and where it is lost, and we treat the releases that follow as part of the engagement rather than an afterthought.",
    ],
    included: [
      {
        title: "Platform strategy",
        detail:
          "native or cross-platform, decided against your requirements and explained plainly",
      },
      {
        title: "Interface design",
        detail: "with an interactive prototype before engineering begins",
      },
      {
        title: "Onboarding and first-session design",
        detail: "treated as a distinct workstream",
      },
      {
        title: "Secure authentication",
        detail: "including biometric and third-party sign-in",
      },
      {
        title: "Offline capability",
        detail: "with background synchronisation",
      },
      { title: "Push notifications and in-app messaging" },
      { title: "Payment and third-party service integration" },
      {
        title: "App Store and Google Play submission",
        detail: "including review response management",
      },
      { title: "Crash reporting, retention analytics and performance monitoring" },
      { title: "Post-launch releases and ongoing support" },
    ],
    process: [
      {
        title: "Discovery and platform strategy",
        detail: "one to two weeks",
      },
      { title: "Design and prototyping", detail: "two to four weeks" },
      {
        title: "Engineering in sprints",
        detail: "four to twenty weeks by complexity",
      },
      { title: "Testing", detail: "functional, device-matrix and performance" },
      { title: "Store submission", detail: "managed end to end" },
      { title: "Launch, measurement and iteration" },
    ],
    whoItsFor: [
      "Businesses extending an existing service to mobile",
      "Founders building a mobile-first product",
      "Retailers and service businesses requiring a customer-facing application",
      "Operations teams needing a field or internal-use application",
    ],
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "Native where performance, hardware access or platform interface conventions are decisive. Cross-platform where reaching both stores efficiently matters more. We recommend during discovery and explain the trade-off in commercial terms.",
      },
      {
        question: "How long does it take?",
        answer:
          "A focused product takes four to eight weeks; moderate complexity, eight to sixteen weeks; enterprise-grade, sixteen to twenty-four weeks.",
      },
      {
        question: "Do you handle store submission?",
        answer:
          "Yes — submission, review responses and release management for both stores.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Mobile products require ongoing releases for operating system updates and platform policy changes. Maintenance agreements cover this.",
      },
    ],
    related: ["web-dev", "saas", "ai-automation"],
  },

  {
    slug: "ai-automation",
    name: "Applied AI & Intelligent Automation",
    navName: "Applied AI & Automation",
    category: "Artificial Intelligence",
    navGroup: "Automate",
    oneLine:
      "AI capability embedded into the workflows your business already runs.",
    cardCopy:
      "AI capability embedded into the workflows your business already runs — document processing, customer conversation, decision support and the automation of work that currently consumes your team's hours.",
    image: "/ai-automation.svg",
    accent: "text-amber-500",
    metaTitle: "AI Automation & Workflow Solutions | EZGlobal",
    metaDescription:
      "Applied AI and intelligent automation for business workflows. Document processing, conversational systems, decision support and process automation, built in Raipur.",
    h1: "AI that does actual work.",
    heroSubline:
      "Intelligent automation built into the workflows your business already runs — measured by hours returned, not by novelty.",
    primaryCta: { label: "Book an Automation Assessment", href: "/contact" },
    secondaryCta: { label: "Speak to an Engineer", href: "/contact" },
    overview: [
      "There is a considerable distance between what AI is marketed as capable of and what it reliably delivers inside an operating business. We work in the second category.",
      "The applications that produce measurable value are unglamorous and specific: extracting structured data from documents that currently require manual reading, handling the customer questions that consume your team's first hour each morning, classifying and routing work that presently sits in a shared inbox, and surfacing decisions from data your business already holds but cannot practically review.",
      "We begin every engagement by examining how your work actually happens — including the informal steps that never appear in any process document. Where AI genuinely outperforms a conventional solution, we build it. Where a well-designed rule or a better interface would do the job more cheaply and more predictably, we say so. That honesty is the reason these projects tend to succeed.",
    ],
    included: [
      {
        title: "Workflow assessment",
        detail:
          "mapping where time is genuinely lost, with an estimate of what automation would return",
      },
      {
        title: "Document intelligence",
        detail:
          "extraction, classification and validation from invoices, forms, contracts and records",
      },
      {
        title: "Conversational systems",
        detail:
          "customer and internal assistants grounded in your own documentation and data",
      },
      {
        title: "Process automation",
        detail:
          "approval chains, routing, data entry and reconciliation handled without manual intervention",
      },
      {
        title: "Decision support",
        detail:
          "forecasting, prioritisation and anomaly detection built on your operational data",
      },
      {
        title: "Integration",
        detail:
          "automation connected into the systems you already run, not bolted alongside them",
      },
      {
        title: "Human oversight design",
        detail:
          "clear escalation paths, confidence thresholds and review points where accuracy matters",
      },
      {
        title: "Accuracy monitoring",
        detail: "ongoing measurement of performance against defined benchmarks",
      },
      {
        title: "Governance",
        detail:
          "data handling, access control and audit trails appropriate to your sector",
      },
    ],
    process: [
      {
        title: "Assessment",
        detail:
          "we map current workflows and identify where automation would pay for itself",
      },
      {
        title: "Feasibility and prioritisation",
        detail:
          "a written view of what is worth doing, what is not, and in what order",
      },
      {
        title: "Pilot",
        detail:
          "a contained implementation with defined success criteria, before wider commitment",
      },
      {
        title: "Measurement",
        detail:
          "accuracy and time saved, assessed against the baseline established at the outset",
      },
      {
        title: "Rollout and integration",
        detail: "extended across the organisation once the pilot proves out",
      },
      {
        title: "Monitoring and refinement",
        detail: "continuous accuracy review and adjustment",
      },
    ],
    whoItsFor: [
      "Operations teams processing high volumes of documents or forms manually",
      "Businesses where customer enquiries consume disproportionate staff time",
      "Organisations holding substantial operational data they cannot practically analyse",
      "Companies that have explored AI, found the results disappointing, and want a grounded assessment",
      "Finance and administration functions carrying heavy reconciliation or approval workloads",
    ],
    faqs: [
      {
        question: "Will this replace our staff?",
        answer:
          "In our experience it removes the portions of a role that people least want to do — repetitive data entry, first-line triage, manual reconciliation — and returns that capacity to work requiring judgement. We design for oversight, not displacement.",
      },
      {
        question: "How accurate is it?",
        answer:
          "Accuracy is measured, not asserted. We establish a baseline during the pilot, define an acceptable threshold with you, and route anything falling below it for human review. You see the numbers throughout.",
      },
      {
        question: "Is our data secure?",
        answer:
          "Data handling, retention and access are agreed before any implementation begins, and designed to your sector's requirements. Where data must remain within your own environment, we architect for that.",
      },
      {
        question: "What if AI isn't the right answer?",
        answer:
          "Then we will tell you during the assessment, and recommend what is. A conventional solution that works reliably is a better outcome than an AI implementation that impresses in demonstration and disappoints in production.",
      },
      {
        question: "How soon are results visible?",
        answer:
          "The pilot phase is deliberately short — typically four to eight weeks — so that you have measured evidence before committing to a wider rollout.",
      },
    ],
    related: ["business-auto", "cloud-platform", "saas"],
  },

  {
    slug: "business-auto",
    name: "Enterprise Process Automation",
    navName: "Enterprise Process Automation",
    category: "Operations",
    navGroup: "Automate",
    oneLine: "Operational systems that remove manual effort from daily work.",
    cardCopy:
      "Operational systems that remove manual effort from daily work. We automate the invoicing, inventory, approval and reconciliation processes that quietly consume capacity across your organisation.",
    image: "/billing-and-software.webp",
    accent: "text-emerald-500",
    metaTitle: "Business Process Automation Solutions | EZGlobal",
    metaDescription:
      "Enterprise process automation for retail, wholesale and manufacturing businesses across Chhattisgarh. Inventory, invoicing, approvals and reporting in one system.",
    h1: "Remove the manual work from daily operations.",
    heroSubline:
      "Operational systems that handle the invoicing, inventory, approvals and reconciliation currently consuming your team's capacity.",
    primaryCta: { label: "Request a Demonstration", href: "/contact" },
    secondaryCta: { label: "Call +91 89623 70822", href: "tel:+918962370822" },
    overview: [
      "Every growing business accumulates manual process. A spreadsheet that someone maintains by hand. A reconciliation that takes two days each month. An approval that waits in an inbox. Individually these are minor; collectively they consume more capacity than most organisations realise, and they scale badly — the cost of each rises in direct proportion to your growth.",
      "We build systems that absorb this work. Invoicing, inventory movement, purchase and sales reconciliation, approval routing and reporting are brought into a single operational platform your team can run without specialist training.",
      "Every implementation is configured for how your business actually operates. Retail, wholesale distribution and manufacturing each carry distinct requirements, and we build to those requirements rather than asking you to work around a template.",
    ],
    included: [
      { title: "Automated invoicing with statutory and tax compliance" },
      {
        title:
          "Inventory management with stock movement tracking and low-stock alerts",
      },
      {
        title:
          "Multi-branch and multi-warehouse operation with consolidated reporting",
      },
      { title: "Purchase, sales and payment reconciliation" },
      {
        title: "Approval workflows with routing, escalation and audit trails",
      },
      { title: "Payment and banking integration" },
      { title: "Customer and supplier ledgers" },
      { title: "Barcode and scanner support" },
      { title: "Role-based access control and full activity logging" },
      { title: "Configurable dashboards and exportable management reports" },
      { title: "Data migration from your existing systems" },
      { title: "Staff training and ongoing support" },
    ],
    process: [
      {
        title: "Process review",
        detail:
          "how you invoice, stock, approve and reconcile today, including the informal steps",
      },
      {
        title: "Configuration and customisation",
        detail: "built to your operating model",
      },
      {
        title: "Data migration",
        detail: "customers, suppliers, stock and historical transactions",
      },
      {
        title: "Parallel running",
        detail: "new and existing systems side by side until accuracy is verified",
      },
      { title: "Training and rollout", detail: "hands-on, with documentation" },
      { title: "Ongoing support and compliance updates" },
    ],
    whoItsFor: [
      "Retailers managing stock across one or more locations",
      "Wholesale distributors handling high transaction volumes",
      "Manufacturers tracking materials from intake through to finished goods",
      "Any business still reconciling records manually at month end",
      "Organisations running critical operations on spreadsheets that only one person understands",
    ],
    faqs: [
      {
        question: "Is invoicing tax compliant?",
        answer:
          "Yes. Invoicing, tax calculation and return-ready reporting formats meet current statutory requirements, and we issue updates as regulations change.",
      },
      {
        question: "Can you migrate our existing data?",
        answer:
          "Yes. Migration of customers, suppliers, stock and transaction history is a standard part of scope.",
      },
      {
        question: "Will our staff need training?",
        answer:
          "We provide hands-on training and documentation. Systems are designed for staff without technical backgrounds, because those are the people who will use them daily.",
      },
      {
        question: "Do you support multiple branches?",
        answer:
          "Yes — multi-branch and multi-warehouse operation with consolidated reporting across all locations.",
      },
      {
        question: "What if our process is unusual?",
        answer:
          "Most are. That is precisely why we review your actual process before configuring anything, rather than fitting you to a standard template.",
      },
    ],
    related: ["ai-automation", "desk-app", "commerce"],
  },

  {
    slug: "desk-app",
    name: "Desktop & Systems Software",
    navName: "Desktop & Systems Software",
    category: "Systems",
    navGroup: "Automate",
    oneLine:
      "High-performance software for demanding, hardware-connected environments.",
    cardCopy:
      "High-performance software for Windows, macOS and Linux — built for large datasets, connected hardware and environments where network availability cannot be assumed.",
    image: "/desktop.webp",
    accent: "text-rose-500",
    metaTitle: "Custom Desktop & Systems Software | EZGlobal",
    metaDescription:
      "Custom desktop software for Windows, macOS and Linux. High-performance, offline-capable applications with hardware integration, engineered in Raipur.",
    h1: "Software for demanding operational environments.",
    heroSubline:
      "High-performance desktop applications built for large datasets, connected hardware and environments where network availability cannot be assumed.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    overview: [
      "Certain operations are simply better served by desktop software. Datasets that would overwhelm a browser. Direct integration with printers, scanners or point-of-sale hardware. Restricted network environments. Workflows where latency is unacceptable and connectivity is intermittent.",
      "We build for those conditions without compromise, packaged with signed installers and automated updates so that deployment across your organisation remains manageable as you grow.",
    ],
    included: [
      {
        title:
          "Cross-platform builds for Windows, macOS and Linux from a single codebase",
      },
      {
        title: "Full offline operation with background synchronisation on reconnection",
      },
      { title: "Local data architecture with encrypted storage" },
      {
        title: "Peripheral integration",
        detail: "printers, barcode scanners, point-of-sale devices, card readers",
      },
      { title: "Signed installers and automated update distribution" },
      { title: "Role-based access control and audit logging" },
      { title: "Data import, export and reporting" },
      { title: "Migration from legacy desktop systems" },
      { title: "Deployment support and user training" },
    ],
    process: [
      {
        title: "Requirements analysis",
        detail: "including hardware and environment assessment",
      },
      { title: "Architecture and data design" },
      { title: "Interface design" },
      { title: "Engineering in sprints" },
      { title: "Testing", detail: "across target operating systems and hardware" },
      { title: "Packaging, deployment and training" },
    ],
    whoItsFor: [
      "Retail and hospitality businesses requiring point-of-sale software",
      "Manufacturers with production floor or quality control systems",
      "Organisations operating in low-connectivity or restricted-network environments",
      "Businesses replacing an ageing legacy system nobody remaining knows how to maintain",
    ],
    faqs: [
      {
        question: "Will it work without internet?",
        answer:
          "Yes. Applications operate fully offline and synchronise automatically when connectivity returns.",
      },
      {
        question: "Can it connect to our existing hardware?",
        answer:
          "In most cases, yes. We assess your specific devices during requirements analysis.",
      },
      {
        question: "Can you migrate our old system's data?",
        answer: "Yes. Migration from legacy systems is standard scope.",
      },
      {
        question: "How are updates distributed?",
        answer:
          "Through signed automated update channels, so users receive new versions without manual reinstallation.",
      },
    ],
    related: ["business-auto", "cloud-platform", "ai-automation"],
  },

  {
    slug: "cloud-platform",
    name: "Cloud & Platform Engineering",
    navName: "Cloud & Platform Engineering",
    category: "Infrastructure",
    navGroup: "Scale",
    oneLine:
      "Secure interfaces, resilient infrastructure and automated deployment.",
    cardCopy:
      "Secure interfaces, resilient infrastructure and automated deployment. We build the foundations that determine whether your systems stay available under load — and recover quickly when they don't.",
    image: "/Devops.webp",
    accent: "text-purple-500",
    metaTitle: "Cloud Engineering & API Development | EZGlobal",
    metaDescription:
      "Cloud infrastructure, API engineering and automated deployment. Secure, resilient platforms engineered for uptime and predictable scale.",
    h1: "The foundations everything else depends on.",
    heroSubline:
      "Secure interfaces, resilient infrastructure and automated deployment — engineered so that scale and recovery are planned for rather than discovered.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    secondaryCta: { label: "Book an Infrastructure Review", href: "/contact" },
    overview: [
      "Software is only as reliable as the infrastructure beneath it. Systems rarely fail on the feature that was carefully built; they fail on the deployment that was rushed, the interface that was never documented, or the recovery path that was never tested.",
      "We design and document interfaces that other teams can build against with confidence, and establish deployment processes that make releases routine rather than risky. Environments are structured so that scaling, monitoring and recovery are designed in from the outset — not retrofitted after the first incident.",
    ],
    included: [
      { title: "Interface design with versioned, maintained documentation" },
      {
        title:
          "Service architecture designed for independent scaling and failure isolation",
      },
      { title: "Automated deployment pipelines with testing and rollback" },
      {
        title:
          "Environment provisioning, configuration management and cost optimisation",
      },
      {
        title: "Security architecture",
        detail: "access control, secrets management and encryption",
      },
      {
        title: "Monitoring, logging and alerting with defined escalation paths",
      },
      { title: "Backup, recovery and business continuity planning" },
      { title: "Load testing against defined performance thresholds" },
      { title: "Infrastructure documentation and handover" },
    ],
    process: [
      {
        title: "Assessment",
        detail: "current infrastructure, deployment process and failure points",
      },
      {
        title: "Architecture design",
        detail: "with cost and scaling implications stated explicitly",
      },
      {
        title: "Implementation",
        detail: "provisioning, pipeline setup and security configuration",
      },
      {
        title: "Migration",
        detail:
          "where existing systems are being moved, executed without service interruption",
      },
      { title: "Load testing and validation" },
      { title: "Handover, documentation and ongoing monitoring" },
    ],
    whoItsFor: [
      "Businesses whose systems slow or fail under peak load",
      "Organisations where releases are manual, risky or infrequent",
      "Companies needing systems to communicate reliably with partners or third parties",
      "Teams facing cloud costs that have grown without clear justification",
      "Businesses with no tested recovery plan for their critical systems",
    ],
    faqs: [
      {
        question: "Can you work with our existing infrastructure?",
        answer:
          "Yes. We begin with an assessment of what you already run and recommend changes incrementally, rather than proposing a wholesale rebuild by default.",
      },
      {
        question: "Will there be downtime during migration?",
        answer:
          "Migrations are planned to avoid service interruption. Where a brief window is unavoidable, it is scheduled with you in advance.",
      },
      {
        question: "Can you reduce our cloud costs?",
        answer:
          "Frequently, yes. Over-provisioning and unused resources are common, and a cost review is part of our standard assessment.",
      },
      {
        question: "Do we depend on you afterwards?",
        answer:
          "No. Infrastructure is documented and handed over in full. You are free to manage it internally, and we will support that transition if you choose it.",
      },
    ],
    related: ["saas", "web-dev", "ai-automation"],
  },

  {
    slug: "saas",
    name: "SaaS Product Engineering",
    navName: "SaaS Product Engineering",
    category: "Product",
    navGroup: "Build",
    oneLine:
      "Multi-tenant products with billing, permissions and administrative depth.",
    cardCopy:
      "From concept to launch, we build multi-tenant SaaS products complete with subscription billing, granular permissions, administrative tooling and the architecture to scale beyond your first hundred customers.",
    image: "/saas aplication1.webp",
    accent: "text-green-600",
    metaTitle: "SaaS Product Development Company | EZGlobal",
    metaDescription:
      "End-to-end SaaS product engineering — multi-tenant architecture, subscription billing, permissions and administrative tooling, built to scale.",
    h1: "SaaS products built to be sold and supported.",
    heroSubline:
      "Multi-tenant architecture, subscription billing, granular permissions and the administrative depth a product needs once it has real customers.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    secondaryCta: { label: "Discuss Your Product", href: "/contact" },
    overview: [
      "Building a SaaS product involves considerably more than the feature set that inspired it. Tenancy, permissions, subscription billing, onboarding, usage limits, support tooling and administrative access all determine whether the product can actually be sold, supported and grown — and each is far more expensive to retrofit than to build correctly at the start.",
      "We establish these foundations properly in the first release, so your team can concentrate on the product itself rather than on the infrastructure surrounding it.",
    ],
    included: [
      { title: "Multi-tenant architecture with enforced data isolation" },
      {
        title:
          "Authentication, single sign-on and granular role-based permissions",
      },
      {
        title: "Subscription billing, plan management, trials and usage metering",
      },
      {
        title: "Customer-facing dashboards and internal administrative tooling",
      },
      { title: "Onboarding flows and in-product guidance" },
      { title: "Usage analytics, audit logging and support access controls" },
      { title: "Scalable architecture with defined growth headroom" },
      { title: "Documentation for your support and sales teams" },
    ],
    process: [
      {
        title: "Product and commercial discovery",
        detail: "pricing model, tenancy requirements, target scale",
      },
      {
        title: "Architecture design",
        detail: "tenancy, permissions and billing designed together",
      },
      { title: "Design and prototyping" },
      { title: "Engineering in sprints toward a defined first release" },
      { title: "Beta and iteration with early customers" },
      { title: "Launch and continued development" },
    ],
    whoItsFor: [
      "Founders taking a product from concept to first paying customers",
      "Businesses productising an internal system for external sale",
      "Companies whose existing SaaS cannot support the tenancy or billing model they now need",
      "Organisations preparing a product for investment or acquisition scrutiny",
    ],
    faqs: [
      {
        question: "Can you build an MVP first?",
        answer:
          "Yes, and usually we recommend it — with the important qualification that tenancy and permissions are built correctly from the start, since these are the elements that cannot be retrofitted cheaply.",
      },
      {
        question: "Do you handle subscription billing?",
        answer:
          "Yes. Plans, trials, upgrades, proration, failed payments and usage metering are all within scope.",
      },
      {
        question: "What if we already have a product?",
        answer:
          "We assess what exists and recommend whether to extend, refactor or rebuild — with the reasoning stated honestly, including where rebuilding is not justified.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do, on full payment. This is set out explicitly in our terms.",
      },
    ],
    related: ["cloud-platform", "web-dev", "ai-automation"],
  },

  {
    slug: "commerce",
    name: "Digital Commerce Engineering",
    navName: "Digital Commerce Engineering",
    category: "Commerce",
    navGroup: "Build",
    oneLine: "Storefronts engineered for conversion and operational scale.",
    cardCopy:
      "Storefronts engineered as commercial systems — where discovery, checkout and fulfilment work as one continuous journey, and every point of friction has been deliberately removed.",
    image: "/e-commerce.webp",
    accent: "text-blue-700",
    metaTitle: "E-Commerce Development Company | EZGlobal",
    metaDescription:
      "High-performance e-commerce platforms with secure payments, inventory management and scalable architecture. Storefronts engineered for conversion.",
    h1: "Commerce platforms engineered to convert.",
    heroSubline:
      "Storefronts where discovery, checkout and fulfilment operate as one continuous system — and where friction has been deliberately removed rather than tolerated.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    overview: [
      "An online store is a commercial system, not a catalogue. Every additional second at checkout, every ambiguous delivery estimate and every unnecessary form field has a measurable cost, and those costs compound quietly across thousands of sessions.",
      "We build storefronts where the entire journey is engineered as one path, and integrate them with the inventory, logistics and accounting systems you already run — so that operations remain coherent as order volume rises rather than fragmenting under it.",
    ],
    included: [
      { title: "Custom and headless storefront engineering" },
      { title: "Secure payment integration across multiple methods" },
      { title: "Catalogue, inventory and product variant management" },
      { title: "Order management, shipping and returns workflows" },
      { title: "Checkout optimisation and abandoned cart recovery" },
      { title: "Personalised recommendations and search" },
      { title: "Merchant dashboards and operational reporting" },
      {
        title:
          "Integration with existing inventory, logistics and accounting systems",
      },
      { title: "Marketplace and multi-channel selling support" },
      { title: "Performance engineering for peak trading periods" },
    ],
    process: [
      {
        title: "Commercial discovery",
        detail: "catalogue, margins, fulfilment model and peak load expectations",
      },
      { title: "Journey design", detail: "discovery through to post-purchase" },
      { title: "Engineering and integration" },
      { title: "Load testing against expected peak trading volume" },
      { title: "Launch and merchandising handover" },
      { title: "Conversion optimisation as an ongoing programme" },
    ],
    whoItsFor: [
      "Retailers moving online or replacing an underperforming platform",
      "Businesses whose current store cannot handle peak trading",
      "Brands selling across multiple channels needing a single source of inventory truth",
      "Companies where online operations have outgrown manual order handling",
    ],
    faqs: [
      {
        question: "Can you migrate our existing store?",
        answer:
          "Yes — products, customers, order history and search rankings are all preserved through a planned migration.",
      },
      {
        question: "Will it handle peak sale traffic?",
        answer:
          "Platforms are load tested against your expected peak before launch, not assessed by assumption afterwards.",
      },
      {
        question: "Can it connect to our inventory system?",
        answer:
          "Yes. Integration with existing inventory, accounting and logistics systems is standard scope.",
      },
      {
        question: "Do you help with conversion after launch?",
        answer:
          "Yes, as an ongoing programme — testing, funnel analysis and iteration against measured results.",
      },
    ],
    related: ["quick-commerce", "digital-marketing", "web-dev"],
  },

  {
    slug: "quick-commerce",
    name: "Quick Commerce Platforms",
    navName: "Quick Commerce Platforms",
    category: "Rapid Delivery",
    navGroup: "Automate",
    oneLine:
      "Systems built for real-time inventory and minute-level fulfilment.",
    cardCopy:
      "Platforms built for minute-level fulfilment — real-time inventory accuracy, intelligent order routing, live rider management and integrated payments.",
    image: "/quickCommerce.webp",
    accent: "text-red-600",
    metaTitle: "Quick Commerce Platform Development | EZGlobal",
    metaDescription:
      "Quick commerce platforms with real-time inventory, instant order routing, rider management and live tracking. Engineered for minute-level delivery.",
    h1: "Built for delivery measured in minutes.",
    heroSubline:
      "Real-time inventory accuracy, intelligent order routing, live rider management and integrated payments — engineered for fulfilment windows that leave no margin for error.",
    primaryCta: { label: "Request a Proposal", href: "/contact" },
    overview: [
      "Quick commerce places demands on software that conventional retail platforms were never designed to meet. Inventory accuracy must be immediate rather than eventually consistent. Order routing must weigh rider availability, distance and current load within seconds. The customer expects to watch progress in real time, and the operations team expects to intervene when something goes wrong.",
      "We build systems designed around these constraints from the outset — covering the customer application, the dark store or outlet interface, the rider-facing tooling and the operations console that connects all three.",
    ],
    included: [
      { title: "Real-time inventory synchronisation across dark stores and outlets" },
      { title: "Automated order allocation and rider assignment logic" },
      { title: "Live order tracking and status updates" },
      { title: "Dark store and micro-fulfilment management interfaces" },
      { title: "Rider application with route optimisation and earnings visibility" },
      { title: "Operations console with live intervention capability" },
      { title: "Integrated payments, refunds and dispute handling" },
      { title: "Demand forecasting and stock positioning support" },
      {
        title: "Performance analytics across delivery times and fulfilment rates",
      },
    ],
    process: [
      {
        title: "Operating model discovery",
        detail: "fulfilment network, catalogue and delivery promise",
      },
      {
        title: "Architecture design",
        detail: "inventory, routing and real-time communication",
      },
      {
        title: "Engineering across all four interfaces",
        detail: "customer, store, rider, operations",
      },
      { title: "Pilot in a single zone with measured performance" },
      { title: "Rollout across the network" },
      { title: "Optimisation of routing and stock positioning against live data" },
    ],
    whoItsFor: [
      "Businesses launching a rapid delivery proposition",
      "Grocery, pharmacy and convenience retailers entering quick commerce",
      "Existing operators whose platform cannot maintain inventory accuracy at volume",
      "Dark store networks requiring unified operational control",
    ],
    faqs: [
      {
        question: "How accurate is inventory?",
        answer:
          "Inventory updates in real time across the network, because in quick commerce an item shown as available but absent from the shelf is a cancelled order and a lost customer.",
      },
      {
        question: "Can it handle multiple dark stores?",
        answer:
          "Yes. Multi-location networks with zone-based routing and independent stock positions are supported.",
      },
      {
        question: "Does it include a rider application?",
        answer:
          "Yes — rider tooling with assignment, route optimisation and earnings visibility is part of the platform.",
      },
      {
        question: "Can we start in one area?",
        answer:
          "Yes, and we recommend it. A single-zone pilot proves the operating model before you commit to network-wide rollout.",
      },
    ],
    related: ["commerce", "business-auto", "cloud-platform"],
  },

  {
    slug: "digital-marketing",
    name: "Digital Growth & Performance",
    navName: "Digital Growth & Performance",
    category: "Growth",
    navGroup: "Scale",
    oneLine: "Search, paid media and analytics as one coordinated programme.",
    cardCopy:
      "Search, paid media, content and analytics delivered as one coordinated programme. A digital marketing company in Raipur measured on qualified enquiries, not impressions.",
    image: "/Digital marketing.webp",
    accent: "text-orange-500",
    metaTitle: "Digital Marketing, SEO & Paid Media | EZGlobal",
    metaDescription:
      "SEO, paid media, content and analytics in Raipur. Coordinated growth programmes measured against qualified enquiries and revenue, not impressions.",
    h1: "Marketing measured by enquiries, not impressions.",
    heroSubline:
      "Search, paid media, content and analytics delivered as one coordinated programme, with reporting that reflects commercial reality.",
    primaryCta: { label: "Request a Growth Review", href: "/contact" },
    overview: [
      "Marketing performs when channels reinforce one another. Search captures demand that already exists; paid media creates demand that does not yet; content earns the trust that converts either into an enquiry. Run in isolation, these compete for budget. Run together, they compound.",
      "We build programmes with a measurement framework agreed at the outset, so that each month you can see which activity produced qualified enquiries — and, equally importantly, which did not.",
    ],
    included: [
      {
        title: "Technical SEO",
        detail: "audit, indexation, structured data and site performance",
      },
      {
        title: "Local SEO",
        detail: "business profile optimisation, citations and review strategy",
      },
      {
        title: "Content",
        detail:
          "keyword strategy, editorial planning, production and distribution",
      },
      {
        title: "Paid search",
        detail: "campaign structure, bidding strategy and continuous optimisation",
      },
      {
        title: "Social advertising",
        detail: "paid campaign management across relevant platforms",
      },
      {
        title: "Brand & community channels",
        detail: "editorial calendar, publishing and audience engagement",
      },
      {
        title: "Conversion optimisation",
        detail: "landing page testing and funnel analysis",
      },
      { title: "Email", detail: "sequences, segmentation and automation" },
      {
        title: "Reporting",
        detail: "consolidated dashboards and a monthly performance review",
      },
    ],
    process: [
      {
        title: "Audit and baseline",
        detail: "current position across every channel",
      },
      {
        title: "Strategy and measurement framework",
        detail: "agreed objectives and metrics",
      },
      {
        title: "Implementation",
        detail: "technical fixes, campaign setup, content production",
      },
      { title: "Optimisation", detail: "continuous testing and refinement" },
      {
        title: "Monthly review",
        detail: "reported against agreed commercial metrics",
      },
    ],
    whoItsFor: [
      "Businesses generating traffic but few enquiries",
      "Companies expanding into new geographic markets",
      "Organisations running channels in isolation with no unified view of performance",
      "Businesses consistently outranked by competitors in local search",
    ],
    faqs: [
      {
        question: "How soon will results appear?",
        answer:
          "Paid campaigns generate traffic immediately. Search typically shows meaningful movement between three and six months, depending on your starting position and competitive landscape.",
      },
      {
        question: "What do you report on?",
        answer:
          "Enquiries, qualified leads, cost per acquisition and revenue attribution where tracking permits — not impressions or follower counts in isolation.",
      },
      {
        question: "Is there a minimum commitment?",
        answer:
          "Search requires a minimum of six months for a fair assessment. Paid media can run on shorter cycles.",
      },
      {
        question: "Do you manage the ad budget?",
        answer:
          "Media spend is paid directly by you to the platform. Our management fee is stated separately, so you always know what you are paying for.",
      },
    ],
    related: ["web-dev", "commerce", "saas"],
  },

  {
    slug: "gcc",
    name: "Global Capability Centers",
    navName: "Global Capability Centers",
    category: "Enterprise",
    navGroup: "Scale",
    oneLine: "Enterprise capability centers, established and scaled in India.",
    cardCopy:
      "Establish and scale a capability center in India that functions as a genuine delivery organisation — with the operating model, governance and talent to run to your standards from day one.",
    image: "/gcc.webp",
    accent: "text-yellow-500",
    metaTitle: "Global Capability Center Setup in India | EZGlobal",
    metaDescription:
      "Establish and scale a Global Capability Center in India. Operating model, talent, governance and infrastructure — from feasibility to steady-state operation.",
    h1: "A capability center that functions from day one.",
    heroSubline:
      "Establish and scale an India-based capability center with the operating model, governance and talent to run to your standards — not merely to your headcount targets.",
    primaryCta: { label: "Book a Feasibility Discussion", href: "/contact" },
    overview: [
      "Organisations establishing a capability center in India need considerably more than office space and recruitment. They need a functioning delivery organisation: a defined operating model, engineering standards that hold, governance the parent business can rely on, and people who will still be there in three years.",
      "We support enterprises through setup, staffing and steady-state operation — from initial feasibility to a self-sufficient center running to your standards, with a defined path to your own management taking full control.",
    ],
    included: [
      { title: "Feasibility assessment and location strategy" },
      { title: "Operating model design and organisational structure" },
      { title: "Talent acquisition, onboarding and retention frameworks" },
      {
        title:
          "Engineering, quality assurance and business support team build-out",
      },
      { title: "Process, governance and compliance frameworks" },
      { title: "Infrastructure, workplace and security setup" },
      { title: "Knowledge transfer and transition management" },
      {
        title: "Performance measurement and reporting to the parent organisation",
      },
      { title: "Long-term operational support and scaling" },
    ],
    process: [
      {
        title: "Feasibility",
        detail: "cost model, talent availability and location assessment",
      },
      {
        title: "Design",
        detail: "operating model, structure and governance framework",
      },
      {
        title: "Establishment",
        detail: "infrastructure, compliance and initial hiring",
      },
      { title: "Build-out", detail: "team scaling against an agreed roadmap" },
      { title: "Transition", detail: "knowledge transfer and process handover" },
      {
        title: "Steady state",
        detail: "ongoing operation or handover to your own management",
      },
    ],
    whoItsFor: [
      "Enterprises evaluating an India-based capability center",
      "Organisations whose existing offshore arrangement is underperforming",
      "Companies seeking to consolidate distributed vendor relationships into a single owned center",
      "Businesses requiring engineering capacity at scale with direct control",
    ],
    faqs: [
      {
        question: "How long does establishment take?",
        answer:
          "A functioning initial team is typically operational within three to six months, depending on scale and compliance requirements. Full build-out follows an agreed roadmap.",
      },
      {
        question: "Do we retain control?",
        answer:
          "Yes. The center operates to your standards and governance. We can hand over full management entirely, on a timeline agreed at the outset.",
      },
      {
        question: "Why Raipur rather than a metropolitan city?",
        answer:
          "Materially lower operating and salary costs, meaningfully lower attrition, and access to a talent pool that metropolitan employers have not already saturated.",
      },
      {
        question: "Can you help us assess viability first?",
        answer:
          "Yes. Feasibility assessment is a standalone engagement, and it is the sensible starting point.",
      },
    ],
    related: ["cloud-platform", "digital-marketing", "saas"],
  },

  {
    slug: "data-analytics",
    name: "Data Engineering & Analytics",
    navName: "Data Engineering & Analytics",
    category: "Data",
    navGroup: "Scale",
    oneLine:
      "Pipelines, warehousing and reporting built on the data you already hold.",
    cardCopy:
      "Pipelines, warehousing and reporting that turn the operational data your business already holds into something your team can actually act on — rather than another dashboard nobody opens.",
    image: "/data-analytics.svg",
    accent: "text-cyan-500",
    metaTitle: "Data Engineering & Analytics Services | EZGlobal",
    metaDescription:
      "Data pipelines, warehousing, reporting and governance. We turn the operational data your business already holds into decisions your team can act on.",
    h1: "Decisions your data can already support.",
    heroSubline:
      "Pipelines, warehousing and reporting engineered so the numbers your team relies on are current, consistent and traceable back to source.",
    primaryCta: { label: "Book a Data Assessment", href: "/contact" },
    secondaryCta: { label: "Speak to an Engineer", href: "/contact" },
    overview: [
      "Most businesses are not short of data. They are short of data they trust. The figures sit across a billing system, a spreadsheet somebody maintains by hand, and an export that only runs when a particular person remembers to run it — and when two of those disagree, nobody can say which is right.",
      "We build the layer that resolves that: pipelines that collect from each source on a schedule you can see, a warehouse where a metric is defined once rather than recalculated differently in four places, and reporting that traces every number back to where it came from.",
      "The measure of this work is not how many charts it produces. It is whether your team stops exporting to a spreadsheet to check something — and whether the monthly reporting pack stops taking two days to assemble.",
    ],
    included: [
      {
        title: "Source review",
        detail:
          "what data exists today, where it lives, and where the same figure is being calculated more than once",
      },
      {
        title: "Pipeline engineering",
        detail:
          "scheduled, monitored collection from your operational systems, with failures that alert rather than pass silently",
      },
      {
        title: "Warehouse modelling",
        detail:
          "a structure designed for the questions you actually ask, not a copy of your source systems",
      },
      {
        title: "Metric definitions",
        detail:
          "each measure agreed and documented once, so two reports cannot quietly disagree",
      },
      {
        title: "Reporting and dashboards",
        detail: "built for the people who make the decision, not for the demo",
      },
      {
        title: "Data quality checks",
        detail:
          "validation, reconciliation and freshness monitoring with defined thresholds",
      },
      {
        title: "Access control and governance",
        detail:
          "row- and column-level permissions, audit trails and retention rules appropriate to your sector",
      },
      {
        title: "Migration from existing reporting",
        detail: "with figures reconciled against the old system before cutover",
      },
      {
        title: "Handover and training",
        detail:
          "documentation and enablement so your team can extend the model without us",
      },
    ],
    process: [
      {
        title: "Assessment",
        detail:
          "we map your sources, current reports and the decisions they are meant to support",
      },
      {
        title: "Model design",
        detail:
          "warehouse structure and metric definitions agreed in writing before build",
      },
      {
        title: "Pipeline build",
        detail: "collection, transformation and monitoring, source by source",
      },
      {
        title: "Reconciliation",
        detail:
          "new figures checked against your existing reporting until differences are explained",
      },
      {
        title: "Reporting rollout",
        detail: "dashboards delivered to each team with training",
      },
      {
        title: "Monitoring and iteration",
        detail: "data quality tracked continuously and the model extended as needed",
      },
    ],
    whoItsFor: [
      "Businesses where two reports on the same subject give different answers",
      "Teams assembling a monthly reporting pack by hand from several exports",
      "Organisations holding substantial operational data they cannot practically query",
      "Companies whose reporting depends on one person and their spreadsheet",
      "Businesses preparing for investment or audit scrutiny of their numbers",
    ],
    faqs: [
      {
        question: "Do we need a warehouse, or is reporting enough?",
        answer:
          "It depends on how many sources you have and how far they disagree. With a single system and a handful of reports, better reporting on what you already run is often the cheaper answer, and we will say so. A warehouse earns its cost once figures have to be reconciled across several systems.",
      },
      {
        question: "Will this replace the reports we have now?",
        answer:
          "Not until they agree. We run the new figures alongside your existing reporting and reconcile the differences before anything is switched off, so you can see exactly what changed and why.",
      },
      {
        question: "How do you handle sensitive data?",
        answer:
          "Access rules, retention periods and masking are agreed before any pipeline is built, and designed to your sector's requirements. Where data must remain within your own environment, we architect for that.",
      },
      {
        question: "Can our team maintain it afterwards?",
        answer:
          "Yes — that is the intent. The model and pipelines are documented, and we train your team to extend them. You are free to bring it in-house entirely, and we will support that transition.",
      },
      {
        question: "How long before we see something useful?",
        answer:
          "We deliberately deliver one meaningful report early, usually within the first few weeks, rather than waiting for the full model. It proves the pipeline works and gives you something to react to while the rest is built.",
      },
    ],
    related: ["ai-automation", "cloud-platform", "business-auto"],
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const navGroups: NavGroup[] = ["Build", "Automate", "Scale"];

export function servicesInGroup(group: NavGroup): Service[] {
  return services.filter((service) => service.navGroup === group);
}
