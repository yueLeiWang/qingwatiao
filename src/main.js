// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
 // 权限
import '@/permission'
import axios from 'axios'
import echarts from 'echarts'
import 'babel-polyfill'
// 引入vuex
import store from './store'
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
// 按下标删除数组的对应元素
Array.prototype.del = function(dx) {
  if (isNaN(dx) || dx > this.length) { return false }
  this.splice(dx, 1)
}

// 指定元素从Array对象中删除
Array.prototype.remove = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
