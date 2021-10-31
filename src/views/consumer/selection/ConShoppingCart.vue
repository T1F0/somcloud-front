<template xmlns="http://www.w3.org/1999/html">
  <div>
    <tr v-for="item in tabled">
      <td>编号：{{item.resourceid}}</td>
      <td>资源名称：{{item.resourcename}}</td>
      <td>资源形式：{{item.resourceform}}</td>
      <td>资源型号：{{item.resourcetype}}</td>
      <td>型号：{{item.model}}</td>
      <td>联系方式：{{item.contact}}</td>
      <td>公司名称：{{item.compony}}</td>
      <td>是否公开：{{item.open}}</td>
      <td>数量：{{item.number}}</td>
    </tr>
    <el-table :data=tabled border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
      <el-table-column prop="resourceid" label="编号" width="120"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
      <el-table-column prop="resourcename" label="资源名称" width="150"></el-table-column>
      <el-table-column prop="resourceform" label="资源形式" width="120"></el-table-column>
      <el-table-column prop="resourcetype" label="资源型号" width="120"></el-table-column>          <!--"prop:"决定了用数据库的哪一字段的数据-->
      <el-table-column prop="model" label="型号" width="150"></el-table-column>
      <el-table-column prop="contact" label="联系方式" width="120"></el-table-column>
      <el-table-column prop="compony" label="公司名称" width="120"></el-table-column>
      <el-table-column label="数量" width="160">
        <template slot-scope="scope" :model="shoppingcart">
        <el-input-number size="mini" v-model="shoppingcart.number" @change="handleChange" :min="1" :max="10000"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" text-align="center" width="200">
        <template slot-scope="scope">
      <span>
        <el-button type="primary" slot="reference" @click="detail(scope.row)">详情</el-button>
        <el-popover placement="top" width="160" v-model="visible">
          <p>确定移除购物车吗？ <br>
            操作将不可恢复
          </p>
          <div style="text-align: left; margin: 0">
            <el-button @click="cartDelete(scope.row)" type="text" size="small">确定</el-button>
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          </div>
          <el-button slot="reference">移除</el-button>
        </el-popover>
      </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    detail(row, formName) {
      this.$router.push({
        path: 'conresourcedetails',                                //页面跳转
        query: {
          resourceid: row.resourceid,
        }
      })
    },
  cartDelete(row) {
    axios.delete('http://localhost:8082/shoppingcart/deleteById/' + row.resourceid).then(function (resp) {
      alert("商品（id=" + row.resourceid + ")已移除购物车"),
          window.location.reload()
    })
  },
    handleChange(value) {
      console.log(value);
    }
},
    created() {
      const _this = this
      axios.get('http://localhost:8082/shoppingcart/findAll/').then(function (resp) {                                   //调取后端数据,读取到页面相应窗口,+this.$route.query.id
        _this.shoppingcart=resp.data
        console.log(resp.data)
        resp.data.forEach((item)=>{                                   //将输出的数组shoppigcart中的resourceid字段值取出放入编号数组cartResourceId
          _this.cartResourceId.push(item.resourceid);
        });
        _this.cartResourceId.forEach(function(resp) {                 //根据编号数组的值依次在resource表中取出详情页
          axios.get('http://localhost:8082/resource/findById/'+resp).then(function (response) {
            _this.tabled.push(response.data)
            console.log(response.data)
          })
          axios.get('http://localhost:8082/shoppingcart/findById/'+resp).then(function (response) {
            _this.tabled.push(response.data.number)
            console.log(response.data)
          })
        })
      })
    },
    data() {
      return {
        num:[],
        cartResourceId:[],
        tabled:[],
        shoppingcart:null,
        result:null,
        cartTable:null,
        total: null,
        tableData: null,
        cart: null
      }
    },
    mounted: function () {
      this.init()
    }
}
</script>