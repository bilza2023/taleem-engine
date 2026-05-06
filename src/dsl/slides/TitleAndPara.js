// /src/dsl/slides/TitleAndPara.js

export default class TitleAndPara {
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
  
    para(content, showAt) {
      this.slide.data.push({
        name: "para",
  
        content,
  
        showAt
      });
  
      return this;
    }
  
    done() {
      return this.builder;
    }
  }