import { Target, Smartphone, Zap } from "lucide-react";
import { motion } from "motion/react";

const principles = [
  {
    icon: Target,
    title: "One job per app",
    description:
      "Each utility is focused on one workflow instead of trying to replace everything on your devices.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Cross-device first",
    description:
      "Built for the moments when something starts on your phone but the real work happens on your computer.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Built around the last mile",
    description:
      "Less hunting, fewer steps, and fewer interruptions between capturing something and using it.",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function PlatformPrinciplesSection() {
  return (
    <section className="bg-gray-800/40 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-10"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
            How we build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Platform principles
          </h2>
          <p className="text-base text-gray-300 font-medium leading-relaxed">
            A consistent approach across every utility we ship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-600/50 bg-gray-800/55 p-8 backdrop-blur-sm transition-all hover:border-gray-500/70 hover:bg-gray-800/70"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-5 shadow-lg`}
                >
                  <Icon className="size-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
