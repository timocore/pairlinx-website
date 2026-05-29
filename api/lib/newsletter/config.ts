export const NEWSLETTER_CONSENT_TEXT =
  "I agree to receive product updates and announcements from Pairlinx. I can unsubscribe at any time.";

export const NEWSLETTER_CONSENT_VERSION = "2026-05-29";

export const CONFIRM_TOKEN_TTL_SECONDS = 60 * 60 * 48; // 48 hours
export const UNSUBSCRIBE_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 365; // 1 year

export function getNewsletterConfig() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.NEWSLETTER_AUDIENCE_ID;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL || "news@pairlinx.com";
  const siteUrl = (process.env.SITE_URL || "https://pairlinx.com").replace(/\/$/, "");
  const tokenSecret = process.env.NEWSLETTER_TOKEN_SECRET || process.env.RESEND_API_KEY;

  return {
    resendApiKey,
    audienceId,
    fromEmail,
    siteUrl,
    tokenSecret,
    isConfigured: Boolean(resendApiKey && audienceId && tokenSecret),
  };
}
