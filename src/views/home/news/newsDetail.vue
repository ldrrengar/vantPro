<template>
  <van-cell-group
    style="margin-top: 44px; background: #FFFFFF; height: 100%;">
    <div style="text-align: center; font-size: 22px; font-weight: 700; padding: 10px;">
      端午节特别活动
    </div>
    <van-divider />
    <div style="padding: 10px;">&emsp;&emsp;端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动端午节特别活动</div>
  </van-cell-group>
</template>

<script>
import { Cell, CellGroup, Divider } from 'vant'
export default {
    name: 'newsDetail',
    created () {
      console.log(this.$route.params.id)
    },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Divider.name]: Divider
  }
}
</script>

<style scoped>

</style>
