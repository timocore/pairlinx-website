import { NewsletterSignup } from "./NewsletterSignup";

export function NewsletterPreFooter() {
  return (
    <section
      aria-label="Newsletter"
      className="border-t border-gray-800/60 bg-gray-800/40 py-10 backdrop-blur-sm sm:py-12"
    >
      <div className="mx-auto max-w-md px-6 lg:px-8">
        <NewsletterSignup variant="footer" />
      </div>
    </section>
  );
}
