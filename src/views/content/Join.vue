<template>
    <div>
        <div class="user">
        <van-cell-group>
            <van-field
                    placeholder="请输入姓名"
                    label="姓名"
            />
            <van-field
                    placeholder="请输入身份证号"
                    label="身份证号"
            />
        </van-cell-group>
        </div>
        <div class="phone">
            <van-cell-group>
                <van-field
                        placeholder="请输入手机号"
                        label="手机号"
                />
            <van-field
                    center
                    clearable
                    label="验证码"
                    placeholder="请输入验证码"
            >
                <van-button slot="button" size="small" type="info">获取验证码</van-button>
            </van-field>
        </van-cell-group>
        </div>
        <div class="company">
            <van-cell-group>
                <van-field
                        placeholder="请输入企业名称"
                        label="企业名称"
                />
                <van-dropdown-menu placeholder="证件类型">
                    <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
                <van-field
                        placeholder="请输入营业执照上统一的社会信用代码"
                        label="证件编号"
                />
            </van-cell-group>
        </div>
        <div class="password">
            <van-field
                    v-model="password"
                    type="password"
                    label="登录密码"
                    clearable
                    placeholder="请输入密码"
            />
            <van-field
                    v-model="onpassword"
                    type="password"
                    label="确认密码"
                    clearable
                    placeholder="请再次输入密码"
            />
        </div>
        <div class="submit">
            <van-button type="info" style="background: linear-gradient(to right,rgb(109,180,254),rgb(67,145,225));"  @click="register">注册</van-button>
            <p>已有账号，去登录</p>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'vant'
    export default {
        name: "Join",
        data(){
                return {
                    value1:0,
                    option1: [
                        { text: '营业执照', value: 0 },
                        { text: '经营许可证', value: 1 },
                        { text: '合法开采证', value: 2 }
                    ],
                    password:'',
                    onpassword:'',
                }
            },
        methods:{
                register(){
                    register('api/usersfront',this.form)
                        .then(res=>{
                            let data = res.data;
                            Toast(data.msg);
                            // window.console.log(res)
                        })
                },
        },
    }
</script>

<style scoped>
    @import"../../assets/css/rem.css";
.van-field{
    text-align: left;
}
    .user{
        margin-top: 0.48rem;
    }
    .phone{
    margin-top: 0.48rem;
    }
    .submit{
        margin-top: 0.48rem;
    }
    .company{
        margin-top: 0.48rem;
    }
    .password{
        margin-top: 0.48rem;
    }
    .submit>p{
        font-size: 0.8rem;
        font-family: "苹方";
        background: linear-gradient(to right, rgb(109,180,254),rgb(67,145,225));
        -webkit-background-clip: text;
        color: transparent;
    }
</style>