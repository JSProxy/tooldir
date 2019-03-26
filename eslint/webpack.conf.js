module.exports = {
  module: {
    rules :[
      {
        test: /\.(js|vue)$/,
        use:'eslint-loader',
        // 预处理 也就是会在vue-loader 之前检查一遍
        enforce:'pre',
        include: [resolve('src')],
        options:{
          // 错误提示 规范
          formatter: require('eslint-friendly-formatter')
          // fix: true
        }
      }
    ]
  }
}

const eslintLoader = {
  test: /\.js$/,
  enforce:'pre',
  exclude: /node_modules/,
  use:
  {
    loader: 'eslint-loader',
    options:{
          // 错误提示 规范
          formatter: require('eslint-friendly-formatter'),
          fix: true
  }
 }
}
