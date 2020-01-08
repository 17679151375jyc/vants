import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router/router'
import store from './store/store'
import data from './data/data'

// localstorage
import Storage from './storage'
Vue.prototype.$storage = Storage;
/* 
  设置localstorage===>this.$storage.set('name',value);;
  获取localstorage===>this.$storage.get("name");
  删除localstorage===>this.$storage.remove("name");等==>详情见storage.js
*/
import './request/http.js'
import 'vant/lib/index.css'

//cookie
// import {setCookie,getCookie,delCookie} from './cookie.js'
// Vue.prototype.$cookieStore={
//   setCookie,
//   getCookie,
//   delCookie
// }
/* 
  设置cookie===>this.$cookieStore.setCookie("name",value,time);
  获取cookie===>this.$cookieStore.getCookie("name");
  删除cookie===>this.$cookieStore.delCookie("name");等==>详情见cookie.js
*/
Vue.config.productionTip = false
Vue.use(Vant);

import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify); //滑动验证插件

new Vue({
    render: h => h(App),
    router,
    store,
    // data,
}).$mount('#app')