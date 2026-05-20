import { X, Check } from "lucide-react";

const beforeItems = [
  "Email yourself screenshots",
  "Wait for cloud folders",
  "Use cables or messy imports",
  "Lose focus while moving images",
];

const afterItems = [
  "Scan the QR code",
  "Send images from your iPhone browser",
  "Images appear on your Windows PC",
  "Copy, preview, open folder, and keep working",
];

export function BeforeAfterSection() {
  return (
    <section className="py-24 sm:py-32 bg-gray-800/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4 border border-purple-500/30">
            The friction
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Every workaround slows you down a little.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Screenshots happen on your phone. Work happens on your PC. The gap between them should not
            require your inbox, a sync folder, or a cable.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-red-500/20 bg-gray-900/60 p-8 backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 text-red-300 text-xs font-semibold uppercase tracking-wide mb-6 border border-red-500/25">
              Before
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <X className="h-4 w-4 text-red-400" />
                  </span>
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-green-500/25 bg-gradient-to-br from-blue-900/30 via-gray-800/50 to-purple-900/30 p-8 backdrop-blur-sm shadow-xl shadow-blue-600/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 text-green-300 text-xs font-semibold uppercase tracking-wide mb-6 border border-green-500/25">
              With QuickShotTransfer
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-4 w-4 text-green-400" />
                  </span>
                  <span className="text-gray-100 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
