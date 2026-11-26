// Step 7 - Guide 1: How to hire a GoHighLevel expert: a checklist
// Route: app/guides/how-to-hire-a-gohighlevel-expert/page.js
// Destination file: app/guides/how-to-hire-a-gohighlevel-expert/page.js
// After push: add this URL to the sitemap (5th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { HireExpertVisual } from "@/components/HireExpertVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ClipboardList,
  Phone,
  KeyRound,
  CalendarCheck,
  Wrench,
  TriangleAlert,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "How to Hire a GoHighLevel Expert: A Checklist | SohailWorks",
  description:
    "Hiring a GoHighLevel expert? Ask these 5 questions first, check the red flags, and know what week one should look like. For US and UK small businesses.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/how-to-hire-a-gohighlevel-expert",
  },
  openGraph: {
    title:
      "How to Hire a GoHighLevel Expert: A Checklist | SohailWorks",
    description:
      "Hiring a GoHighLevel expert? Ask these 5 questions first, check the red flags, and know what week one should look like. For US and UK small businesses.",
    url: "https://www.sohailworks.com/guides/how-to-hire-a-gohighlevel-expert",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Hire a GoHighLevel Expert: A Checklist | SohailWorks",
    description:
      "Hiring a GoHighLevel expert? Ask these 5 questions first, check the red flags, and know what week one should look like. For US and UK small businesses.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Hire a GoHighLevel Expert: A Checklist",
    description:
      "Hiring a GoHighLevel expert? Ask these 5 questions first, check the red flags, and know what week one should look like. For US and UK small businesses.",
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
      "https://www.sohailworks.com/guides/how-to-hire-a-gohighlevel-expert",
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
        name: "How to Hire a GoHighLevel Expert",
        item: "https://www.sohailworks.com/guides/how-to-hire-a-gohighlevel-expert",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I ask before hiring a GoHighLevel expert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask for one system they built for a business like yours, what happens when a call is missed at 7pm, who owns the account and the data, what you get in week one and what it costs after that, and who fixes it when something breaks. Clear answers on all five mean you are talking to the right person.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to hire a GoHighLevel expert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "Who should own my GoHighLevel account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should. Your account, your contacts, your data. The expert sets it up inside your account and hands you full access. If someone wants to keep your account in their name, that is a red flag.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a GoHighLevel setup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard GoHighLevel setup takes about a week, and more complex builds with AI agents or migrations take longer. You should get a clear timeline before the work starts, and something working in week one.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need GoHighLevel if I already use Jobber or Housecall Pro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually you do not need to replace them. Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job: the missed call that gets a text back, the lead that gets followed up, and the review that gets asked for. Most owners run GHL next to Jobber, not instead of it.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const CHECKLIST = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Show me one system you built for a business like mine",
    desc: "Not a demo account, not a screenshot of someone else's dashboard. One real setup for a roofer, plumber, HVAC company, med spa or cleaner, with what it does every day. If they can only show generic templates, they have not done this for a business like yours.",
    good: "Good answer sounds like: here is the business, here is the pipeline, here is the automation that runs when a call is missed.",
  },
  {
    icon: Phone,
    num: "02",
    title: "What happens when a call is missed at 7pm?",
    desc: "This is the question that separates a setup from a system. A missed call at 7pm should get a text back in under a minute, land in the pipeline as a lead, and get a polite follow-up the next day if there is no reply. Ask them to walk you through it step by step.",
    good: "Good answer sounds like: the text goes out automatically, the lead is logged, and you see it on your dashboard in the morning.",
  },
  {
    icon: KeyRound,
    num: "03",
    title: "Who owns the account and the data, you or me?",
    desc: "You should own it all. Your GoHighLevel account, your contacts, your pipelines, your automations. The expert works inside your account and you keep full access from day one. If the account stays in their name, leaving later means losing everything.",
    good: "Good answer sounds like: it is your account, I set it up for you, and you can see everything I build.",
  },
  {
    icon: CalendarCheck,
    num: "04",
    title: "What do I get in week one, and what does it cost after that?",
    desc: "You should know exactly what is live by the end of week one, usually the CRM and pipeline, the missed-call text-back and the booking calendar, and what the ongoing cost is after setup. Vague promises and open-ended hourly billing are how small jobs turn into big bills.",
    good: "Good answer sounds like: this is live in week one, this is the fixed quote, and this is what support costs after that.",
  },
  {
    icon: Wrench,
    num: "05",
    title: "What happens after setup? Who fixes it when something breaks?",
    desc: "A setup is not finished on launch day. Texts stop sending, calendars break, A2P registration needs attention. Ask who you call, how fast they respond, and whether support is included or charged separately. No answer here means you are on your own after payment.",
    good: "Good answer sounds like: message me, I fix it, and here is how long support lasts after launch.",
  },
];

const RED_FLAGS = [
  {
    title: "No real example, only templates",
    desc: "If everything they show is a template or a demo account, they have not shipped a system for a real business.",
  },
  {
    title: "They keep your account in their name",
    desc: "Your leads and data should live in your account. If they hold the keys, you cannot leave without losing your business data.",
  },
  {
    title: "No fixed quote, only hourly billing",
    desc: "A checklist job with a clear scope deserves a fixed quote before work starts. Open-ended hourly billing hides the real price.",
  },
  {
    title: "Jargon instead of answers",
    desc: "If they cannot explain the missed-call flow in plain words, they probably cannot build it cleanly either.",
  },
  {
    title: "No support after launch",
    desc: "A system that nobody maintains breaks quietly. Ask what happens in month two before you pay for month one.",
  },
];

const WEEK_ONE = [
  {
    num: "1",
    title: "Your account, set up properly",
    desc: "CRM and pipelines, contacts imported, and your business details, services and hours in place.",
  },
  {
    num: "2",
    title: "Missed-call text-back, live",
    desc: "A missed call gets a text back in under a minute and lands in your pipeline as a lead.",
  },
  {
    num: "3",
    title: "Booking calendar, working",
    desc: "Forms and calendars connected, so a visitor can book without calling or waiting.",
  },
  {
    num: "4",
    title: "A short walkthrough, in plain words",
    desc: "You see where leads sit, what got sent and what needs a reply, with no jargon.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What should I ask before hiring a GoHighLevel expert?",
    a: "Ask for one system they built for a business like yours, what happens when a call is missed at 7pm, who owns the account and the data, what you get in week one and what it costs after that, and who fixes it when something breaks. Clear answers on all five mean you are talking to the right person.",
  },
  {
    q: "How much does it cost to hire a GoHighLevel expert?",
    a: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "Who should own my GoHighLevel account?",
    a: "You should. Your account, your contacts, your data. The expert sets it up inside your account and hands you full access. If someone wants to keep your account in their name, that is a red flag.",
  },
  {
    q: "How long does a GoHighLevel setup take?",
    a: "A standard GoHighLevel setup takes about a week, and more complex builds with AI agents or migrations take longer. You should get a clear timeline before the work starts, and something working in week one.",
  },
  {
    q: "Do I need GoHighLevel if I already use Jobber or Housecall Pro?",
    a: "Usually you do not need to replace them. Jobber and Housecall Pro are built for scheduling and invoicing. GoHighLevel is built for everything around the job: the missed call that gets a text back, the lead that gets followed up, and the review that gets asked for. Most owners run GHL next to Jobber, not instead of it.",
  },
];

export default function HowToHireAGoHighLevelExpertPage() {
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
                GUIDES / GOHIGHLEVEL
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                How to Hire a GoHighLevel Expert: A Checklist
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                A GoHighLevel expert sets up your funnels, CRM and automation
                so no lead ever goes cold. Hiring the wrong person buys you a
                tool you cannot use. Hiring the right person buys you a system
                that answers missed calls, follows up automatically and shows
                you every lead in one place. Ask these five questions first,
                and the difference becomes obvious.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This checklist is written for local service businesses in the
                US and UK, roofers, plumbers, HVAC, med spas, cleaning,
                builders and electricians. If your business runs on calls,
                quotes and bookings, it fits you.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <HireExpertVisual />
            </div>
          </div>
        </section>

        {/* -- The checklist -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE CHECKLIST
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Five Questions to Ask First
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              If they cannot answer clearly, they are selling you a tool, not
              a system. The right person answers all five without hiding
              behind jargon.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CHECKLIST.map((item) => (
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
                  Want these answers from me?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  I answer all five for your business on a free call, no
                  obligation. See how I work on my{" "}
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

        {/* -- Red flags -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              RED FLAGS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Five Signs to Walk Away
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RED_FLAGS.map((flag) => (
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

        {/* -- Week one -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT WEEK ONE SHOULD LOOK LIKE
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What You Should Get in Week One
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Share your requirements on a free call and I&apos;ll give you a
              fixed quote before we start, no hourly billing.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WEEK_ONE.map((step) => (
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

        {/* -- FAQ -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Hiring Questions, Answered
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
              Ready to hire the right GoHighLevel expert?
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
