import { PRODUCT_HERO_PC, PRODUCT_HERO_PHONE } from "../config/product-hero";

export function EnhancedProductMockup() {
  return (
    <div className="relative z-10">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/70 via-cyan-50/35 to-blue-50/45 blur-sm" />
      <div className="absolute left-1/2 top-12 h-48 w-[70%] -translate-x-1/2 rounded-full bg-blue-300/14 blur-3xl" />
      {/* Floating Image Thumbnails (animated) */}
      <div className="absolute -left-16 top-32 opacity-80 animate-float-slow hidden lg:block z-20">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-400 shadow-xl shadow-cyan-500/15 rotate-6 ring-1 ring-white/70"></div>
      </div>
      <div className="absolute -left-8 top-64 opacity-60 animate-float-slower hidden lg:block z-20">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-300 to-purple-400 shadow-lg shadow-indigo-500/12 -rotate-12 ring-1 ring-white/70"></div>
      </div>

      {/* Desktop — real Windows app screenshot (sharp corners) */}
      <div className="relative rounded-sm bg-white shadow-2xl shadow-blue-950/20 border border-slate-200/90 overflow-hidden ring-1 ring-slate-200/80">
        <img
          src={PRODUCT_HERO_PC}
          alt="QuickShotTransfer desktop app — recent transfers grid, copy latest, and cloud connected"
          className="block w-full h-auto"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* iPhone — real browser upload screenshot */}
      <div className="absolute -right-12 -bottom-12 w-[11rem] sm:w-[12.75rem] z-20 hidden lg:block">
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-60 animate-pulse" aria-hidden />
              <div className="relative bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl inline-flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-white" />
                </span>
                Sent to PC
              </div>
            </div>
          </div>

          <div className="relative rounded-[2.65rem] bg-slate-900 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <div
              className="absolute top-3.5 left-1/2 z-20 h-4 w-[3.25rem] -translate-x-1/2 rounded-full bg-black"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[2.15rem] bg-black">
              <img
                src={PRODUCT_HERO_PHONE}
                alt="QuickShotTransfer upload page in iPhone browser — choose images and send to your PC"
                className="block w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transfer Flow Indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-40 h-0.5 bg-gradient-to-r from-cyan-400/60 via-blue-500/60 to-transparent pointer-events-none hidden lg:block z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-cyan-400 animate-ping"></div>
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute left-2/3 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-indigo-500 animate-ping" style={{ animationDelay: '0.4s' }}></div>
      </div>

      {/* Cloud Badge */}
      <div className="absolute top-1/2 right-24 -translate-y-1/2 z-10 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xl shadow-blue-950/10 rounded-full px-4 py-2 text-xs font-bold text-slate-700">
          Cloud connected
        </div>
      </div>

      {/* Floating thumbnails on right side */}
      <div className="absolute -right-12 top-48 opacity-70 animate-float hidden lg:block z-20">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-300 to-pink-400 shadow-xl shadow-purple-500/12 -rotate-6 ring-1 ring-white/70"></div>
      </div>
    </div>
  );
}
