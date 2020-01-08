<template>
    <div id="pro">
        <slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
        ></slide-verify>
        <div>{{msg}}</div>
        <hr>
        <p>传值0：{{this.$route.params.name0}}</p>
        <p>传值1：{{this.$route.params.name}}</p>
        <p>传值2：{{this.$route.query.name1}}</p>
        <p>传值3：{{this.$route.query.name2}}</p>
        <p>传值4：{{this.$route.params.name3}}</p>
        <p>传值5：{{this.$route.query.name4}}</p>
        <van-button type='info' @click="$router.back(-1)">返回上一页</van-button>
    </div>
</template>

<script>
export default {
        name: 'App',
        data(){
            return {
                msg: '',
            }
        },
        methods: {
            onSuccess(){
                this.msg = '验证成功'
            },
            onFail(){
                this.msg = '请重试'
            },
            onRefresh(){
                this.msg = ''
            }
        }
    }
</script>

<style>

</style>
