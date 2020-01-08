<template>
    <div>
        <h2>获取定位</h2>
        <div id="ding"></div>
        <span><router-link to="/home">回登录页</router-link></span>
        <van-button type='info' @click="PDFme" class='PDFmeBtn'>生成</van-button>
        <div id='pdfDom'>
            111111111111111111
        </div>
    </div>
</template>

<script>
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
export default {
    data(){
        return{
            title: '领料单',
        }
    },
    methods:{
        PDFme(){
            let title = this.title;
            html2Canvas(document.querySelector('#pdfDom'),{
                useCORS: true,//是否跨域
                taintTest: true, //是否渲染前测试图片
                allowTaint: true
            }).then(function(canvas){
                let contentWidth = canvas.width;
                let contentHeight = canvas.height;
                let pageHeight = contentWidth / 592.28 * 941.89;
                let leftHeight = contentHeight;
                let position = 0;
                let imgWidth = 592.28;
                let imgHeight = 692.28 / contentWidth * contentHeight;
                let pageData = canvas.toDataURL('image/jpeg', 1.0);
                let PDF = new JsPDF('', 'pt', 'a4');
                if(leftHeight < pageHeight){
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                } else{
                    while(leftHeight>0){
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        if(leftHeight > 0){
                            PDF.addPage();
                        }
                    }
                }
                PDF.save(title + '.pdf');
            })
        }
    },
    mounted(){
        var map = new AMap.Map('ding',{
            center:[113.074699,22.584042],
            resizeEnable: true, //是否监控地图容器尺寸变化
                zoom:10,//初始化地图层级
                viewMode:'3D',
            layers:[
                new AMap.TileLayer.Satellite(),//3d地图
                new AMap.TileLayer.RoadNet(),//路网及地名
                new AMap.TileLayer.Traffic()//实时路况
            ]
        })
    }
}
</script>

<style >
    #ding{
        width: 99.5%;
        height: 300px;
        border: 1px solid red;
    }
</style>
