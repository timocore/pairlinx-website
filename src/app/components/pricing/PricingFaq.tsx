import { PRICING_FAQ } from "../../config/pricing";

export function PricingFaq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-800/40 scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Common questions</h2>
          <p className="text-sm text-gray-400">
            Billing, limits, cancellation, and how QuickShotTransfer handles your images.
          </p>
        </div>

        <div className="space-y-6">
          {PRICING_FAQ.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-gray-700/80 bg-gray-800/50 p-6 ring-1 ring-white/5"
            >
              <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
