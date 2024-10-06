import { describe, it, expect } from "vitest";

const template = require("../lib/template.js");

describe("template", () => {
  it("default", () => {
    const result = template({
      id: "test",
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.1",
      type: "",
      args: [],
    });
    expect(result).toEqual(`
<div id="test" style="width: 50%;height:50%;margin: 0 auto"></div>
<script src="https://unpkg.com/echarts@5.5.1/dist/echarts.min.js" ></script>
<script >
  var eCharttest = echarts.init(document.getElementById('test'));
  var optiontest = {};
  eCharttest.setOption(optiontest);
  if (window.eCharttestResizeHandler) {
    window.removeEventListener("resize", eCharttestResizeHandler);
  }
  var eCharttestResizeHandler = function() {
    eCharttest.resize();
  };
  window.addEventListener("resize", eCharttestResizeHandler);
</script>`);
  });

  it("simple", () => {
    const result = template({
      id: "test",
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.1",
      type: "simple",
      args: [],
    });
    expect(result).toEqual(`
<div id="test" style="width: 50%;height:50%;margin: 0 auto"></div>
<script src="https://unpkg.com/echarts@5.5.1/dist/echarts.simple.min.js" ></script>
<script >
  var eCharttest = echarts.init(document.getElementById('test'));
  var optiontest = {};
  eCharttest.setOption(optiontest);
  if (window.eCharttestResizeHandler) {
    window.removeEventListener("resize", eCharttestResizeHandler);
  }
  var eCharttestResizeHandler = function() {
    eCharttest.resize();
  };
  window.addEventListener("resize", eCharttestResizeHandler);
</script>`);
  });

  it("args", () => {
    const result = template({
      id: "test",
      options: "{}",
      width: "50%",
      height: "50%",
      version: "5.5.1",
      type: "",
      args: ['data-foo="bar"'],
    });
    expect(result).toEqual(`
<div id="test" style="width: 50%;height:50%;margin: 0 auto"></div>
<script src="https://unpkg.com/echarts@5.5.1/dist/echarts.min.js" data-foo="bar"></script>
<script data-foo="bar">
  var eCharttest = echarts.init(document.getElementById('test'));
  var optiontest = {};
  eCharttest.setOption(optiontest);
  if (window.eCharttestResizeHandler) {
    window.removeEventListener("resize", eCharttestResizeHandler);
  }
  var eCharttestResizeHandler = function() {
    eCharttest.resize();
  };
  window.addEventListener("resize", eCharttestResizeHandler);
</script>`);
  });

  it("version", () => {
    const result = template({
      id: "test",
      options: "{a: 1}",
      width: "50%",
      height: "50%",
      version: "5.5.0",
      type: "",
      args: [],
    });
    expect(result).toEqual(`
<div id="test" style="width: 50%;height:50%;margin: 0 auto"></div>
<script src="https://unpkg.com/echarts@5.5.0/dist/echarts.min.js" ></script>
<script >
  var eCharttest = echarts.init(document.getElementById('test'));
  var optiontest = {a: 1};
  eCharttest.setOption(optiontest);
  if (window.eCharttestResizeHandler) {
    window.removeEventListener("resize", eCharttestResizeHandler);
  }
  var eCharttestResizeHandler = function() {
    eCharttest.resize();
  };
  window.addEventListener("resize", eCharttestResizeHandler);
</script>`);
  });
});
