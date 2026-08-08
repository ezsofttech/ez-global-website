import type { Metadata } from "next";

/**
 * The page itself is a client component (it tracks the active section as you
 * scroll), so it cannot export metadata. This layout supplies it — without it
 * the page inherits the root title and reads as "Software Development Company"
 * in the browser tab and in search results.
 */
export const metadata: Metadata = {
  title: "Privacy Policy | EZGlobal",
  description:
    "How EZGlobal collects, uses, stores and protects personal information — and how to exercise your rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
