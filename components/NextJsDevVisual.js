// NextJsDevVisual: guide hero visual, same family as WpSpeedVisual.

import { Zap } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const SCORES = [
  { label: "Speed", value: 96, note: "LOADS FAST" },
  { label: "SEO", value: 100, note: "GOOGLE READS IT" },
  { label: "Mobile", value: 94, note: "WORKS ON PHONES" },
];

export function NextJsDevVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>SITE REPORT</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316]">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-base font-bold text-[var(--text-primary)]">
                Built on the server, fast on the phone
              </p>
              <p className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                WHAT NEXT.JS DOES FOR A BUSINESS SITE
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {SCORES.map((row) => (
              <li key={row.label}>
                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
                  <span>{row.label}</span>
                  <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
                    {row.note}
                  </span>
                  <span className="font-display text-sm font-bold text-[var(--text-primary)]">
                    {row.value}
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[var(--border-subtle)]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#6E73BE]"
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              SPEED IS WHAT GOOGLE AND CUSTOMERS BOTH REWARD
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>NEXT.JS / WEBSITE</Tag>
      </div>
    </div>
  );
}
