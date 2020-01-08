<template>
    <div id="es6">
        <van-button type="danger" @click="$router.push({path:'/home'})">返回上一页</van-button><br>
        <van-button type='info' @click="xun">数组及数组循环</van-button>
        <router-link to="/obj"><van-button type="info">对象的操作</van-button></router-link>
        <router-link to="/Promise"><van-button type="info">Promise使用</van-button></router-link><br> 
        <router-link to="/cla"><van-button type="info">CLASS类</van-button></router-link><br> 
        <router-link to="/asy"><van-button type="info">async、awiat异步函数</van-button></router-link><br> 
        <router-link to="/zho"><van-button type="info">终合</van-button></router-link><br> 
    </div>
</template>

<script>
    export default {
        name:'es6',
        data(){
            return {
                
            }
        },
        methods: {
            xun() {
                this.$router.push({path:'/xunhuan'});
            }
        }            
    }
</script>

<style scoped>
</style>