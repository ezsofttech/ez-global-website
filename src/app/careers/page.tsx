import type { Metadata } from "next";
import { CareersContent } from "@/components/Careers-Sections/CareersContent";
import { roles } from "@/data/roles";
import { COMPANY, jsonLdScript } from "@/lib/company";

export const metadata: Metadata = {
  title: "Careers at EZGlobal | Software Jobs in India",
  description:
    "Join EZGlobal in Raipur, Chhattisgarh. Engineering, design and growth roles working on products for clients across India, the UK, the UAE and the USA.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  /**
   * JobPosting structured data makes listings eligible for Google Jobs — the
   * single highest-return change available on this page.
   *
   * `datePosted` and `validThrough` are intentionally absent: publishing a
   * generated date would misrepresent when each role actually opened. Add real
   * dates to src/data/roles.ts and surface them here once confirmed.
   */
  const jobPostings = roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: `${role.description} Requirements: ${role.requirements.join("; ")}.`,
    employmentType: role.type === "Full-time" ? "FULL_TIME" : "INTERN",
    hiringOrganization: {
      "@type": "Organization",
      name: COMPANY.name,
      sameAs: COMPANY.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.streetAddress,
        addressLocality: COMPANY.address.addressLocality,
        addressRegion: COMPANY.address.addressRegion,
        postalCode: COMPANY.address.postalCode,
        addressCountry: COMPANY.address.addressCountry,
      },
    },
    ...(role.experience
      ? { experienceRequirements: role.experience }
      : {}),
    ...(role.salaryRange ? { baseSalary: role.salaryRange } : {}),
  }));

  return (
    <>
      {jobPostings.map((posting) => (
        <script
          key={posting.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(posting)}
        />
      ))}
      <CareersContent />
    </>
  );
}
