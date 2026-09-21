import type { Metadata } from "next";
import { Philosopher, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

// Single font for the whole app, per the "old archive" design direction.
// Exposed as a CSS variable so globals.css controls where it's applied,
// rather than hard-coding a className on every element.
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-philosopher",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
});

export const metadata: Metadata = {
  title: "Hush House Memory",
  description: "The librarian's memory ledger.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${philosopher.variable} ${notoSerifSC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
