const Tabbar = () => import('@/components/Tabbar/')

export default [
  {
    path: '/newTask',
    name: 'newTask',
    meta: {
      login: true,
      keepAlive: true,
      showHeader: false
    },
    components: {
      default: () => import('@/views/newTask/newTask'),
      tabbar: Tabbar
    }
  }
]
