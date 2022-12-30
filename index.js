'use strict';
const echarts = require('./lib/echarts.js')

hexo.extend.tag.register("echarts", (args, content) => {
    return echarts(args, content);
}, {
    async: true,
    ends: true
});