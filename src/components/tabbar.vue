<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "tabbar",
    data () {
      return {
        currIndex: 0,
        active: 0,
        tabbars: [
          {
            name: "home",
            title: "首页",
            // normal: require("../common/icon/home.png"),
            // active: require("../common/icon/home_ac.png")
            normal: "",
            active: ""
          },
          {
            name: "category",
            title: "分类",
            // normal: require("../common/icon/category.png"),
            // active: require("../common/icon/category_ac.png")
            normal: "",
            active: ""
          },
          {
            name: "message",
            title: "消息",
            // normal: require("../common/icon/message.png"),
            // active: require("../common/icon/message.png")
            normal: "",
            active: ""
          },
          {
            name: "cart",
            title: "购物车",
            // normal: require("../common/icon/cart.png"),
            // active: require("../common/icon/cart_ac.png")
            normal: "",
            active: ""
          },
          {
            name: "mine",
            title: "我的",
            // normal: require("../common/icon/mine.png"),
            // active: require("../common/icon/mine_ac.png")
            normal: "",
            active: ""
          }
        ]
      }
    },
    methods: {
      tab (index, val) {
        this.currIndex = index
        this.$router.push(val)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .active_tab img {
    width: 26px;
    height: 26px;
  }

  .van-tabbar-item--active {
    color: #e10f02;
  }
</style>
