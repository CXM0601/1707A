import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/font/iconfont.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// Vue.prototype.$http = axios;  this.$toast

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/img/timg.gif'),
  attempt: 1
}) // 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
