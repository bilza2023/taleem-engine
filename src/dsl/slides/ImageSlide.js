// /src/dsl/slides/ImageSlide.js

export default class ImageSlide {
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