<template>
  <div>
    <van-nav-bar title="我的任务" left-text="返回" left-arrow @click-left="goBack" fixed/>
    <div class="order_list" style="margin-top: 44px;">
      <van-list v-model="loading"
                :finished="finished"
                :immediate-check="false"
                finished-text="没有更多了"
                @load="getTaskList">
        <van-row class="taskRow"
                 v-for="(task, i) in taskList"
                 :key="i"
        >
          <van-row style="background: #FFFFFF; font-size: 18px; height: 5vh; line-height: 5vh; font-weight: 700; padding: 0 10px;">
            <van-col span="18">
              编号: {{ task.tasks_id }}
            </van-col>
            <van-col span="6" style="text-align: end;">
              <span style="color: #07c160;">{{ task.status}}</span>
            </van-col>
          </van-row>
          <van-divider style="margin: 6px 0;" />
          <van-row style="background: #FFFFFF; height: 9vh; padding: 0 10px;">
            <van-col span="18">
              <div style="display: flex;">
                <van-image :src="require('../../../assets/images/dy.png')" />
                <div style="display: flex; flex-direction: column;margin-left: 8px; justify-content: center;">
                  <span style="font-size: 14px;">要求: {{ task.tasks_name }}</span>
                  <span style="font-size: 14px; color: red;">目标: {{ task.target_times_task.completed_times }} &emsp;剩余: {{ task.target_times_task.completed_times }}</span>
                </div>
              </div>
            </van-col>
            <van-col span="6" style="text-align: end;">
              <van-button type="primary" size="small" style="height: 20px;" v-show="task.status == '待支付'" @click="handlePay(task)">支付</van-button>
              <van-button type="primary" size="small" style="height: 20px;" v-show="task.status == '待支付'" @click="handleDelete(task)">删除</van-button>
            </van-col>
          </van-row>
        </van-row>
        <!--<van-panel v-for="(task, i) in taskList"-->
        <!--:key="i"-->
        <!--:title="'编号: ' + task.num"-->
        <!--:status="task.yuan"-->
        <!--@click.native="toOrderDetail(task.id)">-->
        <!--</van-panel>-->
      </van-list>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Panel, Card, List, Tag, Row, Col, Image, Divider, Button, NavBar } from 'vant'
export default {
  name: 'myTask',
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Panel.name]: Panel,
    [Card.name]: Card,
    [List.name]: List,
    [Tag.name]: Tag,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [Divider.name]: Divider,
    [Button.name]: Button,
    [NavBar.name]: NavBar
  },
  data () {
    return {
      page: 0,
      limit: 10,
      loading: false,
      finished: false,
      taskList: []
    }
  },
  created () {
    this.taskList = [
      {
        tasks_id: 222,
        tasks_name: '关注',
        target_times_task: {
          completed_times: 1000
        },
        status: '待支付'
      },
      {
        tasks_id: 222,
        tasks_name: '关注',
        target_times_task: {
          completed_times: 1000
        },
        status: '审核中'
      },
      {
        tasks_id: 222,
        tasks_name: '关注',
        target_times_task: {
          completed_times: 1000
        },
        status: '进行中'
      }
    ]
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    getTaskList () {
      this.page++
      this.finished = true
      // let data = {
      //   page: this.page,
      //   pageSize: this.limit,
      //   type: this.activeIndex
      // }
      // getTasks(data).then(res => {
      //   this.taskList = [...this.taskList, ...res.data.results]
      //   this.loading = false
      //   if (res.data.next === null) {
      //     this.finished = true
      //   } else {
      //     this.finished = false
      //   }
      // })
    }
  },
  // 删除任务
  handleDelete (values) {
  },
  // 付钱
  handlePay (valuse) {
  }
}
</script>

<style lang="scss" scoped>
  .order_list {
  .van-panel {
    margin-top: 20px;
  }

  .van-card {
    background-color: #fff;
  }

  .total {
    text-align: right;
    padding: 10px;
  }

  .footer_btn {
    text-align: right;
  .van-button {
    margin-left: 10px;
  }
  }
  }
  .taskRow {
    background: #ffffff;
    font-size: 18px;
    margin-top: 10px;
  }
</style>
