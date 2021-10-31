<template>
  <div>

    <!--  <div id="right">-->
    <!--    <a href="/"><img src="../src/assets/Yes.png" id="rightbutton"></a>-->
    <!--    <a href="/about"><img src="../src/assets/Help.png" id="rightbutton"></a>-->
    <!--    <a href="/about"><img src="../src/assets/Service.jpg" id="rightbutton"></a>-->
    <!--    <a href="/about"><img src="../src/assets/Wechat.jpg" id="rightbutton"></a>-->
    <!--    <el-dropdown>-->
    <!--      <img src="../src/assets/QQ.jpg" id="rightbutton">-->
    <!--      <el-dropdown-menu slot="dropdown" >-->
    <!--        <el-dropdown-item id="dropdown"><img src="../src/assets/QQ.jpg" style="width: 150px;height: 150px"></el-dropdown-item>-->
    <!--      </el-dropdown-menu>-->
    <!--    </el-dropdown>-->
    <!--    <a href="/about"><img src="../src/assets/Bilibili.jpg" id="rightbutton"></a>-->
    <!--    <a href="/about"><img src="../src/assets/Email.jpg" id="rightbutton"></a>-->
    <!--    <a href="/about"><img src="../src/assets/Twitter.png" id="rightbutton"></a>-->
    <!--    &lt;!&ndash;        <router-link to="/el"><div id="title-desc"><img src="../src/assets/Hongkong.jpg" id="title-img">关于</div></router-link>&ndash;&gt;-->
    <!--  </div>-->
    <div>
      <a href="/">Yes</a>
      <a href="/about">Help</a>
      <a href="/about">Service</a>
      <a href="/about">Wechat</a>
      <el-dropdown>
        QQ
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item id="dropdown">QQ</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <a href="/about">Bilibili</a>
      <a href="/about">Email</a>
      <a href="/about">Twitter</a><br>
      <!--        <router-link to="/el"><div id="title-desc"><img src="../src/assets/Hongkong.jpg" id="title-img">关于</div></router-link>-->
      <a>我只是测试一下啊</a><br>
    </div>
    <el-form>
      <el-form-item size="large" style="margin-top: 50px">
        <el-button><router-link :to="{path: '/login'}">返回账号登录</router-link></el-button>
        <el-button><router-link :to="{path: '/register'}">返回注册账号</router-link></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Else",
  data() {
    return {
      ruleForm: {
        userName:'',
        password:''
      },
      rules:{
        userName:[
          {required:true,message:'用户名不能为空',trigger:'blur'},
          {min:2,max:5,message:'请输入2~5个字',trigger:'blur'}            //不显示
        ],
        password:[
          {required:true,message:'密码不能为空',trigger:'blur'},
          {min:2,max:5,message:'密码不正确，请您重新输入',trigger:'blur'}
        ]
      }
    }
  },

  methods:{
    loginForm(formName) {
      const _this =this
      this.$refs [formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8082/user/save',this.ruleForm).then(function (resp) {                                   //上传后端数据
            console.log(resp)
            alert("登录成功")
          })
        } else {
          alert("登录失败")                   //return false;
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