import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../Button";
import { BillingIntervalToggle } from "./BillingIntervalToggle";
import {
  FREE_FEATURES_COMPACT,
  FREE_FEATURES_FULL,
  PRO_BILLING_DEFAULT,
  PRO_FEATURES_COMPACT,
  PRO_FEATURES_FULL,
  PRO_PRICING,
  type ProBillingInterval,
  proUpgradeHref,
} from "../../config/pricing";

type PricingPlansProps = {
  variant?: "compact" | "full";
};

function FeatureList({
  items,
  emphasized = false,
  compact = false,
}: {
  items: readonly string[];
  emphasized?: boolean;
  compact?: boolean;
}) {
  return (
    <ul className={`flex-1 ${compact ? "space-y-2.5" : "space-y-4"}`}>
      {items.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5">
          <span
            className={`mt-0.5 flex shrink-0 items-center justify-center rounded-lg ${
              compact ? "h-5 w-5" : "h-6 w-6"
            } ${
              emphasized
                ? "bg-blue-600/50 border border-blue-400/40"
                : "bg-blue-500/15 border border-blue-500/25"
            }`}
          >
            <Check
              className={`${compact ? "h-3 w-3" : "h-4 w-4"} ${emphasized ? "text-white" : "text-blue-400"}`}
            />
          </span>
          <span
            className={`leading-snug ${compact ? "text-xs sm:text-sm" : "text-sm"} ${
              emphasized ? "font-medium text-gray-100" : "text-gray-300"
            }`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PricingPlans({ variant = "full" }: PricingPlansProps) {
  const compact = variant === "compact";
  const [billing, setBilling] = useState<ProBillingInterval>(PRO_BILLING_DEFAULT);
  const proPlan = PRO_PRICING[billing];
  const isYearly = billing === "yearly";

  const freeFeatures = compact ? FREE_FEATURES_COMPACT : FREE_FEATURES_FULL;
  const proFeatures = compact ? PRO_FEATURES_COMPACT : PRO_FEATURES_FULL;

  const cardShell = compact
    ? "relative flex h-full flex-col rounded-2xl border px-6 pb-5 pt-10 shadow-lg ring-1 sm:px-7 sm:pb-5"
    : "relative flex h-full flex-col rounded-2xl border px-8 pb-6 pt-12 shadow-xl ring-1 sm:px-10 sm:pb-6";

  const headerRowClass = compact
    ? "mb-4 flex min-h-[2.25rem] items-start justify-between gap-3"
    : "mb-6 flex min-h-[2.25rem] items-start justify-between gap-3";

  const taglineClass = compact
    ? "mb-0 hidden"
    : "mb-6 min-h-[1.625rem] text-base leading-snug";

  const priceMinH = compact ? "min-h-[5.5rem]" : "min-h-[6.5rem]";
  const priceSize = compact ? "text-4xl sm:text-5xl" : "text-6xl";
  const suffixSize = compact ? "text-xl" : "text-2xl";
  const ctaSize = compact ? "md" : "lg";
  const ctaSectionClass = compact ? "mt-auto pt-6" : "mt-auto pt-10";

  const proBadgeLabel = compact ? "Recommended" : "Best for daily use";

  return (
    <div>
      <div
        className={`mx-auto flex flex-col items-center gap-3 ${compact ? "mb-8" : "mb-8 max-w-5xl"}`}
      >
        {!compact && (
          <p className="text-sm font-medium text-gray-400">Choose Pro billing</p>
        )}
        <BillingIntervalToggle value={billing} onChange={setBilling} />
      </div>

      <div
        className={`mx-auto grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2 ${
          compact ? "max-w-4xl gap-5" : "max-w-5xl gap-6 lg:gap-8"
        }`}
      >
        {/* Free */}
        <article
          className={`${cardShell} border-gray-600/55 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-slate-950 shadow-black/30 ring-white/5`}
        >
          <div className={headerRowClass}>
            <h3 className={`font-bold tracking-tight text-white ${compact ? "text-xl" : "text-2xl"}`}>
              Free
            </h3>
            <span className="inline-flex shrink-0 items-center rounded-full border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300 sm:px-3 sm:py-1 sm:text-[11px]">
              No credit card
            </span>
          </div>

          <p className={`${taglineClass} text-gray-400`}>For occasional image transfers.</p>

          <div className={`${priceMinH} ${compact ? "mb-5" : "mb-8"}`}>
            <div className={`flex flex-wrap items-center gap-2 ${compact ? "min-h-[2.75rem]" : "min-h-[4rem]"}`}>
              <div className={`${priceSize} font-bold tracking-tight text-white`}>$0</div>
            </div>
            <p className={`text-gray-500 ${compact ? "mt-1 text-xs" : "mt-2 text-sm"}`}>
              Forever free
            </p>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <FeatureList items={freeFeatures} compact={compact} />
          </div>

          <div className={ctaSectionClass}>
            <Button to="/download" variant="outline" size={ctaSize} className="w-full">
              Start Free
            </Button>
          </div>
        </article>

        {/* Pro */}
        <article
          className={`${cardShell} border-blue-500/55 bg-gradient-to-br from-blue-950/70 via-purple-950/45 to-slate-950 shadow-blue-950/50 ring-blue-400/25`}
        >
          <div className={`absolute left-1/2 z-10 -translate-x-1/2 ${compact ? "-top-3.5" : "-top-4"}`}>
            <span
              className={`inline-flex max-w-[calc(100vw-3rem)] items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-white shadow-lg shadow-blue-600/40 ring-1 ring-white/20 ${
                compact ? "px-3.5 py-1.5 text-xs" : "gap-2 px-4 py-2 text-sm"
              }`}
            >
              <Zap className={`${compact ? "h-3 w-3" : "h-4 w-4"} shrink-0`} aria-hidden />
              {proBadgeLabel}
            </span>
          </div>

          <div className={headerRowClass}>
            <h3 className={`font-bold tracking-tight text-white ${compact ? "text-xl" : "text-2xl"}`}>
              Pro
            </h3>
            <span
              className="invisible inline-flex shrink-0 items-center rounded-full border border-transparent px-2.5 py-0.5 text-[10px] font-semibold sm:px-3 sm:py-1 sm:text-[11px]"
              aria-hidden
            >
              No credit card
            </span>
          </div>

          <p className={`${taglineClass} text-gray-300`}>Better for daily image handoff.</p>

          <div className={`${priceMinH} ${compact ? "mb-5" : "mb-8"}`}>
            <div className={`flex flex-wrap items-center gap-2 ${compact ? "min-h-[2.75rem]" : "min-h-[4rem]"}`}>
              <div className={`${priceSize} font-bold tracking-tight text-white`}>
                {proPlan.display}
                <span className={`${suffixSize} font-semibold text-gray-400`}>{proPlan.suffix}</span>
              </div>
              {isYearly ? (
                <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                  {PRO_PRICING.yearly.saveLabel}
                </span>
              ) : (
                <span
                  className="invisible rounded-full px-2 py-0.5 text-[10px] font-bold"
                  aria-hidden
                >
                  {PRO_PRICING.yearly.saveLabel}
                </span>
              )}
            </div>
            <p className={`font-medium text-gray-400 ${compact ? "mt-2 text-xs" : "mt-3 text-sm"}`}>
              {proPlan.supporting}
            </p>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <FeatureList items={proFeatures} emphasized compact={compact} />
          </div>

          <div className={ctaSectionClass}>
            {/* TODO(stripe): Wire this button to Stripe Checkout for `billing` (monthly/yearly). */}
            <Button to={proUpgradeHref(billing)} variant="primary" size={ctaSize} className="w-full">
              {proPlan.cta}
            </Button>
          </div>
        </article>
      </div>

      {compact && (
        <p className="mt-8 text-center">
          <Link
            to="/pricing#faq"
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View full pricing, limits &amp; FAQ →
          </Link>
        </p>
      )}
    </div>
  );
}
