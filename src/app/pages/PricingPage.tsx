import { Button } from "../components/Button";
import { PricingFaq } from "../components/pricing/PricingFaq";
import { PricingLimitsTable } from "../components/pricing/PricingLimitsTable";
import { PricingPlans } from "../components/pricing/PricingPlans";

export function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Simple pricing for faster image handoff.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Start free. Upgrade when QuickShotTransfer becomes part of your daily workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingPlans variant="full" />
        </div>
      </section>

      {/* Limits comparison */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PricingLimitsTable />
        </div>
      </section>

      <PricingFaq />

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Download QuickShotTransfer and start with the free plan today.
            </p>
            <Button to="/download" variant="primary" size="lg">
              Download for Windows
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
