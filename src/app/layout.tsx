import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar1 from "@/components/resizable-navbar-demo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { COMPANY, SITE_URL, jsonLdScript } from "@/lib/company";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software Development Company | EZGlobal",
  description:
    "EZGlobal engineers web platforms, mobile products, AI automation and commerce systems from Raipur, Chhattisgarh — for clients in India, UK, UAE and USA.",
  keywords:
    "software company in Raipur, website development company in Raipur, mobile app development company in Raipur, digital marketing company in Raipur, business automation Chhattisgarh, AI automation company India, IT company Raipur, web development Chhattisgarh",
  openGraph: {
    title: "Smarter strategy. Engineered with AI.",
    description:
      "A software engineering company headquartered in Raipur, building web, mobile, cloud and AI-enabled systems for clients across four markets.",
    type: "website",
  },
};

/**
 * Organization + LocalBusiness structured data, rendered site-wide.
 * Significant for local search visibility in Raipur.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${COMPANY.url}/#organization`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: COMPANY.url,
  description: COMPANY.description,
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
  ...(COMPANY.socialProfiles.length > 0
    ? { sameAs: COMPANY.socialProfiles.map((profile) => profile.href) }
    : {}),
  // TODO (client input required): add `geo` coordinates, `openingHours`,
  // `foundingDate` and `numberOfEmployees` once confirmed by the team.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <Toaster position="top-right" richColors />
        <SmoothScroll>
          <Navbar1 />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
