import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SanityLive } from "@/sanity/lib/live";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = site.url;

export const viewport: Viewport = {
  themeColor: "#131110",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Allan Somensi",
    default: "Allan Somensi - Guitarrista e professor de guitarra e violão",
  },
  description:
    "Site oficial de Allan Somensi. Aulas de guitarra e violão presenciais em Bento Gonçalves (RS) e online, tablaturas, backing tracks, presets e agenda de shows.",
  keywords: [
    "Allan Somensi",
    "Professor de Guitarra",
    "Professor de Violão",
    "Aulas de Música",
    "Aulas de Guitarra",
    "Músico",
    "Guitarrista",
    "Bento Gonçalves",
    "Tablaturas",
    "Backing Tracks",
    "Presets",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Allan Somensi - Guitarrista",
    description:
      "Aulas de guitarra e violão, produtos digitais para guitarristas e agenda de shows.",
    url: siteUrl,
    siteName: "Allan Somensi",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Somensi - Guitarrista",
    description: "Aulas de guitarra e violão, materiais de estudo e contato.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allan Somensi",
  url: siteUrl,
  email: `mailto:${site.email}`,
  sameAs: Object.values(site.socials),
  jobTitle: ["Guitarrista", "Professor de Música", "Músico"],
  knowsAbout: ["Guitarra", "Violão", "Música", "Teoria Musical"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bento Gonçalves",
    addressRegion: "RS",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="dark scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
