<template>
  <div class="page2">
    <div class="page2-body">
      <mu-button @click.native="sub" class="btn" fab color="indigo">
        <mu-icon value="remove"></mu-icon>
      </mu-button>
      
      <mu-button @click.native="add" class="btn" fab color="teal">
        <mu-icon value="add"></mu-icon>
      </mu-button>

    </div>
    <div>{{num}}</div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['num'])
  },
  methods: {
    ...mapMutations(['add', 'sub'])
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/common.scss';
.page2 {
  height: 100vh;
  background: #fff;
  text-align: center;
  .button-wrapper {
    text-align: center;
    .mu-button {
      margin: 8px;
      vertical-align: middle;
    }
    a.mu-button {
      text-decoration: none;
    }
  }
  .page2-body {
    display: flex;
    justify-content: center;
      overflow: hidden;

    .btn {
      margin: 30px;
      overflow: hidden;
    }
  }
}
</style>
