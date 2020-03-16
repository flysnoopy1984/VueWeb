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
    data(){
        return {
            cform:{
                name: "",
                address: "",
                age: ""
            }
        }
    },
      mounted(){
         this.$store.commit("setformData",this.cform);
    //  console.log("child mounted");
     }
}
</script>