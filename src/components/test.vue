<template>
    <div id="test">
        <span @click="sucs">去con页面</span><br>
        <h2>登陆之后才能跳到con页面</h2>
        <h2>没登录跳到登录页面</h2>
        <h2>跳到登录页面登录后直接跳到con页面</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        sucs(){
            this.$router.replace({path:'/con'});
             
        }
    }
}
</script>
