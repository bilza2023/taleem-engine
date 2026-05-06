// /src/dsl/slides/QuoteSlide.js

export default class QuoteSlide {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    quote(content, showAt) {
      this.slide.data.push({
        name: "quote",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    author(content, showAt) {
      this.slide.data.push({
        name: "author",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }