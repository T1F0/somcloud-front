<template>
  <div>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane label="简单零件" index="1">简单零件</el-tab-pane>
    <el-tab-pane label="复杂零件" index="2">复杂零件</el-tab-pane>
    <el-tab-pane label="角色管理" index="3">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" index="4">定时任务补偿</el-tab-pane>
    <el-tab-pane label="用户管理" index="5">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" index="6">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" index="7">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" index="8">定时任务补偿</el-tab-pane>
  </el-tabs>
  <el-table :data=demandList border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
    <el-table-column prop="id" label="编号" width="120"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
    <el-table-column prop="demandName" label="资源名称" width="150"></el-table-column>
    <el-table-column prop="demandForm" label="资源形式" width="120"></el-table-column>
    <el-table-column prop="demandType" label="资源型号" width="120"></el-table-column>          <!--"prop:"决定了用数据库的哪一字段的数据-->
    <el-table-column prop="model" label="型号" width="150"></el-table-column>
    <el-table-column prop="contact" label="联系方式" width="120"></el-table-column>
    <el-table-column prop="compony" label="公司名称" width="120"></el-table-column>
    <el-table-column prop="open" label="是否公开" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" text-align="center" width="300">
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
         <el-button type="primary" slot="reference" @click="detail(scope.row)">详情</el-button>
           </span>
      </template>
    </el-table-column>
  </el-table>

  <el-pagination background layout="prev, pager, next" page-size="10" :total="1000" @current-change="page"></el-pagination>
  <el-button type="primary" slot="reference" @click="handler()">进行处理</el-button>
  </div>
</template>

<script>
export default {
  name: "AdmDemandHandler",
  data() {
    return {
      currentTab: null,
      demandList: null
    }
  },
  mounted() {
    this.demandSearch()
  },
  methods:{
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    demandSearch() {
      const that = this
      axios.get('http://localhost:8082/demand/findAll').then(function (resp){
        that.demandList = resp.data
        console.log(resp.data)
      })
    },
    detail(val) {
      this.$router.push({
        path:'demandDetail',                                //页面跳转
        query:{
          demandId:val.id,
        }
      })
    },
  }
}
</script>

<style scoped>

</style>