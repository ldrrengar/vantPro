<template>
  <van-pull-refresh
    style="overflow: auto; margin-top: 44px;"
    success-text="刷新成功"
    v-model="isLoading"
    @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
     <van-cell-group v-for="(item, i) in list" :key="i" style="margin: 5px;"  @click="toDetail(item.id)">
        <van-cell :title="item.title" style="font-size: 20px;font-weight: 700;" isLink>
        </van-cell>
        <div style="font-size: 12px;font-weight: 100;padding: 10px;margin-left: 5px;">{{ item.contant }}</div>
      </van-cell-group>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { Row, Col, PullRefresh, List } from 'vant'
export default {
    name: 'news',
    data () {
    return {
      order: [],
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    toDetail (val) {
      this.$router.push({ name: 'newsDetail', params: { id: val } })
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 1000)
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push({id: i, title: '端午节特别活动', contant: '端午特别活动'})
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 15) {
          this.finished = true
        }
      }, 1000)
    }
  },
    components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
    }
}
</script>

<style scoped lang="scss">
  @import '../../../assets/scss/mixin';
  .order_status {
    background-color: #fff;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;

    > div {
      @include one-border;
      &::after {
        top: 50%;
        left: 50%;
        border-bottom: 0;
        border-right: 1px solid gray;
        height: 150%;
        transform: scale(0.5) translate3d(-50%, -50%, 0);
        transform-origin: 0 0;
      }
      &:last-child::after {
        border: 0;
      }
    }

    .order_status_icon {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: inline-block;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 24px;
        color: #000;
      }
    }
  }
</style>
