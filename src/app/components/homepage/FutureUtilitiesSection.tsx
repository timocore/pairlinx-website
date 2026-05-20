import { motion } from "motion/react";

export function FutureUtilitiesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-dashed border-gray-700/80 bg-gray-800/30 px-8 py-10"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Coming later
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            More focused utilities are planned for clipboard handoff, link sending, and visual
            organization. Nothing here is launched yet — we&apos;re building one tool at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
