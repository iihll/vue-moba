<template>
  <div class="home">
    <div class="swiper-container">
      <!-- <swiper :options="swiperOptions">
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
      </swiper> -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home"
          // type: 'custom',
        },
        autoplay: true
      }
    }
  }
}
</script>

<style>

</style>