<template>
  <div class="page-article" v-if="model">
    <div class="d-flex p-2 ai-center border-bottom">
      <i class="iconfont icon-back pr-2 text-blue fs-xl" @click="$router.push('/login')"></i>
      <strong class="flex-1 text-ellipsis text-blue">{{model.title}}</strong>
      <div class="text-grey fs-xxs ml-4">2019-06-19</div>
    </div>
    <div v-html="model.body" class="p-3 mb-2 fs-xl article-body"></div>
    <div class="p-3 border-top">
      <div class="d-flex ai-center mb-4">
        <i class="iconfont icon-news fs-xl"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
      <router-link
        tag="div"
        :to="`/articles/${item._id}`"
        class="text-ellipsis fs-lg mb-1"
        v-for="item in model.related"
        :key="item._id"
      >{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    };
  },
  // TODO: vue watch
  watch: {
    id: "fetchArticle"
    /* id() {
        this.fetchArticle()
    } */
  },
  created() {
    this.fetchArticle();
  },
  methods: {
    async fetchArticle() {
      const res = await this.$http.get("articles/" + this.id);
      console.log(res);
      this.model = res.data;
    }
  }
};
</script>

<style lang="scss">
.page-article {
  .article-body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>