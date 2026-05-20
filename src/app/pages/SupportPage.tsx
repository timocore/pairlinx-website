import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { BRAND_NAME, PRODUCT_NAME, SUPPORT_EMAIL } from "../config";
import { PLAN_LIMITS, SUPPORTED_IMAGE_FORMATS } from "../config/pricing";

type FaqItem = { id: string; question: string; answer: string };
type FaqSection = { title: string; description?: string; questions: FaqItem[] };

const FAQ_SECTIONS: FaqSection[] = [
  {
    title: "Installation help",
    description: "Get QuickShotTransfer running on your Windows PC and pair your iPhone browser.",
    questions: [
      {
        id: "install-1",
        question: "How do I install QuickShotTransfer on Windows?",
        answer:
          "Download the Windows app from our download page, install it, and sign in with your account. Keep the desktop app running while you send images from your phone.",
      },
      {
        id: "install-2",
        question: "Do I need an iPhone app?",
        answer:
          "No separate iPhone app is required in this release. You scan a QR code from the Windows app to open a secure browser upload page on your iPhone.",
      },
      {
        id: "install-3",
        question: "Why is sign-in required?",
        answer:
          "Sign-in links your phone browser session to your Windows app, enforces plan limits, and keeps transfers tied to your account.",
      },
    ],
  },
  {
    title: "Upload help",
    description: "Pairing, sending images, and what to expect on your PC.",
    questions: [
      {
        id: "upload-1",
        question: "How do I send images from my iPhone?",
        answer:
          "Open QuickShotTransfer on Windows, display the QR code, scan it with your iPhone camera, sign in on the browser upload page, choose images, and send them to your paired PC.",
      },
      {
        id: "upload-2",
        question: "Images are not appearing on my PC",
        answer:
          "Check that the Windows app is open, you are signed in on both devices, and your PC has internet access. Confirm you are within your monthly plan limit. If needed, generate a fresh QR code and try again.",
      },
      {
        id: "upload-3",
        question: "My QR code expired",
        answer:
          "QR pairing is session-based for security. Open the Windows app and generate a new QR code, then scan it again with your iPhone.",
      },
      {
        id: "upload-4",
        question: "My file is too large",
        answer: `Free allows ${PLAN_LIMITS.free.maxFileSize}. Pro allows ${PLAN_LIMITS.pro.maxFileSize}. Compress the image or upgrade to Pro if you need larger files.`,
      },
      {
        id: "upload-5",
        question: "Unsupported file format",
        answer: `${PRODUCT_NAME} supports images only: ${SUPPORTED_IMAGE_FORMATS}. Videos, PDFs, ZIP files, and other document types are not supported in version 1.`,
      },
      {
        id: "upload-6",
        question: "I reached my Free monthly limit",
        answer: `The Free plan includes ${PLAN_LIMITS.free.monthlyTransfers}. You can wait until your allowance resets or upgrade to Pro for ${PLAN_LIMITS.pro.monthlyTransfers.toLowerCase()}.`,
      },
    ],
  },
  {
    title: "Billing help",
    description: "Pro plans, Stripe subscriptions, and cancellations.",
    questions: [
      {
        id: "billing-1",
        question: "How do I upgrade to Pro?",
        answer:
          "Upgrade from the Windows desktop app or from the pricing page on this website. Pro is billed monthly or yearly through Stripe.",
      },
      {
        id: "billing-2",
        question: "How do I cancel Pro?",
        answer:
          "You can cancel anytime from your account or subscription management flow in the desktop app or website. Your access continues until the end of the paid period unless stated otherwise at checkout.",
      },
      {
        id: "billing-3",
        question: "Can I get a refund?",
        answer:
          "Refund requests are reviewed case by case. See our refund policy for details. Contact support with your account email and charge date if you need billing help.",
      },
      {
        id: "billing-4",
        question: "Who processes payments?",
        answer: "Pro subscriptions are processed by Stripe. We do not store complete card numbers on our servers.",
      },
    ],
  },
  {
    title: "Privacy and deletion requests",
    description: "How images move through the service and how to reach us about your data.",
    questions: [
      {
        id: "privacy-1",
        question: "Where do my images go?",
        answer:
          "Images are temporarily processed through QuickShot Cloud for delivery, then saved locally on your Windows PC by the desktop app. QuickShotTransfer is not permanent cloud storage.",
      },
      {
        id: "privacy-2",
        question: "How do I request account or data deletion?",
        answer: `Email ${SUPPORT_EMAIL} from the address on your account with your request. We will respond according to our privacy policy and applicable requirements.`,
      },
      {
        id: "privacy-3",
        question: "Are my images used for AI training?",
        answer:
          "No. Your images are used to deliver them to your paired PC, not for AI training or unrelated marketing purposes.",
      },
    ],
  },
];

export function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div>
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-300">
              <HelpCircle className="h-4 w-4" />
              Support
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              How can we help?
            </h1>
            <p className="text-xl leading-relaxed text-gray-400">
              Setup, uploads, billing, and privacy guidance for {PRODUCT_NAME} by {BRAND_NAME}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-16">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="mb-2 border-b-2 border-gray-700 pb-3 text-2xl font-bold text-white">
                  {section.title}
                </h2>
                {section.description ? (
                  <p className="mb-8 text-sm leading-relaxed text-gray-400">{section.description}</p>
                ) : null}
                <div className="space-y-4">
                  {section.questions.map((faq) => (
                    <div
                      key={faq.id}
                      className="overflow-hidden rounded-xl border-2 border-gray-700 bg-gray-800/50 transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between p-6 text-left"
                      >
                        <span className="pr-4 text-base font-semibold text-white">{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${
                            openFaq === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === faq.id ? (
                        <div className="px-6 pb-6">
                          <p className="text-sm leading-relaxed text-gray-400">{faq.answer}</p>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-800/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border-2 border-gray-700 bg-gray-800/50 p-10 text-center shadow-lg">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-xl shadow-blue-600/30">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white">Contact support</h2>
              <p className="mb-8 text-base leading-relaxed text-gray-400">
                Still stuck? Email us and include your account email, Windows app version if known,
                and what you already tried.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-opacity hover:opacity-95"
              >
                <Mail className="h-5 w-5" />
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
                  Refund policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
