// /src/dsl/slides/KeyIdeasSlide.js

export default class KeyIdeasSlide {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    card(
      icon,
      label,
      showAt
    ) {
      this.slide.data.push({
        name: "card",
  
        icon,
  
        label,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }