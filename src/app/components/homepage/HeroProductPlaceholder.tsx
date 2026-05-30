import { motion } from "motion/react";

import { PRODUCT_HERO_PC, PRODUCT_HERO_PHONE } from "../../config/product-hero";

/**
 * Homepage hero visual: desktop-first composition (~70% desktop, ~30% phone).
 * Distinct from the product page hero (full-width PC + overlapping phone + sales badges).
 */
export function HeroProductPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full max-w-full min-w-0 overflow-visible"
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-600/10 blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,400px)] sm:max-w-[520px] lg:max-w-[560px] px-2 pr-4 sm:px-0 sm:pr-6">
        <div className="relative overflow-visible rounded-xl p-1 ring-1 ring-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)]">
          {/* Desktop — primary visual anchor (~70%) */}
          <div className="relative z-10">
            <div className="overflow-hidden rounded-lg border border-slate-200/30 bg-white shadow-2xl shadow-black/50 ring-1 ring-white/20">
              <img
                src={PRODUCT_HERO_PC}
                alt="Inlet desktop app — recent transfers grid on Windows"
                className="block w-full h-auto"
                loading="eager"
                decoding="async"
              />

              <div className="absolute left-[62%] top-[54%] z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full border border-emerald-500/40 bg-gray-900/95 px-2.5 py-1 shadow-xl shadow-black/40 backdrop-blur-md sm:px-3 sm:py-1.5">
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300 sm:text-xs">
                    <span className="relative flex size-1.5 sm:size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex size-full rounded-full bg-emerald-400" />
                    </span>
                    Image received
                  </span>
                </div>
              </div>
            </div>

            {/* Phone — secondary, overlapping bottom-right */}
            <div className="absolute right-0 bottom-0 z-20 w-[29%] min-w-[4.75rem] max-w-[7.5rem] translate-x-1/4 translate-y-[12.5%] sm:max-w-[8.25rem]">
              <div className="relative rounded-[1.85rem] bg-slate-900 p-1.5 shadow-2xl shadow-black/60 ring-1 ring-white/15">
                <div
                  className="absolute top-2.5 left-1/2 z-20 h-2.5 w-7 -translate-x-1/2 rounded-full bg-black"
                  aria-hidden
                />
                <div className="overflow-hidden rounded-[1.45rem] bg-black ring-1 ring-white/5">
                  <img
                    src={PRODUCT_HERO_PHONE}
                    alt="Inlet mobile upload page in the browser"
                    className="block w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[min(2.75rem,9%)] sm:h-[min(3rem,10%)]" aria-hidden />
      </div>
    </motion.div>
  );
}
