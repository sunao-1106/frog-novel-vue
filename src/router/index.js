import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: "/index",
      component: () => import('@/view/Index'),
      children: [
        {
          //首页主体
          path: "/index",
          name: 'IndexContent',
          component: () => import('@/view/IndexContent')
        },
        {
          //用户个人中心
          path: "/user",
          name: 'User',
          redirect: '/user/center/center',
          component: () => import('@/view/user/Index'),
          children: [
            {
            path: '/user/center',
            name: 'UserCenter',
            component: () => import('@/view/user/UserCenter')
          },{
            path: '/user/info',
            name: 'UserInfo',
            component: () => import('@/view/user/UserInfo')
          }
          ,{
            path: '/user/book',
            name: 'BookSelf',
            component: () => import('@/view/user/BookSelf')
          }
        ]
        },
        {
          // 登录
          path: "/login",
          name: 'login',
          component: () => import('@/view/Login')
        },
        {
          //注册
          path: "/register",
          name: 'register',
          component: () => import('@/view/Reagister')
        },
        {
          //我的书架
          path: "/bookself",
          name: 'bookself',
          component: () => import('@/view/book/BookShelf')
        },
        {
          //小说详细页
          path: "/detail",
          name: 'detail',
          component: () => import('@/view/book/BookDetail'),
          redirect: "/chapter",
          children: [
            {
              path: '/chapter',
              name: 'Chapter',
              component: () => import('@/view/book/BookChapterList')
            }
          ]
        }
      ]
    }
  ]
})
