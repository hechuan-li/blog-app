import Request from 'luch-request'


const api = new Request()
const http = new Request()
export {
  http,
  api
}

http.config.baseURL = 'http://18.219.200.138:3001/'

api.config.header={aaaaaaa:'sdfsdfsdfsdfsd'}
api.setConfig((config) => { /* 设置全局配置 */
  config.header = {
    ...config.header,
    a: 1111111, // 演示
    b: 2222 // 演示
  }
  return config
})


//请求前拦截，用来动态加参,例如token
api.interceptors.request.use((config) => { // 可使用async await 做异步操作

  config.header = {
    ...config.header,
    token:uni.getStorageSync('token')
    // 'testaaa': '11' // 演示拦截器header加参
  }

  // 演示custom 用处
  // if (config.custom.auth) {
  //   config.header.token = 'token'
  // }
  // if (config.custom.loading) {
  //  uni.showLoading()
  // }
  /**
   /* 演示
   if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
      return Promise.reject(config)
    }
   **/
  return config
}, config => { // 可使用async await 做异步操作
  return Promise.reject(config)
})


// 请求后
api.interceptors.response.use((response) => {
  console.log(response)
  return response
}, (response) => { /*  对响应错误做点什么 （statusCode !== 200）*/
  console.log(response)
  console.log(response.statusCode);
  //未登录时清空缓存跳转
  if(response.statusCode ==401){
	  uni.clearStorageSync();
	  uni.switchTab({
	  	url:"/pages/user/user"
	  })
  }
  return Promise.reject(response)
})