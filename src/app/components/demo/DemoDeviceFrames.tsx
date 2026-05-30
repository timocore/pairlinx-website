import type { ReactNode } from "react";
import { ScreenshotImage } from "./ScreenshotImage";

type Hotspot = {
  id: string;
  label: string;
  left: string;
  top: string;
  width: string;
  height: string;
  onClick: () => void;
  disabled?: boolean;
};

type DesktopDeviceFrameProps = {
  src: string;
  alt: string;
  hotspots?: Hotspot[];
  badge?: ReactNode;
  overlay?: ReactNode;
  flyingCard?: ReactNode;
};

export function DesktopDeviceFrame({
  src,
  alt,
  hotspots = [],
  badge,
  overlay,
  flyingCard,
}: DesktopDeviceFrameProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-slate-700/90 via-slate-800 to-slate-950 p-[3px] shadow-2xl shadow-blue-950/50 ring-1 ring-white/10">
      <div className="rounded-[14px] bg-slate-950 overflow-hidden ring-1 ring-black/40">
        <div className="flex h-8 items-center gap-2 border-b border-white/5 bg-slate-900/95 px-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-slate-600" />
            <span className="size-2.5 rounded-full bg-slate-600" />
            <span className="size-2.5 rounded-full bg-slate-600" />
          </div>
          <span className="flex-1 text-center text-[10px] font-medium text-slate-400 truncate">
            Inlet
          </span>
          <span className="w-8" />
        </div>

        <div className="relative bg-slate-950">
          <ScreenshotImage
            src={src}
            alt={alt}
            className="w-full max-h-[min(52vw,400px)] sm:max-h-[420px] object-contain object-top"
          />
          {overlay}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              type="button"
              disabled={spot.disabled}
              aria-label={spot.label}
              onClick={spot.onClick}
              className="absolute z-20 rounded-md border-2 border-transparent bg-blue-500/0 hover:bg-blue-400/15 hover:border-blue-400/40 focus-visible:bg-blue-400/20 focus-visible:border-blue-400/60 focus-visible:outline-none transition-colors cursor-pointer disabled:pointer-events-none"
              style={{
                left: spot.left,
                top: spot.top,
                width: spot.width,
                height: spot.height,
              }}
            />
          ))}
          {badge}
          {flyingCard}
        </div>
      </div>
    </div>
  );
}

type PhoneDeviceFrameProps = {
  src: string;
  alt: string;
  hotspots?: Hotspot[];
  overlay?: ReactNode;
};

export function PhoneDeviceFrame({ src, alt, hotspots = [], overlay }: PhoneDeviceFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="rounded-[2.25rem] bg-gradient-to-b from-neutral-700 to-neutral-950 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="rounded-[1.85rem] overflow-hidden bg-black ring-1 ring-neutral-800 relative">
          <div
            className="absolute top-2 left-1/2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90"
            aria-hidden
          />
          <ScreenshotImage src={src} alt={alt} className="w-full h-auto block" />
          {overlay}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              type="button"
              disabled={spot.disabled}
              aria-label={spot.label}
              onClick={spot.onClick}
              className="absolute z-20 rounded-lg border-2 border-transparent bg-emerald-500/0 hover:bg-emerald-400/15 hover:border-emerald-400/35 focus-visible:bg-emerald-400/20 focus-visible:border-emerald-400/50 focus-visible:outline-none transition-colors cursor-pointer disabled:pointer-events-none"
              style={{
                left: spot.left,
                top: spot.top,
                width: spot.width,
                height: spot.height,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
