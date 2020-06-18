<template>

    <el-row type="flex" justify="center">
  
       
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon  label-width="50px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>
<script>

export default {
   data(){
       return {
           user:{
               name:"",
               pass:""
           },
           rules:{
                name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
                pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
           }
       }
   },
   methods:{
        login() {
            this.$refs.loginForm.validate((v)=>{
                if(v){
                    this.$message({
                        type: "success",
                        message: "登陆成功",
                       
                    });
                     this.$router.replace("/");
                }
                else{
                    this.$message({
                        type: "error",
                        message: "用户名或密码错误",
                        showClose: true
                    });
                }
            })
        }
   }
}
</script>