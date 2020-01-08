<template>
	<div id="gai">
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
		  <van-button type="default" @click="back">返回</van-button>
		  <van-button type="info" @click="gai">确认更改</van-button>
  		  <van-button type="info" @click="test1">test1</van-button><br>
			<button @click="jas">按钮</button>
	</div>
</template>
<script>	
import datas from './es6/data.js'
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			jas(){
				console.log(datas.num)
			},
			back(){
				this.$router.go(-1);
			},
			test1(){
				
			},
			gai(){				
				this.$axios.post('family/back/user/changePassword',{
					password:this.password,
					token:this.$storage.get('data').data.token,
					userId:this.$storage.get('data').data.userId
                })
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
			}
		},
		mounted(){
			this.phone=this.$storage.get('zhang');
		}
	}
</script>
<style lang="scss">
	
</style>