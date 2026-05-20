import fs from "fs";
import path from "path";

const transcriptPath = process.argv[2];
if (!transcriptPath) {
  console.error("Usage: node extract-transcript-writes.mjs <path-to.jsonl>");
  process.exit(1);
}

const projectRoot = path.resolve(
  path.dirname(transcriptPath),
  "../../../../../../00_AI IN VS CODE PROJECTS/QuickShotTransfer Website"
);
// Allow override via env
const root =
  process.env.PROJECT_ROOT ||
  "g:\\00_AI IN VS CODE PROJECTS\\QuickShotTransfer Website";

const lines = fs.readFileSync(transcriptPath, "utf8").split(/\r?\n/).filter(Boolean);
const latest = new Map();

for (const line of lines) {
  let row;
  try {
    row = JSON.parse(line);
  } catch {
    continue;
  }
  const content = row?.message?.content;
  if (!Array.isArray(content)) continue;

  for (const block of content) {
    if (block?.type !== "tool_use" || block?.name !== "Write") continue;
    const input = block.input;
    if (!input?.path || typeof input.contents !== "string") continue;

    let rel = input.path.replace(/\\/g, "/");
    const marker = "QuickShotTransfer Website/";
    const idx = rel.indexOf(marker);
    if (idx >= 0) rel = rel.slice(idx + marker.length);
    else if (rel.includes("QuickShotTransfer Website\\")) {
      rel = rel.split("QuickShotTransfer Website\\")[1].replace(/\\/g, "/");
    }

    if (!rel.startsWith("src/") && !rel.startsWith("public/")) continue;
    latest.set(rel, input.contents);
  }
}

const targetFiles = [
  "src/app/components/RootLayout.tsx",
  "src/app/pages/HomePage.tsx",
  "src/app/pages/ProductPage.tsx",
  "src/app/components/product/BeforeAfterSection.tsx",
  "src/app/components/homepage/Navigation.tsx",
  "src/app/components/homepage/Footer.tsx",
  "src/app/components/homepage/HeroSection.tsx",
  "src/app/components/homepage/ProblemTeaserSection.tsx",
  "src/app/components/homepage/FeaturedProductSection.tsx",
  "src/app/components/homepage/PlatformPrinciplesSection.tsx",
  "src/app/components/homepage/FutureUtilitiesSection.tsx",
  "src/app/components/homepage/CTASection.tsx",
  "src/app/components/homepage/ComparisonSection.tsx",
  "src/app/components/demo/demoData.ts",
  "src/app/components/demo/useDemoMotion.ts",
  "src/app/components/demo/DemoThumbnail.tsx",
  "src/app/components/demo/InteractiveQuickShotDemo.tsx",
  "src/app/components/demo/index.ts",
  "public/demo/README.md",
];

let written = 0;
for (const rel of targetFiles) {
  const contents = latest.get(rel);
  if (!contents) {
    console.warn("MISSING:", rel);
    continue;
  }
  const outPath = path.join(root, rel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, contents, "utf8");
  console.log("WROTE:", rel);
  written++;
}

console.log(`\nDone: ${written}/${targetFiles.length} files`);
