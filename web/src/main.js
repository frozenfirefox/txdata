import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import qs from "qs"
import axios from "axios"
import echarts from 'echarts'

Vue.use(ViewUI);

Vue.config.productionTip = false

// pro
Vue.prototype.$api_host = 'http://www.huiaxue.cn:8000/'
// test
// Vue.prototype.$api_host = 'http://192.168.0.138:8787/'
Vue.prototype.$tx_host = 'http://bang.tx3.163.com/bang/role/'

// axios.defaults.retryDelay = 10000; // 设置超时时间
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs

Vue.prototype.$array_diff = function(arr1, arr2){
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let subset = [];
  for (let item of set1) {
    if (!set2.has(item)) {
      subset.push(item)
    }
  }
  return subset
}

Vue.prototype.$find_array = function(str, arr, field){
  field = field||'name'
  for(let i in arr){
    if(arr[i].name == str){
      return arr[i]
    }
  }
  return []
}
//echart
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
