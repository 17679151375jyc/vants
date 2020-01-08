<template>
  <div id="home">
    <van-cell-group>
      <van-field
        v-model="phone"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        type="text"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button type="default" @click="change">忘记密码</van-button>
    <!-- 加了replace就调用 router.replace()就没有history 记录 -->
    <!-- <router-link tag='li'> tag把router-link变成li标签 -->
    <router-link  :to="{path: '/zhuce'}" replace><van-button type="info">注册</van-button></router-link>
    <van-button type="danger" @click="zhux">注销</van-button>
    <van-button type="primary" @click="login">登录</van-button>
    <router-link to="test"><van-button type="danger">test</van-button></router-link><br> 
    <van-button :disabled="disabled" type="primary" @click="yanz" :text='text'></van-button>
    <van-button type='info' @click="es6">学习es6</van-button>
    <van-button type='info' @click="scenClick">裁剪</van-button>
    <router-link  :to="{name:'pro',params:{name0: '值0'}}"><van-button type='info'>滑行验证</van-button><br></router-link>
    <router-link  :to="{name: 'wenben'}"><van-button type='info'>富文本</van-button></router-link>
    <router-link  :to="{name: 'code'}"><van-button type='info'>二维码</van-button><br></router-link>
    <hr>
    <p>直接获取state-test1:{{this.$store.state.app.test1}}</p>
    <p>方法获取state-test2:{{test2}}</p>
    <h3>mutations更改</h3>
    <p>获取getters-sum:{{this.$store.getters.sum}}</p>
    <button @click='mutationsClick'>mutations单击</button>
    <p>直接获取mutations更改后-test1:{{this.$store.state.app.test1}}</p>
    <button @click='actionsClick'>actions单击</button><button @click='actionsClick1'>actions单击1</button>
    <p>直接获取actions异步更改后-test1:{{this.$store.state.app.test1}}</p>
    <p>直接获取actions异步更改后-test2:{{this.$store.state.app.test2}}</p>
    <hr>    
    <router-link :to="{name:'pro', params: {name :'值1'}}"><van-button type='info'>路由传值1</van-button></router-link> 
    <router-link :to="{path:'pro', query: {name1 : '值2'}}"><van-button type='info'>路由传值2</van-button></router-link>
    <van-button type='info' @click="router1">路由传值3</van-button>
    <van-button type='info' @click="router2">路由传值4</van-button>
    <van-button type='info' @click="router3">路由传值5</van-button>
    <hr>
    <span>路由嵌套</span><br>
    <router-view></router-view>
    <router-link to='/home/child1'>child1</router-link>
    <router-link to='/home/child2'>child2</router-link>
    <p>{{ this.abc }}</p>
    <van-button type='info' @click="proType">全局变量</van-button>
    <p>{{ stData }}</p>
  </div>
</template>

<script>
import datas from './es6/data.js'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data(){
    return{
      chuan:123,
      test2:null,
      datas:datas.num,
      phone:null,
      password:null,
      disabled:false,
      text:"点击进入地图",
      list:null
    }
  },
  computed:{
    ...mapState({
      stData: state => state.app.stData
    })
  },
  methods:{  
    yanz(){
      this.disabled = true;
      let time = 3;
      this.text = `${time}s后进入地图`;
      // this.text=time+"s后可重新发送
      const setTime=setInterval(()=>{
        if(time == 1){
          clearTimeout(setTime);
          this.disabled=false;
          this.text="点击进入地图";
          this.$router.push({path:'/address'});
        }else{
          time -- ;
          this.text = `${time} s后进入地图`;
        }
      },1000)
    },
    login(){
      this.$axios.post('family/back/user/login',{
        phone:this.phone,
        password:this.password
      })
      .then(res=>{
        this.$store.dispatch('changeC',res.data)
        if(this.$store.state.app.data.data.token){
          console.log(this.$store.state.app.data.data)
          if(this.$router.currentRoute.query.url){
            this.$router.replace(this.$router.currentRoute.query.url)
          }else{;
             this.$router.push({path:'index'});
          }          
          console.log(res);
        }else{
          console.log(res);
        }
      })
      .catch(err=>{
        console.log(err);
      })
    },
    change(){
      this.$storage.set('zhang',this.phone)
      // this.$router.push({path:'/gai'})
      this.$router.push({name:'gai'})      
    },
    zhux(){
      this.$storage.set('zhang',this.phone)
      this.$router.push({path:'/danger'})
    },
    es6(){
      this.$router.push({path:'/es'})
    },
    mutationsClick(){
      this.$store.commit('setTest1',1000);
    },
    actionsClick(){
      this.$store.dispatch('yibuTest2', 2000);
    },
    actionsClick1(){
      this.$store.dispatch('yibuTest1');
    },
    router1(){
      this.$router.push({path:`/pro?name2=${'值3'}`})
    },
    router2(){
      this.$router.push({name:'pro', params: {
        name3: '值4'
      }})
    },
    router3(){
      this.$router.push({path:'/pro', query: {
        name4:'值5'
      }})
    },
    proType(){
      this.abc = 666;
      console.log(this.abc)
    },
    scenClick(){
      this.$router.push({path: '/scen'});
    }
  },
  mounted(){
    this.test2 = this.$store.state.app.test2;






































    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
 
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
      console.log("当前是电脑打开")
    }else{
      console.log("当前是手机打开")
    }
  }
}
</script>
<style>
</style>
