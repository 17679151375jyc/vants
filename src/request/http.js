import Vue from 'vue'
import Axios from 'axios'
import Qs from 'qs'
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL='http://jtbhtkf.cn1.utools.club/'	//服务器域名地址
Axios.defaults.headers.get['Content-Type']='application/x-www-form-urlencoded'//get默认配置
Axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'//post默认配置
Axios.defaults.timeout = 10000;
		// 请求拦截
Axios.interceptors.request.use(function(config){
		if(config.method=="post"){
			config.data=Qs.stringify(config.data);
		}
		return config;
	},function(err){
		return Promise.reject(err);
	}
)
		// 响应拦截
Axios.interceptors.response.use(
	response=>{
		return response;
	},function(err){
		return Promise.reject(err);
	}
)