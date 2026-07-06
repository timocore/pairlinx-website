import { PRODUCT_HERO_PC, PRODUCT_HERO_PHONE } from "../../config/product-hero";

type FeaturedProductPreviewProps = {
  embedded?: boolean;
};

/** Compact screenshot preview for homepage featured block (smaller than product page hero). */
export function FeaturedProductPreview({ embedded = false }: FeaturedProductPreviewProps) {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[340px] sm:max-w-[360px]">
      {!embedded ? (
        <div
          className="pointer-events-none absolute -inset-5 rounded-2xl bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-cyan-600/10 blur-2xl"
          aria-hidden
        />
      ) : null}

      <div
        className={`relative pb-3 ${
          embedded
            ? "rounded-xl border border-white/[0.08] bg-gray-950/20 p-3 ring-1 ring-inset ring-white/[0.05] shadow-inner"
            : "rounded-xl p-1 ring-1 ring-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
        }`}
      >
        <div className="overflow-hidden rounded-[2px] border border-slate-200/30 bg-white shadow-xl shadow-black/45 ring-1 ring-white/15">
          <img
            src={PRODUCT_HERO_PC}
            alt="Inlet Windows inbox with recent images"
            className="block w-full h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="absolute right-3 bottom-5 z-10 w-[24%] min-w-[2.5rem] max-w-[3.75rem] translate-x-[30%]">
          <div className="relative rounded-[1.2rem] bg-slate-900 p-[3px] shadow-xl shadow-black/55 ring-1 ring-white/15">
            <div
              className="absolute top-1 left-1/2 z-20 h-1 w-4 -translate-x-1/2 rounded-full bg-black"
              aria-hidden
            />
            <div className="overflow-hidden rounded-[0.95rem] bg-black ring-1 ring-white/5">
              <img
                src={PRODUCT_HERO_PHONE}
                alt="Inlet iPhone browser upload page"
                className="block w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
        iPhone → Pairlinx Cloud → on your Windows desktop
      </p>
    </div>
  );
}
