export default function(context) {
  if (context.isServer && context.req) {
    console.log('每次路由切换都会执行中间键')
    // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  }
  // console.log(context)
  context.store.commit('updateLoginState')
}
