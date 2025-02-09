const template = ({ id, options, width, height, version, type, args }) => {
  type = type == "" ? "" : "." + type;
  return `
<div id="${id}" style="width: ${width};height:${height};margin: 0 auto"></div>
<script src="https://unpkg.com/echarts@${version}/dist/echarts${type}.min.js" ${args.join(' ')}></script>
<script ${args.join(' ')}>
  if (window.eChart${id}ResizeHandler) {
    window.removeEventListener("resize", eChart${id}ResizeHandler);
  }
  var option${id} = ${options};
  if (window.echarts !== undefined) {
    var eChart${id} = echarts.init(document.getElementById('${id}'));
    eChart${id}.setOption(option${id});
    var eChart${id}ResizeHandler = function() {
      eChart${id}.resize();
    };
    window.addEventListener("resize", eChart${id}ResizeHandler);
  }
</script>`;
};

module.exports = template;
