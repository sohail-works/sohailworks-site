// WpLocalSeoVisual: guide hero visual, same family as WpSpeedVisual.

import { MapPin, Star } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const RESULTS = [
  { name: "Your business", rating: "4.9", reviews: "126 reviews", rank: 1 },
  { name: "Competitor A", rating: "4.2", reviews: "58 reviews", rank: 2 },
  { name: "Competitor B", rating: "3.8", reviews: "41 reviews", rank: 3 },
];

export function WpLocalSeoVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>LOCAL SEARCH</span>
            <span className="size-1.5 rounded-full bg-[var(--primary)]" />
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2">
            <MapPin className="h-4 w-4 shrink-0 text-[var(--primary)]" />
            <span className="text-xs text-[var(--text-secondary)]">
              plumber near me
            </span>
            <span className="ml-auto font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
              GOOGLE
            </span>
          </div>
          <ul className="mt-4 space-y-2">
            {RESULTS.map((row) => (
              <li
                key={row.name}
                className={`flex items-center justify-between rounded-md border px-3 py-2 ${
                  row.rank === 1
                    ? "border-[#F97316]/60 bg-[#F97316]/10"
                    : "border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
                }`}
              >
                <span className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[10px] font-bold text-white">
                    {row.rank}
                  </span>
                  {row.name}
                </span>
                <span className="flex items-center gap-1 font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                  <Star className="h-3 w-3 fill-[#F97316] text-[#F97316]" />
                  {row.rating} ({row.reviews})
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              FIRST ON THE MAP MEANS FIRST CALL
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>WORDPRESS / LOCAL SEO</Tag>
      </div>
    </div>
  );
}
