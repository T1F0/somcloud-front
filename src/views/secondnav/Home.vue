<template>
  <div class="home">
      <div class="block">
<!--        <span class="demonstration">默认 Hover 指示器触发</span>-->
        <el-carousel  width="4000px" height="300px" >
          <el-carousel-item v-for="item in urls" :key="item"
          style="background-image: url('https://cdn.pixabay.com/photo/2020/07/06/14/04/shanghai-5377163__340.jpg');
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          border-bottom-left-radius: 50px;
          border-bottom-right-radius: 50px;">
            <h3 class="small"><el-image  v-bind:src="item"  style="height: 300px"></el-image></h3>
          </el-carousel-item>
        </el-carousel>
      </div>
<!--    <div class="demo-image__placeholder">-->
<!--      <div class="block">-->
<!--        <el-image :src="src"  style="width: 400px;height: 300px"></el-image>-->
<!--      </div>-->
<!--      <el-scrollbar>-->
<!--      <div class="demo-image__lazy">-->
<!--        <el-image v-for="url in urls" :key="url" :src="url" lazy style="width: 100px;height: 100px"></el-image>-->
<!--      </div>-->
<!--      </el-scrollbar>-->
<!--    </div>-->
<!--    <span id="topfont">欢迎您来到SoM云</span>-->
    <h2>尊敬的VIP用户{{admin.userName}}（您的UID（用户ID）为{{admin.userid}},{{admin.token}}），欢迎您来到SoM云，点击下方按钮查看使用说明，<br>
      <router-link to="/proinstructions" style="color: lightsalmon">我是提供者</router-link>，
      <router-link to="/coninstructions" style="color: lightsalmon">我是需求者</router-link>，
      <router-link to="/adminstructions" style="color: lightsalmon">我是管理员</router-link>
    </h2>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      admin:null,
      bgim:'https://img2.baidu.com/it/u=3239961547,355961644&fm=26&fmt=auto&gp=0.jpg',
      urls: [
        'https://img2.baidu.com/it/u=3239961547,355961644&fm=26&fmt=auto&gp=0.jpg',
        'https://cdn.pixabay.com/photo/2019/08/15/17/56/production-4408573__340.jpg',
        'https://cdn.pixabay.com/photo/2018/03/10/09/49/city-3213676__340.jpg',
        'https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087393__340.jpg',
          'https://cdn.pixabay.com/photo/2015/06/05/16/46/industry-798642__340.jpg',
          'https://cdn.pixabay.com/photo/2020/03/18/06/54/smartphone-4942918__340.jpg',
      ]
    }
  },
  created() {
    this.admin = JSON.parse(window.localStorage.getItem('access-admin'))
  },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#topfont{
  margin: 50px;
  font-size: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
