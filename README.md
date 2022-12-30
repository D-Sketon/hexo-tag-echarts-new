# hexo-tag-echarts-new

A hexo plugin for inserting echarts in your blog.  

## Install 

```bash
npm install hexo-tag-echarts-new --save
```

## Usage

```
{% echarts 85% 400 5.4.0 common %}
// echarts options
{% endecharts %}
```
The 1st parameter represents the width of the echarts (required)  
第一个参数代表图表的宽度，必填，可填数字或百分比  

The 2nd parameter represents the height of the echarts (required)  
第二个参数代表图表的高度，必填，可填数字或百分比  

The 3rd parameter represents the version of the echarts (optional, default 5.4.1)  
第三个参数代表图表的版本，选填，默认5.4.1  

The 4th parameter represents the type of the echarts js (optional, not filled by default, representing `echarts.min.js`)  
can be filled with types `simple`, `common`, `esm`, representing `echarts.simple.min.js`, `echarts.common.min.js`, `echarts.esm.min.js` respectively  
第四个参数代表图表js的类型，选填，默认不填，即为 `echarts.min.js`  
可填类型 `simple`，`common`，`esm` ，分别代表 `echarts.simple.min.js`，`echarts.common.min.js`，`echarts.esm.min.js`  

`tag` 内部填入图表的 `option` 对象  
  
e.g.  
```text
{% echarts 85% 400 5.4.0 %}
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