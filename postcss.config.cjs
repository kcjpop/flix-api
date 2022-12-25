const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

const plugins = [
  require('postcss-import'),
  require('postcss-custom-media'),
  require('postcss-calc'),
  require('postcss-each'),
  require('postcss-nested'),
  require('autoprefixer'),
  postcssJitProps(OpenProps),
]

module.exports = { plugins }
