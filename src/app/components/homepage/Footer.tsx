import { Link } from "react-router";
import { BRAND_NAME, PRODUCT_NAME, SUPPORT_EMAIL } from "../../config";

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">{BRAND_NAME.charAt(0)}</span>
              </div>
              <span className="font-semibold text-xl">{BRAND_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simple utilities for faster phone-to-computer workflows.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/quickshottransfer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {PRODUCT_NAME}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal & support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
