import Vue from 'vue'
import App from './App'
import { http , api } from 'utiles/config.js'
import uView from "uview-ui";
Vue.use(uView);


Vue.prototype.$http = http
Vue.prototype.$api = api

Vue.config.productionTip = false

App.mpType = 'app'

	


const app = new Vue({
  ...App
})
app.$mount()
