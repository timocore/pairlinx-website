import {
  PLAN_LIMITS,
  SUPPORTED_IMAGE_FORMATS_SHORT,
} from "../../config/pricing";

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
    label: "Supported formats",
    free: SUPPORTED_IMAGE_FORMATS_SHORT,
    pro: SUPPORTED_IMAGE_FORMATS_SHORT,
  },
  {
    label: "Phone upload",
    free: "Browser upload via QR + sign-in",
    pro: "Browser upload via QR + sign-in",
  },
  {
    label: "Desktop inbox",
    free: "Included",
    pro: "Included",
  },
  {
    label: "Billing",
    free: "Free forever",
    pro: "Monthly or yearly",
  },
  {
    label: "Credit card to start",
    free: "Not required",
    pro: "Required for Pro",
  },
] as const;

export function PricingLimitsTable() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-3">
          Plan limits at a glance
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto sm:text-base">
          Inlet is image-only by design — built for screenshots, photos, and visual
          references, not general file storage.
        </p>
      </div>

      {/* Mobile: stacked plan cards per row */}
      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <article
            key={row.label}
            className="rounded-xl border border-gray-700/80 bg-gray-800/50 p-4 backdrop-blur-sm"
          >
            <h3 className="mb-3 text-sm font-semibold text-white">{row.label}</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="min-w-0 rounded-lg border border-gray-700/60 bg-gray-900/40 p-3">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                  Free
                </p>
                <p className="break-words text-sm leading-snug text-gray-300">{row.free}</p>
              </div>
              <div className="min-w-0 rounded-lg border border-blue-500/25 bg-blue-950/20 p-3">
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-blue-300">
                  Pro
                </p>
                <p className="break-words text-sm leading-snug text-gray-100">{row.pro}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: comparison table */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-800/50 shadow-lg ring-1 ring-white/5 backdrop-blur-sm md:block">
        <div className="grid grid-cols-[1.15fr_1fr_1fr] border-b border-gray-700/80 bg-gray-900/60 text-xs font-semibold uppercase tracking-wide text-gray-400 sm:text-sm">
          <div className="px-5 py-3.5 sm:px-6" />
          <div className="px-5 py-3.5 text-center sm:px-6">Free</div>
          <div className="px-5 py-3.5 text-center text-blue-300 sm:px-6">Pro</div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[1.15fr_1fr_1fr] text-sm ${
              i < rows.length - 1 ? "border-b border-gray-700/50" : ""
            }`}
          >
            <div className="px-5 py-4 font-semibold text-gray-100 sm:px-6">{row.label}</div>
            <div className="px-5 py-4 text-center leading-snug text-gray-300 sm:px-6">{row.free}</div>
            <div className="px-5 py-4 text-center leading-snug text-gray-50 sm:px-6">{row.pro}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
