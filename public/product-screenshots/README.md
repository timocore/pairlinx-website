# Inlet product screenshots

Drop PNG screenshots here for the interactive marketing demo (`InteractiveQuickShotDemo`).

## Required files (used by the demo)

| File | Used when |
|------|-----------|
| `desktop-grid.png` | Grid view / Send demo (desktop) |
| `desktop-list.png` | List view |
| `desktop-settings-qr.png` | QR / Settings view |
| `phone-ready.png` | Grid, List, QR (phone idle) |
| `phone-sending.png` | Send demo — uploading |
| `phone-sent.png` | Send demo — sent confirmation |

Replace any file in place — keep the filename. No code changes needed.

## Optional alternates (already copied from your Desktop folder)

- `desktop-grid2.png`, `desktop-list2.png`, `desktop-settings-qr2.png`
- `phone-ready-alt.png`
- `desktop-grid-card.png` — single grid card close-up

To swap an alternate in, rename it to the required filename above (or update `src/app/components/demo/screenshotAssets.ts`).

## Tips

- Prefer PNG with consistent aspect ratio per device type.
- Desktop captures should include the app window; phone captures should include the browser upload UI.
- Keep file sizes reasonable (compress if over ~2 MB each).
