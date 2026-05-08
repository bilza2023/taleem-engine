// /src/compiler/index.js


import { compileTimings } from "./utils/compileTimings.js";
import { templates } from "./templates/index.js";
import { runPrimitive } from "./animation-primtives/runPrimitive.js";

export function TaleemCompiler(builder) {
  // --------------------------------------------------
  // timings
  // --------------------------------------------------
  compileTimings(builder.deck, builder.presentationEnd );
  // --------------------------------------------------
  // compile slides
  // --------------------------------------------------
  const compiledDeck =
  builder.deck.map(slide => {
    const template =
      templates[slide.type];

    const compiled =
      template(slide);

    // --------------------------------------------------
    // safe html cleanup
    // preserves structural spacing
    // --------------------------------------------------

    compiled.html =
      compiled.html
        .replace(/\n+/g, " ")
        .replace(/\t+/g, " ")
        .replace(/>\s+</g, "><")
        .replace(/\s{2,}/g, " ")
        .trim();

    const primitive =
      runPrimitive({
        type:
          compiled.animation,

        items:
          compiled.primitiveItems

          ??

          compiled.ids.map(
            (id, index) => ({
              id,

              showAt:
                slide.data[index]
                  .showAt
            })
          )
      });

    return {
      type: slide.type,

      start: slide.start,

      end: slide.end,

      html: compiled.html,

      groups:
        primitive.groups,

      actions:
        primitive.actions
    };
  });
  // --------------------------------------------------
  // final presentation
  // --------------------------------------------------
  return {
    name: builder.name,
  
    background:
      builder.background,
  
    deck:
      compiledDeck
  };

}