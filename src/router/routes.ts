import type { RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import HomePage from '../pages/HomePage.vue'
// import BotPage from '../pages/BotPage.vue'
// import MenuPage from '../pages/MenuPage.vue'

const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: HomePage,
      },
      {
        path: '/bot',
        name: 'Bot',
        component: HomePage,
      },
      {
        path: '/menu',
        name: 'Menu',
        component: HomePage,
      },
    ],
  },
]

export default routes
