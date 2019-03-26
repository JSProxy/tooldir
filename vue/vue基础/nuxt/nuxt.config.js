const pkg = require('./package')

module.exports = {
  mode: 'universal',
  // buildDir: 'nuxt-dist',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  router: {
    // mode: 'hash',
    middleware: 'login',
    linkActiveClass: 'active-link',
    linkPrefetchedClass: 'nuxt-link-prefetched',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior: function(to, from, savedPosition) {
      // 强制每一个页面都桂东到顶部
      return { x: 0, y: 0 }
    }
    // parseQuery :()=>{} ,
    // stringifyQuery:()=>{},
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:1818'
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#fff' },
  // 自定义loading
  loading: '~/components/loading.vue',

  /*
  ** Global CSS
  */
  //  { src: 'bulma', lang: 'sass' },
  css: ['~/assets/style/global.css', 'element-ui/lib/theme-chalk/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/mytool',
      ssr: false
    },
    {
      src: '~/plugins/globalAxios',
      ssr: false
    },
    {
      src: '~/plugins/element-ui',
      ssr: true
    }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  // 处理跨域
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // 自动拦截失败请求，默认为3次。
    retry: { retries: 3 },
    proxy: true,
    prefix: '/api', // baseURL需要代理的url前缀
    credentials: true // 跨域是否带cookie
  },
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:1818', // 代理地址
      changeOrigin: true,
      //       /api/将被添加到API端点的所有请求中。可以使用pathRewrite选项删除。
      // 因为在 ajax 的 url 中加了前缀 /api，而原本的接口是没有这个前缀的。
      // 所以需要通过 pathRewrite 来重写地址，将前缀 /api 转为 /或者是''。
      // 如果本身的接口地址就有 /api 这种通用前缀，就可以把 pathRewrite 删掉。
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'element-ui'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
