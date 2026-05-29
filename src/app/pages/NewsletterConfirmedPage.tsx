import { Link, useSearchParams } from "react-router";
import { useEffect } from "react";
import { setStoredNewsletterStatus } from "../lib/newsletterStorage";

export function NewsletterConfirmedPage() {
  const [params] = useSearchParams();
  const status = params.get("status");
  const email = params.get("email");

  useEffect(() => {
    if (status === "success") {
      setStoredNewsletterStatus("active");
    }
  }, [status]);

  const isSuccess = status === "success";
  const isInvalid = status === "invalid";

  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="mb-3 text-3xl font-bold text-white">
        {isSuccess ? "You're subscribed." : isInvalid ? "Link expired or invalid." : "Something went wrong."}
      </h1>
      <p className="mb-8 text-gray-400 leading-relaxed">
        {isSuccess
          ? `Thanks for confirming${email ? ` — ${email}` : ""}. You'll receive Pairlinx product updates and announcements.`
          : isInvalid
            ? "This confirmation link may have expired. You can subscribe again from the homepage or footer."
            : "We couldn't confirm your subscription. Please try subscribing again."}
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-95"
      >
        Back to home
      </Link>
    </div>
  );
}
