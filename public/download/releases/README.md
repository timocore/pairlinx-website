# Stable Inlet installers (1.0.0+)

Place archived **stable** Windows installers in this folder, for example:

- `Inlet-Setup-1.0.0.exe`
- `Inlet-Setup-1.1.0.exe`

## Rules

- **Do not** store beta `0.x.x` installers here. Beta builds are served only from `/download/` as the latest recommended file.
- Add a matching entry in `src/app/data/inletReleases.ts` when publishing a stable release.
- Keep `public/download/latest.json` pointed at the latest recommended build (beta or stable).

## Vercel

Large `.exe` files are typically hosted via GitHub Releases (see repo `.vercelignore`). When adding stable archives, upload installers to the same hosting pattern you use for the current beta installer and ensure URLs in `inletReleases.ts` match.

See `docs/INLET_RELEASES.md` for the full release workflow.
