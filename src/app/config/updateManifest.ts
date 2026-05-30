import { BRAND_NAME, PRODUCT_NAME, SITE_URL } from "../config";
import {
  INLET_DESKTOP_VERSION,
  INLET_INSTALLER_URL,
  INLET_RELEASE_NOTES_URL,
  INLET_UPDATE_MANIFEST_URL,
} from "./inletDownload";

/**
 * Desktop update check payload served at `/download/latest.json`.
 * Today this file describes Inlet; future Pairlinx products can use the same
 * shape with a different `product` value (and product-specific URLs).
 */
export type PairlinxUpdateManifest = {
  company: string;
  product: string;
  version: string;
  required: boolean;
  downloadUrl: string;
  installerUrl: string;
  releaseNotesUrl: string;
};

/** Canonical manifest URL (Inlet checks this in Step 28). */
export { INLET_UPDATE_MANIFEST_URL as UPDATE_MANIFEST_URL };

/** Inlet manifest fields — keep in sync with `public/download/latest.json`. */
export const INLET_UPDATE_MANIFEST: PairlinxUpdateManifest = {
  company: BRAND_NAME,
  product: PRODUCT_NAME,
  version: INLET_DESKTOP_VERSION,
  required: false,
  downloadUrl: `${SITE_URL}/download`,
  installerUrl: INLET_INSTALLER_URL,
  releaseNotesUrl: INLET_RELEASE_NOTES_URL,
};
