const path = require('path');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.common');

module.exports = merge(webpackBase, {
  entry: path.resolve(__dirname, './src/index.js'),
  externals: {
    ajv: 'ajv',
    lodash: 'lodash',
    vue: 'vue',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-form-json-schema.esm.js',
    libraryTarget: 'commonjs2',
  },
});
