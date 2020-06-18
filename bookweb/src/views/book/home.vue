
<template>
    
   <div class="bookListContainer">
       <el-row :gutter="20">
            <el-col :xl="18" :lg="18" :md="18"> 

                <el-row :gutter="10" id="navTop">
                     <el-col>
                         <columnNav></columnNav>
                              <!-- <div class="ly-left-nav bg-nav"> 
                                    <div  v-for="nav in this.$store.getters.coumnNavs">{{nav.Title}}</div>
                                </div> -->
                     </el-col>
                 </el-row>

                 <el-row :gutter="10" id="mainContent">
                     <el-col>
                             <div class="ly-left-content  bg-purple-light">
                     </div>
                     </el-col>
                 </el-row>

            </el-col>
            <el-col id="rightContent" :xl="6" :lg="6" :md="6" class="hidden-sm-and-down">
                <tagArea></tagArea>
                <!-- <div class="ly-right-content bg-right-content">

                </div> -->
                </el-col>
        </el-row>   
        <!-- <h3>{{msg}}</h3>
        <div class="bookRow">
                <div class="bookInfo" v-for="item in this.booklist" >
                    <div><img class="bookCover" :src="item.coverUrl"></div>
                    <div>{{item.Name }}</div>
                </div>
        </div> -->
     
    </div>
</template>

<style lang="css">
.ly-left-nav{
         border-radius: 4px;
          min-height: 40px;
          display: flex;
        
          line-height: 40px;
          justify-content:space-evenly;
          font-weight: 300;
}
.ly-left-content{
         border-radius: 4px;
          min-height: 600px;
}
.ly-right-content{
         border-radius: 4px;
          min-height: 200px;
}

/* Grid Demo Begin */
.el-row{
    margin-bottom: 20px;
}

.bg-purple-dark{
    background: #99a9bf
}
.bg-purple {
	background: #d3dce6
}
 .bg-purple-light {
	background: #e5e9f2
}
/* Grid Demo End */
.bookListContainer{
    /* background-color: coral; */
    /* height: 100px; */
    padding: 30px;
}
.bookRow{
    width: 1000px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding-left: 60px;
    padding-right: 60px;
    flex-wrap: wrap;
}
.bookInfo{
    padding: 10px;
    border-radius: 20px;

}
.bookCover{width: 120px;height: 180px;}
</style>

<script>

export default{
    data () {
    return {
      booklist:[],
      msg: 'BookList'
    }
  },
  methods:{
      initData(){
          this.booklist = new Array();
        //   var book;
 
        //   this.$ccApi.get("/book/getSimplePager?pageIndex=0&pageSize=15",null,d=>{
        //        d.PageData.datas.forEach(item => {
        //             book = new Object();
        //             book.Name = item.Name;
        //             book.Code = item.Code;
        //             book.coverUrl = item.CoverUrl;
        //           //  book.Summery = "aaaaaa";
        //             book.score = 10;
        //             this.booklist.push(book);
        //        });
        //   });
       
     
        
      },
      testNoAuth(){
        
            this.$ccApi.get("/book/getNoAuth",null,d=>{
                 
             var r = d;
           
             alert(r);
         },(st,err)=>{
            alert(st);
         });
      }
  },
  
  created(){
      this.initData();
  }
}
</script>