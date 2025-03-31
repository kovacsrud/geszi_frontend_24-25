import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Typicode from '@/components/Typicode.vue'
import Randomusers from '@/components/Randomusers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path:'/typicode',
      name:'typicode',
      component:Typicode
    },
    {
      path:'/randomusers',
      name:'randomusers',
      component:Randomusers
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
