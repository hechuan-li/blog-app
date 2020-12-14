import Vue from 'vue'
import App from './App'
import store from 'store/index.js'
import { http , api } from 'utiles/config.js'
import uView from "uview-ui";


Vue.use(uView);



Vue.prototype.$http = http



Vue.config.productionTip = false

App.mpType = 'app'

	


const app = new Vue({
	store,
  ...App
})
app.$mount()
