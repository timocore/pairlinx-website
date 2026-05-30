import { Link } from "react-router";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { PRODUCT_NAME } from "../../config";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(147,51,234,0.25),transparent)]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-wide uppercase text-blue-200/90 mb-4">
            Get started
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
            Start with {PRODUCT_NAME}.
          </h2>
          <p className="text-lg text-blue-100/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Download for Windows, sign in once, and send images from your iPhone browser to your
            desktop inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/download"
                className="bg-white text-blue-700 px-10 py-4 rounded-xl inline-flex items-center gap-3 font-semibold text-lg shadow-xl shadow-black/20 ring-1 ring-white/20 hover:bg-blue-50 transition-colors"
              >
                <Download className="size-5" />
                Download for Windows
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/products/inlet"
                className="text-white/95 px-10 py-4 rounded-xl inline-flex items-center gap-3 font-semibold text-lg border border-white/25 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                View product
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-blue-100/70">
            <span>No iPhone app required</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Sign-in required</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Free plan available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
