// /src/dsl/TimelineContext.js

import BulletListBuilder from "./slides/BulletListBuilder.js";

import SkeletonSlideBuilder from "./slides/SkeletonSlideBuilder.js";

import FocusListBuilder from "./slides/FocusListBuilder.js";

import Eq from "./slides/Eq.js";

import Table from "./slides/Table.js";

import BarChart from "./slides/BarChart.js";

import Progressbar from "./slides/Progressbar.js";

import TitleAndSubtitle from "./slides/TitleAndSubtitle.js";

import TitleAndPara from "./slides/TitleAndPara.js";

import TwoColumnText from "./slides/TwoColumnText.js";

import ImageSlide from "./slides/ImageSlide.js";

import ImageWithTitle from "./slides/ImageWithTitle.js";

import ImageWithCaption from "./slides/ImageWithCaption.js";

import ImageLeftBulletsRight from "./slides/ImageLeftBulletsRight.js";

import ImageRightBulletsLeft from "./slides/ImageRightBulletsLeft.js";

import QuoteSlide from "./slides/QuoteSlide.js";

import KeyIdeasSlide from "./slides/KeyIdeasSlide.js";

import FillImage from "./slides/FillImage.js";

import ImageStrip from "./slides/ImageStrip.js";

import ImageGrid from "./slides/ImageGrid.js";

import TextGrid from "./slides/TextGrid.js";

export default class TimelineContext {
  constructor(builder, time) {
    this.builder = builder;

    this.time = time;
  }

  createSlide(type) {
    const slide = {
      type,

      start: this.time,

      end: null,

      data: []
    };

    this.builder.deck.push(slide);

    return slide;
  }

  titleAndSubtitle() {
    return new TitleAndSubtitle(
      this.createSlide(
        "titleAndSubtitle"
      ),
      this.builder
    );
  }

  titleAndPara() {
    return new TitleAndPara(
      this.createSlide(
        "titleAndPara"
      ),
      this.builder
    );
  }

  bulletList() {
    return new BulletListBuilder(
      this.createSlide(
        "bulletList"
      ),
      this.builder
    );
  }

  twoColumnText() {
    return new TwoColumnText(
      this.createSlide(
        "twoColumnText"
      ),
      this.builder
    );
  }

  imageSlide() {
    return new ImageSlide(
      this.createSlide(
        "imageSlide"
      ),
      this.builder
    );
  }

  imageWithTitle() {
    return new ImageWithTitle(
      this.createSlide(
        "imageWithTitle"
      ),
      this.builder
    );
  }

  imageWithCaption() {
    return new ImageWithCaption(
      this.createSlide(
        "imageWithCaption"
      ),
      this.builder
    );
  }

  imageLeftBulletsRight() {
    return new ImageLeftBulletsRight(
      this.createSlide(
        "imageLeftBulletsRight"
      ),
      this.builder
    );
  }

  imageRightBulletsLeft() {
    return new ImageRightBulletsLeft(
      this.createSlide(
        "imageRightBulletsLeft"
      ),
      this.builder
    );
  }

  table() {
    return new Table(
      this.createSlide(
        "table"
      ),
      this.builder
    );
  }

  barChart() {
    return new BarChart(
      this.createSlide(
        "barChart"
      ),
      this.builder
    );
  }

  progressbar() {
    return new Progressbar(
      this.createSlide(
        "progressbar"
      ),
      this.builder
    );
  }

  quoteSlide() {
    return new QuoteSlide(
      this.createSlide(
        "quoteSlide"
      ),
      this.builder
    );
  }

  keyIdeasSlide() {
    return new KeyIdeasSlide(
      this.createSlide(
        "keyIdeasSlide"
      ),
      this.builder
    );
  }

  focusList() {
    return new FocusListBuilder(
      this.createSlide(
        "focusList"
      ),
      this.builder
    );
  }

  eq() {
    return new Eq(
      this.createSlide(
        "eq"
      ),
      this.builder
    );
  }

  fillImage() {
    return new FillImage(
      this.createSlide(
        "fillImage"
      ),
      this.builder
    );
  }

  imageStrip() {
    return new ImageStrip(
      this.createSlide(
        "imageStrip"
      ),
      this.builder
    );
  }

  imageGrid() {
    return new ImageGrid(
      this.createSlide(
        "imageGrid"
      ),
      this.builder
    );
  }

  textGrid() {
    return new TextGrid(
      this.createSlide(
        "textGrid"
      ),
      this.builder
    );
  }

  skeleton() {
    return new SkeletonSlideBuilder(
      this.createSlide(
        "skeleton"
      ),
      this.builder
    );
  }
}