<template>
  <div>
    <el-row>
      <!-- 填充样式 -->
      <el-col :span="2">
        <div class="index-header" style="height:167px"></div>
      </el-col>
      <!-- 头部 -->
      <el-col :span="20" class="index-header">
        <index-header></index-header>
      </el-col>
      <!-- 填充样式 -->
      <el-col :span="2">
        <div class="index-header" style="height:167px"></div>
      </el-col>
      <!-- 主体 -->
      <!-- 这里可以加也可以不加height，不加height当前col高度随内容增加 -->
      <el-col :span="20" :offset="2" class="content">
        <router-view></router-view>
      </el-col>
            <el-col :span="20" :offset="2" class="bottom">
              <index-bottom></index-bottom>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IndexHeader from "@/components/IndexHeader";
import IndexBottom from "@/components/IndexBottom";
export default {
  components: { IndexHeader, IndexBottom }
};
</script>

<style scoped>
.index-header {
  background-color: white;
  box-shadow: 5px 1px 3px rgba(160, 124, 124, 0.147);
}
</style>