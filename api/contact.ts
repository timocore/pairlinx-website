import { Resend } from "resend";

const MAX_CONTENT_LENGTH_BYTES = 20_000;
const MAX_BODY_STRING_LENGTH = 20_000;
const MAX_FIELD_LENGTH = 2_000;

type ContactCategory =
  | "Support"
  | "Billing"
  | "Privacy request"
  | "Partnership"
  | "General question";

type ContactPayload = {
  name: string;
  email: string;
  category: ContactCategory;
  subject: string;
  message: string;
  appVersion?: string;
  windowsVersion?: string;
  website?: string;
};

type ApiRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

const CONTACT_CATEGORIES: ContactCategory[] = [
  "Support",
  "Billing",
  "Privacy request",
  "Partnership",
  "General question",
];

function sanitize(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_FIELD_LENGTH);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getContentLength(headers: ApiRequest["headers"]): number {
  const value = headers["content-length"];
  if (Array.isArray(value)) {
    return Number.parseInt(value[0] ?? "0", 10) || 0;
  }
  return Number.parseInt(value ?? "0", 10) || 0;
}

function parseBody(body: unknown): Record<string, unknown> {
  if (!body) {
    return {};
  }
  if (typeof body === "string") {
    try {
      const parsed = JSON.parse(body) as unknown;
      return typeof parsed === "object" && parsed !== null
        ? (parsed as Record<string, unknown>)
        : {};
    } catch {
      return {};
    }
  }
  if (typeof body === "object") {
    return body as Record<string, unknown>;
  }
  return {};
}

function validatePayload(raw: Record<string, unknown>): {
  data?: ContactPayload;
  error?: string;
} {
  const name = sanitize(raw.name);
  const email = sanitize(raw.email).toLowerCase();
  const category = sanitize(raw.category);
  const subject = sanitize(raw.subject);
  const message = sanitize(raw.message);
  const appVersion = sanitize(raw.appVersion);
  const windowsVersion = sanitize(raw.windowsVersion);
  const website = sanitize(raw.website);

  if (!name) {
    return { error: "Name is required." };
  }
  if (!email || !isValidEmail(email)) {
    return { error: "A valid email is required." };
  }
  if (!CONTACT_CATEGORIES.includes(category as ContactCategory)) {
    return { error: "Category is required." };
  }
  if (!subject) {
    return { error: "Subject is required." };
  }
  if (!message || message.length < 10) {
    return { error: "Message must be at least 10 characters." };
  }
  if (website) {
    return { error: "Spam check failed." };
  }

  return {
    data: {
      name,
      email,
      category: category as ContactCategory,
      subject,
      message,
      appVersion: appVersion || undefined,
      windowsVersion: windowsVersion || undefined,
      website: undefined,
    },
  };
}

function internalEmailText(payload: ContactPayload): string {
  const lines = [
    "New Pairlinx contact request",
    "",
    `Category: ${payload.category.toUpperCase()}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject}`,
    `Timestamp: ${new Date().toISOString()}`,
    "",
    "Message:",
    payload.message,
  ];

  if (payload.appVersion || payload.windowsVersion) {
    lines.push("", "Product details:");
    if (payload.appVersion) lines.push(`- App version: ${payload.appVersion}`);
    if (payload.windowsVersion) lines.push(`- Windows version: ${payload.windowsVersion}`);
  }

  return lines.join("\n");
}

function confirmationEmailText(name: string): string {
  return [
    `Hi ${name},`,
    "",
    "We received your message — Pairlinx.",
    "",
    "Thanks for reaching out about Inlet. Our support team will review your note and follow up as soon as possible.",
    "",
    "If you need to add more context, reply to this email with any additional details.",
    "",
    "Pairlinx Support",
  ].join("\n");
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const contentLength = getContentLength(req.headers);
  if (contentLength > MAX_CONTENT_LENGTH_BYTES) {
    res.status(413).json({ error: "Payload too large." });
    return;
  }

  const parsed = parseBody(req.body);
  if (JSON.stringify(parsed).length > MAX_BODY_STRING_LENGTH) {
    res.status(413).json({ error: "Payload too large." });
    return;
  }

  const validation = validatePayload(parsed);
  if (!validation.data) {
    res.status(400).json({ error: validation.error ?? "Invalid payload." });
    return;
  }

  // TODO(rate-limit): Add IP-based rate limiting middleware when backend infra is finalized.
  // TODO(spam): Add additional anti-abuse checks (IP reputation / per-email throttle).

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL || "support@pairlinx.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey) {
    res.status(500).json({ error: "Email service is not configured." });
    return;
  }

  const resend = new Resend(resendApiKey);
  const payload = validation.data;

  try {
    await resend.emails.send({
      from: `Pairlinx Contact <${fromEmail}>`,
      to: [contactToEmail],
      replyTo: payload.email,
      subject: `[${payload.category}] ${payload.subject}`,
      text: internalEmailText(payload),
    });

    await resend.emails.send({
      from: `Pairlinx Support <${fromEmail}>`,
      to: [payload.email],
      subject: "We received your message — Pairlinx",
      text: confirmationEmailText(payload.name),
    });

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Unable to send message." });
  }
}
