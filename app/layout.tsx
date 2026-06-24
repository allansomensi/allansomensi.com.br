import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SanityLive } from "@/sanity/lib/live";

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

const siteUrl = "https://allansomensi.com.br";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Allan Somensi",
    default: "Allan Somensi - Guitarrista",
  },
  description:
    "Site oficial de Allan Somensi. Aulas de guitarra e violão, materiais de estudo e informações sobre minha trajetória como músico.",
  keywords: [
    "Allan Somensi",
    "Professor de Guitarra",
    "Professor de Violão",
    "Aulas de Música",
    "Aulas de Guitarra",
    "Músico",
    "Guitarrista",
    "Bento Gonçalves",
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
      "Aulas de guitarra e violão. Confira meus materiais de estudo, agenda e trajetória musical.",
    url: siteUrl,
    siteName: "Allan Somensi",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    title: "Allan Somensi - Guitarrista",
    description: "Aulas de guitarra e violão, materiais de estudo e contato.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allan Somensi",
  url: siteUrl,
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
      lang="pt-br"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SanityLive />
        <Analytics />
      </body>
    </html>
  );
}
