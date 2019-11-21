<template>
    <div>
        <div>
        <qrcode-vue :value="value" :size="size" level="H" style="text-align: center">I Love You</qrcode-vue>
        </div>
        <button @click="dialog(value)">按钮</button>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';
    export default {
        name: "qrcode",
        data:function () {
            return{
                value: '',
                size:150
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

</style>