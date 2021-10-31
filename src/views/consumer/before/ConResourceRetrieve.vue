<template>
  <div>
    <el-col :span="19">                                                               <!--搜索框文本-->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline="true">       <!--指向地址-->

        <el-form-item label="编号" prop="type">
          <el-input v-model="ruleForm.id"  placeholder="请输入品牌名"></el-input>
        </el-form-item>
        <el-form-item label="型号" prop="type">
          <el-input v-model="ruleForm.type"  placeholder="请输入型号"></el-input>
        </el-form-item>
        <el-form-item label="年份" prop="type">
          <el-input v-model="ruleForm.style"  placeholder="请输入年份"></el-input>
        </el-form-item>

        <el-form-item >
          <el-button type="primary" @click="searchForm('ruleForm')">查询</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </el-col>
    <el-table :data=tableData border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
      <el-table-column prop="resourceid" label="编号" width="120"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
      <el-table-column prop="resourcename" label="资源名称" width="150"></el-table-column>
      <el-table-column prop="resourceform" label="资源形式" width="120"></el-table-column>
      <el-table-column prop="resourcetype" label="资源型号" width="120"></el-table-column>          <!--"prop:"决定了用数据库的哪一字段的数据-->
      <el-table-column prop="model" label="型号" width="150"></el-table-column>
      <el-table-column prop="contact" label="联系方式" width="120"></el-table-column>
      <el-table-column prop="compony" label="公司名称" width="120"></el-table-column>
      <el-table-column prop="open" label="是否公开" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" text-align="center" width="300">
        <template slot-scope="scope">
       <span>
<!--      <el-popover placement="top" width="160" v-model="visible">-->
<!--        <p>确定加入购物车吗？</p>-->
<!--        <div style="text-align: left; margin: 0">-->
<!--          <el-button @click="join(scope.row)" type="text" size="small">确定</el-button>-->
<!--          <el-button size="mini" type="text" @click="visible = false">取消</el-button>-->
<!--        </div>-->
         <el-button type="primary" slot="reference" @click="detail(scope.row)">详情</el-button>
<!--   </el-popover>-->

<!--    <el-popover placement="top" width="160" v-model="visible">-->
<!--&lt;!&ndash;          <p>确定报价吗？ <br>&ndash;&gt;-->
<!--            报价后将不可撤销，只能修改-->
<!--          </p>-->
<!--          <div style="text-align: left; margin: 0">-->
<!--            <el-button @click="carDelete(scope.row)" type="text" size="small">确定</el-button>-->
<!--            <el-button size="mini" type="text" >取消</el-button>    &lt;!&ndash;@click="visible = false"&ndash;&gt;-->
<!--          </div>-->

<!-- </el-popover>-->
<!--      <el-popover placement="top" width="160" v-model="visible">-->
<!--        </el-popover>-->

      </span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" page-size="10" :total="1000" @current-change="page"></el-pagination>
    想实现一个组件直接展示列表中的数据，每一行都展示成一个独立的卡片，类似于淘宝的订单卡片。
    <el-row :data=tableData gutter=20>
      <el-col :span="6"><!--el-table表、data数据源数组名称-->
        <!--        <el-table :data=tableData border style="width: 100px">-->
        <!--            <el-table-column prop="id" label="编号" width="120" class="grid-content bg-purple">-->
        <!--            </el-table-column>-->
        <!--        </el-table>-->
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    // init () {
    //   var self = this
    //   this.$axios.get('/book/find')
    //       .then(function (res) {
    //         self.tableData = res.data.data
    //       })
    //       .catch(function (err) {
    //         console.log(err)
    //       })
    // },
    // join(row) {                                              //row当前这一行的对象
    //   this.$router.push({    //页面跳转
    //     query:{
    //       id:row.id
    //     }
    //   })
    //   row.id                                                 //通过id拿出数据
    // },
    // created() {
    //   // alert('请您开始修改')
    //   const _this =this
    //   axios.get('http://localhost:8082/shoppingcart/findById/'+this.$route.query.id).then(function (resp){                                //调取后端数据,读取到页面相应窗口
    //     _this.ruleForm = resp.data
    //   })
    // },
                                                       //通过id拿出数据
    detail(row,formName) {
      this.$router.push({
        path:'conresourcedetails',                                //页面跳转
        query:{
          resourceid:row.resourceid,
        }
      })
      row.resourceid
      alert(resourceid)
    },
    carDelete(row) {
      axios.delete('http://localhost:8082/shoppingcart/deleteById/'+row.id).then(function (resp)
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
      axios.get('http://localhost:8082/resource/findAll/'+currentPage+'/10').then(function (resp){                                //调取后端数据,读取到页面相应窗口,+this.$route.query.id
        _this.tableData = resp.data.content                                                       //从content中拿出数据
        _this.total=resp.data.totalElements
        // console.log(resp.data)
      })
    }
  },
  created() {
    const _this =this
    axios.get('http://localhost:8082/resource/findAll/1/10').then(function (resp){                                //调取后端数据,读取到页面相应窗口,+this.$route.query.id
      _this.tableData = resp.data.content  //从content中拿出数据
      console.log(resp.data.content)
      _this.total=resp.data.totalElements
    })
  },

  data() {
    return {
      ruleForm: {
        id:'5555555',resourcename: '', resourtype:'', brand:''
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

<style>
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>