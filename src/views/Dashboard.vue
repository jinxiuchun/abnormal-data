<template>
  <el-card class="introduce">
    <div class="order">
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>今日新增故障</span>
          </div>
        </template>
        <div class="item">65</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>本月新增故障</span>
          </div>
        </template>
        <div class="item">36271</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">
            <span>总计故障</span>
          </div>
        </template>
        <div class="item">6378923</div>
      </el-card>
    </div>
    <div id="zoom"></div>
  </el-card>
</template>

<script>

</script>

<style scoped>
  .introduce .order {
    display: flex;
    margin-bottom: 50px;
  }
  .introduce .order .order-item {
    flex: 1;
    margin-right: 20px;
  }
  .introduce .order .order-item:last-child{
    margin-right: 0;
  }
  #zoom {
    min-height: 300px;
  }
</style>