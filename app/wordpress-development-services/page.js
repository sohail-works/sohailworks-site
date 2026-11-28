import dynamic from "next/dynamic";
import { WordPressVisual } from "@/components/WordPressVisual";
import { VisualReveal } from "@/components/VisualReveal";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Globe,
  LayoutTemplate,
  Palette,
  ShoppingCart,
  UtensilsCrossed,
  LayoutGrid,
  PenTool,
  ArrowRightLeft,
  Wrench,
  ShieldCheck,
  Gauge,
  Shield,
  Search,
  Plug,
  CalendarCheck,
  Briefcase,
  GraduationCap,
  RefreshCw,
  PanelTop,
  LifeBuoy,
  Phone,
  ClipboardList,
  Hammer,
  Rocket,
  Headphones,
  AppWindow,
  ArrowRight,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "WordPress Development Services | SohailWorks",
  description:
    "WordPress development services for US & UK small businesses: custom websites, WooCommerce stores and redesigns, built fast and kept running with care plans.",
  alternates: {
    canonical: "https://www.sohailworks.com/wordpress-development-services",
  },
  openGraph: {
    title: "WordPress Development Services | SohailWorks",
    description:
      "WordPress development services for US & UK small businesses: custom websites, WooCommerce stores and redesigns, built fast and kept running with care plans.",
    url: "https://www.sohailworks.com/wordpress-development-services",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | SohailWorks",
    description:
      "WordPress development services for US & UK small businesses: custom websites, WooCommerce stores and redesigns, built fast and kept running with care plans.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Development Services",
    description:
      "WordPress development services for US & UK small businesses: custom websites, WooCommerce stores and redesigns, built fast and kept running with care plans.",
    url: "https://www.sohailworks.com/wordpress-development-services",
    serviceType: "WordPress Development Services",
    provider: {
      "@type": "Person",
      name: "Sohail Ashraf",
      url: "https://www.sohailworks.com",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
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
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a WordPress website cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the project requirements. Fill out the contact form, message me on WhatsApp, or email me with your requirements. Just tell me what you're looking for and I'll prepare the full project scope with a fixed budget.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a WordPress website take to build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most WordPress websites take 1–2 weeks, and larger stores or custom builds take longer. You'll get a clear timeline before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build WooCommerce stores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I build WooCommerce stores with products, payments and checkout, plus delivery and ordering features for restaurants and takeaways.",
        },
      },
      {
        "@type": "Question",
        name: "Can you redesign my existing website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I rebuild old websites into fast, modern WordPress sites, keeping your content and working to protect your Google rankings.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer WordPress maintenance after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I offer monthly care plans with updates, backups, security checks and fixes, so your website stays fast, secure and online.",
        },
      },
    ],
  },
];

const WP_SERVICES = [
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "WordPress website development for small businesses: custom WordPress websites, built fast and built to win clients.",
  },
  {
    icon: LayoutTemplate,
    title: "Custom WordPress Websites",
    desc: "WordPress web design built around your business, not a template that looks like everyone else.",
  },
  {
    icon: Palette,
    title: "Custom Theme Development",
    desc: "A theme designed for your brand, with clean code underneath.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Development",
    desc: "Online stores with products, payments and checkout that just work.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Takeaway Websites",
    desc: "Takeaway and restaurant websites with online ordering, menus and delivery.",
  },
  {
    icon: LayoutGrid,
    title: "Elementor Development",
    desc: "Elementor pages that look custom, load fast and are easy to edit.",
  },
  {
    icon: PenTool,
    title: "Figma to WordPress",
    desc: "Your Figma design turned into a pixel-perfect WordPress website.",
  },
  {
    icon: ArrowRightLeft,
    title: "WordPress Migration",
    desc: "Wix to WordPress migration, Webflow to WordPress migration and Squarespace to WordPress migration, plus Shopify moves, without losing traffic.",
  },
  {
    icon: Wrench,
    title: "WordPress Maintenance",
    desc: "Website maintenance services: updates, backups and fixes handled for you, every month.",
  },
  {
    icon: ShieldCheck,
    title: "Care Plans",
    desc: "A care plan that keeps your website fast, secure and always online.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    desc: "Slow websites made fast, with Core Web Vitals and caching that actually work.",
  },
  {
    icon: Shield,
    title: "WordPress Security",
    desc: "Malware removed, hacks fixed and security hardened so it does not happen again.",
  },
  {
    icon: Search,
    title: "WordPress SEO",
    desc: "Technical and local SEO built in, so customers find you on Google.",
  },
  {
    icon: Plug,
    title: "Plugin Development",
    desc: "Custom plugins and integrations that do exactly what your business needs.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Websites",
    desc: "Booking websites that fill your calendar while you do the work.",
  },
  {
    icon: Briefcase,
    title: "Small Business Websites",
    desc: "Small business website design: affordable WordPress websites for small businesses, with a clear WordPress website cost upfront, built to bring in calls and bookings.",
  },
  {
    icon: GraduationCap,
    title: "Membership & Courses",
    desc: "Membership sites and online courses with payments, logins and content protection.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Website redesign services: an old website rebuilt into a fast, modern one that actually converts.",
  },
  {
    icon: PanelTop,
    title: "Landing Pages",
    desc: "Landing pages built to convert clicks into calls, bookings and sales.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Support",
    desc: "WordPress rescue when you need it: hacked, broken or down? Emergency fixes that get your website back fast.",
  },
];

// ─── ─── How we work steps ─── ───
const HOW_STEPS = [
  {
    icon: Phone,
    num: "01",
    title: "Free call",
    desc: "We start with a free call to understand your goals and how your business wins jobs today.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Plan",
    desc: "You get a clear plan with a timeline and a fixed price in writing before any work starts.",
  },
  {
    icon: Hammer,
    num: "03",
    title: "Build",
    desc: "I build your WordPress website, and you review it at each step.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch",
    desc: "I test everything, go live, and show you how to use it.",
  },
  {
    icon: Headphones,
    num: "05",
    title: "Support",
    desc: "I stay available after launch to fix issues and help with updates.",
  },
];

// ─── ─── WordPress FAQ ─── ───
const WP_FAQS = [
  {
    q: "How much does a WordPress website cost?",
    a: "It depends on the project requirements. Fill out the contact form, message me on WhatsApp, or email me with your requirements. Just tell me what you're looking for and I'll prepare the full project scope with a fixed budget.",
  },
  {
    q: "How long does a WordPress website take to build?",
    a: "Most WordPress websites take 1–2 weeks, and larger stores or custom builds take longer. You'll get a clear timeline before we start.",
  },
  {
    q: "Do you build WooCommerce stores?",
    a: "Yes, I build WooCommerce stores with products, payments and checkout, plus delivery and ordering features for restaurants and takeaways.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes, I rebuild old websites into fast, modern WordPress sites, keeping your content and working to protect your Google rankings.",
  },
  {
    q: "Do you offer WordPress maintenance after launch?",
    a: "Yes, I offer monthly care plans with updates, backups, security checks and fixes, so your website stays fast, secure and online.",
  },
];

const WP_RELATED_GUIDES = [
  {
    icon: Globe,
    title: "WordPress or GoHighLevel for a Local Business Website?",
    desc: "Which one fits your business website, and when to use both.",
    href: "https://www.sohailworks.com/guides/wordpress-or-gohighlevel",
  },
  {
    icon: AppWindow,
    title: "Custom Web App or WordPress: Which Does Your Business Need?",
    desc: "When WordPress is enough, and when your business outgrows it.",
    href: "https://www.sohailworks.com/guides/custom-web-app-vs-wordpress",
  },
  {
    icon: ArrowRightLeft,
    title: "WordPress.org vs WordPress.com: Which One Is Right for Your Business?",
    desc: "Own or rent? Ownership, plugins, SEO control and long-term cost, compared.",
    href: "https://www.sohailworks.com/guides/wordpress-org-vs-wordpress-com",
  },
];

export default function WordPressDevelopmentServicesPage() {
  return (
    <>
      <main className="m-10 mx-auto w-full lg:max-w-7xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <div className="m-8 grid grid-cols-1 items-center gap-12 text-center md:mt-18 md:grid-cols-2 md:text-left 2xl:mt-32">
            {/* Left column */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5 md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-normal text-[var(--primary)] md:text-xs md:tracking-widest">
                  WordPress Development
                </span>
              </div>
              {/* H1 */}
              <h1 className="font-display text-3xl font-normal capitalize leading-snug md:text-6xl md:leading-tight">
                WordPress Development Services
              </h1>
              {/* Accent line */}
              <div className="mx-auto h-[3px] w-32 rounded-full bg-gradient-brand md:mx-0"></div>
              {/* Intro paragraph */}
              <p className="mx-auto max-w-[600px] text-base text-[var(--text-secondary)] md:mx-0 md:text-lg">
                WordPress development services build and manage your WordPress
                website so it works for your business: custom design,
                WooCommerce stores, speed, security and ongoing care. I build
                fast WordPress websites for small businesses in the US and UK,
                from the first page to launch and beyond, so your website
                brings in calls, bookings and sales instead of sitting there.
              </p>
              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://cal.com/sohail-qeijwg/book-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[var(--secondary)] px-5 py-4 text-xs font-medium text-white transition-all hover:-translate-y-1 hover:bg-[var(--secondary-hover)] active:-translate-y-1 active:bg-[var(--secondary-hover)] active:scale-95 md:px-6 md:py-3 md:text-base"
                >
                  Book a Free Call
                </a>
                <a
                  href="https://wa.me/447512281222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--border-default)] px-5 py-4 text-xs font-medium text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] active:-translate-y-1 active:border-[var(--primary)] active:text-[var(--primary)] md:px-6 md:py-3 md:text-base"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
            {/* Right column - WordPressVisual */}
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <VisualReveal>
                <WordPressVisual />
              </VisualReveal>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT I DO / WORDPRESS SERVICES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              WordPress Services
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              From custom websites and WooCommerce stores to website maintenance services and speed, every piece of your WordPress website, built properly in one place.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WP_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="svc group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {/* Glow blob - stats jaisa */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-[350ms] group-hover:bg-[#6E73BE]/25"></div>
                  {/* Left bar - top se bottom draw */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 rounded-l-xl bg-[var(--primary)] transition-transform duration-[350ms] group-hover:scale-y-100"
                  />
                  {/* Icon tile */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-[350ms] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[var(--text-primary)]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHO IT&apos;S FOR
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Who It&apos;s For
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              I build WordPress websites for small businesses in the US and
              UK. These are the businesses I work with most.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Small Businesses
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Small businesses need a website that brings in calls and
                  bookings, not just a brochure. I build WordPress websites
                  with clear services, contact forms and booking options, so
                  visitors become customers. Your site loads fast, looks
                  professional and is easy to update.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Restaurants &amp; Takeaways
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Restaurants and takeaways need online ordering that works. I
                  build WordPress and WooCommerce sites with menus, ordering
                  and delivery, so customers order straight from your website
                  instead of paying commission to an app. Your menu is easy to
                  update and your orders come straight to you.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Online Stores
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Online stores need checkout that just works. I build
                  WooCommerce stores with products, payments and delivery
                  options, plus the extras your shop needs, like product
                  add-ons and discounts. Your store stays fast and secure while
                  you focus on selling.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Coaches &amp; Consultants
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Coaches, consultants and course creators need bookings and
                  payments without the admin. I build WordPress sites with
                  booking calendars, membership areas and course pages, so
                  clients book and pay while you do the work.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:col-span-2">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Other Businesses
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Don&apos;t see your business here? If you need a website
                  that brings in customers, WordPress fits. Tell me what your
                  business does and I will build the site around the way you
                  work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related services ── */}
        <p className="mx-auto max-w-6xl px-6 text-[var(--text-secondary)]">
          Need automation behind your website? See my{" "}
          <a
            href="https://www.sohailworks.com/gohighlevel-expert"
            className="font-medium text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-4 transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
          >
            GoHighLevel expert services
          </a>
          .
        </p>
        <p className="mx-auto max-w-6xl px-6 pt-2 text-[var(--text-secondary)]">
          Need a custom app instead of WordPress? See my{" "}
          <a
            href="https://www.sohailworks.com/web-app-development-services"
            className="font-medium text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-4 transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
          >
            web app development services
          </a>
          .
        </p>

        {/* ── Related guides ── */}
        <section className="pb-24 pt-12">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              RELATED GUIDES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Read before you decide
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Short guides that help you pick the right platform for your
              business website.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WP_RELATED_GUIDES.map((guide) => (
                <div
                  key={guide.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-[350ms] group-hover:bg-[#6E73BE]/25"></div>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 rounded-l-xl bg-[var(--primary)] transition-transform duration-[350ms] group-hover:scale-y-100"
                  />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors duration-[350ms] group-hover:bg-[var(--primary)] group-hover:text-white">
                    <guide.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[var(--text-primary)]">
                    {guide.title}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-[var(--text-secondary)]">
                    {guide.desc}
                  </p>
                  <a
                    href={guide.href}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Read the guide
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How you work ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              HOW WE WORK
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              How We Work Together
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Share your requirements on a free call and I&apos;ll give you a
              fixed quote before we start, no hourly billing.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HOW_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04] active:-translate-y-1 active:border-[#6E73BE]/60"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-300 group-hover:bg-[#6E73BE]/25"></div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6E73BE]/30 bg-[#6E73BE]/10 text-[#6E73BE] transition-transform duration-300 group-hover:scale-110">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <p className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                        {step.num}
                      </p>
                      <p className="text-base font-medium text-[var(--text-primary)]">
                        {step.title}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── One real example ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              ONE REAL EXAMPLE
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Sizzlers: a takeaway website that takes orders online
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Sizzlers is a takeaway in Bo&apos;ness, Scotland. I built their
              WordPress and WooCommerce website with online ordering, menus and
              delivery, plus signature-sauce options on every product. New
              website orders print straight to the kitchen printer, so the team
              sees each order the moment it comes in.
            </p>
            <a
              href="https://sizzlersboness.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-medium text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-4 transition-colors hover:text-[var(--primary-hover)] hover:decoration-[var(--primary)]"
            >
              Visit sizzlersboness.co.uk
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              WordPress Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={WP_FAQS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Ready for a website that brings in customers?
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
