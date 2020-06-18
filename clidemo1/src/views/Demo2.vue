<template>

    <div>
        <template v-for="item in list">
            {{item.Id}}
        </template>
        {{info}}
    </div>
</template>

<script>
export default {
    name:"AxioDemo",
    data(){
        return {
             list:null,
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