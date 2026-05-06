// /src/dsl/slides/ImageWithCaption.js

export default class ImageWithCaption {
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
  
    caption(content, showAt) {
      this.slide.data.push({
        name: "caption",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }