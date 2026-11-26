// Step 7 - Guide 4: GoHighLevel vs Jobber and Housecall Pro
// Route: app/guides/gohighlevel-vs-jobber/page.js
// Destination file: app/guides/gohighlevel-vs-jobber/page.js
// After push: add this URL to the sitemap (8th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { GHLvsJobberVisual } from "@/components/GHLvsJobberVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Scale,
  Phone,
  Workflow,
  Star,
  CalendarCheck,
  Receipt,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "GoHighLevel vs Jobber and Housecall Pro | SohailWorks",
  description:
    "Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job. When to use each, and when to run both together.",
  alternates: {
    canonical: "https://www.sohailworks.com/guides/gohighlevel-vs-jobber",
  },
  openGraph: {
    title: "GoHighLevel vs Jobber and Housecall Pro | SohailWorks",
    description:
      "Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job. When to use each, and when to run both together.",
    url: "https://www.sohailworks.com/guides/gohighlevel-vs-jobber",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel vs Jobber and Housecall Pro | SohailWorks",
    description:
      "Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job. When to use each, and when to run both together.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GoHighLevel vs Jobber and Housecall Pro",
    description:
      "Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job. When to use each, and when to run both together.",
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
      "https://www.sohailworks.com/guides/gohighlevel-vs-jobber",
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
        name: "GoHighLevel vs Jobber and Housecall Pro",
        item: "https://www.sohailworks.com/guides/gohighlevel-vs-jobber",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is GoHighLevel better than Jobber?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They do different jobs. Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job: the missed call, the follow-up, the review. Better depends on what is broken in your business.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to replace Jobber to use GoHighLevel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Most owners run GoHighLevel next to Jobber, not instead of it. GoHighLevel handles the follow-up around the job, and Jobber handles the job itself.",
        },
      },
      {
        "@type": "Question",
        name: "What does GoHighLevel do that Jobber does not?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The follow-up around the job: the missed call that gets a text back, the lead that gets chased automatically, and the review that gets asked for. Jobber is built for scheduling and invoicing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I move my contacts from Jobber to GoHighLevel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Contacts, pipelines and old conversations can move across. A clean list moves fast, and a messy list needs cleanup first.",
        },
      },
      {
        "@type": "Question",
        name: "Which one should I pick first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If leads go cold because nobody follows up, start with GoHighLevel. If scheduling and invoicing are the mess, start there. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const WHAT_EACH_DOES = [
  {
    icon: Phone,
    num: "01",
    title: "GoHighLevel: the missed call gets a text back",
    desc: "When a call is missed at 7pm, GoHighLevel sends a text back in under a minute and logs the caller as a lead. That is the job it is built for: catching the lead before it calls someone else.",
    good: "GoHighLevel does this best: the reply that goes out while you are still on the job.",
  },
  {
    icon: Workflow,
    num: "02",
    title: "GoHighLevel: follow-up that runs by itself",
    desc: "Leads get chased automatically for days, until they reply or book. No spreadsheet, no sticky notes, no remembering to call back. The pipeline shows you every lead and where it sits.",
    good: "GoHighLevel does this best: follow-up that never depends on your memory.",
  },
  {
    icon: Star,
    num: "03",
    title: "GoHighLevel: reviews get asked for",
    desc: "After the job is done, GoHighLevel asks for the review automatically, while the customer is still happy. Reviews build up without you having to remember to ask.",
    good: "GoHighLevel does this best: the review request that goes out on time, every time.",
  },
  {
    icon: CalendarCheck,
    num: "04",
    title: "Jobber and Housecall Pro: scheduling",
    desc: "Jobber and Housecall Pro are built for the job itself: who goes where, at what time, with what equipment. Scheduling, dispatch and the day plan live here.",
    good: "Jobber and Housecall Pro do this best: the schedule that keeps the team on track.",
  },
  {
    icon: Receipt,
    num: "05",
    title: "Jobber and Housecall Pro: invoicing",
    desc: "Quotes, invoices and payments for the job are what Jobber and Housecall Pro are built for. The job is done, the invoice goes out, the payment comes in.",
    good: "Jobber and Housecall Pro do this best: invoicing that follows the job, not the lead.",
  },
];

const WHEN_TO_USE = [
  {
    icon: Scale,
    num: "01",
    title: "Use GoHighLevel alone",
    desc: "Your jobs are simple, your team is small, and scheduling already works fine on a calendar. What is broken is the follow-up: missed calls, cold leads, no reviews. GoHighLevel alone fixes that.",
  },
  {
    icon: Workflow,
    num: "02",
    title: "Run both together",
    desc: "Jobber already runs your scheduling and invoicing well, and you do not want to move it. Add GoHighLevel next to it for the missed calls, the follow-up and the reviews. Most owners end up here.",
  },
  {
    icon: CalendarCheck,
    num: "03",
    title: "Keep Jobber only, for now",
    desc: "Your leads already get answered and followed up, and scheduling is the only mess. Fix the schedule first. When missed calls start costing you jobs, add GoHighLevel then.",
  },
];

const CHECK_BEFORE_SWITCH = [
  {
    num: "1",
    title: "Your contacts move cleanly",
    desc: "Contacts, pipelines and old conversations move across without losing data. A clean list moves fast.",
  },
  {
    num: "2",
    title: "Your pipelines match how you work",
    desc: "The new pipeline should follow how your business actually works, not how the old tool was set up.",
  },
  {
    num: "3",
    title: "Your follow-up keeps running",
    desc: "The missed-call text-back and the follow-up sequences are live before anything old is switched off.",
  },
  {
    num: "4",
    title: "Your team knows where leads sit",
    desc: "Everyone who answers the phone can see the pipeline, the texts sent, and what needs a reply.",
  },
];

const GUIDE_FAQS = [
  {
    q: "Is GoHighLevel better than Jobber?",
    a: "They do different jobs. Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job: the missed call, the follow-up, the review. Better depends on what is broken in your business.",
  },
  {
    q: "Do I need to replace Jobber to use GoHighLevel?",
    a: "No. Most owners run GoHighLevel next to Jobber, not instead of it. GoHighLevel handles the follow-up around the job, and Jobber handles the job itself.",
  },
  {
    q: "What does GoHighLevel do that Jobber does not?",
    a: "The follow-up around the job: the missed call that gets a text back, the lead that gets chased automatically, and the review that gets asked for. Jobber is built for scheduling and invoicing.",
  },
  {
    q: "Can I move my contacts from Jobber to GoHighLevel?",
    a: "Yes. Contacts, pipelines and old conversations can move across. A clean list moves fast, and a messy list needs cleanup first.",
  },
  {
    q: "Which one should I pick first?",
    a: "If leads go cold because nobody follows up, start with GoHighLevel. If scheduling and invoicing are the mess, start there. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function GoHighLevelVsJobberPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="m-10 mx-auto w-full lg:max-w-7xl">
        {/* --- Hero --- */}
        <section className="relative pb-16 pt-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
                GUIDES / GOHIGHLEVEL
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                GoHighLevel vs Jobber and Housecall Pro
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This is not a fight between two tools. Jobber and Housecall
                Pro are built for scheduling and invoicing, the job itself.
                GoHighLevel is built for everything around the job: the missed
                call that gets a text back, the lead that gets followed up,
                and the review that gets asked for. Most owners need both,
                for different parts of the business.
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
              <GHLvsJobberVisual />
            </div>
          </div>
        </section>

        {/* --- What each tool does best --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT EACH TOOL DOES BEST
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Different Jobs, Different Tools
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Judge each tool by the job it was built for, not by the job
              you wish it did.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_EACH_DOES.map((item) => (
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
                  Not sure which one you need?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me how your business works on a free call and I will
                  tell you plainly which tool fits, and what it takes to set
                  up. See how I work on my{" "}
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

        {/* --- When to use each --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHEN TO USE EACH
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Three Honest Answers
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHEN_TO_USE.map((item) => (
                <div
                  key={item.num}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/60 dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#F97316]/60"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Check before you switch --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              BEFORE YOU SWITCH
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What to Check Before You Move
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              A move is only finished when nothing is lost and nothing stops
              working on the way over.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CHECK_BEFORE_SWITCH.map((step) => (
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

        {/* --- FAQ --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Comparison Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={GUIDE_FAQS} />
            </div>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Still not sure which one fits?
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
