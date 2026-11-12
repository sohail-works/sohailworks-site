"use client";

import { ArrowUp, ArrowUpRight, Calendar, MapPin, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "447512281222";
const BOOKING_URL = "https://cal.com/sohail-qeijwg/book-a-call";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-6xl">
              Let&apos;s collaborate on your next{" "}
              <span className="text-[var(--primary)]">project!</span>
            </h2>

            {/* ── Contact info ── */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[var(--primary)]"
              >
                <Calendar className="h-4 w-4 text-[var(--text-muted)]" />
                Book a Call
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-[var(--primary)]"
              >
                <Phone className="h-4 w-4 text-[var(--text-muted)]" />
                +44 7512 281222 (WhatsApp)
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--text-muted)]" />
                3 North Street, Falkirk, FK2 7NF, United Kingdom
              </span>
            </div>
          </div>

          {/* ── Contact Me circle — opens WhatsApp ── */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi Sohail, I want to discuss a project."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-32 w-32 shrink-0 self-center items-center justify-center gap-1 rounded-full bg-[var(--primary)] text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)] md:h-40 md:w-40"
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 flex items-center justify-between border-t border-[var(--border-subtle)] pt-6">
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Sohail Ashraf. All Rights Reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)] text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
