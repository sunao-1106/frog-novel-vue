<template>
  <div>
    <!-- 头部 -->
    <el-row>
      <el-col :span="20" :offset="2" style="border: 1px red solid;">
        <index-header></index-header>
      </el-col>
      <!-- 主体 -->
      <!-- 这里可以加也可以不加height，不加height当前col高度随内容增加 -->
      <el-col :span="20" :offset="2" class="content" style="border: 1px red solid;">
          <index-content></index-content>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IndexHeader from "@/components/IndexHeader"
import IndexContent from '@/components/IndexContent'
export default {
  components: { IndexHeader, IndexContent }
};
</script>

<style scoped>

</style>