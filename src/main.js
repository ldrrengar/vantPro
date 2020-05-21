import Vue from 'vue'
import App from './App'
import router from './router'
import vantUI from './vant/index'
import { post, fetch, patch, put } from '@/request/http'

// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.use(vantUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
