import fs from "fs";

const f = "src/app/components/demo/InteractiveQuickShotDemo.tsx";
const mdc = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 100, 105, 118, 62);
const dc = String.fromCharCode(60, 47, 100, 105, 118, 62);
const mlc = String.fromCharCode(60, 47, 109, 111, 116, 105, 111, 110, 46, 108, 105, 62);

const lines = fs.readFileSync(f, "utf8").split("\n");
lines[303] = lines[303].replace(dc, mdc);
lines[320] = lines[320].replace(mdc, dc);
if (lines[321]?.includes("motion.li")) {
  lines[321] = lines[321].replace(dc, mlc).replace(mdc, mlc);
}
if (lines[322]?.trim() === mlc) lines.splice(322, 1);
lines[410] = lines[410].replace(dc, mdc);
fs.writeFileSync(f, lines.join("\n"));
console.log("done");
