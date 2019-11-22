<template>
<!--活动报名-->
    <div>
        <div class="bodys">
        <div class="activitybg"></div>
        <div class="title">
            <p style="color: #4391e1;font-family: 'PingFang SC';text-align: left;font-weight: 600">
                活动主题 :
            </p>
            <p style="color: #666666;font-family: 'PingFang SC';text-align: left;font-weight: 600;font-size: 0.3rem">
                这是一个完美的主题活动
            </p>
        </div>
        <div class="title">
            <p style="color: #4391e1;font-family: 'PingFang SC';text-align: left;font-weight: 600">
                活动目的 :
            </p>
            <p style="color: #666666;font-family: 'PingFang SC';text-align: left;font-weight: 600;font-size: 0.3rem">
                这是一个完美的主题活动这是一个完美的主题活动这是一个完美的主题活动
            </p>
            <p style="color: #666666;font-family: 'PingFang SC';margin-top:0.24rem;text-align: left;font-weight: 600;font-size: 0.3rem">
                这是一个完美的主题活动这是一个完美的主题活动这是一个完美的主题活动这是一个完美的主题活动这是一个完美的主题活动
            </p>
        </div>
        <div class="title">
                <p style="color: #4391e1;font-family: 'PingFang SC';text-align: left;font-weight: 600">
                    活动时间 :
                </p>
                <p style="color: #666666;font-family: 'PingFang SC';text-align: left;font-weight: 600;font-size: 0.3rem;margin-top:0.24rem;">
                    2019-10-30  18:30
                </p>
            </div>
        <div class="title">
                <p style="color: #4391e1;font-family: 'PingFang SC';text-align: left;font-weight: 600">
                    报名截止时间 :
                </p>
                <p style="color: #666666;font-family: 'PingFang SC';text-align: left;font-weight: 600;font-size: 0.3rem;margin-top:0.24rem;">
                    2019-10-30  18:30
                </p>
            </div>
        </div>
        <div class="submit">
            <van-button type="info"
                        style="width: 80%;background: linear-gradient(to right,rgb(109,180,254),rgb(67,145,225));"
                        @click="inkeep">
                我要报名
            </van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "inActivity",
        methods:{
            keep(){
                Dialog.confirm({
                    message:'报名成功'
                }).then({
                }).catch({
                })
            }
        }
    }
</script>

<style scoped>
    @import"../../assets/css/rem.css";
    .activitybg{
        width: 100%;
        height: 3.3rem;
        background: #2890ff;
        box-shadow: 0 4px 10px rgba(143,158,191,0.5);
    }
    .bodys{
        display: flex;
        flex-flow: column;
        align-items: normal;
    }
    .title{
        margin: 0.47rem 0.49rem 0 0.24rem;
    }
    .submit{
        margin-top: 0.48rem;
    }
</style>