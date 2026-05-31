import { Link } from "react-router";
import { Download, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCT_NAME } from "../../config";
import { FeaturedProductPreview } from "./FeaturedProductPreview";

const highlights = [
  "Browser-based phone upload",
  "No iPhone app required",
  "Recent image inbox on Windows",
  "Copy, preview, and open folder",
  "Free plan available — Pro for higher limits",
];

const sectionBadgeClass =
  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium";

export function FeaturedProductSection() {
  return (
    <section id="featured-product" className="relative overflow-hidden py-14 sm:py-20">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className={`${sectionBadgeClass} mb-4 border-blue-500/30 bg-blue-500/20 text-blue-300`}>
            Featured product
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start with our flagship utility.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-5xl rounded-3xl border border-blue-500/25 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-gray-800/80 p-7 shadow-xl shadow-blue-950/20 backdrop-blur-sm sm:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-300">
                Available now
              </div>

              <h3 className="mb-4 text-4xl font-bold text-white">{PRODUCT_NAME}</h3>
              <p className="mb-6 text-xl leading-relaxed text-gray-300">
                An instant visual capture inbox for iPhone-to-PC workflows.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-gray-400">
                Send image files from your iPhone browser to your Windows PC. Images are
                temporarily processed through Pairlinx Cloud and saved locally on your desktop.
                Image-only: JPG, JPEG, PNG, WEBP, HEIC, and HEIF.
              </p>

              <ul className="mb-8 space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="mt-0.5 size-5 shrink-0 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/products/inlet"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700"
                >
                  View product
                  <ArrowRight className="size-5" />
                </Link>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-800/80 px-8 py-3.5 font-semibold text-white transition-all hover:bg-gray-700/80"
                >
                  <Download className="size-5" />
                  Download for Windows
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] overflow-visible rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] via-gray-900/20 to-gray-900/40 p-5 sm:p-6">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.14),transparent_68%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-4 top-4 h-24 rounded-full bg-blue-400/[0.06] blur-2xl"
                  aria-hidden
                />
                <FeaturedProductPreview embedded />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
