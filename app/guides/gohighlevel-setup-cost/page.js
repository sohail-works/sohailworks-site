// Step 7 - Guide 2: What affects the cost of a GoHighLevel setup
// Route: app/guides/gohighlevel-setup-cost/page.js
// Destination file: app/guides/gohighlevel-setup-cost/page.js
// After push: add this URL to the sitemap (6th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { GHLWorkflowVisual } from "@/components/GHLWorkflowVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  LayoutDashboard,
  Workflow,
  CalendarCheck,
  Bot,
  ArrowRightLeft,
  ShieldCheck,
  TriangleAlert,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "What Affects the Cost of a GoHighLevel Setup? | SohailWorks",
  description:
    "A GoHighLevel setup costs more when the build is bigger. Here are the 6 factors that move the price, what a setup usually includes, and how to get a fixed quote. For US and UK small businesses.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/gohighlevel-setup-cost",
  },
  openGraph: {
    title: "What Affects the Cost of a GoHighLevel Setup? | SohailWorks",
    description:
      "A GoHighLevel setup costs more when the build is bigger. Here are the 6 factors that move the price, what a setup usually includes, and how to get a fixed quote. For US and UK small businesses.",
    url: "https://www.sohailworks.com/guides/gohighlevel-setup-cost",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Affects the Cost of a GoHighLevel Setup? | SohailWorks",
    description:
      "A GoHighLevel setup costs more when the build is bigger. Here are the 6 factors that move the price, what a setup usually includes, and how to get a fixed quote. For US and UK small businesses.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Affects the Cost of a GoHighLevel Setup?",
    description:
      "A GoHighLevel setup costs more when the build is bigger. Here are the 6 factors that move the price, what a setup usually includes, and how to get a fixed quote. For US and UK small businesses.",
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
      "https://www.sohailworks.com/guides/gohighlevel-setup-cost",
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
        name: "GoHighLevel Expert",
        item: "https://www.sohailworks.com/gohighlevel-expert",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "What Affects the Cost of a GoHighLevel Setup?",
        item: "https://www.sohailworks.com/guides/gohighlevel-setup-cost",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a GoHighLevel setup cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "Why do quotes for the same GoHighLevel job look so different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the scope is different. One quote may cover a single funnel and a simple pipeline, while another covers several funnels, long follow-up sequences, a migration and AI agents. Ask every expert what is included, page by page and automation by automation, before you compare prices.",
        },
      },
      {
        "@type": "Question",
        name: "Do I pay for GoHighLevel itself on top of the setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The GoHighLevel subscription is separate from the setup work and you pay it to GoHighLevel. The setup is the build: your funnels, CRM, pipelines, automations and calendars, set up inside your own account.",
        },
      },
      {
        "@type": "Question",
        name: "What makes a GoHighLevel setup cost more later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Changes after the build starts. Extra pages, extra automations, a migration that was not in the first scope, and support that was not included all add cost later. A clear written scope and a fixed quote before work starts are what keep the price steady.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get a fixed quote for my GoHighLevel setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell me what you need on a free call: your business, how leads reach you now, and what should happen when a call is missed. I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// ─── ─── Data ─── ───
const COST_FACTORS = [
  {
    icon: LayoutDashboard,
    num: "01",
    title: "How many funnels and pages you need",
    desc: "One funnel with a landing page and a thank-you page is a small build. A roofer with separate funnels for storm damage, inspections and quotes, each with its own pages, is a much bigger one. Every extra page needs copy, design, forms and testing.",
    good: "Price moves up when: more funnels, more pages, and custom design instead of a simple layout.",
  },
  {
    icon: Workflow,
    num: "02",
    title: "How much automation has to run",
    desc: "A short follow-up sequence is simple. A full system that answers missed calls by text, chases every lead for days, asks for reviews, and moves deals through the pipeline by itself takes far more building and testing. Automation is where most of the work hides.",
    good: "Price moves up when: longer follow-up sequences, more triggers, and more branches for different lead types.",
  },
  {
    icon: CalendarCheck,
    num: "03",
    title: "Calendars, forms and pipelines",
    desc: "Booking calendars, intake forms and pipelines look simple from the outside, but each one needs the right fields, the right reminders and the right handover to your team. A business with two calendars and three pipelines costs more to set up than one with a single booking page.",
    good: "Price moves up when: more calendars, more pipelines, and more custom fields and reminders.",
  },
  {
    icon: Bot,
    num: "04",
    title: "AI agents and chatbots",
    desc: "An AI chatbot that answers common questions and books calls is a separate build on top of the funnel. It needs its own instructions, its own answers and its own testing, and it has to hand over to a human cleanly when it cannot help.",
    good: "Price moves up when: AI chat, voice agents, or any automation that has to think, not just send a fixed message.",
  },
  {
    icon: ArrowRightLeft,
    num: "05",
    title: "Migration from another tool",
    desc: "Moving from HubSpot, Jobber or Housecall Pro means moving contacts, pipelines and old conversations without losing data. A clean list moves fast. A messy list with duplicates and half-finished records takes real cleanup work before anything can go live.",
    good: "Price moves up when: more contacts to move, messy data to clean, and old workflows to rebuild.",
  },
  {
    icon: ShieldCheck,
    num: "06",
    title: "Support after launch",
    desc: "A setup is not finished on launch day. Texts stop sending, calendars break, and A2P registration needs attention. A quote that includes support after launch costs more up front and far less later than a cheap build that leaves you on your own.",
    good: "Price moves up when: support is included, and down later when a problem is fixed fast instead of breaking the system.",
  },
];

const COST_TRAPS = [
  {
    title: "Hourly billing with no scope",
    desc: "If there is no written list of what gets built, the hours keep growing and so does the bill. Always get the scope in writing first.",
  },
  {
    title: "The cheapest quote, with no support",
    desc: "A low price usually means no support after launch. The first broken calendar costs more than the saving.",
  },
  {
    title: "Paying for tools you do not need",
    desc: "Not every business needs AI agents, memberships and courses on day one. Start with what brings bookings, add the rest later.",
  },
  {
    title: "No fixed quote before work starts",
    desc: "If the price is decided after the build, you have no control over it. A fixed quote before work starts protects both sides.",
  },
  {
    title: "Your account held in their name",
    desc: "If the setup lives in their account, leaving later means losing your leads and data. Your account should be in your name from day one.",
  },
];

const INCLUDED = [
  {
    num: "1",
    title: "CRM and pipelines, set up properly",
    desc: "Contacts imported, pipelines built for how your business actually works, and every lead tracked from first call to booked job.",
  },
  {
    num: "2",
    title: "Funnels and landing pages",
    desc: "Pages that match your services and your area, with forms that send every enquiry straight into the pipeline.",
  },
  {
    num: "3",
    title: "Missed-call text-back and follow-up",
    desc: "A missed call gets a text back in under a minute, and leads get followed up automatically until they reply or book.",
  },
  {
    num: "4",
    title: "A walkthrough and support after launch",
    desc: "You see where leads sit and what got sent, in plain words, and someone answers when something breaks.",
  },
];

const GUIDE_FAQS = [
  {
    q: "How much does a GoHighLevel setup cost?",
    a: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "Why do quotes for the same GoHighLevel job look so different?",
    a: "Because the scope is different. One quote may cover a single funnel and a simple pipeline, while another covers several funnels, long follow-up sequences, a migration and AI agents. Ask every expert what is included, page by page and automation by automation, before you compare prices.",
  },
  {
    q: "Do I pay for GoHighLevel itself on top of the setup?",
    a: "Yes. The GoHighLevel subscription is separate from the setup work and you pay it to GoHighLevel. The setup is the build: your funnels, CRM, pipelines, automations and calendars, set up inside your own account.",
  },
  {
    q: "What makes a GoHighLevel setup cost more later?",
    a: "Changes after the build starts. Extra pages, extra automations, a migration that was not in the first scope, and support that was not included all add cost later. A clear written scope and a fixed quote before work starts are what keep the price steady.",
  },
  {
    q: "How do I get a fixed quote for my GoHighLevel setup?",
    a: "Tell me what you need on a free call: your business, how leads reach you now, and what should happen when a call is missed. I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function GoHighLevelSetupCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="m-10 mx-auto w-full lg:max-w-7xl">
        {/* ── Hero ── */}
        <section className="relative pb-16 pt-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
                GUIDES / GOHIGHLEVEL
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                What Affects the Cost of a GoHighLevel Setup?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                A GoHighLevel setup has no single price, because no two setups
                are the same size. A basic funnel and CRM costs less than a full
                system with automation, AI agents and a migration. These are the
                six factors that move the price, so you can read any quote and
                know exactly what you are paying for.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide is written for local service businesses in the US
                and UK, roofers, plumbers, HVAC, med spas, cleaning, builders
                and electricians. If your business runs on calls, quotes and
                bookings, it fits you.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <GHLWorkflowVisual />
            </div>
          </div>
        </section>

        {/* ── Cost factors ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE COST FACTORS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Six Factors That Move the Price
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              When a quote looks high or low, check it against these six.
              The price is the scope, written down.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COST_FACTORS.map((item) => (
                <div
                  key={item.num}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                        {item.num}
                      </p>
                      <p className="text-base font-medium text-[var(--text-primary)]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {item.desc}
                  </p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                    {item.good}
                  </p>
                </div>
              ))}
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#6E73BE]/60">
                <p className="text-base font-medium text-[var(--text-primary)]">
                  Want a fixed quote for your setup?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me what you need on a free call and I will give you a
                  fixed quote before we start, no hourly billing. See how I
                  work on my{" "}
                  <a
                    href="/gohighlevel-expert"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    GoHighLevel expert services
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

        {/* ── Cost traps ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              COST TRAPS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Five Pricing Traps to Avoid
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {COST_TRAPS.map((flag) => (
                <div
                  key={flag.title}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60"
                >
                  <div className="flex items-center gap-3">
                    <TriangleAlert className="h-6 w-6 shrink-0 text-[#F97316]" />
                    <p className="text-base font-medium text-[var(--text-primary)]">
                      {flag.title}
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {flag.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What is included ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT IS INCLUDED
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What a Setup Usually Includes
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Before you compare two quotes, check that both include the
              same four pieces. A quote that leaves one out is not cheaper,
              it is incomplete.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED.map((step) => (
                <div
                  key={step.num}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#6E73BE]/60"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                    {step.num}
                  </p>
                  <p className="mt-2 text-base font-medium text-[var(--text-primary)]">
                    {step.title}
                  </p>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Setup Cost Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={GUIDE_FAQS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Ready to know what your setup will cost?
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
