const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const path = require('path');
const glob=require('glob-all');
const webpack = require('webpack');

const {
  initConfig,
  resolve
} = require("./bundle")
const {
  initLoader
} = require("./loader")

const config = {
  devtool: "cheap-module-source-map",
  target: 'web',
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: resolve(""),
      verbose: true, //开启在控制台输出信息
      dry: false,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      axios: 'axios'
    }),
    new webpack.BannerPlugin({
      banner: '给文件添加一些信息，打包日期：' + new Date(),
      // test:"",
      // entryOnly:true 只在路口文件 模块中添加
    }),
    new PurifyCSSPlugin({
      // 路径不对对导致删除 使用的css 该插件最后需要放在css 抽取后
      // paths: glob.sync(path.join(__dirname, '../src/page/*/*.html'))
      //paths: glob.sync(resolve('src/*.html')) 错误路径
      paths: glob.sync([resolve('src/page/*/content.ejs'),resolve('src/components/*/html.ejs')])
    }
  ),
  new TransferWebpackPlugin([{
    from:'static',
    to:'static'
  }],resolve('src'))
  ]
};

module.exports = function (env) {
  const {
    entry,
    output,
    alias,
    htmlPlugins
  } = initConfig(env)
  const loaders = initLoader(env);

  const devMode = env === 'dev';
  const cssplugin = new MiniCssExtractPlugin({
    filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
    chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
  });

  config.entry = entry;
  config.output = output;
  config.resolve.alias = alias;
  config.module.rules.push(...loaders);
  config.plugins.push(...htmlPlugins);
  config.plugins.push(cssplugin);

  return config;
};
