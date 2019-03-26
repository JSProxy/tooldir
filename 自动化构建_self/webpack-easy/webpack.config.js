const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const resolve = (p) => path.resolve(__dirname, p);

const config = {
  devtool: 'inline-source-map',
  mode: 'development',
  // mode: 'production',
  target: 'web',
};
const entry = {
  index: resolve('src/index.js'),
}
const output = {
  path: resolve('dist'),
  filename: 'js/[name].[hash:8].bundle.js'
}
const devServer = {
  contentBase: resolve("dist"),
  host: "0.0.0.0",
  useLocalIp: true,
  overlay: {
    errors: true,
    warnings: true
  },
  open: true,
  hot: true,
  historyApiFallback: true,
  inline: true,
  disableHostCheck: true,
  stats: {
    assets: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    moduleTrace: false,
    source: false,
    builtAt: false,
    children: false,
    hash: false,
  }
}

const plugins = [
  new HtmlWebpackPlugin({
    //指定输出文件名位子
    filename: 'index.html',
    template: resolve('src/index.html'),
    // 模块标识符
    inject: 'head',
    hash: true,
    // 指定插入某些模块；
    chunks: ['index']
  }),
  new TransferWebpackPlugin([{
    from:'static',
    to:'static'
  }],resolve('src'))
]
config.entry = entry;
config.output = output;
config.plugins = plugins;
config.devServer = devServer;
module.exports = config;