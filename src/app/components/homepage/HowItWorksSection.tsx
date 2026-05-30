import { Smartphone, QrCode, Image, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: 1,
    icon: Laptop,
    title: 'Install for Windows app',
    description: 'Download the lightweight Windows app. Takes 30 seconds to install and set up.',
    color: 'blue',
  },
  {
    number: 2,
    icon: QrCode,
    title: 'Scan the QR code',
    description: 'Open your iPhone camera and point it at the QR code shown in the Windows app.',
    color: 'purple',
  },
  {
    number: 3,
    icon: Image,
    title: 'Send images',
    description: 'Choose screenshots or photos from your iPhone and send them instantly.',
    color: 'pink',
  },
  {
    number: 4,
    icon: Laptop,
    title: 'Keep working',
    description: 'Images appear on your PC instantly. Copy, paste, or open in any app.',
    color: 'green',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
            How it works
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            From phone to PC in four steps
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No complicated setup. No accounts to create. Just open, scan, and send.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 via-pink-500/50 to-green-500/50" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const gradientClass = {
                blue: 'from-blue-500 to-blue-600',
                purple: 'from-purple-500 to-purple-600',
                pink: 'from-pink-500 to-pink-600',
                green: 'from-green-500 to-green-600',
              }[step.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number Circle */}
                    <div className={`relative z-10 size-20 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg mb-6`}>
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '3s' }} />
                      <Icon className="size-10 text-white relative z-10" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 size-8 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center font-bold text-sm text-white shadow-md z-20">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Phone */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
                  <Smartphone className="size-16 text-blue-400" />
                  <div className="mt-3 font-semibold text-white">iPhone</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl text-blue-400"
                >
                  →
                </motion.div>
              </div>

              {/* Cloud */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
                  <div className="size-16 flex items-center justify-center text-purple-400">
                    <svg className="size-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </div>
                  <div className="mt-3 font-semibold text-sm text-white">Inlet Cloud</div>
                  <div className="text-xs text-gray-400">Instant & secure</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="text-4xl text-green-400"
                >
                  →
                </motion.div>
              </div>

              {/* PC */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700">
                  <Laptop className="size-16 text-green-400" />
                  <div className="mt-3 font-semibold text-white">Windows PC</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Instant, pending processing.</span> Temporary uploading.{' '}
                <span className="font-semibold text-white">Local desktop saving.</span> Image-only uploads.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
