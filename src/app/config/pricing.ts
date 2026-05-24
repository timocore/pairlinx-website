export type ProBillingInterval = "monthly" | "yearly";

export const PRO_BILLING_DEFAULT: ProBillingInterval = "yearly";

export const PRO_PRICING = {
  monthly: {
    display: "$6.99",
    suffix: "/mo",
    supporting: "Billed monthly.",
    cta: "Upgrade monthly",
  },
  yearly: {
    display: "$59.99",
    suffix: "/year",
    supporting: "About $5/mo billed yearly.",
    cta: "Upgrade yearly",
    saveLabel: "Save 28%",
  },
} as const;

export const PLAN_LIMITS = {
  free: {
    price: "$0",
    monthlyTransfers: "30 images/month",
    maxFileSize: "5 MB per image",
  },
  pro: {
    monthlyTransfers: "Up to 15,000 images/month",
    maxFileSize: "50 MB per image",
  },
} as const;

export const SUPPORTED_IMAGE_FORMATS =
  "JPG, JPEG, PNG, WEBP, HEIC, and HEIF";

export const SUPPORTED_IMAGE_FORMATS_SHORT = "JPG, JPEG, PNG, WEBP, HEIC, HEIF";

/** Full feature lists for the dedicated pricing page */
export const FREE_FEATURES_FULL = [
  "30 images/month",
  "5 MB max per image",
  "Browser-based phone upload via QR + sign-in",
  "Windows desktop inbox",
  "Recent transfers, copy, preview, open folder",
  "No credit card required",
];

export const PRO_FEATURES_FULL = [
  PLAN_LIMITS.pro.monthlyTransfers,
  "Images up to 50 MB each",
  "Recent image inbox on Windows",
  "Copy, preview, and open folder actions",
  "Monthly or yearly billing — cancel anytime",
];

/** Shorter lists for the product page compact pricing section */
export const FREE_FEATURES_COMPACT = [
  "30 images per month",
  "5 MB max per image",
  "Browser-based phone upload",
  "Windows desktop inbox",
  "No credit card required",
];

export const PRO_FEATURES_COMPACT = [
  "Images up to 50 MB each",
  PLAN_LIMITS.pro.monthlyTransfers,
  "Better for daily workflows",
];

export const PRICING_FAQ = [
  {
    q: "Is the Free plan really free?",
    a: "Yes. The Free plan costs $0 and does not require a credit card. It is designed so you can try QuickShotTransfer before upgrading.",
  },
  {
    q: "What is included in the Free plan?",
    a: "Free includes 30 image transfers per month, images up to 5 MB each, browser-based phone upload, and the Windows desktop image inbox.",
  },
  {
    q: "What do I get with Pro?",
    a: "Pro gives you higher monthly usage, images up to 50 MB each, and a better plan for daily image handoff workflows.",
  },
  {
    q: "What is the difference between monthly and yearly Pro?",
    a: "Monthly Pro is billed month to month. Yearly Pro is billed once per year and gives the best effective monthly price.",
  },
  {
    q: "Can I switch between monthly and yearly billing?",
    a: "Yes. You can manage your billing from your account or billing portal when Pro billing is active.",
  },
  {
    q: "What happens if I hit the Free limit?",
    a: "You can wait until your monthly allowance resets or upgrade to Pro for higher usage.",
  },
  {
    q: "Is Pro unlimited?",
    a: "No. Pro is designed for heavier daily use, but it still has fair usage limits to keep the service fast and reliable.",
  },
  {
    q: "What image sizes are supported?",
    a: "Free supports images up to 5 MB each. Pro supports images up to 50 MB each.",
  },
  {
    q: "What file types can I send?",
    a: "QuickShotTransfer supports image formats only: JPG, JPEG, PNG, WEBP, HEIC, and HEIF. It is not for PDFs, ZIP files, videos, or documents.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. You can cancel Pro anytime. Your plan remains active until the end of the current billing period.",
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds are handled case by case according to the refund policy. If you have a billing issue, contact support.",
  },
] as const;

/**
 * Temporary Pro CTA destination until Stripe Checkout is wired on the marketing site.
 *
 * TODO(stripe): Replace with Stripe Checkout Session creation for the selected interval:
 *   - monthly → Stripe price ID for $6.99/mo
 *   - yearly  → Stripe price ID for $59.99/yr
 * Keep `billing` query param (or equivalent) in sync with BillingIntervalToggle state.
 */
export function proUpgradeHref(interval: ProBillingInterval): string {
  const params = new URLSearchParams({ plan: "pro", billing: interval });
  return `/download?${params.toString()}`;
}
