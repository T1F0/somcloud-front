<template>
  <div>找</div>
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
          axios.post('http://somc.top:8181/car/save',this.ruleForm).then(function (resp) {                                   //上传后端数据
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
    axios.get('http://somc.top:8181/car/findById/'+this.$route.query.id).then(function (resp){                                //调取后端数据,读取到页面相应窗口
               _this.ruleForm = resp.data
    })
  }
}
</script>