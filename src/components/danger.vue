<template>
	<div id="denger">
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
		  <van-button type="danger" @click="xiao">确认注销</van-button>
  		  <van-button type="info" @click="test1">test1</van-button><br>
	</div>
</template>
<script>	
	export default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			test1(){
				
			},
			xiao(){				
				this.$axios.post('family/back/user/deleteUser',{  
					userId:this.$storage.get('data').data.userId,     
                    token:this.$storage.get('data').data.token,
                    daleteUserId:this.$storage.get('data').data.userId,
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