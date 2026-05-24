import { Link } from "react-router";
import {
  Download,
  Check,
  Link2,
  ChevronRight,
  Zap,
  Monitor,
  Smartphone,
  Wifi,
  User,
} from "lucide-react";
import { Button } from "../components/Button";

const heroTrustItems = [
  "Windows 10/11",
  "Free plan available",
  "No iPhone app required",
  "Sign-in required",
] as const;

const whatYouNeedItems = [
  { icon: Monitor, label: "Windows 10/11 PC" },
  { icon: Smartphone, label: "iPhone with browser" },
  { icon: Wifi, label: "Internet connection" },
  { icon: User, label: "QuickShotTransfer account" },
] as const;

const setupSteps = [
  {
    step: "1",
    title: "Download and install",
    description: "Run the Windows installer and follow the setup wizard.",
  },
  {
    step: "2",
    title: "Sign in or create account",
    description: "Use your account to pair the phone upload page with your desktop app.",
  },
  {
    step: "3",
    title: "Scan QR code",
    description:
      "Open the QR code in the desktop app and scan it with your iPhone camera.",
  },
  {
    step: "4",
    title: "Send your first image",
    description: "Choose an image from your phone browser and watch it appear on your PC.",
  },
];

const desktopRequirements = [
  "Windows 10 or Windows 11",
  "64-bit Windows",
  "Internet connection",
  "QuickShotTransfer desktop app running",
] as const;

const phoneRequirements = [
  "iPhone with Safari or a modern browser",
  "Camera access to scan the QR code",
  "Internet connection",
  "No separate iPhone app required",
] as const;

export function DownloadPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative scroll-mt-24 overflow-hidden pt-10 pb-8 sm:pt-12 sm:pb-10">
        <div
          className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-600/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300">
              <Download className="h-4 w-4" />
              Windows desktop app
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Download QuickShotTransfer for Windows.
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              Install the desktop app, sign in, scan the QR code, and start sending images from your
              iPhone to your PC.
            </p>

            <div className="inline-flex w-full max-w-xl flex-col items-center gap-4">
              <Button variant="primary" size="lg" className="w-full px-10 shadow-xl shadow-blue-600/40 sm:w-auto">
                <Download className="h-5 w-5" />
                Download for Windows
              </Button>
              <p className="max-w-md text-sm leading-relaxed text-gray-500">
                Desktop installer for QuickShotTransfer. Your browser may ask you to confirm the
                download.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-sm text-gray-300">
                {heroTrustItems.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-green-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What you need */}
          <div className="mx-auto mt-7 max-w-3xl rounded-xl border border-gray-700/60 bg-gray-800/25 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
              What you need
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {whatYouNeedItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex min-w-0 flex-col items-center gap-2 rounded-lg border border-gray-700/50 bg-gray-900/30 px-2 py-3 text-center sm:px-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-blue-400" aria-hidden />
                  <span className="text-xs leading-snug text-gray-300 sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Timeline */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div
          className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-600/15 to-purple-600/15 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <div className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-300">
              Setup
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Getting started is simple
            </h2>
            <p className="text-lg leading-relaxed text-gray-400">
              Four steps from download to your first image on Windows
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-3.5">
              {setupSteps.map((item, i) => (
                <div key={item.step} className="group flex gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                      {item.step}
                    </div>
                    {i < setupSteps.length - 1 ? (
                      <div className="ml-5 mt-1.5 h-7 w-0.5 bg-gray-700" />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1 pb-1">
                    <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 backdrop-blur-sm transition-all group-hover:border-gray-600 sm:p-5">
                      <h3 className="mb-1.5 flex items-center gap-2 text-base font-semibold text-white sm:text-lg">
                        {item.title}
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="bg-gray-800/40 pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-7 shadow-lg backdrop-blur-sm sm:p-9">
              <div className="mb-7 flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 sm:h-14 sm:w-14">
                  <Link2 className="h-6 w-6 text-blue-400 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                    Built for simple, paired handoff.
                  </h3>
                  <p className="text-base leading-relaxed text-gray-400">
                    Your phone upload page is paired to your desktop session. Images are temporarily
                    processed through QuickShot Cloud and delivered to your paired Windows PC.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t border-gray-700 pt-5 sm:grid-cols-3 sm:gap-5 sm:pt-6">
                {[
                  { text: "Paired upload", icon: Link2 },
                  { text: "Quick setup", icon: Zap },
                  { text: "Free to start", icon: Check },
                ].map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-gray-900/60">
                      <feature.icon className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-sm font-semibold text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="mb-5 text-lg font-semibold text-white">System requirements</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-gray-200">Desktop</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    {desktopRequirements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-gray-200">Phone</h4>
                  <ul className="space-y-2.5 text-sm text-gray-400">
                    {phoneRequirements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support link */}
      <section className="border-t border-gray-800/80 bg-gray-800/40 pt-8 pb-10 sm:pt-10 sm:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            Need help getting started?{" "}
            <Link to="/support" className="font-medium text-blue-400 hover:text-blue-300">
              Visit support
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
