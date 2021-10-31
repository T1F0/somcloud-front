<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="550px"  size="large">
    <el-form-item label="编号" prop="demandid"><el-input v-model="ruleForm.demandid"  readonly></el-input></el-form-item>                              <!--prop="x"指向rules中的x-->
    <el-form-item label="资源名称" prop="demandname"><el-input v-model="ruleForm.demandname"></el-input></el-form-item>                  <!--输入框里返回的内容 / v-model="ruleForm.x"指向ruleForm中的x / readonly只读不能修改-->
    <el-form-item label="资源形式" prop="demandform"><el-input v-model="ruleForm.demandform"></el-input></el-form-item>
    <el-form-item label="资源类型" prop="demandtype"><el-input v-model="ruleForm.demandtype"></el-input></el-form-item>
    <el-form-item label="型号" prop="model"><el-input v-model="ruleForm.model"></el-input></el-form-item>
    <el-form-item label="联系方式" prop="contact"><el-input v-model="ruleForm.contact"></el-input></el-form-item>
    <el-form-item label="所属公司" prop="compony"><el-input v-model="ruleForm.compony"></el-input></el-form-item>
    <el-form-item label="是否公开" prop="open"><el-input v-model="ruleForm.open"></el-input></el-form-item>
    <el-form-item label="备注" prop="remark"><el-input v-model="ruleForm.remark"></el-input></el-form-item>
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
        demandid:"",
        demandname: "dddd",
        demandform:"",
        demandtype:"",
        model:"",
        contact: '',                                   //输入框里默认内容
        compony: '',
        open: '',
        remark:'需求上传',
      },
      rules: {                                  //required:true必要的/id is not a string
        demandname: [{required: true, message: '2不能为空', trigger: 'blur'}, {min: 2, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        demandform: [{required: true, message: '3不能为空', trigger: 'blur'}, {min: 2, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        demandtype: [{required: true, message: '4不能为空', trigger: 'blur'}, {min: 2, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        model: [{required: true, message: '2不能为空', trigger: 'blur'}, {min: 2, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        contact: [{required: true, message: '3不能为空', trigger: 'blur'}, {min: 5, max: 20, message: '输入2~5个字', trigger: 'blur'}],
        compony: [{required: true, message: '4不能为空', trigger: 'blur'}, {min: 2, max: 50, message: '输入2~5个字', trigger: 'blur'}],
        open: [{required: true, message: '2不能为空', trigger: 'blur'}, {min: 1, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        remark: [{required: true, message: '3不能为空', trigger: 'blur'}, {min: 2, max: 5, message: '输入2~5个字', trigger: 'blur'}],
        }
    };
  },

  methods: {
    submitForm(formName) {
      const _this =this
      this.$refs [formName].validate((valid) => {
        if (valid) {
          axios.post('http://localhost:8082/demand/save',this.ruleForm).then(function (resp) {                                   //上传后端数据
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
    axios.get('http://localhost:8082/demand/findById/'+this.$route.query.demandid).then(function (resp){                                //调取后端数据,读取到页面相应窗口
               _this.ruleForm = resp.data
    })
  }
}
</script>