<template>
    <div id="asy">
        <van-button type="danger" @click="$router.go(-1)">返回上一页</van-button><br>
        <h2>generator函数及对象</h2><br>
        <h2>async异步函数</h2><br>
        <van-button type="info" @click="ans">按钮</van-button><br>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        ans(){
        }
    },
    mounted(){
        let data = {
            name: "jiangh",
            age: 22,
            data: null
        }
        async function testAsync(){
            return  data;
        }
    }
}
</script>

<style>

</style>
