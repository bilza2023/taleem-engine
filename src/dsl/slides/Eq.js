// /src/dsl/slides/Eq.js

export default class Eq {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    line(
      content,
      showAt,
      spItems = []
    ) {
      this.slide.data.push({
        name: "line",
  
        content,
  
        showAt,
  
        spItems
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }