<!--  -->
<template>
  <div>
    <h1>路由的额基本知识</h1>
    <p>在nuxt-app中创建即配置</p>
    <p>在pages文件夹中创建子文件夹即可自文件夹创建index.vue文件</p>
    <nuxt-link to="/router">
      default路由
    </nuxt-link>
    <nuxt-link to="/router/child">
      child路由
    </nuxt-link>
    <nuxt-link :to="{name:'router-id',params:{id:100}}">
      动态路由
    </nuxt-link>

    <!-- <nuxt-child keep-alive :keep-alive-props="{ exclude: ['modal'] }" /> -->
    <nuxt-child />
  </div>
</template>
