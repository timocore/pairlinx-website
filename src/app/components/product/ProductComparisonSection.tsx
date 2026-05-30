import { Check, X } from "lucide-react";
import { motion } from "motion/react";

const comparisons = [
  {
    method: "Email",
    description: "Works in a pinch, but every send adds steps and inbox clutter.",
    cons: ["Extra compose steps", "Thread clutter", "Attachment limits", "Slow for quick captures"],
  },
  {
    method: "Cloud folders",
    description: "Great for libraries, not ideal when you need one image on your PC right now.",
    cons: ["Sync delays", "Folder hunting", "Not capture-first", "More setup than you need"],
  },
  {
    method: "Phone Link",
    description: "Broad phone-to-PC connection, not built around fast image handoff.",
    cons: ["Not image-first", "Heavier setup", "Platform locked", "More than quick captures need"],
  },
];

export function ProductComparisonSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-white lg:text-5xl mb-4">
            Why not just use email, iCloud, or Phone Link?
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Inlet is not trying to replace those tools. It is built for fast image handoff
            when you need a screenshot or photo on your Windows PC now.
          </p>
        </motion.div>

        <div className="mb-6 grid gap-5 md:grid-cols-3">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.method}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 shadow-md backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">{item.method}</h3>
              <p className="mb-6 text-sm text-gray-400">{item.description}</p>
              <ul className="space-y-3">
                {item.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm">
                    <X className="mt-0.5 size-5 shrink-0 text-red-400" />
                    <span className="text-gray-300">{con}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-blue-950/90 via-gray-900/95 to-purple-950/85 p-7 text-white shadow-lg sm:p-8">
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm">
                  <Check className="size-5 text-white" />
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">Inlet</h3>
              </div>

              <p className="mb-5 text-sm text-white/85 sm:text-base">
                Built for fast iPhone-to-PC image handoff — browser upload, sign-in required, Free and
                Pro plans.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Browser-based phone upload",
                  "Images from your phone, delivered to your PC",
                  "See them in your Windows inbox",
                  "Copy, preview, or open folder instantly",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-500/20 border border-green-400/30">
                      <Check className="size-3 text-green-300" />
                    </div>
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
