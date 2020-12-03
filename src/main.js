import Vue from 'vue'
import App from './App'
import Request from 'luch-request'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$http = new Request();

const app = new Vue({
  ...App
})
app.$mount()
