<template>

  <el-container style=" border:1px solid #eee">
    <el-aside width="200px" >
      <el-menu>
        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="资源" >              <!--如果有多个相同index，则打开第一个-->
          <template slot="title" ><i class="el-icon-message" ></i>资源列表</template>
          <el-menu-item-group>
            <el-menu-item index="资源查看"><router-link to="/admresourceretrieve"><div><i class="el-icon-message" ></i>资源查看</div></router-link></el-menu-item>
            <el-menu-item index="资源处理"><router-link to="/admresourcehandler"><div><i class="el-icon-message" ></i>资源处理</div></router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="需求" >              <!--如果有多个相同index，则打开第一个-->
          <template slot="title" ><i class="el-icon-message" ></i>需求列表</template>
          <el-menu-item-group>
            <el-menu-item index="需求查看"><router-link to="/admdemandretrieve"><div><i class="el-icon-message" ></i>需求查看</div></router-link></el-menu-item>
            <el-menu-item index="需求处理"><router-link to="/admdemandhandler"><div><i class="el-icon-message" ></i>需求处理</div></router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
       <div style="background-color: #42b983;height: 5px"/>

        <el-submenu index="工单中心" >              <!--如果有多个相同index，则打开第一个-->
          <template slot="title" ><i class="el-icon-message" ></i>需求列表</template>
          <el-menu-item-group>
            <el-menu-item index="工单查看"><router-link to="/workOrderRetrieve"><div><i class="el-icon-message" ></i>工单查看</div></router-link></el-menu-item>
            <el-menu-item index="工单详情"><router-link to="/workOrderDetail"><div><i class="el-icon-message" ></i>工单详情</div></router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <div style="background-color: #42b983;height: 5px"/>


        <el-submenu index="实时服务" >
          <template slot="title" ><i class="el-icon-message" ></i>实时服务</template>
          <el-menu-item index="1-3">资源变更</el-menu-item>
          <el-menu-item index="1-3">资源协同</el-menu-item>
          <el-menu-item index="1-3">资源进度</el-menu-item>
          <el-menu-item index="1-3">更多</el-menu-item>
        </el-submenu>

        <el-submenu index="数据中心" >
          <template slot="title" ><i class="el-icon-message" ></i>数据中心</template>
        </el-submenu>

        <el-submenu index="我的订单" >
          <template slot="title" ><i class="el-icon-message" ></i>我的订单</template>
          <el-menu-item index="1-1"><router-link to="/conmyorder"><div>我的订单</div></router-link></el-menu-item>
          <el-menu-item index="软件资源"><router-link to="/conmatchresult"><div><i class="el-icon-message" ></i>匹配结果</div></router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="物流中心" >
          <template slot="title" ><i class="el-icon-message" ></i>物流中心</template>
        </el-submenu>

        <el-submenu index="系统管理" >
          <template slot="title" ><i class="el-icon-message" ></i>系统管理</template>
        </el-submenu>

        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="关于" >
          <template slot="title" ><i class="el-icon-message" ></i>关于</template>
        </el-submenu>

        <el-submenu index="其他" >
          <template slot="title" ><i class="el-icon-message" ></i>其他</template>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(10).fill(item)
    }
  }
};
</script>