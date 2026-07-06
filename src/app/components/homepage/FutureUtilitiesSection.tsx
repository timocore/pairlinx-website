import { motion } from "motion/react";

const futureTags = ["Clipboard handoff", "Link sending", "Visual organization"] as const;

export function FutureUtilitiesSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-dashed border-gray-600/55 bg-gray-800/35 px-7 py-9 sm:px-9 sm:py-10 ring-1 ring-white/[0.03]"
        >
          <h2 className="text-xl font-semibold text-gray-200 mb-3">More ways to stay in flow</h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building more focused tools for the small moments where phone work and
            desktop work don&apos;t connect cleanly. Nothing here is launched yet — one interruption
            removed at a time.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {futureTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-600/70 bg-gray-900/60 px-3 py-1 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
