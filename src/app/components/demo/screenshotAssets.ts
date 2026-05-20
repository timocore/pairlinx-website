/** Paths under public/product-screenshots/ — replace PNGs anytime; names stay stable. */
export const PRODUCT_SCREENSHOTS = {
  desktop: {
    grid: "/product-screenshots/desktop-grid.png",
    list: "/product-screenshots/desktop-list.png",
    qr: "/product-screenshots/desktop-settings-qr.png",
    /** Optional alternates from your Desktop folder */
    gridAlt: "/product-screenshots/desktop-grid2.png",
    listAlt: "/product-screenshots/desktop-list2.png",
    qrAlt: "/product-screenshots/desktop-settings-qr2.png",
    gridCard: "/product-screenshots/desktop-grid-card.png",
  },
  phone: {
    ready: "/product-screenshots/phone-ready.png",
    sending: "/product-screenshots/phone-sending.png",
    sent: "/product-screenshots/phone-sent.png",
    readyAlt: "/product-screenshots/phone-ready-alt.png",
  },
} as const;

export type DesktopDemoView = "grid" | "list" | "qr";
export type PhoneDemoState = "ready" | "sending" | "sent";

export function desktopScreenshotFor(view: DesktopDemoView): string {
  switch (view) {
    case "list":
      return PRODUCT_SCREENSHOTS.desktop.list;
    case "qr":
      return PRODUCT_SCREENSHOTS.desktop.qr;
    default:
      return PRODUCT_SCREENSHOTS.desktop.grid;
  }
}

export function phoneScreenshotFor(state: PhoneDemoState): string {
  switch (state) {
    case "sending":
      return PRODUCT_SCREENSHOTS.phone.sending;
    case "sent":
      return PRODUCT_SCREENSHOTS.phone.sent;
    default:
      return PRODUCT_SCREENSHOTS.phone.ready;
  }
}
