// /src/dsl/slides/BarChart.js

export default class BarChart {
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