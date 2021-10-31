<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" size="mini">
<el-form-item label="编号" prop="id">                              <!--prop="x"指向rules中的x-->
      <el-input v-model="ruleForm.id"  readonly></el-input>                        <!--输入框里返回的内容 / v-model="ruleForm.x"指向ruleForm中的x / readonly只读不能修改-->
    </el-form-item>

    <el-form-item label="品牌" prop="brand">
      <el-input v-model="ruleForm.brand"></el-input>
    </el-form-item>

    <el-form-item label="车型" prop="type">
      <el-input v-model="ruleForm.type"></el-input>
    </el-form-item>

    <el-form-item label="款式年份" prop="style">
      <el-input v-model="ruleForm.style"></el-input>
    </el-form-item>


    <el-form-item size="large">
      <el-button type="primary" @click="submitForm('ruleForm')">上传</el-button>
      <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id:"",
        brand: '',                                   //输入框里默认内容
        type: '',
        style: ''
      },
      rules:{
        id:[
          {required:true,trigger:'blur'}                   //required:true必要的/id is not a string
        //   {min:2,max:5,trigger:'blur'}
        ],
        brand:[
          {required:true,message:'型号不能为空',trigger:'blur'},
          {min:2,max:5,message:'输入2~5个字',trigger:'blur'}
        ],
        type:[
          {required:true,message:'型号不能为空',trigger:'blur'},
          {min:2,max:5,message:'输入2~5个字',trigger:'blur'}
        ],
        style:[
          {required:true,message:'型号不能为空',trigger:'blur'},
          {min:2,max:5,message:'输入2~5个字',trigger:'blur'}
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      const _this =this
      this.$refs [formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8082/car/save',this.ruleForm).then(function (resp) {                                   //上传后端数据
            console.log(resp)
            alert('数据修改成功')
          })
        } else {
          alert("数据修改失败")                                //return false;
        }
      });
    },
    resetForm(formName) {
      this. $refs [formName].resetFields();
    }
  },

  created() {
    // alert('请您开始修改')
    const _this =this
    axios.get('http://localhost:8082/car/findById/'+this.$route.query.id).then(function (resp){                                //调取后端数据,读取到页面相应窗口
               _this.ruleForm = resp.data
    })
  }
}
</script>