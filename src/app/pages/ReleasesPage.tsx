import { Link } from "react-router";
import { Download, History, Package } from "lucide-react";
import { Button } from "../components/Button";
import {
  INLET_LATEST_BETA,
  INLET_RELEASE_HISTORY_PATH,
  INLET_STABLE_HISTORY_PLACEHOLDER,
  getPublicStableReleases,
  getStableInstallerUrl,
} from "../data/inletReleases";
import {
  INLET_DESKTOP_VERSION,
  INLET_DOWNLOAD_PAGE_PATH,
  INLET_PRODUCT_NAME,
} from "../config/inletDownload";
import { isStableRelease } from "../lib/semver";

function formatReleaseDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function ReleasesPage() {
  const stableReleases = getPublicStableReleases();
  const inBeta = !isStableRelease(INLET_DESKTOP_VERSION);

  return (
    <div className="overflow-x-hidden">
      <section className="relative scroll-mt-24 overflow-hidden pt-10 pb-8 sm:pt-12 sm:pb-10">
        <div
          className="pointer-events-none absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-300">
            <History className="h-4 w-4" />
            Release history
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {INLET_PRODUCT_NAME} releases
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Download archived installers and read release notes for stable public builds. During the
            beta, only the latest recommended installer is published on the download page.
          </p>
        </div>
      </section>

      {inBeta ? (
        <section className="pb-8">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 p-5 text-sm leading-relaxed text-amber-100/90 sm:p-6">
              <p className="font-medium text-amber-50">Beta ({INLET_LATEST_BETA.version})</p>
              <p className="mt-2 text-amber-100/85">
                Versions below 1.0.0 are beta builds. We only expose the latest beta installer on{" "}
                <Link to={INLET_DOWNLOAD_PAGE_PATH} className="font-medium text-blue-300 hover:text-blue-200">
                  {INLET_DOWNLOAD_PAGE_PATH}
                </Link>
                . Older 0.x installers are not listed here and may be removed at any time.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {stableReleases.length === 0 ? (
            <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-8 text-center backdrop-blur-sm sm:p-10">
              <Package className="mx-auto mb-4 h-10 w-10 text-gray-500" aria-hidden />
              <p className="text-base leading-relaxed text-gray-300">{INLET_STABLE_HISTORY_PLACEHOLDER}</p>
              <p className="mt-3 text-sm text-gray-500">
                Current beta: v{INLET_LATEST_BETA.version} — get it from the download page.
              </p>
              <div className="mt-6">
                <Button to={INLET_DOWNLOAD_PAGE_PATH} variant="primary" size="md">
                  Go to download
                </Button>
              </div>
            </div>
          ) : (
            <ol className="space-y-6">
              {stableReleases.map((release) => (
                <li
                  key={release.version}
                  className="rounded-2xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm sm:p-8"
                >
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
                    <h2 className="text-2xl font-bold text-white">v{release.version}</h2>
                    <time
                      dateTime={release.releaseDate}
                      className="text-sm font-medium text-gray-400"
                    >
                      {formatReleaseDate(release.releaseDate)}
                    </time>
                  </div>
                  <div className="mb-5 whitespace-pre-line text-sm leading-relaxed text-gray-300">
                    {release.releaseNotes}
                  </div>
                  <div className="flex flex-col gap-3 border-t border-gray-700 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      href={getStableInstallerUrl(release.installerFilename)}
                      download={release.installerFilename}
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                    >
                      <Download className="h-4 w-4" />
                      Download installer
                    </Button>
                    <p className="text-xs text-gray-500">
                      Checksum:{" "}
                      {release.checksum?.trim() ? (
                        <code className="break-all text-gray-400">{release.checksum}</code>
                      ) : (
                        <span className="italic text-gray-500">Not published yet</span>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>

      <section className="border-t border-gray-800/80 bg-gray-800/40 py-8">
        <div className="mx-auto max-w-3xl px-6 text-center text-sm text-gray-400 lg:px-8">
          <p>
            Looking for the latest build?{" "}
            <Link to={INLET_DOWNLOAD_PAGE_PATH} className="font-medium text-blue-400 hover:text-blue-300">
              Download {INLET_PRODUCT_NAME}
            </Link>
            . Release history path:{" "}
            <span className="text-gray-500">{INLET_RELEASE_HISTORY_PATH}</span>
          </p>
        </div>
      </section>
    </div>
  );
}
