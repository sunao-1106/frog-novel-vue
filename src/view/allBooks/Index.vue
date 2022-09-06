<template>
  <div>
    <el-row>
      <!-- 小说检索栏 -->
      <el-col style="border-radius: 10px 10px 10px 10px;background-color:white;margin-top:20px">
        <search-filed></search-filed>
      </el-col>
      <!-- 检索列表 -->
      <el-col style="border-radius: 10px 10px 10px 10px;background-color:white;margin-top:20px">
        <search-list></search-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SearchFiled from "@/components/SearchFiled";
import SearchList from "@/components/SearchList";
export default {
  components: { SearchFiled, SearchList }
};
</script>

<style scoped>

</style>
