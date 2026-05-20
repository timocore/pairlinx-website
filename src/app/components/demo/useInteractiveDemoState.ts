import { useCallback, useEffect, useRef, useState } from "react";
import type { DesktopDemoView, PhoneDemoState } from "./screenshotAssets";

const SEND_DURATION_MS = 1050;
const SENT_HOLD_MS = 1800;
const RESET_MS = 4800;

export type InteractiveDemoState = {
  desktopState: DesktopDemoView;
  phoneState: PhoneDemoState;
  showReceivedBadge: boolean;
  showFlyingCard: boolean;
  sendProgress: number;
  isSending: boolean;
};

export function useInteractiveDemoState(reducedMotion: boolean, isCompact: boolean) {
  const [desktopState, setDesktopState] = useState<DesktopDemoView>("grid");
  const [phoneState, setPhoneState] = useState<PhoneDemoState>("ready");
  const [showReceivedBadge, setShowReceivedBadge] = useState(false);
  const [showFlyingCard, setShowFlyingCard] = useState(false);
  const [sendProgress, setSendProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const timersRef = useRef<number[]>([]);
  const progressRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
    if (progressRef.current !== null) {
      window.clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const schedule = useCallback((fn: () => void, ms: number) => {
    timersRef.current.push(window.setTimeout(fn, ms));
  }, []);

  const selectDesktop = useCallback(
    (view: DesktopDemoView) => {
      if (isSending) return;
      setDesktopState(view);
      setPhoneState("ready");
      setShowReceivedBadge(false);
      setShowFlyingCard(false);
      setSendProgress(0);
    },
    [isSending],
  );

  const toggleDesktopGridList = useCallback(() => {
    if (isSending || desktopState === "qr") return;
    setDesktopState((prev) => (prev === "grid" ? "list" : "grid"));
    setPhoneState("ready");
    setShowReceivedBadge(false);
    setShowFlyingCard(false);
  }, [desktopState, isSending]);

  const runSendDemo = useCallback(() => {
    if (isSending) return;

    clearTimers();
    setIsSending(true);
    setShowReceivedBadge(false);
    setShowFlyingCard(false);
    setSendProgress(0);
    setPhoneState("sending");

    const sendingMs = reducedMotion || isCompact ? 500 : SEND_DURATION_MS;
    const sentAt = sendingMs;
    const resetPhoneAt = reducedMotion || isCompact ? sentAt + 1200 : sentAt + SENT_HOLD_MS;
    const resetAllAt = reducedMotion || isCompact ? 3000 : RESET_MS;

    if (reducedMotion || isCompact) {
      setSendProgress(100);
    } else {
      const start = Date.now();
      progressRef.current = window.setInterval(() => {
        const elapsed = Date.now() - start;
        const pct = Math.min(100, Math.round((elapsed / sendingMs) * 100));
        setSendProgress(pct);
        if (pct >= 100 && progressRef.current !== null) {
          window.clearInterval(progressRef.current);
          progressRef.current = null;
        }
      }, 40);
    }

    schedule(() => {
      setPhoneState("sent");
      setDesktopState("grid");
      setShowReceivedBadge(true);
      setShowFlyingCard(true);
      setSendProgress(100);
    }, sentAt);

    schedule(() => {
      setPhoneState("ready");
      setShowFlyingCard(false);
    }, resetPhoneAt);

    schedule(() => {
      setShowReceivedBadge(false);
      setIsSending(false);
      setSendProgress(0);
    }, resetAllAt);
  }, [clearTimers, isCompact, reducedMotion, schedule]);

  return {
    desktopState,
    phoneState,
    showReceivedBadge,
    showFlyingCard,
    sendProgress,
    isSending,
    selectDesktop,
    toggleDesktopGridList,
    runSendDemo,
  };
}
