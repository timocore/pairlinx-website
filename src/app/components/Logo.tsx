import { Link } from "react-router";
import { BRAND_NAME } from "../config";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl blur-sm opacity-40 group-hover:opacity-60 transition-opacity"></div>
        <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-xl group-hover:shadow-blue-600/40 transition-all">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.3"/>
            <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.3"/>
            <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.3"/>
            <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.6"/>
          </svg>
        </div>
      </div>
      <span className="text-[17px] font-bold tracking-tight text-white group-hover:text-gray-50 transition-colors">
        {BRAND_NAME}
      </span>
    </Link>
  );
}
