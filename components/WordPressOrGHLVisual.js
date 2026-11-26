// --- --- WordPressOrGHLVisual - Guide 5 hero visual --- ---
// Same family as the other guide and service page visuals:
// Tag, dot-grid card, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE. No new CSS classes,
// no prices, no feature claims beyond the positioning in the guide:
// WordPress for the website itself, GoHighLevel for funnels and follow-up.
// Destination file: components/WordPressOrGHLVisual.js

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const WP_ITEMS = ["Website", "Blog", "SEO"];

const GHL_ITEMS = ["Funnels", "CRM", "Automation"];

export function WordPressOrGHLVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative grid grid-cols-2 gap-3 p-4 sm:p-5">
          <div className="rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 p-3">
            <div className="font-mono text-[10px] tracking-widest text-[#6E73BE]">
              WORDPRESS
            </div>
            <div className="mt-1 font-display text-xs font-bold text-[var(--text-primary)]">
              The website itself
            </div>
            <div className="mt-3 space-y-2">
              {WP_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#6E73BE] font-mono text-[9px] text-white">
                    ✓
                  </span>
                  <span className="text-xs text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-[var(--primary)]/60 bg-[var(--primary)]/10 p-3">
            <div className="font-mono text-[10px] tracking-widest text-[var(--primary)]">
              GOHIGHLEVEL
            </div>
            <div className="mt-1 font-display text-xs font-bold text-[var(--text-primary)]">
              Funnels and follow-up
            </div>
            <div className="mt-3 space-y-2">
              {GHL_ITEMS.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[9px] text-white">
                    ✓
                  </span>
                  <span className="text-xs text-[var(--text-primary)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 flex items-center gap-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2">
            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[10px] text-white">
              ✓
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              PICK BY THE JOB, NOT BY THE TOOL
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>WORDPRESS OR GHL</Tag>
      </div>
    </div>
  );
}
