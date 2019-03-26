<!--  -->
<template>
  <div>
    动态路由 {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  // { params, query, store }
  // throw new Error('Under Construction!')
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
