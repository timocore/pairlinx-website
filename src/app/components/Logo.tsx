import { Link } from "react-router";

export function Logo() {
  return (
    <Link to="/" aria-label="Pairlinx" className="flex items-center gap-0.5 group">
      <div className="relative flex h-[34px] w-[34px] items-center justify-center">
        <img
          src="/brand/pairlinx-logo-icon.png"
          alt=""
          aria-hidden="true"
          className="h-[34px] w-[34px] object-contain transition-opacity group-hover:opacity-95"
        />
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
