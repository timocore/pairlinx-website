import { useState } from "react";
import { ImageIcon } from "lucide-react";
import type { DemoTransfer } from "./demoData";

type DemoThumbnailProps = {
  transfer: DemoTransfer;
  aspect?: "square" | "video";
  className?: string;
  ring?: boolean;
};

export function DemoThumbnail({
  transfer,
  aspect = "video",
  className = "",
  ring = false,
}: DemoThumbnailProps) {
  const [failed, setFailed] = useState(false);
  const showImage = transfer.src && !failed;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${transfer.gradient} ${aspect === "square" ? "aspect-square" : "aspect-[4/3]"} ${ring ? "ring-2 ring-sky-500 ring-offset-2" : ""} ${className}`}
    >
      {showImage ? (
        <img
          src={transfer.src}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <ImageIcon className="h-6 w-6 text-slate-400/70" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
