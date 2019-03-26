
# Nuxt.js学习

```npx create-nuxt-app 工程名

```

![nuxt流程图](https://upload-images.jianshu.io/upload_images/5531211-d1a3e5b36ee03f08.png)
红框、黄框内的周期都不存在Window对象
生命周期流程图，红框内的是Nuxt的生命周期(运行在服务端)，黄框内同时运行在服务端&&客户端上，绿框内则运行在客户端

## 上下文

[context](https://nuxtjs.org/api/context)

## 动态路由 传参数

## 路由动画

## 默认模版 默认布局 error.vue

## 个性meta 标签

## asyncData 异步请求 数据

## 为页面自定义布局

    layout: 'name'

## 自定义加载动画

loading: '~components/loading.vue'

## 注意点

fetch、asyncData、validate使用范围
只能在页面组件使用，也就是pages目录下的组件，而不是components目录下的组件，要有所区分

## 部署

1传统部署
npm run build && npm run start
2pm2部署
npm install pm2 -g
npm run build
pm2 start ./node_modules/nuxt/bin/nuxt-start

[Nuxt.js docs](https://nuxtjs.org).
