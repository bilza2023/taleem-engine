// /examples/main.js

import fs from "fs";

import TaleemEngine from "../src/index.js";

TaleemEngine.at(0)
  .bulletList()
  .bullet("Point 1", 10)
  .bullet("Point 2", 12);

TaleemEngine.at(20)
  .bulletList()
  .bullet("Another slide", 21)
  .bullet("Yey Another point", 25);

TaleemEngine.end(40);

const presentation = TaleemEngine.build();

console.dir(presentation, { depth: null });

fs.writeFileSync(
  "./examples/main.json",
  JSON.stringify(presentation, null, 2)
);

console.log("\n✅ main.json written successfully");