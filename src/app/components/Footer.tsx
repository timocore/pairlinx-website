import { Link } from "react-router";
import { Logo } from "./Logo";
import { BRAND_NAME, SUPPORT_EMAIL } from "../config";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-gray-400 max-w-xs">
              Simple utilities for faster phone-to-computer workflows.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/quickshottransfer" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  QuickShotTransfer
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal & support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[15px] text-gray-400 hover:text-white transition-colors">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
