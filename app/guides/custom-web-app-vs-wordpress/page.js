// Step 7 - Guide 6: Custom web app or WordPress: which does your business need
// Route: app/guides/custom-web-app-vs-wordpress/page.js
// Destination file: app/guides/custom-web-app-vs-wordpress/page.js
// After push: add this URL to the sitemap (10th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { CustomAppVsWordPressVisual } from "@/components/CustomAppVsWordPressVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Globe,
  PenLine,
  CalendarCheck,
  Workflow,
  LayoutDashboard,
  Users,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "Custom Web App or WordPress: What Fits You? | SohailWorks",
  description:
    "A custom React and Next.js app earns its keep when WordPress cannot do the job: workflows, dashboards and portals. When WordPress is enough, and when it is not.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/custom-web-app-vs-wordpress",
  },
  openGraph: {
    title: "Custom Web App or WordPress: What Fits You? | SohailWorks",
    description:
      "A custom React and Next.js app earns its keep when WordPress cannot do the job: workflows, dashboards and portals. When WordPress is enough, and when it is not.",
    url: "https://www.sohailworks.com/guides/custom-web-app-vs-wordpress",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web App or WordPress: What Fits You? | SohailWorks",
    description:
      "A custom React and Next.js app earns its keep when WordPress cannot do the job: workflows, dashboards and portals. When WordPress is enough, and when it is not.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom Web App or WordPress: Which Does Your Business Need?",
    description:
      "A custom React and Next.js app earns its keep when WordPress cannot do the job: workflows, dashboards and portals. When WordPress is enough, and when it is not.",
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
      "https://www.sohailworks.com/guides/custom-web-app-vs-wordpress",
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
        name: "Custom Web App or WordPress: Which Does Your Business Need?",
        item: "https://www.sohailworks.com/guides/custom-web-app-vs-wordpress",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a custom web app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A website built for your business alone, with React and Next.js, that does a specific job: a customer portal, a dashboard, or a booking flow that matches how you work. No templates, no plugins doing the heavy lifting.",
        },
      },
      {
        "@type": "Question",
        name: "When is WordPress enough?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When the job is a brochure site, a blog, or simple bookings. WordPress handles those well, launches faster, and is simpler to maintain.",
        },
      },
      {
        "@type": "Question",
        name: "When does a custom app earn its keep?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When WordPress cannot do the job: custom workflows, dashboards, customer portals, or a booking flow that needs to match your process exactly.",
        },
      },
      {
        "@type": "Question",
        name: "Is a custom app harder to maintain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It needs a developer who knows the code. WordPress is simpler day to day. That is the trade-off: exact fit against simple maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "Which one should I pick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pick by the job. If WordPress does it, use WordPress. If it cannot, a custom app is the honest answer. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const WHEN_WORDPRESS_ENOUGH = [
  {
    icon: Globe,
    num: "01",
    title: "A brochure site",
    desc: "Services, about, contact, a few pages that tell visitors who you are and how to reach you. WordPress does this well, and it does it fast.",
    good: "WordPress is enough when: the site informs, it does not run a process.",
  },
  {
    icon: PenLine,
    num: "02",
    title: "A blog and content",
    desc: "Posts, pages and SEO, growing one page at a time. WordPress is built for content, and it stays the simplest way to publish it.",
    good: "WordPress is enough when: the job is publishing, not building software.",
  },
  {
    icon: CalendarCheck,
    num: "03",
    title: "Simple bookings",
    desc: "A form and a calendar, a visitor picks a time and books. WordPress handles simple bookings with a plugin, no custom code needed.",
    good: "WordPress is enough when: booking is a form and a calendar, nothing more.",
  },
];

const WHEN_CUSTOM_EARNS = [
  {
    icon: Workflow,
    num: "01",
    title: "Custom workflows",
    desc: "Your process does not match any plugin: a quote flow, an approval step, a job that moves through stages your way. A custom app is built around your process, not the other way round.",
    good: "A custom app earns its keep when: the process is yours, and no plugin fits it.",
  },
  {
    icon: LayoutDashboard,
    num: "02",
    title: "Dashboards",
    desc: "Jobs, leads, invoices and team workload in one view, built for how you run the business. A dashboard that shows your numbers, not a generic report.",
    good: "A custom app earns its keep when: you need your numbers, your way, in one place.",
  },
  {
    icon: Users,
    num: "03",
    title: "Customer portals",
    desc: "Customers log in, see their jobs, pay invoices and book again, without calling you. A portal turns repeat customers into self service, and frees up your phone.",
    good: "A custom app earns its keep when: customers need their own login, not a phone call.",
  },
];

const TRADE_OFFS = [
  {
    num: "1",
    title: "WordPress launches faster",
    desc: "A WordPress site is up sooner, because the pieces already exist. A custom app is built from scratch, so it takes longer.",
  },
  {
    num: "2",
    title: "A custom app fits your process exactly",
    desc: "No workarounds, no plugins forced into a shape they were not built for. The app does what your business does.",
  },
  {
    num: "3",
    title: "WordPress is simpler to maintain",
    desc: "Updates, plugins and content are day to day work anyone can learn. A custom app needs its developer.",
  },
  {
    num: "4",
    title: "A custom app grows with your business",
    desc: "New features get built on top of what is already there, instead of stacking more plugins on a site that was never built for them.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is a custom web app?",
    a: "A website built for your business alone, with React and Next.js, that does a specific job: a customer portal, a dashboard, or a booking flow that matches how you work. No templates, no plugins doing the heavy lifting.",
  },
  {
    q: "When is WordPress enough?",
    a: "When the job is a brochure site, a blog, or simple bookings. WordPress handles those well, launches faster, and is simpler to maintain.",
  },
  {
    q: "When does a custom app earn its keep?",
    a: "When WordPress cannot do the job: custom workflows, dashboards, customer portals, or a booking flow that needs to match your process exactly.",
  },
  {
    q: "Is a custom app harder to maintain?",
    a: "It needs a developer who knows the code. WordPress is simpler day to day. That is the trade-off: exact fit against simple maintenance.",
  },
  {
    q: "Which one should I pick?",
    a: "Pick by the job. If WordPress does it, use WordPress. If it cannot, a custom app is the honest answer. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function CustomWebAppVsWordPressPage() {
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
                GUIDES / WEB APPS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                Custom Web App or WordPress: Which Does Your Business Need?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                WordPress is the right answer for most business websites, and
                that is fine. A custom web app earns its keep only when
                WordPress cannot do the job: custom workflows, dashboards and
                customer portals that match how your business actually works.
                This guide shows you how to tell the difference before you
                pay for either one.
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
              <CustomAppVsWordPressVisual />
            </div>
          </div>
        </section>

        {/* --- When WordPress is enough --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHEN WORDPRESS IS ENOUGH
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Three Jobs WordPress Handles Well
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              If your job is on this list, do not pay for a custom app.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHEN_WORDPRESS_ENOUGH.map((item) => (
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
                  Tell me what the website has to do on a free call and I
                  will tell you plainly whether WordPress does it or a custom
                  app is the honest answer. See what I build on my{" "}
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

        {/* --- When a custom app earns its keep --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHEN A CUSTOM APP EARNS ITS KEEP
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Three Jobs WordPress Cannot Do Well
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHEN_CUSTOM_EARNS.map((item) => (
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
                  <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                    {item.good}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Trade-offs --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE TRADE-OFFS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Four Trade-Offs, Stated Plainly
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              There is no free win here. Every gain has a cost, so pick with
              your eyes open.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TRADE_OFFS.map((step) => (
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
              Custom App or WordPress Questions, Answered
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
              Ready to pick the right one?
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
