import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500"],
});

const tiro = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tattvashila.org"),
  title: {
    default: "Tattvashila — Awareness, integrated into life.",
    template: "%s — Tattvashila",
  },
  description:
    "Tattvashila is a quiet body of work for grounded, conscious living. Awareness, responsibility and discipline — integrated into ordinary life.",
  applicationName: "Tattvashila",
  authors: [{ name: "Tattvashila" }],
  keywords: [
    "Tattvashila",
    "awareness",
    "conscious living",
    "philosophy",
    "Bharatiya",
    "responsibility",
    "discipline",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Tattvashila",
    title: "Tattvashila — Awareness, integrated into life.",
    description:
      "A quieter way to live with awareness — without leaving the world you've built.",
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tattvashila — Awareness, integrated into life.",
    description:
      "A quieter way to live with awareness — without leaving the world you've built.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${tiro.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
