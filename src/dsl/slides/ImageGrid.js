// /src/dsl/slides/ImageGrid.js

export default class ImageGrid {
    constructor(slide, builder) {
      this.slide = slide;
  
      this.builder = builder;
    }
  
    image(content, showAt) {
      this.slide.data.push({
        name: "image",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }