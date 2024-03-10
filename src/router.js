import { createRouter, createWebHistory } from 'vue-router'
import Page2 from './components/AboutUs.vue'
import Settings from './components/Settings.vue'
import Home from './components/Home.vue'
import Notfound from './components/404.vue'

const routes = [
  { path: '/page2', component: Page2 },
  { path: '/home', component: Home },
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: Notfound },
  { path: '/settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router