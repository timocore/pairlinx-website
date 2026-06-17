import type { ApiRequest, ApiResponse, SubscribeResponse } from "../lib/newsletter/types.js";
import {
  NEWSLETTER_CONSENT_VERSION,
  getNewsletterConfig,
} from "../lib/newsletter/config.js";
import { isRateLimited } from "../lib/newsletter/rateLimit.js";
import {
  getNewsletterContact,
  sendConfirmationEmail,
  upsertPendingContact,
} from "../lib/newsletter/resend.js";
import { createNewsletterToken } from "../lib/newsletter/tokens.js";
import {
  getClientIp,
  getContentLength,
  isValidEmail,
  parseJsonBody,
  sanitizeEmail,
} from "../lib/newsletter/validate.js";

const MAX_CONTENT_LENGTH_BYTES = 4_000;

function sanitizeHoneypot(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, 200);
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method Not Allowed" });
    return;
  }

  const contentLength = getContentLength(req.headers);
  if (contentLength > MAX_CONTENT_LENGTH_BYTES) {
    res.status(413).json({ ok: false, error: "Payload too large." });
    return;
  }

  const body = parseJsonBody(req.body);
  const email = sanitizeEmail(body.email);
  const consent = body.consent === true;
  const honeypot = sanitizeHoneypot(body.website);

  if (honeypot) {
    const botResponse: SubscribeResponse = { ok: true, status: "confirmation_sent" };
    res.status(200).json(botResponse);
    return;
  }

  if (!email || !isValidEmail(email)) {
    res.status(400).json({ ok: false, error: "A valid email address is required." });
    return;
  }

  if (!consent) {
    res.status(400).json({ ok: false, error: "Consent is required to subscribe." });
    return;
  }

  const config = getNewsletterConfig();
  if (!config.isConfigured) {
    res.status(500).json({ ok: false, error: "Newsletter service is not configured." });
    return;
  }

  const ip = getClientIp(req.headers);
  if (isRateLimited(`newsletter:${ip}`) || isRateLimited(`newsletter:${email}`)) {
    res.status(429).json({ ok: false, error: "Too many requests. Please try again later." });
    return;
  }

  const { resendApiKey, audienceId, fromEmail, siteUrl, tokenSecret } = config;

  try {
    const existing = await getNewsletterContact(resendApiKey!, email);
    if (existing && !existing.unsubscribed) {
      const response: SubscribeResponse = { ok: true, status: "already_subscribed" };
      res.status(200).json(response);
      return;
    }

    await upsertPendingContact(resendApiKey!, email, audienceId!);

    const confirmToken = createNewsletterToken(
      email,
      "confirm",
      tokenSecret!,
      NEWSLETTER_CONSENT_VERSION,
    );
    const unsubscribeToken = createNewsletterToken(
      email,
      "unsubscribe",
      tokenSecret!,
      NEWSLETTER_CONSENT_VERSION,
    );

    const confirmUrl = `${siteUrl}/api/newsletter/confirm?token=${encodeURIComponent(confirmToken)}`;
    const unsubscribeUrl = `${siteUrl}/api/newsletter/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`;

    await sendConfirmationEmail({
      apiKey: resendApiKey!,
      fromEmail,
      toEmail: email,
      confirmUrl,
      unsubscribeUrl,
    });

    const response: SubscribeResponse = { ok: true, status: "confirmation_sent" };
    res.status(200).json(response);
  } catch (error) {
    console.error("Newsletter subscription failed", error);
    res.status(500).json({ ok: false, error: "Unable to process subscription." });
  }
}
