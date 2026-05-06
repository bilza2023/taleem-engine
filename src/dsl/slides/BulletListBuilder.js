// /src/dsl/slides/BulletListBuilder.js

export default class BulletListBuilder {
  constructor(slide, builder) {
    this.slide = slide;

    this.builder = builder;
  }

  bullet(content, showAt) {
    this.slide.data.push({
      name: "bullet",
      content,
      showAt
    });

    return this;
  }

  done() {
    return this.builder;
  }
}