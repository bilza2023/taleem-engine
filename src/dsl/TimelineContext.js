// /src/dsl/TimelineContext.js

import BulletListBuilder from "./slides/BulletListBuilder.js";

import SkeletonSlideBuilder from "./slides/SkeletonSlideBuilder.js";

import FocusListBuilder from "./slides/FocusListBuilder.js";

import Eq from "./slides/Eq.js";

import Table from "./slides/Table.js";

import BarChart from "./slides/BarChart.js";

import Progressbar from "./slides/Progressbar.js";

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

  eq() {
    const slide = {
      type: "eq",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new Eq(
      slide,
      this.builder
    );
  }

  table() {
    const slide = {
      type: "table",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new Table(
      slide,
      this.builder
    );
  }

  barChart() {
    const slide = {
      type: "barChart",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new BarChart(
      slide,
      this.builder
    );
  }

  progressbar() {
    const slide = {
      type: "progressbar",

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return new Progressbar(
      slide,
      this.builder
    );
  }
}