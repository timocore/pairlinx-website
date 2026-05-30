import { Link } from "react-router";
import type { ReactNode } from "react";
import { BRAND_NAME, PRIVACY_EMAIL, PRODUCT_NAME } from "../config";
import {
  LegalList,
  LegalPageLayout,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";

function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-lg font-semibold text-gray-200">{children}</h3>;
}

function LegalOrderedList({ items }: { items: string[] }) {
  return (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="May 18, 2026">
      <LegalParagraph>
        This Privacy Policy explains how {BRAND_NAME} and {PRODUCT_NAME} handle information when you
        use the {PRODUCT_NAME} service.
      </LegalParagraph>
      <LegalParagraph>
        {PRODUCT_NAME} allows you to send images from an iPhone browser to your paired Windows PC
        using a QR-code-based connection and the {PRODUCT_NAME} desktop app.
      </LegalParagraph>
      <LegalParagraph>
        By using {PRODUCT_NAME}, you agree to this Privacy Policy.
      </LegalParagraph>

      <LegalSection title={`1. What ${PRODUCT_NAME} Does`}>
        <LegalParagraph>
          {PRODUCT_NAME} is a phone-to-PC image transfer utility.
        </LegalParagraph>
        <LegalParagraph>The service allows you to:</LegalParagraph>
        <LegalList
          items={[
            `Sign in to the ${PRODUCT_NAME} desktop app on Windows`,
            "Pair your iPhone browser session using a QR code",
            "Select and upload images from your phone",
            "Deliver those images to your paired Windows PC",
          ]}
        />
        <LegalParagraph>
          Uploaded images are temporarily processed through Inlet Cloud so they can be delivered
          to your paired device.
        </LegalParagraph>
        <LegalParagraph>
          Images received by the desktop app are saved locally on your Windows computer inside your{" "}
          {PRODUCT_NAME} folder.
        </LegalParagraph>
        <LegalParagraph>
          {PRODUCT_NAME} is designed for temporary image transfer and workflow convenience. It is
          not marketed or intended as permanent cloud storage, backup storage, or long-term archival
          storage.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. How Image Transfers Work">
        <LegalParagraph>When you upload an image from the phone upload page:</LegalParagraph>
        <LegalOrderedList
          items={[
            "Your iPhone browser uploads the selected image",
            "The image is temporarily processed through Inlet Cloud",
            "The image is delivered to your paired Windows desktop app",
            "The desktop app saves the image locally on your PC",
          ]}
        />
        <LegalParagraph>
          An internet connection is required for pairing, upload, synchronization, and delivery.
        </LegalParagraph>
        <LegalParagraph>
          We do not describe {PRODUCT_NAME} as end-to-end encrypted unless that protection is
          explicitly implemented and documented within the product.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Information We May Collect">
        <LegalParagraph>
          Depending on how you use the service, we may process the following categories of
          information:
        </LegalParagraph>

        <LegalSubheading>Account Information</LegalSubheading>
        <LegalList
          items={[
            "Email address",
            "Authentication and sign-in information",
            "Account identifiers",
          ]}
        />

        <LegalSubheading>Usage Information</LegalSubheading>
        <LegalList
          items={[
            "Transfer counts",
            "Usage limits",
            "Subscription tier",
            "Feature usage activity",
            "General product analytics",
          ]}
        />

        <LegalSubheading>Billing Information</LegalSubheading>
        <LegalParagraph>Paid subscriptions are processed by Stripe.</LegalParagraph>
        <LegalParagraph>We may receive limited subscription-related information such as:</LegalParagraph>
        <LegalList
          items={[
            "Subscription status",
            "Billing state",
            "Payment confirmation",
            "Customer identifiers",
          ]}
        />
        <LegalParagraph>We do not store complete payment card numbers on our servers.</LegalParagraph>

        <LegalSubheading>Technical and Diagnostic Information</LegalSubheading>
        <LegalParagraph>To operate and secure the service, we may process:</LegalParagraph>
        <LegalList
          items={[
            "Error logs",
            "Session metadata",
            "Device information",
            "Security and abuse-prevention events",
            "Connectivity and delivery diagnostics",
          ]}
        />

        <LegalSubheading>Uploaded Images</LegalSubheading>
        <LegalParagraph>
          We process images you choose to upload for delivery to your paired Windows PC.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. Supported Formats and Usage Limits">
        <LegalParagraph>{PRODUCT_NAME} currently supports image uploads only.</LegalParagraph>
        <LegalParagraph>Supported formats include:</LegalParagraph>
        <LegalList items={["JPG", "JPEG", "PNG", "WEBP", "HEIC", "HEIF"]} />
        <LegalParagraph>Current plan limits:</LegalParagraph>

        <LegalSubheading>Free Plan</LegalSubheading>
        <LegalList items={["30 images per month", "Up to 5 MB per image"]} />

        <LegalSubheading>Pro Plan</LegalSubheading>
        <LegalList items={["Up to 15,000 images per month", "Up to 50 MB per image"]} />

        <LegalParagraph>Limits may change as the product evolves.</LegalParagraph>
      </LegalSection>

      <LegalSection title="5. How We Use Information">
        <LegalParagraph>We use information to:</LegalParagraph>
        <LegalList
          items={[
            "Authenticate accounts and manage sign-in",
            "Pair phone browser sessions with desktop apps",
            "Deliver uploaded images to paired devices",
            "Operate Free and Pro subscription plans",
            "Enforce usage limits and prevent abuse",
            "Provide billing and subscription management",
            "Improve reliability and product performance",
            "Troubleshoot issues and provide support",
            "Protect the platform and users from misuse",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Payments">
        <LegalParagraph>Payments and subscription processing are handled by Stripe.</LegalParagraph>
        <LegalParagraph>
          Stripe may collect and process payment information according to its own policies and
          practices.
        </LegalParagraph>
        <LegalParagraph>
          You can learn more at:{" "}
          <a
            href="https://stripe.com/privacy"
            className="font-semibold text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://stripe.com/privacy
          </a>
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Retention and Storage">
        <LegalParagraph>
          Images uploaded through {PRODUCT_NAME} are processed temporarily for delivery purposes.
        </LegalParagraph>
        <LegalParagraph>
          Images delivered to your Windows PC are stored locally on your computer by the desktop
          application.
        </LegalParagraph>
        <LegalParagraph>
          We do not market {PRODUCT_NAME} as permanent cloud photo storage.
        </LegalParagraph>
        <LegalParagraph>
          Certain operational logs, subscription records, security events, and technical diagnostics
          may be retained for reliability, fraud prevention, legal compliance, and support purposes.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="8. Account and Data Requests">
        <LegalParagraph>
          If you have questions about your account, privacy, or data handling, you may contact us at:
        </LegalParagraph>
        <LegalParagraph>
          <a
            href={`mailto:${PRIVACY_EMAIL}`}
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            {PRIVACY_EMAIL}
          </a>
        </LegalParagraph>
        <LegalParagraph>
          We will review requests according to applicable law, technical limitations, security
          obligations, and operational requirements.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Third-Party Services">
        <LegalParagraph>
          {PRODUCT_NAME} may rely on third-party infrastructure and service providers to operate the
          platform, including services related to:
        </LegalParagraph>
        <LegalList
          items={[
            "Authentication",
            "Cloud infrastructure",
            "File delivery",
            "Analytics",
            "Billing and payments",
          ]}
        />
        <LegalParagraph>
          These providers may process information as necessary to perform services on our behalf.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Security">
        <LegalParagraph>
          We take reasonable measures intended to help protect the service and user information.
        </LegalParagraph>
        <LegalParagraph>
          However, no internet-based service or electronic storage system can be guaranteed to be
          completely secure.
        </LegalParagraph>
        <LegalParagraph>
          Users are responsible for maintaining the security of their own devices, accounts, and
          local files.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="11. Children's Privacy">
        <LegalParagraph>
          {PRODUCT_NAME} is not intended for children under the age required by applicable law to use
          online services independently.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Changes to This Policy">
        <LegalParagraph>
          We may update this Privacy Policy as the product and service evolve.
        </LegalParagraph>
        <LegalParagraph>
          When changes are made, we will update the “Last updated” date on this page.
        </LegalParagraph>
        <LegalParagraph>
          Continued use of the service after updates means you accept the revised policy.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Contact">
        <LegalParagraph>
          For support, privacy questions, or account-related requests:
        </LegalParagraph>
        <LegalParagraph>
          <a
            href={`mailto:${PRIVACY_EMAIL}`}
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            {PRIVACY_EMAIL}
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
