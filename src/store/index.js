import { createStore } from 'vuex'
import { clientsSlice } from './clients'
import { initSlice } from './init'
import { ordersSlice } from './orders'

export default createStore({
  modules: {
    orders: ordersSlice,
    clients: clientsSlice,
    init: initSlice,
  },
  
})
