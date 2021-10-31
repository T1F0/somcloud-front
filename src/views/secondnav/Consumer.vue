<template>

  <el-container style=" border:1px solid #eee">
    <el-aside>
      <el-menu>
        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="资源">              <!--如果有多个相同index，则打开第一个-->
          <template slot="title" ><i class="el-icon-message" ></i>资源</template>
          <el-menu-item-group>
            <el-menu-item index="资源查找"><router-link to="/conresourceretrieve"><div><i class="el-icon-message" ></i>资源查找</div></router-link></el-menu-item>
            <el-menu-item index="我的订单"><router-link to="/conmydemand"><div><i class="el-icon-message" ></i>我的发布</div></router-link></el-menu-item>
            <el-menu-item index="需求发布"><router-link to="/condemandcreat"><div><i class="el-icon-message" ></i>需求发布</div></router-link></el-menu-item>
            <el-menu-item index="自助筛选"><router-link to="/contest"><div><i class="el-icon-message" ></i>自助筛选</div></router-link></el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="服务">
          <template slot="title" ><i class="el-icon-message" ></i>服务</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">我的服务</el-menu-item>
            <el-menu-item index="1-2">我的资源</el-menu-item>
            <el-menu-item index="1-3">组合优化</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="拼单">
          <template slot="title"><i class="el-icon-message" ></i>拼单</template>
          <el-menu-item index="1-1">发布拼单</el-menu-item>
          <el-menu-item index="1-2">处理拼单</el-menu-item>
          <el-menu-item index="1-3">个人中心</el-menu-item>
        </el-submenu>

        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="我的SoM" >
          <template slot="title" ><i class="el-icon-message" ></i>我的SoM</template>
        <el-menu-item index="1-1"><router-link to="/conshoppingcart"><div><i class="el-icon-message" ></i>购物车</div></router-link></el-menu-item>
        <el-menu-item index="1-2"><router-link to="/concollect"><div><i class="el-icon-message" ></i>我的收藏</div></router-link></el-menu-item>
        <el-menu-item index="1-3"><router-link to="/conlike"><div><i class="el-icon-message" ></i>我的喜欢</div></router-link></el-menu-item>
        <el-menu-item index="1-3">处理请求</el-menu-item>
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
<!--        <el-submenu index="2">-->
<!--          <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
<!--          <el-menu-item-group>-->
<!--            <template slot="title">分组一</template>-->
<!--            <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--            <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-menu-item-group title="分组2">-->
<!--            <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-submenu index="2-4">-->
<!--            <template slot="title">选项4</template>-->
<!--            <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
<!--          </el-submenu>-->
<!--        </el-submenu>-->
<!--        <el-submenu index="3">-->
<!--          <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
<!--          <el-menu-item-group>-->
<!--            <template slot="title">分组一</template>-->
<!--            <el-menu-item index="3-1">选项1</el-menu-item>-->
<!--            <el-menu-item index="3-2">选项2</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-menu-item-group title="分组2">-->
<!--            <el-menu-item index="3-3">选项3</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-submenu index="3-4">-->
<!--            <template slot="title">选项4</template>-->
<!--            <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
<!--          </el-submenu>-->
<!--        </el-submenu>-->
      </el-menu>
    </el-aside>
    <el-container>
      <router-view></router-view>
<!--      <el-header style="text-align: right; font-size: 12px">-->
<!--        <el-dropdown>-->
<!--          <i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--          <el-dropdown-menu slot="dropdown">-->
<!--            <el-dropdown-item>查看</el-dropdown-item>-->
<!--            <el-dropdown-item>新增</el-dropdown-item>-->
<!--            <el-dropdown-item>删除</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </el-dropdown>-->
<!--        <span>王小虎</span>-->
<!--      </el-header>-->

<!--      <el-main>-->
<!--        <el-table :data="tableData">-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
<!--      </el-main>-->
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

<style>

h1{
  color: white;
}
.el-container{
  position: relative;
  }
.el-aside{
  left:0px;
  width:200px;
  color: #333;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-submenu {
  background-color: #B3C0D1;
  text-align: left;
}
.el-menu-item-group
.template{
  font: white;
  font-size: 40px;
}
.el-menu-item{
  /*font: white;*/
  font-size: 40px;
  background-color: #99a9bf;
}
</style>
