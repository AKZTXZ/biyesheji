import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/ReportView.vue')
  },
  {
    path: '/flow',
    name: 'flow',
    component: () => import('@/views/FlowView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router