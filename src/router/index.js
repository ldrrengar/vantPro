import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/index') {
//     next()
//   } else {
//     let token = localStorage.getItem('Authorization')
//     if (token === 'null' || token === '') {
//       next('/index')
//     } else {
//       next()
//     }
//   }
// })

export default router
