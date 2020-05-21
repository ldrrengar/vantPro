<template>
    <div id="login">
      <div class="centdiv">
        <div class="imgDiv">
          <van-image
            fit="contain"
            width="100%"
            height="40"
            :src="imgaddr"
          />
        </div>
        <van-cell-group>
          <h1 class="h1Class">港口业务智能系统</h1>
          <van-field
            v-model="phone"
            center
            clearable
            left-icon="contact"
            placeholder="请输入手机号"
          ></van-field>
        </van-cell-group>
        <van-button type="primary" size="large" @click="loginFun">登录</van-button>
      </div>
      <div class="bottomDiv">
        中国煤炭工业秦皇岛进出口有限公司 版权所有 京ICP备06013940 京公网安备110401000041号<br>技术支持：中煤信息技术（北京）有限公司
      </div>
    </div>
</template>

<script>
  import login from './LoginIndex.js'
  export default {
    mixins: [login]
  }
</script>

<style lang="scss" scoped>
  .centdiv {
    text-align: center;
    padding: 10px;
  }
  .bottomDiv {
    width: auto;
    position: absolute;
    bottom: 15px;
    height: auto;
    margin: 10px 5px;
    text-align: center;
    font-size: 13px;
    color: #4e4e4e;
  }
  .imgDiv {
    width: auto;
    height: 100px;
    padding: 15px 0;
  }
  .h1Class {
    color: #0b73c5;
    font-size: 20px;
    float: left;
    height: 40px;
    width: 100%;
    text-align: center;
    font-weight: 700;
    line-height: 40px;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
