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
    fairUse: "—",
  },
  pro: {
    monthlyTransfers: "Up to 15,000 images/month",
    maxFileSize: "50 MB per image",
    fairUse: "Fair use applies",
  },
} as const;

/** Public marketing line for Pro plan cards and comparison tables. */
export const PRO_FAIR_USE_PUBLIC = PLAN_LIMITS.pro.fairUse;

/** Support and FAQ copy — no specific GB cap until usage data supports one. */
export const PRO_FAIR_USE_DETAIL =
  "Pro is designed for normal personal and professional workflow use. It is not unlimited storage or bulk file hosting. Fair use applies alongside the published monthly image count and per-image size limits.";

/** Terms of Service — flexible protection without a published transfer cap. */
export const PRO_FAIR_USE_TERMS_PARAGRAPH =
  "Pro plans are intended for normal personal and professional workflow usage. We reserve the right to limit or suspend excessive usage that materially impacts service reliability, infrastructure costs, or other users.";

/** Copy for Terms, Privacy, and other legal pages — keep in sync with marketing limits. */
export const FREE_PLAN_LEGAL_LIMITS = [
  "30 images per month",
  "Up to 5 MB per image",
] as const;

export const PRO_PLAN_LEGAL_LIMITS = [
  "Up to 15,000 images per month",
  "Up to 50 MB per image",
  "Fair use applies",
] as const;

export const FREE_PLAN_SUMMARY =
  "The Free plan is for trying the workflow and occasional use. It includes 30 images per month and images up to 5 MB each.";

export const PRO_PLAN_SUMMARY =
  "Pro is for heavier daily image handoff: up to 15,000 images per month, images up to 50 MB each, with fair use applying to keep the service reliable.";

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
  PRO_FAIR_USE_PUBLIC,
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
  PRO_FAIR_USE_PUBLIC,
  "Better for daily workflows",
];

export const PRICING_FAQ = [
  {
    q: "Is the Free plan really free?",
    a: "Yes. The Free plan costs $0 and does not require a credit card. It is designed so you can try Inlet before upgrading.",
  },
  {
    q: "What is included in the Free plan?",
    a: "Free includes 30 image transfers per month, images up to 5 MB each, browser-based phone upload, and the Windows desktop image inbox.",
  },
  {
    q: "What do I get with Pro?",
    a: "Pro includes up to 15,000 images per month, images up to 50 MB each, and fair use limits for heavier daily image handoff workflows.",
  },
  {
    q: "What is Pro fair use?",
    a: PRO_FAIR_USE_DETAIL,
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
    a: "No. Pro is designed for heavier daily use, but fair use still applies alongside the published monthly image and per-file size limits.",
  },
  {
    q: "What image sizes are supported?",
    a: "Free supports images up to 5 MB each. Pro supports images up to 50 MB each.",
  },
  {
    q: "What file types can I send?",
    a: "Inlet supports image formats only: JPG, JPEG, PNG, WEBP, HEIC, and HEIF. It is not for PDFs, ZIP files, videos, or documents.",
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
