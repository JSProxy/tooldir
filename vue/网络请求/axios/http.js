import axios from 'axios'
import { Message, Loading} from 'element-ui'
import router from'./router'

let Loading
function startLoading() {
  loading = loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
function endLoading() {
  Loading.close();
}

// 这里做一些全局拦截 设置统一的header
axios.interceptors.request.use(config=>{

  startLoading()

  //也可以使用 qs.stringify 统一处理数据
  //也可以统一对数据加密
  config.data = JSON.stringify(config.data);

  // 最好去vuex 里面拿 减少对localStorage的反问
  if(localStorage.eleToken){
    config.headers.Authorization = localStorage.eleToken;
  }
  return config
},error=>{
  return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response=>{
endLoading()
return response
},error=>{
endLoading()
Message.error(error.response.data);
const { status } = error.response;
if (status == 401){
  Message.error('token值无效, 请重新登入')
  //清楚token
  localStorage.removeItem('eleToken');
  // 页面跳转
  router.push('/login')
  return Promise.reject(error)
}
})
export default axios