<template>
<!--    完善信息-->
    <div>
        <div class="perfect">
        <div class="infos">
            <div>
            <van-cell-group>
                <van-field
                        label-width="100"
                        max-height="100"
                        label="姓名"
                        placeholder="某某">
                </van-field>
                <van-field
                        label-width="100"
                        max-height="100"
                        label="身份证件号码"
                        placeholder="41023199410100202">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="手机号码"
                        placeholder="15336981472">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="企业名称"
                        placeholder="某某某某某某">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="企业类型"
                        required
                        placeholder="个体工商户">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="所属行业"
                        required
                        placeholder="金融业">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="所属领域"
                        required
                        placeholder="新一代信息技术">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="企业状态"
                        required
                        placeholder="新一代信息技术">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="证件类型"
                        required
                        placeholder="在业">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="证件号码"
                        placeholder="89012397123">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="纳税人识别号"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="证件有效期"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="发证单位"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="注册地址"
                        required
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="注册日期"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="注册资本金"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="法定代表人名称"
                        placeholder="">
                </van-field>
                <van-field
                        label-width="100" max-height="100"
                        label="法定代表人身份证"
                        placeholder="">
                </van-field>
            </van-cell-group>
            </div>
        </div>
        <div class="submit">
            <van-button type="info"
                        style="width: 80%;background: linear-gradient(to right,rgb(109,180,254),rgb(67,145,225));"
                        @click="keep">
                保存
            </van-button>
        </div>
        </div>
    </div>
</template>

<script>
    import {Dialog} from 'vant'
    export default {
        name: "perfectInfo",
        methods:{
            keep(){
                Dialog.confirm({
                    message:'保存成功'
                }).then({
                }).catch({
                })
            }
        }
    }
</script>

<style scoped>
    @import url("https://at.alicdn.com/t/font_1514798_m67gp15ycef.css");
    @import "../../assets/css/rem.css";
    .van-field{
        font-weight: 600;
        color: #333333;
        text-align: left;
        margin-top: 0.48rem;
    }
    .submit{
        margin-top: 0.48rem;
    }
</style>