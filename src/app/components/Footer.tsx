import { Link } from "react-router";
import { Logo } from "./Logo";
import { BRAND_NAME, SUPPORT_EMAIL } from "../config";

const footerLinkClass =
  "text-[15px] text-gray-400 transition-colors duration-200 hover:text-gray-100";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/60 bg-black/40 backdrop-blur-sm text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-18 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-300">
              Simple utilities for faster phone-to-computer workflows.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-100">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/quickshottransfer" className={footerLinkClass}>
                  QuickShotTransfer
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={footerLinkClass}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/download" className={footerLinkClass}>
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-100">Legal & support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className={footerLinkClass}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className={footerLinkClass}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={footerLinkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className={footerLinkClass}>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-100">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className={footerLinkClass}>
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800/60 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
