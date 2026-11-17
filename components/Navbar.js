"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const links = [
    { label: "Home", href: "/#home" },
    {
      label: "Services",
      href: "/#services",
      children: [
        { label: "GoHighLevel Expert", href: "/gohighlevel-expert" },
        { label: "WordPress Development", href: "/wordpress-development-services" },
        { label: "Web App Development", href: "/web-app-development-services" },
      ],
    },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/#about" },
    {label: "Reviews", href: "/#reviews"},
    { label: "Contact", href: "/#contact" },
  ];

  const servicePages = [
    "/gohighlevel-expert",
    "/wordpress-development-services",
    "/web-app-development-services",
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("/#home");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive =
    active === "/#services" || servicePages.includes(pathname);

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

  // ─── Scroll spy:
  useEffect(() => {
    const ids = ["home", "services", "portfolio", "about", "reviews", "contact"];
    const observed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`/#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    const observeSections = () => {
      // Drop nodes that were removed (HMR / dynamic reload) so they can be re-observed
      observed.forEach((el) => {
        if (!document.contains(el)) {
          observer.unobserve(el);
          observed.delete(el);
        }
      });
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });
    };

    // Do NOT disconnect the MutationObserver once all sections are found —
    // a section that remounts (dev HMR, dynamic import reload) is a new DOM
    // node, and it only gets observed if the observer is still watching
    const mo = new MutationObserver(observeSections);
    observeSections();
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  function toggleMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("light");
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b border-[var(--border-subtle)] backdrop-blur-md ${
          open ? "bg-[var(--bg-base)]" : "bg-[var(--bg-base)]/70"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center text-2xl">
            <Image
              src="/images/logo.svg"
              alt="Sohail logo"
              width={35}
              height={35}
            />
            <span className="bg-[image:var(--gradient-brand)] bg-clip-text font-display font-bold text-2xl text-transparent">
              Sohail<span className="text-[var(--primary)]">.</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {links.map((link) => {
              if (link.children) {
                return (
                  <li key={link.href} className="group relative">
                    <Link
                      onClick={() => setActive(link.href)}
                      href={link.href}
                      className={`inline-flex items-center gap-1 rounded-lg text-[15px] font-semibold px-4 py-2 transition-colors ${
                        isServicesActive
                          ? "bg-[var(--primary-light)] text-[var(--primary)]"
                          : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </Link>
                    {/* ── Dropdown — hover pe khulta hai ── */}
                    <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-72 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setActive(link.href)}
                            className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                              pathname === child.href
                                ? "bg-[var(--primary-light)] text-[var(--primary)]"
                                : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }
              return (
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
              );
            })}
          </ul>

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

          <div className="md:hidden flex gap-4">
            <button
              className="block rounded-xl border border-[var(--border-default)] p-2.5"
              onClick={toggleMode}
              aria-label="Toggle theme"
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-2.5 text-[var(--text-secondary)] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="relative block h-5 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[5px]"
                  }`}
                />
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

        <div
          className={`absolute left-0 right-0 top-full z-50 origin-top-right border-b border-[var(--border-subtle)] bg-[var(--bg-base)] transition-all duration-300 md:hidden ${
            open
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-0 opacity-0"
          }`}
        >
          <ul className="space-y-1 px-6 py-4">
            {links.map((link) => {
              if (link.children) {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold transition-colors ${
                        isServicesActive
                          ? "bg-[var(--primary-light)] text-[var(--primary)]"
                          : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <ul className="mt-1 space-y-1 pl-8">
                        <li>
                          <Link
                            href="/#services"
                            onClick={() => {
                              setActive("/#services");
                              setServicesOpen(false);
                              setOpen(false);
                            }}
                            className="block rounded-lg px-4 py-2.5 text-[15px] font-semibold text-[var(--text-muted)] transition-colors hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                          >
                            All Services
                          </Link>
                        </li>
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => {
                                setActive("/#services");
                                setServicesOpen(false);
                                setOpen(false);
                              }}
                              className={`block rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                                pathname === child.href
                                  ? "bg-[var(--primary-light)] text-[var(--primary)]"
                                  : "text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--text-primary)]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
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
              );
            })}
          </ul>
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
