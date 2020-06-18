<template>
    <div class="bookListContainer">
        <h3>{{msg}}</h3>
        <div class="bookRow">
                <div class="bookInfo" v-for="item in this.booklist" >
                    <div><img class="bookCover" :src="item.coverUrl"></div>
                    <div>{{item.Name }}</div>
                </div>
        </div>
     <div>
         <input type="button" value="NoAuth" @click="testNoAuth" />
     </div>
      
    </div>
</template>

<style lang="css">
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
import SignedInUser from '@/components/Oidc/SignedInUser'


export default{
   components:{SignedInUser},
    data () {
    return {
      booklist:[],
      msg: 'BookList'
    }
  },
  methods:{
      initData(){
          this.booklist = new Array();
          var book;
 
          this.$ccApi.get("/book/getSimplePager?pageIndex=0&pageSize=15",null,d=>{
               d.PageData.datas.forEach(item => {
                    book = new Object();
                    book.Name = item.Name;
                    book.Code = item.Code;
                    book.coverUrl = item.CoverUrl;
                  //  book.Summery = "aaaaaa";
                    book.score = 10;
                    this.booklist.push(book);
               });
          });
       
     
        
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