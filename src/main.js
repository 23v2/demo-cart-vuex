import Vue from 'vue'
import App from './App.vue'
// 引入vuex
import store from '@/store/index.js'
// 导入 bootstrap 样式表
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 相当于在vue原型上挂载一个$store（本质就是vuex）并且赋值
  store
}).$mount('#app')
