
// /src/compiler/templates/index.js

import { compileBulletList } from "./compileBulletList.js";
import { compileSkeletonSlide } from "./compileSkeletonSlide.js";
import { compileFocusList } from "./compileFocusList.js";

export const templates = {
  bulletList:
    compileBulletList,

  skeletonSlide:
    compileSkeletonSlide,

  focusList:
    compileFocusList
};