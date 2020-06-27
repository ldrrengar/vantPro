import axios from 'axios'
import { Dialog } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = 'JWT ' + `${window.localStorage.getItem(
        'Authorization'
      ) || ''}`
    }
    return config
  },
  err => Promise.reject(err)
)

// response interceptor
service.interceptors.response.use(
  response => {
    // const res = response.data
    // if (response.status === 501) {
    //     Toast.fail('请登录')
    //     setTimeout(() => {
    //       window.location = '#/login/'
    //     }, 1500)
    //   return Promise.reject('error')
    // } else if (response.status === 502) {
    //     Toast.fail('网站内部错误，请联系网站维护人员')
    //   return Promise.reject('error')
    // } if (response.status === 401) {
    //   Toast.fail('参数不对')
    //   return Promise.reject('error')
    // } if (response.status === 402) {
    //   Toast.fail('参数值不对')
    //   return Promise.reject('error')
    // // } else if (response.status !== 0) {
    // //   // 非5xx的错误属于业务错误，留给具体页面处理
    // //   return Promise.reject(response)
    // } else {
    // }
    if (response.status === 200) {
      return response
    } else {
      return response
    }
  }, error => {
    console.log('err' + error)// for debug
    Dialog.alert({
        title: '警告',
        message: '登录连接超时'
      })
    return Promise.reject(error)
  })

export default service
