<template>
    <div id="Prom">
        <van-button type="danger" @click="$router.go(-1)">返回上一页</van-button>
        <h2>Promise</h2>
        <span>import动态引入js</span><br>
        <van-button type="info" @click="promiseFun">按钮</van-button><br>
    </div>
</template>

<script>
// import './es6-js/Promise.js' 
export default {
    data(){
        return{

        }
    },
    methods:{
        promiseFun(){
            let data = {
                name: "jiangh",
                age: 22,
                data: null
            }
            创建普通的Promise
            new Promise(( resolve, reject )=>{
                setTimeout(()=>{
                    if(true) resolve(data)
                    else reject("失败！")
                })
            }).then((res)=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })

            // 创建一个返回成功的Promise (返回失败亦同样)
            // Promise.resolve(data).then(res=>{
            //     console.log(res);
            // })
            
        }
    }
}
</script>

<style>

</style>
