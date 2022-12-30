const echartsTemplate = ({ id, options, width, height, version, type }) => {
    type = type == '' ? '' : '.' + type
    return `<div id="${id}" style="width: ${width};height:${height};margin: 0 auto"></div>
    <script src="https://unpkg.com/echarts@${version}/dist/echarts${type}.min.js"></script>
    <script>
            var eChart${id} = echarts.init(document.getElementById('${id}'));
            var option${id} = ${options}
            eChart${id}.setOption(option${id});
    </script>`
}

module.exports = { echartsTemplate }