import { Link } from "react-router";
import { BRAND_NAME, LEGAL_EMAIL, PRODUCT_NAME } from "../config";
import { PLAN_LIMITS, PRO_PRICING, SUPPORTED_IMAGE_FORMATS } from "../config/pricing";
import {
  LegalList,
  LegalPageLayout,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";

export function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      intro={`These terms govern your use of ${PRODUCT_NAME}, provided by ${BRAND_NAME}. By using the service, you agree to these terms.`}
    >
      <LegalSection title="The service">
        <LegalParagraph>
          {PRODUCT_NAME} helps you send images from an iPhone browser upload page (opened via QR
          code) to a paired Windows desktop app. Sign-in is required. Images pass through QuickShot
          Cloud for delivery and are saved locally on your PC. The service supports image uploads
          only.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Free and Pro plans">
        <LegalParagraph>
          We offer a Free plan and a paid Pro plan. Plan limits may be enforced in the product.
        </LegalParagraph>
        <LegalList
          items={[
            `Free: ${PLAN_LIMITS.free.monthlyTransfers}, ${PLAN_LIMITS.free.maxFileSize}, no credit card required.`,
            `Pro: ${PLAN_LIMITS.pro.monthlyTransfers}, ${PLAN_LIMITS.pro.maxFileSize}.`,
            `Pro is billed through Stripe at ${PRO_PRICING.monthly.display}${PRO_PRICING.monthly.suffix} or ${PRO_PRICING.yearly.display}${PRO_PRICING.yearly.suffix}.`,
            "Subscriptions renew automatically until you cancel.",
            "If you exceed your plan limits, uploads may be blocked until your allowance resets or you upgrade.",
          ]}
        />
        <LegalParagraph>
          Supported image formats: {SUPPORTED_IMAGE_FORMATS}. See our{" "}
          <Link to="/pricing" className="font-semibold text-blue-400 hover:text-blue-300">
            pricing page
          </Link>{" "}
          for current plan details.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Your responsibilities">
        <LegalList
          items={[
            "Keep your account credentials secure.",
            "Use the service only for lawful purposes.",
            "You are responsible for the images you choose to upload and transfer.",
            "Make sure you have the right to share any image you send through the service.",
            "Maintain internet connectivity for pairing, upload, and delivery.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Acceptable use">
        <LegalParagraph>You agree not to misuse the service. For example, you may not:</LegalParagraph>
        <LegalList
          items={[
            "Upload illegal, harmful, or abusive content.",
            "Attempt to bypass plan limits, security controls, or fair-use restrictions.",
            "Automate uploads in a way that abuses the service or harms other users.",
            "Interfere with or disrupt the service, infrastructure, or other accounts.",
            "Reverse engineer or misuse the service except where the law allows.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Availability and changes">
        <LegalParagraph>
          We work to keep {PRODUCT_NAME} reliable, but the service may experience downtime,
          delays, or failures. Features may change, and we may suspend access if these terms are
          violated or if we need to protect the service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Billing and subscriptions">
        <LegalParagraph>
          Pro subscriptions are managed through Stripe. You can upgrade, manage, or cancel from the
          desktop app or this website where available. Refund requests are handled according to our{" "}
          <Link to="/refund-policy" className="font-semibold text-blue-400 hover:text-blue-300">
            refund policy
          </Link>
          .
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <LegalParagraph>
          The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the
          extent permitted by law, {BRAND_NAME} is not liable for indirect or consequential damages
          arising from use of the service. Our total liability for paid services is limited to the
          amount you paid us in the twelve months before the claim, where applicable.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Contact">
        <LegalParagraph>
          Questions about these terms? Email{" "}
          <a href={`mailto:${LEGAL_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
            {LEGAL_EMAIL}
          </a>
          .
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
