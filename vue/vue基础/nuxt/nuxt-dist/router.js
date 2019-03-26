import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4ddf63d1 = () => interopDefault(import('../pages/center/index.vue' /* webpackChunkName: "pages/center/index" */))
const _7d288aec = () => interopDefault(import('../pages/pc.vue' /* webpackChunkName: "pages/pc" */))
const _75c0a0c2 = () => interopDefault(import('../pages/router.vue' /* webpackChunkName: "pages/router" */))
const _350e0dc5 = () => interopDefault(import('../pages/router/index.vue' /* webpackChunkName: "pages/router/index" */))
const _5f83a50f = () => interopDefault(import('../pages/router/child.vue' /* webpackChunkName: "pages/router/child" */))
const _02bde452 = () => interopDefault(import('../pages/router/child/index.vue' /* webpackChunkName: "pages/router/child/index" */))
const _01debd6d = () => interopDefault(import('../pages/router/_id.vue' /* webpackChunkName: "pages/router/_id" */))
const _456d8ee9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3a7e3f74 = () => interopDefault(import('../pages/_category.vue' /* webpackChunkName: "pages/_category" */))
const _ce9b4212 = () => interopDefault(import('../pages/_category/index.vue' /* webpackChunkName: "pages/_category/index" */))
const _0d936f6a = () => interopDefault(import('../pages/_category/_subcategory.vue' /* webpackChunkName: "pages/_category/_subcategory" */))
const _22253e6d = () => interopDefault(import('../pages/_category/_subcategory/index.vue' /* webpackChunkName: "pages/_category/_subcategory/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior,

    routes: [{
      path: "/center",
      component: _4ddf63d1,
      name: "center"
    }, {
      path: "/pc",
      component: _7d288aec,
      name: "pc"
    }, {
      path: "/router",
      component: _75c0a0c2,
      children: [{
        path: "",
        component: _350e0dc5,
        name: "router"
      }, {
        path: "child",
        component: _5f83a50f,
        children: [{
          path: "",
          component: _02bde452,
          name: "router-child"
        }]
      }, {
        path: ":id",
        component: _01debd6d,
        name: "router-id"
      }]
    }, {
      path: "/",
      component: _456d8ee9,
      name: "index"
    }, {
      path: "/:category",
      component: _3a7e3f74,
      children: [{
        path: "",
        component: _ce9b4212,
        name: "category"
      }, {
        path: ":subcategory",
        component: _0d936f6a,
        children: [{
          path: "",
          component: _22253e6d,
          name: "category-subcategory"
        }]
      }]
    }],

    fallback: false
  })
}
