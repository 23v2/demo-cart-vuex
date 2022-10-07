<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'cb' + id"
          :checked="state"
          @change="statechange"
        />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="img" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品数量 -->
        <Counter :count="count" @getCount="getCount"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
// 导入Counter组件
import Counter from "@/components/Counter/Counter.vue";

export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    title: {
      default: "",
      type: String,
    },
    price: {
      default: 10000,
      type: Number,
    },
    img: {
      default: "",
      type: String,
    },
    // 商品勾选状态
    state: {
      default: true,
      type: Boolean,
    },
    // 商品数量
    count: {
      default: 1,
      type: Number,
    },
  },
  methods: {
    statechange(e) {
      let id = this.id;
      let newstate = e.target.checked;
      // console.log(id);
      // console.log(newstate);
      this.$emit("newState", { value: newstate, cid: id });
    },
    getCount(e) {
      console.log("从counts传到goods的数量为");
      console.log(e);
      // 将获取到值再传递到APP组件（子传父）
      this.$emit("sendCount", { num: e, id: this.id });
    },
  },
  components: {
    Counter,
  },
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
