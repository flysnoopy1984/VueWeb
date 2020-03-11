<template>
    <div>
        {{info}}
    </div>
</template>

<script>
export default {
    name:"AxioDemo",
    data(){
        return {
             info:null
        }
       
    },
    methods:{
        initData(){
            var that = this;
            this.$api.post('res/GetBannerList',null,s=>{
                this.info = s;
            });
        }
    },
    created(){
        this.initData();
    }
}
</script>