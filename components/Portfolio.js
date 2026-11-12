"use client";

import { useState } from "react";
import Image from "next/image";

// ─── ─── Data ─── ───
const PROJECTS = [
  {
    image: "/images/portfolio/project-1.webp",
    category: "wordpress",
  },
  {
    image: "/images/portfolio/project-2.webp",
    category: "wordpress",
  },
  {
    image: "/images/portfolio/project-3.webp",
    category: "wordpress",
  },
  {
    image: "/images/portfolio/project-4.webp",
    category: "wordpress",
  },
  {
    image: "/images/portfolio/project-5.webp",
    category: "wordpress",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "wordpress", label: "WordPress" },
  { key: "ghl", label: "GHL" },
  { key: "react", label: "React / Next.js" },
];

// ─── ─── Main component ─── ───
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [tapped, setTapped] = useState(null); // mobile: tap toggles the scroll (no hover on touch)

  const filtered =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="md:w-2/3">
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
            PORTFOLIO / SELECTED WORK
          </p>
          <h2 className="mt-4 font-display text-[40px] leading-[1.1] font-bold text-[var(--text-primary)] md:text-6xl">
            Built for <span className="text-[var(--primary)]">results</span>,
            not just to look good.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            A selection of websites, funnels, and apps I've built for real
            businesses, every one designed to bring leads, bookings, and sales.
          </p>
        </div>

        {/* ── Filters ── */}
        <div className="mt-10 flex flex-wrap gap-6">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`pb-2 text-sm font-medium transition ${
                activeFilter === f.key
                  ? "border-b-2 border-[var(--primary)] text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={p.image}
              onClick={() => setTapped(tapped === p.image ? null : p.image)}
              className="group relative cursor-pointer rounded-xl bg-[var(--border-subtle)] p-[3px] transition-all duration-300 hover:bg-[image:var(--gradient-brand)] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-[9px]">
                <Image
                  src={p.image}
                  alt={`Project ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-[object-position] duration-[5000ms] ease-in-out group-hover:object-bottom ${
                    tapped === p.image ? "object-bottom" : "object-top"
                  }`}
                />

                {/* Mouse icon — scroll hint */}
                <div
                  className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-0 ${
                    tapped === p.image ? "opacity-0" : ""
                  }`}
                >
                  <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/90 bg-black/40 pt-1.5 backdrop-blur-sm">
                    <div className="h-2 w-1 animate-bounce rounded-full bg-white" />
                  </div>
                </div>

                {/* Live Preview badge */}
                <span
                  className={`absolute left-3 top-3 z-10 rounded-md bg-black/70 px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] text-white backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 ${
                    tapped === p.image ? "opacity-100" : "opacity-0"
                  }`}
                >
                  LIVE PREVIEW
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
