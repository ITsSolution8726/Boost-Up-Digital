import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
// import FloatingCTA from "@/components/site/FloatingCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Script from "next/script";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://boostupdigital.co.in "),

  title: {
    default: "Boost Up Digital — Lead-Focused Digital Marketing Agency",
    template: "%s | Boost Up Digital",
  },

  description:
    "Boost Up Digital is a modern digital marketing and entertainment studio based in Singur, Hooghly, WB. We help brands grow through SEO, SMM, Meta Ads, Google Ads, website design, ad films, TVCs, and cinematic brand storytelling.",

  keywords: [
    "Boost Up Digital",
    "Digital Marketing Agency",
    "SEO Services",
    "Social Media Marketing",
    "Meta Ads Agency",
    "Google Ads Expert",
    "Lead Generation Agency",
    "Website Design Company",
    "Boost Up Entertainment",
    "TVC Production",
    "Ad Film Production",
    "Short Film Production",
    "Digital Marketing Hooghly",
    "Digital Marketing West Bengal",
    "Marketing Agency India",
  ],

  authors: [{ name: "Boost Up Digital" }],

  creator: "Boost Up Digital",

  publisher: "Boost Up Digital",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://boostupdigital.co.in ",

    siteName: "Boost Up Digital",

    title: "Boost Up Digital — SEO, Ads, Social Media & Entertainment Studio",

    description:
      "Lead-focused digital marketing agency helping businesses grow through SEO, Meta Ads, Google Ads, social media marketing, web design, TVCs, ad films and cinematic storytelling.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Boost Up Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Boost Up Digital",

    description:
      "Performance marketing, creative storytelling and cinematic ad films that help brands grow faster.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/logo.webp",
        media: "(prefers-color-scheme: light)",
      },

      {
        url: "/logo.webp",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">
        {/* Google Analytics */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",

              name: "Malhotra's Tour & Travel",

              url: "https://malhotrastourandtravel.in/", // change if needed

              logo: "https://malhotrastourandtravel.in//logo.jpeg",

              image: "https://malhotrastourandtravel.in//og-image.jpg",

              description:
                "Premium handcrafted travel experiences across India including Kashmir, Manali, Shimla, Kedarnath and more.",

              telephone: "+91 9211690364",

              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },

              sameAs: [
                "https://www.instagram.com/malhotrastourandtravel",
              ],

              areaServed: {
                "@type": "Country",
                name: "India",
              },

              serviceType: [
                "Tour Packages",
                "Holiday Planning",
                "Hotel Booking",
                "Travel Consultation",
                "Group Tours",
              ],
            }),
          }}
        /> */}
        <Header />

        {children}
        <Footer />
        {/* <FloatingCTA /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
