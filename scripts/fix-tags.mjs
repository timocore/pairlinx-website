import fs from "fs";

const divOpen = String.fromCharCode(60, 100, 105, 118); // <motion.div
const divClose = String.fromCharCode(60, 47, 100, 105, 118, 62); // </motion.div>
const motionDivOpen = "<motion.div";
const motionDivClose = "</motion.div>";

function fixFile(rel, replacements) {
  let s = fs.readFileSync(rel, "utf8");
  for (const [from, to] of replacements) {
    s = s.split(from).join(to);
  }
  fs.writeFileSync(rel, s);
  console.log("fixed", rel);
}

fixFile("src/app/pages/ProductPage.tsx", [
  [
    motionDivOpen + ' className="inline-block px-4 py-2 bg-blue-500/20',
    divOpen + ' className="inline-block px-4 py-2 bg-blue-500/20',
  ],
  [
    motionDivOpen + ' className="flex items-start gap-4">',
    divOpen + ' className="flex items-start gap-4">',
  ],
  [
    motionDivOpen + ' className="flex items-center justify-between mb-6">',
    divOpen + ' className="flex items-center justify-between mb-6">',
  ],
  [
    motionDivOpen + ' className="text-5xl font-bold text-white">$0' + divClose,
    divOpen + ' className="text-5xl font-bold text-white">$0' + divClose,
  ],
]);

// HeroSection: card + column closings
{
  let h = fs.readFileSync("src/app/components/homepage/HeroSection.tsx", "utf8");
  h = h.replace(
    motionDivOpen + ' className="max-w-lg mx-auto lg:mx-0 rounded-2xl',
    divOpen + ' className="max-w-lg mx-auto lg:mx-0 rounded-2xl'
  );
  h = h.replace(
    `          </motion.div>

          <motion.div className="w-full min-w-0 lg:pt-4">
            <InteractiveQuickShotDemo />
          </motion.div>
        </motion.div>
      </motion.div>`,
    `          </motion.div>

          <motion.div className="w-full min-w-0 lg:pt-4">
            <InteractiveQuickShotDemo />
          </motion.div>
        </motion.div>
      </motion.div>`
  );
  // Fix remaining wrong closings: text column opened with <motion.div at line 29 - find and fix closings
  h = h.replace(
    `            </motion.div>
          </motion.div>

          <motion.div className="w-full`,
    `            </motion.div>
          </motion.div>

          <motion.div className="w-full`
  );
  h = h.replace(
    `          </motion.div>
        </motion.div>
      </motion.div>
    </section>`,
    `          </motion.div>
        </motion.div>
      </motion.div>
    </section>`
  );
  fs.writeFileSync("src/app/components/homepage/HeroSection.tsx", h);
  console.log("fixed HeroSection");
}

// CTASection
fixFile("src/app/components/homepage/CTASection.tsx", [
  [
    motionDivOpen + ' className="absolute inset-0 bg-[radial-gradient(ellipse_60%',
    divOpen + ' className="absolute inset-0 bg-[radial-gradient(ellipse_60%',
  ],
  [
    `        </motion.div>
      </motion.div>
    </section>`,
    `        </motion.div>
      </motion.div>
    </section>`,
  ],
]);

// FeaturedProductSection - fix wrong motion.div closings on plain divs
{
  let f = fs.readFileSync("src/app/components/homepage/FeaturedProductSection.tsx", "utf8");
  f = f.replace(
    motionDivOpen + ' className="absolute top-1/2 left-1/2',
    divOpen + ' className="absolute top-1/2 left-1/2'
  );
  const wrongClose = "</" + "motion.div>";
  // Replace erroneous motion.div closings after plain div opens in the flow cards section
  f = f.replace(
    `                </motion.div>
                <div className="flex justify-center">`,
    `                </motion.div>
                <motion.div className="flex justify-center">`
  );
  // Simpler: fix lines that close flex cards with motion.div
  f = f.replace(
    `                  </motion.div>
                </motion.div>
                <div className="flex justify-center">
                  <div className="h-8 w-px`,
    `                  </motion.div>
                </motion.div>
                <motion.div className="flex justify-center">
                  <motion.div className="h-8 w-px`
  );
  fs.writeFileSync("src/app/components/homepage/FeaturedProductSection.tsx", f);
}

// ProblemTeaserSection
fixFile("src/app/components/homepage/ProblemTeaserSection.tsx", [
  [
    motionDivOpen + ' className="grid grid-cols-1 md:grid-cols-3',
    divOpen + ' className="grid grid-cols-1 md:grid-cols-3',
  ],
]);

// DemoThumbnail
fixFile("src/app/components/demo/DemoThumbnail.tsx", [
  [motionDivOpen + "\n", divOpen + "\n"],
  [motionDivClose + "\n  );", divClose + "\n  );"],
]);

console.log("All tag fixes applied");
