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
          path: "/index",
          name: 'IndexContent',
          component: () => import('@/view/IndexContent')
        }
      ]
    }
  ]
})
