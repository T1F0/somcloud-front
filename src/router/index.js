import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/secondnav/Home.vue'
import Consumer from '../views/secondnav/Consumer'
  import Update from "../views/consumer/before/Update";
import Provider from "../views/secondnav/Provider";


import ProviderHardwareResource from "../views/provider/before/ProviderHardwareResource";
import ProviderSoftwareResource from "../views/provider/before/ProviderSoftwareResource";
import ProviderMyResource from "../views/provider/before/ProviderMyResource";
import ProviderResourceCreat from "../views/provider/before/ProviderResourceCreat";
import ProDemandRetrieve from "../views/provider/before/ProDemandRetrieve";
import DemandDetail from "../views/consumer/before/DemandDetail";
import ProWantManu from "../views/provider/selection/ProWantManu";
import ProWantService from "../views/provider/selection/ProWantService";
import ProLike from "../views/provider/selection/ProLike";
import ProHandler from "../views/provider/selection/ProHandler";
import ProInstructions from "../views/provider/before/ProInstructions";
import ProTest from "../views/provider/ProTest";

import ConDemandCreat from "../views/consumer/before/ConDemandCreat";
import ConMyDemand from "../views/consumer/before/ConMyDemand";
import ConResourceRetrieve from "../views/consumer/before/ConResourceRetrieve";
import ConShoppingCart from "../views/consumer/selection/ConShoppingCart";
import ConCollect from "../views/consumer/selection/ConCollect";
import ConLike from "../views/consumer/selection/ConLike";
import ConMyOrder from "../views/consumer/ing/ConMyOrder";
import ResourceDetail from "../views/provider/before/ResourceDetail"
import ConMatchResult from "../views/consumer/ing/ConMatchResult";
import ConInstructions from "../views/consumer/before/ConInstructions";
import ConTest from "../views/consumer/ConTest";

import Administrator from "../views/secondnav/Administrator";
import AdmResourceRetrieve from "../views/administrator/AdmResourceRetrieve";
import AdmResourceHandler from "../views/administrator/AdmResourceHandler";
import AdmDemandRetrieve from "../views/administrator/AdmDemandRetrieve";
import AdmDemandHandler from "../views/administrator/AdmDemandHandler";
import AdmInstructions from "../views/administrator/AdmInstructions";
import AdmInstructionsfake from "../views/administrator/AdmInstructionsFake";



import Service from "../views/secondnav/Service";

import Login from "../views/user/Login"
import Register from "../views/user/Register"
import Else from "../views/user/Else"
import UserZone from "../views/user/UserZone";
import WorkOrderRetrieve from "../views/WorkOrder/WorkOrderRetrieve";
import WorkOrderDetail from "../views/WorkOrder/WorkOrderDetail";

Vue.use(VueRouter)

const routes = [
  {path:'/register', component: Register},
  {path:'/login', component: Login},
  {path: '/userzone',component: UserZone},
  {path:'/else',component: Else},
  {path: '/', component: Home},
  {path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/secondnav/About.vue')
  },
  {
    path: '/provider',
    // redirect:'/provider/fe',
    component: Provider,
    children: [
      {path: '/resourceDetail',component: ResourceDetail},
      {path: '/proresourcecreat', component: ProviderResourceCreat },
      {path: '/Prohardwareresource',component: ProviderHardwareResource},
      {path: '/Prosoftwareresource',component: ProviderSoftwareResource},
      {path: '/promyresource',component: ProviderMyResource},
      {path:'/prodemandretrieve',component: ProDemandRetrieve},
      {path: '/prowantmanu',component: ProWantManu},
      {path: '/prowantservice',component: ProWantService},
      {path: '/prolike',component: ProLike},
      {path: '/prohandler',component: ProHandler},
      {path: '/protest',component: ProTest},
      {path: '/proinstructions',component: ProInstructions}
    ], // '/update'路由既显示Home组件又显示Users子组件
    // redirect: '/update' // 通过重定向当访问'/'时自动跳转到包含Users组件的页面
    // children:[ {path:'update',component:Update}]
  },
  {path: '/consumer', component: Consumer,
    children: [
      {path: '/demandDetail',component: DemandDetail},
      {path: '/condemandcreat', component: ConDemandCreat },
      {path: '/conmydemand',component: ConMyDemand},
      {path: '/conresourceretrieve',component: ConResourceRetrieve},
      {path: '/conshoppingcart',component: ConShoppingCart},
      {path: '/concollect',component: ConCollect},
      {path: '/conlike',component: ConLike},
      {path: '/conmyorder',component: ConMyOrder},
      {path: '/contest',component: ConTest},
      {path: '/conmatchresult',component: ConMatchResult},
      {path: '/coninstructions',component: ConInstructions}
    ]
  },
  {path: '/administrator',component: Administrator,
    children: [
      {path: '/admresourceretrieve',component: AdmResourceRetrieve},
      {path: '/admresourcehandler',component:AdmResourceHandler},
      {path: '/admdemandretrieve',component:AdmDemandRetrieve},
      {path: '/admdemandhandler',component: AdmDemandHandler},
      {path: '/adminstructions',component: AdmInstructions},
      //工单
      {path: '/workOrderRetrieve',component: WorkOrderRetrieve},
      {path: '/workOrderDetail',component: WorkOrderDetail},
    ]
  },
  {path: '/adminstructionsfake',component: AdmInstructionsfake},
  {path: '/update', component: Update},
  // {path: '/main',name: 'Main',component: Main},
  {path: 'service', component: Service},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {       //to是将要进入的路由，from是即将离开的路由，next()是进入下一个管道，next()一定要执行，否则将出现页面留白的现象。                    //每次跳转都要检验，全局守卫
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-admin')
    next()
  } else {
    let admin = JSON.parse(window.localStorage.getItem('access-admin'))
    if (!admin) {
      next({path:'/login'})
    } else {
      axios({                                                           //校验token合法性
        url: 'http://localhost:8082/users/checkToken',
        method: 'get',
        headers: {
          token: admin.token
        }
      }).then((resp) => {
        if (!resp.data) {           //if(response.data == "fail"){
          alert('登录信息失效')
          console.log('校验失败')
          next({path: '/loginerror'}
          )
        }
      })
      next()       //特别注意：设置成别的就报错（死循环）
    }
  }
})

export default router
