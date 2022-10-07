import axios from 'axios'
const cartsModule = {
  namespaced: true,
  state() {
    return {
      // 商品数组
      list: []
    }
  },
  mutations: {
    initCarList(state, list) {
      state.list = list
    }
  },
  actions: {
    async getCarList(store) {
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      if (res.status == 200) {
        store.commit('initCarList', res.list)
      }
    }
  },
  getters: {
    // 计算总价格
    totalPrice(state) {
      return state.list
        .filter((item) => item.goods_state)
        .reduce((total, item) => {
          return (total += item.goods_price * item.goods_count)
        }, 0)
    },
    // 计算总数量
    totalNum(state) {
      return state.list
        .filter((item) => item.goods_state)
        .reduce((total, item) => {
          return (total += item.goods_count)
        }, 0)
    }
  }
}

export default cartsModule
