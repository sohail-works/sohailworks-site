"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

// ─── ─── Data ─── ───
const SERVICES = [
  {
    key: "wordpress",
    num: "01",
    eyebrow: "CUSTOM WEBSITES / WORDPRESS",
    title: "WordPress Development",
    description:
      "Flexible, scalable websites designed around your business, your content, and your customers.",
    capabilities: [
      "Custom WordPress Websites",
      "Elementor & Elementor Pro",
      "WooCommerce Development",
      "Custom Theme & UI Implementation",
      "Performance and Responsive Optimization",
    ],
    cta: "Explore WordPress",
  },
  {
    key: "ghl",
    num: "02",
    eyebrow: "FUNNELS & AUTOMATION / GOHIGHLEVEL",
    title: "GoHighLevel Solutions",
    description:
      "Connected systems that turn leads into conversations, streamline follow-ups, and help businesses manage their customer journeys.",
    capabilities: [
      "CRM & Pipeline Setup",
      "Landing Pages and Funnels",
      "Workflow Automation",
      "Forms, Calendars & Appointment Booking",
      "Lead Nurturing and Follow-Up Systems",
    ],
    cta: "Explore GHL",
  },
  {
    key: "frontend",
    num: "03",
    eyebrow: "WEB APPS / REACT & NEXT.JS",
    title: "Modern Frontend Development",
    description:
      "Fast, responsive, interactive digital experiences built with modern frontend technologies and thoughtful engineering.",
    capabilities: [
      "React.js Development",
      "Next.js Websites and Applications",
      "Responsive UI Development",
      "Reusable Components and Design Systems",
      "API Integration and Interactive Experiences",
    ],
    cta: "Explore Frontend",
  },
];

// ─── ─── Main component ─── ───
export default function Services() {
  const trackRef = useRef(null);
  const pathRef = useRef(null);
  const nodeRefs = useRef([]);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [progress, setProgress] = useState(0);
  const [activeNode, setActiveNode] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setDims({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Snake path — fixed percentages, 1:1 pixels ──
  const { w, h } = dims;
  const x1 = w * 0.02;
  const x2 = w * 0.98;
  const yA = h * 0.29;
  const yB = h * 0.62;
  const cp = 50;
  const snakePath =
    w > 0
      ? `M ${x1} 0 L ${x1} ${yA - cp} C ${x1} ${yA} ${x2} ${yA} ${x2} ${yA + cp} L ${x2} ${yB - cp} C ${x2} ${yB} ${x1} ${yB} ${x1} ${yB + cp} L ${x1} ${h * 0.8}`
      : "";

  // ── Draw on scroll ──
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.8", "end 0.55"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const c = Math.min(1, Math.max(0, v));
    // Mobile par tez draw (1.4x)
    const fast = isMobile ? Math.min(1, c * 1.4) : c;
    setProgress(fast);

    // Desktop path
    const p = pathRef.current;
    const track = trackRef.current;
    if (!p || !track) return;
    const len = p.getTotalLength();
    p.style.strokeDasharray = `${len}`;
    p.style.strokeDashoffset = `${len * (1 - c)}`;

    // Node activation via draw head Y
    const headY = p.getPointAtLength(len * c).y;
    const trackTop = track.getBoundingClientRect().top;
    let on = -1;
    nodeRefs.current.forEach((node, i) => {
      if (!node) return;
      const r = node.getBoundingClientRect();
      const nodeY = r.top + r.height / 2 - trackTop;
      if (headY >= nodeY - 5) on = i;
    });
    setActiveNode(on);
  });

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
          02 / SERVICES
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          Services
        </h2>
        <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
          End-to-end solutions to build, automate and scale your business.
        </p>

        {/* ── Timeline track ── */}
        <div ref={trackRef} className="relative mt-16">
          {/* Mobile: bg line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 w-px bg-black/10 dark:bg-white/10 md:hidden"
            style={{ bottom: "20%" }}
          />
          {/* Mobile: orange line (draws on scroll) */}
          <div
            aria-hidden="true"
            className="absolute top-0 md:hidden"
            style={{ left: "19.25px", bottom: "20%" }}
          >
            <div
              className="w-[2.5px] rounded-full bg-[#F97316]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          {/* Desktop: snake line */}
          {w > 0 && (
            <svg
              width={w}
              height={h}
              viewBox={`0 0 ${w} ${h}`}
              className="hidden md:block absolute inset-0"
              aria-hidden="true"
            >
              <path
                d={snakePath}
                fill="none"
                strokeWidth={1}
                className="stroke-black/[0.07] dark:stroke-white/[0.07]"
              />
              <path
                ref={pathRef}
                d={snakePath}
                fill="none"
                stroke="#F97316"
                strokeWidth={2.5}
                strokeLinecap="round"
              />
            </svg>
          )}

          {/* ── Service blocks ── */}
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.key}
                className={`relative pb-24 md:pb-40 ${
                  flip ? "pl-14 md:pl-0 md:pr-20" : "pl-14 md:pl-20"
                }`}
              >
                {/* Node — dot on the line */}
                <div
                  ref={(el) => (nodeRefs.current[i] = el)}
                  aria-hidden="true"
                  className={`absolute top-1 h-4 w-4 rounded-full left-5 -translate-x-1/2 transition-all duration-300 ${
                    flip
                      ? "md:left-auto md:right-[2%] md:translate-x-1/2"
                      : "md:left-[2%]"
                  } ${
                    activeNode >= i
                      ? "bg-[var(--primary)] shadow-[0_0_16px_var(--primary)]"
                      : "border-2 border-[var(--primary)]/50 bg-[var(--bg-base)]"
                  }`}
                />

                <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                  {/* Text */}
                  <div className={flip ? "md:order-2" : ""}>
                    <p className="font-mono text-xs tracking-[0.18em]">
                      <span className="text-[var(--primary)]">{s.num}</span>
                      <span className="text-[var(--text-muted)]"> / {s.eyebrow}</span>
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold text-[var(--text-primary)]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[var(--text-secondary)]">
                      {s.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {s.capabilities.map((c) => (
                        <li
                          key={c}
                          className="flex items-center gap-3 text-[var(--text-secondary)]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-hover)]"
                    >
                      {s.cta} <span aria-hidden="true">→</span>
                    </a>
                  </div>

                  {/* Image placeholder */}
                  <div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`flex aspect-[4/3] items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] font-mono text-sm text-[var(--text-muted)] dark:border-white/10 dark:bg-white/[0.03] ${
                      flip ? "md:order-1" : ""
                    }`}
                  >
                    {s.key}_image
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
