import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import { GHLWorkflowVisual } from "@/components/GHLWorkflowVisual";
import { VsHubSpotVisual } from "@/components/VsHubSpotVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Filter,
  Code2,
  Users,
  Workflow,
  CalendarCheck,
  ShieldCheck,
  Mic,
  Sparkles,
  Bot,
  PlugZap,
  ArrowRightLeft,
  Plug,
  LayoutDashboard,
  Copy,
  Star,
  Mail,
  Rocket,
  Briefcase,
  GraduationCap,
  Globe,
  Phone,
  ClipboardList,
  Hammer,
  Headphones,
} from "lucide-react";

export const metadata = {
  title:
    "Your GoHighLevel Expert Guy | GoHighLevel Setup, Funnels & Automation | SohailWorks",
  description:
    "Your go high level expert for US and UK small businesses. I set up GoHighLevel funnels, CRM and automation properly, so you get more bookings and no lead ever goes cold.",
  alternates: {
    canonical: "https://www.sohailworks.com/gohighlevel-expert",
  },
  openGraph: {
    title:
      "Your GoHighLevel Expert Guy | GoHighLevel Setup, Funnels & Automation | SohailWorks",
    description:
      "Your go high level expert for US and UK small businesses. I set up GoHighLevel funnels, CRM and automation properly, so you get more bookings and no lead ever goes cold.",
    url: "https://www.sohailworks.com/gohighlevel-expert",
    siteName: "SohailWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Your GoHighLevel Expert Guy | GoHighLevel Setup, Funnels & Automation | SohailWorks",
    description:
      "Your go high level expert for US and UK small businesses. I set up GoHighLevel funnels, CRM and automation properly, so you get more bookings and no lead ever goes cold.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GoHighLevel Expert Services",
    description:
      "Your go high level expert for US and UK small businesses. I set up GoHighLevel funnels, CRM and automation properly, so you get more bookings and no lead ever goes cold.",
    url: "https://www.sohailworks.com/gohighlevel-expert",
    serviceType: "GoHighLevel Setup, Funnels & Automation",
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
        name: "GoHighLevel Expert",
        item: "https://www.sohailworks.com/gohighlevel-expert",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a GoHighLevel expert do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A GoHighLevel expert sets up and manages your GHL account so it works for your business: CRM and pipelines, funnels and landing pages, automated follow-up by text and email, booking calendars and review requests. I also fix broken GHL setups.",
        },
      },
      {
        "@type": "Question",
        name: "What can GoHighLevel do for my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GoHighLevel brings your funnels, CRM, email, SMS, and bookings into one place. I set up funnels that capture leads, automations that follow up instantly, and pipelines that keep every lead organised so no enquiry slips through.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a GoHighLevel setup cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I'll give you a fixed quote before we start, no hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a GoHighLevel setup take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard GoHighLevel setup takes about a week, and more complex builds with AI agents or migrations take longer. You'll get a clear timeline before we start.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with roofers, HVAC, plumbers and other local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I mainly work with local service businesses in the US & UK: roofers, HVAC, plumbers, med spas, cleaning, builders and electricians. If your business runs on leads, bookings and follow-ups, GoHighLevel fits.",
        },
      },
    ],
  },
];

// ─── ─── Data ─── ───
const GHL_SERVICES = [
  {
    icon: Filter,
    title: "Funnel Builds",
    desc: "Landing pages and funnels that capture leads and book calls.",
  },
  {
    icon: Code2,
    title: "Custom Code Sections",
    desc: "Custom sections and tweaks your GHL theme cannot do on its own.",
  },
  {
    icon: Users,
    title: "CRM & Pipelines",
    desc: "GoHighLevel CRM automation with pipelines that keep every lead organised, from first click to closed deal.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "GoHighLevel workflow automation that follows up, assigns and reminds, without manual work.",
  },
  {
    icon: CalendarCheck,
    title: "Forms & Calendars",
    desc: "GoHighLevel calendar setup with forms and booking calendars that turn visitors into appointments.",
  },
  {
    icon: ShieldCheck,
    title: "A2P 10DLC Registration",
    desc: "A2P 10DLC registration done right, so your SMS actually gets delivered.",
  },
  {
    icon: Mic,
    title: "Voice AI Agents",
    desc: "AI agents that answer calls, qualify leads and book appointments.",
  },
  {
    icon: Sparkles,
    title: "AI Studio Setup",
    desc: "Your AI Studio set up and tuned for your business.",
  },
  {
    icon: Bot,
    title: "Chat Bots",
    desc: "Chatbots that answer questions and capture leads around the clock.",
  },
  {
    icon: PlugZap,
    title: "n8n, Make & Zapier",
    desc: "Your tools connected: n8n, Make and Zapier automations between GHL and everything else.",
  },
  {
    icon: ArrowRightLeft,
    title: "HubSpot Migration",
    desc: "Move from HubSpot to GoHighLevel without losing data or momentum.",
  },
  {
    icon: Plug,
    title: "API & Webhooks",
    desc: "Custom API and webhook connections for the workflows GHL cannot do alone.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    desc: "Dashboards that show leads, calls and revenue at a glance.",
  },
  {
    icon: Copy,
    title: "Snapshots & Templates",
    desc: "Ready snapshots and templates, so new sub accounts launch in minutes.",
  },
  {
    icon: Star,
    title: "Review Automation",
    desc: "GoHighLevel reputation management with automatic review requests that grow your Google reviews.",
  },
  {
    icon: Mail,
    title: "Email & SMS Nurture",
    desc: "Nurture sequences that keep leads warm until they are ready to buy.",
  },
  {
    icon: Rocket,
    title: "SaaS Mode Setup",
    desc: "SaaS Mode configured, so you can sell GoHighLevel under your own brand.",
  },
  {
    icon: Briefcase,
    title: "White Label Fulfilment",
    desc: "White label GHL work for your agency, delivered under your name.",
  },
  {
    icon: GraduationCap,
    title: "Memberships & Courses",
    desc: "Memberships and courses set up inside GHL, ready to sell.",
  },
  {
    icon: Globe,
    title: "Full Websites in GHL",
    desc: "Complete websites built inside GoHighLevel, not just funnels.",
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
    desc: "I build your GoHighLevel system, and you review it at each step.",
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

// ─── ─── GHL FAQ ─── ───
const GHL_FAQS = [
  {
    q: "What does a GoHighLevel expert do?",
    a: "A GoHighLevel expert sets up and manages your GHL account so it works for your business: CRM and pipelines, funnels and landing pages, automated follow-up by text and email, booking calendars and review requests. I also fix broken GHL setups.",
  },
  {
    q: "What can GoHighLevel do for my business?",
    a: "GoHighLevel brings your funnels, CRM, email, SMS, and bookings into one place. I set up funnels that capture leads, automations that follow up instantly, and pipelines that keep every lead organised so no enquiry slips through.",
  },
  {
    q: "How much does a GoHighLevel setup cost?",
    a: "It depends on the scope. A basic funnel and CRM setup costs less than a full automation build. Share your requirements on a free call and I'll give you a fixed quote before we start, no hourly billing.",
  },
  {
    q: "How long does a GoHighLevel setup take?",
    a: "A standard GoHighLevel setup takes about a week, and more complex builds with AI agents or migrations take longer. You'll get a clear timeline before we start.",
  },
  {
    q: "Do you work with roofers, HVAC, plumbers and other local businesses?",
    a: "Yes, I mainly work with local service businesses in the US & UK: roofers, HVAC, plumbers, med spas, cleaning, builders and electricians. If your business runs on leads, bookings and follow-ups, GoHighLevel fits.",
  },
];

export default function GoHighLevelPage() {
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
            {/* ── Left column ── */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5 md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-normal text-[var(--primary)] md:text-xs md:tracking-widest">
                  GoHighLevel Setup, Funnels &amp; Automation
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-center font-display text-3xl font-normal capitalize leading-snug md:text-left md:text-6xl md:leading-tight">
                Your GoHighLevel
                <br />
                Expert Guy
              </h1>

              {/* Accent line */}
              <div className="mx-auto h-[3px] w-32 rounded-full bg-gradient-brand md:mx-0"></div>

              {/* Intro */}
              <p className="mx-auto max-w-[600px] text-base text-[var(--text-secondary)] md:mx-0 md:text-lg">
                A GoHighLevel expert sets up and manages your GoHighLevel
                account so it works for your business: CRM and pipelines,
                funnels and landing pages, automated follow-up by text and
                email, booking calendars and review requests. Most businesses
                do not have a lead problem. They have a follow-up problem.
                Leads come in, sit in a messy pipeline, and go cold while you
                are busy doing the work. I fix that. I build GoHighLevel
                systems that catch every lead, chase it automatically, book
                the call, and keep you out of the manual mess.
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 md:justify-start">
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

            {/* ── Right column ── */}
            <div
              className="svc-item relative flex items-center justify-center"
              data-state="active"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <GHLWorkflowVisual />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-6">
            {/* Header */}
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              WHAT I DO / GOHIGHLEVEL SERVICES
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              GoHighLevel Services
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              From funnels and CRM to AI agents and migrations, every piece of
              your GoHighLevel system, set up properly in one place. Hire a
              GoHighLevel developer who builds systems that ship, not just
              setup.
            </p>

            {/* Grid */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GHL_SERVICES.map((service) => (
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
              I build GoHighLevel systems for local service businesses in the
              US and UK. These are the trades I work with most.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Roofers
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Roofers lose jobs when a storm enquiry waits hours for a
                  reply. I set up a GoHighLevel pipeline that answers every
                  new enquiry by text in seconds, asks for the roof type and
                  photos, and books the inspection straight into your
                  calendar. Every lead is tracked from first call to signed
                  quote, so nothing slips through while you are on a roof.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  HVAC
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  HVAC companies get flooded with calls during a heatwave or a
                  cold snap. I build a system that answers missed calls by
                  text, books the repair visit, and sends reminders so the
                  customer is home when you arrive. Seasonal service reminders
                  go out automatically, so past customers call you first when
                  their system breaks down.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Plumbers
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Plumbers win the job by answering first. I set up instant
                  text replies for missed calls, a booking calendar for
                  emergency and planned visits, and follow-up messages that ask
                  for a review after the job is done. Your pipeline shows every
                  job from enquiry to invoice, so no call goes unanswered.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Med Spas
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Med spas run on bookings and repeat visits. I set up online
                  booking with automatic confirmations and reminders,
                  follow-up messages after each appointment, and review
                  requests that grow your Google profile. New enquiries get an
                  instant reply with your treatment list and a booking link,
                  even after hours.
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:col-span-2">
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  Other Businesses
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Don&apos;t see your trade here? If your business runs on
                  leads, bookings and follow-ups, GoHighLevel fits. Tell me
                  how you win jobs today and I will build the system around
                  the way you work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related service ── */}
        <p className="mx-auto max-w-6xl px-6 pb-8 text-[var(--text-secondary)]">
          Need a website outside GoHighLevel? See my{" "}
          <a
            href="https://www.sohailworks.com/wordpress-development-services"
            className="text-[var(--primary)] underline underline-offset-2 hover:opacity-80"
          >
            WordPress development services
          </a>
          .
        </p>

        {/* ── Related guide ── */}
        <p className="mx-auto max-w-6xl px-6 pb-8 text-[var(--text-secondary)]">
          Not sure how to pick the right person? Read my guide on{" "}
          <a
            href="https://www.sohailworks.com/guides/how-to-hire-a-gohighlevel-expert"
            className="text-[var(--primary)] underline underline-offset-2 hover:opacity-80"
          >
            how to hire a GoHighLevel expert
          </a>
          .
        </p>

        {/* ── GoHighLevel vs HubSpot ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
                GOHIGHLEVEL VS HUBSPOT
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                GoHighLevel vs HubSpot
              </h2>
              <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
                HubSpot is a great CRM, but it gets expensive fast, and funnels,
                calendars and automation cost extra. GoHighLevel puts the CRM,
                funnels, calendars, email, SMS and automation in one place, for
                one price. If you want bookings without the HubSpot bill,
                GoHighLevel is the better fit for a small business.
              </p>
              <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
                Already on HubSpot? I move your contacts, pipelines and
                workflows to GoHighLevel without losing data or momentum. See
                HubSpot Migration above.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <VsHubSpotVisual />
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

        {/* ── FAQ ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              GoHighLevel Questions, Answered
            </h2>
            <div className="mt-12">
              <FaqAccordion faqs={GHL_FAQS} />
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Ready to get more booked jobs from your website?
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
