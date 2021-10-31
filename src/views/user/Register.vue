<template>
  <div>
<!--    <head> <style> .box a{color: black;} [class="box"] a{color: blue;} p a{color:blue;} p a{color: yellow;} </style> </head> <body><p class="box"><a>hello</a></p></body>-->
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" style="margin-top: 80px">              <!--ref指button所指的内容即@clink所指向的内容-->
    <el-form-item label="用户名" prop="userName" size="large"  style="width: 400px;height: 80px;margin-left: 600px;text-align: center;position: inherit">
      <el-input placeholder="请输入用户名" v-model="ruleForm.userName" ></el-input>
    </el-form-item>

    <el-form-item label="密码"  prop="password" size="large" style="width: 400px;height: 80px;margin-left: 600px">
      <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
    </el-form-item>

    <el-form-item label="请再次输入密码"  prop="checkpass" size="large" style="width: 400px;height: 80px;margin-left: 600px">
      <el-input placeholder="请再次输入密码" v-model="ruleForm.checkpass" show-password></el-input>
    </el-form-item>

    <el-form-item size="large" style="margin-top: 50px">
      <el-button type="primary" @click="registerForm('ruleForm')">注册</el-button>
      <el-button ><router-link :to="{path: '/login'}">已有账号，我要登录</router-link></el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
      <el-button><router-link :to="{path: '/else'}">其他登录方式</router-link></el-button>
    </el-form-item>
</el-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      var validatepass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {                  //判断和密码是否相同
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          userName:'23456',
          password:'4565756',
          checkpass: '4565756'
        },
        rules:{
          userName:[
            {required:true,message:'用户名不能为空',trigger:'blur'},
            {min:1,max:10,message:'用户名请您设置为1~10个字符（汉字、字母、数字或特殊字符（~！@#￥%……&*）',trigger:'blur'}            //不显示
          ],
          password:[
            {required:true,message:'密码不能为空',trigger:'blur'},
            {min:6,max:20,message:'密码请您设置为6~20位字符字母、数字或特殊字符（~！@#￥%……&*）',trigger:'blur'}
          ],
          checkpass:[
            {validator:validatepass},
            {required:true,message:'请您重新输入以确认密码',trigger:'blur'}
          ]
        }
        }
    },

    methods:{
      registerForm(formName) {
         const _this =this
        this.$refs [formName].validate((valid) => {
          if (valid) {
            axios.get('http://localhost:8082/users/register?userName='+this.ruleForm.userName+'&password='+this.ruleForm.password).then(function (resp) {                                   //上传后端数据
              console.log(resp)
              if(resp.data=="注册成功"){
                alert("注册成功")
              }else {
                alert("注册失败")
            }
          })                  //return false;
          }
        })
        },
      blur:function () {
        if (this.userName.length <= 0) {
          pang.msg = '<span style="color: red">用户名不能为空</span>'
        } else {
          axios.post('http://localhost:8082/user/save',{
            userName : this.userName,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}   //跨域
          }).then(function (dat){
            if (dat.data == "0"){
              pang.msg = '<span style="color: green">用户名可用</span>'
            }
            else if (dat.data == "1")
              pang.msg = '<span style="color: red">用户名已存在</span>'
          })
        }
      },
      resetForm(formName) {
        this. $refs [formName].resetFields();
      }
    },
  }
</script>


<style scoped>

</style>