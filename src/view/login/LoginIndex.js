import { Toast } from 'vant'
import qs from 'qs'
import { login, personalLogin } from '@/api/login/loginapi'
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      imgaddr: require('@/assets/logo.jpg')
    }
  },
  methods: {
    async loginFun () {
      let res = await login({'openid': 'o5UQR1Z1eL5r5UzmwfAyv3tYL2M8'})
      if (res.code === 'true') {
        console.log(res)
        let resp = await personalLogin(qs.stringify({'loginName': res.data.user.userName, 'password': res.data.user.possWord}))
        console.log(resp)
        if (resp.flag === '1') {
          Toast(resp.msg)
        } else if (resp.flag === '-1') {
          Toast(resp.msg)
        } else if (resp.flag === '0') {
          Toast(resp.msg)
        }
      } else {
        Toast.success(res.message)
      }
    }
  }
}
