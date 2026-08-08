import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/Service-Detail/ServiceDetail";
import { getService, services } from "@/data/services";
import { COMPANY, jsonLdScript } from "@/lib/company";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);

  if (!service) notFound();

  const index = services.findIndex((entry) => entry.slug === service.slug);
  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.category,
    description: service.metaDescription,
    url: `${COMPANY.url}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
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
    },
    areaServed: COMPANY.markets.map((market) => ({
      "@type": "Country",
      name: market,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: COMPANY.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${COMPANY.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${COMPANY.url}/services/${service.slug}`,
      },
    ],
  };

  const faqJsonLd =
    service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceJsonLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(faqJsonLd)}
        />
      )}
      <ServiceDetail service={service} related={related} index={index} />
    </>
  );
}
