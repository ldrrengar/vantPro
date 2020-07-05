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
                      accept="image/png, image/jpeg"
                      :max-size="3 * 1024 * 1024"
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
      payAccount: '',
      payName: '',
      payType: '',
      fileList: []
    }
  },
  created () {
  },
  methods: {
    handleSumbit () {
    },
    afterRead (file) {
      const param = new FormData()
      param.append('url', file.file)
      console.log(param)
      // submitImage(param).then(res => {
      //   this.imageList.push(res.data.id)
      //   console.log(this.imageList)
      //   // this.fileList = [...this.fileList, ...res.data.id]
      // })
    },
    copy () {
      let onInput = document.createElement('input')
      onInput.value = this.account
      document.body.appendChild(onInput)
      onInput.select()
      document.execCommand('Copy')
      Toast.success('复制成功')
      onInput.remove()
    }
  }
}
</script>

<style scoped>

</style>
