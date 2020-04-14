import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Article from '../views/Article.vue'
import Hero from '../views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', component: Home },
      { path: '/articles/:id', component: Article, props: true }
    ]
  },
  { path: '/heroes/:id', name: 'Hero', component: Hero, props: true }
]

const router = new VueRouter({
  routes,
  // 页面刷新回到顶部
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
