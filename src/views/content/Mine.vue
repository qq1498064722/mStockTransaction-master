<template>
<!--    签到打卡-->
    <div>
        <div>
            <!--背景头像框-->
            <div>
                <div class="bg">
                    <div class="bigtotal"></div>
                    <div class="total"></div>
                    <div class="totalimg">
                    </div>
                </div>
                <!--我的信息框-->
                <div class="card">
                    <div class="title">某某企业</div>
                    <div class="level">
                        <div class="vip">
                            <span>会员等级</span>
                            <span style="font-size: 0.30rem;text-align: center"> 1 级</span>
                        </div>
                        <div class="vip">
                            <span>累计签到</span>
                            <span style="color: rgb(179,179,179);font-size: 0.30rem;text-align: center"> 3 天</span>
                        </div>
                        <div class="vips">
                            <span>累计积分</span>
                            <span style="color: rgb(179,179,179); font-size: 0.30rem;text-align: center"> 5 分</span>
                        </div>
                    </div>
                    <div class="sign" @click="success">
                        <div class="signin">
                            <i class="iconfont iconqiandao-copy-copy"> </i>
                            <span> 签到打卡 </span>
                        </div>
                    </div>
                </div>
            </div>
            <!--功能面板框-->
            <div class="function">
                <div class="pannel">
                    <div style="margin-left: 0.24rem;">
                        <i class="iconfont iconwodeziliao" style="color:rgb(67,153,255);font-size: 0.36rem"></i>
                        <span style="margin-left:0.12rem; font-size: 18px;">企业信息</span>
                    </div>
                    <div style="margin-right: 0.24rem;display:flex;justify-content: center;align-items: center">
                        <span style="color:rgb(67,153,255);font-size: 14px;">完善资料</span>
                        <van-icon name="arrow"/>
                    </div>
                </div>
                <div class="pannelActivitys">
                    <div style="margin-left: 0.24rem;">
                        <i class="iconfont iconhuodongliebiao" style="color:rgb(67,153,255);font-size: 0.36rem"></i>
                        <span style="margin-left:0.12rem; font-size: 18px;">我的活动</span>
                    </div>
                    <div class='myactivity' style="margin-right: 0.24rem;">
                        <div style="width: 0.9rem;height: 0.4rem;border-radius: 0.2rem;background-color: rgb(244,207,57)">
                            <span style="font-size: 18px;color: #fff">2</span>
                        </div>
                        <van-icon name="arrow"/>
                    </div>
                </div>
                <div class="pannelActivitys">
                    <div style="margin-left: 0.24rem;">
                        <i class="iconfont icongerenshezhi" style="color:rgb(67,153,255);font-size: 0.36rem"></i>
                        <span style="margin-left:0.12rem; font-size: 18px;">会员设置</span>
                    </div>
                    <div class='myactivity' style="margin-right: 0.24rem;">
                        <van-icon name="arrow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog} from 'vant'
    export default {
        name: "Mine",
        data() {
            return {
                show:false
            }
        },
        methods: {
            success() {
                Dialog.confirm({
                    message:"打卡成功"
                })
            }
        }
    }
</script>

<style scoped>
    @import url("https://at.alicdn.com/t/font_1514798_m67gp15ycef.css");
    @import "../../assets/css/rem.css";

    .bg {
        position: relative;
        background: url("../../assets/images/minebg.png") no-repeat center center /100%;
        width: 100%;
        height: 6rem;
    }

    .bigtotal {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 1.3rem;
        margin: auto;
        width: 2.4rem;
        height: 2.4rem;
        background: rgb(67, 153, 255);
        border-radius: 50%;
    }

    .total {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 1.3rem;
        margin: auto;
        width: 1.8rem;
        height: 1.8rem;
        background: #2890ff;
        border-radius: 50%;
    }

    .totalimg {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 1.3rem;
        margin: auto;
        width: 1.6rem;
        height: 1.6rem;
        background: url("../../assets/images/cp2.jpg") no-repeat center center / 100%;
        border-radius: 50%;
    }

    .card {
        position: absolute;
        top: 3.8rem;
        left: 0.44rem;
        right: 0.44rem;
        bottom: calc(50% - 2rem);
        border-radius: 10px;
        background: #fff;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .level {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .level > vip, .level > vips {
        margin: 0 auto;
    }

    .title {
        font-size: 0.4rem;
        color: rgb(66, 152, 255);
        margin-bottom: 0.48rem;
    }

    .vip {
        border-right: 1px solid rgb(198, 198, 198);
        width: 25%;
    }

    .vip > span {
        display: block;
    }

    .vip > span:nth-child(2) {
        color: rgb(244, 209, 66);
    }

    .vips {
        width: 25%;
    }

    .vips > span {
        display: block;
    }

    .sign {
        margin-top: 48px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .signin {
        width: 40%;
        height: 1rem;
        border-radius: 0.5rem;
        border: 1px solid rgb(244, 209, 66);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .signin > i, .signin > span {
        color: rgb(244, 209, 66);
        font-size: 20px;
        margin: 5px;
    }

    .pannel {
        width: 100%;
        height: 1.2rem;
        font-size: 20px;
        background: #ffffff;
        margin-bottom: 0.24rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pannel > i {
        color: rgb(189, 189, 189);
    }

    .pannelActivitys {
        width: 100%;
        height: 1.2rem;
        font-size: 0.4rem;
        background-color: #fff;
        margin-bottom: 0.24rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .function {
        width: 100%;
        position: absolute;
        bottom: 0;
        display: flex;
        flex-flow: column;
    }

    .myactivity {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>