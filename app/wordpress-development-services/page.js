import dynamic from "next/dynamic";
import { WordPressVisual } from "@/components/WordPressVisual";
import { VisualReveal } from "@/components/VisualReveal";
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
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title: "WordPress Development Services | Custom Websites, WooCommerce & Maintenance | SohailWorks",
  description:
    "WordPress development services for US & UK small businesses. Custom websites, WooCommerce stores and Elementor pages, built fast and kept running with care plans.",
  alternates: {
    canonical: "https://www.sohailworks.com/wordpress-development-services/",
  },
  openGraph: {
    title: "WordPress Development Services | Custom Websites, WooCommerce & Maintenance | SohailWorks",
    description:
      "WordPress development services for US & UK small businesses. Custom websites, WooCommerce stores and Elementor pages, built fast and kept running with care plans.",
    url: "https://www.sohailworks.com/wordpress-development-services/",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | Custom Websites, WooCommerce & Maintenance | SohailWorks",
    description:
      "WordPress development services for US & UK small businesses. Custom websites, WooCommerce stores and Elementor pages, built fast and kept running with care plans.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WordPress Development Services",
    description:
      "WordPress development services for US & UK small businesses. Custom websites, WooCommerce stores and Elementor pages, built fast and kept running with care plans.",
    url: "https://www.sohailworks.com/wordpress-development-services/",
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
        item: "https://www.sohailworks.com/wordpress-development-services/",
      },
    ],
  },
];

const WP_SERVICES = [
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom WordPress websites, built fast and built to win clients.",
  },
  {
    icon: LayoutTemplate,
    title: "Custom WordPress Websites",
    desc: "A website built around your business, not a template that looks like everyone else.",
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
    desc: "Move from Wix, Squarespace, Webflow or Shopify to WordPress without losing traffic.",
  },
  {
    icon: Wrench,
    title: "WordPress Maintenance",
    desc: "Updates, backups and fixes handled for you, every month.",
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
    desc: "Affordable WordPress websites for small businesses, built to bring in calls and bookings.",
  },
  {
    icon: GraduationCap,
    title: "Membership & Courses",
    desc: "Membership sites and online courses with payments, logins and content protection.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "An old website rebuilt into a fast, modern one that actually converts.",
  },
  {
    icon: PanelTop,
    title: "Landing Pages",
    desc: "Landing pages built to convert clicks into calls, bookings and sales.",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Support",
    desc: "Hacked, broken or down? Emergency fixes that get your website back fast.",
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
                WordPress development services that actually ship. Most WordPress websites never get finished properly. They get stuck with slow themes, bloated plugins and endless revisions, while your idea waits and competitors move ahead. I fix that. I build fast custom WordPress websites, WooCommerce stores and Elementor pages that launch in weeks, not months, and keep growing with your business.
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
            {/* Right column — WordPressVisual */}
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
              From custom websites and WooCommerce stores to maintenance and speed, every piece of your WordPress website, built properly in one place.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WP_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="svc group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {/* Glow blob — stats jaisa */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-[350ms] group-hover:bg-[#6E73BE]/25"></div>
                  {/* Left bar — top se bottom draw */}
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
      </main>
      <Footer />
    </>
  );
}
