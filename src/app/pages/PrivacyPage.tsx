import { BRAND_NAME, PRIVACY_EMAIL, PRODUCT_NAME } from "../config";
import { PLAN_LIMITS, SUPPORTED_IMAGE_FORMATS } from "../config/pricing";
import {
  LegalList,
  LegalPageLayout,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";

export function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={`This policy explains how ${BRAND_NAME} and ${PRODUCT_NAME} handle your information when you send images from an iPhone browser to your Windows PC.`}
    >
      <LegalSection title="What QuickShotTransfer does">
        <LegalParagraph>
          {PRODUCT_NAME} lets you pair your iPhone browser with a Windows desktop app using a QR
          code. After you sign in, you choose images on the phone upload page and send them to your
          paired PC. Images are delivered through QuickShot Cloud and saved locally in your
          QuickShotTransfer folder on Windows.
        </LegalParagraph>
        <LegalParagraph>
          {PRODUCT_NAME} is built for fast image handoff. It is not permanent cloud storage, and we
          do not market it as a backup or archive service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="How images are processed">
        <LegalList
          items={[
            "You upload images from the iPhone browser page after scanning the QR code from the Windows app.",
            "Images are temporarily processed through QuickShot Cloud so they can be delivered to your paired PC.",
            "Your Windows desktop app receives the images and saves them locally on your computer.",
            "We do not describe image delivery as end-to-end encrypted unless that protection is explicitly implemented and documented in the product.",
            "An internet connection is required for pairing, upload, and delivery.",
          ]}
        />
      </LegalSection>

      <LegalSection title="What we collect">
        <LegalParagraph>Depending on how you use the service, we may process:</LegalParagraph>
        <LegalList
          items={[
            "Account information (such as email address and sign-in credentials) required to use the service.",
            "Usage data (such as transfer counts, plan limits, and feature usage) to operate Free and Pro plans.",
            "Billing status and subscription information managed through our payment provider.",
            "Technical logs (such as errors, device/session metadata, and security events) to keep the service reliable and secure.",
            "Images you choose to upload for delivery to your paired PC during the transfer process.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Image formats and limits">
        <LegalParagraph>
          {PRODUCT_NAME} supports image uploads only: {SUPPORTED_IMAGE_FORMATS}. Free includes{" "}
          {PLAN_LIMITS.free.monthlyTransfers.toLowerCase()} with {PLAN_LIMITS.free.maxFileSize.toLowerCase()}.
          Pro includes {PLAN_LIMITS.pro.monthlyTransfers.toLowerCase()} with{" "}
          {PLAN_LIMITS.pro.maxFileSize.toLowerCase()}.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Payments">
        <LegalParagraph>
          Paid subscriptions are processed by Stripe. We do not store complete payment card numbers
          on our servers. Stripe handles payment details according to its own privacy practices.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="How we use information">
        <LegalList
          items={[
            "Authenticate your account and pair your phone browser session with your Windows app.",
            "Deliver images you choose to send to your paired PC.",
            "Enforce Free and Pro plan limits and prevent abuse.",
            "Provide billing, receipts, and subscription management for Pro users.",
            "Improve reliability, troubleshoot issues, and protect the service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Retention and deletion">
        <LegalParagraph>
          Images are processed temporarily for delivery and are saved on your Windows PC by the
          desktop app. We do not present {PRODUCT_NAME} as long-term cloud storage for your photo
          library.
        </LegalParagraph>
        <LegalParagraph>
          If you want help with account data, privacy questions, or deletion requests, contact us at{" "}
          <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
            {PRIVACY_EMAIL}
          </a>
          . We will review requests according to applicable law and our operational capabilities.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="Changes">
        <LegalParagraph>
          We may update this policy as the product evolves. We will post the updated date on this
          page. Continued use of the service after changes means you accept the updated policy.
        </LegalParagraph>
      </LegalSection>
    </LegalPageLayout>
  );
}
