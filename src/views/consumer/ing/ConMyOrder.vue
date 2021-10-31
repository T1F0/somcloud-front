<template>
  <div id="steps">
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
          v-model="value3"
          type="datetime"
          placeholder="选择日期时间"
          default-time="12:00:00">
      </el-date-picker>
    </div>
  <el-steps :space="1500" :active="10" finish-status="success">
    <el-step title="待确认"></el-step>
    <el-step title="加工中"></el-step>
    <el-step title="待发货"></el-step>
    <el-step title="待收货"></el-step>
    <el-step title="物流中心"></el-step>
    <el-step title="查看物流"></el-step>
    <el-step title="确认收货"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤3"></el-step>
    <el-step title="已完成"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤3"></el-step>
  </el-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      value3: ''
    };
  }
};
</script>

<style scoped>
#steps{
  width: 100%;
  margin: 90px
}

</style>