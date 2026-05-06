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

console.dir(TaleemEngine.build(), { depth: null });