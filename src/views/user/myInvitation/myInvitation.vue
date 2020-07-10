<template>
  <div style="background: #ffffff;">
    <van-nav-bar title="我的邀请码" left-text="返回" right-text="" left-arrow @click-left="goBack" @click-right="downFile" fixed>
      <!--<template #right>-->
        <!--<van-icon name="leimu" size="18" />-->
      <!--</template>-->
    </van-nav-bar>
    <!--<div class="container">-->
      <!--<div class="share-img">-->
        <!--<img :src="imgUrl" alt="分享图">-->
      <!--</div>-->
      <!--<div class="creat-img" ref="box">-->
        <!--<img src="../../../assets/images/qrcode.png" alt="分享背景图">-->
        <!--<div id="qrcode" class="qrcode"></div>-->
      <!--</div>-->
    <!--</div>-->
    <div ref="qrCodeUrl" style="margin-top: 44px; text-align: center;">
      <img src="../../../assets/images/background1.png" style="width: 320px;">
      <div id="qrCode" class="qrcode"></div>
    </div>
    <div class="qrcode" ref="qrCodeUrl"></div>
    <!--<div style="padding: 10px; margin-top: 60px; color: red; font-weight: bold;text-align: center;">截屏将图片发送给好友,好友扫码注册后可获取邀请奖励</div>-->
  </div>
</template>

<script>
import { NavBar, Image as VanImage } from 'vant'
import QRCode from 'qrcodejs2'
import html2canvas from 'html2canvas'
export default {
    name: 'myInvitation',
    components: {
      [NavBar.name]: NavBar,
      [VanImage.name]: VanImage
    },
    data () {
      return {
        imgData: '',
        imgUrl: ''
      }
    },
    mounted () {
      this.creatQrCode()
    },
    // watch: {
    // imgUrl (val, oldval) {
    //   // 监听到imgUrl有变化以后 说明新图片已经生成 隐藏DOM
    //   this.$refs.box.style.display = 'none'
    // }
  // },
    methods: {
      goBack () {
        this.$router.back(-1)
      },
      downFile () {
      },
      creatQrCode () {
        // let width = document.documentElement.clientWidth
        // width = width * 0.32
        let qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: 'http://39.108.145.250:8081/#/login?username=' + window.localStorage.getItem('username'), // 需要转换为二维码的内容 39.108.145.250:8081
          width: '150',
          height: '150',
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        })
        this.createPicture()
      },
      createPicture () {
        html2canvas(this.$refs.qrCodeUrl).then(canvas => {
          let imgUrl = URL.createObjectURL(this.base64ToBlob(canvas.toDataURL()))
          this.imgUrl = imgUrl
          let imgData = canvas.toDataURL('image/jpeg')
          this.imgData = imgData
        })
      },
      base64ToBlob (code) {
        let parts = code.split(';base64,')
        let contentType = parts[0].split(':')[1]
        let raw = window.atob(parts[1])
        let rawLength = raw.length

        let uInt8Array = new Uint8Array(rawLength)

        for (let i = 0; i < rawLength; ++i) {
          uInt8Array[i] = raw.charCodeAt(i)
        }
        return new Blob([uInt8Array], {type: contentType})
      }
    }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    margin-top: 44px;
  }
  .creat-img{
    width: 100%;
    img{
      z-index: 3;
    }
    .qrcode{
      position: absolute;
      bottom: .15rem;
      left: 50%;
      margin-left: -64px;
      z-index: 5;
    }
  }
  .qrcode {
    margin-top: -173px;
    padding-left: 5px;
    padding-top: 0.21333333rem;
    padding-bottom: 0.21333333rem;
    display: flex;
    justify-content: center;
  }
</style>
