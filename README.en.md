<div align = center>
  <h1>hexo-tag-echarts-new</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/l/hexo-tag-echarts-new">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-tag-echarts-new">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-tag-echarts-new">
  <p align="center">
  A hexo plugin for inserting echarts in your blog, customised js version and type.

**WARNING: Please try to use the same version of the same type of echarts js on the same page, otherwise unexpected errors may occur!**

  </p>

[简体中文](https://github.com/D-Sketon/hexo-tag-echarts-new/blob/main/README.md) | English

</div>

## Install

```bash
npm install hexo-tag-echarts-new --save
```

## Usage

```
{% echarts width height [version] [type] [...other args] %}
echarts options
{% endecharts %}
```

### width

The width of the echarts (required)

### height

The height of the echarts (required)

### version

The version of the echarts (optional, default 5.5.1)

### type

The type of the echarts js (optional, not filled by default, representing `echarts.min.js`)

can be filled with types `simple`, representing `echarts.simple.min.js`

### other args

Other arguments will be attached to the inserted `script` tag. For example, you can insert `data-pjax` and other attributes

### echarts options

Fill in the `option` object of the chart inside the `tag`,

e.g.

```text
{% echarts 85% 400 5.4.0 simple %}
{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
{% endecharts %}
```

will generate something like:

```html
<div id="echarts2562" style="width: 85%;height:400px;margin: 0 auto"></div>
<script
  src="https://unpkg.com/echarts@$5.4.0/dist/echarts.simple.min.js"
  data-pjax
></script>
<script data-pjax>
  var eChart2562 = echarts.init(document.getElementById("echarts2562"));
  var option2562 = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  eChart2562.setOption(option2562);
  if (window.eChart2562ResizeHandler) {
    window.removeEventListener("resize", eChart2562ResizeHandler);
  }
  var eCharttestResizeHandler = function() {
    eChart2562.resize();
  };
  window.addEventListener("resize", eChart2562ResizeHandler);
</script>
```

## Example

[Demo](https://d-sketon.github.io/hexo-tag-echarts-new/2022/12/30/20221230/)
