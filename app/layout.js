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
  metadataBase: new URL("https://sohailworks.com"),
  title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
  description: "GoHighLevel expert for US & UK small businesses — GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps. 5+ years, 100+ orders.",
    alternates: {
    canonical: "https://sohailworks.com",
  },
  openGraph: {
    title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
    description: "GoHighLevel expert for US & UK small businesses — GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps. 5+ years, 100+ orders.",
    url: "https://sohailworks.com",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SohailWorks | GoHighLevel Expert, WordPress & Next.js Developer",
    description: "GoHighLevel expert for US & UK small businesses — GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps. 5+ years, 100+ orders.",
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
    url: "https://sohailworks.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SohailWorks",
    url: "https://sohailworks.com",
    logo: "https://sohailworks.com/icon.png",
    description:
      "GoHighLevel expert for US & UK small businesses — GHL funnels, automation & CRM, plus WordPress websites and React/Next.js apps.",
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
      "https://www.linkedin.com/in/sohailworks",
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
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's the process like when I start working with you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple — we start with a free call to understand your goals, then I share a clear plan, timeline, and price. Once you approve, I build, you review, and we launch. You always know what's happening at every step.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free consultation call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Book a free call and we'll discuss your project, your goals, and the best way to build it — no pressure, no obligation.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most WordPress websites take 1–2 weeks, funnels about a week, and custom React / Next.js apps 2–4 weeks, depending on scope. You'll get a clear timeline before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build or redesign my WordPress website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I build fast, SEO-friendly WordPress websites from scratch, and I redesign existing sites that look outdated or load slowly. Every site is mobile-friendly and built to turn visitors into customers.",
        },
      },
      {
        "@type": "Question",
        name: "What can GoHighLevel do for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GoHighLevel brings your funnels, CRM, email, SMS, and bookings into one place. I set up funnels that capture leads, automations that follow up instantly, and pipelines that keep every lead organised — so no enquiry slips through.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build AI automations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I set up AI chatbots that answer customer questions, automations that follow up with leads, and workflows that save hours of manual work — all connected to your website or GoHighLevel.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a GoHighLevel setup cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope — a basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I'll give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with roofers, HVAC, plumbers and other local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I mainly work with local service businesses in the US & UK: roofers, HVAC, plumbers, med spas, cleaning, builders and electricians. If your business runs on leads, bookings and follow-ups, GoHighLevel fits.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a custom app with React / Next.js?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For anything beyond a standard website — dashboards, booking systems, custom tools — I build fast, modern apps with React and Next.js, tailored exactly to how your business works.",
        },
      },
      {
        "@type": "Question",
        name: "Can you set up a WooCommerce store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I build WooCommerce stores with simple checkout, secure payments, and easy product management — so you can start selling online without the technical headache.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I accept bank transfer, PayPal, and card payments, with a simple schedule we agree on before starting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide support after the website goes live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — I stay available after launch to fix any issues and help with small updates and provide free support for 2 months. I also offer monthly maintenance plans for updates, backups, and ongoing changes.",
        },
      },
    ],
  },
];



export default function RootLayout({ children }) {
  return (
    <html lang="en"  className= {` scroll-smooth ${spaceGrotesk.variable} ${jakarta.variable} ${jetbrains.variable}`}>
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
