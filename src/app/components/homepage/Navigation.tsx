import { Link } from "react-router";
import { Download } from "lucide-react";
import { BRAND_NAME } from "../../config";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/60 backdrop-blur-xl border-b border-gray-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">{BRAND_NAME.charAt(0)}</span>
          </div>
          <span className="font-semibold text-lg text-white">{BRAND_NAME}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/products/quickshottransfer" className="text-sm text-gray-300 hover:text-white transition-colors">
            Products
          </Link>
          <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/download" className="text-sm text-gray-300 hover:text-white transition-colors">
            Download
          </Link>
          <Link to="/support" className="text-sm text-gray-300 hover:text-white transition-colors">
            Support
          </Link>
        </div>

        <Link
          to="/download"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/30"
        >
          <Download className="size-4" />
          Download for Windows
        </Link>
      </div>
    </nav>
  );
}
