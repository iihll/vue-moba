<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img src="../assets/images/slide1.jpeg" class="w-100" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slide1.jpeg" class="w-100" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slide1.jpeg" class="w-100" />
        </swiper-slide>
        <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
      </swiper>
    </div>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap" :class="[arrow ? '' : 'arrow']">
        <div class="nav-item mb-3" v-for="(item, index) in navList" :key="index">
          <i class="sprite" :class="'sprite-' + item.className"></i>
          <div class="pb-2">{{ item.name }}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center" @click="arrow = !arrow">
        <i class="sprite sprite-arrow mr-1" :class="[arrow ? 'r-180' : '']"></i>
        <span>{{ arrow ? '收起' : '展开' }}</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card title="新闻资讯" icon="icon-cc-menu-circle" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 d-flex fs-lg ai-center"
          v-for="(news, index) in category.newsList"
          :key="index"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-1">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">
            {{
            news.title
            }}
          </span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- end of news card -->
    <m-list-card title="英雄列表" icon="icon-card-hero" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <div v-for="(hero, i) in category.heroList" :key="i" class="w-20 text-center p-2">
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </div>
        </div>
      </template>
    </m-list-card>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  // 过滤器
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      arrow: false,
      newsCats: [],
      heroCats: [],
      navList: [
        { name: "爆料站", className: "blz" },
        { name: "故事站", className: "gsz" },
        { name: "周边商城", className: "zbsc" },
        { name: "体验服", className: "tyf" },
        { name: "新人专区", className: "xrzq" },
        { name: "荣耀传承", className: "rycc" },
        { name: "模拟战资料库", className: "mnzzlk" },
        { name: "王者营地", className: "wzyd" },
        { name: "王者营地", className: "wzyd" },
        { name: "王者营地", className: "wzyd" }
      ],
      swiperOptions: {
        pagination: {
          el: ".pagination-home"
          // type: 'custom',
        },
        // Some Swiper option/callback...
        autoplay: true
      }
    };
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      // console.log(res)
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heroes/list");
      console.log(res);
      this.heroCats = res.data;
    }
  }
};
</script>

<style lang="scss" scpoed>
@import "../assets/scss/varibles";
.swiper-container {
  // --swiper-theme-color:map-get($colors, 'info');
  // --swiper-pagination-color: #00ff33; /* 两种都可以 */
  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      background: map-get($colors, "white");
      border-radius: 0.1538rem;
      &.swiper-pagination-bullet-active {
        background: map-get($colors, "info");
      }
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
.sprite-arrow {
  width: 0.7692rem;
  height: 0.7692rem;
}
.arrow {
  height: 4.375rem;
  overflow: hidden;
}
.r-180 {
  transform: rotate(180deg);
}
</style>
