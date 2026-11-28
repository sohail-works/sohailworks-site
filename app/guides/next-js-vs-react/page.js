// Step 7 - Guide 7: Next.js vs React: which one should your business choose?
// Route: app/guides/next-js-vs-react/page.js
// Destination file: app/guides/next-js-vs-react/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { NextVsReactVisual } from "@/components/NextVsReactVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Atom,
  Layers,
  Zap,
  SlidersHorizontal,
  Wallet,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "Next.js vs React: Which One Should Your Business Choose? | SohailWorks",
  description:
    "Next.js vs React, explained in plain words for business owners. Which one is faster, better for Google and cheaper to build with, and which one fits your website or web app?",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/next-js-vs-react",
  },
  openGraph: {
    title:
      "Next.js vs React: Which One Should Your Business Choose? | SohailWorks",
    description:
      "Next.js vs React, explained in plain words for business owners. Which one is faster, better for Google and cheaper to build with, and which one fits your website or web app?",
    url: "https://www.sohailworks.com/guides/next-js-vs-react",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js vs React: Which One Should Your Business Choose? | SohailWorks",
    description:
      "Next.js vs React, explained in plain words for business owners. Which one is faster, better for Google and cheaper to build with, and which one fits your website or web app?",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js vs React: Which One Should Your Business Choose?",
    description:
      "Next.js vs React, explained in plain words for business owners. Which one is faster, better for Google and cheaper to build with, and which one fits your website or web app?",
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
      "https://www.sohailworks.com/guides/next-js-vs-react",
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
        name: "Next.js vs React",
        item: "https://www.sohailworks.com/guides/next-js-vs-react",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Next.js and React?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React is a library for building user interfaces, the buttons, forms and screens your customers use. Next.js is a framework built on React that adds fast page loading, better Google visibility, image handling and hosting. In short, React is the engine and Next.js is the full car built around it.",
        },
      },
      {
        "@type": "Question",
        name: "Is Next.js better than React for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in most cases. Next.js prepares pages on the server, so Google can read the full content straight away and visitors see the page faster. React on its own loads content in the browser, which Google can struggle to read. If Google traffic matters to your business, Next.js has the advantage.",
        },
      },
      {
        "@type": "Question",
        name: "Which is cheaper to build with, Next.js or React?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A simple business website costs about the same in either one. For a larger app, Next.js can cost less because many standard features are already included, while React needs them built by hand. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I switch from React to Next.js later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Because Next.js is built on React, a React app can usually be moved over without starting from zero. It still takes real work, so it is cheaper to pick the right stack at the start, but you are never locked in forever.",
        },
      },
      {
        "@type": "Question",
        name: "Which one should I choose for my business website or web app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most local businesses, Next.js is the safer choice, because it is faster, easier for Google to read and simple to grow. Pick React when your app has unusual screens or workflows that need full custom control. If you are unsure, tell me what the site needs to do on a free call and I will recommend the stack that fits.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: Atom,
    title: "React: the engine",
    desc: "React is a JavaScript library for building what your customers see and tap on. Buttons, forms, booking calendars, dashboards. It is flexible, which means a developer can shape it any way your business needs. The trade-off is that speed, search engine visibility and hosting need extra setup, because React on its own is only the front end.",
  },
  {
    icon: Layers,
    title: "Next.js: the full car",
    desc: "Next.js is a full framework built on React. It adds what React leaves out: pages that load fast, content Google can read easily, image handling and hosting that scales. For a business website or customer-facing app, that extra kit matters, because speed and Google rankings decide whether customers find you or your competitor.",
  },
];

const DIFFERENCES = [
  {
    icon: Zap,
    title: "Speed and Google rankings",
    desc: "Next.js prepares pages on the server before they reach your customer, so the first paint is fast and Google can read the full page. React, on its own, builds the page in the visitor's browser, which can be slower and harder for Google to read. For a local business, that speed gap is real money, because a slow page loses callers.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility and control",
    desc: "React gives a developer a blank canvas. If your app needs unusual screens, custom dashboards or a very specific workflow, that freedom helps. Next.js has more opinions built in, which is a strength for standard business sites and apps, and a limit only when your product is genuinely unusual.",
  },
  {
    icon: Wallet,
    title: "Cost to build",
    desc: "A simple business site costs about the same in either one, because the design and the content are the real work. A bigger app can cost more in React, because the developer builds the missing pieces by hand. Next.js includes many of those pieces already, which saves build time on standard features like forms, pages and image handling.",
  },
  {
    icon: Wrench,
    title: "Maintenance and updates",
    desc: "Both need looking after. Next.js updates often include improvements to speed and security that you get by upgrading. React apps need each extra piece updated separately. Either way, ask who maintains your site after launch and what that costs, before you agree to anything.",
  },
];

const PICKS = [
  {
    icon: Atom,
    title: "Pick React when",
    desc: "Your product is a complex tool, like a custom dashboard, a booking system with unusual rules, or an internal app your team uses every day. You have a developer who knows React well and you want full control over how everything works.",
    point: "Best for: custom dashboards, internal tools and unusual workflows.",
  },
  {
    icon: Layers,
    title: "Pick Next.js when",
    desc: "You want a fast website or customer-facing app that ranks on Google, loads quickly on phones and is easy to grow later. For most local businesses, a website, a booking flow or a customer portal, this is the safer pick.",
    point: "Best for: business websites, booking flows and customer portals.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is the difference between Next.js and React?",
    a: "React is a library for building user interfaces, the buttons, forms and screens your customers use. Next.js is a framework built on React that adds fast page loading, better Google visibility, image handling and hosting. In short, React is the engine and Next.js is the full car built around it.",
  },
  {
    q: "Is Next.js better than React for SEO?",
    a: "Yes, in most cases. Next.js prepares pages on the server, so Google can read the full content straight away and visitors see the page faster. React on its own loads content in the browser, which Google can struggle to read. If Google traffic matters to your business, Next.js has the advantage.",
  },
  {
    q: "Which is cheaper to build with, Next.js or React?",
    a: "It depends on the scope. A simple business website costs about the same in either one. For a larger app, Next.js can cost less because many standard features are already included, while React needs them built by hand. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "Can I switch from React to Next.js later?",
    a: "Yes. Because Next.js is built on React, a React app can usually be moved over without starting from zero. It still takes real work, so it is cheaper to pick the right stack at the start, but you are never locked in forever.",
  },
  {
    q: "Which one should I choose for my business website or web app?",
    a: "For most local businesses, Next.js is the safer choice, because it is faster, easier for Google to read and simple to grow. Pick React when your app has unusual screens or workflows that need full custom control. If you are unsure, tell me what the site needs to do on a free call and I will recommend the stack that fits.",
  },
];

export default function NextJsVsReactPage() {
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
                Next.js vs React: Which One Should Your Business Choose?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                If you are planning a website or a web app, you will hear two
                names again and again: React and Next.js. They sound like
                rivals, but they are not. Next.js is built on top of React,
                and the real question is not which one is better. The real
                question is which one fits your business, your budget and
                your customers.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains the difference in plain words, no
                developer jargon. It is written for business owners in the US
                and UK, roofers, plumbers, HVAC, med spas, cleaning,
                builders and electricians, who want a fast website or app
                that brings in calls and bookings.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <NextVsReactVisual />
            </div>
          </div>
        </section>

        {/* -- The basics -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE BASICS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What Each One Actually Is
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Think of it like this. React is the engine. Next.js is the
              full car built around that engine, with the doors, the lights
              and the road maps already fitted. Both get you there, but one
              gives you more out of the box.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {BASICS.map((item) => (
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

        {/* -- The differences -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE COMPARISON
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              The Differences That Matter to Your Business
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Forget the technical debates. These are the four differences
              that change what your customers experience and what you pay.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {DIFFERENCES.map((item) => (
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

        {/* -- The decision -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE DECISION
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Which One Should You Pick?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              There is no wrong answer here, only a better fit. Use this
              simple test.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PICKS.map((item) => (
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
                  <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6E73BE]" />
                    {item.point}
                  </p>
                </div>
              ))}
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60">
                <p className="text-base font-medium text-[var(--text-primary)]">
                  Not sure which fits your project?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me what you want the site or app to do, and I will
                  recommend the right stack on a free call, with a fixed
                  quote before we start. See how I work on my{" "}
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
              Next.js vs React Questions, Answered
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
              Ready to build your website or web app?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what you want it to do and I will send a clear plan,
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
