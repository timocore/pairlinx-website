import { createHmac, timingSafeEqual } from "crypto";
import { CONFIRM_TOKEN_TTL_SECONDS, UNSUBSCRIBE_TOKEN_TTL_SECONDS } from "./config.js";

export type TokenPurpose = "confirm" | "unsubscribe";

type TokenPayload = {
  email: string;
  purpose: TokenPurpose;
  exp: number;
  v: string;
};

function encodeBase64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decodeBase64Url(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signBody(body: string, secret: string): string {
  return createHmac("sha256", secret).update(body).digest("base64url");
}

export function createNewsletterToken(
  email: string,
  purpose: TokenPurpose,
  secret: string,
  consentVersion: string,
): string {
  const ttl =
    purpose === "confirm" ? CONFIRM_TOKEN_TTL_SECONDS : UNSUBSCRIBE_TOKEN_TTL_SECONDS;
  const payload: TokenPayload = {
    email,
    purpose,
    exp: Math.floor(Date.now() / 1000) + ttl,
    v: consentVersion,
  };
  const body = encodeBase64Url(JSON.stringify(payload));
  const signature = signBody(body, secret);
  return `${body}.${signature}`;
}

export function verifyNewsletterToken(
  token: string,
  secret: string,
  expectedPurpose: TokenPurpose,
): { email: string } | null {
  const [body, signature] = token.split(".");
  if (!body || !signature) {
    return null;
  }

  const expectedSignature = signBody(body, secret);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);
  if (
    signatureBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(signatureBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(decodeBase64Url(body)) as TokenPayload;
    if (
      typeof payload.email !== "string" ||
      payload.purpose !== expectedPurpose ||
      typeof payload.exp !== "number"
    ) {
      return null;
    }
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return { email: payload.email.toLowerCase().trim() };
  } catch {
    return null;
  }
}
