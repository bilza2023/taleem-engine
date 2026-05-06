
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
  .image("algebra.png", 22);

// --------------------------------------------------

TaleemEngine.end(28);

// --------------------------------------------------

const presentation =
  TaleemEngine.build();

// --------------------------------------------------

console.dir(presentation, {
  depth: null
});

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