/**
 * Resend Contacts + Segments API (fetch).
 * NEWSLETTER_AUDIENCE_ID is your Resend Segment ID (Audiences were renamed to Segments).
 */

const RESEND_API_BASE = "https://api.resend.com";

export type NewsletterContact = {
  id: string;
  email: string;
  unsubscribed: boolean;
};

type ResendContactResponse = {
  id: string;
  email: string;
  unsubscribed: boolean;
};

async function resendRequest<T>(
  apiKey: string,
  path: string,
  init?: RequestInit,
): Promise<{ data?: T; error?: string; status: number }> {
  const response = await fetch(`${RESEND_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const text = await response.text();
  let body: unknown = null;
  if (text) {
    try {
      body = JSON.parse(text) as unknown;
    } catch {
      body = null;
    }
  }

  if (!response.ok) {
    const message =
      typeof body === "object" &&
      body !== null &&
      "message" in body &&
      typeof (body as { message: unknown }).message === "string"
        ? (body as { message: string }).message
        : `Resend API error (${response.status})`;
    return { error: message, status: response.status };
  }

  return { data: body as T, status: response.status };
}

export async function getNewsletterContact(
  apiKey: string,
  email: string,
): Promise<NewsletterContact | null> {
  const encodedEmail = encodeURIComponent(email);
  const { data, error, status } = await resendRequest<ResendContactResponse>(
    apiKey,
    `/contacts/${encodedEmail}`,
    { method: "GET" },
  );

  if (status === 404 || error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    unsubscribed: Boolean(data.unsubscribed),
  };
}

async function addContactToSegment(
  apiKey: string,
  email: string,
  segmentId: string,
): Promise<void> {
  const encodedEmail = encodeURIComponent(email);
  const { error, status } = await resendRequest(
    apiKey,
    `/contacts/${encodedEmail}/segments/${segmentId}`,
    { method: "POST" },
  );

  if (error && status !== 409) {
    throw new Error(error);
  }
}

export async function upsertPendingContact(
  apiKey: string,
  email: string,
  segmentId: string,
): Promise<void> {
  const existing = await getNewsletterContact(apiKey, email);

  if (!existing) {
    const { error } = await resendRequest<ResendContactResponse>(apiKey, "/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        unsubscribed: true,
        segments: [{ id: segmentId }],
      }),
    });
    if (error) {
      throw new Error(error);
    }
    return;
  }

  const { error } = await resendRequest(apiKey, `/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    body: JSON.stringify({ unsubscribed: true }),
  });
  if (error) {
    throw new Error(error);
  }

  await addContactToSegment(apiKey, email, segmentId);
}

export async function activateNewsletterContact(
  apiKey: string,
  email: string,
  segmentId: string,
): Promise<void> {
  const existing = await getNewsletterContact(apiKey, email);

  if (!existing) {
    const { error } = await resendRequest<ResendContactResponse>(apiKey, "/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        unsubscribed: false,
        segments: [{ id: segmentId }],
      }),
    });
    if (error) {
      throw new Error(error);
    }
    return;
  }

  const { error } = await resendRequest(apiKey, `/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    body: JSON.stringify({ unsubscribed: false }),
  });
  if (error) {
    throw new Error(error);
  }

  await addContactToSegment(apiKey, email, segmentId);
}

export async function unsubscribeNewsletterContact(
  apiKey: string,
  email: string,
): Promise<void> {
  const existing = await getNewsletterContact(apiKey, email);
  if (!existing) {
    return;
  }

  const { error } = await resendRequest(apiKey, `/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    body: JSON.stringify({ unsubscribed: true }),
  });
  if (error) {
    throw new Error(error);
  }
}

export async function sendConfirmationEmail(options: {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
  confirmUrl: string;
  unsubscribeUrl: string;
}): Promise<void> {
  const { Resend } = await import("resend");
  const resend = new Resend(options.apiKey);

  const text = [
    "Confirm your Pairlinx newsletter subscription",
    "",
    "Thanks for signing up. Please confirm your email address by opening this link:",
    options.confirmUrl,
    "",
    "If you did not request this, you can ignore this email.",
    "",
    "Unsubscribe:",
    options.unsubscribeUrl,
    "",
    "Pairlinx",
  ].join("\n");

  const { error } = await resend.emails.send({
    from: `Pairlinx <${options.fromEmail}>`,
    to: [options.toEmail],
    subject: "Confirm your Pairlinx newsletter subscription",
    text,
  });

  if (error) {
    throw error;
  }
}
