// ─── ─── FrontendCodeVisual — converted from Lovable TS to JS ─── ───
// Tokens mapped to SohailWorks vars:
// border-border → border-[var(--border-subtle)]
// bg-surface → bg-[var(--bg-elevated)]
// text-muted-foreground → text-[var(--text-muted)]
// bg-primary → bg-[var(--primary)], text-primary → text-[var(--primary)]
// text-primary-foreground → text-white
// text-foreground → text-[var(--text-primary)]
// bg-surface-2 → bg-black/[0.04] dark:bg-white/[0.05]
// accent (#6E73BE periwinkle — brand gradient ka 2nd color)
// code-bg / code-fg → fixed dark editor (#0F172A bg, #E2E8F0 text) — code editor dono themes me dark hota hai
// shadow-soft → shadow-lg
// Needs in globals.css (in services-visuals.css):
// .reveal (already), .fe-preview + .fe-target + transitions

const CODE = [
  { t: "export function Hero({ title }) {" },
  { t: "  return (" },
  { t: '    <Section variant="editorial">', hl: true },
  { t: "      <Heading>{title}</Heading>" },
  { t: '      <Button intent="primary">' },
  { t: "        Start a project" },
  { t: "      </Button>" },
  { t: "    </Section>" },
  { t: "  );" },
  { t: "}" },
];

export function FrontendCodeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] pb-8">
      <div className="w-[82%] overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[#0F172A] shadow-lg">
        <div className="flex items-center justify-between border-b border-[#E2E8F0]/10 px-3 py-2 font-mono text-[10px] text-[#E2E8F0]/60">
          <span>app/components/Hero.tsx</span>
          <span className="text-[#6E73BE]">TSX</span>
        </div>
        <pre className="reveal overflow-hidden p-3 font-mono text-[10px] leading-[1.7] text-[#E2E8F0] sm:text-[11px]">
          {CODE.map((l, i) => (
            <div
              key={i}
              className={`flex gap-3 ${l.hl ? "-mx-3 border-l-2 border-[var(--primary)] bg-[var(--primary)]/10 px-3 text-[#E2E8F0]" : ""}`}
            >
              <span className="w-4 select-none text-right text-[#E2E8F0]/30">{i + 1}</span>
              <span className={l.hl ? "" : "text-[#E2E8F0]/75"}>{l.t}</span>
            </div>
          ))}
        </pre>
      </div>
      <div className="absolute bottom-0 right-0 w-[56%]">
        <div className="fe-preview ml-auto overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-2.5 py-1.5 font-mono text-[9px] text-[var(--text-muted)]">
            <span>localhost:3000</span>
            <span className="text-[#6E73BE]">⟷ 1280</span>
          </div>
          <div className="space-y-2 p-3">
            <div className="fe-target space-y-1.5 rounded-sm p-1.5">
              <div className="h-2.5 w-4/5 rounded-sm bg-[var(--text-primary)]/85" />
              <div className="h-2.5 w-1/2 rounded-sm bg-[var(--text-primary)]/85" />
              <div className="mt-2 inline-block rounded-sm bg-[var(--primary)] px-2 py-1 font-mono text-[8px] text-white">START</div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-6 rounded-sm bg-black/[0.04] dark:bg-white/[0.05]" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-[20%] flex gap-2">
        <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
          REACT / NEXT.JS
        </span>
      </div>
      <div className="absolute right-0 top-6 hidden rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-2 font-mono text-[9px] leading-relaxed text-[var(--text-muted)] shadow-lg sm:block">
        <div className="text-[#6E73BE]">&lt;Hero&gt;</div>
        <div className="pl-2">├ Section</div>
        <div className="pl-2">├ Heading</div>
        <div className="pl-2 text-[var(--primary)]">└ Button</div>
      </div>
    </div>
  );
}
