<template>
    <div>
        <div class="bg">
            <div class="box"></div>
            <div class="re"></div>
        </div>
        <div class="content">
            <div class="title">用户登录</div>
            <div class="user">
                <div class="userNickname">
                <van-cell-group>
                    <van-field
                            v-model="username"
                            clearable
                            left-icon="manager"
                            color="red"
                            placeholder="用户名"
                    />
                </van-cell-group>
                </div>
                <div class="userPassword">
                <van-cell-group>
                    <van-field
                            v-model="password"
                            type="password"
                            left-icon="lock"
                            placeholder="密码"
                    />
                </van-cell-group>
                </div>
                <div class="remeber">
                <van-checkbox v-model="checked" shape="square">记住密码</van-checkbox>
                </div>
                <div class="submit">
                    <van-button type="info" style="width: 80%;background: linear-gradient(to right,rgb(109,180,254),rgb(67,145,225));"  @click="register">登录</van-button>
                </div>
            </div>
        </div>
        <p>已有账号，去登录</p>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                checked: true,
                username:'',
                password:''
            }
        },
        methods: {
            register() {
                window.console.log('欢迎登录')
            },
        }
    }
</script>

<style scoped>
    @import"../../assets/css/rem.css";
    .box{
        width: 100%;
        height: 4rem;
        background: url("../../assets/images/userbg.png") no-repeat center center / 100% ;
    }
    .content{
        position: absolute;
        top: 1.2rem;
        left: 0.44rem;
        right: 0.44rem;
        bottom: calc(50% - 1.25rem);
    }
    .title{
        color: #fff;
        margin: 12px;
    }
    .user{
        width: 100%;
        height: 100%;
        background:#fff;
        border-radius: 5px;
        box-shadow: 0 8px 12px #c8cacd;
        display: flex;
        justify-content: center;
        align-items: center;
       flex-flow: column;
    }
    .userNickname{
        border: 1px solid #c8cacd;
        border-radius: 5px;
    }
    .userPassword{
        margin-top: 0.5rem;
        border: 1px solid #c8cacd;
        border-radius: 5px;
    }
    .van-checkbox{
        color: #c8cacd;
        margin-top: 0.4rem;
    }
    .remeber{
        position: relative;
        left: 1.3rem;
    }
    .submit{
        margin-top: 0.48rem;
        width: 100%;
    }
    p{
        position: absolute;
        left: calc(50% - 1rem);
        bottom: 3.9rem;
        margin: auto;
        font-size: 0.16rem;
        font-family: "苹方";
        background: linear-gradient(to right, rgb(109,180,254),rgb(67,145,225));
        -webkit-background-clip: text;
        color: transparent;
    }
</style>