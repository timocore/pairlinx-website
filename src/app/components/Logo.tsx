import { Link } from "react-router";

export function Logo() {
  return (
    <Link to="/" aria-label="Pairlinx" className="flex items-center gap-0.5 group">
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/16 to-cyan-500/16 opacity-0 blur-sm transition-opacity group-hover:opacity-70" />
        <div className="relative flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-gray-700/80 bg-gray-900/80 shadow-sm transition-colors group-hover:border-gray-600 group-hover:bg-gray-800/80">
          <img
            src="/brand/pairlinx-logo-icon.png"
            alt=""
            aria-hidden="true"
            className="h-[29px] w-[29px] object-contain"
          />
        </div>
      </div>
      <div className="flex h-[34px] items-center">
        <img
          src="/brand/pairlinx-wordmark.png"
          alt="Pairlinx"
          className="block h-6 w-auto -translate-y-[2px] object-contain transition-opacity group-hover:opacity-95"
        />
      </div>
    </Link>
  );
}
