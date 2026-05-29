import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { PricingPage } from "./pages/PricingPage";
import { DownloadPage } from "./pages/DownloadPage";
import { SupportPage } from "./pages/SupportPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NewsletterConfirmedPage } from "./pages/NewsletterConfirmedPage";
import { NewsletterUnsubscribedPage } from "./pages/NewsletterUnsubscribedPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/quickshottransfer", element: <ProductPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "download", element: <DownloadPage /> },
      { path: "support", element: <SupportPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "refund-policy", element: <RefundPolicyPage /> },
      { path: "newsletter/confirmed", element: <NewsletterConfirmedPage /> },
      { path: "newsletter/unsubscribed", element: <NewsletterUnsubscribedPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
