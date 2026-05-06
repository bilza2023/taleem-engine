
// /src/dsl/index.js

import TimelineContext from "./TimelineContext.js";

import { build } from "../compiler/index.js";

import BulletListBuilder from "./slides/BulletListBuilder.js";

import SkeletonSlideBuilder from "./slides/SkeletonSlideBuilder.js";

import FocusListBuilder from "./slides/FocusListBuilder.js";

/////////////////////////////////////////////////////

export default class Builder {
  constructor() {
    this.metaData = {
      name: "Untitled Deck",

      base: ""
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
    return new TimelineContext(
      this,
      time
    );
  }

  end(time) {
    this.presentationEnd = time;

    return this;
  }

  bulletList(
    start = null,
    end = null
  ) {
    const slide = {
      type: "bulletList",

      start,
      end,

      data: []
    };

    this.deck.push(slide);

    return new BulletListBuilder(
      slide,
      this
    );
  }

  skeletonSlide(
    start = null,
    end = null
  ) {
    const slide = {
      type: "skeletonSlide",

      start,
      end,

      data: []
    };

    this.deck.push(slide);

    return new SkeletonSlideBuilder(
      slide,
      this
    );
  }

  focusList(
    start = null,
    end = null
  ) {
    const slide = {
      type: "focusList",

      start,
      end,

      data: []
    };

    this.deck.push(slide);

    return new FocusListBuilder(
      slide,
      this
    );
  }

  build() {
    return build(this, {
      assetBase:
        this.metaData.base
    });
  }
}