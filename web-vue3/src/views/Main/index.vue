<template>
  <div class="main">
    <div class="sticky top-0 z-999 bg-black py-2 px-3 flex items-center">
      <img class="h-8" src="../../assets/logo.png" alt="logo">
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-gray-300 text-xs">团队成就更多</div>
      </div>
      <button class="text-white text-sm px-1 py-1 rounded-sm border-none bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-2 pb-1">
      <div class="flex justify-around text-white pb-1">
        <div class="pb-1 border-4 border-solid border-transparent" v-for="item in navList" :key="item.name">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '攻略中心',
          link: '/'
        },
        {
          name: '赛事中心',
          link: '/'
        }
      ]
    }
  }
}
</script>