import type { Metadata } from "next";

/**
 * The page itself is a client component (it tracks the active section as you
 * scroll), so it cannot export metadata. This layout supplies it — without it
 * the page inherits the root title and reads as "Software Development Company"
 * in the browser tab and in search results.
 */
export const metadata: Metadata = {
  title: "Terms of Service | EZGlobal",
  description:
    "The terms governing use of the EZGlobal website and the provision of our engineering and growth services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
