// /src/dsl/slides/FocusListBuilder.js

export default class FocusListBuilder {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    heading(content, showAt) {
      this.slide.data.push({
        name: "heading",
  
        content,
  
        showAt
      });
  
      return this;
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