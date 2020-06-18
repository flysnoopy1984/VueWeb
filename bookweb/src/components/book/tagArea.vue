
<template>
    <el-card class="box-card" shadow="never">
    <div slot="header" class="clearfix">
        <span>标签榜</span>
        <el-button style="float: right; padding: 3px 0" type="primary"  :icon="tagIsOpen?'el-icon-caret-bottom':'el-icon-caret-left'" @click="switchTagButton"></el-button>
    </div>
    <el-collapse-transition>
    <div class="tagContent" v-show="tagIsOpen">
        <el-tag v-for="tag in this.$store.getters.tagData" :type="tag.type" :key="tag.Code">{{tag.Name}}({{tag.Count }})</el-tag>
    </div>
    </el-collapse-transition>
</el-card>
</template>
<script>
export default {
       data:function(){
        return{
            tagIsOpen:true,
            tagList:[]
        }
    },
    computed:{

    },
    methods:{
        switchTagButton:function(){
            this.tagIsOpen = !this.tagIsOpen;
        },
      
    }
}
</script>
<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .tagContent{
      display: flex;
      flex-wrap: wrap;
      justify-content:start;

  }
  .tagContent span{
      margin-right: 12px;
      margin-bottom: 10px;
      cursor: pointer;
  }
</style>