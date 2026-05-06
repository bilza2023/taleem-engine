// /src/dsl/slides/Table.js

export default class Table {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    row(content, showAt) {
      this.slide.data.push({
        name: "row",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }