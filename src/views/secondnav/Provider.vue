<template>

  <el-container style=" border:1px solid #eee">
    <el-aside width="200px" >
      <el-menu >
        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="资源管理" >              <!--如果有多个相同index，则打开第一个-->
          <template slot="title" ><i class="el-icon-message" ></i>资源管理</template>
          <el-menu-item-group>
            <el-menu-item index="资源发布"><router-link to="/proresourcecreat"><div><i class="el-icon-message" ></i>资源发布</div></router-link></el-menu-item>
            <el-menu-item index="我的发布"><router-link to="/promyresource"><div><i class="el-icon-message" ></i>我的发布</div></router-link></el-menu-item>
            <el-menu-item index="硬件资源"><router-link to="/protest"><div><i class="el-icon-message" ></i>硬件资源</div></router-link></el-menu-item>
            <el-menu-item index="软件资源"><router-link to="/protest"><div><i class="el-icon-message" ></i>软件资源</div></router-link></el-menu-item>
<!--            <el-menu-item index="1-3"><router-link to="/update"><div>资源发布</div></router-link></el-menu-item>-->
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="服务管理" >
          <template slot="title" ><i class="el-icon-message" ></i>服务管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">服务发布</el-menu-item>
            <el-menu-item index="1-2">我的发布</el-menu-item>
            <el-menu-item index="1-3"><router-link to="/prodemandretrieve"><div>需求查看</div></router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>


        <el-submenu index="服务组合" >
          <template slot="title" ><i class="el-icon-message" ></i>服务组合</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">我的服务</el-menu-item>
            <el-menu-item index="1-2">我的资源</el-menu-item>
            <el-menu-item index="1-3">组合优化</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <div style="background-color: #42b983;height: 5px"/>

        <el-submenu index="我的SoM" >
          <template slot="title" ><i class="el-icon-message" ></i>我的SoM</template>
          <el-menu-item index="我想制造"><router-link to="/prowantmanu"><div><i class="el-icon-message" ></i>我想制造</div></router-link></el-menu-item>
          <el-menu-item index="我想服务"><router-link to="/prowantservice"><div><i class="el-icon-message" ></i>我想服务</div></router-link></el-menu-item>
          <el-menu-item index="我的喜欢"><router-link to="/prolike"><div><i class="el-icon-message" ></i>我的喜欢</div></router-link></el-menu-item>
          <el-menu-item index="处理请求"><router-link to="/prohandler"><div><i class="el-icon-message" ></i>处理请求</div></router-link></el-menu-item>
        </el-submenu>


        <div style="background-color: #42b983;height: 5px"/>

        <el-submenu index="任务管理" >
          <template slot="title" ><i class="el-icon-menu" ></i>任务管理</template>
          <el-menu-item index="1-3">数据中心</el-menu-item>
        </el-submenu>

        <el-submenu index="调度管理" >
          <template slot="title" ><i class="el-icon-menu" ></i>调度管理</template>
        </el-submenu>

        <el-submenu index="实时制造服务" >
          <template slot="title" ><i class="el-icon-menu" ></i>实时制造服务</template>
          <el-menu-item index="1-3">资源变更</el-menu-item>
          <el-menu-item index="1-3">资源协同</el-menu-item>
          <el-menu-item index="1-3">资源进度</el-menu-item>
          <el-menu-item index="1-3">人力资源</el-menu-item>

          <el-menu-item index="1-3">更多</el-menu-item>
        </el-submenu>

        <el-submenu index="合作制造" >
          <template slot="title" ><i class="el-icon-menu" ></i>合作制造</template>
          <el-menu-item index="1-3">发布合作</el-menu-item>
          <el-menu-item index="1-3">处理请求</el-menu-item>
        </el-submenu>

        <div style="background-color: #42b983;height: 5px"/>
        <el-submenu index="企业认证" >
          <template slot="title" ><i class="el-icon-setting" ></i>企业认证</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">企业信息</el-menu-item>
            <el-menu-item index="1-1">企业能力</el-menu-item>
            <el-menu-item index="1-1">能力评估</el-menu-item>
            <el-menu-item index="1-3">更多</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="关于" >
          <template slot="title" ><i class="el-icon-setting" ></i>关于</template>
        </el-submenu>

        <el-submenu index="其他" >
          <template slot="title" ><i class="el-icon-setting" ></i>其他</template>
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
