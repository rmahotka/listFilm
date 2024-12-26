import { createRouter, createWebHistory } from 'vue-router'

import FilmsListPage from '@/views/FilmsListPage.vue'
import FilmPage from '@/views/FilmPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilmsListPage,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: FilmPage
    },
  ],
})

export default router
