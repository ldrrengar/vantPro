<template>
    <div style="margin-top: 44px;">
      <van-form style="margin-top: 20px; margin: 10px;">
        <van-field
          readonly
          label="收款方账号"
          v-model="account"
          name="account"
        />
        <van-field
          readonly
          label="收款方姓名"
          v-model="accountName"
          name="accountName"
        />
        <van-field
          readonly
          label="转账金额"
          v-model="muchMoney"
          name="muchMoney"
        />
        <van-field
          v-model="payAccount"
          name="payAccount"
          label="付款账号"
          placeholder="请输入付款账号"
        />
        <van-field
          v-model="payName"
          name="payName"
          label="付款人姓名"
          placeholder="请输入付款人姓名"
        />
      </van-form>
      <div style="margin: 10px;">转账凭证(请使用支付宝转账)</div>
      <div style="margin: 10px; background: #FFFFFF; padding-bottom: 10px;">
        <van-uploader upload-icon="camera_full"
                      :after-read="afterRead"
                      v-model="fileList"
                      multiple
                      :max-count="3"
                      style="margin: 10px 0 0 10px;"
        />
      </div>
      <div style="margin: 16px;">
        <van-button block type="info" @click="copy" style="margin-top: 10px;">
          复制收款账号
        </van-button>
        <van-button block type="info" @click="handleSumbit" style="margin-top: 10px;">
          确定提交
        </van-button>
      </div>
    </div>
</template>

<script>
import { Form, Field, Popup, Button, Dialog, Notify, Uploader, Toast } from 'vant'
import { submitImage, Transfer } from '@/api/loginapi'
import { getLocalStorage } from '@/utils/local-storage'
export default {
  name: 'payMent',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Uploader.name]: Uploader,
    [Button.name]: Button,
    Dialog,
    Notify
  },
  data () {
    return {
      account: '18179768000',
      accountName: '邱斌',
      muchMoney: '',
      payAccount: '',
      tasks_id: '',
      payName: '',
      payType: '',
      fileList: [],
      imageList: [],
      member: false,
      loading: false
    }
  },
  created () {
    this.muchMoney = this.$route.query.total_cost
    // 任务编号或者会员编号
    this.tasks_id = this.$route.query.tasks_id
    // 是否会员任务
    this.member = this.$route.query.member
  },
  methods: {
    handleSumbit () {
      if (this.loading) {
        Notify({ type: 'warning', message: '图片未上传完成,请稍后提交' })
        return
      }
      if (this.payName === '') {
        Notify({ type: 'warning', message: '付款人姓名不可为空' })
        return
        // Toast('您的账户余额小于提现金额')
      }
      if (this.payAccount === '') {
        Notify({ type: 'warning', message: '付款人账号不可为空' })
        return
        // Toast('您的账户余额小于提现金额')
      }
      if (this.imageList.length === 0) {
        Notify({ type: 'warning', message: '图片不可为空' })
      } else {
        let data = {
          money: this.muchMoney,
          cheques_account: this.account,
          cheques_name: this.accountName,
          payment_account: this.payAccount,
          payment_name: this.payName,
          tasks_id: this.tasks_id,
          image: this.imageList,
          member: this.member,
          created: getLocalStorage(['username']).username
        }
        Transfer(data).then(res => {
          Dialog.alert({
            title: '提交成功',
            message: '您的转账已经成功提交，请等待工作人员的审核'
          }).then(() => {
            if (this.member === true) {
              this.$router.replace({
                name: 'member'
              })
            } else {
              this.$router.replace({
                name: 'myTask'
              })
            }
          })
          this.muchMoney = ''
          this.payName = ''
          this.payAccount = ''
          this.tasks_id = ''
          this.payName = ''
          this.imageList = []
          this.member = false
        }).catch(err => {
          Notify({ type: 'warning', message: '提交失败，请稍后重新提交，或联系工作人员' })
        })
      }
    },
    afterRead (file) {
      // const param = new FormData()
      // param.append('url', file.file)
      // console.log(param)
      this.loading = true
      file.status = 'uploading'
      file.message = '上传中...'
      const param = new FormData()
      param.append('url', file.file)
      submitImage(param).then(res => {
        if (res.data.id) {
          file.status = 'done'
          this.loading = false
          this.imageList.push(res.data.id)
        }
      })
    },
    copy () {
      let onInput = document.createElement('input')
      onInput.value = this.account
      document.body.appendChild(onInput)
      onInput.select()
      onInput.setSelectionRange(0, onInput.value.length)
      document.execCommand('Copy')
      Toast.success('复制成功')
      onInput.remove()
    }
  }
}
</script>

<style scoped>

</style>
