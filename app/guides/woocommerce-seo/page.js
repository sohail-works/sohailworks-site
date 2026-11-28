// Step 7 - Guide 18: WooCommerce SEO: how to get your products found on Google
// Route: app/guides/woocommerce-seo/page.js
// Destination file: app/guides/woocommerce-seo/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { WooCommerceSeoVisual } from "@/components/WooCommerceSeoVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Search,
  Package,
  FileCheck,
  Image,
  Star,
  Gauge,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "WooCommerce SEO: How to Get Your Products Found on Google | SohailWorks",
  description:
    "WooCommerce SEO in plain words: how Google finds and ranks your products, what to fix on product pages, and the checks that bring in shoppers instead of window shoppers.",
  alternates: {
    canonical: "https://www.sohailworks.com/guides/woocommerce-seo",
  },
  openGraph: {
    title:
      "WooCommerce SEO: How to Get Your Products Found on Google | SohailWorks",
    description:
      "WooCommerce SEO in plain words: how Google finds and ranks your products, what to fix on product pages, and the checks that bring in shoppers instead of window shoppers.",
    url: "https://www.sohailworks.com/guides/woocommerce-seo",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WooCommerce SEO: How to Get Your Products Found on Google | SohailWorks",
    description:
      "WooCommerce SEO in plain words: how Google finds and ranks your products, what to fix on product pages, and the checks that bring in shoppers instead of window shoppers.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WooCommerce SEO: How to Get Your Products Found on Google",
    description:
      "WooCommerce SEO in plain words: how Google finds and ranks your products, what to fix on product pages, and the checks that bring in shoppers instead of window shoppers.",
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
    mainEntityOfPage: "https://www.sohailworks.com/guides/woocommerce-seo",
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
        name: "WooCommerce SEO",
        item: "https://www.sohailworks.com/guides/woocommerce-seo",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WooCommerce SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WooCommerce SEO is the work that helps Google find your products and show them to shoppers. When someone searches for a product you sell, Google picks a few product pages to show first. WooCommerce SEO is about making your pages the ones Google picks: clear titles, helpful descriptions, good photos, real reviews and a fast store.",
        },
      },
      {
        "@type": "Question",
        name: "How do I rank a product page on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with the title. It should say what the product is, in the words a customer would search for, not a clever brand name. Then write a description that answers the questions a buyer would ask: what it is, who it is for and why it is worth it. Add clear photos, keep the page fast, and let customers leave reviews. One strong page per product beats ten thin ones.",
        },
      },
      {
        "@type": "Question",
        name: "Do product reviews help WooCommerce SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in two ways. First, reviews add fresh, unique words to the product page, which gives Google more to read and rank. Second, reviews build trust, and shoppers who trust a page are more likely to buy, which tells Google the page is a good result. Ask every happy customer for a review. A product with reviews will outrank an identical one without them.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an SEO plugin for WooCommerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A plugin helps, but it does not do the work for you. A good SEO plugin handles the technical parts: titles, descriptions, sitemaps and product schema. What it cannot do is write a good product description or take a good photo. Use a plugin for the technical side, and spend your time on the product pages themselves. That is where the ranking comes from.",
        },
      },
      {
        "@type": "Question",
        name: "How long does WooCommerce SEO take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your products and your competition. For low-competition products, you can see movement in a few weeks once the pages are fixed. For popular products with big competitors, it takes months of steady work. SEO is not a one-time fix. Google rewards stores that keep improving, month after month.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: Search,
    title: "What WooCommerce SEO actually is",
    desc: "When someone searches for a product you sell, Google picks a few product pages to show first. WooCommerce SEO is the work that makes your pages the ones it picks. It is not one trick. It is clear titles, helpful descriptions, good photos, real reviews and a fast store, all telling Google the same thing: this page answers the search.",
  },
  {
    icon: Package,
    title: "Why product pages rank or do not",
    desc: "Google ranks pages, not stores. A product page ranks when it is clearly about one product, with enough detail for Google and for the shopper. Most WooCommerce stores fail here: thin descriptions copied from the supplier, the same title on ten products, and photos that are too big and too slow. Fix the pages and the rankings follow.",
  },
];

const SIGNALS = [
  {
    icon: FileCheck,
    title: "Titles that say what it is",
    desc: "The product title is the first thing Google reads, and the first thing the shopper reads. It should say what the product is, in the words a customer would type into Google, not a clever brand name. Put the important words first. One product, one clear title, and no stuffing the same words in again and again.",
  },
  {
    icon: Image,
    title: "Photos that sell",
    desc: "Shoppers buy with their eyes, and Google reads your photos too. Use clear photos on a clean background, show the product from more than one angle, and write a short alt text that says what is in the photo. Then compress the images. Big uncompressed photos are the most common reason a store loads slowly.",
  },
  {
    icon: Star,
    title: "Reviews that build trust",
    desc: "Reviews do two jobs at once. They add fresh, unique words to the product page, which gives Google more to rank, and they build trust with shoppers, who buy more from pages other customers praise. Ask every happy customer for a review. A product with reviews will outrank an identical one without them.",
  },
  {
    icon: Gauge,
    title: "Speed that keeps shoppers",
    desc: "A product page that takes five seconds to load loses shoppers before they see the price. Speed matters more on product pages than anywhere else, because the shopper is one tap from buying. Compress images, keep the plugins lean, and test the top sellers on a phone. A fast page is a page that sells, and Google knows it.",
  },
];

const FIXES = [
  {
    icon: Zap,
    title: "Quick wins first",
    desc: "Start with the pages that already get visits. Fix their titles, rewrite the thin descriptions, compress the photos and add product schema so Google can show price and reviews in the results. Then ask recent customers for reviews on those same products. These fixes take a day or two and they are the fastest way to see movement.",
    point: "Best first step: fix titles, descriptions and photos on your top sellers.",
  },
  {
    icon: TrendingUp,
    title: "The slow work that compounds",
    desc: "After the quick wins, the work gets slower and more valuable. Keep adding reviews, keep the store fast, write helpful category pages, and add new products with proper pages from day one. Month after month, Google trusts the store more. SEO is not a one-time fix, it is a habit, and the stores that treat it that way are the ones that rank.",
    point: "Best next step: reviews, speed and proper pages on every new product.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is WooCommerce SEO?",
    a: "WooCommerce SEO is the work that helps Google find your products and show them to shoppers. When someone searches for a product you sell, Google picks a few product pages to show first. WooCommerce SEO is about making your pages the ones Google picks: clear titles, helpful descriptions, good photos, real reviews and a fast store.",
  },
  {
    q: "How do I rank a product page on Google?",
    a: "Start with the title. It should say what the product is, in the words a customer would search for, not a clever brand name. Then write a description that answers the questions a buyer would ask: what it is, who it is for and why it is worth it. Add clear photos, keep the page fast, and let customers leave reviews. One strong page per product beats ten thin ones.",
  },
  {
    q: "Do product reviews help WooCommerce SEO?",
    a: "Yes, in two ways. First, reviews add fresh, unique words to the product page, which gives Google more to read and rank. Second, reviews build trust, and shoppers who trust a page are more likely to buy, which tells Google the page is a good result. Ask every happy customer for a review. A product with reviews will outrank an identical one without them.",
  },
  {
    q: "Do I need an SEO plugin for WooCommerce?",
    a: "A plugin helps, but it does not do the work for you. A good SEO plugin handles the technical parts: titles, descriptions, sitemaps and product schema. What it cannot do is write a good product description or take a good photo. Use a plugin for the technical side, and spend your time on the product pages themselves. That is where the ranking comes from.",
  },
  {
    q: "How long does WooCommerce SEO take to work?",
    a: "It depends on your products and your competition. For low-competition products, you can see movement in a few weeks once the pages are fixed. For popular products with big competitors, it takes months of steady work. SEO is not a one-time fix. Google rewards stores that keep improving, month after month.",
  },
];

export default function WooCommerceSeoPage() {
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
                WooCommerce SEO: How to Get Your Products Found on Google
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                Your store can have great products and still get no orders
                from Google. If the product pages do not say clearly what
                they sell, Google will not show them, and shoppers will
                buy from the store it does show.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains WooCommerce SEO in plain words, no
                jargon. It is written for shop owners in the US and UK who
                want their products found on Google by people ready to buy.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <WooCommerceSeoVisual />
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
              What WooCommerce SEO Means for Your Store
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              SEO for a store is different from SEO for a brochure site.
              The product page is the whole game.
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
              THE SIGNALS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              What Google Looks At on a Product Page
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Google will not tell you the exact formula, but these are
              the four signals that move product rankings most.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SIGNALS.map((item) => (
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
              What to Fix First, in Order
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Fix the pages that already get visits first, then build the
              habits that keep rankings growing.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FIXES.map((item) => (
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
                  Want your products found on Google?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  I will check your store, your product pages and your
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
              WooCommerce SEO Questions, Answered
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
              Ready to get your products found?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what you sell and where your store stands, and I
              will send a clear plan, timeline and price.
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
