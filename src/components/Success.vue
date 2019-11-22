<template>
    <div>
        <div class="mask">
            <div class="dialog">
                <p style="margin-top:0.9rem;width: 100%;font-size: 0.3rem;color: #333333;font-family: 'PingFang SC'">活动名称</p>
                <p style="width: 100%;font-family: 'PingFang SC';font-size: 0.24rem;color: #666666;margin-top: 0.5rem">恭喜您报名成功</p>
                <div class="button">
                    <van-button plain hairline type="info" style="margin-right: 0.48rem" @click="close">关闭</van-button>
                    <van-button type="info" @click="search">查看详情</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Success",
        data(){
            return{
                play:true,
            }
        },
        methods:{
            close:() => {
                window.console.log("关闭")
            },
            search:() => {
                window.console.log("查看详情")
            }
        }
    }
</script>

<style scoped>
@import "../assets/css/rem.css";
    .mask{
        position: fixed;
        left: 0;
        top: 0;
        opacity: 5;
        width: 100%;
        height: 100%;
        background:#000;
        z-index:998;
    }
    .dialog{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 70%;
        height: 4.5rem;
        background: #fff;
        border-radius: 0.1rem;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .button{
        margin-top: 0.84rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>