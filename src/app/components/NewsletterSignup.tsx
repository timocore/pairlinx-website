import { useEffect, useState } from "react";
import {
  clearStoredNewsletterStatus,
  getStoredNewsletterStatus,
  setStoredNewsletterStatus,
} from "../lib/newsletterStorage";

export const NEWSLETTER_CONSENT_LABEL =
  "I agree to receive product updates and announcements from Pairlinx. I can unsubscribe at any time.";

type UiState = "idle" | "loading" | "confirmation_sent" | "already_subscribed" | "error";

type NewsletterSignupProps = {
  variant?: "footer" | "inline";
  className?: string;
};

export function NewsletterSignup({ variant = "footer", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [uiState, setUiState] = useState<UiState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const stored = getStoredNewsletterStatus();
    if (stored === "active" || stored === "pending") {
      setUiState(stored === "active" ? "already_subscribed" : "confirmation_sent");
    }
  }, []);

  const isCompact = variant === "footer";
  const wrapperClass = isCompact
    ? "rounded-xl border border-gray-800/80 bg-gray-900/35 p-4"
    : "rounded-2xl border border-gray-700/70 bg-gray-800/35 px-6 py-7 sm:px-8";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setUiState("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!consent) {
      setUiState("error");
      setErrorMessage("Please agree to receive updates before subscribing.");
      return;
    }

    setUiState("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          consent: true,
          website: "",
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        status?: "confirmation_sent" | "already_subscribed";
        error?: string;
      };

      if (!response.ok || !data.ok) {
        setUiState("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (data.status === "already_subscribed") {
        setStoredNewsletterStatus("active");
        setUiState("already_subscribed");
        return;
      }

      setStoredNewsletterStatus("pending");
      setUiState("confirmation_sent");
    } catch {
      setUiState("error");
      setErrorMessage("Unable to connect. Please try again in a moment.");
    }
  }

  if (uiState === "confirmation_sent") {
    return (
      <div className={`${wrapperClass} ${className}`}>
        <p className="text-sm font-medium text-gray-100">Check your inbox to confirm your subscription.</p>
        <p className="mt-2 text-xs leading-relaxed text-gray-400">
          We sent a confirmation link to {email || "your email"}. Click it to finish subscribing.
        </p>
      </div>
    );
  }

  if (uiState === "already_subscribed") {
    return (
      <div className={`${wrapperClass} ${className}`}>
        <p className="text-sm font-medium text-gray-100">You&apos;re already subscribed.</p>
        <p className="mt-2 text-xs text-gray-400">
          Pairlinx product updates will be sent to your inbox.{" "}
          <button
            type="button"
            className="text-blue-400 underline-offset-2 hover:text-blue-300 hover:underline"
            onClick={() => {
              clearStoredNewsletterStatus();
              setUiState("idle");
              setEmail("");
              setConsent(false);
            }}
          >
            Use a different email
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={wrapperClass}>
        <h3
          className={
            isCompact
              ? "mb-2 text-sm font-semibold text-gray-100"
              : "mb-1 text-center text-lg font-semibold text-white"
          }
        >
          {isCompact ? "Newsletter" : "Stay in the loop"}
        </h3>
        <p
          className={
            isCompact
              ? "mb-3 text-xs leading-relaxed text-gray-400"
              : "mb-5 text-center text-sm leading-relaxed text-gray-400"
          }
        >
          Product updates and launch announcements from Pairlinx. No spam.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden
          />

          <div className={isCompact ? "space-y-3" : "flex flex-col gap-3 sm:flex-row sm:items-start"}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className={
                isCompact
                  ? "w-full rounded-lg border border-gray-700 bg-gray-950/60 px-3 py-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  : "w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:min-w-0 sm:flex-1"
              }
              disabled={uiState === "loading"}
            />
            <button
              type="submit"
              disabled={uiState === "loading"}
              className={
                isCompact
                  ? "w-full rounded-lg bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:opacity-60"
                  : "w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:opacity-95 disabled:opacity-60 sm:w-auto sm:shrink-0"
              }
            >
              {uiState === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          <label className="flex items-start gap-2.5 text-left">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-gray-600 bg-gray-900 text-blue-600 focus:ring-blue-500/30"
              disabled={uiState === "loading"}
            />
            <span className="text-xs leading-relaxed text-gray-400">{NEWSLETTER_CONSENT_LABEL}</span>
          </label>
        </form>

        {uiState === "error" && errorMessage ? (
          <p className="mt-3 text-xs text-red-400" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
