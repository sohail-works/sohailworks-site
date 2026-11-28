// Step 7 - Guide 16: WooCommerce Website Development: how to build an online store that sells
// Route: app/guides/woocommerce-website-development/page.js
// Destination file: app/guides/woocommerce-website-development/page.js
// After push: add this URL to the sitemap and request indexing once in GSC.

import dynamic from "next/dynamic";
import { WooCommerceDevVisual } from "@/components/WooCommerceDevVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ShoppingCart,
  Store,
  Package,
  CreditCard,
  Truck,
  CheckCircle2,
  Layers,
  Wrench,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "WooCommerce Website Development: How to Build an Online Store That Sells | SohailWorks",
  description:
    "WooCommerce website development in plain words: what a WooCommerce store needs, products, payments, delivery and checkout, and how to tell a good build from a bad one.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/woocommerce-website-development",
  },
  openGraph: {
    title:
      "WooCommerce Website Development: How to Build an Online Store That Sells | SohailWorks",
    description:
      "WooCommerce website development in plain words: what a WooCommerce store needs, products, payments, delivery and checkout, and how to tell a good build from a bad one.",
    url: "https://www.sohailworks.com/guides/woocommerce-website-development",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "WooCommerce Website Development: How to Build an Online Store That Sells | SohailWorks",
    description:
      "WooCommerce website development in plain words: what a WooCommerce store needs, products, payments, delivery and checkout, and how to tell a good build from a bad one.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "WooCommerce Website Development: How to Build an Online Store That Sells",
    description:
      "WooCommerce website development in plain words: what a WooCommerce store needs, products, payments, delivery and checkout, and how to tell a good build from a bad one.",
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
      "https://www.sohailworks.com/guides/woocommerce-website-development",
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
        name: "WooCommerce Website Development",
        item: "https://www.sohailworks.com/guides/woocommerce-website-development",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is WooCommerce website development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WooCommerce is the free plugin that turns a WordPress website into an online store. WooCommerce website development is the work of building that store properly: the products, the categories, the payments, the delivery options and the checkout. A good build means a customer can find a product, pay for it and get it without friction or confusion.",
        },
      },
      {
        "@type": "Question",
        name: "Is WooCommerce good for a small shop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is one of the best fits for a small shop. You own the store, there is no monthly platform fee for the software itself, and you can start small and grow. It suits shops with tens or hundreds of products, and handles variations like sizes and flavours well. If you only sell a handful of items, a simple setup is enough. The store grows with you.",
        },
      },
      {
        "@type": "Question",
        name: "Can customers pay by card on a WooCommerce store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WooCommerce works with card payment gateways like Stripe and PayPal, and with cash on delivery or bank transfer if you want them. Card payments are the standard for most stores, because customers expect them. The gateway handles the money securely, and the order lands in your WordPress dashboard the moment the payment clears.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a WooCommerce store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the size of the store. A small shop with a few dozen products usually takes one to two weeks, including the design, the products, the payments and testing. A larger store with hundreds of products, delivery zones and custom features takes longer. You will get a clear timeline before we start, and the store is tested before launch.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to maintain a WooCommerce store after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A store needs looking after: WordPress, WooCommerce and plugin updates, backups, security checks and the occasional fix. An out-of-date store is a slow store, and a slow store loses orders. I offer monthly care plans that cover updates, backups and fixes, so your store stays fast and secure.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: ShoppingCart,
    title: "What WooCommerce actually is",
    desc: "WooCommerce is a free plugin that turns a WordPress website into an online store. It adds products, a basket, a checkout and order management to the site you already have. The store lives on your own hosting, on your own domain, and you own the customer data. That ownership is the main reason small shops pick it over a rented platform.",
  },
  {
    icon: Store,
    title: "Why WordPress plus WooCommerce",
    desc: "WordPress handles the content and WooCommerce handles the selling, and the two fit together well. You get a proper website and a proper shop in one place: blog posts that bring in Google traffic, pages that explain your business, and a checkout that takes money. One system to learn, one login to manage, and no monthly platform fee for the software itself.",
  },
];

const PIECES = [
  {
    icon: Package,
    title: "Products that sell",
    desc: "A product page needs more than a photo and a price. It needs a clear title, a short description that says what it is and who it is for, and honest options like size, flavour or quantity. Variations must work without confusing the customer. Bad product pages are the most common reason a store gets visits but no orders.",
  },
  {
    icon: CreditCard,
    title: "Payments that work",
    desc: "Customers expect to pay by card, and most will leave if they cannot. Card payments go through a gateway like Stripe, which handles the money securely. Cash on delivery and bank transfer can sit alongside it where they make sense. Offer the ways your customers actually use, and nothing they have to think about.",
  },
  {
    icon: Truck,
    title: "Delivery and pickup",
    desc: "Delivery is where many stores lose money, so it needs setting up properly. Delivery zones, charges by area or by order value, free delivery over a threshold, and collection for local customers. For takeaways and restaurants, add time slots so the kitchen is not overloaded. Get the delivery rules wrong and every order costs you time or margin.",
  },
  {
    icon: CheckCircle2,
    title: "A checkout that does not leak",
    desc: "Checkout is where sales are won or lost. Every extra field, every confusing step and every slow page costs you orders. A good checkout asks for as little as possible, works well on a phone, and tells the customer what happens next. Test it with a real order before launch, on a phone, with a real card, because that is how your customers will use it.",
  },
];

const BUILD = [
  {
    icon: Layers,
    title: "Template or custom build",
    desc: "A template store is faster and cheaper to build, and it suits a small shop with standard needs. A custom build costs more but fits your business exactly: your layout, your checkout flow, your delivery rules. Most small shops do well with a solid template plus custom work where it matters. Ask what is template and what is custom before you agree.",
    point: "Best for most small shops: a solid template, customised where it counts.",
  },
  {
    icon: Wrench,
    title: "Look after it after launch",
    desc: "A store is not finished on launch day. WordPress, WooCommerce and the plugins all need updates, and an out-of-date store gets slow and then gets attacked. Backups matter more for a store than for a brochure site, because every order is money. Plan for monthly care from the start, with updates, backups and a fix when something breaks.",
    point: "Best next step: a monthly care plan, so the store stays fast and secure.",
  },
];

const GUIDE_FAQS = [
  {
    q: "What is WooCommerce website development?",
    a: "WooCommerce is the free plugin that turns a WordPress website into an online store. WooCommerce website development is the work of building that store properly: the products, the categories, the payments, the delivery options and the checkout. A good build means a customer can find a product, pay for it and get it without friction or confusion.",
  },
  {
    q: "Is WooCommerce good for a small shop?",
    a: "Yes, it is one of the best fits for a small shop. You own the store, there is no monthly platform fee for the software itself, and you can start small and grow. It suits shops with tens or hundreds of products, and handles variations like sizes and flavours well. If you only sell a handful of items, a simple setup is enough. The store grows with you.",
  },
  {
    q: "Can customers pay by card on a WooCommerce store?",
    a: "Yes. WooCommerce works with card payment gateways like Stripe and PayPal, and with cash on delivery or bank transfer if you want them. Card payments are the standard for most stores, because customers expect them. The gateway handles the money securely, and the order lands in your WordPress dashboard the moment the payment clears.",
  },
  {
    q: "How long does it take to build a WooCommerce store?",
    a: "It depends on the size of the store. A small shop with a few dozen products usually takes one to two weeks, including the design, the products, the payments and testing. A larger store with hundreds of products, delivery zones and custom features takes longer. You will get a clear timeline before we start, and the store is tested before launch.",
  },
  {
    q: "Do I need to maintain a WooCommerce store after launch?",
    a: "Yes. A store needs looking after: WordPress, WooCommerce and plugin updates, backups, security checks and the occasional fix. An out-of-date store is a slow store, and a slow store loses orders. I offer monthly care plans that cover updates, backups and fixes, so your store stays fast and secure.",
  },
];

export default function WooCommerceWebsiteDevelopmentPage() {
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
                WooCommerce Website Development: How to Build an Online
                Store That Sells
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                A shop website is not a brochure with a buy button. It is a
                machine that takes money, and every part of it has to work:
                the products, the payments, the delivery and the checkout.
                Get one part wrong and customers leave without ordering.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains WooCommerce website development in plain
                words, no jargon. It is written for shop owners in the US
                and UK who want an online store that takes orders while
                they get on with running the business.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <WooCommerceDevVisual />
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
              What WooCommerce Is, and Why It Fits Small Shops
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              WooCommerce powers a large share of online stores for a
              simple reason: it is flexible, you own it, and it grows with
              your shop.
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

        {/* -- The pieces -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE PIECES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              The Four Pieces Every Store Needs
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              A store is only as strong as its weakest piece. These four
              decide whether a visitor becomes a customer.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {PIECES.map((item) => (
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

        {/* -- The build -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE BUILD
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              How to Get the Build Right
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Two decisions shape the whole project: how custom the build
              is, and who looks after it once it is live.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BUILD.map((item) => (
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
                  Want a store that takes orders?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  Tell me what you sell and how you deliver, and I will
                  plan your WooCommerce store on a free call, with a fixed
                  quote before we start. See how I work on my{" "}
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
              WooCommerce Website Development Questions, Answered
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
              Ready to sell online?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what you sell and how you want to deliver it, and I
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
