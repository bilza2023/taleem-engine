// /src/dsl/TimelineContext.js

import BulletListBuilder from "./slides/BulletListBuilder.js";

export default class TimelineContext {
  constructor(builder, time) {
    this.builder = builder;
    this.time = time;
  }

  bulletList() {
    return new BulletListBuilder(this.builder, this.time);
  }
}