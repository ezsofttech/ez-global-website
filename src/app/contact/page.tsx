import type { Metadata } from "next";
import { Section1 } from "@/components/ContactUs-sections/Section-1";
import { Section2 } from "@/components/ContactUs-sections/Section-2";
import { Section3 } from "@/components/ContactUs-sections/Section-3";
import { COMPANY, jsonLdScript } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact EZGlobal | Software Engineering Company",
  description:
    "Contact EZGlobal in Raipur, Chhattisgarh for a free consultation on web platforms, mobile products, AI automation and enterprise software.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    url: COMPANY.url,
    telephone: COMPANY.telephone,
    email: COMPANY.email.general,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.streetAddress,
      addressLocality: COMPANY.address.addressLocality,
      addressRegion: COMPANY.address.addressRegion,
      postalCode: COMPANY.address.postalCode,
      addressCountry: COMPANY.address.addressCountry,
    },
    areaServed: COMPANY.markets.map((market) => ({
      "@type": "Country",
      name: market,
    })),
    // TODO (client input required): add `geo` and `openingHoursSpecification`
    // once coordinates and confirmed office hours are supplied.
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd)}
      />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}
