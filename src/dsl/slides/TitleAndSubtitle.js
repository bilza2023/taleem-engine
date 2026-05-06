// /src/dsl/slides/TitleAndSubtitle.js

export default class TitleAndSubtitle {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    title(content, showAt) {
      this.slide.data.push({
        name: "title",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    subtitle(content, showAt) {
      this.slide.data.push({
        name: "subtitle",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }