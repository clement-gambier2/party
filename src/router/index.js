import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/EditUser.vue'
import Bring from '@/views/Bring.vue'
import BringEdit from '@/views/EditBring.vue'

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
  },
  {
    path: '/editbring/:id',
    name: 'BringEdit',
    component: BringEdit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
