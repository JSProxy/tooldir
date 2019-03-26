
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
  mode: 'history',
  baseURL:process.env.BASE_URL,
  routers: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '*',
      name: '404',
      component:()=> require('404')
    },
    { path: '/register', name: 'register', component: ()=> require('register') 
    },
    { path: '/login', name: 'login', component: ()=> require('login') },
    {
      path: 'index',
      name: '主页',
      component: () => require('zy')
    }
  ]

})
// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})
export default  router