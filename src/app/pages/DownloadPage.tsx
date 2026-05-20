import { Link } from "react-router";
import { Download, Check, Shield, ChevronRight, Zap } from "lucide-react";
import { Button } from "../components/Button";

export function DownloadPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Download QuickShotTransfer for Windows.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Install the desktop app, sign in, scan the QR code, and start sending images from your iPhone to your PC.
            </p>

            <div className="inline-flex flex-col items-center gap-6">
              <Button variant="primary" size="lg" className="shadow-2xl shadow-blue-600/40 text-lg px-10">
                <Download className="h-6 w-6" />
                Download for Windows
              </Button>
              <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Check className="h-3.5 w-3.5 text-blue-300" />
                  </div>
                  <span>Windows 10/11</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-emerald-100 flex items-center justify-center border border-emerald-200">
                    <Check className="h-3.5 w-3.5 text-emerald-700" />
                  </div>
                  <span>Free plan available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Timeline */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Getting started is simple</h2>
            <p className="text-lg text-gray-400">Four steps from download to instant image transfer</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Download and install",
                  description: "Run the installer and follow the setup wizard. Takes less than a minute."
                },
                {
                  step: "2",
                  title: "Sign in or create account",
                  description: "Create your free account or sign in if you already have one. No credit card required for Free plan."
                },
                {
                  step: "3",
                  title: "Scan QR code",
                  description: "Open the QR code in the app and scan it with your iPhone camera. Your phone opens a secure upload page."
                },
                {
                  step: "4",
                  title: "Send your first image",
                  description: "Choose an image from your phone and watch it appear on your PC instantly."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-base font-bold text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    {i < 3 && (
                      <div className="ml-6 mt-2 h-10 w-0.5 bg-slate-200"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="rounded-xl border-2 border-gray-700 bg-gray-800/50 p-6 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        {item.title}
                        <ChevronRight className="h-5 w-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="py-24 sm:py-32 bg-gray-800/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-gray-700 bg-gray-800/50 p-12 shadow-xl">
              <div className="flex items-start gap-6 mb-10">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 shadow-xl shadow-blue-600/30">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Built for simple, secure handoff.</h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    Your phone upload page is paired to your desktop session. Images are processed through QuickShot Cloud and delivered to your paired Windows PC.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t-2 border-gray-700">
                {[
                  { text: "Secure pairing", icon: Shield },
                  { text: "Quick setup", icon: Zap },
                  { text: "Free to start", icon: Check }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-gray-700 flex items-center justify-center shadow-sm">
                      <feature.icon className="h-5 w-5 text-gray-300" />
                    </div>
                    <span className="text-sm font-bold text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border-2 border-gray-700 bg-gray-800/40 p-8">
              <h3 className="text-lg font-semibold text-white mb-6">System Requirements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Desktop</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-400" />
                      Windows 10 (64-bit)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-400" />
                      Windows 11
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Phone</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-400" />
                      iPhone with iOS 14 or later
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-400" />
                      Safari or any modern browser
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Links */}
      <section className="py-16 bg-gray-800/40 border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm text-gray-400">
              Need help getting started?{" "}
              <Link to="/support" className="font-semibold text-blue-400 hover:text-blue-300">
                Visit our support page
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
