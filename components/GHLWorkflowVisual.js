const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const FLOW = [
  { label: "Lead captured", meta: "Meta Ads", x: 6, y: 10 },
  { label: "Form submitted", meta: "Funnel / Step 2", x: 52, y: 10 },
  { label: "CRM pipeline", meta: "status", x: 52, y: 44, status: true },
  { label: "Follow-up", meta: "SMS + Email · 5m", x: 6, y: 44 },
  { label: "Booked call", meta: "Calendar", x: 29, y: 78, booking: true },
];

export function GHLWorkflowVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg sm:aspect-[5/4]">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <svg
          viewBox="0 0 100 80"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          aria-hidden
        >
          <path
            id="ghl-route"
            d="M27 15 H73 V42 H27 V70 H50"
            fill="none"
            stroke="#6E73BE"
            strokeWidth="0.4"
            strokeDasharray="1.2 1.2"
          />
          <circle r="1.1" fill="var(--primary)" className="flow-signal">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              path="M27 15 H73 V42 H27 V70 H50"
            />
          </circle>
        </svg>
        {FLOW.map((n, i) => (
          <div
            key={n.label}
            className="flow-node absolute w-[42%] rounded-md border border-[var(--primary)] bg-[var(--bg-elevated)] p-2 sm:p-3"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            {n.booking && (
              <span
                className="pulse-ring absolute inset-0 rounded-md border border-[var(--primary)]"
                aria-hidden
              />
            )}
            <div className="flex items-center justify-between font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
              <span>0{i + 1}</span>
              <span
                className={`size-1.5 rounded-full ${n.booking ? "bg-[var(--primary)]" : "bg-[#6E73BE]"}`}
              />
            </div>
            <div className="mt-1 truncate font-display text-[10px] font-bold text-[var(--text-primary)] sm:text-xs">
              {n.label}
            </div>
            {n.status ? (
              <div className="relative mt-1 h-4 font-mono text-[9px]">
                <span className="flow-status-new rounded-sm bg-black/[0.04] px-1.5 py-0.5 text-[var(--text-muted)] dark:bg-white/[0.05]">
                  NEW LEAD
                </span>
                <span className="flow-status-q">
                  <span className="rounded-sm bg-[var(--primary)]/15 px-1.5 py-0.5 text-[var(--primary)]">
                    QUALIFIED
                  </span>
                </span>
              </div>
            ) : (
              <div className="mt-1 truncate font-mono text-[8px] text-[var(--text-muted)] sm:text-[9px]">
                {n.meta}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>GHL / AUTOMATION FLOW</Tag>
      </div>
    </div>
  );
}
