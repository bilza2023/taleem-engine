// /src/compiler/animation-primitives/runPrimitive.js

import { progressiveReveal } from "./progressiveReveal.js";
import { showAllHighlightOne } from "./showAllHighlightOne.js";
import { showOneAtATime } from "./showOneAtATime.js";

export function runPrimitive({ type, items }) {
  switch (type) {
    case "progressiveReveal":
      return {
        actions: progressiveReveal(items),

        groups: {
          hidden: ["hidden"]
        }
      };

    case "highlightOne":
      return {
        actions: showAllHighlightOne(items),

        groups: {
          focus: [],
          dim: ["dim"]
        }
      };

    case "oneAtATime":
      return {
        actions: showOneAtATime(items),

        groups: {
          visible: [],
          hidden: ["hidden"]
        }
      };

    default:
      throw new Error(`Unknown primitive: ${type}`);
  }
}