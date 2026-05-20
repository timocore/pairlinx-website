import type { ProBillingInterval } from "../../config/pricing";

type BillingIntervalToggleProps = {
  value: ProBillingInterval;
  onChange: (interval: ProBillingInterval) => void;
};

/** UI-only billing period selector — not connected to Stripe yet. */
export function BillingIntervalToggle({ value, onChange }: BillingIntervalToggleProps) {
  const tabClass = (active: boolean) =>
    `rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
      active
        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-600/30"
        : "text-gray-400 hover:text-gray-200"
    }`;

  return (
    <div
      role="tablist"
      aria-label="Pro billing period"
      className="inline-flex items-center gap-1 rounded-xl border border-gray-600/60 bg-gray-900/90 p-1 shadow-lg shadow-black/25 ring-1 ring-white/5"
    >
      <button
        type="button"
        role="tab"
        aria-selected={value === "monthly"}
        className={tabClass(value === "monthly")}
        onClick={() => onChange("monthly")}
      >
        Monthly
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={value === "yearly"}
        className={`${tabClass(value === "yearly")} inline-flex items-center gap-2`}
        onClick={() => onChange("yearly")}
      >
        Yearly
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
            value === "yearly"
              ? "bg-white/20 text-white"
              : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
          }`}
        >
          Save 28%
        </span>
      </button>
    </div>
  );
}
