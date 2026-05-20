import fs from "fs";

const file = "src/app/components/homepage/FeaturedProductSection.tsx";
const divOpen = String.fromCharCode(60, 100, 105, 118);
const motionDivClose = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 100, 105, 118, 62);

let s = fs.readFileSync(file, "utf8");
s = s.replaceAll(
  "<motion.div className=\"flex items-center gap-4 rounded-xl bg-gray-800/80 p-4 border border-gray-700\">",
  divOpen + ' className="flex items-center gap-4 rounded-xl bg-gray-800/80 p-4 border border-gray-700">'
);
s = s.replaceAll(
  "<motion.div className=\"flex justify-center\">",
  divOpen + ' className="flex justify-center">'
);

const lines = s.split("\n");
const idx = lines.findIndex((l, i) => i > 120 && l.trim() === "</motion.div>" && lines[i + 1]?.trim() === "</motion.div>");
// line 133 area: after `            </div>\n          </motion.div>` pattern - fix the close for motion card at 43
for (let i = lines.length - 1; i >= 0; i--) {
  if (lines[i].trim() === "</motion.div>" && lines[i - 1]?.trim() === "</motion.div>" && lines[i - 2]?.trim() === "</motion.div>") {
    const indent = lines[i].match(/^\s*/)[0];
    lines[i] = indent + motionDivClose;
    break;
  }
}

fs.writeFileSync(file, lines.join("\n"));
console.log("featured fixed");
