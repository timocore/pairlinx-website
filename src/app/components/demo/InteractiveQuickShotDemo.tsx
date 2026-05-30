import { Grid3X3, List, Loader2, QrCode, Send, ImageIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { DesktopDeviceFrame, PhoneDeviceFrame } from "./DemoDeviceFrames";
import { desktopScreenshotFor, phoneScreenshotFor } from "./screenshotAssets";
import { useDemoMotion } from "./useDemoMotion";
import { useInteractiveDemoState } from "./useInteractiveDemoState";

type InteractiveQuickShotDemoProps = {
  className?: string;
};

const FLOW_STEPS = [
  { id: "grid", label: "Grid" },
  { id: "list", label: "List" },
  { id: "qr", label: "QR" },
  { id: "send", label: "Send" },
  { id: "received", label: "Received" },
] as const;

export function InteractiveQuickShotDemo({ className = "" }: InteractiveQuickShotDemoProps) {
  const { reducedMotion, isCompact, animate } = useDemoMotion();
  const {
    desktopState,
    phoneState,
    showReceivedBadge,
    showFlyingCard,
    sendProgress,
    isSending,
    selectDesktop,
    toggleDesktopGridList,
    runSendDemo,
  } = useInteractiveDemoState(reducedMotion, isCompact);

  const desktopSrc = desktopScreenshotFor(desktopState);
  const phoneSrc = phoneScreenshotFor(phoneState);

  const activeFlowStep =
    showReceivedBadge ? "received" : phoneState === "sending" || phoneState === "sent" ? "send" : desktopState;

  const slideVariants = animate
    ? {
        initial: { opacity: 0, x: 12 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -12 },
        transition: { duration: 0.22, ease: "easeOut" as const },
      }
    : {};

  const controlBtn = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
      active
        ? "bg-blue-600 text-white shadow-md shadow-blue-600/40 ring-2 ring-blue-400/50 scale-[1.02]"
        : "bg-gray-800/80 text-gray-300 border border-gray-600 hover:bg-gray-700/80 hover:text-white hover:border-gray-500"
    }`;

  const desktopHotspots =
    desktopState === "qr"
      ? []
      : [
          {
            id: "view-toggle",
            label: desktopState === "grid" ? "Switch to list view" : "Switch to grid view",
            left: "58%",
            top: "11%",
            width: "22%",
            height: "7%",
            onClick: toggleDesktopGridList,
            disabled: isSending,
          },
        ];

  const phoneHotspots =
    phoneState === "ready"
      ? [
          {
            id: "send-btn",
            label: "Send demo transfer",
            left: "6%",
            top: "66%",
            width: "88%",
            height: "11%",
            onClick: runSendDemo,
            disabled: isSending,
          },
        ]
      : [];

  return (
    <motion.div className={`relative max-w-full overflow-hidden ${className}`}>
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/25 via-purple-600/15 to-transparent blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl border border-gray-700/80 bg-gray-900/70 p-3 sm:p-5 backdrop-blur-sm shadow-2xl shadow-blue-950/50">
        <p className="text-center text-[11px] font-medium text-gray-400 mb-3">
          Click the controls — or try hotspots on the screenshots
        </p>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <button type="button" className={controlBtn(desktopState === "grid")} onClick={() => selectDesktop("grid")}>
            <span className="inline-flex items-center gap-1.5">
              <Grid3X3 className="h-3.5 w-3.5" />
              Grid
            </span>
          </button>
          <button type="button" className={controlBtn(desktopState === "list")} onClick={() => selectDesktop("list")}>
            <span className="inline-flex items-center gap-1.5">
              <List className="h-3.5 w-3.5" />
              List
            </span>
          </button>
          <button type="button" className={controlBtn(desktopState === "qr")} onClick={() => selectDesktop("qr")}>
            <span className="inline-flex items-center gap-1.5">
              <QrCode className="h-3.5 w-3.5" />
              QR
            </span>
          </button>
          <button
            type="button"
            onClick={runSendDemo}
            disabled={isSending}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold inline-flex items-center gap-1.5 transition-all duration-200 ${
              isSending
                ? "bg-purple-700/80 text-white ring-2 ring-purple-400/40 cursor-wait"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02]"
            }`}
          >
            {isSending ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
            Send demo
          </button>
        </div>

        {/* Flow indicator */}
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mb-5 px-1">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.id} className="flex items-center gap-1 sm:gap-2">
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-colors ${
                  activeFlowStep === step.id
                    ? "bg-blue-500/25 text-blue-200 ring-1 ring-blue-400/40"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-gray-600 text-[10px] hidden sm:inline" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Stage */}
        <div className={`relative mx-auto w-full ${isCompact ? "max-w-md" : "max-w-4xl"}`}>
          <AnimatePresence mode="wait">
            <motion.div key={desktopSrc} {...slideVariants} className="relative">
              <DesktopDeviceFrame
                src={desktopSrc}
                alt={`Inlet — ${desktopState}`}
                hotspots={desktopHotspots}
                overlay={
                  phoneState === "sending" && !isCompact ? (
                    <div className="absolute bottom-3 left-3 right-3 z-10 rounded-lg bg-slate-900/80 border border-blue-500/30 px-3 py-2 backdrop-blur-sm">
                      <p className="text-[10px] text-blue-200 font-medium mb-1">Waiting for transfer…</p>
                      <motion.div className="h-1 rounded-full bg-slate-700 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${sendProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </motion.div>
                    </div>
                  ) : null
                }
                badge={
                  <AnimatePresence>
                    {showReceivedBadge && (
                      <motion.div
                        initial={animate ? { opacity: 0, y: -10, scale: 0.9 } : false}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={animate ? { opacity: 0, scale: 0.95 } : undefined}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                        className="absolute top-[14%] left-[22%] z-30 flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-1.5 text-[10px] sm:text-xs font-bold text-white shadow-xl shadow-emerald-500/40 ring-2 ring-white/25"
                      >
                        <span className="size-2 rounded-full bg-white animate-pulse" />
                        Just received
                      </motion.div>
                    )}
                  </AnimatePresence>
                }
                flyingCard={
                  <AnimatePresence>
                    {showFlyingCard && animate && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: "55%", y: "70%" }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 0.85, 0.4], x: ["55%", "35%", "18%", "12%"], y: ["70%", "45%", "28%", "22%"] }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                        className="absolute z-40 size-14 sm:size-16 rounded-lg border-2 border-blue-400 bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg shadow-blue-500/30 flex items-center justify-center overflow-hidden pointer-events-none"
                      >
                        <ImageIcon className="size-6 text-blue-600/70" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                }
              />
            </motion.div>
          </AnimatePresence>

          {/* Phone */}
          <div
            className={
              isCompact
                ? "mt-6 mx-auto w-full max-w-[220px]"
                : "absolute right-0 sm:right-2 bottom-4 w-[38%] max-w-[220px] z-20"
            }
          >
            <AnimatePresence mode="wait">
              <motion.div key={phoneSrc} {...slideVariants}>
                <PhoneDeviceFrame
                  src={phoneSrc}
                  alt={`Inlet phone — ${phoneState}`}
                  hotspots={phoneHotspots}
                  overlay={
                    phoneState === "sending" ? (
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent px-4 pb-5 pt-10">
                        <p className="text-[10px] font-semibold text-white mb-2 flex items-center gap-2">
                          <Loader2 className="size-3 animate-spin text-blue-300" />
                          Sending to your PC…
                        </p>
                        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
                            style={{ width: `${sendProgress}%` }}
                          />
                        </div>
                        <p className="text-[9px] text-slate-300 mt-1.5">{sendProgress}%</p>
                      </div>
                    ) : phoneState === "sent" ? (
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-emerald-900/80 to-transparent px-4 pb-4 pt-8 pointer-events-none">
                        <p className="text-center text-[11px] font-bold text-emerald-300">Sent to your PC</p>
                      </div>
                    ) : null
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Transfer beam (desktop only) */}
          {!isCompact && phoneState === "sending" && animate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="absolute right-[28%] bottom-[28%] w-[32%] h-px bg-gradient-to-r from-blue-400/60 via-purple-400/40 to-transparent z-10 pointer-events-none hidden lg:block"
              aria-hidden
            />
          )}
        </div>

        <p className="mt-5 text-center text-[10px] text-gray-500/75">Interactive preview — demo only.</p>
      </div>
    </motion.div>
  );
}
