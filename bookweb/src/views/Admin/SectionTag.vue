<template>
<div style="padding:10px">
    <el-row :gutter="20">
    <el-col :span="4">
       <el-menu class="sectionList"
        background-color="#545c64" 
        text-color="#ffffff" 
        active-text-color="#ffd04b"
        :default-active="selMenuIndex" @select="handleSelect">
              <el-menu-item :index="i.toString()" v-for="(nav,i) in this.$store.getters.allNavs"  :class="{TopNav:nav.type == 0}">
                  {{nav.Title}}
              </el-menu-item>
        </el-menu>
     </el-col>
  
    <el-col :span="20" id="transferArea">
        <div class="BtnBar">
            <span>
               <el-button type="primary" @click="submitData">保存</el-button>
            </span>
            <!-- <el-divider direction="vertical"></el-divider>
            <span>旧故里</span>
            <el-divider direction="vertical"></el-divider>
            <span>草木深</span> -->
       </div>
       <div>
            <el-transfer :titles="['未使用', '已使用']" 
                                    v-model="tagetVal" 
                                    :data="TagData">
                </el-transfer>
        </div>
    </el-col>
</el-row>
</div>

</template>
<script>
export default {
    data(){
        return {
            selMenuIndex:"9",
            TagData:[],
            tagetVal:[]
        }
    },
     methods: {
      handleSelect(key, keyPath) {
          this.selMenuIndex = key;
             var secCode = this.$store.getters.allNavs[this.selMenuIndex].Code;
          console.log("switch Key and Code:"+key+"--"+secCode);
          this.swithSecCode();
            
      },

      swithSecCode(){
                var secCode = this.$store.getters.allNavs[this.selMenuIndex].Code;
                this.TagData = [];
                this.tagetVal =[];
                var url = this.$ccUrls.Admin_GetSectionTagRelation+"?secCode="+secCode+"&tagCount=500";
                    this.$ccApi.get(url,null,r=>{
              
                        r.Entity.tagList.forEach(tag => {
                            this.TagData.push({
                                label:tag.Name+" ("+tag.Count+")",
                                key:tag.Code
                            });
                        });    
                          r.Entity.sectionTagList.forEach(st=>{
                              this.tagetVal.push(st.TagCode);
                        })
                    });
      },
      initData() {
        let _this  = this;
        if(!_this.$store.getters.hasNav)
         {
           
               window.setTimeout(()=>{
                  console.log("wait for 500 ms")
                _this.swithSecCode();
             },500);
            
         }
         else
            console.log("nav data Not Loading");
       },
     submitData(){
          var stList = [];
          var msg="";
          var secCode = this.$store.getters.allNavs[this.selMenuIndex].Code;
          this.tagetVal.forEach(t=>{
                stList.push({
                    Code:t,
                  //  SectionCode:secCode
                });
          });
          var data ={
              secCode : secCode,
              tagList : stList
          };
          console.log("data:"+JSON.stringify(data));
     
          this.$ccApi.post(this.$ccUrls.Admin_SaveSectionTagRelation,data,r=>{
                if(r.IsSuccess)
                    this.$message({showClose: true,message:"提交成功!",type: 'success'});
                else
                    this.$message({showClose: true,message:r.ErrorMsg,type: 'error'});
          });
            
    
      
        
       },
   
   },
   

    mounted(){
      this.initData();
  }
}
</script>
<style scoped>

.BtnBar{
    height: 80px;
    line-height: 80px;
    /* width: 1000px; */
    display: flex;
    /* justify-content: flex-end; */
}
</style>
<style>
.TopNav{
    background-color: #409EFF !important
}
#transferArea .el-transfer-panel{
    width: 400px !important; 
}
#transferArea .el-transfer-panel__body{
  height: 600px;
}
#transferArea .el-transfer-panel__list{
    height: 100%;
}
</style>