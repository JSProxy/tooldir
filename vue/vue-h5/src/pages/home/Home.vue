<template>
  <div class="home">
    <div class="home-body">

      <mu-paper :z-depth="1" class="home-list-wrap">
        <mu-list class="list">
          <mu-list-item @click.native="navigateTo(item.url)" class="list-item-box" v-for="(item, index) in homeList" :key="index">
            <mu-button class="list-item">
              <mu-icon :value="item.icon1"></mu-icon>
              <mu-list-item-title class="name">{{item.title}}</mu-list-item-title>
              <mu-icon :value="item.icon2"></mu-icon>
            </mu-button>
          </mu-list-item>
        </mu-list>
      </mu-paper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      homeList: [
        {
          icon1: 'swap_horiz',
          title: '路由跳转',
          icon2: 'chevron_right',
          url: '/page1'
        },
        {
          icon1: 'people',
          title: '路由懒加载',
          icon2: 'chevron_right',
          url: '/page2'
        },
        {
          icon1: 'group',
          title: '其他操作',
          icon2: 'chevron_right',
          url: '/page3'
        }
      ]
    };
  },
  methods: {
    navigateTo(url) {
      console.log('url', url);
      this.$router.push(url);
    }
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/common.scss';
.home {
  .list {
    height: 100vh;
  }
  .home-list-wrap {
    width: 100%;
    .list-item {
      width: 100%;
    }
    .name {
      margin-left: 10px;
    }
    .left-icon {
      min-width: 10px;
    }
    .right-icon {
      min-width: 0px;
    }
  }
  .mu-icon {
    font-size: 46px;
  }
}
</style>
