<template>
    <div class="parent">
        <h3>问卷调查
          <input type="button" value="new" @click="dialogShow=!dialogShow" >
        </h3>
        <formDlg v-if="dialogShow" :DlgData="this.form"  />
       <!-- 注意这里，formData是自定义属性，用来向子组件传递数据，如果要想被子组件控制，必须加上 .sync，
请注意，现在新版本的vue可以不用写.sync-->
        <!-- <child:formData.sync="form"></child> -->
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
       dialogShow:false,
       form: {
        name: "",
        namePla: "姓名不能为空",
        address: "",
        age: ""
      }
    }
  },
 
  components:{
    formDlg,
  }  
}
</script>