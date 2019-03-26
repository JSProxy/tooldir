const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpackMerge = require("webpack-merge");
const webpackBaseFn = require('./webpack.config.base');

const {
  externals
} = require('./externals');

const optimization = {
  // 分离webpack 模块交互的代码
  // 需要在每一个页面插入
  runtimeChunk: {
    name: 'manifest'
  },
  // //最小化 js和css 压缩
  minimizer: [
    //压缩js ejs 压缩后报错
      // new UglifyJsPlugin({
      //   exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
      //   cache: true,
      //   parallel: true, // 开启并行压缩，充分利用cpu
      //   sourceMap: false,
      //   extractComments: false, // 移除注释
      //   uglifyOptions: {
      //     compress: {
      //       unused: true,
      //       warnings: false,
      //       drop_debugger: true
      //     },
      //     output: {
      //       comments: false
      //     }
      //   }
      // }),
      // 用于优化css文件
      new TerserWebpackPlugin(
        {
              exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
              cache: true,// 是否缓存 需要甚至路径
              parallel: true, // 开启并行压缩，充分利用cpu
              sourceMap: true,//map 文件是否需要 cheap-source-map选项不适用于此插件。
              extractComments: false, // 移除注释
            }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessorOptions: {
          safe: true,
          autoprefixer: {
            disable: true
          }, // 这里是个大坑，稍后会提到
          mergeLonghand: false,
          discardComments: {
            removeAll: true // 移除注释
          }
        },
        canPrint: true
      })
  ],
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true,
    cacheGroups: {
      vendors: {
        // [\\/] 代表可以是\也可以是/,
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10,
        minChunks: 2,
        reuseExistingChunk: true,
        enforce: true
      },
      commons: {
        test: /[\\/]src[\\/]/,
        name: 'commons',
        chunks: 'all',
        minChunks: 2,
        reuseExistingChunk: true,
        enforce: true
      }
    }
  }
}

module.exports = function (env, {
  option
}) {
  const baseConfig = webpackBaseFn(env);
  const plugins = [];
  const reportOn = option === "report";
  // 正式环境中加入 观察打包的分布
  if (reportOn) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return webpackMerge(baseConfig, {
    mode: 'production',
    optimization: optimization,
    plugins,
    externals
  })
}
