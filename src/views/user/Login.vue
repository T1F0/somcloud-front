<template>
  <div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" style="margin-top: 80px">              <!--ref指button所指的内容即@clink所指向的内容-->
    <el-form-item label="用户名" prop="userName" size="large"  style="width: 300px;height: 80px;margin-left: 600px;text-align: center;position: inherit">
      <el-input placeholder="请输入用户名" v-model="ruleForm.userName" ></el-input>
    </el-form-item>

    <el-form-item label="密码"  prop="password" size="large" style="width: 300px;height: 80px;margin-left: 600px">
    <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
    </el-form-item>

    <el-form-item size="large" style="margin-top: 50px">
      <el-button type="primary" @click="loginForm('ruleForm')">登录</el-button>
      <el-button ><router-link :to="{path: '/register'}">没有账号，我要注册</router-link></el-button>
      <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
      <el-button><router-link :to="{path: '/else'}">其他登录方式</router-link></el-button>
    </el-form-item>
</el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          userName:'小宋同志',
          password:'123456'
        },
        rules:{
          userName:[
            {required:true,message:'用户名不能为空',trigger:'blur'},
            {min:1,max:10,message:'用户名请您设置为1~10个字符（汉字、字母、数字或特殊字符（~！@#￥%……&*）',trigger:'blur'}            //不显示
          ],
          password:[
            {required:true,message:'密码不能为空',trigger:'blur'},
            {min:6,max:20,message:'密码请您设置为6~20位字符字母、数字或特殊字符（~！@#￥%……&*）',trigger:'blur'}
          ]
        }
        }
    },

    methods:{
      loginForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            let _this=this
            axios.get('http://localhost:8082/users/login',{params:_this.ruleForm}).then(function (resp) {                                   //上传后端数据
              console.log(resp.data)                                                                                     //可以在F12中返回结果，即then的值
              if (resp.data!=null){
                localStorage.setItem('access-admin',JSON.stringify(resp.data))       //存
                console.log(JSON.stringify(resp.data))
                _this.$router.replace({path:'/'})
                alert("登录成功！为防止信息泄露等风险，您的操作时间为30分钟，30分钟之后账号将自动退出，之后您可以选择再次登录")
                window.location.reload()
              }else {
                alert("登录失败,用户不存在或者密码错误，请您输入正确的用户名和密码")                   //return false;
              }
            })
          }
        });
      },
      resetForm(formName) {
        this. $refs [formName].resetFields();
      }
    }
  }
</script>


<style scoped>
</style>