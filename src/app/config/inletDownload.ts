import { PRODUCT_NAME, SITE_URL } from "../config";
import { INLET_LATEST_BETA, getLatestBetaInstallerUrl } from "../data/inletReleases";

/** Public desktop product name (Windows app). */
export const INLET_PRODUCT_NAME = PRODUCT_NAME;

/** Latest recommended installer (beta until 1.0.0 stable ships). */
export const INLET_DESKTOP_VERSION = INLET_LATEST_BETA.version;

/** URL-safe installer filename served from `public/download/`. */
export const INLET_INSTALLER_FILENAME = INLET_LATEST_BETA.installerFilename;

export const INLET_DOWNLOAD_PAGE_PATH = "/download";

export const INLET_INSTALLER_URL = getLatestBetaInstallerUrl();

export const INLET_UPDATE_MANIFEST_URL = `${SITE_URL}/download/latest.json`;

export const INLET_RELEASE_NOTES_URL = `${SITE_URL}/support#release-notes`;

export const INLET_UPGRADE_STEPS = [
  "Quit Inlet from the system tray (Tray → Quit) before installing.",
  "Run the Windows installer and follow the setup steps.",
  "Reopen Inlet and sign in if prompted.",
] as const;
