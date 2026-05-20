import { Mail, FolderSync, Workflow } from "lucide-react";
import { motion } from "motion/react";

const frictionCards = [
  {
    icon: Mail,
    title: "Emailing yourself screenshots",
    description: "Attachments, threads, and delays every time you need one image on your PC.",
    gradient: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: FolderSync,
    title: "Digging through sync folders",
    description: "Hunting the right file in iCloud or shared folders breaks your flow.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Workflow,
    title: "Interrupting your workflow",
    description: "Cables, imports, and workarounds pull you out of what you were doing.",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
];

export function ProblemTeaserSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Phone captures. Desktop work. The gap shouldn&apos;t slow you down.
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Everyday visual handoff is still harder than it should be.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {frictionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border border-gray-700/80 bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-sm`}
              >
                <div className={`inline-flex p-2.5 rounded-lg bg-gray-900/50 mb-4 ${card.iconColor}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
