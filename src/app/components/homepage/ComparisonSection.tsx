import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const comparisons = [
  {
    method: 'Email',
    description: 'Works, but adds steps and clutters your inbox.',
    cons: ['Slow to compose', 'Email clutter', 'File size limits', 'Extra steps every time'],
    color: 'red',
  },
  {
    method: 'Cloud folders',
    description: 'Good for libraries, slow for quick visual handoffs.',
    cons: ['Slow sync', 'Folder clutter', 'Hard to find the right file', 'Not built for capture speed'],
    color: 'orange',
  },
  {
    method: 'Phone Link',
    description: 'Broad phone connection, not focused on visual capture.',
    cons: ['Not image-first', 'Setup complexity', 'Platform locked', 'More than you need'],
    color: 'yellow',
  },
];

export function ComparisonSection() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why not just use email, iCloud, or Phone Link?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl p-7 shadow-lg border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.method}</h3>
              <p className="text-gray-400 mb-6 text-sm">{item.description}</p>
              <ul className="space-y-3">
                {item.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <X className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
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
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-9 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Check className="size-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">QuickShotTransfer</h3>
              </div>

              <p className="mb-6 text-base text-white/90 sm:text-lg lg:text-xl">
                Built for fast iPhone-to-PC image handoff — browser upload, sign-in required, Free and Pro plans.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'Browser-based phone upload',
                  'Local images from your phone',
                  'See them appear on your PC',
                  'Copy, paste, or open instantly',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="size-4 text-white" />
                    </div>
                    <span className="text-white/95">{feature}</span>
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
