import { useEffect, useState } from "react";

export function useDemoMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactMq = window.matchMedia("(max-width: 1023px)");

    const sync = () => {
      setReducedMotion(motionMq.matches);
      setIsCompact(compactMq.matches);
    };

    sync();
    motionMq.addEventListener("change", sync);
    compactMq.addEventListener("change", sync);
    return () => {
      motionMq.removeEventListener("change", sync);
      compactMq.removeEventListener("change", sync);
    };
  }, []);

  return { reducedMotion, isCompact, animate: !reducedMotion };
}
