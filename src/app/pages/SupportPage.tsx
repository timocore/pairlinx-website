import {
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
import { SUPPORTED_IMAGE_FORMATS } from "../config/pricing";

type FaqItem = { id: string; question: string; answer: ReactNode };
type FaqSection = {
  id: string;
  title: string;
  subheading: string;
  questions: FaqItem[];
};

const QUICK_HELP = [
  {
    id: "installation",
    title: "Installation",
    description: "Get the Windows app installed and running.",
    icon: Download,
  },
  {
    id: "pairing",
    title: "Pairing & uploads",
    description: "Scan the QR code and send images from your iPhone browser.",
    icon: QrCode,
  },
  {
    id: "billing",
    title: "Billing",
    description: "Upgrade, cancel, or manage your Pro subscription.",
    icon: CreditCard,
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Understand image handling or request account/data deletion.",
    icon: Shield,
  },
] as const;

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: "installation",
    title: "Installation help",
    subheading: "Get QuickShotTransfer running on your Windows PC.",
    questions: [
      {
        id: "install-1",
        question: "How do I install QuickShotTransfer on Windows?",
        answer:
          "Download the Windows app from the Download page, run the installer, open QuickShotTransfer, and sign in. Keep the desktop app running while you send images from your phone.",
      },
      {
        id: "install-2",
        question: "Where do my transferred images appear?",
        answer:
          "Images are saved locally to your QuickShotTransfer folder on your Windows PC. You can open the folder from the desktop app using the Open Folder action.",
      },
      {
        id: "install-3",
        question: "Does the app need to stay open?",
        answer:
          "Yes. Keep the Windows app open while sending images. The desktop app receives the images and saves them locally on your PC.",
      },
      {
        id: "install-4",
        question: "What if Windows shows a security warning?",
        answer:
          "Windows may show a warning for new apps or unsigned installers. Only download QuickShotTransfer from the official website. If you are not sure, contact support before installing.",
      },
    ],
  },
  {
    id: "pairing",
    title: "Pairing and upload help",
    subheading:
      "Fix common issues with QR pairing, sending images, and receiving them on your PC.",
    questions: [
      {
        id: "pairing-1",
        question: "How do I send images from my iPhone?",
        answer:
          "Open QuickShotTransfer on your Windows PC, sign in, open the upload page or QR code, scan it with your iPhone camera, choose images from your browser, and tap Send Images to PC.",
      },
      {
        id: "pairing-2",
        question: "Do I need an iPhone app?",
        answer:
          "No. The current version uses your iPhone browser. You scan the QR code and upload images from the phone page.",
      },
      {
        id: "pairing-3",
        question: "My QR code expired. What should I do?",
        answer:
          "Open QuickShotTransfer on your PC and generate or reopen the upload link again. Then scan the new QR code with your iPhone.",
      },
      {
        id: "pairing-4",
        question: "Images are not appearing on my PC. What should I check?",
        answer:
          "Make sure the Windows app is open, you are signed in, your PC is connected to the internet, and your phone upload page is paired to the same desktop session. Then refresh the desktop app or generate a new QR code and try again.",
      },
      {
        id: "pairing-5",
        question: "My file is too large. What does that mean?",
        answer:
          "Free supports images up to 5 MB each. Pro supports images up to 50 MB each. If an image is too large, choose a smaller image or upgrade to Pro for higher file-size limits.",
      },
      {
        id: "pairing-6",
        question: "My file format is not supported. What can I send?",
        answer: `QuickShotTransfer currently supports image uploads only: ${SUPPORTED_IMAGE_FORMATS}. PDFs, ZIP files, documents, and videos are not supported in the current version.`,
      },
      {
        id: "pairing-7",
        question: "What happens if my PC is asleep or offline?",
        answer:
          "If your PC is asleep, offline, or the desktop app is closed, images may not appear until the app reconnects. Keep the Windows app open and your PC connected while sending.",
      },
      {
        id: "pairing-8",
        question: "Can I send multiple images at once?",
        answer:
          "Yes. You can select multiple images from the phone upload page and send them to your paired Windows PC.",
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
            Go to the{" "}
            <Link to="/pricing" className="font-medium text-blue-400 hover:text-blue-300">
              Pricing page
            </Link>{" "}
            or use the upgrade prompt inside QuickShotTransfer. Choose monthly or yearly Pro and
            complete checkout.
          </>
        ),
      },
      {
        id: "billing-2",
        question: "I reached my Free monthly limit. What can I do?",
        answer:
          "You can wait until your monthly allowance resets or upgrade to Pro for higher limits.",
      },
      {
        id: "billing-3",
        question: "How do I manage or cancel Pro?",
        answer:
          "You can manage or cancel your Pro subscription through the billing portal. If you need help, contact support using the email below.",
      },
      {
        id: "billing-4",
        question: "Who processes payments?",
        answer:
          "Payments are processed by Stripe. QuickShotTransfer does not store your full card details.",
      },
      {
        id: "billing-5",
        question: "Where can I read the refund policy?",
        answer: (
          <>
            You can review the{" "}
            <Link to="/refund-policy" className="font-medium text-blue-400 hover:text-blue-300">
              Refund Policy
            </Link>{" "}
            page for refund details. If you have a billing issue, contact support.
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
          "Images are temporarily processed through QuickShot Cloud to deliver them to your paired Windows PC. After delivery, they are saved locally on your desktop. QuickShotTransfer is not permanent cloud storage.",
      },
      {
        id: "privacy-2",
        question: "Are my images used for AI training?",
        answer:
          "No. QuickShotTransfer is a utility for delivering your images to your paired PC. Your images are not used for AI training.",
      },
      {
        id: "privacy-3",
        question: "How do I request account or data deletion?",
        answer:
          "Contact support from the email address on your account and ask for account or data deletion. Include the email connected to your QuickShotTransfer account so we can help.",
      },
      {
        id: "privacy-4",
        question: "How do I report a privacy concern?",
        answer:
          "Email support with the subject ‘Privacy request’ and include the account email and a short description of the issue.",
      },
    ],
  },
];

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-10 sm:pt-28 sm:pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-300">
              Support
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How can we help?
            </h1>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Setup, pairing, uploads, billing, and privacy help for QuickShotTransfer.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Most issues can be fixed by checking the Windows app, refreshing the phone upload
              page, or generating a new QR code.
            </p>
          </div>
        </div>
      </section>

      {/* Quick help */}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_HELP.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="group rounded-xl border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:border-gray-600 hover:bg-gray-800/70"
                >
                  <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/25 bg-blue-500/15 text-blue-400 transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-500/20">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <h2 className="mb-1 text-sm font-semibold text-white">{item.title}</h2>
                  <p className="text-xs leading-relaxed text-gray-400">{item.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-12">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                    {section.subheading}
                  </p>
                  {section.id === "billing" ? (
                    <p className="mt-2 text-sm text-gray-500">
                      For full plan details, see the{" "}
                      <Link to="/pricing" className="font-medium text-blue-400 hover:text-blue-300">
                        Pricing page
                      </Link>
                      .
                    </p>
                  ) : null}
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
                          <span className="text-base font-semibold text-white">{faq.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen ? (
                          <div className="border-t border-gray-700/50 px-5 pb-5 sm:px-6 sm:pb-6">
                            <div className="pt-4 text-sm leading-relaxed text-gray-300 sm:text-[0.9375rem]">
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

      {/* Contact */}
      <section className="border-t border-gray-800 bg-gray-800/30 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 text-center sm:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-lg shadow-blue-600/25">
              <Mail className="h-7 w-7 text-white" aria-hidden />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white">Still need help?</h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-400 sm:text-base">
              Email us with your account email, Windows app version if known, what you tried, and
              any error message you saw.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-opacity hover:opacity-95"
            >
              <Mail className="h-5 w-5" aria-hidden />
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Legal pages:{" "}
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
