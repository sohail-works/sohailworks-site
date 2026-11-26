// Step 7 - Guide 3: GoHighLevel missed-call text-back: how to set it up
// Route: app/guides/gohighlevel-missed-call-text-back/page.js
// Destination file: app/guides/gohighlevel-missed-call-text-back/page.js
// After push: add this URL to the sitemap (7th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { MissedCallTextBackVisual } from "@/components/MissedCallTextBackVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Phone,
  ShieldCheck,
  Zap,
  MessageSquare,
  CalendarCheck,
  TriangleAlert,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "GoHighLevel Missed-Call Text-Back: How to Set It Up | SohailWorks",
  description:
    "A missed call should get a text back in under a minute. The 5 steps to set up GoHighLevel missed-call text-back, what can go wrong, and how to test it.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/gohighlevel-missed-call-text-back",
  },
  openGraph: {
    title: "GoHighLevel Missed-Call Text-Back: How to Set It Up | SohailWorks",
    description:
      "A missed call should get a text back in under a minute. The 5 steps to set up GoHighLevel missed-call text-back, what can go wrong, and how to test it.",
    url: "https://www.sohailworks.com/guides/gohighlevel-missed-call-text-back",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Missed-Call Text-Back: How to Set It Up | SohailWorks",
    description:
      "A missed call should get a text back in under a minute. The 5 steps to set up GoHighLevel missed-call text-back, what can go wrong, and how to test it.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "GoHighLevel Missed-Call Text-Back: How to Set It Up",
    description:
      "A missed call should get a text back in under a minute. The 5 steps to set up GoHighLevel missed-call text-back, what can go wrong, and how to test it.",
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
      "https://www.sohailworks.com/guides/gohighlevel-missed-call-text-back",
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
        name: "GoHighLevel Missed-Call Text-Back: How to Set It Up",
        item: "https://www.sohailworks.com/guides/gohighlevel-missed-call-text-back",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GoHighLevel missed-call text-back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When someone calls and you miss it, GoHighLevel sends a text back automatically in under a minute, and logs the caller as a lead in your pipeline. The lead gets a reply while you are still on the job, instead of calling the next business on the list.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need A2P registration for missed-call text-back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in the US business texting needs A2P 10DLC registration. Without it your texts can be blocked or filtered. I handle the registration as part of the setup, so your messages go out properly.",
        },
      },
      {
        "@type": "Question",
        name: "How fast should the text go out?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In under a minute. A lead that waits an hour has usually called someone else by then. The trigger fires the moment the call is missed, so the reply is already on its way.",
        },
      },
      {
        "@type": "Question",
        name: "What should the text say?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Short, polite and human. Name the business, say you missed the call, and ask what they need. No links, no pressure, no jargon. The aim is a reply, not a sale in the first message.",
        },
      },
      {
        "@type": "Question",
        name: "Can I set this up myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if you have the number, the A2P registration and the automation set up right. If you want it done for you, tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const STEPS = [
  {
    icon: Phone,
    num: "01",
    title: "Connect a number that can text",
    desc: "Missed-call text-back needs a number that can send texts, connected to your GoHighLevel account. Your main business number is usually the right one, so the reply comes from a number the caller recognises.",
    good: "Check: the number sends and receives texts, and it is the number on your website and Google profile.",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Finish A2P registration",
    desc: "In the US, business texting needs A2P 10DLC registration. It proves you are a real business sending real messages. Without it, carriers can block or filter your texts, and the whole setup fails quietly.",
    good: "Check: registration is approved before you switch the automation on, not after.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Set the missed-call trigger",
    desc: "The automation watches for a missed call and fires the moment one happens. It has to catch every missed call, not only calls outside working hours. A lead that calls at 7pm is still a lead.",
    good: "Check: the trigger covers all hours, and it only fires on missed calls, never on answered ones.",
  },
  {
    icon: MessageSquare,
    num: "04",
    title: "Write the text in plain words",
    desc: "The first text decides whether the lead replies. Keep it short, name the business, say you missed the call, and ask what they need. One message, one question, no links and no pressure.",
    good: "Check: read it out loud. If it sounds like a robot, rewrite it until it sounds like you.",
  },
  {
    icon: CalendarCheck,
    num: "05",
    title: "Log the lead and follow up",
    desc: "The missed call should land in your pipeline as a lead, with the text already sent. If there is no reply, a polite follow-up goes out the next day. The setup is only finished when the follow-up runs by itself.",
    good: "Check: the lead appears in the pipeline, and the next-day follow-up is switched on.",
  },
];

const WHAT_CAN_GO_WRONG = [
  {
    title: "No A2P registration",
    desc: "Texts get blocked or filtered, and nobody tells you. The setup looks live, but no lead ever gets a reply.",
  },
  {
    title: "Slow reply",
    desc: "A text that goes out an hour later is not a text-back, it is a voicemail with extra steps. Speed is the whole point.",
  },
  {
    title: "No follow-up",
    desc: "Most leads do not reply to the first text. Without a next-day follow-up, half the value of the setup is gone.",
  },
  {
    title: "Wrong number",
    desc: "If the reply comes from a number the caller does not recognise, they ignore it. Use the number they actually called.",
  },
  {
    title: "Never tested",
    desc: "A setup that was never tested with a real missed call is a guess. Miss your own number once before you call it done.",
  },
];

const TEST_STEPS = [
  {
    num: "1",
    title: "Miss the number yourself",
    desc: "Call your business number from another phone and let it ring out. The text should arrive in under a minute.",
  },
  {
    num: "2",
    title: "Reply to the text",
    desc: "Answer the text like a customer would. Your reply should land in the conversation, not in a dead inbox.",
  },
  {
    num: "3",
    title: "Check the pipeline",
    desc: "The missed call should be sitting in your pipeline as a lead, with the text already logged against it.",
  },
  {
    num: "4",
    title: "Check the follow-up",
    desc: "Wait a day and confirm the follow-up went out. If it did not, the setup is only half finished.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is GoHighLevel missed-call text-back?",
    a: "When someone calls and you miss it, GoHighLevel sends a text back automatically in under a minute, and logs the caller as a lead in your pipeline. The lead gets a reply while you are still on the job, instead of calling the next business on the list.",
  },
  {
    q: "Do I need A2P registration for missed-call text-back?",
    a: "Yes, in the US business texting needs A2P 10DLC registration. Without it your texts can be blocked or filtered. I handle the registration as part of the setup, so your messages go out properly.",
  },
  {
    q: "How fast should the text go out?",
    a: "In under a minute. A lead that waits an hour has usually called someone else by then. The trigger fires the moment the call is missed, so the reply is already on its way.",
  },
  {
    q: "What should the text say?",
    a: "Short, polite and human. Name the business, say you missed the call, and ask what they need. No links, no pressure, no jargon. The aim is a reply, not a sale in the first message.",
  },
  {
    q: "Can I set this up myself?",
    a: "Yes, if you have the number, the A2P registration and the automation set up right. If you want it done for you, tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function GoHighLevelMissedCallTextBackPage() {
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
                GoHighLevel Missed-Call Text-Back: How to Set It Up
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                Missed-call text-back is simple: when someone calls and you
                miss it, GoHighLevel sends a text back automatically in under
                a minute, and logs the caller as a lead. Most local businesses
                lose jobs this way every week, not because the work is bad,
                but because nobody answered the phone in time.
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
              <MissedCallTextBackVisual />
            </div>
          </div>
        </section>

        {/* --- The 5 steps --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE SETUP
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Five Steps to Set It Up
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Five pieces, in this order. Skip one and the setup looks live
              while no lead ever gets a reply.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((item) => (
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
                  Want it set up for you?
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

        {/* --- What can go wrong --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT CAN GO WRONG
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Five Ways This Breaks
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_CAN_GO_WRONG.map((flag) => (
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

        {/* --- Test before launch --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              BEFORE YOU LAUNCH
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Test It Before You Call It Done
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Four quick tests with your own phone. If one fails, the setup
              is not finished yet.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEST_STEPS.map((step) => (
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
              Missed-Call Text-Back Questions, Answered
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
              Ready to stop losing missed calls?
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
