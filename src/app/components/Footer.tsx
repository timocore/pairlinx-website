import { Link } from "react-router";
import { Github, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND_NAME, SOCIAL_LINKS, SUPPORT_EMAIL, type SocialLabel } from "../config";

const footerLinkClass =
  "text-[15px] text-gray-400 transition-colors duration-200 hover:text-gray-100";

const socialIconClass = "h-4 w-4";

function SocialIcon({ label }: { label: SocialLabel }) {
  if (label === "LinkedIn") return <Linkedin className={socialIconClass} />;
  if (label === "YouTube") return <Youtube className={socialIconClass} />;
  if (label === "GitHub") return <Github className={socialIconClass} />;
  return <span className="text-xs leading-none font-bold">X</span>;
}

export function Footer() {
  const activeSocialLinks = SOCIAL_LINKS.filter((link) => link.href.trim().length > 0);

  return (
    <footer className="border-t border-gray-800/60 bg-black/40 backdrop-blur-sm text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-18 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-300">
              Simple utilities for faster phone-to-computer workflows.
            </p>
            {activeSocialLinks.length > 0 ? (
              <ul className="mt-5 flex items-center gap-2.5">
                {activeSocialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-700 bg-gray-900/40 text-gray-300 transition-colors hover:border-gray-600 hover:text-gray-100"
                    >
                      <SocialIcon label={link.label} />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
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
