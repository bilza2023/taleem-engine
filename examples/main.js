// /examples/main.js

import fs from "fs";

import TaleemEngine from "../src/index.js";

TaleemEngine.metaData.base =
  "/content/images/";

// --------------------------------------------------

TaleemEngine.at(0)
  .bulletList()
  .bullet("Point 1", 0)
  .bullet("Point 2", 3);

// --------------------------------------------------

TaleemEngine.at(6)
  .focusList()
  .heading("Core Principles", 6)
  .bullet("Clarity comes from structure", 7)
  .bullet("State defines everything", 9)
  .bullet("Deterministic behavior", 11)
  .bullet("Player stays dumb", 13);

// --------------------------------------------------

TaleemEngine.at(16)
  .skeletonSlide()
  .title("What is Algebra?", 16)
  .para(
    "Algebra uses symbols to represent numbers.",
    19
  )
  .image(
    "/content/images/box.webp",
    22
  );

// --------------------------------------------------

TaleemEngine.at(28)
  .eq()

  .line(
    "2x + 3 = 7",
    28,

    [
      {
        name: "text",

        content:
          "Move constant to right side."
      }
    ]
  )

  .line(
    "2x = 7 - 3",
    31,

    [
      {
        name: "text",

        content:
          "Subtract 3 from both sides."
      }
    ]
  )

  .line(
    "2x = 4",
    34,

    [
      {
        name: "image",

        content:
          "/content/images/box.webp"
      }
    ]
  )

  .line(
    "x = 2",
    37,

    [
      {
        name: "text",

        content:
          "Divide both sides by 2."
      }
    ]
  );

// --------------------------------------------------

TaleemEngine.at(44)
  .table()
  .row(
    "Name, Age, City",
    44
  )
  .row(
    "Bilal, 20, Lahore",
    46
  )
  .row(
    "Ali, 19, Karachi",
    48
  );

// --------------------------------------------------

TaleemEngine.at(52)
  .barChart()
  .bar("Math", 90, 52)
  .bar("Physics", 70, 54)
  .bar("Chemistry", 50, 56);

// --------------------------------------------------

TaleemEngine.at(60)
  .progressbar()
  .bar("Course Progress", 75, 60)
  .bar("Assignments", 40, 62)
  .bar("Revision", 90, 64);

// --------------------------------------------------

TaleemEngine.end(70);

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
  "./examples/main.json",

  JSON.stringify(
    presentation,
    null,
    2
  )
);

// --------------------------------------------------

console.log(
  "\n✅ main.json written successfully"
);