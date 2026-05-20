import { Link } from "react-router";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700/50 bg-gray-900/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-1">
          <Link to="/products/quickshottransfer" className="px-3 py-2 text-[15px] font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 rounded-lg transition-colors">
            Products
          </Link>
          <Link to="/pricing" className="px-3 py-2 text-[15px] font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 rounded-lg transition-colors">
            Pricing
          </Link>
          <Link to="/download" className="px-3 py-2 text-[15px] font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 rounded-lg transition-colors">
            Download
          </Link>
          <Link to="/support" className="px-3 py-2 text-[15px] font-medium text-gray-300 hover:text-white hover:bg-gray-800/80 rounded-lg transition-colors">
            Support
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button to="/download" variant="primary" size="sm">
            <Download className="h-4 w-4" />
            Download for Windows
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <div onClick={() => setMobileMenuOpen(false)}>
                <Logo />
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-gray-300 hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700/60">
                <div className="space-y-2 py-6">
                  <Link
                    to="/products/quickshottransfer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    to="/pricing"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    to="/download"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download
                  </Link>
                  <Link
                    to="/support"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Support
                  </Link>
                </div>
                <div className="py-6">
                  <Button to="/download" variant="primary" size="md" className="w-full">
                    <Download className="h-4 w-4" />
                    Download for Windows
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
