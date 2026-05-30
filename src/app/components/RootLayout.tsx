import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsletterPreFooter } from "./NewsletterPreFooter";
import { SeoMeta } from "./SeoMeta";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <ScrollToTop />
      <SeoMeta />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <NewsletterPreFooter />
      <Footer />
    </div>
  );
}
