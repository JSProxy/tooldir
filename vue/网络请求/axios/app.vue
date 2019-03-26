<!--  -->
<template>
  <div>
    
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  },
  created() {
    // 登入后可以请求user 数据
    if(localStorage.eleToken){
      const decode = jwt_decode(localStorage.eleToken)
      this.$store.dispatch('setIsAutnenticated',!this.isEmpty(decode))
      this.$store.dispatch('setUser',decode);
    }
  },
}

</script>
<style lang='stylus' scoped>
</style>