/**
 * Canonical company details (NAP — name, address, phone).
 *
 * The content document is explicit that the telephone number, email address
 * and postal address must be byte-identical on every page and in every piece
 * of structured data; inconsistent NAP data measurably weakens local search
 * performance. Import from here rather than retyping any of it.
 */

/**
 * Production origin, used to build absolute URLs in structured data.
 *
 * TODO (client input required): confirm the final production domain. The
 * content document lists this as an outstanding input and uses
 * `ezglobaltechnologies.com` for email throughout, so that is the default.
 * Override with NEXT_PUBLIC_SITE_URL without touching code.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ezglobaltechnologies.com";

export const COMPANY = {
  name: "EZGlobal",
  legalName: "EZ Soft Tech",
  url: SITE_URL,
  telephone: "+91 89623 70822",
  /** E.164 form, for tel: links */
  telephoneHref: "tel:+918962370822",
  email: {
    general: "info@ezglobaltechnologies.com",
    careers: "careers@ezglobaltechnologies.com",
    support: "support@ezglobaltechnologies.com",
    privacy: "privacy@ezglobaltechnologies.com",
  },
  address: {
    streetAddress:
      "3rd Floor, Block E, LK Corporates Tower, New Dhamtari Road, Dumartarai",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492015",
    addressCountry: "IN",
  },
  /** Single-line form for footers and contact blocks */
  addressLine:
    "3rd Floor, Block E, LK Corporates Tower, New Dhamtari Road, Dumartarai, Raipur, Chhattisgarh 492015",
  markets: ["India", "United Kingdom", "United Arab Emirates", "United States"],
  description:
    "EZGlobal is a software engineering company headquartered in Raipur, Chhattisgarh. We build web platforms, mobile products, AI-enabled automation, commerce systems and cloud infrastructure for clients across India, the United Kingdom, the UAE and the United States.",
  /**
   * TODO (client input required): supply live profile URLs. The content
   * document is explicit that icons pointing at "#" read as an unfinished
   * site, so the footer renders nothing while this list is empty.
   */
  socialProfiles: [] as { label: string; href: string }[],
} as const;

/**
 * Serialises a JSON-LD object for `dangerouslySetInnerHTML`, escaping `<` so
 * that a stray HTML tag in the payload cannot break out of the script tag.
 */
export function jsonLdScript(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
