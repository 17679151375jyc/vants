<template>
    <div>
        <div class="header_css flec_css">
            <span class="span_title">登记资料</span>
        </div>
        <span class="hr_css_long"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">真实姓名</span>
            <input class='int_css' placeholder="请填写您的真实姓名" type="text" v-model="info.realName">
        </div>
        <span class="hr_css_short"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">性别</span>
            <div class="div_box flec_css">
                <div class='Gender_box flec_css'>
                    <span :class="{'man':info.sex == 1}">男</span>
                    <span :class="{'woman':info.sex == 0}">女</span>
                </div>
            </div>
        </div>
        <span class="hr_css_short"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">证件号码</span>
            <input class='int_css' placeholder="请填写您的身份证号码" type="text" v-model="info.carNumber">
        </div>
        <span class="hr_css_short"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">现居城市</span>
            <div class="div_box flec_css">
                <div class='city_box flec_css'>
                    <span class="city_span">请选择城市</span>
                    <img src="./img/bottom.png">
                </div>
            </div>
        </div>
        <span class="hr_css_short"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">详细地址</span>
            <input class='int_css' placeholder="请填写您的详细街道地址" type="text">
        </div>
        <span class="hr_css_short"></span>
        <div class="div_intut flec_css">
            <span class="lable_css">真实人脸</span>
            <div class="div_box flec_css">
                <div class="flec_css">
                    <img class="camera_img_css" src="./img/camera.png" alt="">
                </div>
            </div>
        </div>
        <span class="hr_css_short"></span>
        <div class="flec_css_but">
            <div class="success">完成提交</div>
            <div class="back">返回</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:{
                realName: null,//姓名
                sex: 1,//性别
                carNumber: null,//证件号
                provinceCode: null,
                cityCode: null,
                areaCode: null,
                streetCode: null,//省市区编号
                provinceName: null,
                cityName: null,
                areaName: null,
                streetName: null,//省市区名
                addressName: null,//详细地址
                imgUrl: null//人脸
            }
        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.flec_css{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
::-webkit-input-placeholder{
    text-align: right;
    font-size: 3.47vw;
    color: #999;
}
.header_css{
    width: 100%;
    height: 11.73vw;
}
.header_css .span_title{
    color: #333;
    font-size: 5.33vw;
    font-weight: bold;
}
.hr_css_long{
    display: block;
    width: 100%;
    height: 0.27vw;
    background-color: #e3e3e6;
}
.hr_css_short{
    display: block;
    width: 90.5%;
    height: 0.27vw;
    background-color: #e3e3e6;
    margin: 0 auto;
}
.div_intut{
    width: 100%;
    height: 12.27vw;
}
.div_intut .lable_css{
    font-size: 3.47vw;
    color: #333;
    display: block;
    float: left;
    width: 15vw;
    text-align: left;
}
.div_intut .int_css{
    height: 6vw;
    border: 0;
    outline: 0;
    width: 65vw;
    text-align: right;
}
.div_intut .div_box{
    width: 65vw;
    height: 100%;
    justify-content: flex-end;
}
.div_intut .Gender_box{
    width: 31.2vw;
}
.div_intut .Gender_box span{
    width: 14.4vw;
    height: 8.53vw;
    line-height: 8.53vw;
    border-radius: 4.27vw;
    font-size: 3.47vw;
    color: #999;
}
.div_intut .Gender_box .man{
    background-color: #3388FF;
    color: #fff;
}
.div_intut .Gender_box .woman{
    color: #fff;
    background-color: #FB849D;
}
.div_intut .city_box{
    background-color: #edeef0;
    min-width: 24.53vw;
    height: 6.93vw;
    padding: 0 2.67vw;
}
.div_intut .city_box .city_span{
    min-width: 17.33vw;
    height: 4.8vw;
    line-height: 4.8vw;
    font-size: 3.47vw;
    display: block;
    font-size: 3.47vw;
    color: #999;
}
.div_intut .city_box img{
    width: 1.6vw;
    height: 1.07vw;
    margin-left: 5.6vw;
}
.camera_img_css{
    width: 10.67vw;
    height: 10.67vw;
}
.flec_css_but{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    bottom: 0;
    position: absolute;
    width: 100%;    
}
.flec_css_but div{
    width: 78.67vw;
    height: 12.27vw;
    line-height: 12.27vw;
    border-radius: 6.13vw;
    margin-bottom: 4.27vw;
    color: #fff;
    font-size: 3.73vw;
}
.flec_css_but .success{
    background-color: #38f;
}
.flec_css_but .back{
    background-color: #ccc;
}
</style>