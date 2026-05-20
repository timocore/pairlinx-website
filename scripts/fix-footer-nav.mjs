import fs from "fs";

const divOpen = String.fromCharCode(60, 100, 105, 118);

let footer = fs.readFileSync("src/app/components/homepage/Footer.tsx", "utf8");
footer = footer.replace(
  "<motion.div className=\"grid md:grid-cols-4 gap-12 mb-12\">",
  divOpen + " className=\"grid md:grid-cols-4 gap-12 mb-12\">"
);
fs.writeFileSync("src/app/components/homepage/Footer.tsx", footer);

let nav = fs.readFileSync("src/app/components/homepage/Navigation.tsx", "utf8");
nav = nav.replace(
  "<motion.div className=\"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between\">",
  divOpen + " className=\"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between\">"
);
fs.writeFileSync("src/app/components/homepage/Navigation.tsx", nav);

console.log("Footer and Navigation fixed");
