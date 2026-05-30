# Inlet download and release history

This site separates **beta** (0.x) distribution from **stable** (1.0.0+) archives.

## Beta builds (versions &lt; 1.0.0)

- Treated as beta/internal on the website.
- **Only the latest beta** installer is linked from [`/download`](/download).
- Configured in `src/app/data/inletReleases.ts` as `INLET_LATEST_BETA` (re-exported via `src/app/config/inletDownload.ts`).
- **No public history** for older `0.1.x` (or any `0.x.x`) installers.
- Older beta installers may be removed at any time; do not rely on permanent beta URLs.

## Stable releases (version &gt;= 1.0.0)

- Listed on [`/releases`](/releases) with version, date, notes, installer link, and optional checksum.
- Installer files live under `public/download/releases/` (e.g. `Inlet-Setup-1.0.0.exe`).
- Catalog entries live in `INLET_STABLE_RELEASES` in `src/app/data/inletReleases.ts`.
- `isStableRelease(version)` returns true when `major >= 1` (see `src/app/lib/semver.ts`).

## App update manifest

- [`/download/latest.json`](/download/latest.json) is the desktop update-check payload.
- Keep it in sync with `src/app/config/updateManifest.ts` and the latest recommended build.
- This document does not change auto-update behavior in the desktop app.

## Publishing a new stable release

1. Ship the Windows installer to your hosting (e.g. GitHub Releases) and copy/link under `/download/releases/` if served from this site.
2. Append an object to `INLET_STABLE_RELEASES` with `version`, `releaseDate`, `releaseNotes`, `installerFilename`, and `checksum` when available.
3. If the new build is the recommended default, update `INLET_LATEST_BETA` (or replace beta with stable as latest), `inletDownload.ts` exports, and `public/download/latest.json`.
4. Run `npm run build` and verify `/download`, `/download/latest.json`, and `/releases`.

## Publishing a new beta

1. Update `INLET_LATEST_BETA`, `inletDownload.ts`, and `public/download/latest.json` to the new version only.
2. Do **not** add the version to `INLET_STABLE_RELEASES`.
3. Do **not** add old beta installers to `/download/releases/`.

## Validation checklist

- `/download` — single recommended installer (current beta or latest stable).
- `/download/latest.json` — unchanged schema; correct version and URLs.
- `/releases` — empty placeholder during beta; lists only `>= 1.0.0` when catalog has entries.
- No `0.x.x` rows on `/releases`.
