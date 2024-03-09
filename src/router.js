import { createRouter, createWebHistory } from 'vue-router'
import Page2 from './components/AboutUs.vue'
import Home from './App.vue'

const routes = [
  { path: '/page2', component: Page2 },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router