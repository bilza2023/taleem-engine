// /src/dsl/slides/TextGrid.js

export default class TextGrid {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    text(content, showAt) {
      this.slide.data.push({
        name: "text",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }