import { History, FolderKanban, ScanText, Share2 } from "lucide-react";

const roadmapItems = [
  {
    icon: History,
    title: "Recent recovery window",
    description:
      "Optionally recover recent uploads for a limited time — separate from permanent cloud storage.",
  },
  {
    icon: FolderKanban,
    title: "Folders and projects",
    description: "Organize visual references by project, client, class, or workflow.",
  },
  {
    icon: ScanText,
    title: "OCR search",
    description: "Find screenshots by the text inside them — not just by filename or date.",
  },
  {
    icon: Share2,
    title: "iPhone Share Extension",
    description:
      "A faster native sharing flow from Photos, screenshots, Safari, and other iPhone apps.",
  },
] as const;

export function ProductRoadmapSection() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full border border-gray-600/60 bg-gray-800/50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gray-400">
            Roadmap
          </div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What&apos;s coming next
          </h2>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            QuickShotTransfer is starting with fast iPhone-to-PC image handoff. Next, we&apos;re
            exploring tools that make your visual workflow easier to search, organize, and reuse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {roadmapItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-xl border border-gray-700/80 bg-gray-800/40 p-5 backdrop-blur-sm"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-600/60 bg-gray-900/60">
                    <Icon className="h-4 w-4 text-gray-300" aria-hidden />
                  </div>
                  <span className="rounded-full border border-gray-600/60 bg-gray-900/50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                    Planned
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-gray-500">
          Roadmap items are planned and may change based on early user feedback.
        </p>
      </div>
    </section>
  );
}
