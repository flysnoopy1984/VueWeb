<template>
    <div>

    </div>
</template>
<script>
export default {
    name:"AxioDemo",
    data:{
        info:null
    },
    methods:{
        initData(){
            this.$api.get('')
        }
    },
    created(){
        this.initData();
    }
}
</script>