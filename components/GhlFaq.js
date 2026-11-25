"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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

// ─── ─── Gradient border ─── ───
const FAQ_BORDER_CSS = `
.faq-item {
  position: relative;
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  transition: border-color 0.3s ease, background-color 0.3s ease;
}
.faq-item::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, #6E73BE, #F97316, transparent 70%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.faq-item:hover::before,
.faq-item.open::before {
  opacity: 1;
}
`;

function FaqItem({ faq, number, isOpen, onToggle }) {
  return (
    <div
      className={`faq-item overflow-hidden rounded-2xl ${isOpen ? "open" : ""}`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span className="flex items-start gap-4">
          <span className="font-mono text-sm font-semibold text-[var(--primary)]">
            {String(number).padStart(2, "0")}.
          </span>
          <span className="font-display text-lg font-semibold text-[var(--text-primary)]">
            {faq.q}
          </span>
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          <Plus className="h-5 w-5" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[var(--text-secondary)] sm:px-6 sm:pb-6">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GhlFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{FAQ_BORDER_CSS}</style>
      <div className="space-y-4">
        {GHL_FAQS.map((faq, i) => (
          <FaqItem
            key={faq.q}
            faq={faq}
            number={i + 1}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </>
  );
}
