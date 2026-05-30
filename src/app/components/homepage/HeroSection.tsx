import { Link } from "react-router";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME, PRODUCT_NAME } from "../../config";
import { HeroProductPlaceholder } from "./HeroProductPlaceholder";

export function HeroSection() {
  return (
    <section className="relative pb-8 sm:pb-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl animate-pulse"
        />
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-full blur-3xl animate-pulse [animation-delay:1s]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-4 lg:pt-14 lg:pb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5"
        >
          <div className="text-center lg:col-span-2 lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              <Sparkles className="size-4" />
              {BRAND_NAME}
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Simple utilities that make your phone and computer work better together.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {BRAND_NAME} builds focused cross-device tools that remove friction from everyday
              phone-to-computer workflows.
            </p>

            <p className="text-sm text-gray-400 mb-6">
              <span className="text-blue-300 font-medium">{PRODUCT_NAME}</span> is our first product.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                to="/products/inlet"
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
          </div>

          <div className="flex w-full min-w-0 justify-center pt-0 lg:justify-end lg:pt-7 xl:pt-8">
            <HeroProductPlaceholder />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
