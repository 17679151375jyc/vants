<template>
    <div>
      <canvas id="qrCodeRef" ref="qrCodeRef" class="qr-code-box" style="width: 48vw;height: 48vw;"></canvas>
      <van-button type='info' @click="$router.back(-1)">返回</van-button>
    </div>
</template>
<script>
import QrCodeWithLogo from "qr-code-with-logo";
export default {
    data(){
        return{
            comUserCouponInfo: {}
        }
    },
    mounted(){
        // this.$nextTick(function() {
            this.createQrcode("扫描");
        // });
    },
    methods:{
        createQrcode(data) {
            QrCodeWithLogo.toCanvas({
                canvas: this.$refs.qrCodeRef,
                content: data,
                width: 200,
                logo: {
                    src: require("@/components/img/camera.png"),
                    radius: 4,
                    borderSize: 0.01
                },
                
                nodeQrCodeOptions: {
                    margin: 2,
                    errorCorrectionLevel: 'H',
                    color: {
                        dark: '#003388ff',
                        light: '#A7F0FA'
                    }
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.qr-code-box {
  >>>img {
    width: 48vw;
    height: 48vw;
  }
}
</style>