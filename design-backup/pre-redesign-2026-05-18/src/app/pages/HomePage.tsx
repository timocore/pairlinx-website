import { Link } from "react-router";
import { Download, ArrowRight, Shield, Smartphone, Monitor, Check, X, Zap, Lock, HardDrive, Image, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../components/Button";
import { BRAND_NAME, PRODUCT_NAME } from "../config";

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#eff6ff_0%,transparent_38%),linear-gradient(180deg,#f8fafc_0%,#ffffff_72%)]">
        <div className="absolute left-1/2 top-20 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-cyan-200/14 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-indigo-200/12 blur-3xl" />
        <div className="absolute left-0 top-72 h-72 w-72 rounded-full bg-blue-200/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0f172a0d_1px,transparent_0)] bg-[size:28px_28px] opacity-50 [mask-image:linear-gradient(to_bottom,#000_0%,transparent_62%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-6 sm:pt-24 sm:pb-8 lg:px-8">
          <div className="relative mx-auto min-h-[30rem] max-w-7xl lg:min-h-[32rem]">
            <div className="relative z-20 mx-auto max-w-4xl text-center">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-blue-950 ring-1 ring-blue-200/80 shadow-sm shadow-blue-900/5 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                </span>
                Introducing {PRODUCT_NAME} — now available for Windows
              </div>

              <h1 className="text-5xl font-bold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl mb-7 leading-[0.98]">
                Stop emailing yourself screenshots.
              </h1>

              <div className="mx-auto max-w-sm text-center lg:-translate-x-16 lg:text-left">
                <p className="text-xl font-semibold text-slate-700 leading-8 sm:text-2xl sm:leading-9 mb-3">
                  Send screenshots, photos, and visual references from iPhone to PC in seconds.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-7">
                  No cables. No messy cloud folders. No iPhone app required.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button to="/download" variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-600/18">
                  <Download className="h-5 w-5" />
                  Download for Windows
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto bg-white/90 backdrop-blur">
                  See how it works
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
                {[
                  "Windows 10/11 compatible",
                  "Free plan available",
                  "Secure cloud delivery",
                  "No iPhone app required"
                ].map((item) => (
                  <div key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-24 hidden items-start justify-between lg:flex">
              <div className="relative ml-36 mt-24 xl:ml-48 animate-hero-phone-settle">
                <div className="absolute -inset-8 rounded-[4rem] bg-cyan-100/50 blur-3xl" />
                <div className="relative h-[24rem] w-[11.5rem] rounded-[2.65rem] bg-black p-2 shadow-[0_28px_70px_rgba(15,23,42,0.24)] ring-1 ring-slate-800/80 xl:h-[26rem] xl:w-[12.5rem]">
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-b-3xl bg-black xl:w-24" />
                  <div className="h-full overflow-hidden rounded-[2.2rem] bg-white">
                    <div className="flex h-11 items-center justify-between px-5 pt-3 text-[8px] font-bold text-slate-900">
                      <span>9:41</span>
                      <span className="tracking-[-0.2em]">●●●</span>
                    </div>
                    <div className="flex h-[calc(100%-2.75rem)] items-start justify-center bg-[#eef4ff] px-4 pt-12">
                      <div className="w-full rounded-2xl bg-white/95 p-3 shadow-2xl shadow-slate-900/14 ring-1 ring-slate-200/80">
                        <div className="mb-3 grid grid-cols-3 gap-2">
                          <div className="aspect-[0.78/1] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#dbeafe,#bfdbfe_45%,#f8fafc)] shadow-md shadow-blue-500/10 ring-1 ring-white">
                            <div className="mt-auto h-1/2 bg-[linear-gradient(135deg,#93c5fd,#e0f2fe)]" />
                          </div>
                          <div className="aspect-[0.78/1] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e0e7ff,#c7d2fe_45%,#f8fafc)] shadow-md shadow-indigo-500/10 ring-1 ring-white">
                            <div className="mt-auto h-1/2 bg-[linear-gradient(135deg,#a5b4fc,#dbeafe)]" />
                          </div>
                          <div className="aspect-[0.78/1] overflow-hidden rounded-xl bg-[linear-gradient(135deg,#ccfbf1,#bae6fd_45%,#f8fafc)] shadow-md shadow-cyan-500/10 ring-1 ring-white">
                            <div className="mt-auto h-1/2 bg-[linear-gradient(135deg,#67e8f9,#bfdbfe)]" />
                          </div>
                        </div>
                        <div className="mb-4 space-y-1.5">
                          <div className="h-2 rounded-full bg-slate-200 w-3/4" />
                          <div className="h-2 rounded-full bg-slate-200 w-1/2" />
                        </div>
                        <div className="rounded-xl bg-blue-600 py-2 text-center text-[10px] font-bold text-white shadow-xl shadow-blue-500/20">
                          Send to PC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-12 h-72 flex-1 animate-hero-transfer-fade">
                <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 620 260" fill="none" aria-hidden="true">
                  <path className="animate-hero-path-draw" d="M20 140C160 38 284 46 402 104C482 143 548 129 600 82" stroke="url(#wirelessHeroPath)" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M42 150C80 128 104 126 132 138" stroke="url(#wirelessHeroPath)" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
                  <path d="M492 106C532 120 566 110 596 84" stroke="url(#wirelessHeroPath)" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
                  <defs>
                    <linearGradient id="wirelessHeroPath" x1="20" y1="140" x2="600" y2="82" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#22d3ee" stopOpacity="0.34" />
                      <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.24" />
                      <stop offset="1" stopColor="#6366f1" stopOpacity="0.28" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2">
                  {[0, 1, 2, 3].map((item) => (
                    <div key={item} className="absolute left-1/2 top-1/2 h-36 w-36 rounded-full border border-blue-400/10 animate-wireless-ring" style={{ animationDelay: `${item * 0.5}s` }} />
                  ))}
                </div>
                {[
                  "left-[5%] top-[48%] animate-transfer-card-1",
                  "left-[3%] top-[42%] animate-transfer-card-2",
                  "left-[6%] top-[52%] animate-transfer-card-3"
                ].map((classes) => (
                  <div key={classes} className={`absolute h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 ${classes} shadow-xl shadow-blue-900/10 ring-1 ring-white/80`}>
                    <div className="h-full p-1.5">
                      <div className="h-full rounded-lg bg-[linear-gradient(135deg,#dbeafe,#bfdbfe_45%,#f8fafc)]">
                        <div className="h-1/2 rounded-t-lg bg-[linear-gradient(135deg,#93c5fd,#cffafe)]" />
                        <div className="mx-1.5 mt-1 h-1 rounded-full bg-white/80" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative -mr-8 mt-24 xl:mr-10 animate-hero-pc-settle">
                <div className="absolute -inset-10 rounded-[4rem] bg-blue-100/55 blur-3xl" />
                <div className="relative">
                  <div className="rounded-[1.65rem] bg-slate-950 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.28)] ring-1 ring-slate-800/80">
                    <div className="relative h-[18rem] w-[25rem] overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-slate-100 to-blue-50 xl:h-[20rem] xl:w-[28rem]">
                      <div className="absolute inset-x-0 bottom-0 flex h-9 items-center gap-2 bg-slate-900/90 px-4 text-white backdrop-blur">
                        <div className="h-5 w-5 rounded bg-blue-600" />
                        <div className="flex-1" />
                        <div className="text-xs font-semibold text-white/80">12:34 PM</div>
                      </div>
                      <div className="p-5">
                        <div className="mb-3 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
                          <div className="flex h-9 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                              <Monitor className="h-3.5 w-3.5 text-blue-700" />
                              QuickShotTransfer
                            </div>
                            <div className="rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white">Just received</div>
                          </div>
                          <div className="grid grid-cols-[6rem_1fr]">
                            <div className="border-r border-slate-200 bg-slate-50/70 p-3">
                              <div className="mb-2 rounded-lg bg-blue-50 px-2 py-1.5 text-[10px] font-bold text-blue-900 ring-1 ring-blue-100">Recent</div>
                              <div className="space-y-2 text-[10px] font-semibold text-slate-500">
                                <div>All Images</div>
                                <div>Folder</div>
                              </div>
                            </div>
                            <div className="p-4">
                              <div className="mb-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-400">
                                Search images...
                              </div>
                              <div className="mb-3 rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-3">
                                <div className="flex aspect-[16/7] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#dbeafe,#ecfeff_45%,#eef2ff)] ring-1 ring-white">
                                  <Image className="h-8 w-8 text-slate-400/70" />
                                </div>
                              </div>
                              <div className="grid grid-cols-5 gap-2">
                                {[1, 2, 3, 4, 5].map((item) => (
                                  <div key={item} className="aspect-square rounded-lg bg-gradient-to-br from-slate-100 to-slate-200/80 ring-1 ring-slate-200" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 shadow-lg shadow-slate-900/10 ring-1 ring-white">
                              <div className="h-1/2 bg-[linear-gradient(135deg,#bfdbfe,#cffafe)]" />
                              <div className="mx-3 mt-3 h-1.5 rounded-full bg-white/80" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto w-24">
                    <div className="mx-auto h-10 w-4 rounded-b-xl bg-slate-800" />
                    <div className="h-4 rounded-xl bg-slate-900 shadow-lg" />
                  </div>
                </div>
                <div className="absolute right-7 top-7 rounded-2xl bg-white px-4 py-3 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-200 animate-pop-received">
                  <div className="text-xs font-bold text-slate-950">Photo received</div>
                  <div className="text-xs font-medium text-slate-500">3 photos from iPhone</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-10 grid max-w-2xl grid-cols-[0.7fr_0.3fr_1fr] items-center gap-3 lg:hidden">
              <div className="rounded-[1.75rem] bg-slate-950 p-1.5 shadow-xl shadow-slate-900/20">
                <div className="rounded-[1.35rem] bg-white p-3">
                  <div className="mb-2 text-xs font-bold text-slate-950">Send to PC</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="aspect-square rounded-md bg-blue-100" />
                    <div className="aspect-square rounded-md bg-cyan-100" />
                    <div className="aspect-square rounded-md bg-indigo-100" />
                  </div>
                  <div className="mt-2 rounded-lg bg-blue-700 py-1.5 text-center text-[10px] font-bold text-white">Send Images</div>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300" />
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-xl shadow-blue-950/10">
                <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-[10px] font-bold text-slate-700">QuickShotTransfer</div>
                <div className="p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-950">Visual inbox</span>
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white">Received</span>
                  </div>
                  <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 ring-1 ring-slate-200" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute left-1/2 top-20 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-blue-100/35 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl text-center mb-14">
            <div className="mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 ring-1 ring-slate-200">
              The daily screenshot tax
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl mb-5">
              Small image handoffs should not interrupt real work.
            </h2>
            <p className="text-base text-slate-600 leading-7 sm:text-lg">
              Screenshots, receipts, notes, and visual ideas often start on your phone. QuickShotTransfer keeps them moving to the PC where your work actually happens.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Before */}
            <div className="relative rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-sm shadow-slate-900/[0.03]">
              <div className="mb-7 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700 ring-1 ring-red-100">
                  <X className="h-3.5 w-3.5" />
                  Before
                </div>
                <span className="text-xs font-semibold text-slate-400">manual handoff</span>
              </div>

              <div className="space-y-3.5">
                {[
                  "Email yourself screenshots",
                  "Wait for cloud folders to sync",
                  "Use cables or messy imports",
                  "Lose images in downloads"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 ring-1 ring-red-100">
                      <X className="h-3 w-3 text-red-500" />
                    </div>
                    <span className="text-sm font-medium text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="relative rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50/70 p-7 shadow-xl shadow-blue-600/10">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
              <div className="mb-7 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/25">
                  <Check className="h-3.5 w-3.5" />
                  After
                </div>
                <span className="text-xs font-semibold text-blue-700/70">one simple flow</span>
              </div>

              <div className="space-y-3.5">
                {[
                  "Scan once",
                  "Send images from your phone",
                  "See them appear on your PC",
                  "Copy, preview, or open instantly"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-blue-600/20">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center mb-14">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 ring-1 ring-blue-100">
              How it works
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl mb-4">
              From phone to PC in four steps
            </h2>
            <p className="text-sm text-slate-600 leading-6">
              No complicated setup. No accounts to juggle. Just scan, send, and keep working.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Install the Windows app",
                  description: "Download and install QuickShotTransfer on your PC. Takes less than a minute."
                },
                {
                  step: "2",
                  title: "Scan the QR code",
                  description: "Open the app and scan the displayed QR code with your iPhone camera."
                },
                {
                  step: "3",
                  title: "Send images",
                  description: "Choose screenshots, photos, or visual references from your phone and send."
                },
                {
                  step: "4",
                  title: "Keep working",
                  description: "Images appear on your PC instantly. Copy, preview, or organize them right away."
                }
              ].map((step, i) => (
                <div key={i} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.03]">
                  {i < 3 && (
                    <div className="absolute left-full top-8 hidden h-px w-5 bg-slate-200 lg:block" />
                  )}
                  <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/25">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-sm font-bold text-slate-950">{step.title}</h3>
                    <p className="text-xs leading-5 text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/30">
              <Sparkles className="h-4 w-4" />
              First product
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="relative rounded-3xl border-2 border-slate-200/80 bg-white p-12 shadow-2xl shadow-slate-900/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10"></div>

              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-600/40">
                      <Image className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-slate-900 leading-none">QuickShotTransfer</h3>
                      <div className="mt-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-xs font-bold text-emerald-700">Free plan available</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xl font-medium text-slate-700 mb-4 leading-relaxed">
                    An instant visual capture inbox for iPhone-to-PC workflows.
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Send screenshots, photos, and visual references from your phone to your Windows desktop in seconds.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                {[
                  "Secure QR pairing",
                  "Browser-based phone upload",
                  "Recent image inbox on desktop",
                  "Copy, preview, and open folder actions",
                  "Free and Pro plans",
                  "Windows 10/11 compatible"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 border border-blue-200">
                      <Check className="h-4 w-4 text-blue-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button to="/download" variant="primary" size="lg">
                  <Download className="h-5 w-5" />
                  Download for Windows
                </Button>
                <Button to="/products/quickshottransfer" variant="secondary" size="lg">
                  View product details
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Why not just use email, iCloud, or Phone Link?
            </h2>
          </div>

          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Email", description: "Works, but clutters your inbox and adds extra steps.", highlight: false },
              { name: "Cloud folders", description: "Good for libraries, slow for quick handoffs.", highlight: false },
              { name: "Phone Link", description: "Broad phone connection, not focused visual capture.", highlight: false },
              { name: "QuickShotTransfer", description: "Built specifically for fast iPhone-to-PC image handoff.", highlight: true }
            ].map((option, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 relative overflow-hidden ${
                  option.highlight
                    ? "bg-gradient-to-br from-blue-700 to-cyan-600 text-white shadow-2xl shadow-blue-600/30 border-2 border-blue-500 ring-4 ring-blue-200/50"
                    : "bg-white border-2 border-slate-200 shadow-sm"
                }`}
              >
                {option.highlight && (
                  <div className="absolute top-4 right-4">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-3 ${option.highlight ? "text-white" : "text-slate-900"}`}>
                  {option.name}
                </h3>
                <p className={`text-sm leading-relaxed ${option.highlight ? "text-blue-50 font-medium" : "text-slate-600"}`}>
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Privacy */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Designed for fast handoff, not cloud clutter.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Images are temporarily processed through QuickShot Cloud to deliver them to your paired Windows PC. Your local PC copy remains yours.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="mx-auto max-w-4xl mb-16">
            <div className="flex items-center justify-center gap-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl border-2 border-slate-200">
              <div className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-600/30 mb-3">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-900">iPhone</span>
              </div>

              <div className="flex-1 flex items-center gap-2">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                <ArrowRight className="h-6 w-6 text-blue-600" />
              </div>

              <div className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center shadow-lg mb-3">
                  <div className="text-center">
                    <Zap className="h-8 w-8 text-slate-700 mx-auto mb-1" />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-900">QuickShot Cloud</span>
                <span className="text-xs text-slate-500">Temporary</span>
              </div>

              <div className="flex-1 flex items-center gap-2">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                <ArrowRight className="h-6 w-6 text-blue-600" />
              </div>

              <div className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-xl shadow-slate-900/30 mb-3">
                  <Monitor className="h-10 w-10 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-900">Windows PC</span>
                <span className="text-xs text-emerald-600 font-semibold">Local save</span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure pairing", desc: "QR code session" },
              { icon: Zap, title: "Temporary processing", desc: "Fast delivery" },
              { icon: HardDrive, title: "Local desktop saving", desc: "Your files, your PC" },
              { icon: Lock, title: "Image-only uploads", desc: "No documents or videos" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                  <item.icon className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Products Teaser */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">More focused utilities are planned.</h3>
            <p className="text-base text-slate-600 leading-relaxed">
              {BRAND_NAME} is starting with {PRODUCT_NAME}. Over time, the platform can expand into small tools for clipboard handoff, link sending, visual organization, and desktop workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-8 leading-tight">
              Send your next image in seconds.
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-12 font-medium">
              Download QuickShotTransfer for Windows and turn your phone into a fast visual capture inbox for your PC.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                to="/download"
                variant="secondary"
                size="lg"
                className="bg-white text-slate-900 hover:bg-blue-50 shadow-2xl shadow-blue-900/40"
              >
                <Download className="h-5 w-5" />
                Download for Windows
              </Button>
              <Button
                to="/pricing"
                variant="ghost"
                size="lg"
                className="text-white hover:text-white hover:bg-white/10 border-2 border-white/30 hover:border-white/50"
              >
                View pricing
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm font-medium text-blue-200">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Windows 10/11</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Free plan</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>No credit card</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
