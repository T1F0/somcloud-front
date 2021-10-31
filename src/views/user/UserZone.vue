<template xmlns="http://www.w3.org/1999/html">



  <div>
    <div id="left-image">
      <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="tableData.userheadportraiturl" :src="tableData.userheadportraiturl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" style="color: #42b983"></i>
      </el-upload>
      <div>用户名：{{admin.userName}}</div>
        <div>用户UID：{{tableData.userid}}</div><br>
        <div>昵称：{{tableData.usernickname}}</div><br>
        <div>性别：{{tableData.usergender}}</div><br>
        <div>地区：{{tableData.userregion}}</div><br>
        <div>生日：{{tableData.userbirthday}}</div><br>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        编辑资料
      </el-button>

    </div>

    <div id="right-text">
      <div>安全设置：{{tableData.userid}}</div><br>
      <div>绑定手机号：{{tableData.usernickname}}</div><br>
      <div>绑定邮箱：{{tableData.usergender}}</div><br>
      <div>绑定微信：{{tableData.userregion}}</div><br>
      <el-button @click="dialog = true" type="primary" style="margin-left: 16px;">
        修改密码
      </el-button>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        注销账号
      </el-button>
      <el-drawer
          title="请您修改密码"
          :before-close="handleClose"
          :visible.sync="dialog"
          :direction="direction"
          custom-class="demo-drawer"
          ref="drawer"
          size="600px"
          align="center">
        <div class="demo-drawer__content">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" >              <!--ref指button所指的内容即@clink所指向的内容-->

            <el-form-item label="用户名" prop="userName" size="large"  style="width: 400px;height: 70px;position: inherit">
              <el-input placeholder="请输入用户名" v-model="ruleForm.userName" ></el-input>
            </el-form-item>

            <el-form-item label="原密码"  prop="password" size="large" style="width: 400px;height: 70px">
              <el-input placeholder="请输入原密码" v-model="ruleForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item label="新密码"  prop="newpassword" size="large" style="width: 400px;height: 70px">
              <el-input placeholder="请输入新密码" v-model="ruleForm.newpassword" show-password></el-input>
            </el-form-item>

<!--            <el-form-item label="请再次输入密码"  prop="checkpass" size="large" style="width: 400px;height: 70px">-->
<!--              <el-input placeholder="请再次输入密码" v-model="ruleForm.checkpass" show-password></el-input>-->
<!--            </el-form-item>-->
          </el-form>
          <div class="demo-drawer__footer" align="center">
            <el-button type="primary" @click="changeUser('ruleForm')">确认修改</el-button>
            <el-button type="primary"><router-link :to="{path: '/login'}">退出账号</router-link></el-button>
            <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary"><router-link :to="{path: '/else'}">其他方式登录</router-link></el-button>
            <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '关闭' }}</el-button>
            <div>密码修改之后当前登录信息将关闭，请您注意当前页面信息做必要保存</div>
          </div>
        </div>
      </el-drawer>

      <el-drawer
          title="您确定要注销吗"
          :visible.sync="drawer"
          :direction="direction"
          :with-header="false"
           style="height:1000px"
          size="500px"
          align="center">
        <span><br>您确定要注销吗<br>
        注销账号意味着您账号内所有信息清空</span>
        <el-button type="primary" @click="deleteUser()">确定注销账号</el-button>
        <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '取消' }}</el-button>
      </el-drawer>


    </div>
    <div>
      <el-button type="primary" slot="reference" @click="join()"><img src="https://img0.baidu.com/it/u=682336211,1354261576&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px">加入购物车</el-button>
      <el-button type="primary" slot="reference" @click="collect()"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >收藏</el-button>
      <el-button type="primary" slot="reference" @click="like()"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >喜欢一下</el-button>
      <el-button type="primary" slot="reference"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >联系提供方</el-button>
      <el-button type="primary" slot="reference">
        <a target="_blank" href="https://www.alipay.com/"><img width="20px" height="20px" border="0" src="https://img2.baidu.com/it/u=7575227,2930931420&fm=26&fmt=auto&gp=0.jpg" alt="我要下单" title="下单"/>我要下单</a>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // var validatepass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm.password) {                  //判断和密码是否相同
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      tableData: null,
      newuserdata: [],
      drawer: false,
      dialog: false,
      direction: 'btt',
      ruleForm: {
        userName: "测试",
      },
      rules: {
        userName: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 1, max: 10, message: '用户名请您设置为1~10个字符（汉字、字母、数字或特殊字符（~！@#￥%……&*）', trigger: 'blur'}            //不显示
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 6, max: 20, message: '密码请您设置为6~20位字符字母、数字或特殊字符（~！@#￥%……&*）', trigger: 'blur'}
        ],
        newpassword: [
          // {validator:validatepass},
          {required: true, message: '请您输入新密码', trigger: 'blur'},
          {min: 6, max: 20, message: '新密码请您设置为6~20位字符字母、数字或特殊字符（~！@#￥%……&*）', trigger: 'blur'}
        ]
      }
    }
  },
  created() {
    const that = this
    that.admin = JSON.parse(window.localStorage.getItem('access-admin'))
    axios.get('http://localhost:8082/userdata/findById/' + that.admin.userid).then(function (resp) {                //调取后端数据,读取到页面相应窗口,
      that.tableData = resp.data                                                                                       //从content中拿出数据
    })
  },
  methods: {
    handleAvatarSuccess(res, file) {
      const _this = this
      this.$set(_this.tableData, "userheadportraiturl", URL.createObjectURL(file.raw))     //将对象中的userheadportrait属性值修改为当前上传的值
      axios.post('http://localhost:8082/userdata/save', _this.tableData).then(function (resp) {
        alert('上传成功')
        window.location.reload()
      })
    },
    beforeAvatarUpload(file) {
      alert("正在上传，请稍等片刻")
      const isJPG = file.type === 'image/jpeg' | 'image/mpg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        alert("上传头像图片只能是 JPG 或者 MPG 格式!")
        // this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        alert("上传头像图片大小不能超过 2MB!")
        // this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    // join() {
    //   const that = this
    //   axios.get('http://localhost:8082/demand/findById/' + this.$route.query.demandid).then(function (resp) {              //怎么抓取数据行中的id？                 //调取后端数据,读取到页面相应窗口
    //     that.ruleForm = resp.data                                                                                      //已获取数据ruleForm
    //     axios.post('http://localhost:8082/prowantmanu/save', that.ruleForm).then(function (resp) {                                   //上传后端数据
    //       console.log(resp)
    //       alert('商品（id=' + that.ruleForm.demandid + ')已加入”我想制造“')                                                                   //ruleForm数组已上传至数据库，数据上传成功，此资源已加入购物车
    //     })
    //   })
    // },
    // collect() {
    //   const that = this
    //   axios.get('http://localhost:8082/demand/findById/' + this.$route.query.demandid).then(function (resp) {              //怎么抓取数据行中的id？                 //调取后端数据,读取到页面相应窗口this.$route.query.id
    //     that.ruleForm = resp.data
    //     axios.post('http://localhost:8082/prowantservice/save', that.ruleForm).then(function (resp) {                                   //上传后端数据
    //       console.log(resp)
    //       alert('商品（id=' + that.ruleForm.demandid + ')已加入“我想服务”')
    //     })
    //   })
    // },
    // like() {
    //   const that = this
    //   axios.get('http://localhost:8082/demand/findById/' + this.$route.query.demandid).then(function (resp) {              //怎么抓取数据行中的id？                 //调取后端数据,读取到页面相应窗口this.$route.query.id
    //     that.ruleForm = resp.data
    //     axios.post('http://localhost:8082/prolike/save', that.ruleForm).then(function (resp) {                                   //上传后端数据
    //       console.log(resp)
    //       alert('商品（id=' + that.ruleForm.demandid + ')已加入”我的喜欢“')
    //     })
    //   })
    // },
    changeUser() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let _this = this
          axios.get('http://localhost:8082/users/login', {params: _this.ruleForm}).then(function (resp) {                                   //上传后端数据
            console.log(resp.data)                                                                                    //可以在F12中返回结果，即then的值
            if (resp.data != null) {
              localStorage.setItem('access-admin', JSON.stringify(resp.data))
              _this.ruleForm.password = _this.ruleForm.newpassword
              axios.get('http://localhost:8082/users/updatePassword', {params: _this.ruleForm}).then(function (resp) {                                   //上传后端数据
                console.log(resp.data)
              })
              alert("修改成功，请您重新登录")
              window.location.reload()
            } else {
              alert("登录失败,用户不存在或者密码错误，请您输入正确的用户名和密码")                 //return false;
            }
          })
        }
      });
    },
    deleteUser() {
      const that = this
      that.admin = JSON.parse(window.localStorage.getItem('access-admin'))
      axios.get('http://localhost:8082/users/deleteUser?userName='+that.admin.userName).then(function (resp) {                                   //上传后端数据
        console.log(resp.data)
        if (resp.data ==="删除成功") {
          alert("删除成功")
          window.location.reload()
        } else {
          alert("注销失败（一般不会弹出）")
        }
      })
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>