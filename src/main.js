// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:88/api"
axios.defaults.withCredentials=true  //开启发送cookie

Vue.use(ElementUI);
Vue.config.productionTip = false

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log("response", response.data);
  let code = response.data.code;
  if (code == 1010) {
    ElementUI.Message({
      message: '请先登录',
      type: 'error'
    })
  }
  if (code == 1011) {
    ElementUI.Message({
      message: '请先登录',
      type: 'error'
    })
  }
  if (code == 1009) {
    ElementUI.Message({
      message: '请先充值会员哟~',
      type: 'error'
    })
  }
  if (code == 1007) {
    ElementUI.Message({
      message: '您的登录已过期，请重新登录',
      type: 'error'
    })
  }
  if (code == 1006) {
    ElementUI.Message({
      message: '非法访问',
      type: 'error'
    })
  }
  if (code == 1008) {
    ElementUI.Message({
      message: '未知异常，请联系系统管理员',
      type: 'error'
    })
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
