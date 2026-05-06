// /src/dsl/slides/TwoColumnText.js

export default class TwoColumnText {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    leftText(content, showAt) {
      this.slide.data.push({
        name: "leftText",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    rightText(content, showAt) {
      this.slide.data.push({
        name: "rightText",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    leftImage(content, showAt) {
      this.slide.data.push({
        name: "leftImage",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    rightImage(content, showAt) {
      this.slide.data.push({
        name: "rightImage",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }