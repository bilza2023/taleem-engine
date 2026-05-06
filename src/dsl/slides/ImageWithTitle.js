// /src/dsl/slides/ImageWithTitle.js

export default class ImageWithTitle {
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