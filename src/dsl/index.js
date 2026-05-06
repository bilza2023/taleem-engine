// /src/dsl/index.js

import TimelineContext from "./TimelineContext.js";
import { build } from "../compiler/index.js";

/////////////////////////////////////////////////////

export default class Builder {
  constructor() {
    this.metaData = {
      name: "Untitled Deck"
    };

    this.backgroundData = {
      backgroundColor: "#111111",
      backgroundImage: null,
      backgroundImageOpacity: 0.3
    };

    this.deck = [];

    this.presentationEnd = null;
  }

  at(time) {
    return new TimelineContext(this, time);
  }

  end(time) {
    this.presentationEnd = time;

    return this;
  }

  build() {
    return build(this);
  }
}