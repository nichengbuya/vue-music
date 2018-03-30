import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
// 点击有个小延迟
fastclick.attach(document.body)
Vue.use(VueLazyLoad,{
  loading:require('common/image/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
