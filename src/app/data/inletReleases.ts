import { SITE_URL } from "../config";
import { compareSemverDesc, isStableRelease } from "../lib/semver";

export type InletStableRelease = {
  version: string;
  releaseDate: string;
  releaseNotes: string;
  installerFilename: string;
  checksum?: string | null;
};

/**
 * Latest beta installer — the only public 0.x download.
 * Not included in stable release history; older betas are not archived.
 */
export const INLET_LATEST_BETA = {
  version: "0.1.23",
  installerFilename: "Inlet-Setup-0.1.23.exe",
} as const;

/** Stable installers live under `public/download/releases/` (>= 1.0.0 only). */
export const INLET_STABLE_RELEASES_PATH = "/download/releases";

export const INLET_RELEASE_HISTORY_PATH = "/releases";

export const INLET_STABLE_HISTORY_PLACEHOLDER =
  "Stable release history will appear here after Inlet 1.0.0.";

/**
 * Public stable release archive. Add entries when shipping >= 1.0.0.
 * Never list 0.x.x versions here.
 */
export const INLET_STABLE_RELEASES: InletStableRelease[] = [
  // {
  //   version: "1.0.0",
  //   releaseDate: "2026-06-01",
  //   releaseNotes:
  //     "First stable release of Inlet for Windows.\n\n- Pairing and upload improvements\n- Installer polish",
  //   installerFilename: "Inlet-Setup-1.0.0.exe",
  //   checksum: null,
  // },
];

export function getLatestBetaInstallerUrl(): string {
  return `${SITE_URL}/download/${INLET_LATEST_BETA.installerFilename}`;
}

export function getStableInstallerUrl(installerFilename: string): string {
  return `${SITE_URL}${INLET_STABLE_RELEASES_PATH}/${installerFilename}`;
}

/** Stable releases only (>= 1.0.0), newest first. */
export function getPublicStableReleases(): InletStableRelease[] {
  return INLET_STABLE_RELEASES.filter((release) => isStableRelease(release.version)).sort(
    (a, b) => compareSemverDesc(a.version, b.version),
  );
}

export function assertStableReleaseCatalog(): void {
  for (const release of INLET_STABLE_RELEASES) {
    if (!isStableRelease(release.version)) {
      throw new Error(
        `Inlet stable catalog must not include beta version ${release.version}. Use INLET_LATEST_BETA instead.`,
      );
    }
    if (!release.installerFilename.includes(release.version)) {
      throw new Error(
        `Installer filename should include version ${release.version}: ${release.installerFilename}`,
      );
    }
  }
}

assertStableReleaseCatalog();
