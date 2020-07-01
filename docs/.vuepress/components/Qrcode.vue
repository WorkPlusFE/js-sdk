<template>
  <div>
    <el-popover
      placement="top-start"
      title="请使用 WorkPlus 扫一扫"
      :visible-arrow="true"
      popper-class="w6s-popover"
      trigger="hover">
      <qrcode value="https://lanhuapp.com/web/#/item/project/board?pid=8c79db40-3842-4550-80e0-eddf0da01942" :options="{ width: 200 }"></qrcode>
      <el-button
        icon="el-icon-caret-right"
        type="text" 
        slot="reference"
      >
        扫码运行
      </el-button>
    </el-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>

<style>
  .w6s-popover {
    padding: 12px 5px 5px;
  }

  .w6s-popover .el-popover__title {
    text-align: center;
    margin-bottom: 0;
    font-size: 15px;
  }

  .el-icon-caret-right {
    font-size: 16px;
    margin-right: -5px;
  }
</style>