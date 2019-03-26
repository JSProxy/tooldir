<template>
  <div>
    <h1 v-if="error.statusCode===404">
      404页面
    </h1>
    <h2 v-else>
      500页面,服务器错误
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
