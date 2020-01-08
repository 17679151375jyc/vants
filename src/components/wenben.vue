<template>
    <div>
        富文本
        <!-- <div id="divExmied" class="divExmied"></div> -->
        <div id="div1" class="toolbar"></div>
        <div id="div2" class="divExmied"> <!--可使用 min-height 实现编辑区域自动增加高度-->
        </div>
    </div>
</template>
<script>
import E from 'wangeditor';

export default {
    data(){
        return{

        }
    },
    mounted(){
        var editor = new E('#div1', '#div2');
        editor.customConfig.showLinkImg = false; //网络链接图片
        editor.customConfig.uploadImgShowBase64 = true;//base64本地保存
        editor.customConfig.menus = [
            // 配置表单
            // 'emoticon', // 表情
            'image', // 插入图片
            // 'head', // 标题
            // 'bold', // 粗体
            // 'fontSize', // 字号
            // 'fontName', // 字体
            // 'italic', // 斜体
            // 'underline', // 下划线
            // 'strikeThrough', // 删除线
            // 'foreColor', // 文字颜色
            // 'backColor', // 背景颜色
            // 'link', // 插入链接
            // 'list', // 列表
            // 'justify', // 对齐方式
            // 'quote', // 引用
            // 'table', // 表格
            // 'code', // 插入代码
            // 'undo', // 撤销
            // 'redo' // 重复
            ]
        editor.create()
    }
}
</script>
<style scoped>
.toolbar{
    background-color: yellow;
    width: 10vw;
    height: 10vw;
}
.toolbar >>> div{
    padding: 0;
}
.toolbar >>> .w-e-icon-image{
    font-size: 10vw;
}
.divExmied{
  width: 90%;
  margin: 0 auto;
  z-index: 0;
  background-color: red;
  text-align: left;
  line-height: 3vw!important;
}
</style>