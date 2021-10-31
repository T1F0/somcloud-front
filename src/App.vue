<template>
  <div>
     <div id="top-left">
       <a href="/"><img src="../src/assets/som.png"  style="width:48px;height:48px;margin-top:8px;border-top-left-radius: 8px;border-bottom-right-radius: 8px"></a>
       <l><a href="/">SoM云</a></l>
        <l><a href="/"><i class="el-icon-s-home">主页</i></a></l>
        <l><router-link to="/proinstructions"><i class="el-icon-s-shop" ></i>提供者</router-link></l>
        <l><router-link to="/coninstructions"><i class="el-icon-s-goods" ></i>需求者</router-link></l>
        <l><router-link :to=admurl><i class="el-icon-s-platform" ></i>管理员</router-link></l>
        <l><router-link to="/cons"><i class="el-icon-warning" ></i>举报</router-link></l>
        <l><router-link to="/co"><i class="el-icon-warning" ></i>声明</router-link></l>    <!--防不当交易-->
     </div>

      <div id="top-right">
        <el-dropdown>
          <div id="button">
            <el-col style="color: #eeeeee;font-size: small">
              <el-avatar :size="40" :src="circleUrl"></el-avatar>
            </el-col>
<!--            <img :src="tableData.userheadportraiturl" style="width: 50px;height: 50px;border-radius: 50%;">-->
          </div>
          <el-dropdown-menu>
            <el-dropdown-item style="text-align: center;font-size: x-large">{{nickname}}</el-dropdown-item>          <!--slot="dropdown"-->
            <router-link  :to=loginstate tag=a><el-dropdown-item>登录</el-dropdown-item></router-link>              <!--http://somc.top:8080//login-->
<!--            <a href="http://somc.top:8080/login" target="_blank" rel="noopener">登录</a>-->
            <router-link :to="{path: '/register'}"><el-dropdown-item>注册</el-dropdown-item></router-link>
            <router-link :to="{path: '/userzone'}"><el-dropdown-item>个人中心</el-dropdown-item></router-link>
            <div  @click="logout()" style="color: #eeeeee"><el-dropdown-item>退出登录</el-dropdown-item></div>
            <el-dropdown-item>账号管理 </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <l><router-link to="/consume"><i class="el-icon-warning-outline"></i>关于</router-link></l>
        <l><router-link to="/service"><i class="el-icon-phone-outline"></i>客服</router-link></l>
        <l><router-link to="/prosoftwareresource"><i class="el-icon-magic-stick"></i>测试</router-link></l>
      </div>

      <div id="nav">
        <div style="height:3px;width:100%;background-color:#42b983"></div>
        <!--        <div class="line"></div>-->
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 background-color="#99a9bf" text-color="#fff" active-text-color="ffd04b" text-align="center">
          <el-menu-item index="1">处理中心</el-menu-item>

          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3"><a href="https://www.bilibili.com" target="_blank">消息中心</a></el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"><router-link to="/about">订单管理</router-link></a></el-menu-item>
          <el-menu-item index="5"><a href="https://www.ele.me" target="_blank"><router-link to="/bout">About</router-link></a></el-menu-item>
          <el-menu-item index="6"><a href="https://www.ele.me" target="_blank"><router-link to="/ma">开发者</router-link></a></el-menu-item>
          <el-menu-item index="7"><a href="https://www.ele.me" target="_blank"><router-link to="/man">使用说明</router-link></a></el-menu-item>
          <el-menu-item index="8"><a href="https://www.ele.me" target="_blank"><router-link to="/ain">用户使用协议</router-link></a></el-menu-item>
          <el-menu-item index="9"><router-link to="/in">法务</router-link></el-menu-item>
          <el-menu-item index="10"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>

    <div id="app">
      <router-view/>
    </div>

    <div id="right">
      <a href="/"><img src="../src/assets/Yes.png" id="rightbutton"></a>
      <a href="/about"><img src="../src/assets/Help.png" id="rightbutton"></a>
      <a href="/about"><img src="../src/assets/Service.jpg" id="rightbutton"></a>
      <a href="/about"><img src="../src/assets/Wechat.jpg" id="rightbutton"></a>
      <el-dropdown>
        <img src="../src/assets/QQ.jpg" id="rightbutton">
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item id="dropdown">
            <img src="../src/assets/QQ.jpg" style="width: 150px;height: 150px">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes">
              <img border="0" src="http://wpa.qq.com/pa?p=2::53" alt="点击与客服联系" title="点击与客服联系"/>
            </a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <a href="/about"><img src="../src/assets/Bilibili.jpg" id="rightbutton"></a>
      <a href="/about"><img src="../src/assets/Email.jpg" id="rightbutton"></a>
      <a href="/about"><img src="../src/assets/Twitter.png" id="rightbutton"></a>
      <!--        <router-link to="/el"><div id="title-desc"><img src="../src/assets/Hongkong.jpg" id="title-img">关于</div></router-link>-->
    </div>
    <div id="bottom">
      <div id="bottom-tips">
        <div id="bottom-items" style="font-size: x-large">用户服务</div>
        <div id="bottom-items">关于我们</div>
        <div id="bottom-items">联系我们</div>
        <div id="bottom-items">广告服务</div>
        <div id="bottom-items">测试</div>
      </div>
      <div id="bottom-tips">
        <div id="bottom-items" style="font-size: x-large">平台应用</div>
        <div id="bottom-items">平台应用使用帮助</div>
        <div id="bottom-items">SoM云资源共享平台公众号</div>
        <div id="bottom-items">SoM云供求</div>
        <div id="bottom-items">测试</div>
      </div>
      <div id="bottom-tips">
        <div id="bottom-items" style="font-size: x-large">友情链接</div>
        <div id="bottom-items">大连市工业大学技术交流中心</div>
        <div id="bottom-items">大连金普新区企业联合会</div>
        <div id="bottom-items">大连市泡崖街道</div>
        <div id="bottom-items">大连工业大学机械学院</div>
      </div>
      <div style="alignment: center; width: 80%;height: 1px;margin: 20px; margin-left:150px; background-color: #42b983"></div>
      <div style="text-align: center; color: #eeeeee">版权所有：大连工业大学机械工程与自动化学院小宋同学 |
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">www.SoM.cn</a>（未注册域名，请访问
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">http://10.10.44.184:8080/</a>
        ）  |  辽ICP备1785353号<br>
        （工作时间：8:30-22:00）
        888-888-8888
        公安备案号11010502030143
        京网文号
        ©1999-2021hhh有限公司
        <br>
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">在线客服</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">招贤纳士</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">开发助手</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">经营性网站备案信息</a>&emsp;
        <a target="_blank" href="http://www.bjjubao.org/" style="color: lightsalmon">北京互联网违法和不良信息举报中心</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">家长监护</a>&emsp;
        <a target="_blank" href="https://www.12377.cn/" style="color: lightsalmon">中国互联网举报中心</a>&emsp;
        <a target="_blank" href="http://www.cyberpolice.cn/wfjb/" style="color: lightsalmon">网络110报警服务</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">Chrome商店下载</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">版权与免责声明</a>&emsp;
        <a target="_blank" href="http://10.10.44.184:8080/" style="color: lightsalmon">版权申诉</a>&emsp;
        </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const that = this
    that.admin = JSON.parse(window.localStorage.getItem('access-admin'))
    axios.get('http://somc.top/userdata/findById/'+that.admin.userid).then(function (resp) {                //调取后端数据,读取到页面相应窗口,
      that.tableData = resp.data
      if (that.admin.userid==null){
      } else {
        that.loginstate="disabled"
        that.nickname = that.admin.userName
        if (resp.data.userheadportraiturl == null) {
        }else {
          that.circleUrl = resp.data.userheadportraiturl
         }
        }
    })
        if(that.admin.admaut!=1){}
        else{
          that.admurl="/adminstructions"
        }
  },
  data() {
    return {
      nickname:"未登录",
      loginstate:"/login",
      hh:null,
      tableData:null,
      admin:null,
      admurl:"/adminstructionsfake",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$store.dispatch("clearToken")
      {        // window.localStorage.removeItem("token"),
        // localStorage.clear();
        localStorage.clear("token");   //清除token
        window.location.reload()
        alert("退出成功")
      }
    }
  }
}
</script>

<style>
#button{
  width: 100px;
  height: 46.35px;
  border: 0;
  /*border-radius: 20px;*/
  margin-top: 13px;
  font-size: x-large;
  /*color: lightsalmon;*/
  display: inline-block;
  outline: #d3dce6;
}

#top-left {
  width: 66%;
  height: 62.5px;
  position: fixed;
  text-align: center;
  top: 0;
  background-color: #2c3e50;
  z-index: 9999 /*保持此块在最上层*/
}
#top-left l{
  width: 130px;
  height: 46.35px;
  border: 0;
  /*border-radius: 20px;*/
  margin-top: 13px;
  font-size: x-large;
  /*color: lightsalmon;*/
  display: inline-block;
  outline: #d3dce6;
}
#top-right {
  width: 34%;
  height: 62.5px;
  position: fixed;
  text-align: center;
  top: 0;
  right: 0;
  background-color: #2c3e50;
  z-index:9999                /*保持此块在最上层*/
}
#top-right l{
  width: 100px;
  height: 46.35px;
  border: 0;
  /*border-radius: 20px;*/
  /*margin-top: 3px;*/
  font-size: x-large;
  /*color: lightsalmon;*/
  display: inline-block;
  outline: #d3dce6;
}
.el-dropdown{
}
.el-dropdown-menu{
  width: 200px;
  height: 200px;
  text-align:left;
  /*background-image: url("https://img0.baidu.com/it/u=1022315255,2561577412&fm=26&fmt=auto&gp=0.jpg");*/
}
.el-dropdown-menu__item{
  background: #2c3e50;
}

#app {
  height: 3000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 50px
}
#nav {
  width: 100%;
  border-radius: 20px;
  margin-top: 62px;
  align-content: center;
  overflow: hidden;
}
#nav a {
  padding:10px;
  font-weight: bold;
  text-align: center;
  font-size:20px;
  color: #eeeeee;
}
#nav a.router-link-exact-active {
  color: lightsalmon;
}
.router-link-active{
  color: lightsalmon;
}

#right{
  width: 50px;
  height: 250px;
  position: fixed;
  right: 0;
  top: 300px;
  z-index:9999;                /*保持此块在最上层*/
}
#rightbutton{
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 50%;
}
#bottom{
  bottom: 0px;
  position: relative;
  width: 100%;
  height: 350px;
  /*padding: 100px;*/
  background-color: #2c3e50;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  /*border-bottom-left-radius: 20px;*/
  /*border-bottom-right-radius: 20px;*/
}
#bottom-tips{
  width: 250px;
  height: 200px;
  margin-left: 250px;
  display: inline-block;
}
#bottom-items{
  margin: 20px;
  color: #eeeeee;
}
/*.top-left:hover+.top-right{*/
/*  background: #000000;*/
/*}*/
/*伪类、伪元素，放在前边会不起作用，只有放在后边绿色才会生效*/
    /*使当前状态的router标签所在文字改变状态,*/
.router-link-active{font-size: 30px;text-align: center; color: #42b983;width: 200%; height: 1000px;text-decoration: none;}
.router-link-active span::before{ content: ''; width: 100%; height: 1px; display: block; }
.router-link :hover {color: lightsalmon;}      /*:hover{content: ''; width: 100%; height: 1px; display: block;}绝密bug*/
a {text-decoration: none;color: #eeeeee}
</style>