<template>
  <div>
    <h2>运算匹配结果：（订单化生产方案）</h2>
    <el-table :data="resourceorder" border style="width: 100%">                         <!--el-table表、data数据源数组名称-->
      <el-table-column prop="" label="时间" width="200"></el-table-column>
      <el-table-column prop="resourceid" label="资源编号" width="100"></el-table-column>                                      <!--el-table-column列数据、prop属性、label标签-->
      <el-table-column prop="compony" label="公司" width="200"></el-table-column>
      <el-table-column prop="resourcetype" label="资源形式" width="200"></el-table-column>
      <el-table-column prop="resourceform" label="硬件" width="200"></el-table-column>
    </el-table>
    <div>
      <h2>方案制定：</h2>
      <div>
        <el-row class="demo-autocomplete">
          <el-col :span="12">
            <div class="sub-title">请输入预期总价</div>
            <el-autocomplete
                class="inline-input"
                v-model="totalPrice"
                :fetch-suggestions="priceQuerySearch"
                placeholder="请输入内容"
                @select="handleSelect"
                clearable
            ></el-autocomplete>
          </el-col>
          <el-col :span="12">
            <div class="sub-title">请输入数量</div>
            <el-autocomplete
                class="inline-input"
                v-model="quantity"
                :fetch-suggestions="quatityQuerySearch"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
        <!--:trigger-on-focus="false"-->
        <el-row>
          <el-col :span="12">
            <div class="sub-title">请输入最低价格</div>
            <el-autocomplete
                class="inline-input"
                v-model="minPrice"
                :fetch-suggestions="priceQuerySearch"
                placeholder="请输入内容"
                @select="handleSelect"
                clearable
            ></el-autocomplete>
          </el-col>
          <el-col :span="12">
            <div class="sub-title">请输入最低价格</div>
            <el-autocomplete
                class="inline-input"
                v-model="maxPrice"
                :fetch-suggestions="priceQuerySearch"
                placeholder="请输入内容"
                @select="handleSelect"
                clearable
            ></el-autocomplete>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-button @click="show = 1;findProductByTotalPrice(totalPrice)">精确匹配</el-button>
    <el-button @click="fuzzyFindProductByTotalPrice(minPrice,maxPrice);show = 2">模糊匹配</el-button>
    <div v-if="show === 1">
      找到【{{quantity}}】件总价为【{{totalPrice}}】的方案
    </div>
    <div v-if="show === 2">
      找到【{{quantity}}】件总价大于【{{minPrice}}】，小于【{{maxPrice}}】的方案
    </div>
    <div v-if="show===1 || show ===2">
      <el-table :data="productList" border style="width: 100%" >                         <!--el-table表、data数据源数组名称-->
        <el-table-column prop="firstProduct" label="商品1ID" width="100"></el-table-column>
        <el-table-column prop="secondProduct" label="商品2ID" width="100"></el-table-column>
        <el-table-column prop="secondProduct" label="商品2价格" width="100"></el-table-column>

        <el-table-column prop="secondProduct" label="商品2价格" width="100"></el-table-column>
      </el-table>
    </div>
    <div>
      {{productListAll}}
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      resourceorder:null,
      priceOption: [
        { "value": "60", "address": "长宁区新渔路144号" },
        { "value": "70", "address": "上海市长宁区淞虹路661号" },
        { "value": "80", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
      ],
      totalPrice: '',
      minPrice: '',
      maxPrice: '',
      quantity: '',
      state2: '',
      quatity:[
        {"value":"1"},
        {"value":"2"}
      ],
      show: 0,
      productList:null,
      productListAll: {
        fir: {
          de1: null,
          de2: null
        },
      }
    };
  },
  methods: {
    //点击触发提示
    priceQuerySearch(queryString, cb) {
      var priceOption = this.priceOption;
      var results = queryString ? priceOption.filter(this.createFilter(queryString)) : priceOption;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    //点击触发提示
    quatityQuerySearch(queryString, cb) {
      var quatity = this.quatity;
      var results = queryString ? quatity.filter(this.createFilter(queryString)) : quatity;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    //创建触发提示
    createFilter(queryString) {
      return (quantity) => {
        return (quantity.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    //点击触发
    handleSelect(item) {
      console.log(item);
    },
    //根据总价找商品
    findProductByTotalPrice(val) {
      const that = this
      axios.get('http://localhost:8082/product/findByTotal?totalPrice=' + val)
          .then(function (resp) {
            that.productList = resp.data
            that.findProductById(that.productList)
          })
    },
    //根据最低最高价找商品
    fuzzyFindProductByTotalPrice(val1, val2) {
      const that = this
      axios.get('http://localhost:8082/product/fuzzyFindByTotal?minPrice=' + val1 + '&maxPrice=' + val2)
          .then(function (resp) {
            that.productList = resp.data
            that.findProductById(that.productList)
          })
    },
    //根据商品id找商品
    findProductById(val) {
      const that = this
      for (var i = 1; i < that.productList.length; i++) {
        axios.get('http://localhost:8082/product/findById?id=' + val[i - 1].firstProduct)
            .then(function (resp) {
              that.productListAll.fir.de1 =  resp.data
            })
        axios.get('http://localhost:8082/product/findById?id=' + val[i - 1].secondProduct)
            .then(function (resp) {
              that.productListAll.fir.de2 =  resp.data
            })
      }
      alert(that.productAllList)
    },
  },
  mounted() {
    this.show = 0
  },
  created() {
    const that = this
    axios.get('http://localhost:8082/resource/findAll').then(function (resp) {
      that.resourceorder = resp.data
    })
  }
}
</script>
