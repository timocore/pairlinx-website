import { PLAN_LIMITS, SUPPORTED_IMAGE_FORMATS } from "../../config/pricing";

const rows = [
  {
    label: "Monthly transfers",
    free: PLAN_LIMITS.free.monthlyTransfers,
    pro: PLAN_LIMITS.pro.monthlyTransfers,
  },
  {
    label: "Max file size",
    free: PLAN_LIMITS.free.maxFileSize,
    pro: PLAN_LIMITS.pro.maxFileSize,
  },
  {
    label: "Formats",
    free: SUPPORTED_IMAGE_FORMATS,
    pro: SUPPORTED_IMAGE_FORMATS,
  },
  {
    label: "Credit card to start",
    free: "Not required",
    pro: "Required for Pro",
  },
  {
    label: "Billing",
    free: "Free forever",
    pro: "Monthly or yearly (cancel anytime)",
  },
] as const;

export function PricingLimitsTable() {
  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-center text-2xl font-bold text-white mb-2">Plan limits at a glance</h2>
      <p className="text-center text-sm text-gray-400 mb-8">
        Image-only transfers — not documents, video, or permanent cloud storage.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/50 ring-1 ring-white/5">
        <div className="grid grid-cols-3 border-b border-gray-700/80 bg-gray-800/60 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
          <div className="px-4 py-3 sm:px-6"> </div>
          <div className="px-4 py-3 text-center sm:px-6">Free</div>
          <div className="px-4 py-3 text-center text-blue-300 sm:px-6">Pro</div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-3 text-sm ${
              i < rows.length - 1 ? "border-b border-gray-700/50" : ""
            }`}
          >
            <div className="px-4 py-3.5 font-medium text-gray-300 sm:px-6">{row.label}</div>
            <div className="px-4 py-3.5 text-center text-gray-400 sm:px-6">{row.free}</div>
            <div className="px-4 py-3.5 text-center text-gray-200 sm:px-6">{row.pro}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
