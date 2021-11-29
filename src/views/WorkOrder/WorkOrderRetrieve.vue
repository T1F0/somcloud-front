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
    <el-table :data=orderList border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
      <el-table-column label="工单编号" prop="id"  width="120"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
      <el-table-column label="资源编号"prop="resourceId"  width="150"></el-table-column>
      <el-table-column label="需求编号" prop="demandId"  width="120"></el-table-column>
      <el-table-column label="状态" prop="status"  width="120"></el-table-column>          <!--"prop:"决定了用数据库的哪一字段的数据-->
      <el-table-column label="创建用户" prop="createUserId"  width="150"></el-table-column>
      <el-table-column label="创建时间" prop="createTime"  width="120"></el-table-column>
      <el-table-column label="管理员确认时间" prop="adminConfirmTime"  width="120"></el-table-column>
      <el-table-column label="方案" prop="scheme"  width="120"></el-table-column>
      <el-table-column label="管理员提交时间" prop="adminSubmitTime"  width="120"></el-table-column>
      <el-table-column label="用户确认时间" prop="consumerConfirmTime"  width="120"></el-table-column>
      <el-table-column label="管理员派发时间" prop="adminAssignTime"  width="120"></el-table-column>
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
      orderList: null
    }
  },
  mounted() {
    this.orderSearch()
  },
  methods:{
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    orderSearch() {
      const that = this
      axios.get('http://localhost:8082/order/findAll').then(function (resp){
        that.orderList = resp.data
        console.log(resp.data)
      })
    },
    detail(val) {
      this.$router.push({
        path:'workOrderDetail',                                //页面跳转
        query:{
          orderId:val.id,
        }
      })
    },
  }
}
</script>

<style scoped>

</style>