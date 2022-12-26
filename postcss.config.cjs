const postcssJitProps = require('postcss-jit-props')
const postcssPresetEnv = require('postcss-preset-env')
const OpenProps = require('open-props')

const plugins = [postcssPresetEnv({ stage: 1 }), postcssJitProps(OpenProps)]

module.exports = { plugins }
