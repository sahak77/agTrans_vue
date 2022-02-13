import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './index.scss'
import 'element-plus/dist/index.css'
import { PATHS } from './constants'
import infiniteScroll from 'vue3-infinite-scroll-good'


router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.href === PATHS.LOGIN && localStorage.getItem('token')) next(PATHS.ORDERS)
  else if(to.href !== PATHS.LOGIN && !localStorage.getItem('token')) next(PATHS.LOGIN)
  else next()
})

createApp(App).use(store).use(router).use(ElementPlus).use(infiniteScroll).mount('#app')
