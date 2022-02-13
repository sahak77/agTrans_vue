import { createRouter, createWebHistory } from 'vue-router'
import { PATHS } from '../constants'

import Login from '../screens/noAuth/LoginScreen/Login.vue'
import Orders from '../screens/auth/OrdersScreen/Orders.vue'
import Clients from '../screens/auth/ClientsScreen/Clients.vue'
import AddClient from '../screens/auth/AddClientScreen/AddClient.vue'

const routes = [
  { path: PATHS.LOGIN, component: Login },
  { path: PATHS.ORDERS, component: Orders },
  { path: PATHS.CLIENTS, component: Clients },
  { path: PATHS.ADD_CLIENTS, component: AddClient },
  { path: PATHS.UPDATE_CLIENTS, component: AddClient }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
