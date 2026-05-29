const MAX_FIELD_LENGTH = 320;

export function sanitizeEmail(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .slice(0, MAX_FIELD_LENGTH);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseJsonBody(body: unknown): Record<string, unknown> {
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

export function getContentLength(headers: Record<string, string | string[] | undefined>): number {
  const value = headers["content-length"];
  if (Array.isArray(value)) {
    return Number.parseInt(value[0] ?? "0", 10) || 0;
  }
  return Number.parseInt(value ?? "0", 10) || 0;
}

export function getClientIp(headers: Record<string, string | string[] | undefined>): string {
  const forwarded = headers["x-forwarded-for"];
  const raw = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  if (raw) {
    return raw.split(",")[0]?.trim() || "unknown";
  }
  const realIp = headers["x-real-ip"];
  if (typeof realIp === "string") {
    return realIp;
  }
  return "unknown";
}
