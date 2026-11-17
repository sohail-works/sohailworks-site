import { Check, X } from "lucide-react";

const ROWS = ["CRM", "Funnels", "Calendars", "Automation"];

export function VsHubSpotVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Panel */}
      <div
        className="rounded-2xl border border-white/10 bg-[#12161f] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.30)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        {/* Header row */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <p className="font-display text-base font-bold text-[var(--primary)]">
            GoHighLevel
          </p>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 font-mono text-[11px] font-bold text-[var(--primary)]">
            VS
          </span>
          <p className="text-right font-display text-base font-bold text-[var(--text-muted)]">
            HubSpot
          </p>
        </div>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-white/10" />

        {/* Comparison rows */}
        {ROWS.map((label) => (
          <div
            key={label}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-white/5 py-3 last:border-b-0"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
              <Check className="h-4 w-4 shrink-0 text-green-400" />
              Included
            </span>
            <span className="text-center font-mono text-[11px] tracking-[0.15em] text-[var(--text-secondary)]">
              {label.toUpperCase()}
            </span>
            <span className="flex items-center justify-end gap-2 text-right text-sm text-[var(--text-muted)]">
              <span className="text-xs">Extra</span>
              <X className="h-4 w-4 shrink-0 text-rose-400" />
            </span>
          </div>
        ))}

        {/* Price row */}
        <div className="mt-2 grid grid-cols-2 gap-2">
          <p className="rounded-xl bg-[var(--primary)]/10 px-3 py-2.5 text-center text-sm font-bold text-[var(--primary)]">
            One price
          </p>
          <p className="rounded-xl bg-white/5 px-3 py-2.5 text-center text-sm font-bold text-[var(--text-muted)]">
            Bill grows
          </p>
        </div>
      </div>
    </div>
  );
}
