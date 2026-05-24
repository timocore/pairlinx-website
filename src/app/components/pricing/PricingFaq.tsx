import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { PRICING_FAQ } from "../../config/pricing";

export function PricingFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-12 sm:pt-14 sm:pb-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Common pricing questions
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Clear answers about Free, Pro, billing, and limits.
          </p>
        </div>

        <div className="space-y-3">
          {PRICING_FAQ.map((faq, index) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-gray-600 transition-colors backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-base font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-gray-700/50">
                    <p className="text-sm sm:text-[0.9375rem] text-gray-300 leading-relaxed pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Still have a billing question?{" "}
          <Link to="/support" className="text-gray-400 hover:text-blue-300 transition-colors">
            Contact support
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
