import Vue from 'vue'
import App from './App.vue'

// iconfont
import './assets/iconfont/iconfont.css'
// 引入全局样式
import './assets/scss/global.scss'

import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

// 引入卡片组件
import Card from './components/Card.vue'
Vue.component('m-card', Card)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
