/**
 * Verifies that public/download/latest.json has a matching GitHub Release asset.
 * Run before deploying a version bump: node scripts/verify-inlet-github-release.mjs
 */
import { readFileSync } from "node:fs";

const REPO = "timocore/pairlinx-website";
const manifest = JSON.parse(readFileSync("public/download/latest.json", "utf8"));
const version = manifest.version;
const tag = `v${version}`;
const assetName = `Inlet-Setup-${version}.exe`;

const apiUrl = `https://api.github.com/repos/${REPO}/releases/tags/${tag}`;
const response = await fetch(apiUrl, {
  headers: { Accept: "application/vnd.github+json", "User-Agent": "pairlinx-website-verify" },
});

if (response.status === 404) {
  console.error(`FAIL: GitHub release ${tag} does not exist on ${REPO}.`);
  console.error(`Create it and upload asset: ${assetName}`);
  process.exit(1);
}

if (!response.ok) {
  console.error(`FAIL: GitHub API ${response.status} for ${apiUrl}`);
  process.exit(1);
}

const release = await response.json();
const asset = (release.assets ?? []).find((item) => item.name === assetName);

if (!asset) {
  console.error(`FAIL: Release ${tag} exists but asset "${assetName}" is missing.`);
  console.error("Upload the installer with this exact filename (hyphens, no spaces).");
  process.exit(1);
}

console.log(`OK: ${tag} has asset ${assetName}`);
console.log(asset.browser_download_url);
