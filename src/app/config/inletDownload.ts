import { SITE_URL } from "../config";

/** Public desktop product name (Windows app). */
export const INLET_PRODUCT_NAME = "Inlet";

/** Legacy name shown where helpful during the rebrand. */
export const INLET_LEGACY_PRODUCT_NAME = "QuickShotTransfer";

export const INLET_DESKTOP_VERSION = "0.1.5";

/** URL-safe installer filename served from public/download/. */
export const INLET_INSTALLER_FILENAME = "Inlet-Setup-0.1.5.exe";

export const INLET_DOWNLOAD_PAGE_PATH = "/download";

export const INLET_INSTALLER_URL = `${SITE_URL}/download/${INLET_INSTALLER_FILENAME}`;

export const INLET_UPDATE_MANIFEST_URL = `${SITE_URL}/download/latest.json`;

export const INLET_RELEASE_NOTES_URL = `${SITE_URL}/support#release-notes`;

export const INLET_UPGRADE_STEPS = [
  "Quit Inlet from the system tray (Tray → Quit) before installing.",
  "Run the Windows installer and follow the setup steps.",
  "Reopen Inlet and sign in if prompted.",
] as const;
