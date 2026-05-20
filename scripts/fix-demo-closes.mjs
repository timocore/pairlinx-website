import fs from "fs";

const file = "src/app/components/demo/InteractiveQuickShotDemo.tsx";
const divClose = String.fromCharCode(60, 47, 100, 105, 118, 62);
const motionDivClose = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 100, 105, 118, 62);
const motionLiClose = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 108, 105, 62);

let s = fs.readFileSync(file, "utf8");

// All corrupted closings use motion.div; plain div opens need div close
s = s.replaceAll(motionDivClose, divClose);

// Restore motion.div / motion.li closings (0-based line indices from build errors / structure)
const motionCloseLines = new Set([
  283, 303, 321, // animated grid/list items and badge - will find by pattern instead
]);

const lines = s.split("\n");
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  // motion.li close
  if (trimmed === divClose && i > 0 && lines[i - 1].includes("neutral-500")) {
    // list item inner div - line 321 area
  }
}

// Pattern-based: after motion.div with layout or initial, closing should be motionDivClose
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("<motion.div") && (lines[i].includes("layout=") || lines[i].includes("initial="))) {
    // find closing div for this block at same indent level - scan forward
    const indent = lines[i].match(/^\s*/)[0];
    let depth = 1;
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].includes("<motion.div") && !lines[j].includes("/>")) depth++;
      if (lines[j].trim() === divClose) {
        depth--;
        if (depth === 0) {
          lines[j] = indent + motionDivClose.trim();
          break;
        }
      }
    }
  }
  if (lines[i].includes("<motion.li")) {
    const indent = lines[i].match(/^\s*/)[0];
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].trim() === divClose && lines[j].startsWith(indent)) {
        lines[j] = indent + motionLiClose.trim();
        break;
      }
    }
  }
}

// Progress bar motion.div is self-closing
// Just received badge motion.div
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("Just received") && lines[i + 1]?.trim() === divClose) {
    lines[i + 1] = lines[i + 1].replace(divClose, motionDivClose);
  }
}

fs.writeFileSync(file, lines.join("\n"));
console.log("demo closings fixed");
