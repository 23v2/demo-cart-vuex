import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import usersModule from '@/store/modules/users.js'
import cartsModule from '@/store/modules/carts.js'
// 注册Vuex
Vue.use(Vuex)
// 导出实例对象
export default new Vuex.Store({
  modules: {
    users: usersModule,
    carts: cartsModule
  }
})
