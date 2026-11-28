// Step 7 - Guide 10: How much does it cost to hire a React developer?
// Route: app/guides/how-much-does-it-cost-to-hire-a-react-developer/page.js
// Destination file: app/guides/how-much-does-it-cost-to-hire-a-react-developer/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { HireReactCostVisual } from "@/components/HireReactCostVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Layers,
  Award,
  Palette,
  Wrench,
  Clock,
  FileCheck,
  Eye,
  KeyRound,
  CalendarCheck,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "How Much Does It Cost to Hire a React Developer? | SohailWorks",
  description:
    "How much does it cost to hire a React developer? It depends on scope, experience and how you pay. Learn what changes the price, hourly vs fixed quotes, and what to check before you hire.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/how-much-does-it-cost-to-hire-a-react-developer",
  },
  openGraph: {
    title:
      "How Much Does It Cost to Hire a React Developer? | SohailWorks",
    description:
      "How much does it cost to hire a React developer? It depends on scope, experience and how you pay. Learn what changes the price, hourly vs fixed quotes, and what to check before you hire.",
    url: "https://www.sohailworks.com/guides/how-much-does-it-cost-to-hire-a-react-developer",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How Much Does It Cost to Hire a React Developer? | SohailWorks",
    description:
      "How much does it cost to hire a React developer? It depends on scope, experience and how you pay. Learn what changes the price, hourly vs fixed quotes, and what to check before you hire.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does It Cost to Hire a React Developer?",
    description:
      "How much does it cost to hire a React developer? It depends on scope, experience and how you pay. Learn what changes the price, hourly vs fixed quotes, and what to check before you hire.",
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
      "https://www.sohailworks.com/guides/how-much-does-it-cost-to-hire-a-react-developer",
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
        name: "How Much Does It Cost to Hire a React Developer?",
        item: "https://www.sohailworks.com/guides/how-much-does-it-cost-to-hire-a-react-developer",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to hire a React developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A simple business website costs far less than a booking platform with accounts and payments. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "Should I hire hourly or for a fixed price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a defined project, a fixed price. You know the cost before work starts and the price does not move. Hourly billing suits open-ended work, but it hides the final price until the job is done.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take a React developer to build a website or app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple business website usually takes a few weeks, and a bigger app with bookings or payments takes longer. You should get a clear timeline with the quote, before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "What should I check before hiring a React developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ask to see one real website or app they built for a business like yours, confirm you will own the code and the accounts, and get a fixed quote and a timeline in writing before work starts.",
        },
      },
      {
        "@type": "Question",
        name: "Do I own the code after the work is done?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should. The code, the accounts and the data belong to your business. Make sure that is agreed before work starts, so you can move or change developers later without starting over.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const COST_FACTORS = [
  {
    icon: Layers,
    title: "The size of the job",
    desc: "A five-page website costs far less than a booking platform with accounts, payments and a dashboard. The number of screens and features is the biggest single factor in the price. Count the screens and the features before you ask for a price, because that list is what the quote is built on.",
  },
  {
    icon: Award,
    title: "The developer's experience",
    desc: "An experienced developer charges more per hour but often finishes faster and with fewer mistakes. A cheaper developer who takes three times as long is not cheaper. Ask what they have built before, not just what they charge. Look for work in your niche. A developer who has built booking flows for roofers or plumbers will finish faster than one who has never built for a trade business.",
  },
  {
    icon: Palette,
    title: "Design and content",
    desc: "A developer builds what you approve. If the design, the words and the photos are ready, the build moves fast. If everything has to be created from scratch, that work adds to the price.",
  },
  {
    icon: Wrench,
    title: "Support after launch",
    desc: "A website needs looking after: updates, fixes, small changes. Some developers include a support period, others charge for every fix. Ask what happens in month two before you pay for month one.",
  },
];

const PAYMENT = [
  {
    icon: Clock,
    title: "Hourly billing",
    desc: "You pay for time, not for results. The bill grows with every delay and every change. It can work for open-ended work, but for a website or app with a clear scope, it hides the real price until the end.",
  },
  {
    icon: FileCheck,
    title: "A fixed quote",
    desc: "You agree the scope and the price before work starts, and the price does not move. If the job takes longer than expected, that is the developer's problem, not yours. For a defined project, this is the safer way to hire.",
  },
];

const CHECKS = [
  {
    icon: Eye,
    title: "Real work, not promises",
    desc: "Ask to see one website or app they built for a business like yours, live and working. A portfolio of real sites tells you more than any sales call. Open the site on your phone and try it yourself. If it is slow or broken, that tells you everything.",
  },
  {
    icon: KeyRound,
    title: "You own the code",
    desc: "The code, the accounts and the data should be yours. If the developer keeps the code in their account, leaving later means starting over.",
  },
  {
    icon: CalendarCheck,
    title: "A clear timeline",
    desc: "You should know what is delivered and when, before work starts. A developer who cannot give you a timeline has not thought the job through.",
  },
];

const GUIDE_FAQS = [
  {
    q: "How much does it cost to hire a React developer?",
    a: "It depends on the scope. A simple business website costs far less than a booking platform with accounts and payments. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "Should I hire hourly or for a fixed price?",
    a: "For a defined project, a fixed price. You know the cost before work starts and the price does not move. Hourly billing suits open-ended work, but it hides the final price until the job is done.",
  },
  {
    q: "How long does it take a React developer to build a website or app?",
    a: "A simple business website usually takes a few weeks, and a bigger app with bookings or payments takes longer. You should get a clear timeline with the quote, before work starts.",
  },
  {
    q: "What should I check before hiring a React developer?",
    a: "Ask to see one real website or app they built for a business like yours, confirm you will own the code and the accounts, and get a fixed quote and a timeline in writing before work starts.",
  },
  {
    q: "Do I own the code after the work is done?",
    a: "You should. The code, the accounts and the data belong to your business. Make sure that is agreed before work starts, so you can move or change developers later without starting over.",
  },
];

export default function HowMuchDoesItCostToHireAReactDeveloperPage() {
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
                How Much Does It Cost to Hire a React Developer?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                There is no single price for hiring a React developer,
                because the price is not for the developer. It is for the
                work. A simple business website, a booking flow and a full
                customer portal are three different jobs, even though the
                same skill builds all three. A developer in another country,
                a freelancer on a marketplace and a local developer in the UK
                can all quote the same job at very different prices, and the
                cheapest quote is rarely the cheapest job. Anyone who gives
                you one number without asking what you need is guessing.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains what changes the price, how hourly
                billing compares with a fixed quote, and what to check
                before you hire. It is written for business owners in the
                US and UK, roofers, plumbers, HVAC, med spas, cleaning,
                builders and electricians, who want a website or app built
                properly, at a price agreed in advance.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <HireReactCostVisual />
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
              Four things decide most of the price. Change any one of them
              and the quote moves with it.
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

        {/* -- How you pay -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              HOW YOU PAY
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Hourly Billing vs a Fixed Quote
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              How you pay matters as much as what you pay.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PAYMENT.map((item) => (
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
                  I work on fixed quotes.
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Share your requirements on a free call and I will give
                  you a fixed quote before we start, no hourly billing.
                  See how I work on my{" "}
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

        {/* -- Checks before hiring -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE CHECKLIST
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What to Check Before You Hire
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Three checks before you pay anything. They take ten minutes
              and save you from the most common hiring mistakes. Do them on
              a short call, before you sign anything or pay a deposit.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CHECKS.map((item) => (
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

        {/* -- FAQ -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Hiring a React Developer Questions, Answered
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
              Ready to hire a React developer?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what you want built and I will send a clear plan,
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
