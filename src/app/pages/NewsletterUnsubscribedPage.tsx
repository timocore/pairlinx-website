import { Link, useSearchParams } from "react-router";
import { useEffect } from "react";
import { setStoredNewsletterStatus } from "../lib/newsletterStorage";

export function NewsletterUnsubscribedPage() {
  const [params] = useSearchParams();
  const status = params.get("status");
  const email = params.get("email");

  useEffect(() => {
    if (status === "success") {
      setStoredNewsletterStatus("unsubscribed");
    }
  }, [status]);

  const isSuccess = status === "success";
  const isInvalid = status === "invalid";

  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="mb-3 text-3xl font-bold text-white">
        {isSuccess ? "You've been unsubscribed." : isInvalid ? "Link expired or invalid." : "Something went wrong."}
      </h1>
      <p className="mb-8 text-gray-400 leading-relaxed">
        {isSuccess
          ? `${email ? `${email} ` : "You "}will no longer receive Pairlinx marketing emails.`
          : isInvalid
            ? "This unsubscribe link may be invalid or expired."
            : "We couldn't process your unsubscribe request. Please try again from a recent email."}
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-gray-600 hover:text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
