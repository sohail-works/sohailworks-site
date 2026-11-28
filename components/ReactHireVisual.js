// ReactHireVisual: guide hero visual, same family as NextVsReactVisual.

import { Users, Check } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const HIRE_CHECKS = [
  { label: "Live work you can click through", done: true },
  { label: "Clear plan in plain words", done: true },
  { label: "Honest about what they cannot do", done: true },
  { label: "Fixed quote and timeline in writing", done: false },
];

export function ReactHireVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>BEFORE YOU HIRE</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316]">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-base font-bold text-[var(--text-primary)]">
                Four checks, one call
              </p>
              <p className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                RUN THEM BEFORE YOU PAY ANYTHING
              </p>
            </div>
          </div>
          <ul className="mt-5 space-y-2">
            {HIRE_CHECKS.map((check) => (
              <li
                key={check.label}
                className="flex items-center justify-between rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2"
              >
                <span className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Check
                    className={`h-3.5 w-3.5 shrink-0 ${
                      check.done
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  />
                  {check.label}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                  {check.done ? "CHECK" : "ASK"}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              GOOD DEVELOPERS SAY NO TO THE WRONG FIT
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>WEB APPS / HIRING</Tag>
      </div>
    </div>
  );
}
