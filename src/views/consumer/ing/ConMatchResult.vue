<template>
  <div>
  <p style="text-decoration-color: lightskyblue">多维度结果展示：</p>
    <div id="left-image"  v-for="item in result" style="width: 333px;height: 600px">
      整体方案{{item.id}}:优先考虑效率<br>
      1<br>
      2<br>
      3<br>
      4<br>
      5<br>
      6<br>
      7<br>
      8<br>
      9<br
        10<br>
      11<br>
      效率：<el-progress :text-inside="true" :stroke-width="26" :percentage="item.p1" status="success"></el-progress>
      精度：<el-progress :text-inside="true" :stroke-width="24" :percentage="item.p2" status="success"></el-progress>
      时间成本：<el-progress :text-inside="true" :stroke-width="24" :percentage="item.p3" status="success"></el-progress>
      经济成本：<el-progress :text-inside="true" :stroke-width="24" :percentage="item.p4" status="success"></el-progress>
      经济成本：<el-progress :text-inside="true" :stroke-width="24" :percentage="item.p5" status="success"></el-progress>
      个性化：<el-progress :text-inside="true" :stroke-width="22" :percentage="item.p6" status="warning"></el-progress>
      总体衡量：<el-progress :text-inside="true" :stroke-width="20" :percentage="item.p7" status="exception"></el-progress>
      <el-button type="primary" slot="reference" @click="join()"><img src="https://img0.baidu.com/it/u=682336211,1354261576&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px">确定制造</el-button>
    </div>
<div>
  <el-button type="primary" slot="reference" @click="collect()"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >修改需求</el-button>
  <el-button type="primary" slot="reference" @click="like()"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >修改加工步骤</el-button>
  <el-button type="primary" slot="reference"><img src="https://img0.baidu.com/it/u=3714195528,1824069361&fm=26&fmt=auto&gp=0.jpg" width="20px" height="20px" >修改排序条件</el-button>
  <el-button type="primary" slot="reference">
    <a target="_blank" href="https://www.alipay.com/">
      <img width="20px" height="20px" border="0" src="https://img2.baidu.com/it/u=7575227,2930931420&fm=26&fmt=auto&gp=0.jpg" alt="我要下单" title="下单"/>我要下单
    </a>
  </el-button>
</div>
  </div>
</template>

<script>
export default {
  name: "ConTest",
  return(){
    let imgUrl;
    imgUrl="/src/assets/Auto.png"
  },
  data(){
    return{
      result:[
        {"id":1,"p1":50,"p2":60,"p3":70,"p4":80,"p5":90,"p6":67,"p7":56,"p8":76,},
        {"id":1,"p1":70,"p2":80,"p3":70,"p4":60,"p5":50,"p6":87,"p7":87,"p8":87,},
        {"id":1,"p1":60,"p2":70,"p3":80,"p4":80,"p5":90,"p6":90,"p7":70,"p8":90,},
        {"id":1,"p1":70,"p2":70,"p3":80,"p4":90,"p5":50,"p6":80,"p7":80,"p8":70,},
      ]

    }
  }

}
</script>

<style scoped>

</style>