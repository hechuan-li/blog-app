import Request from 'luch-request'
import store from '../store/index.js'


const http = new Request()
export {
  http
}
http.setConfig((config) => { /* 设置全局配置 */
config.baseURL = 'http://18.219.200.138:3001/'
  return config
})

http.interceptors.request.use((config) => { // 可使用async await 做异步操作
 config.header={
 	Authorization:'Bearer '+ store.state.token
 	}
  return config
}, config => { // 可使用async await 做异步操作
  return Promise.reject(config)
})





