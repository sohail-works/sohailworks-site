"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import {
  BadgeCheck,
  Briefcase,
  Check,
  Clock,
  Code,
  MapPin,
  Rocket,
  Search,
  Sparkles,
  Star,
} from "lucide-react";

// ─── ─── Data ─── ───
const STATS = [
  { icon: Clock, label: "Responds within ~1 hour" },
  { icon: BadgeCheck, label: "100% On-time Delivery" },
  { icon: Briefcase, label: "100+ Orders Completed" },
  { icon: MapPin, label: "United Kingdom" },
];

const SKILLS = ["WordPress", "GoHighLevel", "React", "Next.js"];

const STACK = ["WordPress", "GoHighLevel", "React", "Next.js", "WooCommerce"];

const CHECKS = [
  "Clean, conversion-focused code",
  "On-time delivery, every time",
  "Clear communication from start to finish",
];

const STEPS = [
  {
    icon: Search,
    name: "Discover",
    text: "Align on goals & requirements",
    animate: { rotate: [0, -18, 18, 0], scale: [1, 1.12, 1] },
    duration: 2.4,
  },
  {
    icon: MapPin,
    name: "Plan",
    text: "Define scope, timeline & deliverables",
    animate: { y: [0, -10, 0] },
    duration: 1.8,
  },
  {
    icon: Code,
    name: "Build",
    text: "Develop with clean, scalable code",
    animate: { rotate: [0, -10, 10, 0], x: [0, 2, -2, 0] },
    duration: 2,
  },
  {
    icon: Sparkles,
    name: "Refine",
    text: "Test, optimize & polish UX",
    animate: { rotate: [0, 90, 0], scale: [1, 1.35, 1] },
    duration: 2,
  },
  {
    icon: Rocket,
    name: "Launch",
    text: "Deploy & provide ongoing support",
    animate: { y: [0, -12, 0], rotate: [0, -14, 0] },
    duration: 2.2,
  },
];

// Shared light-up: icon stroke fades muted to brand orange, in sync
// with its own movement.
const LIGHT_UP = { color: ["#9CA3AF", "#F97316", "#9CA3AF"] };

// ─── ─── Animated process icon, Flaticon style ─── ───
// The icon itself rotates and moves (clearly visible), and lights up
// while it does. The circle border is static. Animations only run
// when the section is on screen, so they cost nothing before that.
function ProcessIcon({ icon: Icon, animate, duration, delay, active }) {
  return (
    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--primary)]/40 bg-[var(--bg-elevated)] text-[var(--primary)] shadow-[0_0_24px_rgba(249,115,22,0.25)]">
      <motion.div
        animate={active ? { ...animate, ...LIGHT_UP } : {}}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex items-center justify-center"
      >
        <Icon className="h-7 w-7" />
      </motion.div>
    </div>
  );
}

// ─── ─── Main component ─── ───
export default function About() {
  // Process animations start only when the section scrolls into view,
  // so they never run (or cost CPU) while the user is still at the hero.
  const processRef = useRef(null);
  const processInView = useInView(processRef, { margin: "-100px" });

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header, like Portfolio / Services ── */}
        <div className="md:w-2/3">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
            ABOUT / WHO I AM
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Get to know <span className="text-[var(--primary)]">me.</span>
          </h2>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            Who I am, what I do, and how I work — all in one place.
          </p>
        </div>

        {/* Side by side from tablet up, stacked on mobile */}
        <div className="mt-12 grid gap-8 md:grid-cols-[320px_1fr]">
          {/* ── Profile card ── */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-8 text-center">
            {/* Avatar with brand-gradient ring */}
            <div className="relative mx-auto w-fit">
              <div className="rounded-full bg-[image:var(--gradient-brand)] p-[3px]">
                <Image
                  src="/images/profile.webp"
                  alt="Sohail Ashraf"
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-28 w-28 rounded-full object-cover"
                />
              </div>
              {/* Verified badge */}
              <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] ring-2 ring-[var(--bg-elevated)]">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
            </div>

            {/* Available, hero-badge style */}
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-base)] px-3 py-1 font-mono text-xs font-medium tracking-wide text-[#22C55E]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
              </span>
              Available
            </span>

            <h3 className="mt-4 font-display text-2xl font-bold text-[var(--text-primary)]">
              Sohail Ashraf
            </h3>
            <p className="mt-1 font-medium text-[#6E73BE]">
              WordPress, GHL &amp; Next.js Developer
            </p>

            {/* Seller badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-white">
                Top Rated
              </span>
            </div>

            {/* Rating */}
            <p className="mt-4 flex items-center justify-center gap-1.5 font-medium text-[var(--text-primary)]">
              <Star className="h-4 w-4 fill-current text-[var(--primary)]" />
              4.8/5.0 (46 reviews)
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Member since 2021 &middot; English &mdash; Fluent
            </p>

            <hr className="my-6 border-[var(--border-subtle)]" />

            {/* Stats */}
            <ul className="space-y-4 text-left">
              {STATS.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3 text-[var(--text-primary)]"
                >
                  <s.icon className="h-5 w-5 shrink-0 text-[#6E73BE]" />
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>

            <hr className="my-6 border-[var(--border-subtle)]" />

            {/* Skills */}
            <p className="text-sm font-medium text-[var(--text-muted)]">
              Skills
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-sm text-[#6E73BE] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 block rounded-xl bg-[#6E73BE] px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
            >
              Contact Me
            </a>
          </div>

          {/* ── About ── */}
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="text-[var(--primary)]">Sohail.</span> A Web
              Developer &amp; Problem Solver.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
              I build fast, reliable websites and funnels that turn visitors
              into customers. With 5+ years of experience and 100+ orders
              completed, I focus on clean code, clear communication, and results
              you can measure.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Whether it&apos;s a WordPress site built for SEO, a GoHighLevel
              funnel that automates your sales process, or a React/Next.js app
              for a modern web experience, I deliver on time, with no
              headaches. I work with roofers, HVAC, plumbers, med spas and other
              local businesses in the US &amp; UK.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-3">
              {CHECKS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 font-medium text-[var(--text-primary)]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <p className="mt-8 font-medium text-[var(--text-primary)]">
              My Tech Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-sm text-[#6E73BE] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* ── My Process, moved up into the right column ── */}
            <div
              ref={processRef}
              className="mt-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-6 md:p-8"
            >
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                My Process
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                A clear 5-step approach from idea to launch
              </p>

              <div className="relative mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-5">
                {/* Dashed connector, only when all 5 sit in one row */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-[var(--primary)]/30 xl:block"
                />

                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative text-center"
                  >
                    <ProcessIcon
                      icon={step.icon}
                      animate={step.animate}
                      duration={step.duration}
                      delay={i * 0.3}
                      active={processInView}
                    />

                    <p className="mt-4 font-display text-lg font-bold text-[var(--text-primary)]">
                      {step.name}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[var(--text-muted)]">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
