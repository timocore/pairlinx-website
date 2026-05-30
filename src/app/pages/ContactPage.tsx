import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ChevronDown, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { SOCIAL_LINKS, SUPPORT_EMAIL, type SocialLabel } from "../config";

type ContactCategory =
  | "Support"
  | "Billing"
  | "Privacy request"
  | "Partnership"
  | "General question";

type FormValues = {
  name: string;
  email: string;
  category: "" | ContactCategory;
  subject: string;
  message: string;
  appVersion: string;
  windowsVersion: string;
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  category: "",
  subject: "",
  message: "",
  appVersion: "",
  windowsVersion: "",
  website: "",
};

const CATEGORY_OPTIONS: ContactCategory[] = [
  "Support",
  "Billing",
  "Privacy request",
  "Partnership",
  "General question",
];

const socialIconClass = "h-4 w-4";

function SocialIcon({ label }: { label: SocialLabel }) {
  if (label === "LinkedIn") return <Linkedin className={socialIconClass} />;
  if (label === "YouTube") return <Youtube className={socialIconClass} />;
  if (label === "GitHub") return <Github className={socialIconClass} />;
  return <span className="text-xs leading-none font-bold">X</span>;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [showProductDetails, setShowProductDetails] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);
  const activeSocialLinks = useMemo(
    () => SOCIAL_LINKS.filter((link) => link.href.trim().length > 0),
    [],
  );

  function validate(nextValues: FormValues): FormErrors {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!nextValues.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!isValidEmail(nextValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!nextValues.category) {
      nextErrors.category = "Please choose a category.";
    }
    if (!nextValues.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }
    if (!nextValues.message.trim()) {
      nextErrors.message = "Please enter a message.";
    } else if (nextValues.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }

    return nextErrors;
  }

  function onFieldChange<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitStatus("idle");

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (values.website.trim()) {
      setSubmitStatus("success");
      return;
    }

    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitStatus("success");
      setValues(INITIAL_VALUES);
      setShowProductDetails(false);
    } catch {
      setSubmitStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-700 bg-gray-900/60 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-500/20";
  const labelClass = "mb-2 block text-sm font-medium text-gray-200";
  const errorClass = "mt-2 text-xs text-red-400";

  return (
    <div className="overflow-x-hidden">
      <section className="pt-10 pb-8 sm:pt-12 sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
              Contact
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in touch.
            </h1>
            <p className="text-lg leading-relaxed text-gray-400">
              Questions about Inlet, billing, support, privacy, or partnerships? Send us
              a message and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-7 lg:px-8">
          <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm sm:p-7">
            <h2 className="mb-5 text-xl font-semibold text-white">Send a message</h2>
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                value={values.website}
                onChange={(e) => onFieldChange("website", e.target.value)}
                className="hidden"
                aria-hidden
              />

              <div>
                <label className={labelClass} htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={inputClass}
                  value={values.name}
                  onChange={(e) => onFieldChange("name", e.target.value)}
                  placeholder="Your name"
                />
                {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={inputClass}
                  value={values.email}
                  onChange={(e) => onFieldChange("email", e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-category">
                  Category
                </label>
                <div className="relative">
                  <select
                    id="contact-category"
                    className={`${inputClass} appearance-none pr-10`}
                    value={values.category}
                    onChange={(e) =>
                      onFieldChange("category", e.target.value as FormValues["category"])
                    }
                  >
                    <option value="">Select a category</option>
                    {CATEGORY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                </div>
                {errors.category ? <p className={errorClass}>{errors.category}</p> : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className={inputClass}
                  value={values.subject}
                  onChange={(e) => onFieldChange("subject", e.target.value)}
                  placeholder="How can we help?"
                />
                {errors.subject ? <p className={errorClass}>{errors.subject}</p> : null}
              </div>

              <div>
                <label className={labelClass} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className={`${inputClass} resize-y`}
                  value={values.message}
                  onChange={(e) => onFieldChange("message", e.target.value)}
                  placeholder="Share details so we can help faster."
                />
                {errors.message ? <p className={errorClass}>{errors.message}</p> : null}
              </div>

              <div className="rounded-xl border border-gray-700/70 bg-gray-900/30">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-200"
                  onClick={() => setShowProductDetails((prev) => !prev)}
                  aria-expanded={showProductDetails}
                >
                  Product details (optional)
                  <ChevronDown
                    className={`h-4 w-4 text-gray-500 transition-transform ${
                      showProductDetails ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {showProductDetails ? (
                  <div className="grid gap-4 border-t border-gray-700/70 px-4 py-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="contact-app-version">
                        App version (optional)
                      </label>
                      <input
                        id="contact-app-version"
                        type="text"
                        className={inputClass}
                        value={values.appVersion}
                        onChange={(e) => onFieldChange("appVersion", e.target.value)}
                        placeholder="e.g. 1.0.2"
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="contact-windows-version">
                        Windows version (optional)
                      </label>
                      <input
                        id="contact-windows-version"
                        type="text"
                        className={inputClass}
                        value={values.windowsVersion}
                        onChange={(e) => onFieldChange("windowsVersion", e.target.value)}
                        placeholder="e.g. Windows 11"
                      />
                    </div>
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:opacity-95"
              >
                {submitStatus === "loading" ? "Sending..." : "Send message"}
              </button>

              {submitStatus === "success" ? (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                  Your message was sent successfully.
                </div>
              ) : null}

              {submitStatus === "error" ? (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  Something went wrong. Please try again or email {SUPPORT_EMAIL}.
                </div>
              ) : null}

              {hasErrors ? (
                <p className="text-xs text-gray-500">
                  Please fix the highlighted fields and try again.
                </p>
              ) : null}
            </form>
          </div>

          <aside className="rounded-2xl border border-gray-700 bg-gray-800/45 p-6 backdrop-blur-sm sm:p-7">
            <h2 className="mb-3 text-xl font-semibold text-white">Before you send</h2>
            <ul className="mb-6 space-y-3 text-sm leading-relaxed text-gray-300">
              <li>
                For upload issues, include what you tried and any error message.
              </li>
              <li>
                For billing questions, use the email connected to your account.
              </li>
              <li>
                For privacy requests, include the account email and write &quot;Privacy request&quot;
                in the subject.
              </li>
            </ul>

            <div className="mb-6 rounded-xl border border-blue-500/25 bg-blue-500/10 p-4">
              <p className="mb-2 text-xs font-semibold tracking-wide text-blue-300 uppercase">
                Direct email
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-blue-100"
              >
                <Mail className="h-4 w-4" />
                {SUPPORT_EMAIL}
              </a>
            </div>

            {activeSocialLinks.length > 0 ? (
              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                  Follow
                </p>
                <ul className="flex items-center gap-2.5">
                  {activeSocialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-700 bg-gray-900/40 text-gray-300 transition-colors hover:border-gray-600 hover:text-gray-100"
                      >
                        <SocialIcon label={link.label} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <p className="mb-5 text-sm text-gray-400">We usually reply as soon as possible.</p>

            <p className="text-sm text-gray-500">
              <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy
              </Link>
              {" · "}
              <Link to="/terms" className="text-blue-400 hover:text-blue-300">
                Terms
              </Link>
              {" · "}
              <Link to="/refund-policy" className="text-blue-400 hover:text-blue-300">
                Refund Policy
              </Link>
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
