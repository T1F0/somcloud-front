<template>

  <div style="height: 800px;width: 60%">
    <el-steps :active="3" direction="vertical" align-center style="padding: 100px">
      <el-step title="创建需求工单" :description="'创建用户id为：'+orderDetail.id+',创建时间为'+orderDetail.createTime" style="height: 10px"></el-step>
      <el-step title="指定管理员处理" :description="'被指定管理员id为：'+orderDetail.id+',创建时间为'+orderDetail.adminConfirmTime"></el-step>
      <el-step title="管理员确认处理" :description="'处理管理员工号：'+orderDetail.id+',创建时间为'+orderDetail.adminSubmitTime"></el-step>
      <el-step title="管理员处理完成，方案已交由用户查看" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.createTime"></el-step>
      <el-button type="text" @click="detail" style="width: 10px">点击查看方案</el-button>
      <el-step title="用户查看制造方案" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.createTime"></el-step>
      <el-step title="用户确认方案一" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.consumerConfirmTime"></el-step>
      <el-step title="用户不认同方案池所有方案" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.createTime"></el-step>
      <el-step title="开始交由厂家处理" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.createTime"></el-step>
      <el-step title="用户确认" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.createTime"></el-step>
      <el-step title="用户不认同" description="时间：2021-05-21，备注："></el-step>
      <el-step title="开始交由厂家处理" :description="'备注：'+orderDetail.id+',创建时间为'+orderDetail.adminAssignTime"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "WorkOrderDetail",
  data() {
    return{
      orderDetail: {
        createTime: null,
        adminConfirmTime: null,
        adminSubmitTime: null,
        consumerConfirmTime: null,
        adminAssignTime: null
      }
    }
  },
  mounted() {
    this.detailSearch(this.$route.query.orderId)
  },
  methods:{
    detailSearch(val){
      const that = this
      axios.get('http://localhost:8082/order/findById?id='+val).then(function (resp){
        that.orderDetail = resp.data
      })
    }
  }
}
</script>

<style scoped>

</style>