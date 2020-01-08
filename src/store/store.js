    // vuex入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'//引入模块
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
    // Vuex.Store是一个方法，不能改变大小写
    
    state:{//创建数据,类似于data
        
    },
    getters:{//state的计算属性,类似于computed:
        
    },
    mutations:{//同步修改数据
        
    },
    actions:{// 异步修改数据（提交的是mutations）
        
    },
    modules:{//模块，相当于component
        app
    },
    plugins: [
        createPersistedState({
            reducer(val){
                return{
                    app:val.app
                }
            }
        })
    ]
})
