import { Link } from "react-router";
import { Download } from "lucide-react";
import { BRAND_NAME } from "../../config";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/60 backdrop-blur-xl border-b border-gray-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3 min-w-0">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 group">
          <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md shadow-blue-500/25">
            <span className="text-white text-sm font-bold">{BRAND_NAME.charAt(0)}</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-gray-50 transition-colors">
            {BRAND_NAME}
          </span>
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
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 sm:px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-blue-600/30 text-sm sm:text-base"
        >
          <Download className="size-4 shrink-0" />
          <span className="hidden sm:inline">Download for Windows</span>
          <span className="sm:hidden">Download</span>
        </Link>
      </div>
    </nav>
  );
}
