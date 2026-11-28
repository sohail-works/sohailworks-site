// Step 7 - Guide 15: WordPress Local SEO: how customers near you find you on Google
// Route: app/guides/wordpress-local-seo/page.js
// Destination file: app/guides/wordpress-local-seo/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { WpLocalSeoVisual } from "@/components/WpLocalSeoVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  MapPin,
  Globe,
  BadgeCheck,
  Star,
  Search,
  Phone,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "WordPress Local SEO: How Customers Near You Find You on Google | SohailWorks",
  description:
    "WordPress local SEO in plain words: how Google picks which local business shows up first, what your site needs to rank near you, and the checks that move the map and the rankings.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/wordpress-local-seo",
  },
  openGraph: {
    title:
      "WordPress Local SEO: How Customers Near You Find You on Google | SohailWorks",
    description:
      "WordPress local SEO in plain words: how Google picks which local business shows up first, what your site needs to rank near you, and the checks that move the map and the rankings.",
    url: "https://www.sohailworks.com/guides/wordpress-local-seo",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WordPress Local SEO: How Customers Near You Find You on Google | SohailWorks",
    description:
      "WordPress local SEO in plain words: how Google picks which local business shows up first, what your site needs to rank near you, and the checks that move the map and the rankings.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WordPress Local SEO: How Customers Near You Find You on Google",
    description:
      "WordPress local SEO in plain words: how Google picks which local business shows up first, what your site needs to rank near you, and the checks that move the map and the rankings.",
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
      "https://www.sohailworks.com/guides/wordpress-local-seo",
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
        name: "WordPress Local SEO",
        item: "https://www.sohailworks.com/guides/wordpress-local-seo",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WordPress local SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local SEO helps Google show your business to people searching near you. When someone in your town searches for a plumber or a roofer, Google shows a small list of nearby businesses first, on the map and in the results. WordPress local SEO is that work on a WordPress site, so Google trusts you are real and nearby.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a Google Business Profile for local SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It is free, and it is the single most important step. Your profile is what puts you on the map when someone searches near you. Without it, Google has nothing to show. Fill it in fully: your real name, address, phone number, hours, services and photos. Keep it updated and reply to reviews.",
        },
      },
      {
        "@type": "Question",
        name: "How long does local SEO take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your area and your competition. In a smaller town with few competitors, you can see movement in a few weeks once your profile and website are set up. In a busy city, it usually takes a few months of steady work. Local SEO is not a one-time fix.",
        },
      },
      {
        "@type": "Question",
        name: "Can I do local SEO myself on WordPress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the basics are simple enough to do yourself. Set up your Google Business Profile, add your town and service areas to your pages, keep your contact details the same everywhere and ask happy customers for reviews. Plugins help with the technical parts.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between local SEO and normal SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Normal SEO ranks your website for anyone, anywhere. Local SEO ranks your business for people near you. The biggest difference is the map. Local searches show a map pack of three businesses at the top, and getting in depends on your profile, your reviews and how close you are. If your customers are nearby, that is where the calls come from.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: MapPin,
    title: "What local SEO actually is",
    desc: "When someone in your town searches for a service you offer, Google shows a short list of nearby businesses, usually three on the map and a few more below it. Local SEO is the work that gets you into that list: your profile, your reviews, your pages and your details all telling Google you are real, nearby and trusted.",
  },
  {
    icon: Globe,
    title: "Why WordPress helps",
    desc: "WordPress is a good base for local SEO because you control everything on the page. You can write a proper page for each service and each area, add your town name where it matters, and keep the site fast. Plugins handle sitemaps and schema without code. It does not rank you alone, but it makes the work easy.",
  },
];

const FACTORS = [
  {
    icon: BadgeCheck,
    title: "Your Google Business Profile",
    desc: "This is the listing Google shows on the map, and it matters more than anything else on your website. Use your real name, the same address and phone as your site, correct hours, your services and real photos. Pick the right main category, because a wrong one can hide you from the searches that matter most.",
  },
  {
    icon: Star,
    title: "Reviews from real customers",
    desc: "Reviews are the loudest trust signal in local search. Google looks at how many you have, how recent they are and what they say. A business with fifty recent reviews outranks one with five old ones. Ask every happy customer and send the direct link after the job. Reply to every review, because future customers read the replies.",
  },
  {
    icon: Search,
    title: "Pages for each service and each area",
    desc: "One page that lists everything you do in every town will not rank well. Google ranks pages, not websites, and a page only ranks when it is clearly about one thing. A roofer covering three towns needs a page for roofing in each town, with real detail. Thin pages that swap only the town name do not rank.",
  },
  {
    icon: Phone,
    title: "The same details everywhere",
    desc: "Your name, address and phone number must match everywhere Google finds them: your website, your profile, directories and review sites. Even small differences, a different phone format or an old address, confuse Google and cost you trust. Check the big directories once, fix what is wrong, and keep your website as the single source of truth.",
  },
];

const FIRST_STEPS = [
  {
    icon: MapPin,
    title: "Start with the free stuff",
    desc: "Before you spend anything, do the basics. Claim and complete your Google Business Profile with real photos and your full service list. Check your name, address and phone on the main directories and fix mistakes. Then ask every happy customer for a review. These three steps cost nothing, and they are the foundation everything else stands on.",
    point: "Best first step: a complete profile, correct details and a steady flow of reviews.",
  },
  {
    icon: Search,
    title: "Then fix your website",
    desc: "Once the free stuff is done, look at your WordPress site. Does each service have its own page? Does each town have its own page with real detail? Is the site fast on a phone? Is your number easy to tap? A slow site with one thin services page holds back even a great profile. Fix the pages first, then the speed, then add local schema.",
    point: "Best next step: one strong page per service and per area, plus a fast mobile site.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is WordPress local SEO?",
    a: "Local SEO helps Google show your business to people searching near you. When someone in your town searches for a plumber or a roofer, Google shows a small list of nearby businesses first, on the map and in the results. WordPress local SEO is that work on a WordPress site, so Google trusts you are real and nearby.",
  },
  {
    q: "Do I need a Google Business Profile for local SEO?",
    a: "Yes. It is free, and it is the single most important step. Your profile is what puts you on the map when someone searches near you. Without it, Google has nothing to show. Fill it in fully: your real name, address, phone number, hours, services and photos. Keep it updated and reply to reviews.",
  },
  {
    q: "How long does local SEO take to work?",
    a: "It depends on your area and your competition. In a smaller town with few competitors, you can see movement in a few weeks once your profile and website are set up. In a busy city, it usually takes a few months of steady work. Local SEO is not a one-time fix.",
  },
  {
    q: "Can I do local SEO myself on WordPress?",
    a: "Yes, the basics are simple enough to do yourself. Set up your Google Business Profile, add your town and service areas to your pages, keep your contact details the same everywhere and ask happy customers for reviews. Plugins help with the technical parts.",
  },
  {
    q: "What is the difference between local SEO and normal SEO?",
    a: "Normal SEO ranks your website for anyone, anywhere. Local SEO ranks your business for people near you. The biggest difference is the map. Local searches show a map pack of three businesses at the top, and getting in depends on your profile, your reviews and how close you are. If your customers are nearby, that is where the calls come from.",
  },
];

export default function WordpressLocalSeoPage() {
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
                WordPress Local SEO: How Customers Near You Find You on
                Google
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                Most local businesses do not need the whole internet. They
                need the people in their own town. When someone nearby
                searches for a roofer, a plumber or a cleaning company,
                Google shows a short list of local businesses first, and
                the ones on that list get the calls.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains WordPress local SEO in plain words, no
                jargon. It is written for business owners in the US and UK
                who want customers in their area to find them on Google,
                and it covers what actually moves the map and the rankings.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <WpLocalSeoVisual />
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
              What Local SEO Means for Your Business
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Local SEO is not regular SEO with a town name added. It is
              its own game, and Google plays it by different rules.
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

        {/* -- What Google looks at -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE RANKING FACTORS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What Google Actually Looks At
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Google will not tell you the exact formula, but these are
              the four signals that move the needle most.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FACTORS.map((item) => (
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

        {/* -- Where to start -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHERE TO START
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What to Do First, in Order
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Local SEO works best in order. Skip the free foundations and
              the paid work on top of them will not hold.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FIRST_STEPS.map((item) => (
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
                  Not sure where your site stands?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  I will check your profile, your pages and your local
                  rankings, then tell you exactly what to fix first, on a
                  free call. See how I work on my{" "}
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
              WordPress Local SEO Questions, Answered
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
              Ready to get found by customers near you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me where your business is and who you serve, and I will
              send a clear plan, timeline and price.
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
