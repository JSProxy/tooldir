module.exports =  {
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
        '/api': {
          // 原接口地址
            target: 'http://localhost:5001/api/',
            ws: true,
            changOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': ''
            }
            // 这样设置后页面调用地址:
            //http://localhost:8081/api/yt_api/login/doLogin
            // 服务器拦截后 在请求原地址
        }
    },
    before: app => { }
}
}