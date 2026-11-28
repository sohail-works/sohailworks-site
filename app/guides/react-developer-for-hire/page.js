// Guide 14: React developer for hire, how to find the right one.

import dynamic from "next/dynamic";
import { ReactHireVisual } from "@/components/ReactHireVisual";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Users,
  Code2,
  Briefcase,
  MessageSquare,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"));

export const metadata = {
  title:
    "React Developer for Hire: How to Find the Right One for Your Business | SohailWorks",
  description:
    "React developer for hire, in plain words. What a React developer does, how to check their work before you hire, and freelancer vs agency, for US and UK business owners.",
  alternates: {
    canonical:
      "https://www.sohailworks.com/guides/react-developer-for-hire",
  },
  openGraph: {
    title:
      "React Developer for Hire: How to Find the Right One for Your Business | SohailWorks",
    description:
      "React developer for hire, in plain words. What a React developer does, how to check their work before you hire, and freelancer vs agency, for US and UK business owners.",
    url: "https://www.sohailworks.com/guides/react-developer-for-hire",
    siteName: "SohailWorks",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "React Developer for Hire: How to Find the Right One for Your Business | SohailWorks",
    description:
      "React developer for hire, in plain words. What a React developer does, how to check their work before you hire, and freelancer vs agency, for US and UK business owners.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Developer for Hire: How to Find the Right One for Your Business",
    description:
      "React developer for hire, in plain words. What a React developer does, how to check their work before you hire, and freelancer vs agency, for US and UK business owners.",
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
      "https://www.sohailworks.com/guides/react-developer-for-hire",
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
        name: "Web App Development Services",
        item: "https://www.sohailworks.com/web-app-development-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "React Developer for Hire",
        item: "https://www.sohailworks.com/guides/react-developer-for-hire",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where do I find a React developer for hire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The usual places are Upwork and Fiverr for freelancers, and agency sites for teams. The platform matters less than the check. Ask for live work you can click through, not screenshots, and talk to the developer before you pay anything. A developer who hides behind a sales rep or refuses a call is a warning sign.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if a React developer is good?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look at three things. Real work you can open and use, not just pictures of it. A clear explanation of how they would build your app, in words you understand. And honest answers about what they cannot do. Good developers say no to the wrong fit. Weak ones say yes to everything and disappear halfway.",
        },
      },
      {
        "@type": "Question",
        name: "Should I hire hourly or fixed price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a defined project, fixed price is safer for you. You agree the scope, the timeline and the price before work starts, so there are no surprise bills. Hourly fits ongoing work where the scope keeps changing, like maintenance. Either way, get the scope and the price in writing before anyone writes code.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a React app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple customer-facing app with a few screens takes a few weeks. A dashboard with logins, bookings or payments takes longer, because the backend work is where the time goes. Be careful with anyone who promises a full app in a few days. That usually means a template with your logo on it, not a custom build.",
        },
      },
      {
        "@type": "Question",
        name: "Can a React developer maintain my app after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and you should agree this before the build starts. Ask who fixes bugs after launch, who handles updates, and what that costs. I stay available after launch for fixes and updates, and I offer maintenance plans so the app stays healthy. An app with no maintenance plan is a site waiting to break.",
        },
      },
    ],
  },
];

// --- --- Data --- ---
const BASICS = [
  {
    icon: Code2,
    title: "What a React developer does",
    desc: "A React developer builds the part of your app your customers see and touch: the screens, the buttons, the forms, the dashboards. They also connect it to the backend, the part that stores your bookings, your customer details and your payments. If your business needs logins, a booking flow or a custom tool, that is React work, not a WordPress page.",
  },
  {
    icon: Briefcase,
    title: "What good looks like",
    desc: "A good React developer shows you live work you can click through, explains the plan in plain words, and tells you honestly what fits and what does not. The app they build loads fast, works on phones, and is easy to change later. The bad ones show screenshots, promise everything, and hand over code nobody else can touch. The difference shows up months after launch, not on day one.",
  },
];

const CHECKS = [
  {
    icon: Briefcase,
    title: "Real work to show",
    desc: "Ask for live apps you can open, not screenshots or a logo wall. Click through them. Do they load fast? Do they work on your phone? A developer with real work is proud to show it. One who only has pictures is usually selling someone else's work, or work that never shipped.",
  },
  {
    icon: Code2,
    title: "Clean code habits",
    desc: "You do not need to read code to check this. Ask how the app is organised, what happens if they disappear, and whether another developer could pick it up. A good developer uses standard patterns, writes clear names and keeps the code tidy, because they know someone else may maintain it one day. Messy code is a bill you pay later.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    desc: "This is where most hires go wrong. A good developer answers in plain words, tells you when something will be late, and asks questions before building the wrong thing. If replies take days before you have even paid, they will take longer after. The cheapest developer who never answers costs more than the honest one who does.",
  },
  {
    icon: Wallet,
    title: "Fixed quote and timeline",
    desc: "Before any code, you should have the scope, the price and the timeline in writing. A fixed quote protects you from hourly billing that never ends, and a timeline with clear milestones tells you whether the project is on track. If a developer will not commit to either, they are not ready for your project.",
  },
];

const PICKS = [
  {
    icon: Users,
    title: "Hire a freelancer when",
    desc: "Your project is clear, you know what you want, and you want to work directly with the person building it. A good freelancer is faster and cheaper than an agency for a defined app, and you talk to the builder, not a project manager. Make sure they have backup if they get sick, and agree maintenance before launch.",
    point: "Best for: defined apps with a clear scope and one point of contact.",
  },
  {
    icon: Briefcase,
    title: "Hire an agency when",
    desc: "Your project needs several people at once, a designer, a backend developer and a tester, or it is big enough that one person cannot carry it. An agency costs more, but you get a team and a process. For most local businesses, a good freelancer covers it. An agency fits when the app is the whole business.",
    point: "Best for: large apps that need a full team from day one.",
  },
];

const GUIDE_FAQS = [
  {
    q: "Where do I find a React developer for hire?",
    a: "The usual places are Upwork and Fiverr for freelancers, and agency sites for teams. The platform matters less than the check. Ask for live work you can click through, not screenshots, and talk to the developer before you pay anything. A developer who hides behind a sales rep or refuses a call is a warning sign.",
  },
  {
    q: "How do I know if a React developer is good?",
    a: "Look at three things. Real work you can open and use, not just pictures of it. A clear explanation of how they would build your app, in words you understand. And honest answers about what they cannot do. Good developers say no to the wrong fit. Weak ones say yes to everything and disappear halfway.",
  },
  {
    q: "Should I hire hourly or fixed price?",
    a: "For a defined project, fixed price is safer for you. You agree the scope, the timeline and the price before work starts, so there are no surprise bills. Hourly fits ongoing work where the scope keeps changing, like maintenance. Either way, get the scope and the price in writing before anyone writes code.",
  },
  {
    q: "How long does it take to build a React app?",
    a: "A simple customer-facing app with a few screens takes a few weeks. A dashboard with logins, bookings or payments takes longer, because the backend work is where the time goes. Be careful with anyone who promises a full app in a few days. That usually means a template with your logo on it, not a custom build.",
  },
  {
    q: "Can a React developer maintain my app after launch?",
    a: "Yes, and you should agree this before the build starts. Ask who fixes bugs after launch, who handles updates, and what that costs. I stay available after launch for fixes and updates, and I offer maintenance plans so the app stays healthy. An app with no maintenance plan is a site waiting to break.",
  },
];

export default function ReactDeveloperForHirePage() {
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
                GUIDES / WEB APPS
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                React Developer for Hire: How to Find the Right One for Your
                Business
              </h1>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                You need a custom app, a dashboard or a booking tool, and
                WordPress will not cut it. So you need a React developer.
                The problem is not finding one. There are thousands. The
                problem is telling the good ones from the ones who will take
                your money and disappear halfway through the build.
              </p>
              <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
                This guide explains how to hire well, in plain words, for
                business owners in the US and UK, roofers, plumbers, HVAC,
                med spas, cleaning, builders and electricians, who want an
                app that works and a developer who answers the phone.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
              />
              <ReactHireVisual />
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
              What a React Developer Actually Does
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Before you hire, it helps to know what you are hiring for,
              and what good looks like when you see it.
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

        {/* -- The checks -- */}
        <section className="relative pb-24 pt-8">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
              THE CHECKS
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
              Four Things to Check Before You Hire
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Run these four checks on any developer, freelancer or agency,
              before you pay anything. They take one call and they save
              most bad hires.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CHECKS.map((item) => (
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
              Freelancer or Agency?
            </h2>
            <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
              Both can be right. It depends on the size of the job and how
              you like to work.
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
                  Looking for a React developer yourself?
                </p>
                <p className="mt-4 text-sm text-black/60 dark:text-white/60">
                  I build React and Next.js apps for US and UK businesses,
                  with a fixed quote before we start and support after
                  launch. Tell me what you need on a free call. See how I
                  work on my{" "}
                  <a
                    href="/web-app-development-services"
                    className="font-medium text-[var(--primary)] underline"
                  >
                    web app development services
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
              Hiring a React Developer Questions, Answered
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
              Need a React developer you can trust?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Tell me what you want built and I will send a clear plan,
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
