<template>
  <div style="margin-top: 44px;">
    <div style="margin: 10px; background: #FFFFFF; padding-bottom: 10px;">
      <van-field
        readonly
        v-model="task.tasks_id"
        label="编号"
        type="text"
      />
      <van-field
        v-model="type"
        label="分类"
        readonly
      />
      <van-field
        v-model="task.complete_cost"
        label="佣金"
        readonly
      />
      <van-field
        readonly
        v-model="task.tasks_name"
        autosize
        label="需求"
      />
      <div style="margin: 16px;">
        <van-button block type="info" @click="copy">
          复制链接
        </van-button>
      </div>
    </div>
    <div style="margin: 10px;">任务提交</div>
    <div style="margin: 10px; background: #FFFFFF; padding-bottom: 10px;">
      <van-uploader upload-icon="camera_full"
                     :after-read="afterRead"
                      v-model="fileList"
                      multiple
                     :max-count="3"
                     style="margin: 10px 0 0 10px;"
      />
      <div style="margin: 16px;">
        <van-button block type="info" @click="submitTask">
          提交任务
        </van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Form, Field, Picker, Popup, Button, Uploader, Toast, Notify} from 'vant'
import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'
import { pickTask, submitImage } from '@/api/loginapi'
export default {
  name: 'pickTask',
  // components: {
  //   Notify
  // },
  data () {
    return {
      url: '111',
      target_times: '',
      total_cost: '',
      price: '',
      type: '抖音',
      num: 0,
      complete_price: '',
      fileList: [],
      task: {},
      imageList: [],
      loading: false
    }
  },
  created () {
    this.task = this.$route.query.task
  },
  methods: {
    afterRead (file) {
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
        // this.fileList = [...this.fileList, ...res.data.id]
      })
    },
    copy () {
      let onInput = document.createElement('input')
      onInput.value = this.task.url
      document.body.appendChild(onInput)
      onInput.select()
      onInput.setSelectionRange(0, onInput.value.length)
      document.execCommand('Copy')
      Toast.success('复制成功')
      onInput.remove()
    },
    submitTask () {
      if (this.loading) {
        Notify({ type: 'warning', message: '图片未上传完成,请稍后提交' })
        return
      }
      if (this.imageList.length === 0) {
        Notify({ type: 'warning', message: '图片不可为空' })
      } else {
        let data = {
          tasks_id: this.task.tasks_id,
          price: this.task.complete_cost,
          image: this.imageList,
          state: '0'
        }
        pickTask(data).then(res => {
          Notify({ type: 'success', message: '提交成功，等待工作人员的审核' })
          this.$router.replace({
            // name: 'task'
            name: 'getTask'
          })
          // Dialog.alert({
          //   title: '提交成功',
          //   message: '您的任务已经成功提交，请等待工作人员的审核'
          // })
        }).catch(err => {
          Notify({ type: 'warning', message: err.response.data[0] })
        })
      }
    }
  },
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [field.name]: field,
    [fieldGroup.name]: fieldGroup,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Uploader.name]: Uploader
  }
}
</script>

<style scoped>

</style>
