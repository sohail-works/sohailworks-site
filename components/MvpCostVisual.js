// MvpCostVisual: guide hero visual, same family as HireExpertVisual.

import { Layers, Palette, CreditCard, Plug } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const FACTORS = [
  {
    icon: Layers,
    label: "Features",
    desc: "More features, higher cost",
  },
  {
    icon: Palette,
    label: "Design and screens",
    desc: "More screens, more cost",
  },
  {
    icon: CreditCard,
    label: "Payments and accounts",
    desc: "Real work, real cost",
  },
  {
    icon: Plug,
    label: "Integrations",
    desc: "Each connection adds cost",
  },
];

export function MvpCostVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>WHAT DECIDES THE PRICE</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 space-y-3">
            {FACTORS.map((factor) => (
              <div
                key={factor.label}
                className="flex items-center gap-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[var(--primary)]/10 text-[var(--primary)]">
                  <factor.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-xs font-bold text-[var(--text-primary)] sm:text-sm">
                  {factor.label}
                </span>
                <span className="ml-auto shrink-0 text-right font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
                  {factor.desc}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              CUT THE LIST TO DAY-ONE NEEDS AND THE PRICE FOLLOWS
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>MVP / COST FACTORS</Tag>
      </div>
    </div>
  );
}
