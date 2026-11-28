// Guide 12: Figma to WordPress, how a design file becomes a working website.

import dynamic from "next/dynamic";
import { FigmaToWpVisual } from "@/components/FigmaToWpVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Palette,
  LayoutTemplate,
  Smartphone,
  PenTool,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "Figma to WordPress: How Your Design Becomes a Real Website | SohailWorks",
  description:
    "Figma to WordPress in plain words. How a design file becomes a fast, editable WordPress site, what to check before you start, and when to convert or rebuild, for US and UK business owners.",
  alternates: {
    canonical: "https://www.sohailworks.com/guides/figma-to-wordpress",
  },
  openGraph: {
    title:
      "Figma to WordPress: How Your Design Becomes a Real Website | SohailWorks",
    description:
      "Figma to WordPress in plain words. How a design file becomes a fast, editable WordPress site, what to check before you start, and when to convert or rebuild, for US and UK business owners.",
    url: "https://www.sohailworks.com/guides/figma-to-wordpress",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Figma to WordPress: How Your Design Becomes a Real Website | SohailWorks",
    description:
      "Figma to WordPress in plain words. How a design file becomes a fast, editable WordPress site, what to check before you start, and when to convert or rebuild, for US and UK business owners.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Figma to WordPress: How Your Design Becomes a Real Website",
    description:
      "Figma to WordPress in plain words. How a design file becomes a fast, editable WordPress site, what to check before you start, and when to convert or rebuild, for US and UK business owners.",
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
      "https://www.sohailworks.com/guides/figma-to-wordpress",
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
        name: "Figma to WordPress",
        item: "https://www.sohailworks.com/guides/figma-to-wordpress",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does Figma to WordPress take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A small business site with five to eight pages usually takes one to two weeks from a finished design. Bigger sites with a store or booking system take longer. The biggest delay is usually an unfinished design, so make sure every page and the mobile version are done before the build starts.",
        },
      },
      {
        "@type": "Question",
        name: "Will my site look exactly like the design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, if the conversion is done by hand. A good developer matches the spacing, the fonts and the colours pixel for pixel on desktop, then adapts the layout for phones instead of shrinking it. If a section looks different, that is usually a shortcut in the build, not a limit of WordPress.",
        },
      },
      {
        "@type": "Question",
        name: "Can I edit the site myself after it is built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, that is the whole point of building it in WordPress. Text, photos, prices and new pages should all be editable from the dashboard without touching code. Ask for this before the build starts, because a site built the lazy way can lock you out of your own content.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need Elementor or a custom theme?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the design. Elementor works well when you want to edit layouts yourself later and the design is fairly standard. A custom theme fits better when the design is unusual or speed matters most, because it carries less weight. Either way, the finished site should look like your design, not like a template.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Figma to WordPress cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the number of pages, how complex the design is, and whether you need a store, forms or bookings on top. A simple brochure site costs far less than a store with custom features. Share your Figma file on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: PenTool,
    title: "What the conversion is",
    desc: "Figma is where designers draw the site. WordPress is where it lives and works. The conversion is the job of turning those drawings into real pages: the header, the hero, the service cards, the forms, all built as a WordPress theme that loads fast and works on phones. It is not an export button. It is a build, done by hand, from the design.",
  },
  {
    icon: LayoutTemplate,
    title: "What you get at the end",
    desc: "A finished WordPress site that looks like your Figma file and that you can edit yourself. New services, new photos, new prices, all from the dashboard. The site should also be fast, show up properly on Google, and let visitors call or book without friction. If any of that is missing, the conversion was not done properly.",
  },
];

const STEPS = [
  {
    icon: PenTool,
    title: "Slice the design",
    desc: "First the design is taken apart into pieces: fonts, colours, spacing, buttons, sections. A good developer spots the problems here, like a font that is too heavy, a section that will not fit on a phone, or a button with no hover state. Fixing those in Figma is cheap. Fixing them after the build is not.",
  },
  {
    icon: LayoutTemplate,
    title: "Build the theme",
    desc: "Then the theme is built, section by section, to match the design. This is where quality shows. A careful build keeps the code clean and the site fast. A rushed build piles on page builder widgets and plugins until the site looks right but loads slowly. Same design on screen, very different site underneath.",
  },
  {
    icon: Smartphone,
    title: "Make it editable",
    desc: "A site you cannot edit is a site you will pay for twice. Every text block, photo and price should be editable from the WordPress dashboard, and the layout should not break when you change a word. This step is often skipped, and owners only find out months later when a simple edit needs a developer.",
  },
  {
    icon: Wrench,
    title: "Test on phones and speed",
    desc: "Finally the site is tested the way your customers will use it: on a phone, on mobile data, with real content. Buttons must be easy to tap, the phone number must work, forms must send, and the pages must load quickly. A design that only looks good on a designer screen is not a finished website.",
  },
];

const PICKS = [
  {
    icon: PenTool,
    title: "Convert the design when",
    desc: "You already have a finished Figma design you are happy with, including the mobile version. The design fits your business and your customers, and you just need it built properly. This is the fastest route to a site that looks like your brand instead of a template.",
    point: "Best for: finished designs with desktop and mobile versions.",
  },
  {
    icon: Palette,
    title: "Start fresh when",
    desc: "The design is half done, it was made for a different business, or it ignores phones completely. Converting a weak design just freezes its problems into code. In that case it is cheaper to fix the design first, or let the developer design and build together, than to rebuild the site six months later.",
    point: "Best for: unfinished designs or designs that ignore mobile.",
  },
];

const GUIDE_FAQS = [
  {
    q: "How long does Figma to WordPress take?",
    a: "A small business site with five to eight pages usually takes one to two weeks from a finished design. Bigger sites with a store or booking system take longer. The biggest delay is usually an unfinished design, so make sure every page and the mobile version are done before the build starts.",
  },
  {
    q: "Will my site look exactly like the design?",
    a: "Yes, if the conversion is done by hand. A good developer matches the spacing, the fonts and the colours pixel for pixel on desktop, then adapts the layout for phones instead of shrinking it. If a section looks different, that is usually a shortcut in the build, not a limit of WordPress.",
  },
  {
    q: "Can I edit the site myself after it is built?",
    a: "Yes, that is the whole point of building it in WordPress. Text, photos, prices and new pages should all be editable from the dashboard without touching code. Ask for this before the build starts, because a site built the lazy way can lock you out of your own content.",
  },
  {
    q: "Do I need Elementor or a custom theme?",
    a: "It depends on the design. Elementor works well when you want to edit layouts yourself later and the design is fairly standard. A custom theme fits better when the design is unusual or speed matters most, because it carries less weight. Either way, the finished site should look like your design, not like a template.",
  },
  {
    q: "How much does Figma to WordPress cost?",
    a: "It depends on the number of pages, how complex the design is, and whether you need a store, forms or bookings on top. A simple brochure site costs far less than a store with custom features. Share your Figma file on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function FigmaToWordPressPage() {
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
                Figma to WordPress: How Your Design Becomes a Real Website
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                You have a design in Figma and it looks great. Now it needs
                to become a real website that loads fast, works on phones,
                shows up on Google and lets customers call you. That step is
                the Figma to WordPress conversion, and the way it is done
                decides whether you get a fast site you can edit, or a slow
                one you keep paying to fix.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains the process in plain words, for business
                owners in the US and UK who already have a design, or are
                thinking of getting one made, and want to know what happens
                next.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <FigmaToWpVisual />
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
              What Figma to WordPress Actually Means
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Two files, two jobs. Figma draws the site, WordPress runs it.
              Here is what sits between them.
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

        {/* -- The process -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE PROCESS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              How a Design Becomes a Website
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Four steps, in order. Skip one and you will feel it later,
              usually when something breaks or a simple edit needs a
              developer.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((item) => (
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
              Convert the Design or Start Fresh?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              A finished design is an asset. An unfinished one is a trap.
              Tell them apart before you pay for a build.
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
                  Have a Figma file ready to build?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Share it on a free call and I will tell you honestly
                  whether it is ready to build or needs work first, then
                  give you a fixed quote. See how I work on my{" "}
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
              Figma to WordPress Questions, Answered
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
              Ready to turn your design into a website?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Send me your Figma file and I will send a clear plan, timeline
              and price.
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
