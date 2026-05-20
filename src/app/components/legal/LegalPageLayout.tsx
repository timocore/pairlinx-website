import { Link } from "react-router";
import type { ReactNode } from "react";
import { SUPPORT_EMAIL } from "../../config";

type LegalPageLayoutProps = {
  title: string;
  intro?: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  intro,
  lastUpdated = "May 18, 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
        {intro ? (
          <p className="mb-10 text-lg leading-relaxed text-gray-400">{intro}</p>
        ) : null}
        <div className="prose prose-invert max-w-none">{children}</div>
        <p className="mt-12 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        <p className="mt-6 text-sm text-gray-400">
          Questions?{" "}
          <Link to="/support" className="font-semibold text-blue-400 hover:text-blue-300">
            Visit support
          </Link>{" "}
          or email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-blue-400 hover:text-blue-300">
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-base leading-relaxed text-gray-400">{children}</p>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
