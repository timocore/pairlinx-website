import { PRODUCT_HERO_PC, PRODUCT_HERO_PHONE } from "../../config/product-hero";

/** Compact screenshot preview for homepage featured block (smaller than product page hero). */
export function FeaturedProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div
        className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-cyan-600/10 blur-2xl"
        aria-hidden
      />

      <div className="relative">
        <div className="overflow-hidden rounded-lg border border-slate-200/25 bg-white shadow-xl shadow-black/45 ring-1 ring-white/10">
          <img
            src={PRODUCT_HERO_PC}
            alt="QuickShotTransfer Windows inbox with recent image transfers"
            className="block w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="absolute right-0 bottom-0 z-10 w-[34%] min-w-[3.5rem] max-w-[5.5rem] translate-x-1/2 translate-y-1/4">
          <div className="rounded-[1.35rem] bg-slate-900 p-1 shadow-lg shadow-black/50 ring-1 ring-white/10">
            <div
              className="absolute top-1.5 left-1/2 z-20 h-1.5 w-5 -translate-x-1/2 rounded-full bg-black"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[1.1rem] bg-black">
              <img
                src={PRODUCT_HERO_PHONE}
                alt="QuickShotTransfer iPhone browser upload page"
                className="block w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs leading-relaxed text-gray-500">
        iPhone browser → QuickShot Cloud → saved locally on Windows
      </p>
    </div>
  );
}
