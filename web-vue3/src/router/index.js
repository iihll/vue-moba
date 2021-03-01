import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Main/index.vue'),
    children: [
      { path: '/', component: () => import('../views/Home/index.vue') },
      { path: '/articles/:id', component: () => import('../views/Article/index.vue'), props: true }
    ]
  },
  { path: '/heroes/:id', name: 'Hero', component: () => import('../views/Hero/index.vue'), props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
