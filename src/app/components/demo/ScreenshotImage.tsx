import { useState } from "react";
import { ImageIcon } from "lucide-react";

type ScreenshotImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ScreenshotImage({ src, alt, className = "" }: ScreenshotImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex aspect-video w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-800 to-gray-900 px-4 text-center ${className}`}
      >
        <ImageIcon className="h-8 w-8 text-gray-500" strokeWidth={1.5} />
        <p className="text-[10px] font-medium text-gray-400">Screenshot placeholder</p>
        <p className="text-[9px] text-gray-500 break-all">{src.replace("/product-screenshots/", "")}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`block w-full h-auto ${className}`}
    />
  );
}
