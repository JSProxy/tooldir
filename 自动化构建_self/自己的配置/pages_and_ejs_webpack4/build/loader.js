const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  resolve
} = require("./bundle")

const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
};
const htmlLoader = {
  // 入口文件引入html raw-loader 实现 html 的自动刷新
  //'html-withimg-loader' 解决html中img src 的解析问题 用esj就可以不用le
  test: /\.html$/,
  use: [
    'raw-loader'
  ]
};
// const htmlLoader = {
//   // 入口文件引入html raw-loader 实现 html 的自动刷新
//   test: /\.html$/,
//   use: [
//     'html-loader'
//   ]
// };
const ejsLoader = {
  test:/\.ejs$/,
  exclude: /node_modules/,
  include:/src/,
  use:['ejs-loader']
}
const cssLoader = {
  test: /\.css$/,
  // use: ['style-loader', 'css-loader', 'postcss-loader']
  use: [{
    "loader": MiniCssExtractPlugin.loader,
    options: {
      //默认使用 webpackOptions.output中的publicPath
      publicPath: '../'
    }
  }, 'css-loader', 'postcss-loader']
};
const scssLoader = {
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
};
const imgLoader = {
  test: /\.(png|jpg|svg|gif|jpeg)$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 5000,
      name: "imgaes/[name].[hash:8].[ext]",
    }
  }
}
const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "[name].[ext]",
      outputPath: "font"
    }
  }
}
exports.initLoader = function (env) {

  const loaders = [];
  loaders.push(
    htmlLoader,
    ejsLoader,
    cssLoader,
    scssLoader,
    jsLoader,
    imgLoader,
    fontLoader
  );
  return loaders;
}
