// --- --- CustomAppVsWordPressVisual - Guide 6 hero visual --- ---
// Same family as the other guide and service page visuals:
// Tag, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE, rounded-lg cards,
// shadow-lg. Dark code editor (#0F172A bg, #E2E8F0 text) like
// Next to a simple WordPress blocks card.
// No new CSS classes, no prices, no numbers as prices.
// Destination file: components/CustomAppVsWordPressVisual.js

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const CODE = [
  { t: "export function Portal({ user }) {" },
  { t: "  return (" },
  { t: '    <Dashboard data={user.jobs}>', hl: true },
  { t: "      <JobsList />" },
  { t: "      <Invoices />" },
  { t: "    </Dashboard>" },
  { t: "  );" },
  { t: "}" },
];

const BLOCKS = ["Hero", "Services", "Blog", "Contact"];

export function CustomAppVsWordPressVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="w-[86%] overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[#0F172A] shadow-lg">
        <div className="flex items-center justify-between border-b border-[#E2E8F0]/10 px-3 py-2 font-mono text-[10px] text-[#E2E8F0]/60">
          <span>app/portal/page.tsx</span>
          <span className="text-[#6E73BE]">TSX</span>
        </div>
        <pre className="overflow-hidden p-3 font-mono text-[10px] leading-[1.7] text-[#E2E8F0] sm:text-[11px]">
          {CODE.map((l, i) => (
            <div
              key={i}
              className={`flex gap-3 ${l.hl ? "-mx-3 border-l-2 border-[var(--primary)] bg-[var(--primary)]/10 px-3 text-[#E2E8F0]" : ""}`}
            >
              <span className="w-4 select-none text-right text-[#E2E8F0]/30">
                {i + 1}
              </span>
              <span className={l.hl ? "" : "text-[#E2E8F0]/75"}>{l.t}</span>
            </div>
          ))}
        </pre>
      </div>
      <div className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-2.5 py-1.5 font-mono text-[9px] text-[var(--text-muted)]">
          <span>WORDPRESS</span>
          <span className="text-[var(--primary)]">BLOCKS</span>
        </div>
        <div className="space-y-1.5 p-3">
          {BLOCKS.map((b, i) => (
            <div
              key={b}
              className={`flex items-center gap-2 rounded-sm border px-2 py-1.5 font-mono text-[10px] ${
                i === 0
                  ? "border-[var(--primary)]/60 text-[var(--text-primary)]"
                  : "border-[var(--border-subtle)] text-[var(--text-muted)]"
              }`}
            >
              <span
                className={`size-1.5 rounded-[2px] ${i === 0 ? "bg-[var(--primary)]" : "bg-[var(--primary)]/70"}`}
              />
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>CUSTOM APP VS WORDPRESS</Tag>
      </div>
    </div>
  );
}
