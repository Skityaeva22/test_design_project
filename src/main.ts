import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/styles/tailwind/base.postcss'
import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import 'element-plus/theme-chalk/dark/css-vars.css'

import 'element-plus/dist/index.css'
import '@/styles/index.scss'

import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import App from './App.vue'
import router from '@/router'
import 'vue-final-modal/style.css'
import '@/styles/tailwind/index.postcss'

const pinia = createPinia()
const app = createApp(App)
const vfm = createVfm()

app.use(router)
app.use(pinia)
app.use(vfm)
app.use(ElementPlus, { locale: ru })
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

app.mount('#app')
