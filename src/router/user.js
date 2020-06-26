const Tabbar = () => import('@/components/Tabbar/')

export default [
  {
    path: '/user',
    name: 'user',
    meta: {
      login: true,
      keepAlive: true,
      showHeader: false
    },
    components: {
      default: () => import('@/views/user/user'),
      tabbar: Tabbar
    }
  }
]
