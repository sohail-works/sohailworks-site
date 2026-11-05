// ─── ─── WordPressVisual — converted from Lovable TS to JS ─── ───
// Tokens mapped to SohailWorks vars:
// border-border → border-[var(--border-subtle)]
// bg-surface → bg-[var(--bg-elevated)]
// bg-surface-2 → bg-black/[0.04] dark:bg-white/[0.05]
// text-muted-foreground → text-[var(--text-muted)]
// bg-track → bg-black/10 dark:bg-white/10
// bg-foreground → bg-[var(--text-primary)]
// bg-primary → bg-[var(--primary)], text-accent → text-[var(--primary)]
// shadow-soft → shadow-lg
// Needs in globals.css: .reveal + @keyframes reveal, .wp-select + @keyframes wp-select

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

export function WordPressVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] pb-10 pr-6 sm:pr-10">
      <div className="overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] px-3 py-2.5">
          <span className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          <span className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          <span className="size-2 rounded-full bg-black/10 dark:bg-white/10" />
          <span className="ml-3 flex-1 truncate rounded-sm bg-black/[0.04] px-2 py-0.5 font-mono text-[10px] text-[var(--text-muted)] dark:bg-white/[0.05]">
            studio-client.com
          </span>
        </div>
        <div className="relative p-4 sm:p-5">
          <div className="reveal space-y-4">
            <div className="flex items-center justify-between">
              <div className="h-2 w-14 rounded-full bg-[var(--text-primary)]/80" />
              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-1.5 w-8 rounded-full bg-black/10 dark:bg-white/10" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 space-y-2 pt-2">
                <div className="h-3 w-full rounded-sm bg-[var(--text-primary)]/85" />
                <div className="h-3 w-3/4 rounded-sm bg-[var(--text-primary)]/85" />
                <div className="h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10" />
                <div className="h-1.5 w-5/6 rounded-full bg-black/10 dark:bg-white/10" />
                <div className="mt-3 inline-block rounded-sm bg-[var(--primary)] px-3 py-1.5 font-mono text-[9px] text-white">
                  GET STARTED
                </div>
              </div>
              <div className="col-span-2 aspect-[4/5] rounded-md bg-[repeating-linear-gradient(135deg,var(--border-subtle)_0_6px,transparent_6px_12px)] ring-1 ring-[var(--border-subtle)]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-1.5 rounded-md border border-[var(--border-subtle)] p-2">
                  <div className="h-8 rounded-sm bg-black/[0.04] dark:bg-white/[0.05]" />
                  <div className="h-1.5 w-3/4 rounded-full bg-black/10 dark:bg-white/10" />
                </div>
              ))}
            </div>
          </div>
          <div
            className="wp-select"
            style={{
              "--sel-a": "62px 42% 98px 16px",
              "--sel-b": "calc(100% - 78px) 16px 14px 16px",
            }}
          />
        </div>
      </div>
      {/* page builder panel */}
      <div className="absolute -bottom-0 right-0 w-40 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-3 shadow-lg sm:w-48">
        <div className="mb-2 flex items-center justify-between font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
          <span>BLOCKS</span>
          <span className="text-[var(--primary)]">+</span>
        </div>
        <div className="reveal space-y-1.5">
          {["Hero", "Columns", "Products", "Form"].map((b, i) => (
            <div
              key={b}
              className={`flex items-center gap-2 rounded-sm border px-2 py-1.5 font-mono text-[10px] ${
                i === 0
                  ? "border-[var(--primary)]/60 text-[var(--text-primary)]"
                  : "border-[var(--border-subtle)] text-[var(--text-muted)]"
              }`}
            >
              <span className={`size-1.5 rounded-[2px] ${i === 0 ? "bg-[var(--primary)]" : "bg-[var(--primary)]/70"}`} />
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -top-3 left-4">
        <Tag>WORDPRESS / CMS</Tag>
      </div>
    </div>
  );
}
