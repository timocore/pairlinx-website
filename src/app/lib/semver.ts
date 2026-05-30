export type SemverParts = {
  major: number;
  minor: number;
  patch: number;
};

/** Parses `major.minor.patch` (optional pre-release suffix is ignored). */
export function parseSemver(version: string): SemverParts | null {
  const match = version.trim().match(/^(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/);
  if (!match) return null;
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
  };
}

/** Stable public releases are version 1.0.0 and above. */
export function isStableRelease(version: string): boolean {
  const parts = parseSemver(version);
  if (!parts) return false;
  return parts.major >= 1;
}

/** Descending sort for release history (newest first). */
export function compareSemverDesc(a: string, b: string): number {
  const left = parseSemver(a);
  const right = parseSemver(b);
  if (!left || !right) return 0;
  if (left.major !== right.major) return right.major - left.major;
  if (left.minor !== right.minor) return right.minor - left.minor;
  return right.patch - left.patch;
}
