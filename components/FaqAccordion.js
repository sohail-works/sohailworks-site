"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

// ─── ─── Gradient border (same as homepage Faqs.js) ─── ───
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

// ─── ─── Single FAQ item (same as homepage Faqs.js) ─── ───
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
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-[var(--text-secondary)]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── ─── Shared accordion: pass any page's questions as props ─── ───
export default function FaqAccordion({ faqs }) {
  // First question open by default; one open at a time.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{FAQ_BORDER_CSS}</style>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
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
