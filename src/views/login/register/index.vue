<template>
  <md-field-group class="foget_view" style="margin-top: 44px;">
  <md-field
    v-model="mobile"
    icon="mobile"
    placeholder="请输入手机号"/>
  <md-field
    v-model="code"
    icon="comment"
    placeholder="请输入短信验证码"
  >
    <div slot="rightIcon" @click="getCode" class="getCode red">
      <countdown v-if="counting" :time="60000" @end="countdownend">
        <template slot-scope="props">{{ +props.seconds || 60 }}秒后获取</template>
      </countdown>
      <span v-else>获取验证码</span>
    </div>
  </md-field >
   <md-field v-model="username" icon="username" placeholder="请输入用户名"/>
   <md-field
    v-model="password"
    icon="lock"
    :is-error="isErrow"
    type="password"
    placeholder="请输入密码"/>
    <md-field
    v-model="passwordRepeat"
    type="password"
    icon="lock"
    :is-error="isErrow"
    placeholder="请再次输入密码" /><div class="red" v-show="isErrow">两次密码输入不一致</div><div class="foget_submit">
    <van-button size="large" type="primary" @click="submitCode">注册</van-button>
    <div style="margin: 10px; text-align: center; text-decoration:underline;"><a href="http://120.24.25.65:8081/zanduodian.apk" style="color: #1989fa;">下载安卓版app</a></div>
  </div>
</md-field-group>
</template>

<script>
import header from '@/components/Header'
import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'
import { getCode, register } from '@/api/loginapi'
import { CountDown } from 'vant'
export default {
  data () {
    return {
      counting: false,
      mobile: '',
      code: '',
      isErrow: false,
      password: '',
      username: '',
      passwordRepeat: '',
      invitation_name: ''
    }
  },
  created () {
    this.invitation_name = this.$route.query.username
  },
  methods: {
    submitCode () {
      // this.$router.push({ name: 'forgetReset' })
      let data = {
        username: this.mobile,
        code: this.code,
        password: this.password,
        invitation_name: this.invitation_name,
        name: this.username
      }
      register(data).then(res => {
        if (res.status === 201) {
          this.$router.replace({name: 'login'})
        }
      })
    },
    getCode () {
      let data = {
        mobile: this.mobile
      }
      getCode(data).then(res => {
        this.counting = true
      })
    },
    countdownend () {
      this.counting = false
    }
  },

  components: {
    [field.name]: field,
    [fieldGroup.name]: fieldGroup,
    'v-header': header,
    [CountDown.name]: CountDown
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/mixin';
.red{
  color: red;
}
div.foget_view {
  background-color: #fff;
  padding-top: 30px;
}

div.foget_submit {
  padding-top: 30px;
  padding-bottom: 20px;
}

.getCode {
  @include one-border(left);
  text-align: center;
}

.time_down {
  color: red;
}
</style>
