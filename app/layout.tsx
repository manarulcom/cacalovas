import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cacalovas - MUA Terbaik untuk Momen Spesialmu",
  description:
    "Cacalovas adalah Make Up Artist profesional yang melayani riasan pernikahan, wisuda, engagement, dan event di Banjarnegara, Wonosobo, Purwokerto.",
  keywords: [
    "Cacalovas",
    "MUA Purwokerto",
    "MUA Banjarnegara",
    "MUA Wonosobo",
  ],
  authors: [{ name: "Cacalovas" }],
  creator: "Cacalovas",
  verification: {
    google: "62zh0RrMM2ZuDJ9op72e_BPeVTI32x47LIS5I2vnlpA",
  },
  metadataBase: new URL("https://cacalovas.com"),
  alternates: { canonical: "https://cacalovas.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cacalovas.com",
    siteName: "Cacalovas",
    title: "Cacalovas - MUA Terbaik untuk Momen Spesialmu",
    description:
      "Cacalovas adalah Make Up Artist profesional yang melayani riasan pernikahan, wisuda, engagement, dan event di Banjarnegara, Wonosobo, Purwokerto.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Cacalovas Make Up Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cacalovas - MUA Terbaik untuk Momen Spesialmu",
    description:
      "Cacalovas adalah Make Up Artist profesional yang melayani riasan pernikahan, wisuda, engagement, dan event di Banjarnegara, Wonosobo, Purwokerto.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cacalovas.com",
    name: "Cacalovas",
    description:
      "Make Up Artist profesional melayani pernikahan, wisuda, prom night, engagement, dan event di Purwokerto, Banjarnegara, dan Wonosobo.",
    url: "https://cacalovas.com",
    telephone: "+6285166662347",
    image: "https://cacalovas.com/images/hero-bg.png",
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/cacalovas",
      "https://www.tiktok.com/@cacalovas",
    ],
    areaServed: [
      { "@type": "City", name: "Purwokerto" },
      { "@type": "City", name: "Banjarnegara" },
      { "@type": "City", name: "Wonosobo" },
    ],
    serviceType: [
      "Riasan Pengantin",
      "Riasan Wisuda",
      "Riasan Prom Night",
      "Riasan Engagement",
      "Riasan Event",
      "Riasan Siraman",
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
