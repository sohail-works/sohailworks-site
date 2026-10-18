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
  <>
    {/* ─── Header: sticky + glass effect ───*/}
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ... nav ka sab kuch same ... */}
      </nav>

      {/* ── Mobile dropdown ── */}
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
    </header>

    {/* ── Overlay: header ke BAHIR ── */}
    <div
      onClick={() => setOpen(false)}
      aria-hidden="true"
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    />
  </>
);

}
