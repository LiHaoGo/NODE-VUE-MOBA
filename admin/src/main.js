import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from './http'
import './assets/style.css'
// 把http加载到vue原型上 可以在任何地方访问http请求接口
Vue.prototype.$http = http
Vue.config.productionTip = false
// 
Vue.mixin({
  computed:{
 uploadUrl(){
   return http.defaults.baseURL + '/upload'
 }
  },
  methods:{
    getAuthHeaders(){
      return{
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
