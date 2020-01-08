<template>
	<div id="zhuce">
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
		  <van-button type="info" @click="zhuce">注册</van-button>
	</div>
</template>
<script>	
	export default{
		data(){
			return{
				phone:'',
				password:'123456'
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			zhuce(){
				console.log(this.phone);
				this.$axios.post('family/back/user/regist',{
					phone:this.phone,
					password:this.password,
					roleId:1
				})
				.then(res=>{
					console.log(res.data)
					alert(res.data.errorMsg)
				})
				.catch(err=>{
					console.log("错误："+err);
				})
			}
		}
	}
</script>
<style lang="scss">
	
</style>