<template>
  <div style="margin-top: 44px;">
    <van-form validate-first @failed="onFailed">
      <van-field
        v-model="video"
        rows="5"
        autosize
        label="视频地址"
        type="textarea"
        placeholder="复制需要做任务的视频链接黏贴此处"
        show-word-limit
      />
    </van-form>
  </div>
</template>

<script>
import { Form, Field } from 'vant'
import field from '@/components/field/'
import fieldGroup from '@/components/field-group/'
export default {
    name: 'newTask',
    data () {
      return {
        video: ''
      }
    },
    components: {
      [Form.name]: Form,
      [Field.name]: Field,
      [field.name]: field,
      [fieldGroup.name]: fieldGroup
    }
}
</script>

<style scoped>

</style>
