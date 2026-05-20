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
import { Button } from "../components/Button";
import { EnhancedProductMockup } from "../components/EnhancedProductMockup";
import { PricingPlans } from "../components/pricing/PricingPlans";
import { BeforeAfterSection } from "../components/product/BeforeAfterSection";
import { ComparisonSection } from "../components/homepage/ComparisonSection";

const howItWorksSteps = [
  {
    number: 1,
    icon: Laptop,
    title: "Install the Windows app",
    description: "Download and install QuickShotTransfer on your PC.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: 2,
    icon: QrCode,
    title: "Sign in and scan the QR code",
    description:
      "Create a free account or sign in, then scan the QR code in the desktop app with your iPhone camera.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    number: 3,
    icon: Image,
    title: "Send images from your browser",
    description:
      "Choose screenshots or photos on the paired upload page. No iPhone app required.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    number: 4,
    icon: Laptop,
    title: "Use them on your PC",
    description:
      "Images arrive in your desktop inbox. Copy, preview, open your save folder, and keep working.",
    gradient: "from-green-500 to-green-600",
  },
];

const features = [
  {
    icon: Monitor,
    title: "Turn your PC into a visual inbox",
    description:
      "Incoming images show up in one clean place with thumbnails — not scattered across email threads or sync folders.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: QrCode,
    title: "Secure paired upload",
    description:
      "Your phone upload page is connected to your signed-in desktop session, so images reach the right PC.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Copy,
    title: "Copy, preview, open folder",
    description:
      "Paste the latest image into Slack, Figma, PowerPoint, Cursor, or any app. Open your local save folder in one click.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Browser-based phone upload",
    description: "Scan the QR code and send from your iPhone browser. No separate iPhone app to install.",
    gradient: "from-indigo-400 to-violet-500",
  },
  {
    icon: Image,
    title: "Image-only by design",
    description: "Supports JPG, JPEG, PNG, WEBP, HEIC, and HEIF — focused on fast visual handoff.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Built for repeat use",
    description:
      "Use it throughout the day for screenshots, references, and quick captures without breaking focus.",
    gradient: "from-red-400 to-rose-500",
  },
];

const audiences = [
  {
    icon: Code,
    title: "Developers",
    description:
      "Move mobile screenshots, UI bugs, and app references from your phone straight into Cursor, VS Code, or your IDE.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Designers",
    description:
      "Send inspiration shots, interface captures, and visual references from your phone into Figma or your desktop workflow.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Video,
    title: "Creators",
    description:
      "Transfer thumbnails, social screenshots, and reference images to your PC for editing or publishing.",
    gradient: "from-red-400 to-rose-500",
  },
  {
    icon: FileText,
    title: "Students & professionals",
    description:
      "Move notes, diagrams, receipts, and visual material from your phone without emailing yourself.",
    gradient: "from-indigo-400 to-violet-500",
  },
];

const faqs = [
  {
    question: "Is this just another cloud drive?",
    answer:
      "No. QuickShotTransfer is designed for fast image handoff, not permanent cloud storage. Images are temporarily processed through QuickShot Cloud to deliver them to your paired PC.",
  },
  {
    question: "Do I need an iPhone app?",
    answer:
      "No. Your phone uses a secure browser upload page opened from the QR code in the Windows app.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Yes. Sign in once on Windows, scan the QR code, and your phone upload page is paired to your desktop session.",
  },
  {
    question: "Where do my images go?",
    answer:
      "Images are temporarily processed through QuickShot Cloud and delivered to your paired Windows PC. The desktop app saves them to your local QuickShotTransfer folder.",
  },
  {
    question: "What image formats are supported?",
    answer: "JPG, JPEG, PNG, WEBP, HEIC, and HEIF.",
  },
  {
    question: "Can I send PDFs, ZIP files, or videos?",
    answer: "Not currently. QuickShotTransfer is focused on fast image handoff only.",
  },
  {
    question: "What happens if I hit the Free limit?",
    answer: "You can wait until next month or upgrade to Pro for higher usage limits.",
  },
  {
    question: "Can I cancel Pro anytime?",
    answer: "Yes. You can manage or cancel your subscription at any time.",
  },
];

export function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* 1. Product hero */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 border border-blue-500/30">
              <span className="size-2 bg-blue-400 rounded-full animate-pulse" />
              <Image className="h-4 w-4" />
              QuickShotTransfer
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Send visual references to your desktop in seconds.
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              For creators, builders, and anyone who screenshots on iPhone and works on Windows.
              QuickShotTransfer is a visual capture inbox — send images from your phone browser to your
              PC without hunting through email or sync folders.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
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

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

          <div className="relative mx-auto mt-10 max-w-6xl overflow-visible px-2 sm:mt-12 sm:px-4">
            <EnhancedProductMockup />
          </div>
        </div>
      </section>

      {/* 2. Before / After */}
      <BeforeAfterSection />

      {/* 3. How it works */}
      <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
              How it works
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Four steps. Under a minute.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Sign in once, scan the QR code, and send images from your iPhone browser to your paired
              Windows PC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm hover:border-gray-600 transition-all"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${step.gradient} text-white font-bold text-sm mb-4`}
                  >
                    {step.number}
                  </div>
                  <div className={`mb-4 inline-flex p-2.5 rounded-lg bg-gradient-to-br ${step.gradient}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Features / outcomes */}
      <section id="features" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Built for capture speed
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Not a general file-transfer app. A visual workflow shortcut.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              QuickShotTransfer is designed around the moment you need a screenshot or photo on your
              desktop right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm hover:border-gray-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Who it's for */}
      <section className="bg-gray-800/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Who it&apos;s for
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Made for screenshot-heavy work.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If you capture on your phone and create on your PC, QuickShotTransfer fits how you already work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {audiences.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm hover:border-gray-600 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} flex-shrink-0 shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-base text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why not email / iCloud / Phone Link */}
      <ComparisonSection />

      {/* 7. QuickShot Cloud delivery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
              Delivery & trust
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              What happens after you send?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-300 mb-8">
              <span className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30">
                iPhone browser
              </span>
              <ArrowRight className="h-4 w-4 text-gray-500" />
              <span className="px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                QuickShot Cloud
              </span>
              <ArrowRight className="h-4 w-4 text-gray-500" />
              <span className="px-4 py-2 rounded-lg bg-green-500/20 text-green-300 border border-green-500/30">
                Local Windows PC
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Images are temporarily processed through QuickShot Cloud to deliver them to your paired
              PC. The desktop app saves them to your local QuickShotTransfer folder — not permanent
              cloud storage.
            </p>
            <p className="text-sm text-gray-400">
              Internet connection required. Sign-in keeps your upload page paired to the correct desktop
              session.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Pricing (compact) */}
      <section id="pricing" className="bg-gray-800/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
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

      {/* 9. FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              FAQ
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Built to feel obvious.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-gray-600 transition-colors backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <p className="text-sm text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(147,51,234,0.25),transparent)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-blue-200/90 mb-5">
            Ready when you are
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Turn your PC into a visual inbox.
          </h2>
          <p className="text-lg text-blue-100/80 mb-10 max-w-xl mx-auto leading-relaxed">
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
          <p className="mt-8 text-sm text-blue-100/60">
            Windows 10/11 · No iPhone app required · Free plan available
          </p>
        </div>
      </section>
    </div>
  );
}
