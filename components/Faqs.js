"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

// ─── ─── Data ─── ───
// First 3 are general, the rest cover WordPress, GoHighLevel,
// AI automation, and React / Next.js.
const FAQS = [
  {
    q: "What's the process like when I start working with you?",
    a: "Simple — we start with a free call to understand your goals, then I share a clear plan, timeline, and price. Once you approve, I build, you review, and we launch. You always know what's happening at every step.",
  },
  {
    q: "Do you offer a free consultation call?",
    a: "Yes. Book a free call and we'll discuss your project, your goals, and the best way to build it — no pressure, no obligation.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most WordPress websites take 1–2 weeks, funnels about a week, and custom React / Next.js apps 2–4 weeks, depending on scope. You'll get a clear timeline before we start.",
  },
  {
    q: "Can you build or redesign my WordPress website?",
    a: "Yes — I build fast, SEO-friendly WordPress websites from scratch, and I redesign existing sites that look outdated or load slowly. Every site is mobile-friendly and built to turn visitors into customers.",
  },
  {
    q: "What can GoHighLevel do for my business?",
    a: "GoHighLevel brings your funnels, CRM, email, SMS, and bookings into one place. I set up funnels that capture leads, automations that follow up instantly, and pipelines that keep every lead organised — so no enquiry slips through.",
  },
  {
    q: "Do you build AI automations?",
    a: "Yes. I set up AI chatbots that answer customer questions, automations that follow up with leads, and workflows that save hours of manual work — all connected to your website or GoHighLevel.",
  },
  {
    q: "Can you build a custom app with React / Next.js?",
    a: "Yes. For anything beyond a standard website — dashboards, booking systems, custom tools — I build fast, modern apps with React and Next.js, tailored exactly to how your business works.",
  },
  {
    q: "Can you set up a WooCommerce store?",
    a: "Yes. I build WooCommerce stores with simple checkout, secure payments, and easy product management — so you can start selling online without the technical headache.",
  },
  {
    q: "What payment methods do you accept?",
    a: "I accept bank transfer, PayPal, and card payments, with a simple schedule we agree on before starting.",
  },
  {
    q: "Do you provide support after the website goes live?",
    a: "Yes — I stay available after launch to fix any issues and help with small updates. I also offer monthly maintenance plans for updates, backups, and ongoing changes.",
  },
];

// Gradient border that follows the rounded corners exactly.
// The border itself is the gradient (border-box layer) while the fill
// stays solid (padding-box layer), so there is no wrapper to misalign.
const FAQ_BORDER_CSS = `
.faq-item {
  border: 1px solid var(--border-subtle);
  background: var(--bg-base);
}
.faq-item:hover,
.faq-item.open {
  border: 1px solid transparent;
  background:
    linear-gradient(var(--bg-base), var(--bg-base)) padding-box,
    var(--gradient-brand) border-box;
}
`;

// ─── ─── Single FAQ item ─── ───
function FaqItem({ faq, number, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item group rounded-xl transition-all duration-300 ${
        isOpen ? "open" : ""
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-[var(--text-primary)]">
          <span className="mr-1 text-[var(--text-muted)]">{number}.</span>
          {faq.q}
        </span>
        {/* Plus rotates into a cross when open, back to plus when closed */}
        <span
          className={`shrink-0 transition-all duration-300 ${
            isOpen
              ? "rotate-45 text-[var(--primary)]"
              : "text-[var(--text-muted)] group-hover:text-[var(--primary)]"
          }`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 leading-relaxed text-[var(--text-secondary)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── ─── Main component ─── ───
export default function Faqs() {
  // First question open by default; one open at a time.
  const [openIndex, setOpenIndex] = useState(0);

  const left = FAQS.slice(0, 5);
  const right = FAQS.slice(5);

  const renderColumn = (items, offset) => (
    <div className="space-y-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-4 md:p-6">
      {items.map((faq, i) => {
        const index = offset + i;
        return (
          <FaqItem
            key={faq.q}
            faq={faq}
            number={index + 1}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        );
      })}
    </div>
  );

  return (
    <section id="faq" className="relative pb-24 pt-12">
      <style>{FAQ_BORDER_CSS}</style>
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="md:w-2/3">
          <p className="inline-flex rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1 font-mono text-xs font-medium tracking-[0.15em] text-[var(--text-secondary)]">
            COMMON QUESTIONS
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Curious about my{" "}
            <span className="text-[var(--primary)]">work process?</span>
          </h2>
        </div>

        {/* ── Two columns, 5 questions each ── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {renderColumn(left, 0)}
          {renderColumn(right, 5)}
        </div>
      </div>
    </section>
  );
}
