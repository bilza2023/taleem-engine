// /examples/golden-dsl.js

import fs from "fs";

import {Taleem} from "../src/index.js";

const taleem = new Taleem();
// --------------------------------------------------

taleem.metaData.name =
  "Golden DSL";

taleem.metaData.base =
  "/content/images/";

// --------------------------------------------------
// titleAndSubtitle
// --------------------------------------------------

taleem.at(0)
  .titleAndSubtitle()
  .title(
    "taleem Slides",
    0
  )
  .subtitle(
    "A calm, structured way to present ideas",
    3
  );

// --------------------------------------------------
// titleAndPara
// --------------------------------------------------

taleem.at(10)
  .titleAndPara()
  .title(
    "What is taleem Slides?",
    10
  )
  .para(
    "taleem Slides is a simple system that turns structured data into clear visual slides.",
    13
  );

// --------------------------------------------------
// bulletList
// --------------------------------------------------

taleem.at(20)
  .bulletList()
  .bullet(
    "Slides are generated from clean data",
    20
  )
  .bullet(
    "Nothing changes behind the scenes",
    22
  )
  .bullet(
    "The author controls what appears",
    24
  )
  .bullet(
    "The same lesson looks the same everywhere",
    26
  );

// --------------------------------------------------
// twoColumnText
// --------------------------------------------------

taleem.at(30)
  .twoColumnText()
  .leftText(
    "taleem-browser shows complete slides.",
    30
  )
  .rightText(
    "taleem-player reveals ideas progressively.",
    34
  );

// --------------------------------------------------
// imageSlide
// --------------------------------------------------

taleem.at(40)
  .imageSlide()
  .image(
    "image.png",
    40
  );

// --------------------------------------------------
// imageWithTitle
// --------------------------------------------------

taleem.at(50)
  .imageWithTitle()
  .title(
    "Visual Support Matters",
    50
  )
  .image(
    "image.png",
    53
  );

// --------------------------------------------------
// imageWithCaption
// --------------------------------------------------

taleem.at(60)
  .imageWithCaption()
  .image(
    "image.png",
    60
  )
  .caption(
    "Images help anchor understanding",
    63
  );

// --------------------------------------------------
// imageLeftBulletsRight
// --------------------------------------------------

taleem.at(70)
  .imageLeftBulletsRight()
  .image(
    "image.png",
    70
  )
  .bullet(
    "Each slide focuses on one idea",
    72
  )
  .bullet(
    "Points are revealed in order",
    74
  )
  .bullet(
    "Students follow step by step",
    76
  );

// --------------------------------------------------
// imageRightBulletsLeft
// --------------------------------------------------

taleem.at(80)
  .imageRightBulletsLeft()
  .image(
    "image.png",
    80
  )
  .bullet(
    "Slides remain stable and predictable",
    82
  )
  .bullet(
    "The teacher controls the pace",
    84
  )
  .bullet(
    "Learning stays calm and focused",
    86
  );

// --------------------------------------------------
// table
// --------------------------------------------------

taleem.at(90)
  .table()
  .row(
    "Layer , Role",
    90
  )
  .row(
    "taleem-core , Defines schema",
    92
  )
  .row(
    "taleem-player , Playback",
    94
  );

// --------------------------------------------------
// barChart
// --------------------------------------------------

taleem.at(100)
  .barChart()
  .bar(
    "Clarity",
    6,
    100
  )
  .bar(
    "Structure",
    5,
    102
  )
  .bar(
    "Consistency",
    6,
    104
  );

// --------------------------------------------------
// progressbar
// --------------------------------------------------

taleem.at(110)
  .progressbar()
  .bar(
    "Lesson Progress",
    60,
    110
  );

// --------------------------------------------------
// quoteSlide
// --------------------------------------------------

taleem.at(120)
  .quoteSlide()
  .quote(
    "Clarity makes learning easier.",
    120
  )
  .author(
    "— taleem",
    123
  );

// --------------------------------------------------
// keyIdeasSlide
// --------------------------------------------------

taleem.at(130)
  .keyIdeasSlide()
  .card(
    "🧠",
    "Focus",
    130
  )
  .card(
    "📘",
    "Clarity",
    132
  )
  .card(
    "🎯",
    "Understanding",
    134
  )
  .card(
    "🧠",
    "Deliberation",
    136
  )
  ;

  // --------------------------------------------------
// eq
// --------------------------------------------------

taleem.at(140)
.eq()

.title("Expansion of a Binomial", 140, [
  {
    name: "text",
    content: "Expand the square step by step."
  },

  {
    name: "text",
    content: "Then combine like terms."
  }
])

.math("(a+b)^2", 141, [
  {
    name: "text",
    content: "The bracket multiplies itself."
  }
])

.math("= (a+b)(a+b)", 142, [
  {
    name: "image",
    content: "box.webp"
  },

  {
    name: "text",
    content: "Area model of multiplication."
  }
])

.math("= a(a+b) + b(a+b)", 143, [
  {
    name: "text",
    content: "Distribute both terms carefully."
  }
])

.math("= a^2 + ab + ab + b^2", 144, [
  {
    name: "text",
    content: "Every product is now visible."
  }
])

.line("Two middle terms are identical.", 145, [
  {
    name: "text",
    content: "Both contain ab."
  }
])

.math("= a^2 + 2ab + b^2", 146, [
  {
    name: "text",
    content: "Combine like terms."
  }
])

.line("This identity appears frequently in algebra.", 147, [
  {
    name: "text",
    content: "Used in simplification and factorization."
  }
])

.math("(x+y)^2 = x^2 + 2xy + y^2", 148, [
  {
    name: "text",
    content: "The same pattern works for all variables."
  }
])

.line("Always verify expansions carefully.", 149, [
  {
    name: "text",
    content: "Most algebra mistakes happen during expansion."
  }
]);
// --------------------------------------------------
// fillImage
// --------------------------------------------------

taleem.at(155)
  .fillImage()
  .image(
    "image.png",
    155
  );

// --------------------------------------------------
// focusList
// --------------------------------------------------

taleem.at(160)
  .focusList()
  .heading(
    "Step-by-step focus",
    160
  )
  .bullet(
    "Understand the idea",
    162
  )
  .bullet(
    "Break it into parts",
    164
  )
  .bullet(
    "Verify the result",
    166
  );

// --------------------------------------------------
// imageStrip
// --------------------------------------------------

taleem.at(170)
  .imageStrip()
  .image(
    "box.webp",
    170
  )
  .image(
    "image.png",
    172
  )
  .image(
    "whatisforce.webp",
    174
  );

// --------------------------------------------------
// imageGrid
// --------------------------------------------------

taleem.at(180)
  .imageGrid()
  .image(
    "box.webp",
    180
  )
  .image(
    "image.png",
    182
  )
  .image(
    "whatisforce.webp",
    184
  )
  .image(
    "box.webp",
    186
  );

// --------------------------------------------------
// skeleton
// --------------------------------------------------

taleem.at(190)
  .skeleton()
  .title(
    "Understanding Force",
    190
  )
  .image(
    "whatisforce.webp",
    192
  )
  .para(
    "Force is a push or pull.",
    194
  );

// --------------------------------------------------
// textGrid
// --------------------------------------------------

taleem.at(200)
  .textGrid()
  .text(
    "Clear structure improves understanding",
    200
  )
  .text(
    "Each idea should be isolated",
    202
  )
  .text(
    "Visual layout reduces confusion",
    204
  )
  .text(
    "Consistency improves learning",
    206
  );

// --------------------------------------------------

taleem.end(210);

// --------------------------------------------------

const presentation =
  taleem.compile();

// --------------------------------------------------

console.dir(
  presentation,
  {
    depth: null
  }
);

// --------------------------------------------------

fs.writeFileSync(
  "./examples/golden-dsl.json",

  JSON.stringify(
    presentation,
    null,
    2
  )
);

// --------------------------------------------------

console.log(
  "\n✅ golden-dsl.json written successfully"
);