// /src/compiler/templates/index.js

import { compileBulletList } from "./compileBulletList.js";

import { compileSkeletonSlide } from "./compileSkeletonSlide.js";

import { compileFocusList } from "./compileFocusList.js";

import { compileEq } from "./compileEq.js";

import { compileTable } from "./compileTable.js";

import { compileBarChart } from "./compileBarChart.js";

import { compileProgressbar } from "./compileProgressbar.js";

export const templates = {
  bulletList:
    compileBulletList,

  skeletonSlide:
    compileSkeletonSlide,

  focusList:
    compileFocusList,

  eq:
    compileEq,

  table:
    compileTable,

  barChart:
    compileBarChart,

  progressbar:
    compileProgressbar
};