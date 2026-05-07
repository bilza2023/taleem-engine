// tests/timings.test.js

import {
    describe,
    it,
    expect
  } from "vitest";
  
  import { Taleem }
    from "../src/index.js";
  
  describe(
    "timing compilation",
    () => {
      it(
        "resolves slide timings correctly",
        () => {
  
          const taleem =
            new Taleem();
  
          taleem
            .at(0)
            .titleAndSubtitle()
            .title("One", 0);
  
          taleem
            .at(5)
            .bulletList()
            .bullet("Two", 5);
  
          taleem.end(10);
  
          const result =
            taleem.compile();
  
          expect(
            result.deck[0].start
          ).toBe(0);
  
          expect(
            result.deck[0].end
          ).toBe(5);
  
          expect(
            result.deck[1].start
          ).toBe(5);
  
          expect(
            result.deck[1].end
          ).toBe(10);
        }
      );
    }
  );