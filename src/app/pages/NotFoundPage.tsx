import { Link } from "react-router";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function NotFoundPage() {
  return (
    <div className="relative overflow-x-hidden py-16 sm:py-20">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-blue-700/20 to-purple-600/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-700/70 bg-gray-800/45 p-8 text-center shadow-xl backdrop-blur-sm sm:p-10">
          <div className="mb-6 inline-flex">
            <Logo />
          </div>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-300 uppercase">404</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Page not found.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            The page you&apos;re looking for may have moved, or the link may be incorrect.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button to="/" variant="primary" size="md">
              Go home
            </Button>
            <Button to="/products/quickshottransfer" variant="outline" size="md">
              View QuickShotTransfer
            </Button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            <Link to="/contact" className="font-medium text-blue-400 hover:text-blue-300">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
