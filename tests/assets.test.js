// tests/assets.test.js

import {
    describe,
    it,
    expect
  } from "vitest";
  
  import { Taleem }
    from "../src/index.js";
  
  describe(
    "asset resolution",
    () => {
      it(
        "resolves image paths correctly",
        () => {
  
          const taleem =
            new Taleem();
  
          taleem.metaData.base =
            "/content/images/";
  
          taleem
            .at(0)
            .imageSlide()
            .image(
              "image.png",
              0
            );
  
          taleem.end(5);
  
          const result =
            taleem.compile();
  
          expect(
            result.deck[0].html
          ).toContain(
            "/content/images/image.png"
          );
        }
      );
    }
  );