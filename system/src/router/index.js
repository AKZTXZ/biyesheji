import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/VueHome.vue';
import Report from '../views/VueReport.vue';
import RecordList from '../views/RecordList.vue';

const routes = [
  {
    path: '/',
    name: 'VueHome',
    component: Home
  },
  {
    path: '/VueReport',
    name: 'VueReport',
    component: Report
  },
  {
    path: '/records',
    name: 'RecordList',
    component: RecordList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;