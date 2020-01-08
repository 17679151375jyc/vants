<template>
    <div id="obj">
        <van-button type="danger" @click="$router.go(-1)">返回上一页</van-button><br>
        <span>a={{ a }}————b={{ b }}</span><br>
        <span>{{Obj1}}{{Obj2}}</span><br>
        <van-button type='info' @click="Obj_is">Object.is等</van-button>
        <van-button type='info' @click="Obj_assign">Object.assign整理覆盖</van-button><br>
        <span>{{ Obj }}</span><br>
        <van-button type='info' @click="for_Obj">循环对象</van-button><br>
        <van-button type='info' @click="addObj">插入</van-button><br>
        <span :title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示信息！
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            a:1,
            b:1,
            Obj:{a:1, b:2, c:3, d:4, e:5},
            Obj1:{a:1, b:3, c:3},
            Obj2:{a:6, b:5},
            message: '页面加载于 ' + new Date().toLocaleString()
        }
    },
    methods:{
        Obj_is(){
            console.log(Object.is(this.a, this.b))
        },
        Obj_assign(){
            // 相同的属性会被Obj2(最后面的对象)覆盖，然后生成一个新对象(可复制数组)

            let newObj = Object.assign({},  this.Obj1, this.Obj2);
            console.log(newObj);
        },
        for_Obj(){
            let {key, value, entries} = Object;//加了这个之后以下Object.entries可不写Object
            for(let [val,key] of entries(this.Obj)){//参考数组循环
                console.log(val,key);
            }
        },
        addObj(){
            let sum = {'f':3, 'g':9};
            Object.assign(this.Obj2, {'sum':100})
            console.log(this.Obj2)
        }
    }

}
</script>

<style>

</style>
