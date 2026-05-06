// /src/compiler/index.js

import { compileTimings } from "./utils/compileTimings.js";
import { templates } from "./templates/index.js";
import { runPrimitive } from "./animation-primtives/runPrimitive.js"

export function build(builder) {
  compileTimings(builder.deck, builder.presentationEnd);

  const compiledDeck = builder.deck.map(slide => {
    const template = templates[slide.type];

    const compiled = template(slide);

    const primitive = runPrimitive({
      type: compiled.animation,
      items: compiled.ids.map((id, index) => ({
        id,
        showAt: slide.data[index].showAt
      }))
    });

    return {
      type: slide.type,

      start: slide.start,
      end: slide.end,

      html: compiled.html,

      groups: primitive.groups,
      actions: primitive.actions
    };
  });

  return {
    name: builder.metaData.name,

    background: builder.backgroundData,

    deck: compiledDeck
  };
}