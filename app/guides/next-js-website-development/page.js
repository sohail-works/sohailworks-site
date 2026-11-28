// Step 7 - Guide 17: Next.js Website Development: a fast website that ranks on Google
// Route: app/guides/next-js-website-development/page.js
// Destination file: app/guides/next-js-website-development/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { NextJsDevVisual } from "@/components/NextJsDevVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Atom,
  Layers,
  Zap,
  Search,
  TrendingUp,
  Smartphone,
  Rocket,
  Globe,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "Next.js Website Development: A Fast Website That Ranks on Google | SohailWorks",
  description:
    "Next.js website development in plain words: what a Next.js website is, why it loads fast and ranks well, and when it is the right choice for your business.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/next-js-website-development",
  },
  openGraph: {
    title:
      "Next.js Website Development: A Fast Website That Ranks on Google | SohailWorks",
    description:
      "Next.js website development in plain words: what a Next.js website is, why it loads fast and ranks well, and when it is the right choice for your business.",
    url: "https://www.sohailworks.com/guides/next-js-website-development",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js Website Development: A Fast Website That Ranks on Google | SohailWorks",
    description:
      "Next.js website development in plain words: what a Next.js website is, why it loads fast and ranks well, and when it is the right choice for your business.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Website Development: A Fast Website That Ranks on Google",
    description:
      "Next.js website development in plain words: what a Next.js website is, why it loads fast and ranks well, and when it is the right choice for your business.",
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
      "https://www.sohailworks.com/guides/next-js-website-development",
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
        name: "Next.js Website Development",
        item: "https://www.sohailworks.com/guides/next-js-website-development",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Next.js website development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js is a framework for building websites and web apps on top of React. Next.js website development means building your site with it: the pages, the design, the forms and the booking flows, with the pages prepared on the server so they load fast. The result is a website that feels instant to visitors and is easy for Google to read.",
        },
      },
      {
        "@type": "Question",
        name: "Is Next.js better than WordPress for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For speed and for how easily Google reads the page, yes, Next.js usually has the edge. Its pages are prepared on the server, so Google sees the full content straight away. WordPress can rank just as well with the right setup, and it is easier to edit yourself. The best choice depends on your business, not on the tool alone.",
        },
      },
      {
        "@type": "Question",
        name: "Is a Next.js website fast on phones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, that is one of its biggest strengths. Next.js sends less work to the phone, loads images only when needed, and prepares pages before the visitor asks for them. Most of your customers will visit on a phone, often on a slow connection, so this matters more than any desktop score. A fast phone experience is where Next.js earns its keep.",
        },
      },
      {
        "@type": "Question",
        name: "Can I edit a Next.js website myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on how the site is built. Text, images and prices can be made editable through a connected content system, so you can change them without touching code. But Next.js is not like WordPress, where you log in and edit any page yourself. If editing everything yourself matters most, WordPress may fit better.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a Next.js website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the size of the site. A business website with a handful of pages, a contact form and a booking flow usually takes two to three weeks, including design and testing. A larger site with custom features takes longer. You will get a clear timeline before we start, and the site is tested on real phones before launch.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: Atom,
    title: "What Next.js actually is",
    desc: "Next.js is a framework for building websites and web apps, built on top of React. React handles what your customers see and tap on. Next.js adds the rest: fast page loading, pages Google can read easily, image handling and hosting that scales. It is the full package, not just the front end, and that is why businesses pick it.",
  },
  {
    icon: Layers,
    title: "How it differs from a normal website",
    desc: "A normal website sends the visitor a page that the browser then has to build. A Next.js site prepares the page on the server first, so the visitor sees real content almost at once. The difference is most obvious on a phone with a slow connection. It also means Google can read the full page straight away, which helps your rankings.",
  },
];

const WHY = [
  {
    icon: Zap,
    title: "Speed customers can feel",
    desc: "Speed is not a number on a report. It is the half second between a customer tapping your link and seeing your page. Next.js prepares pages ahead of time and sends less work to the phone, so that half second shrinks. A fast site keeps people on the page, and people who stay are the ones who call.",
  },
  {
    icon: Search,
    title: "Google can read it",
    desc: "Google ranks pages it can read easily. Because Next.js prepares pages on the server, Google sees the full content on the first visit, with no waiting for the browser to build it. That matters most for new sites, which have no history to lean on. Good content plus a readable page is the foundation of ranking.",
  },
  {
    icon: TrendingUp,
    title: "Grows with your business",
    desc: "A Next.js site starts small and grows without a rebuild. Add pages, add a booking flow, add a customer portal, and the same foundation carries it. The code stays organised as the site grows, which keeps future work cheaper. Many businesses rebuild because their first site could not grow. Next.js is built to avoid that.",
  },
  {
    icon: Smartphone,
    title: "Built for phones first",
    desc: "Most of your customers will visit on a phone, often on a slow connection, so the phone experience is the real website. Next.js loads images only when they are needed, keeps the first screen light, and makes taps feel instant. A site that feels fast on a cheap phone feels fast everywhere, and that is what turns visitors into calls.",
  },
];

const FIT = [
  {
    icon: Rocket,
    title: "Pick Next.js when",
    desc: "You want a fast website or customer-facing app that ranks on Google, loads quickly on phones and is easy to grow later. For most local businesses, a website, a booking flow or a customer portal, this is the safer pick. If speed and Google traffic matter to your business, start here.",
    point: "Best for: business websites, booking flows and customer portals.",
  },
  {
    icon: Globe,
    title: "Pick WordPress when",
    desc: "You want to edit every page yourself, run a blog with new posts every week, or sell online with WooCommerce. WordPress is easier to manage day to day, and its plugin library covers almost anything. If hands-on control matters more than raw speed, WordPress is the better fit. Both can rank well when built properly.",
    point: "Best for: blogs, WooCommerce stores and hands-on editing.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is Next.js website development?",
    a: "Next.js is a framework for building websites and web apps on top of React. Next.js website development means building your site with it: the pages, the design, the forms and the booking flows, with the pages prepared on the server so they load fast. The result is a website that feels instant to visitors and is easy for Google to read.",
  },
  {
    q: "Is Next.js better than WordPress for SEO?",
    a: "For speed and for how easily Google reads the page, yes, Next.js usually has the edge. Its pages are prepared on the server, so Google sees the full content straight away. WordPress can rank just as well with the right setup, and it is easier to edit yourself. The best choice depends on your business, not on the tool alone.",
  },
  {
    q: "Is a Next.js website fast on phones?",
    a: "Yes, that is one of its biggest strengths. Next.js sends less work to the phone, loads images only when needed, and prepares pages before the visitor asks for them. Most of your customers will visit on a phone, often on a slow connection, so this matters more than any desktop score. A fast phone experience is where Next.js earns its keep.",
  },
  {
    q: "Can I edit a Next.js website myself?",
    a: "It depends on how the site is built. Text, images and prices can be made editable through a connected content system, so you can change them without touching code. But Next.js is not like WordPress, where you log in and edit any page yourself. If editing everything yourself matters most, WordPress may fit better.",
  },
  {
    q: "How long does it take to build a Next.js website?",
    a: "It depends on the size of the site. A business website with a handful of pages, a contact form and a booking flow usually takes two to three weeks, including design and testing. A larger site with custom features takes longer. You will get a clear timeline before we start, and the site is tested on real phones before launch.",
  },
];

export default function NextJsWebsiteDevelopmentPage() {
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
                Next.js Website Development: A Fast Website That Ranks on
                Google
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                Your customers will not wait for a slow website. On a phone,
                on a slow connection, a site has about two seconds before
                the visitor goes back to Google and taps your competitor
                instead. Speed is not a nice extra. It is the difference
                between a call and a lost customer.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains Next.js website development in plain
                words, no jargon. It is written for business owners in the
                US and UK who want a fast website that ranks on Google and
                turns visitors into calls.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <NextJsDevVisual />
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
              What Next.js Is, in Plain Words
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Next.js sounds technical, but the idea is simple: prepare
              the page before the visitor arrives, so it loads fast.
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

        {/* -- Why businesses pick it -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHY NEXT.JS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Why Businesses Pick Next.js
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Forget the technical debates. These are the four reasons
              that change what your customers experience and what you pay.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WHY.map((item) => (
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

        {/* -- Is it right for you -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE DECISION
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Is Next.js Right for Your Business?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              There is no wrong answer here, only a better fit. Use this
              simple test.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FIT.map((item) => (
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
                  Tell me what you want the site to do, and I will
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
              Next.js Website Development Questions, Answered
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
              Ready for a fast website?
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
