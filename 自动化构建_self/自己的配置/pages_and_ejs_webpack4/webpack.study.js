const path = require('path')
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// 目前缺失功能，HMR
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// const PurifyCss = require('purifycss-webpack');
const resolve = (p) => path.resolve(__dirname, p);

// const glob = require('glob');

const config = {
  devtool: 'inline-source-map',
  mode: 'development',
  // mode: 'production',
  target: 'web',
  resolve: {
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试询问文件是否存在。 Webpack 配置中的 resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认是：
    extensions: ['.js', '.json'],
    // 路径设置别名  html 中使用~@fonts  ~开头
    alias: {
      "@fonts": resolve('src/assets/fonts'),
      "@images": resolve('src/assets/images'),
      "@styles": resolve('src/assets/styles')

    }
  }
};
const entry = {
  index: resolve('src/page/index'),
  home: resolve('src/page/home')
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
const rule = {
  rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      // 入口文件引入html raw-loader 实现 html 的自动刷新
      test: /\.(htm|html)$/,
      use: [
        "html-withimg-loader", 'raw-loader'
      ]
    },
    {
      test: /\.css$/,
      // use: ['style-loader', 'css-loader', 'postcss-loader']
      use: [{
        "loader": MiniCssExtractPlugin.loader,
        options: {
          //默认使用 webpackOptions.output中的publicPath
          publicPath: '../'
        }
      }, 'css-loader', 'postcss-loader']
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
          "loader": MiniCssExtractPlugin.loader,
          options: {
            //默认使用 webpackOptions.output中的publicPath
            publicPath: '../'
          }
        }, 'css-loader', 'sass-loader', 'postcss-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            // 为了使用全局scss
            resources: resolve("src/assets/styles/main.scss")
          }
        }
      ]
    },
    //html-withimg-loader （解决html里的img路径不对）
    // {
    //   test: /\.html$/,
    //   use: 'html-withimg-loader'
    // },
    {
      test: /\.(png|jpg|svg|gif|jpeg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: "imgaes/[name].[hash:8].[ext]",
        }
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "font"
        }
      }
    }

  ]
}

const plugins = [
  new CleanPlugin(resolve('dist')),
  new HtmlWebpackPlugin({
    //指定输出文件名位子
    filename: 'index.html',
    template: resolve('src/page/index/index.html'),
    // 模块标识符
    inject: true,
    hash: true,
    // 指定插入某些模块；
    chunks: ['index', 'manifest']
  }),
  new HtmlWebpackPlugin({
    //指定输出文件名位子
    filename: 'home.html',
    template: resolve('src/page/home/index.html'),
    //js插入的位置，true/'head'/'body'/false
    inject: true,
    //为静态资源生成hash值
    hash: true,
    // 模块标识符 需要引入的chunk，不配置就会引入所有页面的资源
    chunks: ['home'],
    minify: { //压缩 去除引号、注释、空属性、空格
      removeAttributeQuotes: true, //去除引号
      removeComments: true, //去除注释
      removeEmptyAttributes: true, //去除空属性
      collapseWhitespace: true //去除空格
    }
    // favicon、meta、title等都可以配置，页面内使用「<%= htmlWebpackPlugin.options.title %>」即可
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
    // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    chunkFilename: 'css/[id].css'
  }),
  // 不打包 未用到的css
  // new PurifyCss({
  //   paths: glob.sync( // 传入多文件路径
  //     path.resolve('src/*.html'), // 处理src目录下的html文件
  //     // path.resolve('src/*.js'), // 处理src目录下的js文件 js 加入的css
  //   )
  // }),
  // 引入全局jquery
  // 可以不用import
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    axios: 'axios'
  }),
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.BannerPlugin('给文件添加一些信息，打包日期：' + new Date()),
  new webpack.BannerPlugin({
    banner: '给文件添加一些信息，打包日期：' + new Date(),
    // test:"",
    // entryOnly:true 只在路口文件 模块中添加

  }),
  // 正式环境中加入
  // new BundleAnalyzerPlugin()
]
// 就是webpack可以不处理应用的某些依赖库，使用externals配置后，依旧可以在代码中通过CMD、AMD或者window/global全局的方式访问。
// 减小打包的大小
const externals = {
  // imprt 的jquery  jQuery 库暴露出来的
  // 'vue': 'Vue',
  // 'vuex': 'Vuex',
  // 'vue-router': 'VueRouter',
  // 'element-ui': 'Element',
  // 'lodash': '_',
  'jquery': 'jQuery',
  'axios': 'axios',
}
//该配置覆盖webpack 默认 js 和css压缩
const optimization = {
  // 分离webpack 模块交互的代码
  // 需要在每一个页面插入
  runtimeChunk: {
    name: 'manifest'
  },
  //最小化
  minimizer: [
    new UglifyjsWebpackPlugin({
      cache: true,
      parallel: true,
      sourceMap: true // set to true if you want JS source maps
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
}

// production 模式才能加不然会有问题
// 可能还需要加入指定模块
const splitChunks = {

  chunks: 'async',
  //默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块，chunk._modules为gaichunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
  minSize: 30000, //默认值是30kb
  minChunks: 1, //被多少模块共享
  maxAsyncRequests: 5, //所有异步请求不得超过5个
  maxInitialRequests: 3, //初始话并行请求不得超过3个
  name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
  cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
    // 生成node_modules下所有的公共js打包
    // 可以再分里一次mainvendors  比如把vue axios 打包成一个文件
    vendors: {
      // [\\/] 代表可以是\也可以是/,
      test: /[\\/]node_modules[\\/]/,
      //test(module, chunks) {}, //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
      name: 'vendors', //抽取的chunk的名字
      // chunks(chunk) { 同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
      // },
      chunks: 'all',
      priority: 10,
      //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
      minChunks: 2,
      //最少被几个chunk引用
      reuseExistingChunk: true,
      //	如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
      enforce: true
      // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
    },
    // 自己的代码 工公代码打包成一个文件
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
// optimization.splitChunks = splitChunks;

config.entry = entry;
config.output = output;
config.module = rule;
config.devServer = devServer;
config.plugins = plugins;
config.optimization = optimization;

config.externals = externals;

module.exports = config;