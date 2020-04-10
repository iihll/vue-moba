import Vue from 'vue'
import App from './App.vue'

// 引入全局样式
import './assets/scss/global.scss'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
