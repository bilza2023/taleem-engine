// tests/primitives.test.js

import {
    describe,
    it,
    expect
  } from "vitest";
  
  import { Taleem }
    from "../src/index.js";
  
  describe(
    "primitive generation",
    () => {
      it(
        "creates progressive reveal actions",
        () => {
  
          const taleem =
            new Taleem();
  
          taleem
            .at(0)
            .bulletList()
  
            .bullet(
              "One",
              0
            )
  
            .bullet(
              "Two",
              1
            )
  
            .bullet(
              "Three",
              2
            );
  
          taleem.end(5);
  
          const result =
            taleem.compile();
  
          const slide =
            result.deck[0];
  
          expect(
            slide.groups.hidden
          ).toBeDefined();
  
          expect(
            slide.actions.length
          ).toBe(3);
  
          expect(
            slide.actions[0].time
          ).toBe(0);
  
          expect(
            slide.actions[1].time
          ).toBe(1);
  
          expect(
            slide.actions[2].time
          ).toBe(2);
        }
      );
    }
  );