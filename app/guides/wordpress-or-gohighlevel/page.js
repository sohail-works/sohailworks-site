// Step 7 - Guide 5: WordPress or GoHighLevel for a local business website
// Route: app/guides/wordpress-or-gohighlevel/page.js
// Destination file: app/guides/wordpress-or-gohighlevel/page.js
// After push: add this URL to the sitemap (9th URL) and request indexing once in GSC.

import dynamic from "next/dynamic";
import { WordPressOrGHLVisual } from "@/components/WordPressOrGHLVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Globe,
  PenLine,
  LayoutDashboard,
  Workflow,
  Phone,
  Search,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "WordPress or GoHighLevel for Your Website | SohailWorks",
  description:
    "WordPress or GoHighLevel for your website? WordPress fits content and full design control. GoHighLevel fits funnels and follow-up. A checklist to decide.",
  alternates: {
    canonical: "https://www.sohailworks.com/guides/wordpress-or-gohighlevel",
  },
  openGraph: {
    title: "WordPress or GoHighLevel for Your Website | SohailWorks",
    description:
      "WordPress or GoHighLevel for your website? WordPress fits content and full design control. GoHighLevel fits funnels and follow-up. A checklist to decide.",
    url: "https://www.sohailworks.com/guides/wordpress-or-gohighlevel",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress or GoHighLevel for Your Website | SohailWorks",
    description:
      "WordPress or GoHighLevel for your website? WordPress fits content and full design control. GoHighLevel fits funnels and follow-up. A checklist to decide.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WordPress or GoHighLevel for a Local Business Website?",
    description:
      "WordPress or GoHighLevel for your website? WordPress fits content and full design control. GoHighLevel fits funnels and follow-up. A checklist to decide.",
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
      "https://www.sohailworks.com/guides/wordpress-or-gohighlevel",
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
        name: "WordPress Development Services",
        item: "https://www.sohailworks.com/wordpress-development-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "WordPress or GoHighLevel for a Local Business Website?",
        item: "https://www.sohailworks.com/guides/wordpress-or-gohighlevel",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I use WordPress and GoHighLevel together?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many businesses run a WordPress website with GoHighLevel behind it for funnels, CRM and follow-up. You do not have to pick one and lose the other.",
        },
      },
      {
        "@type": "Question",
        name: "Is GoHighLevel a website builder?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It can build pages and funnels, but it is not a full website platform like WordPress. GoHighLevel is built for funnels, CRM and automation around the job.",
        },
      },
      {
        "@type": "Question",
        name: "Which one is better for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress, for most local businesses. It gives you full control over pages, blog posts and technical SEO. GoHighLevel pages can rank, but WordPress is the stronger SEO tool.",
        },
      },
      {
        "@type": "Question",
        name: "Which one launches faster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GoHighLevel, when the job is a funnel and follow-up. A full WordPress site with blog and service pages takes longer to build properly.",
        },
      },
      {
        "@type": "Question",
        name: "Which one should I pick?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pick by the job. If content and SEO matter most, WordPress. If capturing leads and following up matters most, GoHighLevel. If both matter, use both. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const WHEN_WORDPRESS_FITS = [
  {
    icon: PenLine,
    num: "01",
    title: "Content and SEO matter most",
    desc: "You want pages that rank, a blog that grows, and service pages for every area you cover. WordPress gives you full control over all of it, page by page.",
    good: "WordPress fits when: Google traffic is part of the plan, not an afterthought.",
  },
  {
    icon: LayoutDashboard,
    num: "02",
    title: "Full design control",
    desc: "You want the site to look exactly how you pictured it, with custom layouts, sections and pages. WordPress lets you build the design, not pick from a funnel template.",
    good: "WordPress fits when: the design has to match your brand, not a template.",
  },
  {
    icon: Globe,
    num: "03",
    title: "A website that grows with you",
    desc: "New services, new areas, new pages, new posts. A WordPress site grows one page at a time, and every page can bring in more local traffic over time.",
    good: "WordPress fits when: the site is a long term asset, not a one page funnel.",
  },
];

const WHEN_GHL_FITS = [
  {
    icon: Phone,
    num: "01",
    title: "Funnels that capture leads",
    desc: "The job is simple: a visitor lands, fills in the form, and becomes a lead. GoHighLevel funnels are built for exactly that, with no extra pages in the way.",
    good: "GoHighLevel fits when: the page has one job, capture the lead.",
  },
  {
    icon: Workflow,
    num: "02",
    title: "Follow-up that runs itself",
    desc: "A missed call gets a text back, a lead gets chased automatically, a review gets asked for. GoHighLevel is built for the follow-up around the job, not just the page.",
    good: "GoHighLevel fits when: leads go cold because nobody follows up.",
  },
  {
    icon: Search,
    num: "03",
    title: "Speed to launch",
    desc: "When the job is a funnel and follow-up, GoHighLevel launches faster than a full WordPress site. You get a working system in days, not weeks of page building.",
    good: "GoHighLevel fits when: you need leads this week, not a website next month.",
  },
];

const DECISION_CHECKLIST = [
  {
    num: "1",
    title: "You need a blog that ranks",
    desc: "If yes, WordPress. A blog needs pages, posts and SEO control, and that is where WordPress is strongest.",
  },
  {
    num: "2",
    title: "You need funnels that capture leads",
    desc: "If yes, GoHighLevel. A funnel has one job, and GoHighLevel funnels are built for it.",
  },
  {
    num: "3",
    title: "You need follow-up that runs itself",
    desc: "If yes, GoHighLevel. Missed-call text-back, automatic follow-up and review requests live there.",
  },
  {
    num: "4",
    title: "You need both",
    desc: "Then use both. A WordPress website in front, GoHighLevel behind it for funnels, CRM and follow-up.",
  },
];

const GUIDE_FAQS = [
  {
    q: "Can I use WordPress and GoHighLevel together?",
    a: "Yes. Many businesses run a WordPress website with GoHighLevel behind it for funnels, CRM and follow-up. You do not have to pick one and lose the other.",
  },
  {
    q: "Is GoHighLevel a website builder?",
    a: "It can build pages and funnels, but it is not a full website platform like WordPress. GoHighLevel is built for funnels, CRM and automation around the job.",
  },
  {
    q: "Which one is better for SEO?",
    a: "WordPress, for most local businesses. It gives you full control over pages, blog posts and technical SEO. GoHighLevel pages can rank, but WordPress is the stronger SEO tool.",
  },
  {
    q: "Which one launches faster?",
    a: "GoHighLevel, when the job is a funnel and follow-up. A full WordPress site with blog and service pages takes longer to build properly.",
  },
  {
    q: "Which one should I pick?",
    a: "Pick by the job. If content and SEO matter most, WordPress. If capturing leads and following up matters most, GoHighLevel. If both matter, use both. Tell me on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function WordPressOrGoHighLevelPage() {
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
                GUIDES / WORDPRESS AND GOHIGHLEVEL
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                WordPress or GoHighLevel for a Local Business Website?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                WordPress and GoHighLevel are not the same kind of tool.
                WordPress is a website platform: pages, blog posts and SEO,
                with full design control. GoHighLevel is a system for funnels,
                CRM and follow-up. The right pick depends on the job the
                website has to do, not on which tool is more popular.
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
              <WordPressOrGHLVisual />
            </div>
          </div>
        </section>

        {/* --- When WordPress fits --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHEN WORDPRESS FITS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Three Signs WordPress Is the Pick
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              If these three sound like your business, start with WordPress.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHEN_WORDPRESS_FITS.map((item) => (
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
                  Want a WordPress site that ranks?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me what you need on a free call and I will give you a
                  fixed quote before we start, no hourly billing. See what I
                  build on my{" "}
                  <a
                    href="/wordpress-development-services"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    WordPress development services
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

        {/* --- When GoHighLevel fits --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHEN GOHIGHLEVEL FITS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Three Signs GoHighLevel Is the Pick
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHEN_GHL_FITS.map((item) => (
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

        {/* --- Decision checklist --- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              DECISION CHECKLIST
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Four Questions, One Answer
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Answer these four honestly and the pick makes itself.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DECISION_CHECKLIST.map((step) => (
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
              WordPress or GoHighLevel Questions, Answered
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
