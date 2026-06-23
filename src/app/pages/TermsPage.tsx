import { Link } from "react-router";
import type { ReactNode } from "react";
import { BRAND_NAME, LEGAL_EMAIL, PRODUCT_NAME } from "../config";
import { FREE_PLAN_LEGAL_LIMITS, PRO_FAIR_USE_TERMS_PARAGRAPH, PRO_PLAN_LEGAL_LIMITS } from "../config/pricing";
import {
  LegalList,
  LegalPageLayout,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";

function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-lg font-semibold text-gray-200">{children}</h3>;
}

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="June 23, 2026">
      <LegalParagraph>
        These Terms of Service (&quot;Terms&quot;) govern your use of {PRODUCT_NAME} and related
        services provided by {BRAND_NAME} (&quot;{BRAND_NAME},&quot; &quot;we,&quot; &quot;our,&quot;
        or &quot;us&quot;).
      </LegalParagraph>
      <LegalParagraph>By using {PRODUCT_NAME}, you agree to these Terms.</LegalParagraph>
      <LegalParagraph>If you do not agree, do not use the service.</LegalParagraph>

      <LegalSection title="1. The Service">
        <LegalParagraph>{PRODUCT_NAME} is a phone-to-PC image transfer utility.</LegalParagraph>
        <LegalParagraph>The service allows users to:</LegalParagraph>
        <LegalList
          items={[
            `Sign in to the ${PRODUCT_NAME} desktop app`,
            "Pair an iPhone browser session using a QR code",
            "Upload images from the phone upload page",
            "Deliver those images to a paired Windows PC",
          ]}
        />
        <LegalParagraph>
          Images are temporarily processed through Pairlinx Cloud for delivery purposes and are
          saved locally on your Windows computer by the desktop application.
        </LegalParagraph>
        <LegalParagraph>{PRODUCT_NAME} supports image uploads only.</LegalParagraph>
        <LegalParagraph>
          {PRODUCT_NAME} is intended for temporary transfer and workflow convenience. It is not
          marketed or intended as permanent cloud storage, archival storage, or backup storage.
        </LegalParagraph>
        <LegalParagraph>
          An internet connection is required for pairing, upload, synchronization, and delivery.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="2. Eligibility and Accounts">
        <LegalParagraph>You may need an account to use some or all features of the service.</LegalParagraph>
        <LegalParagraph>You agree to:</LegalParagraph>
        <LegalList
          items={[
            "Provide accurate account information",
            "Keep your credentials secure",
            "Be responsible for activity under your account",
            "Notify us if you believe your account has been compromised",
          ]}
        />
        <LegalParagraph>
          We may suspend or terminate accounts that violate these Terms or abuse the service.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Free and Pro Plans">
        <LegalParagraph>{PRODUCT_NAME} currently offers Free and Pro plans.</LegalParagraph>
        <LegalParagraph>Current plan limits include:</LegalParagraph>

        <LegalSubheading>Free Plan</LegalSubheading>
        <LegalList items={[...FREE_PLAN_LEGAL_LIMITS, "No credit card required"]} />

        <LegalSubheading>Pro Plan</LegalSubheading>
        <LegalList items={[...PRO_PLAN_LEGAL_LIMITS, "Subscription billing through Stripe"]} />

        <LegalParagraph>{PRO_FAIR_USE_TERMS_PARAGRAPH}</LegalParagraph>

        <LegalParagraph>Current Pro pricing:</LegalParagraph>
        <LegalList items={["$6.99/month", "$59.99/year"]} />

        <LegalParagraph>Plan features, limits, and pricing may change over time.</LegalParagraph>
        <LegalParagraph>
          If you exceed your plan limits, uploads or access to certain features may be restricted
          until your usage resets or you upgrade.
        </LegalParagraph>

        <LegalParagraph>Supported image formats currently include:</LegalParagraph>
        <LegalList items={["JPG", "JPEG", "PNG", "WEBP", "HEIC", "HEIF"]} />

        <LegalParagraph>
          For current details, visit the{" "}
          <Link to="/pricing" className="font-semibold text-blue-400 hover:text-blue-300">
            Pricing page
          </Link>
          .
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="4. Billing and Subscriptions">
        <LegalParagraph>Paid subscriptions are processed through Stripe.</LegalParagraph>
        <LegalParagraph>
          Subscriptions automatically renew unless canceled before the next billing cycle.
        </LegalParagraph>
        <LegalParagraph>You may manage or cancel your subscription through:</LegalParagraph>
        <LegalList
          items={[
            `The ${PRODUCT_NAME} desktop app`,
            `The ${BRAND_NAME} website`,
            "Stripe customer billing tools where available",
          ]}
        />
        <LegalParagraph>
          Refund requests are handled according to our{" "}
          <Link to="/refund-policy" className="font-semibold text-blue-400 hover:text-blue-300">
            Refund Policy
          </Link>
          .
        </LegalParagraph>
        <LegalParagraph>
          We reserve the right to change pricing, plan structure, usage limits, or available features
          at any time.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="5. Acceptable Use">
        <LegalParagraph>
          You agree to use {PRODUCT_NAME} only in compliance with applicable laws and these Terms.
        </LegalParagraph>
        <LegalParagraph>You may not:</LegalParagraph>
        <LegalList
          items={[
            "Upload illegal, harmful, abusive, or infringing content",
            "Attempt to bypass plan limits or security systems",
            "Abuse upload systems or automate excessive usage",
            "Interfere with the service, infrastructure, or other users",
            "Attempt unauthorized access to accounts or systems",
            "Reverse engineer or exploit the service except where permitted by law",
            "Use the service in a way that harms platform stability or security",
          ]}
        />
        <LegalParagraph>
          We may investigate misuse and suspend or terminate access when necessary to protect the
          service or other users.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="6. Your Content and Responsibilities">
        <LegalParagraph>
          You are responsible for the images and content you upload or transfer through the service.
        </LegalParagraph>
        <LegalParagraph>You confirm that:</LegalParagraph>
        <LegalList
          items={[
            "You have the right to upload and transfer the content",
            "Your use of the service does not violate laws or third-party rights",
            "You understand uploaded images may be temporarily processed through cloud infrastructure for delivery",
          ]}
        />
        <LegalParagraph>You remain the owner of your content.</LegalParagraph>
        <LegalParagraph>
          These Terms do not transfer ownership of your images to {BRAND_NAME}.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="7. Availability and Service Changes">
        <LegalParagraph>
          We work to keep {PRODUCT_NAME} reliable, but we do not guarantee uninterrupted or
          error-free operation.
        </LegalParagraph>
        <LegalParagraph>The service may experience:</LegalParagraph>
        <LegalList
          items={[
            "Downtime",
            "Delays",
            "Connectivity failures",
            "Upload interruptions",
            "Temporary outages",
          ]}
        />
        <LegalParagraph>We may:</LegalParagraph>
        <LegalList
          items={[
            "Add, modify, or remove features",
            "Change plan structures or limits",
            "Suspend or discontinue portions of the service",
            "Restrict access when necessary for security, maintenance, abuse prevention, or legal compliance",
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Privacy">
        <LegalParagraph>
          Your use of {PRODUCT_NAME} is also governed by our{" "}
          <Link to="/privacy" className="font-semibold text-blue-400 hover:text-blue-300">
            Privacy Policy
          </Link>
          .
        </LegalParagraph>
        <LegalParagraph>
          The Privacy Policy explains how we process account information, uploaded images, usage
          data, technical logs, and subscription information.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="9. Third-Party Services">
        <LegalParagraph>
          {PRODUCT_NAME} may rely on third-party providers and infrastructure, including services
          related to:
        </LegalParagraph>
        <LegalList
          items={[
            "Authentication",
            "Cloud hosting",
            "Payments",
            "Analytics",
            "File delivery",
          ]}
        />
        <LegalParagraph>
          Those services may be governed by their own terms and privacy practices.
        </LegalParagraph>
        <LegalParagraph>
          Current infrastructure providers include Cloudflare R2 for temporary image-object
          storage, Supabase for authentication and database services, Railway for hosted API
          infrastructure, and Stripe for subscription billing.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="10. Disclaimer of Warranties">
        <LegalParagraph>
          {PRODUCT_NAME} is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
        </LegalParagraph>
        <LegalParagraph>
          To the maximum extent permitted by law, {BRAND_NAME} disclaims warranties of any kind,
          whether express or implied, including warranties of:
        </LegalParagraph>
        <LegalList
          items={[
            "Merchantability",
            "Fitness for a particular purpose",
            "Non-infringement",
            "Availability",
            "Reliability",
          ]}
        />
        <LegalParagraph>We do not guarantee that:</LegalParagraph>
        <LegalList
          items={[
            "The service will always be available",
            "Transfers will always complete successfully",
            "The service will be uninterrupted or error-free",
            "Uploaded files will never be lost, delayed, or corrupted",
          ]}
        />
        <LegalParagraph>
          Users are responsible for maintaining their own backups and local file management.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="11. Limitation of Liability">
        <LegalParagraph>
          To the maximum extent permitted by law, {BRAND_NAME} will not be liable for:
        </LegalParagraph>
        <LegalList
          items={[
            "Indirect damages",
            "Incidental damages",
            "Consequential damages",
            "Lost profits",
            "Lost data",
            "Business interruption",
          ]}
        />
        <LegalParagraph>
          Our total liability related to paid services will not exceed the amount you paid to us
          during the twelve months before the event giving rise to the claim.
        </LegalParagraph>
        <LegalParagraph>
          Some jurisdictions do not allow certain limitations, so some of these limitations may not
          apply to you.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="12. Termination">
        <LegalParagraph>You may stop using the service at any time.</LegalParagraph>
        <LegalParagraph>We may suspend or terminate access if:</LegalParagraph>
        <LegalList
          items={[
            "These Terms are violated",
            "Abuse or security risks are detected",
            "Required by law",
            "Necessary to protect the service or users",
          ]}
        />
        <LegalParagraph>
          Certain sections of these Terms will continue to apply after termination, including
          liability limitations and dispute-related provisions.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="13. Changes to These Terms">
        <LegalParagraph>We may update these Terms as the product evolves.</LegalParagraph>
        <LegalParagraph>
          When updates are made, we will revise the &quot;Last updated&quot; date on this page.
        </LegalParagraph>
        <LegalParagraph>
          Continued use of the service after changes means you accept the updated Terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="14. Contact">
        <LegalParagraph>Questions about these Terms?</LegalParagraph>
        <LegalParagraph>
          Contact:{" "}
          <a href={`mailto:${LEGAL_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
            {LEGAL_EMAIL}
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
