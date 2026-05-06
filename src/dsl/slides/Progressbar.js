// /src/dsl/slides/Progressbar.js

export default class Progressbar {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    bar(
      label,
      value,
      showAt
    ) {
      this.slide.data.push({
        name: "bar",
  
        label,
  
        value,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }