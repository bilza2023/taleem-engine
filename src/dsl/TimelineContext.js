// /src/dsl/TimelineContext.js

import BulletListBuilder from "./slides/BulletListBuilder.js";

import SkeletonSlideBuilder from "./slides/SkeletonSlideBuilder.js";

import FocusListBuilder from "./slides/FocusListBuilder.js";

export default class TimelineContext {
  constructor(builder, time) {
    this.builder = builder;

    this.time = time;
  }

  bulletList() {
    const slide = {
      type: "bulletList",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new BulletListBuilder(
      slide,
      this.builder
    );
  }

  skeletonSlide() {
    const slide = {
      type: "skeletonSlide",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new SkeletonSlideBuilder(
      slide,
      this.builder
    );
  }

  focusList() {
    const slide = {
      type: "focusList",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new FocusListBuilder(
      slide,
      this.builder
    );
  }
}