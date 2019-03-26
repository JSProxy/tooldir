import Vue from 'vue'
import router from './router'
import App from './app.vue'
import axios from './http'
import store from './store'

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')