// /src/dsl/index.js

import TimelineContext from "./TimelineContext.js";

import { TaleemCompiler } from "../compiler/TaleemCompiler.js";

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

/////////////////////////////////////////////////////

export default class Taleem {
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

  createSlide(type, start, end) {
    const slide = {
      type,

      start,
      end,

      data: []
    };

    this.deck.push(slide);

    return slide;
  }

  titleAndSubtitle(
    start = null,
    end = null
  ) {
    return new TitleAndSubtitle(
      this.createSlide(
        "titleAndSubtitle",
        start,
        end
      ),
      this
    );
  }

  titleAndPara(
    start = null,
    end = null
  ) {
    return new TitleAndPara(
      this.createSlide(
        "titleAndPara",
        start,
        end
      ),
      this
    );
  }

  bulletList(
    start = null,
    end = null
  ) {
    return new BulletListBuilder(
      this.createSlide(
        "bulletList",
        start,
        end
      ),
      this
    );
  }

  twoColumnText(
    start = null,
    end = null
  ) {
    return new TwoColumnText(
      this.createSlide(
        "twoColumnText",
        start,
        end
      ),
      this
    );
  }

  imageSlide(
    start = null,
    end = null
  ) {
    return new ImageSlide(
      this.createSlide(
        "imageSlide",
        start,
        end
      ),
      this
    );
  }

  imageWithTitle(
    start = null,
    end = null
  ) {
    return new ImageWithTitle(
      this.createSlide(
        "imageWithTitle",
        start,
        end
      ),
      this
    );
  }

  imageWithCaption(
    start = null,
    end = null
  ) {
    return new ImageWithCaption(
      this.createSlide(
        "imageWithCaption",
        start,
        end
      ),
      this
    );
  }

  imageLeftBulletsRight(
    start = null,
    end = null
  ) {
    return new ImageLeftBulletsRight(
      this.createSlide(
        "imageLeftBulletsRight",
        start,
        end
      ),
      this
    );
  }

  imageRightBulletsLeft(
    start = null,
    end = null
  ) {
    return new ImageRightBulletsLeft(
      this.createSlide(
        "imageRightBulletsLeft",
        start,
        end
      ),
      this
    );
  }

  table(
    start = null,
    end = null
  ) {
    return new Table(
      this.createSlide(
        "table",
        start,
        end
      ),
      this
    );
  }

  barChart(
    start = null,
    end = null
  ) {
    return new BarChart(
      this.createSlide(
        "barChart",
        start,
        end
      ),
      this
    );
  }

  progressbar(
    start = null,
    end = null
  ) {
    return new Progressbar(
      this.createSlide(
        "progressbar",
        start,
        end
      ),
      this
    );
  }

  quoteSlide(
    start = null,
    end = null
  ) {
    return new QuoteSlide(
      this.createSlide(
        "quoteSlide",
        start,
        end
      ),
      this
    );
  }

  keyIdeasSlide(
    start = null,
    end = null
  ) {
    return new KeyIdeasSlide(
      this.createSlide(
        "keyIdeasSlide",
        start,
        end
      ),
      this
    );
  }

  focusList(
    start = null,
    end = null
  ) {
    return new FocusListBuilder(
      this.createSlide(
        "focusList",
        start,
        end
      ),
      this
    );
  }

  eq(
    start = null,
    end = null
  ) {
    return new Eq(
      this.createSlide(
        "eq",
        start,
        end
      ),
      this
    );
  }

  fillImage(
    start = null,
    end = null
  ) {
    return new FillImage(
      this.createSlide(
        "fillImage",
        start,
        end
      ),
      this
    );
  }

  imageStrip(
    start = null,
    end = null
  ) {
    return new ImageStrip(
      this.createSlide(
        "imageStrip",
        start,
        end
      ),
      this
    );
  }

  imageGrid(
    start = null,
    end = null
  ) {
    return new ImageGrid(
      this.createSlide(
        "imageGrid",
        start,
        end
      ),
      this
    );
  }

  textGrid(
    start = null,
    end = null
  ) {
    return new TextGrid(
      this.createSlide(
        "textGrid",
        start,
        end
      ),
      this
    );
  }

  skeleton(
    start = null,
    end = null
  ) {
    return new SkeletonSlideBuilder(
      this.createSlide(
        "skeleton",
        start,
        end
      ),
      this
    );
  }

  compile() {
    return TaleemCompiler(this, {
      assetBase:
        this.metaData.base
    });
  }
}