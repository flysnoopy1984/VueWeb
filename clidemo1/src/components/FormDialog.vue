<template>
    <div>
        <label>
            姓名：<input type="text" v-model="cform.name">
        </label>
        <label>
            年龄：<input type="text" v-model="cform.address">
        </label>
        <label>
            地址：<input type="text" v-model="cform.age">
        </label>
    </div>
</template>
<script>
export default {
    name:"formDialog",
    props:{
        DlgData:Object,
    },
    data(){
        return {
            cform:{
                name: "",
                address: "",
                age: ""
            }
        }
    },
    methods:{

    },
   
    watch:{
        'DlgData':{
            immediate:true,
            handler(val){          
              this.cform = val;
             
            }, 
        },
    }
}
</script>