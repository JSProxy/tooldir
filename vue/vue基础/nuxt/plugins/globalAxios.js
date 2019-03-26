export default function(app) {
  const axios = app.$axios
  // 基本配置
  axios.defaults.timeout = 10000
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'

  // 请求回调
  axios.onRequest(config => {
    // process.browser 判断是否为客户端
    console.log('全局拦截')
  })
  // 返回回调
  axios.onResponse(res => {})

  // 错误回调
  // axios.onError(error => {})
}
