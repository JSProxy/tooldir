import Vue from 'vue'
// 全局引用
import ElementUI from 'element-ui'
// 按需引用
Vue.use(ElementUI)
// import { Button, Loading, MessageBox } from 'element-ui'
// Vue.use(Button)
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox

/* 按需加载 在build下配置babel，安装插件babel-plugin-component */
// babel: {
//   plugins: [['component', [
//     {
//       'libraryName': 'element-ui',
//       'styleLibraryName': 'theme-default'
//     },
//     'transform-async-to-generator',
//     'transform-runtime'
//   ]]],
//   comments: false
// }
