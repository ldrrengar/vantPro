const Tabbar = () => import('@/components/Tabbar')

export default [
  {
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/views/home/home'),
      tabbar: Tabbar
    },
    meta: {
      // keepAlive: true,
      showHeader: false
    }
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/news',
    name: 'news',
    components: {
      default: () => import('@/views/home/news/news'),
      tabbar: Tabbar
    },
    meta: {
      showHeader: true,
      title: '通知公告'
    }
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    components: {
      default: () => import('@/views/home/news/newsDetail'),
      tabbar: Tabbar
    },
    meta: {
      showHeader: true,
      title: '公告详情'
    }
  },
  {
    path: '/member',
    name: 'member',
    components: {
      default: () => import('@/views/home/member/member'),
      tabbar: Tabbar
    },
    meta: {
      showHeader: true,
      title: '开通会员'
    }
  },
  {
    path: '/payMent',
    name: 'payMent',
    components: {
      default: () => import('@/views/home/payMent/payMent'),
      tabbar: Tabbar
    },
    meta: {
      showHeader: true,
      title: '转账提交'
    }
  },
  {
    path: '/beginnerGuide',
    name: 'beginnerGuide',
    components: {
      default: () => import('@/views/home/beginnerGuide/beginnerGuide'),
      tabbar: Tabbar
    },
    meta: {
      showHeader: true,
      title: '新手指南'
    }
  }
]
