// /examples/main.js
import fs from "fs";
import TaleemEngine from "../src/index.js";

// --------------------------------------------------
// config
// --------------------------------------------------

TaleemEngine.metaData.base =
  "/content/images/";

// --------------------------------------------------
// slide 1
// --------------------------------------------------

TaleemEngine.at(0)
  .bulletList()
  .bullet("Point 1", 0)
  .bullet("Point 2", 3);

// --------------------------------------------------
// slide 2
// --------------------------------------------------

TaleemEngine.at(6)
  .bulletList()
  .bullet("Another slide", 6)
  .bullet("Yey Another point", 9);

// --------------------------------------------------
// slide 3
// --------------------------------------------------

TaleemEngine.at(12)
  .skeletonSlide()
  .title(
    "What is Algebra?",
    12
  )
  .para(
    "Algebra uses symbols to represent numbers.",
    15
  )
  .image(
    "algebra.png",
    18
  );

// --------------------------------------------------

TaleemEngine.end(24);

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

console.log(
  "\n✅ main.json written successfully"
);