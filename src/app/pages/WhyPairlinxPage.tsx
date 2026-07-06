import { Link } from "react-router";
import {
  LegalList,
  LegalParagraph,
  LegalSection,
} from "../components/legal/LegalPageLayout";
import { BRAND_NAME, PRODUCT_NAME } from "../config";

export function WhyPairlinxPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-300">
          Why {BRAND_NAME}
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Why {BRAND_NAME} exists
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-gray-300">
          {BRAND_NAME} removes the tiny interruptions that break your flow, so you can stay
          focused on the work that matters.
        </p>

        <div className="prose prose-invert max-w-none">
          <LegalSection title="Technology is powerful. Interruptions still win.">
            <LegalParagraph>
              Technology has become incredibly powerful. We can create music, build software,
              design products, edit photos, and generate ideas with AI.
            </LegalParagraph>
            <LegalParagraph>
              Yet every day, tiny interruptions still pull us away from our work.
            </LegalParagraph>
            <LegalList
              items={[
                "One screenshot",
                "One receipt",
                "One whiteboard photo",
                "One QR code",
                "One file on the wrong device",
              ]}
            />
            <LegalParagraph>
              None of them are big problems on their own. But together, they quietly steal our
              attention — again and again.
            </LegalParagraph>
          </LegalSection>

          <LegalSection title="What we believe">
            <LegalParagraph>
              We believe technology should disappear into the background. The tools you use
              shouldn&apos;t interrupt your thinking. They should help you continue it.
            </LegalParagraph>
            <LegalParagraph>That&apos;s why {BRAND_NAME} exists.</LegalParagraph>
          </LegalSection>

          <LegalSection title="One question behind every product">
            <LegalParagraph>
              Every product we build asks the same question: what tiny interruption are we removing
              next?
            </LegalParagraph>
            <LegalParagraph>
              That is why products are proof of the philosophy — not the brand itself. {PRODUCT_NAME}{" "}
              is the first expression of it: a simple way to move screenshots, photos, and images
              from your phone to your computer without breaking focus.
            </LegalParagraph>
          </LegalSection>

          <div className="mt-12 rounded-2xl border border-gray-700/70 bg-gray-800/40 p-6 sm:p-8">
            <p className="mb-4 text-base leading-relaxed text-gray-300">
              {BRAND_NAME} builds tools that connect your phone and your computer. Start with{" "}
              {PRODUCT_NAME} if you want to remove one of the most common interruptions first.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products/inlet"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                See {PRODUCT_NAME}
              </Link>
              <Link
                to="/download"
                className="inline-flex items-center justify-center rounded-xl border border-gray-600 bg-gray-900/50 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-gray-500 hover:text-white"
              >
                Try {PRODUCT_NAME}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
