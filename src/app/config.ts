export const BRAND_NAME = "Pairlinx";
export const PRODUCT_NAME = "Inlet";

/** Canonical product page path (legacy /products/inlet redirects here). */
export const PRODUCT_PATH = "/products/inlet";

/** Primary support contact — update this one address for the whole site. */
export const SUPPORT_EMAIL = "support@pairlinx.com";

export const SITE_URL = "https://pairlinx.com";

/** Placeholder Open Graph image path until final social card is exported. */
export const DEFAULT_OG_IMAGE = "/og/pairlinx-og.png";

export type SocialLabel = "X" | "LinkedIn" | "YouTube" | "GitHub";

export type SocialLink = {
  label: SocialLabel;
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X", href: "" },
  { label: "LinkedIn", href: "" },
  { label: "YouTube", href: "" },
  { label: "GitHub", href: "" },
];

/** Aliases for legal and privacy inquiries (same inbox for launch). */
export const PRIVACY_EMAIL = SUPPORT_EMAIL;
export const LEGAL_EMAIL = SUPPORT_EMAIL;
export const CONTACT_EMAIL = SUPPORT_EMAIL;
