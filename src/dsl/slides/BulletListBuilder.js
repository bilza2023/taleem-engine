// /src/dsl/slides/BulletListBuilder.js

export default class BulletListBuilder {
    constructor(builder, time) {
      this.builder = builder;
  
      this.slide = {
        type: "bulletList",
        start: time,
        end: null,
        data: []
      };
  
      this.builder.deck.push(this.slide);
    }
  
    bullet(content, showAt) {
      this.slide.data.push({
        name: "bullet",
        content,
        showAt
      });
  
      return this;
    }
  }