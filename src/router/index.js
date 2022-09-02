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
          // 登录
          path: "/login",
          name: 'login',
          component: () => import('@/view/Login')
        },
        {
          //注册
          path: "/reagister",
          name: 'reagister',
          component: () => import('@/view/Reagister')
        },
        {
          //我的书架
          path: "/bookshelf",
          name: 'bookshelf',
          component: () => import('@/view/BookShelf')
        }
      ]
    }
  ]
})
