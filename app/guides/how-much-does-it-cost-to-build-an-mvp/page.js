// Step 7 - Guide 9: How much does it cost to build an MVP?
// Route: app/guides/how-much-does-it-cost-to-build-an-mvp/page.js
// Destination file: app/guides/how-much-does-it-cost-to-build-an-mvp/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { MvpCostVisual } from "@/components/MvpCostVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Target,
  Users,
  TrendingUp,
  Layers,
  Palette,
  CreditCard,
  Plug,
  Smartphone,
  Scissors,
  FileCheck,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "How Much Does It Cost to Build an MVP? | SohailWorks",
  description:
    "How much does it cost to build an MVP? It depends on scope, features and integrations. Learn what changes the price, what a typical MVP includes and how to keep the cost down.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/how-much-does-it-cost-to-build-an-mvp",
  },
  openGraph: {
    title:
      "How Much Does It Cost to Build an MVP? | SohailWorks",
    description:
      "How much does it cost to build an MVP? It depends on scope, features and integrations. Learn what changes the price, what a typical MVP includes and how to keep the cost down.",
    url: "https://www.sohailworks.com/guides/how-much-does-it-cost-to-build-an-mvp",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Much Does It Cost to Build an MVP? | SohailWorks",
    description:
      "How much does it cost to build an MVP? It depends on scope, features and integrations. Learn what changes the price, what a typical MVP includes and how to keep the cost down.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does It Cost to Build an MVP?",
    description:
      "How much does it cost to build an MVP? It depends on scope, features and integrations. Learn what changes the price, what a typical MVP includes and how to keep the cost down.",
    author: {
      "@type": "Person",
      name: "Sohail Ashraf",
      url: "https://www.sohailworks.com",
    },
    publisher: {
      "@type": "Person",
      name: "Sohail Ashraf",
      url: "https://www.sohailworks.com",
    },
    mainEntityOfPage:
      "https://www.sohailworks.com/guides/how-much-does-it-cost-to-build-an-mvp",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "How Much Does It Cost to Build an MVP?",
        item: "https://www.sohailworks.com/guides/how-much-does-it-cost-to-build-an-mvp",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to build an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A simple MVP with a few core screens costs far less than a platform with payments, accounts and integrations. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The smallest set of features real customers can use: usually accounts or guest access, the core action your app exists for, like booking or ordering, and a simple way to contact you. Everything else waits for version two.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an MVP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple MVP usually takes a few weeks, and a bigger one with payments and integrations takes longer. You should get a clear timeline with the quote, before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between an MVP and a full product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An MVP proves the idea with real customers using the core features only. A full product adds the rest: more features, more screens, more integrations. Build the MVP first, learn from real use, then spend on the full product.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an MVP or a full app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you are testing a new idea, start with an MVP. It costs less, launches sooner and tells you what customers actually want. If you already know exactly what your customers need, because you run the business every day, a fuller build can make sense. A free call will settle it.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const MVP_MEANING = [
  {
    icon: Target,
    title: "One problem, solved well",
    desc: "Your MVP should solve one clear problem for one clear customer. A roofer's customers booking a quote visit. A med spa's clients booking a treatment. Everything else can wait for version two.",
  },
  {
    icon: Users,
    title: "Real customers, real use",
    desc: "If nobody outside your team can use it, it is not an MVP, it is a demo. The point is to watch real customers use it, learn what they actually need, and then spend money on the right features.",
  },
  {
    icon: TrendingUp,
    title: "Built to grow, not to throw away",
    desc: "A good MVP is built on a solid base, so version two adds features instead of rebuilding everything. Cheap shortcuts that need a full rebuild later are the most expensive way to start.",
  },
];

const COST_FACTORS = [
  {
    icon: Layers,
    title: "How many features",
    desc: "Each feature costs time to build and test. A login page, a booking calendar and a payment page are three features, not one. A booking flow with a calendar, reminders and a payment page is a bigger job than a simple contact form, and the quote should show that difference clearly. The fastest way to cut cost is to cut the feature list to what customers truly need on day one.",
  },
  {
    icon: Palette,
    title: "Design and screens",
    desc: "A clean design with a handful of screens costs far less than a custom design with dozens of screens and animations. For an MVP, clear and fast beats fancy every time. Keep the first version clean and simple, and save the custom illustrations and animations for later.",
  },
  {
    icon: CreditCard,
    title: "Payments and accounts",
    desc: "Taking payments, managing user accounts and sending automated emails all add real work. They are worth it when the business needs them, but they are the first thing to question if the budget is tight.",
  },
  {
    icon: Plug,
    title: "Integrations",
    desc: "Connecting to GoHighLevel, Stripe, a calendar or your existing tools adds cost per connection. List the tools you already use before the build starts, so nothing is a surprise later.",
  },
];

const KEEP_LEAN = [
  {
    icon: Smartphone,
    title: "Start with one platform",
    desc: "Build for the web first, where every customer can reach it from a link. Your customers do not need to install anything, they just open a link. A phone app for both app stores can come later, once the web version proves people want it.",
  },
  {
    icon: Scissors,
    title: "Cut version two features now",
    desc: "Write the full wish list, then cut it in half for version one. Anything that is nice to have, not need to have, waits. This one decision saves more money than any other.",
  },
  {
    icon: FileCheck,
    title: "Get a fixed quote, not hourly billing",
    desc: "Hourly billing turns a small MVP into an open bill. A fixed quote means you know the price before work starts. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

const GUIDE_FAQS = [
  {
    q: "How much does it cost to build an MVP?",
    a: "It depends on the scope. A simple MVP with a few core screens costs far less than a platform with payments, accounts and integrations. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "What is included in an MVP?",
    a: "The smallest set of features real customers can use: usually accounts or guest access, the core action your app exists for, like booking or ordering, and a simple way to contact you. Everything else waits for version two.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "A simple MVP usually takes a few weeks, and a bigger one with payments and integrations takes longer. You should get a clear timeline with the quote, before work starts.",
  },
  {
    q: "What is the difference between an MVP and a full product?",
    a: "An MVP proves the idea with real customers using the core features only. A full product adds the rest: more features, more screens, more integrations. Build the MVP first, learn from real use, then spend on the full product.",
  },
  {
    q: "Do I need an MVP or a full app?",
    a: "If you are testing a new idea, start with an MVP. It costs less, launches sooner and tells you what customers actually want. If you already know exactly what your customers need, because you run the business every day, a fuller build can make sense. A free call will settle it.",
  },
];

export default function HowMuchDoesItCostToBuildAnMvpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="m-10 mx-auto w-full lg:max-w-7xl">
        {/* -- Hero -- */}
        <section className="relative pb-16 pt-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
                GUIDES / WEB APPS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                How Much Does It Cost to Build an MVP?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                An MVP, a minimum viable product, is the smallest version of
                your app that real customers can actually use. Not a demo,
                not a slide deck, a working product with the one or two
                features that matter most. The cost question has no single
                number, because an MVP can be a simple booking tool or a
                full platform with payments, accounts and dashboards.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains what changes the price, what a typical
                MVP includes and how to keep the cost down. It is written
                for business owners in the US and UK who have an idea for
                an app, a booking tool, a customer portal or a service
                platform, and want a straight answer before they spend
                anything.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <MvpCostVisual />
            </div>
          </div>
        </section>

        {/* -- What an MVP is -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE BASICS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What an MVP Actually Is
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Most people overbuild their first version. An MVP does the
              opposite. It answers one question: will real customers use
              this?
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MVP_MEANING.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="text-base font-medium text-[var(--text-primary)]">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Cost factors -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE COST FACTORS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What Changes the Price
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Four things decide most of the cost. Change any one of them
              and the price moves with it.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {COST_FACTORS.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="text-base font-medium text-[var(--text-primary)]">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- Keep it lean -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              KEEP IT LEAN
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              How to Keep the Cost Down
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Three decisions decide whether your MVP stays affordable.
              Get these right and the quote stays lean without cutting what
              customers need.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {KEEP_LEAN.map((item) => (
                <div
                  key={item.title}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#6E73BE]/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6E73BE]/30 bg-[#6E73BE]/10 text-[#6E73BE] transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="text-base font-medium text-[var(--text-primary)]">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {item.desc}
                  </p>
                </div>
              ))}
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60">
                <p className="text-base font-medium text-[var(--text-primary)]">
                  Want a fixed price for your MVP?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me what your MVP needs to do and I will give you a
                  fixed quote and a clear scope. See how I work on my{" "}
                  <a
                    href="/web-app-development-services"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    web app development services
                  </a>{" "}
                  page first.
                </p>
                <div className="mt-6">
                  <a
                    href="https://cal.com/sohail-qeijwg/book-a-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[var(--secondary)] px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:bg-[var(--secondary-hover)] active:-translate-y-1 active:bg-[var(--secondary-hover)] active:scale-95"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              MVP Cost Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={GUIDE_FAQS} />
            </div>
          </div>
        </section>

        {/* -- Final CTA -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Ready to build your MVP?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what it needs to do and I will send a clear scope,
              timeline and fixed price.
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
