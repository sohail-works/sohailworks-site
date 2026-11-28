// Guide 11: WordPress speed optimization, what slows a site down and the fixes that work.

import dynamic from "next/dynamic";
import { WpSpeedVisual } from "@/components/WpSpeedVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Gauge,
  Image,
  Plug,
  Server,
  Zap,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "WordPress Speed Optimization: How to Make Your Website Load Faster | SohailWorks",
  description:
    "WordPress speed optimization in plain words. What slows your site down, the fixes that actually work, and when to get help, for US and UK business owners.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/wordpress-speed-optimization",
  },
  openGraph: {
    title:
      "WordPress Speed Optimization: How to Make Your Website Load Faster | SohailWorks",
    description:
      "WordPress speed optimization in plain words. What slows your site down, the fixes that actually work, and when to get help, for US and UK business owners.",
    url: "https://www.sohailworks.com/guides/wordpress-speed-optimization",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WordPress Speed Optimization: How to Make Your Website Load Faster | SohailWorks",
    description:
      "WordPress speed optimization in plain words. What slows your site down, the fixes that actually work, and when to get help, for US and UK business owners.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WordPress Speed Optimization: How to Make Your Website Load Faster",
    description:
      "WordPress speed optimization in plain words. What slows your site down, the fixes that actually work, and when to get help, for US and UK business owners.",
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
      "https://www.sohailworks.com/guides/wordpress-speed-optimization",
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
        name: "WordPress Speed Optimization",
        item: "https://www.sohailworks.com/guides/wordpress-speed-optimization",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast should my WordPress site load?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aim for under 3 seconds on a phone. Most visitors decide in the first couple of seconds whether to stay or leave, and Google treats speed as a ranking factor. If your homepage takes longer than that on mobile data, you are losing callers before they even see your number.",
        },
      },
      {
        "@type": "Question",
        name: "Will speed optimization improve my Google ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it helps, but it is one factor among many. A fast site ranks better than a slow one with the same content, and visitors stay longer, which Google also notices. Speed alone will not put a thin page on page one. It works best together with good content and the right keywords.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need new hosting to make my site faster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not always. Most slow WordPress sites I see are slow because of heavy images, too many plugins and no caching, and those fixes work on any decent host. If your hosting is very cheap shared hosting with hundreds of sites on one server, then yes, a better host is part of the fix.",
        },
      },
      {
        "@type": "Question",
        name: "Can a plugin alone fix a slow site?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A caching plugin helps, but it cannot fix the real causes. If your images are huge, your theme is bloated and you run twenty plugins you never use, a cache plugin just serves a slow page slightly faster. The fix is to remove the weight first, then cache what is left.",
        },
      },
      {
        "@type": "Question",
        name: "How long does speed optimization take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical small business site takes a day or two of work: images compressed, plugins cleaned up, caching set up and the result tested on phone and desktop. Bigger sites with online stores take longer. Share your site on a free call and I will give you a fixed quote before we start, no hourly billing.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const SLOW_CAUSES = [
  {
    icon: Image,
    title: "Too much weight",
    desc: "This is the most common cause I find. Photos uploaded straight from a phone, often several megabytes each, a page builder theme full of features nobody uses, and a pile of plugins doing jobs that overlap. Every extra megabyte is time your customer waits, and on a phone connection that wait feels twice as long.",
  },
  {
    icon: Server,
    title: "A weak foundation",
    desc: "The second cause sits underneath the site. Cheap shared hosting puts your site on a server with hundreds of others, no caching is set up so every visit rebuilds the page from scratch, and there is no CDN, so a visitor in Texas waits for a server in another country. You can polish the front all day, but a weak foundation keeps the site slow.",
  },
];

const FIXES = [
  {
    icon: Image,
    title: "Compress your images",
    desc: "Resize photos to the size they actually show at, then compress them before upload. A hero photo rarely needs to be wider than 1600 pixels, and a compressed WebP version can be a fraction of the original size. This one fix alone often cuts seconds off a slow homepage, and it costs nothing.",
  },
  {
    icon: Zap,
    title: "Cache your pages",
    desc: "Caching saves a ready-made copy of each page, so the server hands it over instead of rebuilding it on every visit. It is the single biggest speed win after images. Most good caching plugins take ten minutes to set up, and the difference shows up the same day in any speed test.",
  },
  {
    icon: Plug,
    title: "Clean up your plugins",
    desc: "Go through the plugin list and delete anything you do not use, then check what is left. Two plugins doing the same job, a slider plugin with one slide in it, a form plugin you replaced last year, all of it loads on every page. Fewer plugins means fewer files to load and fewer things that can break.",
  },
  {
    icon: Server,
    title: "Fix the hosting",
    desc: "If the first three fixes are done and the site is still slow, the host is the problem. A managed WordPress host or a decent VPS gives your site room to breathe, and a CDN serves your images from a server near your customer. For a business that depends on its site, this is money well spent, not a luxury.",
  },
];

const PICKS = [
  {
    icon: Wrench,
    title: "Fix it yourself when",
    desc: "Your site is small, you are comfortable in the WordPress dashboard, and you have an afternoon to spare. Compress the images, turn on caching, delete the unused plugins, then test the result on your phone. If the speed test looks good and the site feels fast, you are done.",
    point: "Best for: small brochure sites with a patient owner.",
  },
  {
    icon: Gauge,
    title: "Hire someone when",
    desc: "Your site is a store, it takes bookings, or the speed test still looks bad after the basic fixes. That usually means the theme, the hosting or the database needs a proper look, and guessing at it can break the checkout. A developer who does this every week finds the real bottleneck in hours, not weekends.",
    point: "Best for: stores, booking sites and anything that earns money.",
  },
];

const GUIDE_FAQS = [
  {
    q: "How fast should my WordPress site load?",
    a: "Aim for under 3 seconds on a phone. Most visitors decide in the first couple of seconds whether to stay or leave, and Google treats speed as a ranking factor. If your homepage takes longer than that on mobile data, you are losing callers before they even see your number.",
  },
  {
    q: "Will speed optimization improve my Google ranking?",
    a: "Yes, it helps, but it is one factor among many. A fast site ranks better than a slow one with the same content, and visitors stay longer, which Google also notices. Speed alone will not put a thin page on page one. It works best together with good content and the right keywords.",
  },
  {
    q: "Do I need new hosting to make my site faster?",
    a: "Not always. Most slow WordPress sites I see are slow because of heavy images, too many plugins and no caching, and those fixes work on any decent host. If your hosting is very cheap shared hosting with hundreds of sites on one server, then yes, a better host is part of the fix.",
  },
  {
    q: "Can a plugin alone fix a slow site?",
    a: "No. A caching plugin helps, but it cannot fix the real causes. If your images are huge, your theme is bloated and you run twenty plugins you never use, a cache plugin just serves a slow page slightly faster. The fix is to remove the weight first, then cache what is left.",
  },
  {
    q: "How long does speed optimization take?",
    a: "A typical small business site takes a day or two of work: images compressed, plugins cleaned up, caching set up and the result tested on phone and desktop. Bigger sites with online stores take longer. Share your site on a free call and I will give you a fixed quote before we start, no hourly billing.",
  },
];

export default function WordPressSpeedOptimizationPage() {
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
                WordPress Speed Optimization: How to Make Your Website Load
                Faster
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                A slow website costs you customers twice. People leave before
                they call you, and Google ranks fast sites above slow ones.
                Most WordPress sites are slow for the same few reasons, and
                the fixes are not mysterious. This guide explains what slows
                your site down and what actually works, in plain words.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                It is written for business owners in the US and UK, roofers,
                plumbers, HVAC, med spas, cleaning, builders and
                electricians, who want a site that loads fast on a phone and
                turns visitors into calls.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <WpSpeedVisual />
            </div>
          </div>
        </section>

        {/* -- What slows it down -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE CAUSES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What Actually Slows a WordPress Site Down
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Before you fix anything, it helps to know where the slowness
              comes from. In my experience it is almost always one of these
              two.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SLOW_CAUSES.map((item) => (
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

        {/* -- The fixes -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE FIXES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              The Fixes That Actually Work
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Do them in this order. Each one builds on the last, and the
              first two usually solve most of the problem.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FIXES.map((item) => (
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
              Should You Fix It Yourself or Hire Someone?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Honest answer: it depends on what your site does for your
              business.
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
                  Not sure what is slowing your site down?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me your site address on a free call and I will check
                  what is actually causing the slowness, then give you a
                  fixed quote before we start. See how I work on my{" "}
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
              WordPress Speed Questions, Answered
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
              Ready to make your site fast?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me your site address and I will send a clear plan,
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
