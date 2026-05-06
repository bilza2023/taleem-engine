// /src/compiler/index.js

import { compileTimings } from "./utils/compileTimings.js";

import { resolveAssetPaths } from "./utils/resolveAssetPaths.js";

import { templates } from "./templates/index.js";

import { runPrimitive } from "./animation-primtives/runPrimitive.js";

export function build(
  builder,
  options = {}
) {
  const {
    assetBase =
      builder.metaData.base || ""
  } = options;

  // --------------------------------------------------
  // timings
  // --------------------------------------------------

  compileTimings(
    builder.deck,
    builder.presentationEnd
  );

  // --------------------------------------------------
  // preprocess DSL slides
  // IMPORTANT:
  // resolve BEFORE html compilation
  // --------------------------------------------------

  if (assetBase) {
    resolveAssetPaths(
      {
        background:
          builder.backgroundData,

        deck: builder.deck
      },

      assetBase
    );
  }

  // --------------------------------------------------
  // compile slides
  // --------------------------------------------------

  const compiledDeck =
    builder.deck.map(slide => {
      const template =
        templates[slide.type];

      const compiled =
        template(slide);

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
    name:
      builder.metaData.name,

    background:
      builder.backgroundData,

    deck: compiledDeck
  };
}