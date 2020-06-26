const Tabbar = () => import('@/components/Tabbar/')

export default [
  {
    path: '/task',
    name: 'task',
    meta: {
      login: true,
      keepAlive: true,
      showHeader: false
    },
    components: {
      default: () => import('@/views/task/task'),
      tabbar: Tabbar
    }
  }
]
