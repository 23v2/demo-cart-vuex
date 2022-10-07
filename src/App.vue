<template>
  <div class="app-container">
    <Head></Head>
    <!-- 渲染每一个商品信息 -->
    <Goods
      v-for="item in list"
      :id="item.id"
      :key="item.id"
      :title="item.goods_name"
      :price="item.goods_price"
      :img="item.goods_img"
      :state="item.goods_state"
      :count="item.goods_count"
      @newState="getNewState"
      @sendCount="getCount"
    ></Goods>
    <Footer
      :State="fullState"
      :tPrice="totalPrice"
      :tNum="totalNum"
      @fullChangeState="changeState"
    ></Footer>
  </div>
</template>

<script>
// 导入head组件
import Head from '@/components/Header/Header.vue'
// 导入axios
import axios from 'axios'
// 导入Goods组件
import Goods from '@/components/Goods/Goods.vue'
// 导入Footer组件
import Footer from '@/components/Footer/Footer.vue'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions('carts', ['getCarList']),
    getNewState(e) {
      // 获取从子组件传递过来的值
      // console.log(e);
      // 遍历list，当id和传递过来的id相同时，则更新对应勾选框状态
      this.list.some((item) => {
        // console.log(item);
        if (item.id == e.cid) {
          item.goods_state = e.value
          return true
        }
      })
    },
    changeState(val) {
      this.list.forEach((item) => {
        item.goods_state = val
      })
    },
    getCount(e) {
      console.log('从goods传来的数量为')
      console.log(e.num)
      // 遍历list，当id和传递过来的id相同时，则更新对应商品数量
      this.list.some((item) => {
        if (item.id == e.id) {
          item.goods_count = e.num
          return true
        }
      })
    }
  },
  created() {
    this.getCarList()
    console.log(this)
  },
  components: {
    Head,
    Goods,
    Footer
  },
  computed: {
    ...mapState({
      list: (state) => {
        return state.carts.list
      }
    }),
    ...mapGetters('carts', ['totalPrice', 'totalNum']),
    fullState() {
      // 将计算的得出的属性值存贮到State里面
      return (this.State = this.list.every((item) => item.goods_state == true))
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
