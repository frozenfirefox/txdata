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
//echart
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
