<template>
    <div>
        <label>
            姓名：<input type="text" v-model="form.name">
        </label>
        <label>
            年龄：<input type="text" v-model="form.address">
        </label>
        <label>
            地址：<input type="text" v-model="form.age">
        </label>
    </div>
</template>
<script>
export default {
    name:"formDialog",
    props:{
        DlgData:Object
    },
    data(){
        return {
            form:{
                name: "",
                address: "",
                age: ""
            }
        }
    },
    methods:{

    },
    watch:{
        formData:{
            handler(val){
                this.formData = val;
                $emit('')
            }
        }
    }
}
</script>