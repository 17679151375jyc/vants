<template>
    <div id="xunhuan">
        <span>数组list：{{list}}</span>
        <van-button type='info' @click="for_click">普通for循环</van-button>
        <van-button type='info' @click="forEach_click">forEach循环</van-button><br>
        <van-button type='info' @click="forOf">for-of循环</van-button>
        <van-button type='info' @click="forIn">for-in循环</van-button><br>
        
        <span>数组list1：{{list1}}</span><br>
        <van-button type='info' @click="map_click">map循环-整理</van-button>
        <van-button type='info' @click="filter_click">filter循环-过滤</van-button><br>
        <van-button type='info' @click="some_click">some循环-查找</van-button><span><=相反=></span>
        <van-button type='info' @click="every_click">every循环-查找</van-button><br>
        <span>数组list2：{{list2}}</span><br>
        <van-button type='info' @click="reduce_click">reduce循环-求和</van-button><br>
        <van-button type="danger" @click="$router.go(-1)">返回上一页</van-button>
        <ul>
            <li v-for='item in list2'>{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'xun',
    data(){
        return{
            list:['apple','banana','orange','tomato'],
            list1:[
                {title:"aaa", read:100, hot:true},
                {title:"bbb", read:100, hot:true},
                {title:"ccc", read:100, hot:false},
                {title:"ddd", read:100, hot:true},
            ],
            list2:[ 2, 3, 4]
        }
    },
    methods:{
        for_click(){
            for (let i = 0; i < this.list.length ; i ++){
                console.log(this.list[i])
            }
        },
        forOf(){
            for(let [key, val] of this.list.entries()){//list.keys()循环key
                console.log(key, val);
            }
        },
        forIn(){
            for(let index in this.list){//list.keys()循环key
                console.log(this.list[index]);
            }
        },
        forEach_click(){
            this.list.forEach(function(val, index, list){   
                console.log(val,index)
            })
        },
        map_click(){//可重新整理数据
            // 非常有用，做数据交互映射,配合return返回新数组，没return就相当于forEach
            let newList = this.list1.map(function(val, index, list1){   //可箭
                let Obj = [];
                Obj.title1 = `改后值${val.title}`;
                Obj.read1 = `改后值${val.read}+9`;
                Obj.hot = val.hot == true && "真棒";
                return Obj;
            })
            console.log( newList );
        },
        filter_click(){//可过滤数据
            // 需要return
            let newList = this.list1.filter(function(val, index, list1){   //可箭
            // return返回true就留下
                return val.hot;
            })
            console.log( newList );
        },
        some_click(){//查找
            // 数据里面只要有一个符合条件就返回true
             let lookUp = (list, item) => {
                let newList = this.list1.some((val, index, list1) => {
                    return val.title == item;
                })
                return newList;
            }
            console.log(lookUp(this.list1, 'aaa'))
        },
        every_click(){//查找
            // 数据里面要全部符合条件才返回true
            let newList = this.list1.every((val, index, list1) => {
                    return val.read == 100;
                })
            console.log( newList );
        },
        reduce_click(){ //求数组和
            let newList = this.list2.reduce((prev, cur, index, arr) => {
                return prev + cur;
                // return prev ** cur;
            })
            console.log(newList);
        }
    }
}
</script>

<style>
    span{
        font-weight: bold;
    }
</style>
