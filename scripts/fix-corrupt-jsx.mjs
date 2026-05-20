import fs from "fs";
import path from "path";

const root = path.resolve("g:/00_AI IN VS CODE PROJECTS/QuickShotTransfer Website/src");

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, files);
    else if (p.endsWith(".tsx")) files.push(p);
  }
  return files;
}

for (const file of walk(root)) {
  let s = fs.readFileSync(file, "utf8");
  const before = s;

  // Invalid opening tags from corruption
  s = s.replace(/<motion className=/g, "<motion.div className=");
  s = s.replace(/<motion>/g, "<div>");
  s = s.replace(/<\/motion>/g, "</div>");

  // DemoThumbnail: static wrapper
  if (file.includes("DemoThumbnail")) {
    s = s.replace(/<motion\.motion/g, "<motion.div");
    s = s.replace(
      /return \(\s*<motion\.motion/g,
      "return (\n    <div"
    );
    s = s.replace(/<motion\.div\n/g, "<div\n");
    s = s.replace(/<\/motion\.motion>/g, "</div>");
  }

  if (s !== before) {
    fs.writeFileSync(file, s);
    console.log("fixed:", path.relative(root, file));
  }
}
