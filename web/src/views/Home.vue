<template>
  <div>
    <div class="swiper-container">
      <swiper :options="swiperOptions">
        <swiper-slide
          ><img src="../assets/images/slide1.jpeg" class="w-100"
        /></swiper-slide>
        <swiper-slide
          ><img src="../assets/images/slide1.jpeg" class="w-100"
        /></swiper-slide>
        <swiper-slide
          ><img src="../assets/images/slide1.jpeg" class="w-100"
        /></swiper-slide>
        <div
          class="swiper-pagination pagination-home text-right px-3 pb-1"
          slot="pagination"
        ></div>
      </swiper>
    </div>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div
          class="nav-item mb-3"
          v-for="(item, index) in navList"
          :key="index"
        >
          <i class="sprite " :class="'sprite-' + item.className"></i>
          <div class="pb-2">{{ item.name }}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-card
      title="新闻资讯"
      icon="icon-cc-menu-circle
"
    >
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
      </div>
      <div class="pt-3 fs-lg">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div v-for="n in 5" :key="n" class="py-2 d-flex jc-between">
              <span>[新闻]</span>
              <span class="px-1">|</span>
              <span class="flex-1">体验服爆料丨廉颇未老，尚能战斗！</span>
              <span>04/10</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>

    <m-card title="英雄列表" icon="icon-card-hero"></m-card>
    <m-card title="精彩视频" icon="icon-card-hero"></m-card>
    <m-card title="图文攻略" icon="icon-card-hero"></m-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: '爆料站', className: 'blz' },
        { name: '故事站', className: 'gsz' },
        { name: '周边商城', className: 'zbsc' },
        { name: '体验服', className: 'tyf' },
        { name: '新人专区', className: 'xrzq' },
        { name: '荣耀传承', className: 'rycc' },
        { name: '模拟战资料库', className: 'mnzzlk' },
        { name: '王者营地', className: 'wzyd' },
        { name: '王者营地', className: 'wzyd' },
        { name: '王者营地', className: 'wzyd' }
      ],
      swiperOptions: {
        pagination: {
          el: '.pagination-home'
          // type: 'custom',
        },
        // Some Swiper option/callback...
        autoplay: true
      }
    }
  }
}
</script>

<style lang="scss" scpoed>
@import '../assets/scss/varibles';
.swiper-container {
  // --swiper-theme-color:map-get($colors, 'info');
  // --swiper-pagination-color: #00ff33; /* 两种都可以 */
  .pagination-home {
    .swiper-pagination-bullet {
      opacity: 1;
      background: map-get($colors, 'white');
      border-radius: 0.1538rem;
      &.swiper-pagination-bullet-active {
        background: map-get($colors, 'info');
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
</style>
