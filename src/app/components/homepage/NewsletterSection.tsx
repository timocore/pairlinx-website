import { motion } from "motion/react";
import { NewsletterSignup } from "../NewsletterSignup";

export function NewsletterSection() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <NewsletterSignup variant="inline" />
        </motion.div>
      </div>
    </section>
  );
}
