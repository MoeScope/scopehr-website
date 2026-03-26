import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ScopeHR | Ontario's Trusted HR Firm for Drivers, Trades & Industrial Staffing",
  description:
    "ScopeHR is Ontario's trusted HR firm specializing in logistics, transportation, manufacturing, and skilled trades staffing. Temporary, permanent, and temp-to-perm placements. Our talent is finding yours.",
  keywords:
    "HR firm Ontario, staffing Toronto, AZ drivers, DZ drivers, skilled trades, manufacturing staffing, logistics staffing, temp staffing Ontario, ScopeHR",
  authors: [{ name: "ScopeHR" }],
  openGraph: {
    title: "ScopeHR | Ontario's Trusted HR Firm for Drivers, Trades & Industrial Staffing",
    description:
      "Ontario's trusted HR firm for logistics, transportation, manufacturing, and skilled trades. We deliver the right people for the right job — fast.",
    url: "https://scopehr.ca",
    siteName: "ScopeHR",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScopeHR | Ontario's Trusted HR Firm",
    description:
      "Ontario's trusted HR firm for logistics, transportation, manufacturing, and skilled trades.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full`}
    >
      <head />
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
