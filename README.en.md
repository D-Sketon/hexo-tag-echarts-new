# hexo-tag-echarts-new

![](https://img.shields.io/npm/v/hexo-tag-echarts-new) ![](https://img.shields.io/npm/dt/hexo-tag-echarts-new)

A hexo plugin for inserting echarts in your blog, customised js version and type.  
一个在博客中插入 echarts 的插件，相比于其他同款插件增加了更多选项  
**WARNING: Please try to use the same version of the same type of echarts js on the same page, otherwise unexpected errors may occur!**  
**警告：请尽量在同一个页面中使用同一个版本的同一个类型的 echarts js，否则可能会有意想不到的错误发生！**

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
{% echarts width height [version] [type] %}
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

## Example

[Demo](https://d-sketon.github.io/hexo-tag-echarts-new/2022/12/30/20221230/)
