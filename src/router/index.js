import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Bring from '@/views/Bring.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
      path: '/bring',
      name: 'Bring',
      component: Bring
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
