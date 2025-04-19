import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { RefSheet, SocialLinks } from '@/components'

const routes = [
  { path: '/', component: SocialLinks },
  { path: '/ref', component: RefSheet },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
