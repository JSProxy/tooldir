const fs = require('fs');
const path = require('path');
// 没有设置loader 时候默认支持ejs 模版语言
const HTMLWebpackPlugin = require('html-webpack-plugin');

const alias = require('./alias');
const resolve = (p) => path.resolve(__dirname, "..", p);
const entryDir = resolve('src/page');
const outputDir = resolve('dist');
const entryFiles = fs.readdirSync(entryDir);
const entry = {};
const output = {};
const htmlPlugins = [];


// map alias
function resolveAlias() {
  Object.keys(alias).forEach(attr => {
    const val = alias[attr];
    alias[attr] = resolve(val);
  })
}
// 配置路口和出口
function resolveEntryAndOutput(env) {
  entryFiles.forEach(dir => {
    entry[dir] = resolve(`${entryDir}/${dir}`)
  })
  if (env === 'dev') {
    output.filename = 'js/[name].bundle.js'
  } else {
    output.filename = 'js/[name].bundle.[hash].js'
  }
  output.path = outputDir;
}

// 配置html模版
function combineHTMLWithTemplate(env) {
  entryFiles.forEach(dir => {
    const htmlplugin = new HTMLWebpackPlugin({
      filename: `${dir}.html`,
      template: resolve(`${entryDir}/${dir}/html.js`),
      // templateParameters:{param1:'参数webpack'}
      chunks: env === 'dev' ? [dir] : [dir, 'manifest', 'commons','vendors'],
      hash: true,
      minify: { //压缩 去除引号、注释、空属性、空格
        removeAttributeQuotes: true, //去除引号
        removeComments: true, //去除注释
        removeEmptyAttributes: true, //去除空属性
        collapseWhitespace: true //去除空格
      },
      title:`${dir}参数`
    })
    htmlPlugins.push(htmlplugin);
  })
}

function initConfig(env) {
  resolveAlias();
  resolveEntryAndOutput(env);
  combineHTMLWithTemplate();
  return {
    entry,
    output,
    alias,
    htmlPlugins
  }
}

exports.initConfig = initConfig;
exports.resolve = resolve;
