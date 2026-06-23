import { Download, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";
import { PricingFaq } from "../components/pricing/PricingFaq";
import { PricingLimitsTable } from "../components/pricing/PricingLimitsTable";
import { PricingPlans } from "../components/pricing/PricingPlans";

export function PricingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="scroll-mt-24 pt-10 pb-8 sm:pt-12 sm:pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              Pricing
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Start free. Upgrade when image handoff becomes part of your daily workflow.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Inlet gives you a free way to start sending images from your iPhone browser
              to your Windows desktop. Pro is for heavier daily use, larger images, and smoother
              repeat workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-gray-800/40 pt-8 pb-12 sm:pt-10 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingPlans variant="full" />
        </div>
      </section>

      {/* Limits comparison */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingLimitsTable />
        </div>
      </section>

      <PricingFaq />

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-gray-800/80 py-10 sm:py-11">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-950/40 to-purple-950/30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Start free today. Upgrade when you need more room.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-7">
              Download Inlet for Windows and begin with the Free plan. No credit card
              required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/download" variant="primary" size="lg">
                <Download className="h-5 w-5" />
                Download for Windows
              </Button>
              <Button to="/products/inlet" variant="secondary" size="lg">
                View product
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Windows 10/11 · Free plan available · Pro for higher limits
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
