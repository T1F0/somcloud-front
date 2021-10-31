<template>    <!--待用-->
  <div id="bookSearch">


    <el-table :data="tableData" stripe border style="width:100%" highlight-current-row>
                                                                                           //type="selection"
      <el-table-column prop="id" label="编号" align="center" min-width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="brand" label="品牌" align="center" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.brand}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type" label="车型" align="center" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.type}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="style" label="款式" align="center" min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.style}}</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>