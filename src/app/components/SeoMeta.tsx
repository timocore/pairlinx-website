import { useEffect } from "react";
import { useLocation } from "react-router";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../config";

type SeoEntry = {
  title: string;
  description: string;
};

const SEO_BY_PATH: Record<string, SeoEntry> = {
  "/": {
    title: "Pairlinx — Simple utilities for phone and computer workflows",
    description:
      "Pairlinx builds focused cross-device utilities that make phone-to-computer workflows faster. Start with Inlet for iPhone-to-PC image handoff.",
  },
  "/products/inlet": {
    title: "Inlet — Send images from iPhone to PC in seconds",
    description:
      "Inlet is an instant visual capture inbox for iPhone-to-Windows workflows. Send screenshots, photos, and visual references from your phone browser to your PC.",
  },
  "/pricing": {
    title: "Inlet Pricing — Free and Pro plans",
    description:
      "Start free with 30 image transfers per month or upgrade to Pro for up to 15,000 images/month, 50 MB images, and fair use for daily iPhone-to-PC workflows.",
  },
  "/download": {
    title: "Download Inlet for Windows",
    description:
      "Download Inlet for Windows and send images from your iPhone browser to your paired PC using QR-based upload.",
  },
  "/releases": {
    title: "Inlet release history — Stable downloads",
    description:
      "Browse archived Inlet stable release installers and release notes. Beta builds are latest-only on the download page until version 1.0.0.",
  },
  "/support": {
    title: "Inlet Support — Setup, uploads, billing, and privacy help",
    description:
      "Get help with Inlet installation, QR pairing, image uploads, billing, privacy requests, and troubleshooting.",
  },
  "/contact": {
    title: "Contact Pairlinx",
    description:
      "Contact Pairlinx for Inlet support, billing questions, privacy requests, partnerships, and general questions.",
  },
  "/privacy": {
    title: "Privacy Policy — Pairlinx",
    description:
      "Learn how Pairlinx and Inlet handle account information, uploaded images, usage data, billing status, and support requests.",
  },
  "/terms": {
    title: "Terms of Service — Pairlinx",
    description:
      "Review the terms that govern your use of Inlet and Pairlinx services.",
  },
  "/refund-policy": {
    title: "Refund Policy — Pairlinx",
    description:
      "Learn how refunds, cancellations, and billing support work for Inlet Pro subscriptions.",
  },
};

const NOT_FOUND_SEO: SeoEntry = {
  title: "Page not found — Pairlinx",
  description: "The page you are looking for may have moved or the link may be incorrect.",
};

function upsertMetaDescription(content: string) {
  const existingTag = document.querySelector('meta[name="description"]');
  if (existingTag) {
    existingTag.setAttribute("content", content);
    return;
  }

  const tag = document.createElement("meta");
  tag.setAttribute("name", "description");
  tag.setAttribute("content", content);
  document.head.appendChild(tag);
}

function upsertMetaTag(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  const existingTag = document.querySelector(selector);
  if (existingTag) {
    existingTag.setAttribute("content", content);
    return;
  }

  const tag = document.createElement("meta");
  tag.setAttribute(attribute, key);
  tag.setAttribute("content", content);
  document.head.appendChild(tag);
}

function normalizeUrl(baseUrl: string, pathname: string): string {
  const trimmedBase = baseUrl.replace(/\/+$/, "");
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${trimmedBase}${normalizedPath}`;
}

export function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = SEO_BY_PATH[pathname] ?? NOT_FOUND_SEO;
    const canonicalUrl = normalizeUrl(SITE_URL, pathname);
    const ogImageUrl = normalizeUrl(SITE_URL, DEFAULT_OG_IMAGE);

    document.title = entry.title;
    upsertMetaDescription(entry.description);

    upsertMetaTag('meta[property="og:title"]', "property", "og:title", entry.title);
    upsertMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      entry.description,
    );
    upsertMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    upsertMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMetaTag('meta[property="og:image"]', "property", "og:image", ogImageUrl);

    upsertMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMetaTag('meta[name="twitter:title"]', "name", "twitter:title", entry.title);
    upsertMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      entry.description,
    );
    upsertMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImageUrl);
  }, [pathname]);

  return null;
}
