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
    monthlyTransfers: "Higher monthly usage",
    maxFileSize: "50 MB per image",
  },
} as const;

export const SUPPORTED_IMAGE_FORMATS =
  "JPG, JPEG, PNG, WEBP, HEIC, and HEIF";

/** Full feature lists for the dedicated pricing page */
export const FREE_FEATURES_FULL = [
  "30 images per month",
  "5 MB max per image",
  "Browser-based phone upload (QR + sign-in)",
  "Windows desktop inbox",
  "Recent transfers, copy, preview, open folder",
  "No credit card required",
];

export const PRO_FEATURES_FULL = [
  "Higher monthly image allowance",
  "Images up to 50 MB each",
  "Faster uninterrupted daily workflows",
  "Recent image inbox on Windows",
  "Copy, preview, and open folder actions",
  "Billed monthly or yearly — cancel anytime",
];

/** Shorter lists for the product page compact section */
export const FREE_FEATURES_COMPACT = [
  PLAN_LIMITS.free.monthlyTransfers,
  PLAN_LIMITS.free.maxFileSize,
  "Browser upload + Windows inbox",
];

export const PRO_FEATURES_COMPACT = [
  PLAN_LIMITS.pro.monthlyTransfers,
  PLAN_LIMITS.pro.maxFileSize,
  "Built for daily image handoff",
];

export const PRICING_FAQ = [
  {
    q: "Is Free really free?",
    a: "Yes. The Free plan costs $0 and does not require a credit card to get started.",
  },
  {
    q: "What are the monthly transfer limits?",
    a: "Free includes 30 images per month. Pro includes higher monthly usage for people who send images to their PC every day.",
  },
  {
    q: "What file sizes and formats are supported?",
    a: `QuickShotTransfer supports images only: ${SUPPORTED_IMAGE_FORMATS}. Free allows up to 5 MB per image. Pro allows up to 50 MB per image.`,
  },
  {
    q: "What happens if I hit the Free limit?",
    a: "You can wait until your allowance resets next month or upgrade to Pro for higher limits.",
  },
  {
    q: "Can I cancel or change my plan?",
    a: "Yes. You can upgrade, manage, or cancel from the desktop app or this website. Subscriptions renew automatically until you cancel.",
  },
  {
    q: "Do you offer refunds?",
    a: "Billing is handled through our payment provider. If you have a billing issue, contact support and we will help according to our terms of service.",
  },
  {
    q: "Are my images private?",
    a: "Images are temporarily processed through QuickShot Cloud to deliver them to your paired PC, then saved locally on your desktop.",
  },
  {
    q: "Is this permanent cloud storage?",
    a: "No. QuickShotTransfer is designed for fast image handoff, not long-term cloud storage.",
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
