<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <el-button>默认按钮</el-button>
    <div>
      <ul>
        <nuxt-link to="/router">
          路由
        </nuxt-link>
        <nuxt-link :to="{name:'category',params:{category:'参数一'}}">
          动态且套路由1
        </nuxt-link>
        <nuxt-link :to="{name:'category-subcategory',params:{category:'参数一',subcategory:'参数二'}}">
          动态且套路由2
        </nuxt-link>
      </ul>
      <ul>
        <nuxt-link to="/pc">
          自定义布局
        </nuxt-link>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  // <transition name="test" 这个方式设置组件>
  // <transition name="test" mode="out-in">
  // transition: 'test',
  transition: {
    // 还有很多属性和钩子 https://nuxtjs.org/api/pages-transition
    name: 'test',
    mode: 'out-in'
  },
  // transition (to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // }
  // 禁止进度条
  // loading: false,

  // 特定的中间键
  middleware: 'test',
  data() {
    return {
      title: '主页',
      fetchData: '111'
    }
  },
  asyncData() {
    // 可以是异步的并接受上下文context
    // asyncData的结果将与数据合并。
    // 您无法通过this内部访问组件实例，asyncData因为它在启动组件之前被调用。
    return {
      title: '异步主页'
    }
  },
  async fetch({ store, params, $axios }) {
    // 您无法通过this内部访问组件实例，fetch因为它在启动组件之前被调用。
    // 每次加载组件前 填充存储
    const { data } = await $axios.get('https://api.myjson.com/bins/rhnw8')
    store.commit('updateWebName', data.fetchName)
    await store.dispatch('disPatchAction')
    // const { tokenData } = await $axios.get('/token')
    // store.commit('setToken', tokenData.token)
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid 设置唯一标识 避免重复
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
