// /examples/golden-dsl.js

import fs from "fs";

import TaleemEngine from "../src/index.js";

// --------------------------------------------------

TaleemEngine.metaData.name =
  "Golden DSL";

TaleemEngine.metaData.base =
  "/content/images/";

// --------------------------------------------------
// titleAndSubtitle
// --------------------------------------------------

TaleemEngine.at(0)
  .titleAndSubtitle()
  .title(
    "Taleem Slides",
    0
  )
  .subtitle(
    "A calm, structured way to present ideas",
    3
  );

// --------------------------------------------------
// titleAndPara
// --------------------------------------------------

TaleemEngine.at(10)
  .titleAndPara()
  .title(
    "What is Taleem Slides?",
    10
  )
  .para(
    "Taleem Slides is a simple system that turns structured data into clear visual slides.",
    13
  );

// --------------------------------------------------
// bulletList
// --------------------------------------------------

TaleemEngine.at(20)
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

TaleemEngine.at(30)
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

TaleemEngine.at(40)
  .imageSlide()
  .image(
    "image.png",
    40
  );

// --------------------------------------------------
// imageWithTitle
// --------------------------------------------------

TaleemEngine.at(50)
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

TaleemEngine.at(60)
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

TaleemEngine.at(70)
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

TaleemEngine.at(80)
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

TaleemEngine.at(90)
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

TaleemEngine.at(100)
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

TaleemEngine.at(110)
  .progressbar()
  .bar(
    "Lesson Progress",
    60,
    110
  );

// --------------------------------------------------
// quoteSlide
// --------------------------------------------------

TaleemEngine.at(120)
  .quoteSlide()
  .quote(
    "Clarity makes learning easier.",
    120
  )
  .author(
    "— Taleem",
    123
  );

// --------------------------------------------------
// keyIdeasSlide
// --------------------------------------------------

TaleemEngine.at(130)
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
  );

// --------------------------------------------------
// eq
// --------------------------------------------------

TaleemEngine.at(140)
  .eq()

  .line(
    "$(a+b)^2$",
    140,

    [
      {
        name: "text",

        content:
          "Expand the brackets."
      }
    ]
  )

  .line(
    "$= a^2 + 2ab + b^2$",
    143,

    [
      {
        name: "image",

        content:
          "box.webp"
      }
    ]
  );

// --------------------------------------------------
// fillImage
// --------------------------------------------------

TaleemEngine.at(150)
  .fillImage()
  .image(
    "image.png",
    150
  );

// --------------------------------------------------
// focusList
// --------------------------------------------------

TaleemEngine.at(160)
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

TaleemEngine.at(170)
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

TaleemEngine.at(180)
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

TaleemEngine.at(190)
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

TaleemEngine.at(200)
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

TaleemEngine.end(210);

// --------------------------------------------------

const presentation =
  TaleemEngine.build();

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