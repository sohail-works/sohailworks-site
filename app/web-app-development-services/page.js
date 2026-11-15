import dynamic from "next/dynamic";
import { FrontendCodeVisual } from "@/components/FrontendCodeVisual";
import { VisualReveal } from "@/components/VisualReveal";
import {
  Globe,
  Atom,
  Zap,
  Rocket,
  Cloud,
  ShoppingCart,
  Store,
  LayoutDashboard,
  Users,
  CalendarCheck,
  PenTool,
  ArrowRightLeft,
  Layers,
  Plug,
  Gauge,
  Search,
  LayoutTemplate,
  Smartphone,
  PanelTop,
  Wrench,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "Web App Development Services | Hire React Developer | SohailWorks",
  description:
    "Web app development services that ship fast. I build React & Next.js web apps, MVPs and dashboards for US & UK businesses. Clean code, on time.",
  alternates: {
    canonical: "https://www.sohailworks.com/web-app-development-services/",
  },
  openGraph: {
    title: "Web App Development Services | Hire React Developer | SohailWorks",
    description:
      "Web app development services that ship fast. I build React & Next.js web apps, MVPs and dashboards for US & UK businesses. Clean code, on time.",
    url: "https://www.sohailworks.com/web-app-development-services/",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development Services | Hire React Developer | SohailWorks",
    description:
      "Web app development services that ship fast. I build React & Next.js web apps, MVPs and dashboards for US & UK businesses. Clean code, on time.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web App Development Services",
    description:
      "Web app development services that ship fast. I build React & Next.js web apps, MVPs and dashboards for US & UK businesses. Clean code, on time.",
    url: "https://www.sohailworks.com/web-app-development-services/",
    serviceType: "Web App Development Services",
    provider: {
      "@type": "Person",
      name: "Sohail Ashraf",
      url: "https://www.sohailworks.com",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sohailworks.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web App Development Services",
        item: "https://www.sohailworks.com/web-app-development-services/",
      },
    ],
  },
];

const REACT_SERVICES = [
  {
    icon: Globe,
    title: "Web App Development",
    desc: "Custom web apps built with React & Next.js, from idea to launch.",
  },
  {
    icon: Atom,
    title: "React.js Development",
    desc: "Fast, modern interfaces built with React.js and reusable components.",
  },
  {
    icon: Zap,
    title: "Next.js Development",
    desc: "SEO-friendly Next.js websites and apps with server-side rendering.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Your idea validated fast, with a working MVP in weeks, not months.",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "SaaS products with subscriptions and billing, built to scale.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    desc: "Online stores that turn visitors into buyers, fast and easy to manage.",
  },
  {
    icon: Store,
    title: "Headless Shopify Stores",
    desc: "Headless Shopify storefronts on Next.js, fast, flexible and built to sell.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    desc: "Dashboards that show leads, sales and revenue at a glance.",
  },
  {
    icon: Users,
    title: "Customer Portals",
    desc: "Portals where your customers log in, track orders and manage accounts.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    desc: "Booking systems that fill your calendar while you do the work.",
  },
  {
    icon: PenTool,
    title: "Figma to React / Next.js",
    desc: "Your Figma design turned into pixel-perfect React code.",
  },
  {
    icon: ArrowRightLeft,
    title: "Next.js Migration",
    desc: "Move from WordPress or Webflow to Next.js without losing traffic.",
  },
  {
    icon: Layers,
    title: "Headless WordPress",
    desc: "WordPress content with a fast React frontend, best of both worlds.",
  },
  {
    icon: Plug,
    title: "API Integration",
    desc: "Your tools connected, with APIs and webhooks between your app and everything else.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Slow apps made fast, with Core Web Vitals, caching and code splitting.",
  },
  {
    icon: Search,
    title: "Next.js SEO",
    desc: "Technical SEO built in, with sitemaps, schema and clean URLs from day one.",
  },
  {
    icon: LayoutTemplate,
    title: "Responsive UI & Components",
    desc: "Interfaces that look right on every screen, built from reusable components.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    desc: "App-like experiences in the browser, installable, offline-ready and fast.",
  },
  {
    icon: PanelTop,
    title: "Landing Pages",
    desc: "High-converting landing pages that turn clicks into signups and sales.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Updates, fixes and improvements after launch, so your app stays healthy.",
  },
];

export default function WebAppDevelopmentServicesPage() {
  return (
    <>
      <main className="m-10 mx-auto w-full lg:max-w-7xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="m-8 grid grid-cols-1 items-center gap-12 text-center md:mt-18 md:grid-cols-2 md:text-left 2xl:mt-32">
            {/* Left column */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5 md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-normal text-[var(--primary)] md:text-xs md:tracking-widest">
                  React & Next.js Development
                </span>
              </div>
              {/* H1 */}
              <h1 className="font-display text-3xl font-normal capitalize leading-snug md:text-6xl md:leading-tight">
                Web App Development Services
              </h1>
              {/* Accent line */}
              <div className="mx-auto h-[3px] w-32 rounded-full bg-gradient-brand md:mx-0"></div>
              {/* Intro paragraph */}
              <p className="mx-auto max-w-[600px] text-base text-[var(--text-secondary)] md:mx-0 md:text-lg">
                Web app development services that actually ship. Most web apps never launch on time. They get stuck in slow timelines, bloated code and endless revisions, while your idea waits and competitors move ahead. I fix that. I build fast React and Next.js apps, MVPs, dashboards and booking tools that launch in weeks, not months, and keep growing with your business.
              </p>
              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://cal.com/sohail-qeijwg/book-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[var(--secondary)] px-5 py-4 text-xs font-medium text-white transition-all hover:-translate-y-1 hover:bg-[var(--secondary-hover)] active:-translate-y-1 active:bg-[var(--secondary-hover)] active:scale-95 md:px-6 md:py-3 md:text-base"
                >
                  Book a Free Call
                </a>
                <a
                  href="https://wa.me/447512281222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border-default)] px-5 py-4 text-xs font-medium text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] active:-translate-y-1 active:border-[var(--primary)] active:text-[var(--primary)] md:px-6 md:py-3 md:text-base"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
            {/* Right column — FrontendCodeVisual */}
           {/* Right column — FrontendCodeVisual */}
<div className="relative flex items-center justify-center">
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
  />
  <VisualReveal>
    <FrontendCodeVisual />
  </VisualReveal>
</div>

          </div>
        </section>

        {/* ── Services ── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT I DO / REACT & NEXT.JS SERVICES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              React & Next.js Services
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              From MVPs and SaaS products to ecommerce stores and dashboards, every kind of web app, built fast and built to grow.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {REACT_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="svc group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {/* Glow blob — stats jaisa */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-[350ms] group-hover:bg-[#6E73BE]/25"></div>
                  {/* Left bar — top se bottom draw */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 rounded-l-xl bg-[var(--primary)] transition-transform duration-[350ms] group-hover:scale-y-100"
                  />
                  {/* Icon tile */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-[350ms] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
