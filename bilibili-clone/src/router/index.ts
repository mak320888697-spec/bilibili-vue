import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomeView.vue'
import LoginView from '@/pages/LoginView.vue'
import ProfileView from '@/pages/ProfileView.vue'
import SearchView from '@/pages/SearchView.vue'
import CreatorView from '@/pages/CreatorView.vue'
import AdminView from '@/pages/AdminView.vue'
import VideoView from '@/pages/VideoView.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', name: 'SearchView', component: SearchView },
  { path: '/creator', name: 'CreatorView', component: CreatorView },
  { path: '/profile', name: 'ProfileView', component: ProfileView },
  { path: '/video/:id', name: 'VideoView', component: VideoView },
  { path: '/admin', name: 'AdminView', component: AdminView },
  { path: '/login', name: 'LoginView', component: LoginView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
