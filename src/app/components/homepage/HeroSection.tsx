import { Link } from "react-router";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME, PRODUCT_NAME } from "../../config";
import { HeroProductPlaceholder } from "./HeroProductPlaceholder";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pb-20">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-full blur-3xl animate-pulse [animation-delay:1s]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-18">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center"
        >
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <Sparkles className="size-4" />
              {BRAND_NAME}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Simple utilities that make your phone and computer work better together.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {BRAND_NAME} builds focused cross-device tools that remove friction from everyday
              phone-to-computer workflows.
            </p>

            <p className="text-sm text-gray-400 mb-8">
              <span className="text-blue-300 font-medium">{PRODUCT_NAME}</span> is our first product.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
              <Link
                to="/products/quickshottransfer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-[1.02] w-full sm:w-auto"
              >
                Explore {PRODUCT_NAME}
                <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/download"
                className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-8 py-4 rounded-xl inline-flex items-center justify-center gap-3 transition-all border border-gray-600 shadow-lg hover:shadow-xl backdrop-blur-sm w-full sm:w-auto"
              >
                <Download className="size-5" />
                Download for Windows
              </Link>
            </div>

            <div className="max-w-lg mx-auto lg:mx-0 rounded-2xl border border-gray-700/80 bg-gray-800/40 p-5 backdrop-blur-sm text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Now available
              </p>
              <p className="text-base font-semibold text-white mb-1">{PRODUCT_NAME}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Send images from your iPhone browser to your Windows PC — sign-in required, saved
                locally on your desktop.
              </p>
            </div>
          </div>

          <div className="w-full min-w-0 lg:pt-4">
            <HeroProductPlaceholder />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
