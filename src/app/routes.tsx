import React from "react";
import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { PricingPage } from "./pages/PricingPage";
import { DownloadPage } from "./pages/DownloadPage";
import { SupportPage } from "./pages/SupportPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { RefundPolicyPage } from "./pages/RefundPolicyPage";

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
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "refund-policy", element: <RefundPolicyPage /> },
    ],
  },
]);
