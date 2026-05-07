// tests/eq.test.js

import {
    describe,
    it,
    expect
  } from "vitest";
  
  import { Taleem }
    from "../src/index.js";
  
  describe(
    "eq slide",
    () => {
      it(
        "compiles eq html and primitives correctly",
        () => {
  
          const taleem =
            new Taleem();
  
          taleem
            .at(0)
            .eq()
  
            .title(
              "Expansion",
              0,
              [
                {
                  name: "text",
                  content:
                    "Intro"
                }
              ]
            )
  
            .math(
              "(a+b)^2",
              1,
              [
                {
                  name: "text",
                  content:
                    "Square"
                }
              ]
            );
  
          taleem.end(5);
  
          const result =
            taleem.compile();
  
          const slide =
            result.deck[0];
  
          expect(
            slide.type
          ).toBe("eq");
  
          expect(
            slide.html
          ).toContain("<li id=");
  
          expect(
            slide.groups.focus
          ).toBeDefined();
  
          expect(
            slide.groups.dim
          ).toBeDefined();
  
          expect(
            slide.actions.length
          ).toBe(2);
        }
      );
    }
  );