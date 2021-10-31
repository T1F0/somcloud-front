<template>
  <div>
    <el-col :span="19">                                                               <!--搜索框文本-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline="true">       <!--指向地址-->

        <el-form-item label="品牌" prop="brand">
          <el-input v-model="ruleForm.brand"  placeholder="请输入品牌名"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="type">
          <el-input v-model="ruleForm.type"  placeholder="请输入型号"></el-input>
        </el-form-item>
        <el-form-item label="年份" prop="style">
          <el-input v-model="ruleForm.style"  placeholder="请输入年份"></el-input>
        </el-form-item>

        <el-form-item >
          <el-button type="primary" @click="searchForm('ruleForm')">查询</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </el-col>
    <el-table :data=tableData border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
        <el-table-column prop="id" label="编号" width="120"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
        <el-table-column prop="brand" label="品牌" width="150"></el-table-column>
        <el-table-column prop="type" label="车型" width="120"></el-table-column>
        <el-table-column prop="style" label="款式" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" text-align="center" width="200">
<!--            <el-popconfirm-->
<!--                confirm-button-text='确定'-->
<!--                confirm:-->
<!--                cancel-button-text='不用了'-->
<!--                icon="el-icon-info"-->
<!--                icon-color="red"-->
<!--                title="这是一段内容确定删除吗？">-->
<!--            </el-popconfirm>-->
<!--            <template slot-scope="scope">-->
<!--            <el-button @click="edit(scope.row)" type="text" size="small">-->
<!--              修改</el-button>-->

<!--                                                 &lt;!&ndash;el-button按钮、@click按钮功能、edit按钮对应功能&ndash;&gt;-->
<!--&lt;!&ndash;            <el-popconfirm&ndash;&gt;-->
<!--&lt;!&ndash;                confirm-button-text='确定'&ndash;&gt;-->
<!--&lt;!&ndash;                cancel-button-text='不用了'&ndash;&gt;-->
<!--&lt;!&ndash;                icon="el-icon-info"&ndash;&gt;-->
<!--&lt;!&ndash;                icon-color="red"&ndash;&gt;-->
<!--&lt;!&ndash;                title="这是一段内容确定删除吗？">&ndash;&gt;-->
<!--&lt;!&ndash;            </el-popconfirm>&ndash;&gt;-->
      <template slot-scope="scope">
      <span>
      <el-popover placement="top" width="160" v-model="visible">
        <p>确定修改吗？</p>
        <div style="text-align: left; margin: 0">
          <el-button @click="edit(scope.row)" type="text" size="small">确定</el-button>
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
        </div>
        <el-button slot="reference">修改</el-button>
      </el-popover>

        <el-popover placement="top" width="160" v-model="visible">
          <p>确定删除吗？ <br>
            删除后将不可恢复
          </p>
          <div style="text-align: left; margin: 0">
            <el-button @click="carDelete(scope.row)" type="text" size="small">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference">删除</el-button>
        </el-popover>
      </span>
</template>
    </el-table-column>
  </el-table>

  <el-pagination background layout="prev, pager, next" page-size="10" :total="1000" @current-change="page"></el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    init () {
      var self = this
      this.$axios.get('/book/find')
          .then(function (res) {
            self.tableData = res.data.data
          })
          .catch(function (err) {
            console.log(err)
          })
    },
    edit(row) {                                              //row当前这一行的对象
      this.$router.push({
        path:'/update',                                //页面跳转
        query:{
          id:row.id
        }
      })
      row.id                                                 //通过id拿出数据
    },
    carDelete(row) {
      axios.delete('http://somc.top:8181/car/deleteById/'+row.id).then(function (resp)
      {
        alert("数据删除成功"),
        window.location.reload()
      })
    },
    searchForm(formName){
      var self = this
      this.$refs [formName].validate((valid) => {
        if (valid) {
          this.$axios.get('http://somc.top:8181/car/categories/{brand}' + this.ruleForm.brand)
              .then(function (resp){                                //.catch(function (err) {
                console.log(err)
              })
          self.tableData = resp.data.data
          alert("成功了")
        } else {
          alert('失败')
        }
      });
    },
    resetForm(formName) {
      this. $refs [formName].resetFields();
    },
    page(currentPage){
      const _this =this
      axios.get('http://somc.top:8181/car/findAll/'+currentPage+'/10').then(function (resp){                                //调取后端数据,读取到页面相应窗口,+this.$route.query.id
        _this.tableData = resp.data.content                                                       //从content中拿出数据
        _this.total=resp.data.totalElements
        // console.log(resp.data)
      })
    }
},
  created() {
    const _this =this
    axios.get('http://somc.top:8181/car/findAll/1/10').then(function (resp){                                //调取后端数据,读取到页面相应窗口,+this.$route.query.id
      _this.tableData = resp.data.content                                                       //从content中拿出数据
      _this.total=resp.data.totalElements
      // console.log(resp.data)
    })
  },

  data() {
    return {
      ruleForm: {
        id:'',brand: '', type:'', style:''
      },
      rules: {
        brand:[
          {required: true, message: '品牌不能为空', trigger: 'blur'},
          {min:2, max:5, message: '输入2~5个字',trigger: 'blur'}
        ],
        type:[
          {required: true, message: '型号不能为空', trigger: 'blur'},
          {min:2, max:5, message: '输入2~5个字',trigger: 'blur'}
        ],
        style:[
          {required: true, message: '年份不能为空', trigger: 'blur'},
          {min:2, max:5, message: '输入2~5个字',trigger: 'blur'}
        ]
      },
      total:null,
      tableData:null
    //       [                                                      //数据源
    // {"id":1,"brand":"丰田","type":"卡罗拉","style":"2021"},
    // {"id":2,"brand":"丰田","type":"雷凌","style":"2021"},
    // {"id":3,"brand":"丰田","type":"亚洲龙","style":"2021"},
    //       ],
    }
  },
    mounted: function () {
      this.init()
    }
  }
</script>