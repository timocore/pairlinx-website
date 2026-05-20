import { Target, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";

const principles = [
  {
    icon: Target,
    title: "Focused utilities",
    description:
      "Each tool does one job well — not a bloated suite trying to replace everything on your devices.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Cross-device workflows",
    description:
      "Built for the moments when your phone captures something and your computer is where the work happens.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Built to reduce friction",
    description:
      "Less hunting, fewer steps, and fewer interruptions between capture and using what you captured.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function PlatformPrinciplesSection() {
  return (
    <section className="bg-gray-800/40 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
            How we build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Platform principles
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A consistent approach across every utility we ship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 backdrop-blur-sm hover:border-gray-600 transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}
                >
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
