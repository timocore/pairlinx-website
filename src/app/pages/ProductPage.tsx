import {
  Download,
  ArrowRight,
  Copy,
  Folder,
  Smartphone,
  Monitor,
  Image,
  Zap,
  Check,
  ChevronDown,
  Code,
  Palette,
  Video,
  FileText,
  QrCode,
  Laptop,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { EnhancedProductMockup } from "../components/EnhancedProductMockup";
import { PricingPlans } from "../components/pricing/PricingPlans";
import { FREE_PLAN_SUMMARY } from "../config/pricing";
import { BeforeAfterSection } from "../components/product/BeforeAfterSection";
import { ProductRoadmapSection } from "../components/product/ProductRoadmapSection";
import { ProductComparisonSection } from "../components/product/ProductComparisonSection";

const howItWorksSteps = [
  {
    number: 1,
    icon: Laptop,
    title: "Install the Windows app",
    description: "Download and install Inlet on your PC.",
    chipClass: "border-blue-500/25 bg-blue-500/10",
    iconClass: "text-blue-400",
  },
  {
    number: 2,
    icon: QrCode,
    title: "Sign in and scan the QR code",
    description:
      "Create a free account or sign in, then scan the QR code in the desktop app with your iPhone camera.",
    chipClass: "border-purple-500/25 bg-purple-500/10",
    iconClass: "text-purple-400",
  },
  {
    number: 3,
    icon: Image,
    title: "Send images from your browser",
    description:
      "Choose screenshots or photos on the paired upload page. No iPhone app required.",
    chipClass: "border-pink-500/25 bg-pink-500/10",
    iconClass: "text-pink-400",
  },
  {
    number: 4,
    icon: Laptop,
    title: "Use them on your PC",
    description:
      "Images arrive in your desktop inbox. Copy, preview, open your save folder, and keep working.",
    chipClass: "border-green-500/25 bg-green-500/10",
    iconClass: "text-green-400",
  },
];

const features = [
  {
    icon: Monitor,
    title: "Turn your PC into a visual inbox",
    description:
      "Incoming images show up in one clean place with thumbnails — not scattered across email threads or sync folders.",
    chipClass: "border-blue-500/25 bg-blue-500/10",
    iconClass: "text-blue-400",
  },
  {
    icon: QrCode,
    title: "Secure paired upload",
    description:
      "Your phone upload page is connected to your signed-in desktop session, so images reach the right PC.",
    chipClass: "border-green-500/25 bg-green-500/10",
    iconClass: "text-green-400",
  },
  {
    icon: Copy,
    title: "Copy, preview, open folder",
    description:
      "Paste the latest image into Slack, Figma, PowerPoint, Cursor, or any app. Open your local save folder in one click.",
    chipClass: "border-purple-500/25 bg-purple-500/10",
    iconClass: "text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Browser-based phone upload",
    description: "Scan the QR code and send from your iPhone browser. No separate iPhone app to install.",
    chipClass: "border-indigo-500/25 bg-indigo-500/10",
    iconClass: "text-indigo-400",
  },
  {
    icon: Image,
    title: "Image-only by design",
    description: "Supports JPG, JPEG, PNG, WEBP, HEIC, and HEIF — focused on fast visual handoff.",
    chipClass: "border-amber-500/25 bg-amber-500/10",
    iconClass: "text-amber-400",
  },
  {
    icon: Zap,
    title: "Built for repeat use",
    description:
      "Use it throughout the day for screenshots, references, and quick captures without breaking focus.",
    chipClass: "border-rose-500/25 bg-rose-500/10",
    iconClass: "text-rose-400",
  },
];

const audiences = [
  {
    icon: Code,
    title: "Developers",
    description:
      "Move UI bugs, mobile screenshots, and app references from your phone into Cursor, VS Code, or your IDE.",
    chipClass: "border-blue-500/25 bg-blue-500/10",
    iconClass: "text-blue-400",
  },
  {
    icon: Palette,
    title: "Designers",
    description:
      "Send inspiration shots and interface captures from your phone into Figma or your desktop workflow.",
    chipClass: "border-purple-500/25 bg-purple-500/10",
    iconClass: "text-purple-400",
  },
  {
    icon: Video,
    title: "Creators",
    description:
      "Get thumbnails, social screenshots, and reference images onto your PC for editing or publishing.",
    chipClass: "border-rose-500/25 bg-rose-500/10",
    iconClass: "text-rose-400",
  },
  {
    icon: FileText,
    title: "Students & professionals",
    description:
      "Move notes, diagrams, receipts, and visual material from your phone without emailing yourself.",
    chipClass: "border-indigo-500/25 bg-indigo-500/10",
    iconClass: "text-indigo-400",
  },
];

const faqs = [
  {
    question: "Is Inlet just another cloud drive?",
    answer:
      "No. Inlet is built for fast image handoff, not permanent cloud storage. Images are temporarily processed through Pairlinx Cloud so they can be delivered to your paired Windows PC, then saved locally on your computer.",
  },
  {
    question: "Do I need to install an iPhone app?",
    answer:
      "No. In the current version, your phone uses a browser upload page. Open Inlet on your Windows PC, scan the QR code with your iPhone, choose images, and send them.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Yes. Sign-in is required so your phone upload page can stay paired to the correct desktop session and your Free or Pro limits can be applied properly.",
  },
  {
    question: "How does sending images work?",
    answer:
      "Install the Windows app, sign in, scan the QR code, then choose images from your iPhone browser. Inlet sends them through Pairlinx Cloud and saves them to your local desktop folder.",
  },
  {
    question: "Where do my images go?",
    answer:
      "Images are delivered to your paired Windows PC and saved locally in your Inlet folder. Inlet is not meant to replace your permanent storage, photo library, or cloud backup.",
  },
  {
    question: "How long are images kept in Pairlinx Cloud?",
    answer:
      "Images are temporarily processed through Pairlinx Cloud for delivery. They are not stored as a permanent cloud library — once delivered, your copies live in your local Inlet folder on Windows.",
  },
  {
    question: "What happens if my PC is off?",
    answer:
      "If your PC is off before you send, the phone page may not be able to complete the normal handoff. If images are already uploaded while your PC is offline, Inlet will attempt delivery when the desktop app reconnects, as long as the upload is still available under the plan’s retention rules.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "Inlet supports image uploads such as JPG, JPEG, PNG, WEBP, HEIC, and HEIF.",
  },
  {
    question: "Can I send PDFs, ZIP files, videos, or documents?",
    answer:
      "Not in the current version. Inlet is focused on image handoff only, so it stays fast, simple, and built around screenshots, photos, receipts, notes, and visual references.",
  },
  {
    question: "What are the Free plan limits?",
    answer: FREE_PLAN_SUMMARY,
  },
];

export function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden">
      {/* 1. Product hero — no pt-20: Header is in document flow (homepage uses fixed nav + pt-20) */}
      <section className="relative pb-10 sm:pb-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-5 lg:px-8 lg:pt-12 lg:pb-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 border border-blue-500/30">
              <span className="size-2 bg-blue-400 rounded-full animate-pulse" />
              <Image className="h-4 w-4" />
              Inlet
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-5 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Send visual references to your desktop in seconds.
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              For creators, builders, and anyone who screenshots on iPhone and works on Windows.
              Inlet is a visual capture inbox — send images from your phone browser to your
              PC without hunting through email or sync folders.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                Free plan available
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                No iPhone app required
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                Sign-in required
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/download" variant="primary" size="lg">
                <Download className="h-5 w-5" />
                Download for Windows
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See how it works
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-6xl overflow-visible px-2 pt-3 sm:mt-11 sm:px-4 sm:pt-4 lg:mt-12 lg:px-6">
            <EnhancedProductMockup />
          </div>
        </div>
      </section>

      {/* 2. Before / After */}
      <BeforeAfterSection />

      {/* 3. How it works */}
      <section id="how-it-works" className="relative scroll-mt-24 py-12 sm:py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
              How it works
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Four simple steps.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sign in once, scan the QR code, and send images from your iPhone browser to your paired
              Windows PC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex h-full flex-col rounded-2xl border border-gray-700 bg-gray-800/50 p-6 sm:p-7 backdrop-blur-sm hover:border-gray-600 transition-all"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${step.chipClass}`}
                    >
                      <Icon className={`h-4 w-4 ${step.iconClass}`} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="mt-auto text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Features / outcomes */}
      <section id="features" className="relative scroll-mt-24 py-12 sm:py-16">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Built for capture speed
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Not a general file-transfer app. A visual workflow shortcut.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Inlet is designed around the moment you need a screenshot or photo on your
              desktop right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="flex h-full flex-col rounded-2xl border border-gray-700 bg-gray-800/50 p-6 sm:p-7 backdrop-blur-sm hover:border-gray-600 hover:shadow-lg hover:shadow-blue-600/5 transition-all"
                >
                  <div
                    className={`mb-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${feature.chipClass}`}
                  >
                    <Icon className={`h-4 w-4 ${feature.iconClass}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="mt-auto text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Who it's for */}
      <section className="bg-gray-800/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Who it&apos;s for
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Made for screenshot-heavy work.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you capture on your phone and create on your PC, Inlet fits how you already work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm hover:border-gray-600 transition-all"
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${item.chipClass}`}
                    >
                      <Icon className={`h-4 w-4 ${item.iconClass}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1.5">{item.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why not email / iCloud / Phone Link */}
      <ProductComparisonSection />

      {/* 7. Pairlinx Cloud delivery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5">
              <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
                Delivery & trust
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                What happens after you send?
              </h2>
            </div>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 text-sm font-medium text-gray-300">
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                iPhone browser
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="px-3.5 py-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Pairlinx Cloud
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="px-3.5 py-1.5 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
                Local Windows PC
              </span>
            </div>

            <div className="mx-auto max-w-2xl space-y-3">
              <p className="text-lg text-gray-300 leading-relaxed">
                Images are temporarily processed through Pairlinx Cloud to deliver them to your paired
                PC. The desktop app saves them to your local Inlet folder — not permanent
                cloud storage.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Internet connection required. Sign-in keeps your upload page paired to the correct desktop
                session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing (compact) */}
      <section id="pricing" className="scroll-mt-24 bg-gray-800/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Simple pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Start free. Upgrade when it becomes part of your workflow.
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              No credit card required on Free. Choose monthly or yearly Pro billing below.
            </p>
          </div>

          <PricingPlans variant="compact" />
        </div>
      </section>

      {/* 9. What's coming next (roadmap) */}
      <ProductRoadmapSection />

      {/* 10. FAQ */}
      <section id="faq" className="scroll-mt-24 py-12 sm:pt-14 sm:pb-8">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              FAQ
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Questions before you download?
            </h2>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Clear answers about setup, privacy, limits, and billing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-gray-600 transition-colors backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-700/50">
                    <p className="text-sm sm:text-[0.9375rem] text-gray-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Still need help?{" "}
            <Link to="/support" className="text-gray-400 hover:text-blue-300 transition-colors">
              Contact support
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="relative overflow-hidden py-9 sm:py-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(147,51,234,0.25),transparent)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-blue-200/90 mb-4">
            Ready when you are
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Turn your PC into a visual inbox.
          </h2>
          <p className="text-lg text-blue-100/80 mb-7 max-w-xl mx-auto leading-relaxed">
            Download for Windows, sign in once, and start sending images from your iPhone browser.
            Saved locally on your PC.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/download" variant="primary" size="lg">
              <Download className="h-5 w-5" />
              Download for Windows
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View pricing
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-blue-100/60">
            Windows 10/11 · No iPhone app required · Free plan available
          </p>
        </div>
      </section>
    </div>
  );
}
