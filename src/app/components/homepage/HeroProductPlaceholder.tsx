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
      className="relative w-full max-w-full overflow-visible"
    >
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/3 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/3 left-1/4 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,400px)] sm:max-w-[520px] lg:max-w-[560px] px-2 sm:px-0">
        <div
          className="pointer-events-none absolute inset-x-2 top-6 bottom-16 rounded-2xl bg-blue-600/10 blur-2xl"
          aria-hidden
        />

        <div className="relative overflow-visible">
          {/* Desktop — primary visual anchor (~70%) */}
          <div className="relative z-10">
            <div className="rounded-lg bg-white shadow-2xl shadow-black/45 overflow-hidden ring-1 ring-white/15 border border-slate-200/80">
              <img
                src={PRODUCT_HERO_PC}
                alt="QuickShotTransfer desktop app — recent transfers grid on Windows"
                className="block w-full h-auto"
                loading="eager"
                decoding="async"
              />

              {/* Center of main image grid (aligned to pc-hero screenshot layout) */}
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

            {/* Phone — half past right edge; PC bottom aligns at 3/4 phone height */}
            <div className="absolute right-0 bottom-0 z-20 w-[29%] min-w-[4.75rem] max-w-[7.5rem] translate-x-1/2 translate-y-1/4 sm:max-w-[8.25rem]">
              <div className="relative rounded-[1.85rem] bg-slate-900 p-1.5 shadow-2xl shadow-black/55 ring-1 ring-white/10">
                <div
                  className="absolute top-2.5 left-1/2 z-20 h-2.5 w-7 -translate-x-1/2 rounded-full bg-black"
                  aria-hidden
                />
                <div className="overflow-hidden rounded-[1.45rem] bg-black">
                  <img
                    src={PRODUCT_HERO_PHONE}
                    alt="QuickShotTransfer mobile upload page in the browser"
                    className="block w-full h-auto"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Subtle transfer glow between devices */}
            <div
              className="pointer-events-none absolute bottom-[14%] right-[10%] z-[15] hidden sm:block"
              aria-hidden
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.45, 0, 0.45],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="size-20 rounded-full bg-cyan-500/25 blur-xl" />
              </motion.div>
            </div>
          </div>

          <div className="h-[min(3.5rem,11%)] sm:h-[min(4rem,12%)]" aria-hidden />
        </div>
      </div>
    </motion.div>
  );
}
