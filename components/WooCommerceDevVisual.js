// WooCommerceDevVisual: guide hero visual, same family as WpSpeedVisual.

import { ShoppingCart, Check } from "lucide-react";

const Tag = ({ children }) => (
  <span className="rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-[var(--text-muted)]">
    {children}
  </span>
);

const PRODUCTS = [
  { name: "Signature sauce", price: "In stock", tag: "BEST SELLER" },
  { name: "Family meal deal", price: "In stock", tag: "NEW" },
  { name: "Side dishes", price: "Low stock", tag: "POPULAR" },
];

const STEPS = ["Cart", "Checkout", "Payment", "Order in"];

export function WooCommerceDevVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-subtle)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[var(--text-muted)]">
            <span>YOUR STORE</span>
            <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
              <ShoppingCart className="h-3.5 w-3.5 text-[var(--primary)]" />
              3 ITEMS
            </span>
          </div>
          <ul className="mt-5 space-y-2">
            {PRODUCTS.map((row) => (
              <li
                key={row.name}
                className="flex items-center justify-between rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-3 py-2"
              >
                <span className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[var(--primary)]" />
                  {row.name}
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                    {row.tag}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-[var(--text-primary)]">
                    {row.price}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between gap-1">
            {STEPS.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-1">
                <div className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)] font-mono text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-[var(--text-muted)]">
                    {step.toUpperCase()}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mb-5 h-px flex-1 bg-[var(--border-subtle)]" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-[#6E73BE]/60 bg-[#6E73BE]/10 px-3 py-2">
            <span className="size-1.5 shrink-0 rounded-full bg-[#6E73BE]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-primary)]">
              FOUR STEPS FROM BASKET TO PAID ORDER
            </span>
          </div>
        </div>
      </div>
      <div className="absolute -top-3 right-4">
        <Tag>WOOCOMMERCE / STORE</Tag>
      </div>
    </div>
  );
}
