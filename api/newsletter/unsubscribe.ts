import type { ApiRequest, ApiResponse } from "../lib/newsletter/types";
import { getNewsletterConfig } from "../lib/newsletter/config";
import { unsubscribeNewsletterContact } from "../lib/newsletter/resend";
import { verifyNewsletterToken } from "../lib/newsletter/tokens";

function getQueryToken(req: ApiRequest): string {
  const raw = req.query?.token;
  if (Array.isArray(raw)) {
    return raw[0] ?? "";
  }
  return typeof raw === "string" ? raw : "";
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== "GET") {
    res.setHeader("Content-Type", "application/json");
    res.status(405).json({ ok: false, error: "Method Not Allowed" });
    return;
  }

  const config = getNewsletterConfig();
  const token = getQueryToken(req);

  if (!config.isConfigured || !token) {
    res.redirect(302, `${config.siteUrl}/newsletter/unsubscribed?status=invalid`);
    return;
  }

  const verified = verifyNewsletterToken(token, config.tokenSecret!, "unsubscribe");
  if (!verified) {
    res.redirect(302, `${config.siteUrl}/newsletter/unsubscribed?status=invalid`);
    return;
  }

  try {
    await unsubscribeNewsletterContact(config.resendApiKey!, verified.email);
    res.redirect(
      302,
      `${config.siteUrl}/newsletter/unsubscribed?status=success&email=${encodeURIComponent(verified.email)}`,
    );
  } catch {
    res.redirect(302, `${config.siteUrl}/newsletter/unsubscribed?status=error`);
  }
}
