import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";
import PageEffects from "@/components/PageEffects";
import { site } from "@/lib/site";
import "./globals.css";

// Self-hosted variable fonts (latin subset, from Google Fonts) — no network needed at build or runtime.
const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.woff2", style: "normal", weight: "400 600" },
    { path: "./fonts/Fraunces-Italic-Variable.woff2", style: "italic", weight: "400 600" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
const jakarta = localFont({
  src: [{ path: "./fonts/PlusJakartaSans-Variable.woff2", style: "normal", weight: "400 700" }],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Task Healthcare — Compassionate Home Care in Redbridge & London", template: "%s" },
  description:
    "CQC-rated Good home care across Redbridge and London. Domiciliary, live-in, respite, dementia and end-of-life care from a team with 50+ years of NHS experience.",
  icons: { icon: "/assets/logo-icon.png" },
  openGraph: { siteName: site.name, locale: "en_GB", type: "website", images: ["/assets/banner-3-1600.webp"] },
};

export const viewport: Viewport = { themeColor: "#0b1f3a", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`no-js ${fraunces.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Swap no-js → js before paint so scroll-reveal styles only apply when JS can reveal them. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.replace('no-js','js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Dock />
        <PageEffects />
      </body>
    </html>
  );
}
