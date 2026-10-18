"use client";


import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // ─── Nav links (single source — rendered by desktop AND mobile menus) ───
  const links = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  // ─── State ───
  const [darkMode, setDarkMode] = useState(false); // theme icon state
  const [active, setActive] = useState("/#home"); // highlighted nav link
  const [open, setOpen] = useState(false); // mobile menu open/close

  // ─── Scroll lock: menu open ho to website scroll na ho ───
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ─── Theme toggle: flips `dark` class on <html>, CSS variables handle colors ───
  function toggleMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("light");
  }

  return (
    // ─── Header: sticky + glass effect ───
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ── Logo: image + gradient brand text ── */}
        <Link href="/" className="flex items-center text-2xl">
          <Image src="/images/logo.svg" alt="Sohail — logo" width={35} height={35} />
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text font-display font-bold text-2xl text-transparent">
            Sohail<span className="text-[var(--primary)]">.</span>
          </span>
        </Link>

        {/* ── Desktop nav links (hidden on mobile) ── */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                onClick={() => setActive(link.href)}
                href={link.href}
                className={`rounded-lg text-[15px] font-semibold px-4 py-2 transition-colors ${
                  active === link.href
                    ? "bg-[var(--primary-light)] text-[var(--primary)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop actions: theme toggle + CTA ── */}
        <div className="flex items-center gap-4">
          <button
            className="hidden md:block rounded-xl border border-[var(--border-default)] p-2.5"
            onClick={toggleMode}
            aria-label="Toggle theme"
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link
            href="#contact"
            className="hidden md:inline-flex rounded-lg bg-[var(--primary)] px-5 py-[12px] text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Get Quote
          </Link>
        </div>

        {/* ── Mobile actions: theme toggle + animated hamburger ── */}
        <div className="md:hidden flex gap-4">
          <button
            className="block rounded-xl border border-[var(--border-default)] p-2.5"
            onClick={toggleMode}
            aria-label="Toggle theme"
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Hamburger → X: 2 lines, outer span positions/rotates, inner span grows width */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text-secondary)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-5 w-5">
              {/* Line 1 — full width */}
              <span
                className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[5px]"
                }`}
              />
              {/* Line 2 — half width (right aligned), grows into X */}
              <span
                className={`absolute left-0 w-full transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[13px]"
                }`}
              >
                <span
                  className={`ml-auto block h-0.5 bg-current transition-all duration-300 ${
                    open ? "w-full" : "w-1/2"
                  }`}
                />
              </span>
            </span>
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown: overlay panel, diagonal open/close animation ── */}
      {/* Always rendered (never unmounted) so close animation can play */}
      <div
        className={`absolute left-0 right-0 top-full z-50 origin-top-right border-b border-[var(--border-subtle)] bg-[var(--bg-base)] transition-all duration-300 md:hidden ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`block rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors ${
                  active === link.href
                    ? "bg-[var(--primary-light)] text-[var(--primary)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="px-6 pb-6">
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-xl bg-[var(--primary)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Get Quote
          </Link>
        </div>
      </div>

      {/* ── Mobile menu overlay: dull bg, click to close ── */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}
