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
  title: "Tattvashila — Awareness, integrated into life.",
  description:
    "Tattvashila is a quiet body of work for grounded, conscious living. Awareness, responsibility and discipline — integrated into ordinary life.",
  openGraph: {
    title: "Tattvashila",
    description: "Awareness, integrated into life.",
    type: "website",
  },
  robots: { index: true, follow: true },
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
