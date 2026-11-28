// --- --- HireReactCostVisual: Guide hero visual --- ---
// Same family as HireExpertVisual / GHLSetupCostVisual / WordPressVisual:
// Tag, dot-grid card, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE. No new CSS classes,
// no photos, no AI images, no em dashes anywhere in this file.
// Destination file: components/HireReactCostVisual.js

import { Clock, FileCheck, Check, X } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const HOURLY_POINTS = [
  "Bill grows with delays",
  "Final price unknown until the end",
];

const FIXED_POINTS = [
  "Price agreed before work starts",
  "Delays are not your problem",
];

export function HireReactCostVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>HOURLY VS FIXED QUOTE</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 shrink-0 text-[var(--text-muted)]" />
                <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                  Hourly
                </span>
              </div>
              <p className="mt-1 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                PAY FOR TIME
              </p>
              <ul className="mt-3 space-y-2">
                {HOURLY_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]"
                  >
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--text-muted)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-[#F97316]/60 bg-[#F97316]/10 p-3">
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 shrink-0 text-[var(--primary)]" />
                <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                  Fixed
                </span>
              </div>
              <p className="mt-1 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                PAY FOR THE RESULT
              </p>
              <ul className="mt-3 space-y-2">
                {FIXED_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--primary)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              FOR A DEFINED PROJECT, FIXED WINS
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>HIRE A REACT DEVELOPER</Tag>
      </div>
    </div>
  );
}
