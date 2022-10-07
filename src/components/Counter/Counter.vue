<template>
  <div
    class="number-container d-flex justify-content-center align-items-center"
  >
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: this.count,
    };
  },
  methods: {
    sub() {
      if (this.num > 0) {
        this.num--;
        // 修改数量同时传递数据
        this.$emit("getCount", this.num);
      } else {
        return;
      }
    },
    add() {
      this.num++;
      // 修改数量同时传递数据
      this.$emit("getCount", this.num);
    },
  },
  props: {
    count: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
