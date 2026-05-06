import { compileBulletList } from "./compileBulletList.js";
import { compileSkeletonSlide } from "./compileSkeletonSlide.js";

export const templates = {
  bulletList: compileBulletList,
  skeletonSlide: compileSkeletonSlide
};