<template>
  <div style="margin-top: 50px;">
    <van-form @submit="onSubmit">
      <van-field
        readonly
        v-model="cost"
        name="cost"
        label="提现金额"
        type="text"
        placeholder="请选择"
        @click="showPicker = true"
        :rules="[{ required: true, message: '选择提现金额' }]"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        label="提现密码"
        placeholder="请输入"
        :rules="[{ required: true, message: '请输入登陆密码' }]"
      />
      <div style="margin: 16px;">
        <div style="margin: 5px; color: red;">亲，每天10点到18点可以提现，一天只能提现一次，提现24小时内到账。可到提现记录查询明细。</div>
        <van-button block type="info" :disabled="isFalse" native-type="submit">
          确定提交
        </van-button>
      </div>
    </van-form>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        value-key="text"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Form, Field, Picker, Popup, Button, Notify } from 'vant'
import { moneyRecord } from '@/api/loginapi'
export default {
  name: 'getWithdraw',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Button.name]: Button,
    Notify
  },
  data () {
    return {
      cost: '',
      password: '',
      isFalse: false,
      columns: [{
        num: 50,
        text: '50'
      }, {
        num: 100,
        text: '100'
      }, {
        num: 200,
        text: '200'
      }, {
        num: 500,
        text: '500'
      }, {
        num: 1000,
        text: '1000'
      }, {
        num: 1500,
        text: '1500'
      }, {
        num: 3000,
        text: '3000'
      }, {
        num: 5000,
        text: '5000'
      }],
      showPicker: false
    }
  },
  methods: {
    onConfirm (value) {
      this.cost = value.text
      this.showPicker = false
    },
    onSubmit (values) {
      if (Number(values.cost) > Number(this.$route.query.balance)) {
        Notify({ type: 'warning', message: '您的账户余额小于提现金额' })
        return
        // Toast('您的账户余额小于提现金额')
      }
      let data = {
        money: values.cost,
        password: values.password
      }
      moneyRecord(data).then(res => {
        Notify({ type: 'success', message: '提交成功，24小时之内到账' })
        this.$router.push({
          name: 'withdraw'
        })
      }).catch(err => {
        if (err.response.data.password) {
          Notify({ type: 'warning', message: err.response.data.password[0] })
        } else {
          Notify({ type: 'warning', message: err.response.data.message })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
