import dynamic from "next/dynamic";
import { FrontendCodeVisual } from "@/components/FrontendCodeVisual";
import { VisualReveal } from "@/components/VisualReveal";
import FaqAccordion from "@/components/FaqAccordion";
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
  Phone,
  ClipboardList,
  Hammer,
  Headphones,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "Web App Development Services | SohailWorks",
  description:
    "Web app development services for US & UK businesses: React & Next.js web apps, MVPs and dashboards that ship fast. Clean code, on time.",
  alternates: {
    canonical: "https://www.sohailworks.com/web-app-development-services",
  },
  openGraph: {
    title: "Web App Development Services | SohailWorks",
    description:
      "Web app development services for US & UK businesses: React & Next.js web apps, MVPs and dashboards that ship fast. Clean code, on time.",
    url: "https://www.sohailworks.com/web-app-development-services",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development Services | SohailWorks",
    description:
      "Web app development services for US & UK businesses: React & Next.js web apps, MVPs and dashboards that ship fast. Clean code, on time.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web App Development Services",
    description:
      "Web app development services for US & UK businesses: React & Next.js web apps, MVPs and dashboards that ship fast. Clean code, on time.",
    url: "https://www.sohailworks.com/web-app-development-services",
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
        item: "https://www.sohailworks.com/web-app-development-services",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a custom web app cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A simple MVP costs less than a full SaaS product with subscriptions and billing. Tell me what you need on a free call and I'll give you a fixed quote before we start.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a web app take to build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom React and Next.js apps take 2–4 weeks, and larger products with dashboards or payments take longer. You'll get a clear timeline before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Can you build a custom app with React / Next.js?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For anything beyond a standard website, dashboards, booking systems, custom tools, I build fast, modern apps with React and Next.js, tailored exactly to how your business works.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a web app and a WordPress website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A WordPress website is best for content, blogs and simple stores. A custom web app fits when you need logins, dashboards, bookings or tools that work the way your business works. If you are not sure, tell me what you need on a free call and I will tell you honestly which one fits.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide support after the app goes live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I stay available after launch to fix issues and help with updates. I also offer maintenance plans for updates, fixes and improvements, so your app stays healthy.",
        },
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
    desc: "SEO-friendly Next.js development services with server-side rendering.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "MVP development services that validate your idea fast, with a working MVP in weeks, not months.",
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
    desc: "Hire Next.js developer help to move from WordPress or Webflow to Next.js without losing traffic.",
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

// ─── ─── How we work steps ─── ───
const HOW_STEPS = [
  {
    icon: Phone,
    num: "01",
    title: "Free call",
    desc: "We start with a free call to understand your goals and how your business wins jobs today.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Plan",
    desc: "You get a clear plan with a timeline and a fixed price in writing before any work starts.",
  },
  {
    icon: Hammer,
    num: "03",
    title: "Build",
    desc: "I build your web app, and you review it at each step.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch",
    desc: "I test everything, go live, and show you how to use it.",
  },
  {
    icon: Headphones,
    num: "05",
    title: "Support",
    desc: "I stay available after launch to fix issues and help with updates.",
  },
];

// ─── ─── Web App FAQ ─── ───
const APP_FAQS = [
  {
    q: "How much does a custom web app cost?",
    a: "It depends on the scope. A simple MVP costs less than a full SaaS product with subscriptions and billing. Tell me what you need on a free call and I'll give you a fixed quote before we start.",
  },
  {
    q: "How long does a web app take to build?",
    a: "Custom React and Next.js apps take 2–4 weeks, and larger products with dashboards or payments take longer. You'll get a clear timeline before we start.",
  },
  {
    q: "Can you build a custom app with React / Next.js?",
    a: "Yes. For anything beyond a standard website, dashboards, booking systems, custom tools, I build fast, modern apps with React and Next.js, tailored exactly to how your business works.",
  },
  {
    q: "What is the difference between a web app and a WordPress website?",
    a: "A WordPress website is best for content, blogs and simple stores. A custom web app fits when you need logins, dashboards, bookings or tools that work the way your business works. If you are not sure, tell me what you need on a free call and I will tell you honestly which one fits.",
  },
  {
    q: "Do you provide support after the app goes live?",
    a: "Yes, I stay available after launch to fix issues and help with updates. I also offer maintenance plans for updates, fixes and improvements, so your app stays healthy.",
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
                Web app development services build custom web apps for your
                business: React and Next.js apps, MVPs, dashboards and booking
                tools. I build fast web apps for small businesses in the US and
                UK, from the first screen to launch and beyond, so your app
                works the way your business works instead of forcing you into a
                template.
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
            {/* Right column - FrontendCodeVisual */}
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
              From MVPs and SaaS products to ecommerce stores and dashboards, every kind of web app, built fast and built to grow. Hire React developer expertise without the agency price.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {REACT_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="svc group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {/* Glow blob - stats jaisa */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-[350ms] group-hover:bg-[#6E73BE]/25"></div>
                  {/* Left bar - top se bottom draw */}
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

        {/* ── Who it's for ── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHO IT&apos;S FOR
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Who It&apos;s For
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              I build custom web apps for small businesses in the US and UK.
              These are the businesses I work with most.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Startups
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Startups need an MVP that proves the idea fast. I build
                  working MVPs in weeks, not months, so you can show real
                  users a real product and get feedback before spending more.
                  Your MVP is built to grow into the full product.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  SaaS Founders
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  SaaS founders need subscriptions, billing and user accounts
                  that just work. I build SaaS products with logins, payments
                  and dashboards, so you can launch, charge and grow without
                  rebuilding later.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Dashboards &amp; Portals
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Businesses that run on spreadsheets need one place to see it
                  all. I build custom dashboards and customer portals where
                  your team sees leads, sales and orders at a glance, and your
                  customers log in to track and manage their accounts.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Businesses Outgrowing WordPress
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Some businesses outgrow WordPress. When you need logins,
                  custom tools or a booking system that WordPress plugins
                  cannot do well, I build a custom React or Next.js app, or
                  move you from WordPress without losing traffic.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:col-span-2">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Other Businesses
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Don&apos;t see your business here? If you need an app that
                  works the way your business works, a custom web app fits.
                  Tell me what you need and I will tell you honestly whether
                  an app or a WordPress site is right for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related services ── */}
        <p className="mx-auto max-w-6xl px-6 text-[var(--text-secondary)]">
          Need automation behind your app? See my{" "}
          <a
            href="https://www.sohailworks.com/gohighlevel-expert"
            className="font-medium text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-4 transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
          >
            GoHighLevel expert services
          </a>
          .
        </p>
        <p className="mx-auto max-w-6xl px-6 pt-2 text-[var(--text-secondary)]">
          Prefer a classic WordPress site instead of a custom app? See my{" "}
          <a
            href="https://www.sohailworks.com/wordpress-development-services"
            className="font-medium text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-4 transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
          >
            WordPress development services
          </a>
          .
        </p>

        {/* ── How you work ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              HOW WE WORK
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              How We Work Together
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Share your requirements on a free call and I&apos;ll give you a
              fixed quote before we start, no hourly billing.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HOW_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#6E73BE]/60"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-300 group-hover:bg-[#6E73BE]/25"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6E73BE]/30 bg-[#6E73BE]/10 text-[#6E73BE] transition-transform duration-300 group-hover:scale-110">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                        {step.num}
                      </p>
                      <p className="text-base font-medium text-[var(--text-primary)]">
                        {step.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── One real example ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              ONE REAL EXAMPLE
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              This website is a Next.js app I built
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              This website, sohailworks.com, is a Next.js app I built myself,
              with App Router, Tailwind and SEO built in from day one. It runs
              on the same stack I use for client apps.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Web App Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={APP_FAQS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Ready to build an app that grows with your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me about your business and I will send a clear plan,
              timeline and price.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://cal.com/sohail-qeijwg/book-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[var(--secondary)] px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:bg-[var(--secondary-hover)] active:-translate-y-1 active:bg-[var(--secondary-hover)] active:scale-95"
              >
                Book a Free Call
              </a>
              <a
                href="https://wa.me/447512281222"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[var(--border-default)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] active:-translate-y-1 active:border-[var(--primary)] active:text-[var(--primary)]"
              >
                WhatsApp Me
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
