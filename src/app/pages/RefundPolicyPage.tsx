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
    <LegalPageLayout
      title="Refund Policy"
      intro={`This policy explains how refunds work for ${PRODUCT_NAME} Pro subscriptions billed through Stripe.`}
    >
      <LegalSection title="Cancelling Pro">
        <LegalParagraph>
          You can cancel Pro at any time. After cancellation, your subscription remains active until
          the end of the current billing period unless otherwise stated at checkout or in the
          desktop app. You will not be charged for the next period after a successful cancellation.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Refund requests">
        <LegalParagraph>
          Refund requests are reviewed case by case. If you believe you were charged in error or
          had a serious billing problem, contact us with your account email and purchase details.
        </LegalParagraph>
        <LegalList
          items={[
            "We may approve refunds for duplicate charges, clear billing errors, or other exceptional cases.",
            "We do not guarantee refunds for partial months, change of mind, or unused time after cancellation.",
            "Refunds are generally not provided for abuse, misuse, or violations of our terms of service.",
            "Refunds are generally not provided when limits were exceeded through excessive or unfair usage.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How to request help">
        <LegalParagraph>
          Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
            {SUPPORT_EMAIL}
          </a>{" "}
          with the email on your account, the date of the charge, and a short description of the
          issue. You can also visit our{" "}
          <Link to="/support" className="font-semibold text-blue-400 hover:text-blue-300">
            support page
          </Link>{" "}
          for billing troubleshooting.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Stripe">
        <LegalParagraph>
          {BRAND_NAME} uses Stripe to process Pro payments. Some refund timing and receipt details
          may depend on your bank or card issuer after Stripe processes an approved refund.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
