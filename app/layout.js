import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import WhatsappButton from "@/components/WhatsAppButton";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.woff2",
  display: "swap",
  variable: "--font-display",
  weight: "300 700",
});

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.woff2",
  display: "swap",
  variable: "--font-body",
  weight: "200 800",
});

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.woff2",
  display: "swap",
  variable: "--font-mono",
  weight: "100 800",
});

export const metadata = {
  metadataBase: new URL("https://www.sohailworks.com"),
  title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
  description: "GoHighLevel expert for US & UK small businesses: GHL funnels, automation & CRM, plus WordPress sites and Next.js apps. 5+ years, 100+ orders. Get a quote.",
    alternates: {
    canonical: "https://www.sohailworks.com/",
  },
  openGraph: {
    title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
    description: "GoHighLevel expert for US & UK small businesses: GHL funnels, automation & CRM, plus WordPress sites and Next.js apps. 5+ years, 100+ orders. Get a quote.",
    url: "https://www.sohailworks.com",
    siteName: "SohailWorks",
    type: "website",
    images: [
      {
        url: "https://www.sohailworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SohailWorks — GoHighLevel Expert, WordPress & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
    description: "GoHighLevel expert for US & UK small businesses: GHL funnels, automation & CRM, plus WordPress sites and Next.js apps. 5+ years, 100+ orders. Get a quote.",
    images: ["https://www.sohailworks.com/og-image.jpg"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sohail Ashraf",
    alternateName: "SohailWorks",
    jobTitle: "GoHighLevel Expert",
    knowsAbout: ["GoHighLevel", "WordPress", "React", "Next.js"],
    areaServed: ["US", "GB"],
    url: "https://www.sohailworks.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SohailWorks",
    url: "https://www.sohailworks.com",
    logo: "https://www.sohailworks.com/icon.png",
    description:
      "GoHighLevel expert for US & UK small businesses: GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps.",
    email: "sohail@sohailworks.com",
    telephone: "+44 7512 281222",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 North Street",
      addressLocality: "Falkirk",
      postalCode: "FK2 7NF",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.linkedin.com/in/sohailworksdotcom",
      "https://github.com/sohail-works",
      "https://www.fiverr.com/sohailr20",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 7512 281222",
      email: "sohail@sohailworks.com",
      contactType: "sales",
      areaServed: ["US", "GB"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SohailWorks",
    url: "https://www.sohailworks.com",
    description:
      "GoHighLevel expert for US & UK small businesses: GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps.",
    email: "sohail@sohailworks.com",
    telephone: "+44 7512 281222",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3 North Street",
      addressLocality: "Falkirk",
      postalCode: "FK2 7NF",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/sohailworksdotcom",
      "https://github.com/sohail-works",
      "https://www.fiverr.com/sohailr20",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GoHighLevel Expert Services",
            url: "https://www.sohailworks.com/gohighlevel-expert",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "WordPress Development Services",
            url: "https://www.sohailworks.com/wordpress-development-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web App Development Services",
            url: "https://www.sohailworks.com/web-app-development-services",
          },
        },
      ],
    },
  },
];



export default function RootLayout({ children }) {
  return (
<html lang="en" data-scroll-behavior="smooth" className={` scroll-smooth ${spaceGrotesk.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
      <Navbar />
      <CustomCursor />
      {children}
      <WhatsappButton />
      </body>
    </html>
  );
}
