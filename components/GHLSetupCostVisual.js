// --- --- GHLSetupCostVisual - Guide 2 hero visual --- ---
// Same family as GHLWorkflowVisual / WordPressVisual / FrontendCodeVisual:
// Tag, dot-grid card, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE. No new CSS classes,
// no prices, no numbers: bars show relative scope only.
// Destination file: components/GHLSetupCostVisual.js

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const FACTORS = [
  { label: "Funnels and pages", width: "45%", main: false },
  { label: "Automation", width: "70%", main: false },
  { label: "Calendars and pipelines", width: "40%", main: false },
  { label: "AI agents", width: "85%", main: true },
  { label: "Migration", width: "60%", main: false },
  { label: "Support after launch", width: "35%", main: false },
];

export function GHLSetupCostVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>WHAT MOVES THE PRICE</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 space-y-4">
            {FACTORS.map((f) => (
              <div key={f.label}>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold text-[var(--text-primary)]">
                    {f.label}
                  </span>
                  <span
                    className={`font-mono text-[9px] tracking-widest ${
                      f.main
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {f.main ? "BIGGEST" : "SCOPE"}
                  </span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
                  <div
                    className={`h-full rounded-full ${
                      f.main ? "bg-[var(--primary)]" : "bg-[#6E73BE]"
                    }`}
                    style={{ width: f.width }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[var(--primary)]/60 bg-[var(--primary)]/10 px-3 py-2">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[10px] text-white">
              ✓
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              FIXED QUOTE BEFORE WE START
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>GHL / SETUP COST</Tag>
      </div>
    </div>
  );
}
