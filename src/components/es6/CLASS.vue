<template>
    <div id="lei">
        <van-button type="danger" @click="$router.go(-1)">返回上一页</van-button>
        <van-button type="info" @click="click_A">按钮1</van-button>
        <van-button type="info" @click="click_B">按钮2</van-button>
    </div>
</template>

<script>
// js文件通过export直接导出就可以直接用,要加{}
// js文件通过export default导出的是一个对象
// import {ming, sum, func1, func2, Pro} from './es6-js/CLASS'
import Obj from './es6-js/CLASS'
export default {
    data(){
        return{

        }
    },
    methods:{
        click_A(){
            //  let newW =new Pro(ming,sum);
            let newW =new Obj.Pro(Obj.ming, Obj.sum);
            console.log(newW);
        },
        click_B(){
            let newW =new Obj.Pro(Obj.ming,Obj.sum).class_name();
            console.log(newW);
        }
    }
}
</script>

<style>

</style>
