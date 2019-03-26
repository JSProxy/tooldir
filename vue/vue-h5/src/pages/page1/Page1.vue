<template>
  <div class="page1">
    <div class="page1-body">
      <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <mu-container ref="container" class="demo-loadmore-content">
          <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
            <mu-list>
              <template v-for="i in list">
                <mu-list-item>
                  <mu-list-item-title>{{i.title}}</mu-list-item-title>
                </mu-list-item>
                <mu-divider />
              </template>
            </mu-list>
          </mu-load-more>
        </mu-container>
      </mu-paper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      num: 10,
      refreshing: false,
      loading: false,
      text: 'List'
    };
  },
  async mounted() {
    const topic = await this.$http.getTopics();
    console.log(topic);
    if (topic.data.data) {
      this.list = topic.data.data;
    }
  },
  methods: {
    refresh() {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
        this.text = this.text === 'List' ? 'Menu' : 'List';
        this.num = 10;
      }, 2000);
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.num += 10;
      }, 2000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../assets/common.scss';
.page1 {
  height: 100vh;
  background: #fff;
}
</style>
