<template>
<div>
        <el-menu 
        background-color="#53A8FF" 
        text-color="#ffffff" 
        active-text-color="#FFE277"
        default-active="0" mode="horizontal" @select="handleSelect">
              <el-menu-item :index="i.toString()" v-for="(nav,i) in this.$store.getters.coumnNavs">
                  {{nav.Title}}
              </el-menu-item>
        </el-menu>
    <div class="line"></div>
</div>

</template>
<style scoped>
.el-menu{
  border-radius: 4px;
}
.el-menu-item{
    /* font-size: 16px; */
    font-weight: 400;
    height: 40px !important;
    line-height: 40px !important;
   
}

</style>
<script>
export default {
//    props:{
//        menusData:[],
//    },
    
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>