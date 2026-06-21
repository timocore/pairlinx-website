import {
  Check,
  ChevronDown,
  CreditCard,
  Download,
  Mail,
  QrCode,
  Shield,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { SUPPORT_EMAIL } from "../config";
import { INLET_DESKTOP_VERSION, INLET_PRODUCT_NAME } from "../config/inletDownload";

type QuickHelpItem = {
  anchorId: string;
  title: string;
  description: ReactNode;
  icon: typeof Download;
};
type FaqItem = { id: string; question: string; answer: ReactNode };
type FaqSection = {
  id: string;
  title: string;
  subheading: string;
  questions: FaqItem[];
};

const QUICK_HELP: QuickHelpItem[] = [
  {
    anchorId: "installation",
    title: "Installation",
    description: "Get the Windows app installed and running.",
    icon: Download,
  },
  {
    anchorId: "pairing-uploads",
    title: "Pairing & uploads",
    description: (
      <>
        Scan the{" "}
        <span className="whitespace-nowrap">QR code</span> and send images from your{" "}
        <span className="whitespace-nowrap">iPhone</span> browser.
      </>
    ),
    icon: QrCode,
  },
  {
    anchorId: "billing",
    title: "Billing",
    description: "Upgrade, cancel, or manage your Pro subscription.",
    icon: CreditCard,
  },
  {
    anchorId: "privacy",
    title: "Privacy",
    description: (
      <>
        Understand image handling or request{" "}
        <span className="whitespace-nowrap">account/data</span> deletion.
      </>
    ),
    icon: Shield,
  },
];

const TROUBLESHOOTING_ITEMS = [
  "Keep the Inlet Windows app open.",
  "Confirm you are signed in on the desktop app.",
  "Refresh the phone upload page.",
  "Generate a new QR code if the old one expired.",
  "Check your internet connection and your local save folder.",
] as const;

const RELEASE_NOTES = [
  {
    version: INLET_DESKTOP_VERSION,
    publishedAt: "2026-06-20",
    title: `${INLET_PRODUCT_NAME} ${INLET_DESKTOP_VERSION}`,
    items: [
      "New rounded N-shape Inlet icon across the app, desktop shortcut, taskbar, tray, installer, and phone upload page",
      "Windows Task Manager and file properties now identify the application as Inlet by Pairlinx instead of Electron",
      "Microsoft-signed installer, application executable, and uninstaller with verified publisher Toader Timoc",
      "Trusted Microsoft timestamps preserve signature verification after certificate rotation",
    ],
  },
] as const;

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "installation",
    title: "Installation help",
    subheading: "Get Inlet running on your Windows PC.",
    questions: [
      {
        id: "install-1",
        question: "How do I install Inlet on Windows?",
        answer:
          "Download the Windows installer, open it, and follow the setup steps. After installation, sign in and keep the desktop app running while you send images from your phone.",
      },
      {
        id: "install-2",
        question: "Where do my transferred images appear?",
        answer:
          "Images appear in the Inlet desktop inbox and are saved locally on your Windows PC. You can copy the latest image, preview it, or open the save folder from the app.",
      },
      {
        id: "install-3",
        question: "Does the app need to stay open?",
        answer:
          "Yes. The Windows app needs to be running so it can receive images from your phone and save them locally.",
      },
      {
        id: "install-4",
        question: "What if Windows shows a security warning?",
        answer:
          "Windows may ask you to confirm before opening a new desktop installer. Download Inlet only from this website and confirm that Windows shows the verified publisher as Toader Timoc.",
      },
    ],
  },
  {
    id: "pairing-uploads",
    title: "Pairing and upload help",
    subheading:
      "Fix common issues with QR pairing, sending images, and receiving them on your PC.",
    questions: [
      {
        id: "pairing-1",
        question: "How do I send images from my iPhone?",
        answer:
          "Open Inlet on Windows, scan the QR code with your iPhone camera, choose images in your browser, and send them to your paired PC.",
      },
      {
        id: "pairing-2",
        question: "Do I need an iPhone app?",
        answer:
          "No. Inlet uses your iPhone browser, so there is no separate iPhone app to install.",
      },
      {
        id: "pairing-3",
        question: "My QR code expired. What should I do?",
        answer:
          "Open the Windows app and generate or refresh the QR code, then scan it again from your iPhone.",
      },
      {
        id: "pairing-4",
        question: "Images are not appearing on my PC. What should I check?",
        answer:
          "Make sure the Windows app is open, you are signed in, your phone upload page is still paired, your internet connection is working, and the image is a supported format and size.",
      },
      {
        id: "pairing-5",
        question: "My file is too large. What does that mean?",
        answer:
          "Free supports images up to 5 MB each. Pro supports images up to 50 MB each. Larger files need to be compressed or resized before sending.",
      },
      {
        id: "pairing-6",
        question: "My file format is not supported. What can I send?",
        answer:
          "Inlet supports image files only: JPG, JPEG, PNG, WEBP, HEIC, and HEIF.",
      },
      {
        id: "pairing-7",
        question: "What happens if my PC is asleep or offline?",
        answer:
          "Keep your PC awake and the desktop app running while sending images. If your PC is offline or the app is closed, images may not appear until you reconnect and try again.",
      },
      {
        id: "pairing-8",
        question: "Can I send multiple images at once?",
        answer:
          "Yes. You can select multiple supported images from your iPhone browser and send them together, as long as they fit your plan limits.",
      },
    ],
  },
  {
    id: "billing",
    title: "Plan and billing help",
    subheading: "Help with Free, Pro, usage limits, and subscription questions.",
    questions: [
      {
        id: "billing-1",
        question: "How do I upgrade to Pro?",
        answer: (
          <>
            Choose Pro from the{" "}
            <Link to="/pricing" className="font-medium text-blue-400 hover:text-blue-300">
              pricing page
            </Link>{" "}
            or inside the desktop app. Pro gives you higher monthly usage and larger image uploads.
          </>
        ),
      },
      {
        id: "billing-2",
        question: "I reached my Free monthly limit. What can I do?",
        answer:
          "You can wait until your monthly allowance resets or upgrade to Pro for higher monthly usage.",
      },
      {
        id: "billing-3",
        question: "How do I manage or cancel Pro?",
        answer:
          "You can manage or cancel your subscription from your account or billing area. Your Pro access continues according to the billing terms shown during checkout.",
      },
      {
        id: "billing-4",
        question: "Who processes payments?",
        answer:
          "Payments and subscription billing are handled securely by our payment provider.",
      },
      {
        id: "billing-5",
        question: "Where can I read the refund policy?",
        answer: (
          <>
            You can read the{" "}
            <Link to="/refund-policy" className="font-medium text-blue-400 hover:text-blue-300">
              refund policy
            </Link>{" "}
            from the footer or legal links on this website.
          </>
        ),
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and deletion requests",
    subheading: "How images move through the service and how to reach us about your data.",
    questions: [
      {
        id: "privacy-1",
        question: "Where do my images go?",
        answer:
          "Images are temporarily processed through Pairlinx Cloud so they can be delivered to your paired Windows PC. The desktop app then saves them locally on your computer.",
      },
      {
        id: "privacy-2",
        question: "Are my images used for AI training?",
        answer: "No. Inlet does not use your uploaded images to train AI models.",
      },
      {
        id: "privacy-3",
        question: "Does Inlet store my images forever?",
        answer:
          "No. Inlet is designed for fast image handoff, not permanent cloud storage.",
      },
      {
        id: "privacy-4",
        question: "How do I request account or data deletion?",
        answer:
          "Contact support from the email on this page and include the account email you used for Inlet.",
      },
      {
        id: "privacy-5",
        question: "How do I report a privacy concern?",
        answer:
          "Email support with your account email and a short description of the issue so we can review it.",
      },
    ],
  },
];

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="scroll-mt-24 pt-10 pb-6 sm:pt-12 sm:pb-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
              Support
            </div>
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How can we help?
            </h1>
            <p className="hyphens-none text-lg leading-relaxed text-gray-400">
              Setup, pairing, uploads, billing, and privacy help for{" "}
              <span className="whitespace-nowrap">Inlet</span>.
            </p>
            <p className="mt-4 hyphens-none text-sm leading-relaxed text-gray-500">
              Most issues can be fixed by keeping the{" "}
              <span className="whitespace-nowrap">Windows app</span> open, refreshing the{" "}
              <span className="whitespace-nowrap">phone upload page</span>, or generating a new{" "}
              <span className="whitespace-nowrap">QR code</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Quick help */}
      <section className="pb-6 sm:pb-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {QUICK_HELP.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.anchorId}
                  href={`#${item.anchorId}`}
                  className="group flex h-full cursor-pointer flex-col rounded-xl border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:border-gray-600 hover:bg-gray-800/70 sm:p-5"
                >
                  <span className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-500/25 bg-blue-500/15 text-blue-400 transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h2 className="mb-2 text-sm font-semibold leading-snug text-white">
                    {item.title}
                  </h2>
                  <p className="hyphens-none flex-1 text-[0.8125rem] leading-relaxed text-gray-400 sm:text-sm">
                    {item.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Try these first */}
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-xl border border-gray-700/60 bg-gray-800/40 p-6 backdrop-blur-sm sm:p-7">
            <h2 className="mb-5 text-base font-semibold tracking-tight text-white">
              Try these first
            </h2>
            <ul className="space-y-3">
              {TROUBLESHOOTING_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-gray-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                    <Check className="h-3 w-3 text-blue-400" aria-hidden />
                  </span>
                  <span className="hyphens-none">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-8 sm:pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="mb-5">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 hyphens-none text-sm leading-relaxed text-gray-400 sm:text-base">
                    {section.subheading}
                  </p>
                </div>

                <div className="space-y-3">
                  {section.questions.map((faq) => {
                    const isOpen = openFaq === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-colors hover:border-gray-600"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                          className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                          aria-expanded={isOpen}
                        >
                          <span className="hyphens-none pr-2 text-base font-semibold leading-snug text-white">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen ? (
                          <div className="border-t border-gray-700/50 px-5 pb-5 sm:px-6 sm:pb-6">
                            <div className="hyphens-none pt-4 text-sm leading-relaxed text-gray-300 sm:text-[0.9375rem]">
                              {faq.answer}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Release notes */}
      <section id="release-notes" className="scroll-mt-24 pb-8 sm:pb-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Release notes</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
              What&apos;s new in {INLET_PRODUCT_NAME}.
            </p>
          </div>
          <div className="space-y-4">
            {RELEASE_NOTES.map((release) => (
              <article
                key={release.version}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{release.title}</h3>
                  <time dateTime={release.publishedAt} className="text-xs text-gray-500">
                    {release.publishedAt}
                  </time>
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-gray-300">
                  {release.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-800/80 bg-gray-800/40 pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-7 text-center sm:p-9">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-600/25">
              <Mail className="h-7 w-7 text-white" aria-hidden />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">Still need help?</h2>
            <p className="mb-6 hyphens-none text-sm leading-relaxed text-gray-400 sm:text-base">
              Email us with your account email, Windows app version if known, what you tried, and
              any error message you saw.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-opacity hover:opacity-95"
              >
                <Mail className="h-5 w-5" aria-hidden />
                {SUPPORT_EMAIL}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-600 bg-gray-900/40 px-5 py-3 text-sm font-semibold text-gray-100 transition-colors hover:border-gray-500 hover:bg-gray-800/60"
              >
                Open contact form
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-500">
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
          </div>
        </div>
      </section>
    </div>
  );
}
