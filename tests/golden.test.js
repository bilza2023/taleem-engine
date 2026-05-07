// tests/golden.test.js

import { describe, it, expect }
  from "vitest";

import { Taleem }
  from "../src/index.js";

describe(
  "golden deck",
  () => {
    it(
      "compiles successfully",
      () => {

        const taleem =
          new Taleem();

        taleem
          .at(0)
          .titleAndSubtitle()
          .title("Hello", 0);

        taleem.end(5);

        const result =
          taleem.compile();

        expect(
          result.deck.length
        ).toBe(1);

        expect(
          result.deck[0].html
        ).toContain(
          "<section"
        );
      }
    );
  }
);