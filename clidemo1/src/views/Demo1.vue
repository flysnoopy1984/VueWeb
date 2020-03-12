<template>
    <div class="parent">
        <h3>问卷调查
          <input type="button" value="new" @click="dialogShow=!dialogShow" >
        </h3>
        <formDlg :DlgData="form" v-if="dialogShow"  /> 
        <div class="">
            <p>姓名：{{form.name}}</p>
            <p>年龄：{{form.age}}</p>
            <p>地址：{{form.address}}</p>
        </div>
    </div>
</template>

<script>
import formDlg from "../components/FormDialog.vue";
export default {
  name:"FormDemo",
  data(){
    return {
       dialogShow:true,
       form: {
        name: "",
        namePla: "姓名不能为空",
        address: "",
        age: ""
      }
    }
  },
  methods:{
    // ShowInfo(val){
    // }
  },
 
 
  components:{
    formDlg,
  }  
}
</script>