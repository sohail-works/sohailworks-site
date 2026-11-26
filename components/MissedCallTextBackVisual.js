// --- --- MissedCallTextBackVisual - Guide 3 hero visual --- ---
// Same family as the other guide and service page visuals:
// Tag, dot-grid card, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE. No new CSS classes,
// no prices, no numbers as prices. Step numbers are flow order only.
// Destination file: components/MissedCallTextBackVisual.js

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const STEPS = [
  { label: "Missed call", meta: "7pm, no answer", hot: false },
  { label: "Text back in under a minute", meta: "Automatic SMS", hot: false },
  { label: "Lead in pipeline", meta: "Logged, no manual entry", hot: false },
  { label: "Follow-up next day", meta: "Polite, automatic", hot: false },
  { label: "Booked call", meta: "Calendar", hot: true },
];

export function MissedCallTextBackVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>FROM MISSED CALL TO BOOKED CALL</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="relative mt-5 space-y-3">
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-[15px] top-4 w-px bg-[#6E73BE]/50"
            />
            {STEPS.map((s, i) => (
              <div key={s.label} className="relative flex items-center gap-3">
                <span
                  className={`relative flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                    s.hot
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[#6E73BE] bg-[var(--bg-elevated)] text-[var(--text-primary)]"
                  }`}
                >
                  {i + 1}
                </span>
                <div
                  className={`flex-1 rounded-md border p-2.5 ${
                    s.hot
                      ? "border-[var(--primary)]/60 bg-[var(--primary)]/10"
                      : "border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
                  }`}
                >
                  <div className="font-display text-xs font-bold text-[var(--text-primary)]">
                    {s.label}
                  </div>
                  <div className="mt-0.5 truncate font-mono text-[9px] text-[var(--text-muted)]">
                    {s.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[var(--primary)]/60 bg-[var(--primary)]/10 px-3 py-2">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[10px] text-white">
              ✓
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              NO LEAD LEFT WAITING
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>GHL / MISSED-CALL TEXT-BACK</Tag>
      </div>
    </div>
  );
}
