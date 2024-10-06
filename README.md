<div align = center>
  <h1>hexo-tag-echarts-new</h1>
  <img alt="NPM License" src="https://img.shields.io/npm/l/hexo-tag-echarts-new">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/hexo-tag-echarts-new">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/hexo-tag-echarts-new">
  <p align="center">
  一个在博客中插入 echarts 的插件，相比于其他同款插件增加了更多选项

**警告：请尽量在同一个页面中使用同一个版本的同一个类型的 echarts js，否则可能会有意想不到的错误发生！**

  </p>

简体中文 | [English](https://github.com/D-Sketon/hexo-tag-echarts-new/blob/main/README.en.md)

</div>

## 安装

```bash
npm install hexo-tag-echarts-new --save
```

## 使用

```
{% echarts width height [version] [type] %}
echarts options
{% endecharts %}
```

### width

图表的宽度，必填，可填数字或百分比

### height

图表的高度，必填，可填数字或百分比

### version

图表的版本，选填，默认 5.5.1

### type

图表 js 的类型，选填，默认不填，即为 `echarts.min.js`  
可填类型 `simple`，代表 `echarts.simple.min.js`

`tag` 内部填入图表的 `option` 对象

例如：

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

## 示例

[Demo](https://d-sketon.github.io/hexo-tag-echarts-new/2022/12/30/20221230/)
