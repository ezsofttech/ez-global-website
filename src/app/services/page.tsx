import type { Metadata } from "next";
import { Section1 } from "@/components/Services-Sections/Section-1";
import { Section4 } from "@/components/Services-Sections/Section-4";
import { Section2 } from "@/components/Services-Sections/Section-2";
import { Section3 } from "@/components/Services-Sections/Section-3";
import { Section5 } from "@/components/Services-Sections/Section-5";
import { servicesFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { COMPANY, jsonLdScript } from "@/lib/company";

export const metadata: Metadata = {
  title: "Software Engineering Services | EZGlobal",
  description:
    "EZGlobal delivers web platform engineering, mobile products, applied AI, commerce systems and process automation from Raipur — for India, UK, UAE and USA.",
  keywords: [
    "software company in Raipur",
    "website development company in Raipur",
    "mobile app development company in Raipur",
    "business automation Chhattisgarh",
    "AI automation company India",
    "digital marketing company in Raipur",
    "custom software development Chhattisgarh",
    "SaaS development India",
    "e-commerce development Raipur",
    "cloud engineering services",
    "Global Capability Center setup India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Engineering Services That Move Business Forward | EZGlobal",
    description:
      "From strategy to deployment, EZGlobal builds web, mobile, AI and cloud systems for businesses across India, the UK, the UAE and the USA.",
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: servicesFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${COMPANY.url}/services`,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "EZGlobal engineering services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${COMPANY.url}/services/${service.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemListJsonLd)}
      />

      <Section1 />
      <Section4 />
      <Section2 />
      <Section3 />
      <Section5 />
    </>
  );
}
