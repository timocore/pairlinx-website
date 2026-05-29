const STORAGE_KEY = "pairlinx_newsletter_status";

export type StoredNewsletterStatus = "pending" | "active" | "unsubscribed";

export function getStoredNewsletterStatus(): StoredNewsletterStatus | null {
  if (typeof window === "undefined") {
    return null;
  }
  const value = window.localStorage.getItem(STORAGE_KEY);
  if (value === "pending" || value === "active" || value === "unsubscribed") {
    return value;
  }
  return null;
}

export function setStoredNewsletterStatus(status: StoredNewsletterStatus): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, status);
}

export function clearStoredNewsletterStatus(): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(STORAGE_KEY);
}
