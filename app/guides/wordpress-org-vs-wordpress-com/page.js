// Step 7 - Guide 8: WordPress.org vs WordPress.com: which one is right for your business?
// Route: app/guides/wordpress-org-vs-wordpress-com/page.js
// Destination file: app/guides/wordpress-org-vs-wordpress-com/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { WordpressOrgVsComVisual } from "@/components/WordpressOrgVsComVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  KeyRound,
  Cloud,
  Puzzle,
  Search,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "WordPress.org vs WordPress.com: Which One Is Right for Your Business? | SohailWorks",
  description:
    "WordPress.org vs WordPress.com, explained in plain words. One you own, one you rent. See the real differences in cost, control and SEO for US and UK small businesses.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/wordpress-org-vs-wordpress-com",
  },
  openGraph: {
    title:
      "WordPress.org vs WordPress.com: Which One Is Right for Your Business? | SohailWorks",
    description:
      "WordPress.org vs WordPress.com, explained in plain words. One you own, one you rent. See the real differences in cost, control and SEO for US and UK small businesses.",
    url: "https://www.sohailworks.com/guides/wordpress-org-vs-wordpress-com",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WordPress.org vs WordPress.com: Which One Is Right for Your Business? | SohailWorks",
    description:
      "WordPress.org vs WordPress.com, explained in plain words. One you own, one you rent. See the real differences in cost, control and SEO for US and UK small businesses.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WordPress.org vs WordPress.com: Which One Is Right for Your Business?",
    description:
      "WordPress.org vs WordPress.com, explained in plain words. One you own, one you rent. See the real differences in cost, control and SEO for US and UK small businesses.",
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
      "https://www.sohailworks.com/guides/wordpress-org-vs-wordpress-com",
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
        name: "WordPress.org vs WordPress.com",
        item: "https://www.sohailworks.com/guides/wordpress-org-vs-wordpress-com",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between WordPress.org and WordPress.com?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress.org is free software you install on your own hosting, so you own the site and control everything. WordPress.com is a hosted service where you rent space and follow their rules. Same name, same editor, very different ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Is WordPress.com free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is a free plan, but it shows their ads, gives you a WordPress.com address and blocks most business features. A business site on WordPress.com needs a paid plan, and the features you need, like plugins and custom design, sit on the higher-priced plans.",
        },
      },
      {
        "@type": "Question",
        name: "Can I move from WordPress.com to WordPress.org later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, your posts and pages can be moved over, but the design, the plugins and some settings do not transfer cleanly, so it takes real work. If you already know the site will grow, starting on WordPress.org saves you a rebuild later.",
        },
      },
      {
        "@type": "Question",
        name: "Which is better for SEO, WordPress.org or WordPress.com?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress.org, in most cases. You control the SEO plugins, the speed, the page structure and the technical details Google checks. WordPress.com limits what you can change, so you cannot always fix the issue that is holding your rankings back.",
        },
      },
      {
        "@type": "Question",
        name: "Which one should my business choose?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most local businesses, WordPress.org. You own the site, you can add bookings, quotes and any feature you need, and you control the SEO. WordPress.com fits a simple blog or personal page. If you are unsure, tell me what the site needs to do on a free call and I will recommend the right setup.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: Cloud,
    title: "WordPress.com: you rent it",
    desc: "WordPress.com is a hosted service. You sign up, pick a design and publish. It is quick to start and they handle the technical side. The trade-off is control. Your design options, your plugins and your ability to add booking or automation features are limited by the plan you pay for.",
  },
  {
    icon: KeyRound,
    title: "WordPress.org: you own it",
    desc: "WordPress.org is the free software you install on your own hosting. You own the site, the content and the data. You can install any plugin, use any design, add booking calendars, connect GoHighLevel or any other tool, and change anything you like. The trade-off is that setup needs someone who knows what they are doing.",
  },
];

const DIFFERENCES = [
  {
    icon: KeyRound,
    title: "Ownership and control",
    desc: "On WordPress.org, the site is yours. Move hosts, change the design, add any feature. On WordPress.com, you live by their rules. If they change a rule or retire a feature, your site changes with it, whether you like it or not.",
  },
  {
    icon: Puzzle,
    title: "Plugins and features",
    desc: "WordPress.org lets you install any plugin: booking systems, quote forms, SEO tools, payment pages, automation. WordPress.com only allows plugins on higher-priced plans, and some plugins are blocked entirely. For a business that needs bookings or quotes, that limit bites fast.",
  },
  {
    icon: Search,
    title: "Google rankings and SEO",
    desc: "Both can rank, but WordPress.org gives you full control over SEO: the plugins, the speed settings, the page structure and the technical fixes Google cares about. WordPress.com limits what you can change, so you cannot always fix the thing that is holding your rankings back.",
  },
  {
    icon: Wallet,
    title: "Cost over time",
    desc: "WordPress.com looks cheap at the start, but the plan you need for business features costs more every month, and the price rises as you add features. WordPress.org needs hosting and setup once, and the ongoing cost is usually lower for a business site. Share your requirements on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

const PICKS = [
  {
    icon: Cloud,
    title: "Pick WordPress.com when",
    desc: "You want a simple blog or a personal page, you will never need bookings, quotes or custom features, and you are happy to stay inside their design limits. It is a fine start, but most growing businesses outgrow it.",
    point: "Best for: a simple blog or personal page that never needs business features.",
  },
  {
    icon: KeyRound,
    title: "Pick WordPress.org when",
    desc: "You run a business and want a website that brings in calls, takes bookings, ranks on Google and grows with you. You want to own your site and your data, and you want any feature added without asking a platform for permission.",
    point: "Best for: local businesses that need bookings, quotes and Google traffic.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is the difference between WordPress.org and WordPress.com?",
    a: "WordPress.org is free software you install on your own hosting, so you own the site and control everything. WordPress.com is a hosted service where you rent space and follow their rules. Same name, same editor, very different ownership.",
  },
  {
    q: "Is WordPress.com free?",
    a: "There is a free plan, but it shows their ads, gives you a WordPress.com address and blocks most business features. A business site on WordPress.com needs a paid plan, and the features you need, like plugins and custom design, sit on the higher-priced plans.",
  },
  {
    q: "Can I move from WordPress.com to WordPress.org later?",
    a: "Yes, your posts and pages can be moved over, but the design, the plugins and some settings do not transfer cleanly, so it takes real work. If you already know the site will grow, starting on WordPress.org saves you a rebuild later.",
  },
  {
    q: "Which is better for SEO, WordPress.org or WordPress.com?",
    a: "WordPress.org, in most cases. You control the SEO plugins, the speed, the page structure and the technical details Google checks. WordPress.com limits what you can change, so you cannot always fix the issue that is holding your rankings back.",
  },
  {
    q: "Which one should my business choose?",
    a: "For most local businesses, WordPress.org. You own the site, you can add bookings, quotes and any feature you need, and you control the SEO. WordPress.com fits a simple blog or personal page. If you are unsure, tell me what the site needs to do on a free call and I will recommend the right setup.",
  },
];

export default function WordPressOrgVsWordPressComPage() {
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
                GUIDES / WORDPRESS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                WordPress.org vs WordPress.com: Which One Is Right for Your
                Business?
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                WordPress powers a huge share of the web, but the name hides
                a split. WordPress.org and WordPress.com look the same and
                share the same name, yet they are two different products.
                One you own, one you rent. Pick the wrong one and you can
                hit a wall the day you want bookings, custom design or
                better Google rankings.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains the difference in plain words. It is
                written for business owners in the US and UK, roofers,
                plumbers, HVAC, med spas, cleaning, builders and
                electricians, who want a website that brings in calls and
                can grow with the business.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <WordpressOrgVsComVisual />
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
              The One Difference That Matters
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Everything else follows from this one fact. With WordPress.org,
              you own the website. With WordPress.com, you rent space on
              someone else&apos;s platform.
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
              Side by Side: What Changes for Your Business
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Four differences decide whether the site helps your business or
              holds it back.
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
              For a hobby blog, either works. For a business, the answer is
              usually clear.
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
                  Want a WordPress site you actually own?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  I build WordPress.org sites for local businesses, with
                  booking, SEO and speed built in from day one. See how I
                  work on my{" "}
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

        {/* -- FAQ -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              WordPress.org vs WordPress.com Questions, Answered
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
              Ready for a WordPress site you own?
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
