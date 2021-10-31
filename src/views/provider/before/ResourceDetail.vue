<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div id="left-image"><img v-bind:src="tableData.imgurl"></div>
    <div id="right-text">
        <div>编号：{{tableData.resourceid}}</div><br>
        <div>资源名称：{{tableData.resourcename}}</div><br>
        <div>资源形式：{{tableData.resourceform}}</div><br>
        <div>资源型号：{{tableData.resourcetype}}</div><br>
        <div>型号：{{tableData.model}}</div><br>
        <div>联系方式：{{tableData.contact}}</div><br>
        <div>公司名称：{{tableData.compony}}</div><br>
        <div>是否公开：{{tableData.open}}</div><br>
    </div>
    <div>
       <el-button type="primary" slot="reference" @click="jointest()"><img src="https://img0.baidu.com/it/u=682336211,1354261576&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px">加入购物车</el-button>
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
    return {
      tableData:null
    }
  },
  created()
  {
    const _this = this
    axios.get('http://localhost:8082/resource/findById/' + this.$route.query.resourceid).then(function (resp) {                //调取后端数据,读取到页面相应窗口,
      _this.tableData = resp.data                                                                                       //从content中拿出数据
      console.log(resp)
    })
  },
  methods:{
    // join() {
    //   const that =this
    //   axios.get('http://localhost:8082/resource/findById/'+this.$route.query.id).then(function (resp){              //怎么抓取数据行中的id？                 //调取后端数据,读取到页面相应窗口
    //     that.ruleForm = resp.data                                                                                      //已获取数据ruleForm
    //     axios.post('http://localhost:8082/shoppingcart/save',that.ruleForm).then(function (resp) {                                   //上传后端数据
    //       console.log(resp)
    //       alert('商品（id='+resp.data.id+')已加入购物车')                                                                   //ruleForm数组已上传至数据库，数据上传成功，此资源已加入购物车
    //     })
    //   })
    // },



    // jointest() {
    //   const that =this
    //   axios.get('http://localhost:8082/resource/findById/'+this.$route.query.resourceid).then(function (resp){
    //     that.ruleForm = resp.data.resourceid
    //     axios.post('http://localhost:8082/shoppingcart/save',that.ruleForm).then(function (resp) {
    //       console.log(resp)
    //       alert('商品（id='+resp.data.resourceid+')已加入购物车(测试)')
    //     })
    //   })
    // },

    jointest() {
      const that =this
      axios.get('http://localhost:8082/resource/findById/'+this.$route.query.resourceid).then(function (resp){
        that.rule = resp.data
        console.log(resp.data)
        axios.post('http://localhost:8082/shoppingcart/save',that.rule).then(function (resp) {
          console.log(resp)
          alert(resp.data+'! 商品（id='+that.rule.resourceid+')已加入购物车(测试)')
        })
      })
    },


    collect() {
      const that =this
      axios.get('http://localhost:8082/resource/findById/'+this.$route.query.resourceid).then(function (resp){
        that.ruleForm = resp.data
        axios.post('http://localhost:8082/concollect/save',that.ruleForm).then(function (resp) {
          console.log(resp)
          alert(resp.data+'! 商品（id='+that.ruleForm.resourceid+')已加入收藏,数量为')
        })
      })
    },
    like() {
      const that =this
      axios.get('http://localhost:8082/resource/findById/'+this.$route.query.resourceid).then(function (resp){
        that.ruleForm = resp.data
        axios.post('http://localhost:8082/conlike/save',that.ruleForm).then(function (resp) {
          console.log(resp)
          alert(resp.data+'! 商品（id='+that.ruleForm.resourceid+')已加入我的喜欢')
        })
      })
    },
  }
}
</script>

<style>
/*#top-details{*/
/*  width: 1200px;*/
/*  height: 550px;*/
/*}*/
#left-image{
  position:relative;
  width: 500px;
  height: 500px;
  display:inline-block;
  left: 0;
  margin-top:30px;
  margin-left:30px;
  margin-top:30px;
  margin-bottom:50px;
  padding-top: 20px;
  padding-left: 20px;
  background-color: #e5e9f2;
  border-radius: 30px;
  overflow:hidden;
  text-align: left;
}
#right-text{
  position:relative;
  width: 500px;
  height: 500px;
  display:inline-block;
  top: 0;
  right: 0;
  margin-left:30px;
  margin-bottom: 30px;
  padding-top: 20px;
  padding-left: 20px;
  background-color: #e5e9f2;
  border-radius: 30px;
  text-align: left;


}
</style>