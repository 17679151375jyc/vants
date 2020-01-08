<template>
    <div id="index">
        <span @click="back">返回</span>
        <h2>这是index主页面</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.push({path:'home'});
        }
    }
}
</script>