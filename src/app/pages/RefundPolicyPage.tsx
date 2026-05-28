import { Link } from "react-router";
import { BRAND_NAME, PRODUCT_NAME, SUPPORT_EMAIL } from "../config";
import {
  LegalList,
  LegalPageLayout,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";

export function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="May 18, 2026">
      <LegalParagraph>
        This Refund Policy explains how refunds work for {PRODUCT_NAME} Pro subscriptions provided
        by {BRAND_NAME}.
      </LegalParagraph>
      <LegalParagraph>{PRODUCT_NAME} Pro subscriptions are billed through Stripe.</LegalParagraph>
      <LegalParagraph>
        By purchasing a Pro subscription, you agree to this Refund Policy.
      </LegalParagraph>

      <LegalSection title="1. Cancelling Your Subscription">
        <LegalParagraph>You may cancel your Pro subscription at any time.</LegalParagraph>
        <LegalParagraph>After cancellation:</LegalParagraph>
        <LegalList
          items={[
            "Your subscription remains active until the end of the current billing period",
            "You will not be charged again unless you resubscribe",
            "Your account may return to Free plan limits after the billing period ends",
          ]}
        />
        <LegalParagraph>
          Canceling a subscription does not automatically generate a refund for the current billing
          period.
        </LegalParagraph>
        <LegalParagraph>Subscription management may be available through:</LegalParagraph>
        <LegalList
          items={[
            `The ${PRODUCT_NAME} desktop app`,
            `The ${BRAND_NAME} website`,
            "Stripe billing tools where applicable",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Refund Eligibility">
        <LegalParagraph>Refund requests are reviewed case by case.</LegalParagraph>
        <LegalParagraph>We may approve refunds in situations such as:</LegalParagraph>
        <LegalList
          items={[
            "Duplicate charges",
            "Accidental multiple subscriptions",
            "Clear billing or technical errors",
            "Unauthorized charges verified through review",
            "Major service failures that prevented reasonable use of the paid service",
          ]}
        />
        <LegalParagraph>Refunds are not guaranteed.</LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Situations Generally Not Eligible for Refunds">
        <LegalParagraph>Refunds are generally not provided for:</LegalParagraph>
        <LegalList
          items={[
            "Partial billing periods",
            "Unused subscription time",
            "Change of mind",
            "Forgetting to cancel before renewal",
            "Reaching usage limits",
            "Incompatibility with unsupported devices or environments",
            "Temporary outages, delays, or internet connectivity issues outside our control",
            "Violations of the Terms of Service",
            "Abuse, misuse, or excessive unfair usage of the platform",
          ]}
        />
        <LegalParagraph>
          We reserve the right to deny refund requests that appear fraudulent, abusive, or intended
          to bypass plan pricing or limits.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. Free Plan Availability">
        <LegalParagraph>
          {PRODUCT_NAME} includes a Free plan that allows users to test core functionality before
          purchasing Pro.
        </LegalParagraph>
        <LegalParagraph>
          Because a Free tier is available, users are encouraged to evaluate compatibility and
          workflow fit before subscribing.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. How to Request a Refund">
        <LegalParagraph>To request billing support or a refund review, contact:</LegalParagraph>
        <LegalParagraph>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            {SUPPORT_EMAIL}
          </a>
        </LegalParagraph>
        <LegalParagraph>Please include:</LegalParagraph>
        <LegalList
          items={[
            "Your account email address",
            "Approximate charge date",
            "Payment amount if known",
            "A short description of the issue",
          ]}
        />
        <LegalParagraph>
          Providing complete information helps us review requests faster.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="6. Stripe and Payment Processing">
        <LegalParagraph>Payments are securely processed through Stripe.</LegalParagraph>
        <LegalParagraph>
          {BRAND_NAME} does not store full payment card numbers on its own servers.
        </LegalParagraph>
        <LegalParagraph>If a refund is approved:</LegalParagraph>
        <LegalList
          items={[
            "Stripe processes the refund",
            "Refund timing may vary depending on your bank or card issuer",
            "Processing times are typically outside our direct control",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Chargebacks and Payment Disputes">
        <LegalParagraph>
          If you believe a charge is incorrect, please contact us before filing a chargeback when
          possible.
        </LegalParagraph>
        <LegalParagraph>
          We may suspend or restrict accounts associated with fraudulent or abusive payment
          disputes.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="8. Changes to This Policy">
        <LegalParagraph>
          We may update this Refund Policy as the product and billing systems evolve.
        </LegalParagraph>
        <LegalParagraph>
          When updates are made, we will revise the &quot;Last updated&quot; date on this page.
        </LegalParagraph>
        <LegalParagraph>
          Continued use of the service after changes means you accept the updated policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Contact">
        <LegalParagraph>Questions about refunds or billing?</LegalParagraph>
        <LegalParagraph>
          Email:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            {SUPPORT_EMAIL}
          </a>
        </LegalParagraph>
        <LegalParagraph>
          You can also visit the{" "}
          <Link to="/support" className="font-semibold text-blue-400 hover:text-blue-300">
            Support page
          </Link>{" "}
          on the {BRAND_NAME} website.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
