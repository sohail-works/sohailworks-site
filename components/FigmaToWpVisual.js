// FigmaToWpVisual: guide hero visual, same family as NextVsReactVisual.

import { Figma, ArrowRight, Check } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const DESIGN_POINTS = [
  "Desktop and mobile frames",
  "Fonts, colours, spacing set",
  "Every section drawn",
];

const SITE_POINTS = [
  "Same design, built by hand",
  "Editable from the dashboard",
  "Fast on phones, Google ready",
];

export function FigmaToWpVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>FIGMA TO WORDPRESS</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <div className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3">
              <div className="flex items-center gap-2">
                <Figma className="h-5 w-5 shrink-0 text-[var(--primary)]" />
                <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                  Figma
                </span>
              </div>
              <p className="mt-1 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                THE DESIGN
              </p>
              <ul className="mt-3 space-y-2">
                {DESIGN_POINTS.map((point) => (
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
            <ArrowRight className="h-5 w-5 shrink-0 text-[#6E73BE]" />
            <div className="rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6E73BE] font-display text-[10px] font-bold text-white">
                  W
                </span>
                <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                  WordPress
                </span>
              </div>
              <p className="mt-1 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                THE WEBSITE
              </p>
              <ul className="mt-3 space-y-2">
                {SITE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6E73BE]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              BUILT BY HAND, NOT EXPORTED, SO IT STAYS FAST AND EDITABLE
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>WORDPRESS / DESIGN TO SITE</Tag>
      </div>
    </div>
  );
}
