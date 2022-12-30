const { echartsTemplate } = require('./template.js')

const processArgs = (args, content) => {
    const options = content.length ? content : {}
    if (args[2] == 'common' || args[2] == 'esm' || args[2] == 'simple') {
        args[3] = args[2]
        args[2] = null
    }
    if(!args[0].endsWith('%')) {
        args[0] += 'px'
    }
    if(!args[1].endsWith('%')) {
        args[1] += 'px'
    }
    return {
        id: 'echarts' + ((Math.random() * 9999) | 0),
        options: options,
        width: args[0],
        height: args[1],
        version: args[2] || '5.4.1',
        type: args[3] || ''
    }
}

module.exports = (args, content) => echartsTemplate(processArgs(args, content))
