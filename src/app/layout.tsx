import type { Metadata } from "next";
import { bricolage, fraunces } from "@/lib/fonts";
import { faqJsonLd, localBusinessJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "La Casa de Anna — Studio de design d'intérieur, Annecy",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "La Casa de Anna — Studio de design d'intérieur, Annecy",
    description:
      "Du premier croquis au dernier coussin. Studio de design d'intérieur clé-en-main au bord du lac d'Annecy.",
    type: "website",
    url: site.url,
    locale: "fr_FR",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Casa de Anna — Studio de design d'intérieur, Annecy",
    description: site.description,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${bricolage.variable}`}>
      <head>
        <link rel="preload" href="/assets/img/studio.jpg" as="image" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body className={`${fraunces.className} ${bricolage.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
