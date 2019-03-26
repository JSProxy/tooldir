import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'muse-ui-progress';
Vue.use(Router);

import Home from '../pages/home/Home.vue';
import Page1 from '../pages/page1/Page1.vue';

const Page2 = () => import(/* webpackChunkName: "Page2" */ '../pages/page2/Page2.vue');
const Page3 = () => import(/* webpackChunkName: "Page3" */ '../pages/page3/Page3.vue');
console.log('process.env.BASE_URL', process.env.BASE_URL);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: '主页',
            component: Home,
        },
        {
            path: '/page1',
            name: '普通页面跳转',
            component: Page1,
        },
        {
            path: '/page2',
            name: '懒加载跳转',
            // route level code-splitting
            // this generates a separate chunk (Page2.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Page2,
        },
        {
            path: '/page3',
            name: '其他',
            component: Page3,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});
router.beforeEach((to, from, next) => {
    /* must call `next` */
    document.title = to.name;
    NProgress.start();
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});
export default router;
