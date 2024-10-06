"use strict";
const parseArgs = require("./lib/parseArgs.js");
const template = require("./lib/template.js");

hexo.extend.tag.register(
  "echarts",
  (args, content) => template(parseArgs(args, content)),
  {
    ends: true,
  }
);
