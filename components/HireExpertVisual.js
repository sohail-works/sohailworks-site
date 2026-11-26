// --- --- HireExpertVisual: Guide 1 hero visual --- ---
// Same family as GHLWorkflowVisual / GHLSetupCostVisual / WordPressVisual:
// Tag, dot-grid card, --border-subtle / --bg-elevated / --text-muted tokens,
// brand orange var(--primary) + periwinkle #6E73BE. No new CSS classes,
// no photos, no AI images, no em dashes anywhere in this file.
// Destination file: components/HireExpertVisual.js

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const QUESTIONS = [
  { num: "01", label: "One real system for a business like mine" },
  { num: "02", label: "What happens when a call is missed at 7pm?" },
  { num: "03", label: "Who owns the account and the data?" },
  { num: "04", label: "What do I get in week one?" },
  { num: "05", label: "Who fixes it when something breaks?" },
];

export function HireExpertVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>FIVE QUESTIONS TO ASK FIRST</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 space-y-3">
            {QUESTIONS.map((q) => (
              <div
                key={q.num}
                className="flex items-center gap-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[11px] text-white">
                  ✓
                </span>
                <span className="font-display text-xs font-bold text-[var(--text-primary)] sm:text-sm">
                  {q.label}
                </span>
                <span className="ml-auto shrink-0 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                  {q.num}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              CLEAR ANSWERS ON ALL FIVE MEANS THE RIGHT PERSON
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>GHL / HIRING CHECKLIST</Tag>
      </div>
    </div>
  );
}
