<template>
<!--报名详情-->
    <div style="width:100%;height:100%">
        <div class="bmbg">
            <div class="activitytitle">
                <div class="list">
                    <p style="font-weight:600;font-size:0.32rem;font-family:'PingFang SC';color: #4391e1;margin-bottom: 0.22rem;text-align: left">活动主题</p>
                    <p style="font-weight:600;font-size:0.22rem;font-family:'PingFang SC';color: #666666;margin-top: 0.18rem;text-align: left">活动主题活动主题活动主题活动主题活动主题活动主题</p>
                    <p style="font-weight:600;font-size:0.22rem;font-family:'PingFang SC';color: #f4cf39;margin-top: 0.18rem;text-align: left">2019-10-30 18:30</p>
                    <p style="font-weight:600;font-size:0.22rem;font-family:'PingFang SC';color: #666666;margin-top: 0.18rem;text-align: left">山西省太原市迎泽区</p>
                </div>
                <div class="listimg">
                </div>
            </div>
            <div class="qrcodelist">
                <div class="qrcode">
                    <p style="font-weight:600;font-size:0.32rem;font-family:'PingFang SC';color: #4391e1;margin-bottom: 0.51rem;text-align: left">
                        活动二维码
                    </p>
                </div>
                <div class="qrcodesa">
                    <qrcode-vue :value="value" :size="size" level="H" style="text-align: center" @click="dialog(value)">已报名</qrcode-vue>
                </div>
            </div>
            <div class="tellus">
                <div class="telllist">
                    <p style="font-weight:600;font-size:0.32rem;font-family:'PingFang SC';color: #4391e1;margin-top: 0.48rem;text-align: left">股权托管交易中心</p>
                    <p style="font-weight:600;font-size:0.22rem;font-family:'PingFang SC';color: #666666;margin-top: 0.28rem;text-align: left">地址地址地址地址地址地址地址</p>
                </div>
                <div class="telli">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    window.onresize = function ()// 绑定到窗口的这个事件中
    {

        let designSize = 1920; // 设计图尺寸

        let html = document.documentElement;

        let wW = html.clientWidth;// 窗口宽度
        let rem = wW * 100 / designSize;

        document.documentElement.style.fontSize = rem + 'px';
    };

    export default {
        name: "signup",
        data(){
            return{
                value:'',
                size:220,
            };
        },
        methods:{
            dialog(index){
                this.dialogVisable1 = !this.dialogVisable1;
                this.value = 'www.baidu.com';
            }
        },
        components:{
            QrcodeVue
        }
    }
</script>

<style scoped>
    @import"../../assets/css/rem.css";
    .bmbg{
        margin: 0;
        width: 100%;
        height: 100%;
        background: url("../../assets/images/bmbg.png") no-repeat center center / 100%;
    }
    .activitytitle{
        width: 92%;
        height: 3.35rem;
        position: relative;
        top: 0.48rem;
        left: 0.3rem;
        border-bottom: 1px dashed #999999;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .list{
        width: 50%;
        height: 2.3rem;
        display: flex;
        flex-flow: column;
    }
    .list>p{
        display: block;
    }
    .listimg{
        width: 1.94rem;
        height: 2.3rem;
        background: aquamarine;
    }
    .qrcodelist{
        margin-top: 0.94rem;
        margin-left: 0.48rem;
        display: flex;
        flex-flow: column;
    }
    .qrcodesa{
        margin-top: 0.5rem;
        margin-bottom: 0.62rem;
    }
    .tellus{
        position: fixed;
        bottom: 1rem;
        margin-left: 0.3rem;
        width: 92%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px dashed #999999;
    }
    .telllist{
        display: flex;
        flex-flow: column;
    }
    .telli{
        width: 1rem;
        height: 1rem;
        margin-top: 0.4rem;
        background: url("../../assets/images/tell.png") no-repeat center center / cover;
    }
</style>