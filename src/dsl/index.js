import TimelineContext from "./TimelineContext.js";
import {compileTimings} from "./compileTimings.js";

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
    compileTimings(this.deck, this.presentationEnd);

    return this.deck;
  }


}